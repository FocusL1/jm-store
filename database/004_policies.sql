/*
===========================================================
 JM-STORE SECURITY POLICIES
 Version: v0.2.0-alpha
===========================================================
*/

/*
===========================================================
 ENABLE RLS
===========================================================
*/

alter table brands enable row level security;
alter table categories enable row level security;
alter table currencies enable row level security;
alter table products enable row level security;
alter table product_images enable row level security;


/*
===========================================================
 PUBLIC READ ACCESS
===========================================================
*/

create policy "Public can read brands"
on brands
for select
using (true);

create policy "Public can read categories"
on categories
for select
using (true);

create policy "Public can read currencies"
on currencies
for select
using (true);

create policy "Public can read products"
on products
for select
using (active = true);

create policy "Public can read product images"
on product_images
for select
using (true);


/*
===========================================================
 AUTHENTICATED USERS
===========================================================
*/

create policy "Authenticated users can manage brands"
on brands
for all
to authenticated
using (true)
with check (true);

create policy "Authenticated users can manage categories"
on categories
for all
to authenticated
using (true)
with check (true);

create policy "Authenticated users can manage currencies"
on currencies
for all
to authenticated
using (true)
with check (true);

create policy "Authenticated users can manage products"
on products
for all
to authenticated
using (true)
with check (true);

create policy "Authenticated users can manage product images"
on product_images
for all
to authenticated
using (true)
with check (true);