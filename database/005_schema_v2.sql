/*
===========================================================
 JM-STORE DATABASE SCHEMA V2
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
 BRANDS
===========================================================
*/

create table if not exists brands (

    id uuid primary key default gen_random_uuid(),

    name text not null,

    slug text not null unique,

    logo text,

    website text,

    description text,

    country text,

    active boolean default true,

    created_at timestamptz default now(),

    updated_at timestamptz default now()

);

/*
===========================================================
 CATEGORIES
===========================================================
*/

create table if not exists categories (

    id uuid primary key default gen_random_uuid(),

    parent_id uuid references categories(id),

    name text not null,

    slug text not null unique,

    image text,

    icon text,

    description text,

    sort_order integer default 0,

    active boolean default true,

    created_at timestamptz default now(),

    updated_at timestamptz default now()

);

/*
===========================================================
 CURRENCIES
===========================================================
*/

create table if not exists currencies (

    id uuid primary key default gen_random_uuid(),

    code varchar(5) not null unique,

    symbol varchar(10) not null,

    name text not null,

    active boolean default true,

    created_at timestamptz default now()

);

/*
===========================================================
 PRODUCTS
===========================================================
*/

create table if not exists products (

    id uuid primary key default gen_random_uuid(),

    brand_id uuid references brands(id),

    category_id uuid references categories(id),

    currency_id uuid references currencies(id),

    name text not null,

    slug text not null unique,

    short_description text,

    description text,

    sku text unique,

    barcode text,

    price numeric(12,2) not null,

    old_price numeric(12,2),

    cost_price numeric(12,2),

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
 PRODUCT IMAGES
===========================================================
*/

create table if not exists product_images (

    id uuid primary key default gen_random_uuid(),

    product_id uuid references products(id) on delete cascade,

    image_url text not null,

    alt text,

    is_cover boolean default false,

    sort_order integer default 0,

    created_at timestamptz default now()

);

/*
===========================================================
 PRODUCT ATTRIBUTES
===========================================================
*/

create table if not exists product_attributes (

    id uuid primary key default gen_random_uuid(),

    name text not null,

    slug text unique not null,

    active boolean default true

);

/*
===========================================================
 PRODUCT ATTRIBUTE VALUES
===========================================================
*/

create table if not exists product_attribute_values (

    id uuid primary key default gen_random_uuid(),

    product_id uuid references products(id) on delete cascade,

    attribute_id uuid references product_attributes(id),

    value text not null

);