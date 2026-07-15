insert into brands
(name,slug,featured)
values

('Apple','apple',true),

('Samsung','samsung',true),

('Sony','sony',true),

('Xiaomi','xiaomi',true),

('Lenovo','lenovo',true),

('Garmin','garmin',true),

('Logitech','logitech',true),

('Canon','canon',true),

('Nintendo','nintendo',true),

('Dyson','dyson',true)

on conflict do nothing;



insert into categories
(name,slug,featured)
values

('Phones','phones',true),

('Laptops','laptops',true),

('Gaming','gaming',true),

('Audio','audio',true),

('Accessories','accessories',true),

('Smartwatches','smartwatches',true),

('Cameras','cameras',true),

('Home','home',true)

on conflict do nothing;/*
==========================================================
JM-STORE
Catalog Seed
==========================================================
*/

----------------------------------------------------------
-- BRANDS
----------------------------------------------------------

INSERT INTO brands
(name,slug,logo,featured)
VALUES

('Apple','apple','/brands/apple.png',true),

('Samsung','samsung','/brands/samsung.png',true),

('Sony','sony','/brands/sony.png',true),

('Logitech','logitech','/brands/logitech.png',true),

('Garmin','garmin','/brands/garmin.png',true);

----------------------------------------------------------
-- CATEGORIES
----------------------------------------------------------

INSERT INTO categories
(name,slug,image,featured)
VALUES

('Phones','phones','/categories/phones.jpg',true),

('Laptops','laptops','/categories/laptops.jpg',true),

('Gaming','gaming','/categories/gaming.jpg',true),

('Audio','audio','/categories/audio.jpg',true),

('Smartwatches','smartwatches','/categories/smartwatches.jpg',true),

('Home','home','/categories/home.jpg',true),

('Accessories','accessories','/categories/accessories.jpg',true);