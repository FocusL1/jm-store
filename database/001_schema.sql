/*
===========================================================
 JM-STORE DATABASE SCHEMA
 Version: v0.2.0-alpha
===========================================================
*/

/*
===========================================================
 EXTENSIONS
===========================================================
*/

create extension if not exists "pgcrypto";

/*
===========================================================
 TABLE: BRANDS
===========================================================
*/

create table if not exists brands (

    id uuid primary key default gen_random_uuid(),

    name text not null,

    slug text unique not null,

    logo text,

    website text,

    active boolean default true,

    created_at timestamptz default now(),

    updated_at timestamptz default now()

);

/*
===========================================================
 TABLE: CATEGORIES
===========================================================
*/

create table if not exists categories (

    id uuid primary key default gen_random_uuid(),

    name text not null,

    slug text unique not null,

    image text,

    icon text,

    active boolean default true,

    created_at timestamptz default now(),

    updated_at timestamptz default now()

);

/*
===========================================================
 TABLE: CURRENCIES
===========================================================
*/

create table if not exists currencies (

    id uuid primary key default gen_random_uuid(),

    code text unique not null,

    symbol text not null,

    name text not null,

    active boolean default true,

    created_at timestamptz default now()

);

/*
===========================================================
 TABLE: PRODUCTS
===========================================================
*/

create table if not exists products (

    id uuid primary key default gen_random_uuid(),

    brand_id uuid references brands(id),

    category_id uuid references categories(id),

    name text not null,

    slug text unique not null,

    short_description text,

    description text,

    sku text,

    barcode text,

    currency_id uuid references currencies(id),

    price numeric(12,2) not null,

    old_price numeric(12,2),

    cost_price numeric(12,2),

    stock integer default 0,

    stock_min integer default 0,

    weight numeric(10,2),

    width numeric(10,2),

    height numeric(10,2),

    depth numeric(10,2),

    featured boolean default false,

    flash boolean default false,

    best_seller boolean default false,

    is_new boolean default false,

    active boolean default true,

    seo_title text,

    seo_description text,

    created_at timestamptz default now(),

    updated_at timestamptz default now()

);

/*
===========================================================
 TABLE: PRODUCT_IMAGES
===========================================================
*/

create table if not exists product_images (

    id uuid primary key default gen_random_uuid(),

    product_id uuid references products(id) on delete cascade,

    image_url text not null,

    alt text,

    sort_order integer default 0,

    created_at timestamptz default now()

);