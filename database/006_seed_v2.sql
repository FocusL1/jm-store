/*
===========================================================
 JM-STORE SEED V2
 Version: v0.2.0-alpha
===========================================================
*/

/*
===========================================================
 CURRENCIES
===========================================================
*/

insert into currencies (code, symbol, name)
values
('EUR','€','Euro'),
('USD','$','US Dollar'),
('COP','$','Peso Colombiano'),
('PLN','zł','Polish Zloty')
on conflict (code) do nothing;


/*
===========================================================
 BRANDS
===========================================================
*/

insert into brands
(name, slug)
values

('Sony','sony'),
('Microsoft','microsoft'),
('Nintendo','nintendo'),
('Apple','apple'),
('Samsung','samsung'),
('Xiaomi','xiaomi'),
('DJI','dji'),
('Canon','canon'),
('Nikon','nikon'),
('Asus','asus'),
('MSI','msi'),
('Lenovo','lenovo'),
('HP','hp'),
('Dell','dell'),
('Acer','acer'),
('Logitech','logitech'),
('Razer','razer'),
('Corsair','corsair'),
('JBL','jbl'),
('Bose','bose')

on conflict (slug) do nothing;


/*
===========================================================
 MAIN CATEGORIES
===========================================================
*/

insert into categories
(name, slug)
values

('Technology','technology'),
('Home','home')

on conflict (slug) do nothing;


/*
===========================================================
 SUBCATEGORIES
===========================================================
*/

insert into categories
(parent_id,name,slug)

select

id,
'Gaming',
'gaming'

from categories
where slug='technology'

on conflict (slug) do nothing;

insert into categories
(parent_id,name,slug)

select

id,
'Phones',
'phones'

from categories
where slug='technology'

on conflict (slug) do nothing;

insert into categories
(parent_id,name,slug)

select

id,
'Laptops',
'laptops'

from categories
where slug='technology'

on conflict (slug) do nothing;

insert into categories
(parent_id,name,slug)

select

id,
'Audio',
'audio'

from categories
where slug='technology'

on conflict (slug) do nothing;

insert into categories
(parent_id,name,slug)

select

id,
'Cameras',
'cameras'

from categories
where slug='technology'

on conflict (slug) do nothing;

insert into categories
(parent_id,name,slug)

select

id,
'Accessories',
'accessories'

from categories
where slug='technology'

on conflict (slug) do nothing;

insert into categories
(parent_id,name,slug)

select

id,
'Smartwatches',
'smartwatches'

from categories
where slug='technology'

on conflict (slug) do nothing;


/*
===========================================================
 PRODUCT ATTRIBUTES
===========================================================
*/

insert into product_attributes
(name,slug)
values

('Color','color'),
('Storage','storage'),
('RAM','ram'),
('Processor','processor'),
('Graphics Card','gpu'),
('Screen','screen'),
('Battery','battery'),
('Camera','camera'),
('Weight','weight'),
('Warranty','warranty')

on conflict (slug) do nothing;