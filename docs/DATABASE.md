# 🗄️ JM-STORE DATABASE

**Versión:** v0.3.0-alpha

---

# Estado

🟢 Arquitectura del catálogo consolidada

---

# Objetivo

Este documento describe la arquitectura oficial de la base de datos de JM-STORE.

Toda modificación estructural deberá documentarse aquí antes de implementarse en producción.

---

# Tecnologías

- PostgreSQL
- Supabase
- Row Level Security (RLS)
- Supabase Storage
- Authentication

---

# Arquitectura

La base de datos está organizada por módulos independientes para facilitar el crecimiento del proyecto.

- Catálogo
- Inventario
- Ventas
- Usuarios
- Pagos
- Marketing
- Configuración

---

# Módulos

## Catálogo

- brands
- categories
- currencies
- products
- product_images

## Inventario

- inventory *(próximamente)*

## Ventas

- orders *(próximamente)*
- order_items *(próximamente)*

## Clientes

- profiles *(próximamente)*
- addresses *(próximamente)*

## Marketing

- reviews *(próximamente)*
- coupons *(próximamente)*

---

# Relaciones

```
brands
    │
    └──────────────┐
                   │
                   ▼
              products
                   ▲
                   │
    ┌──────────────┘
    │
categories

currencies
      │
      ▼
products

products
      │
      ▼
product_images
```

---

# Relaciones SQL

products.brand_id

→ brands.id

products.category_id

→ categories.id

---

# Tablas actuales

| Tabla | Estado |
|--------|--------|
| brands | ✅ |
| categories | ✅ |
| currencies | ✅ |
| products | ✅ |
| product_images | ✅ |

---

# Índices

Actualmente existen índices para:

- products.brand_id
- products.category_id

Próximamente:

- slug
- featured
- active
- created_at

---

# Storage

Buckets definidos:

- products
- brands
- categories
- avatars
- documents

---

# Seguridad

RLS habilitado para:

- brands
- categories
- currencies
- products
- product_images

---

# Scripts SQL

| Archivo | Estado |
|----------|--------|
|001_schema.sql|✅|
|002_seed.sql|✅|
|003_storage.sql|✅|
|004_policies.sql|✅|
|005_schema_v2.sql|✅|
|006_seed_v2.sql|✅|
|007_catalog_schema.sql|🚧|
|008_catalog_seed.sql|🚧|
|009_products_relations.sql|🚧|
|010_products_update.sql|🚧|

---

# Próximas tablas

- product_attributes
- product_attribute_values
- product_variants
- inventory
- exchange_rates
- reviews
- coupons
- wishlists
- notifications

---

# Convenciones

- Todas las claves primarias usan UUID.
- Todos los registros tendrán `created_at`.
- Siempre que sea posible existirá `updated_at`.
- Los slugs serán únicos y en minúsculas.
- Las relaciones se realizarán mediante claves foráneas.

---

# Roadmap Base de Datos

Sprint 1

- Base inicial

Sprint 2

- Productos

Sprint 3

- Catálogo

Sprint 4

- Relaciones

Sprint 5

- Inventario

Sprint 6

- Pedidos

Sprint 7

- Usuarios

Sprint 8

- Pagos

Sprint 9

- Marketing

---

# Versionado

| Versión | Cambios |
|----------|----------|
|v0.1.0|Fundación|
|v0.2.0|Catálogo inicial|
|v0.3.0|Relaciones Brands y Categories|

---

# Notas

Este documento es la referencia oficial de la arquitectura de la base de datos de JM-STORE.