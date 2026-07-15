/*
==========================================================
JM-STORE
Products Update
==========================================================
*/

UPDATE products
SET
brand_id = (
    SELECT id
    FROM brands
    WHERE slug = 'sony'
),
category_id = (
    SELECT id
    FROM categories
    WHERE slug = 'gaming'
)
WHERE slug = 'playstation-5-slim';