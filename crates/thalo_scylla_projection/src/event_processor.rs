use std::marker::PhantomData;

use async_trait::async_trait;
use chrono::{DateTime, Utc};
use scylla::cql_to_rust::{FromCqlValError, FromRowError};
use scylla::frame::response::result::Row;
use scylla::FromRow;
use serde::de::DeserializeOwned;
use serde::{Deserialize, Serialize};
use serde_json::{Map, Value};
use uuid::Uuid;

#[async_trait]
pub trait EventProcessor {
    type Event;
    type Error;

    async fn handle_event(&self, ev: RecordedEvent<Self::Event>) -> Result<(), Self::Error>;
}

#[derive(Clone, Debug, Default, PartialEq, Eq, Serialize, Deserialize)]
pub struct RecordedEvent<E> {
    pub stream_name: String,
    pub sequence: u64,
    pub global_sequence: u64,
    pub id: Uuid,
    pub event_type: String,
    pub data: Map<String, Value>,
    pub timestamp: DateTime<Utc>,
    pub bucket: u64,
    phantom: PhantomData<E>,
}

impl<E> RecordedEvent<E> {
    pub fn event(&self) -> serde_json::Result<E>
    where
        E: DeserializeOwned,
    {
        let event_json = serde_json::json!({
            &self.event_type: self.data
        });

        serde_json::from_value(event_json)
    }
}

impl<E> FromRow for RecordedEvent<E> {
    fn from_row(row: Row) -> Result<Self, FromRowError> {
        let (stream_name, sequence, global_sequence, id, event_type, data, timestamp, bucket): (
            String,
            i64,
            i64,
            Uuid,
            String,
            Vec<u8>,
            DateTime<Utc>,
            i64,
        ) = FromRow::from_row(row)?;
        let sequence = sequence
            .try_into()
            .map_err(|_err| FromRowError::BadCqlVal {
                err: FromCqlValError::BadVal,
                column: 1,
            })?;
        let global_sequence =
            global_sequence
                .try_into()
                .map_err(|_err| FromRowError::BadCqlVal {
                    err: FromCqlValError::BadVal,
                    column: 2,
                })?;
        let data = serde_json::from_slice(&data).map_err(|_err| FromRowError::BadCqlVal {
            err: FromCqlValError::BadVal,
            column: 5,
        })?;
        let bucket = bucket.try_into().map_err(|_err| FromRowError::BadCqlVal {
            err: FromCqlValError::BadVal,
            column: 7,
        })?;

        Ok(RecordedEvent {
            stream_name,
            sequence,
            global_sequence,
            id,
            event_type,
            data,
            timestamp,
            bucket,
            phantom: PhantomData,
        })
    }
}