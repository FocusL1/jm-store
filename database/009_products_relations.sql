/*
==========================================================
JM-STORE
Products Relations
Version 1.0
==========================================================
*/

----------------------------------------------------------
-- ELIMINAR CAMPOS ANTIGUOS
----------------------------------------------------------

ALTER TABLE products
DROP COLUMN IF EXISTS brand;

ALTER TABLE products
DROP COLUMN IF EXISTS category;

----------------------------------------------------------
-- NUEVAS RELACIONES
----------------------------------------------------------

ALTER TABLE products
ADD COLUMN brand_id UUID;

ALTER TABLE products
ADD COLUMN category_id UUID;

----------------------------------------------------------
-- FOREIGN KEYS
----------------------------------------------------------

ALTER TABLE products
ADD CONSTRAINT fk_products_brand
FOREIGN KEY (brand_id)
REFERENCES brands(id)
ON DELETE SET NULL;

ALTER TABLE products
ADD CONSTRAINT fk_products_category
FOREIGN KEY (category_id)
REFERENCES categories(id)
ON DELETE SET NULL;

----------------------------------------------------------
-- ÍNDICES
----------------------------------------------------------

CREATE INDEX IF NOT EXISTS idx_products_brand
ON products(brand_id);

CREATE INDEX IF NOT EXISTS idx_products_category
ON products(category_id);