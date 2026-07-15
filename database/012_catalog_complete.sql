/*
==========================================================
JM-STORE
012_catalog_complete.sql
Version: 1.0
Sprint 12
==========================================================
*/

----------------------------------------------------------
-- EXTENSIONES
----------------------------------------------------------

create extension if not exists pgcrypto;

----------------------------------------------------------
-- BRANDS
----------------------------------------------------------

create table if not exists public.brands (

    id uuid primary key default gen_random_uuid(),

    name text not null unique,

    slug text not null unique,

    logo text,

    description text,

    featured boolean default false,

    active boolean default true,

    created_at timestamptz default now(),

    updated_at timestamptz default now()

);

----------------------------------------------------------
-- CATEGORIES
----------------------------------------------------------

create table if not exists public.categories (

    id uuid primary key default gen_random_uuid(),

    name text not null unique,

    slug text not null unique,

    image text,

    description text,

    featured boolean default false,

    active boolean default true,

    created_at timestamptz default now(),

    updated_at timestamptz default now()

);

----------------------------------------------------------
-- INDEXES
----------------------------------------------------------

create index if not exists idx_brands_slug
on public.brands(slug);

create index if not exists idx_categories_slug
on public.categories(slug);

create index if not exists idx_brands_active
on public.brands(active);

create index if not exists idx_categories_active
on public.categories(active);

----------------------------------------------------------
-- UPDATED_AT
----------------------------------------------------------

create or replace function public.update_updated_at_column()
returns trigger
language plpgsql
as
$$
begin
    new.updated_at = now();
    return new;
end;
$$;

drop trigger if exists trg_brands_updated_at on public.brands;

create trigger trg_brands_updated_at

before update

on public.brands

for each row

execute procedure public.update_updated_at_column();

drop trigger if exists trg_categories_updated_at on public.categories;

create trigger trg_categories_updated_at

before update

on public.categories

for each row

execute procedure public.update_updated_at_column();

----------------------------------------------------------
-- RLS
----------------------------------------------------------

alter table public.brands enable row level security;

alter table public.categories enable row level security;

----------------------------------------------------------
-- POLICIES
----------------------------------------------------------

drop policy if exists "Brands are public"
on public.brands;

create policy "Brands are public"

on public.brands

for select

using (true);

drop policy if exists "Categories are public"
on public.categories;

create policy "Categories are public"

on public.categories

for select

using (true);

----------------------------------------------------------
-- SEED BRANDS
----------------------------------------------------------

insert into public.brands
(name, slug, featured)

values

('Sony','sony',true),
('Apple','apple',true),
('Samsung','samsung',true),
('Xiaomi','xiaomi',true),
('Garmin','garmin',true)

on conflict (slug) do nothing;

----------------------------------------------------------
-- SEED CATEGORIES
----------------------------------------------------------

insert into public.categories
(name, slug, featured)

values

('Gaming','gaming',true),
('Smartphones','smartphones',true),
('Smartwatches','smartwatches',true),
('Laptops','laptops',true),
('Audio','audio',true),
('Accesorios','accessories',true)

on conflict (slug) do nothing;

----------------------------------------------------------
-- END
----------------------------------------------------------