/*
==========================================================
JM-STORE
Currency Schema
==========================================================
*/

CREATE TABLE IF NOT EXISTS currencies (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    code TEXT UNIQUE NOT NULL,

    symbol TEXT NOT NULL,

    name TEXT NOT NULL,

    exchange_rate NUMERIC(12,4) DEFAULT 1,

    active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMPTZ DEFAULT now(),

    updated_at TIMESTAMPTZ DEFAULT now()

);