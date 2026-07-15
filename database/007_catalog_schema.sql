create table if not exists brands (

    id uuid primary key default gen_random_uuid(),

    name text not null unique,

    slug text not null unique,

    logo text,

    featured boolean default false,

    active boolean default true,

    created_at timestamptz default now()

);



create table if not exists categories (

    id uuid primary key default gen_random_uuid(),

    name text not null unique,

    slug text not null unique,

    image text,

    featured boolean default false,

    active boolean default true,

    created_at timestamptz default now()

);/*
==========================================================
JM-STORE
Catalog Schema
Version 1.0
==========================================================
*/

----------------------------------------------------------
-- BRANDS
----------------------------------------------------------

CREATE TABLE IF NOT EXISTS brands (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name TEXT NOT NULL,

    slug TEXT UNIQUE NOT NULL,

    logo TEXT,

    description TEXT,

    featured BOOLEAN DEFAULT FALSE,

    active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMPTZ DEFAULT now(),

    updated_at TIMESTAMPTZ DEFAULT now()

);

----------------------------------------------------------
-- CATEGORIES
----------------------------------------------------------

CREATE TABLE IF NOT EXISTS categories (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name TEXT NOT NULL,

    slug TEXT UNIQUE NOT NULL,

    image TEXT,

    description TEXT,

    featured BOOLEAN DEFAULT FALSE,

    active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMPTZ DEFAULT now(),

    updated_at TIMESTAMPTZ DEFAULT now()

);