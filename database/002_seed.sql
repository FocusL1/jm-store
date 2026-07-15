/*
===========================================================
 JM-STORE SEED DATA
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

insert into brands (name, slug)
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
('Logitech','logitech'),
('Razer','razer'),
('Corsair','corsair')

on conflict (slug) do nothing;


/*
===========================================================
 CATEGORIES
===========================================================
*/

insert into categories (name, slug)
values

('Gaming','gaming'),
('Phones','phones'),
('Laptops','laptops'),
('Audio','audio'),
('Cameras','cameras'),
('Accessories','accessories'),
('Smartwatches','smartwatches'),
('Home','home')

on conflict (slug) do nothing;