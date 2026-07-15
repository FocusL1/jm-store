# 📚 CATALOG

## Estado

🚧 En desarrollo

---

# Objetivo

Este documento describe toda la arquitectura del catálogo de JM-STORE.

Aquí se documentarán todas las entidades relacionadas con productos, marcas, categorías, filtros, navegación, promociones y organización del catálogo.

Este documento será la referencia oficial para cualquier modificación del catálogo.

---

# Tecnologías

- Next.js
- TypeScript
- Supabase
- PostgreSQL

---

# Arquitectura

El catálogo estará compuesto por las siguientes entidades principales:

- Products
- Brands
- Categories

En futuras versiones se agregarán:

- Collections
- Tags
- Attributes
- Variants
- Filters
- Search Index

---

# Tabla: brands

Descripción:

Almacena todas las marcas disponibles en la tienda.

Campos principales:

- id
- name
- slug
- logo
- featured
- active
- created_at

---

# Tabla: categories

Descripción:

Organiza todos los productos del catálogo.

Campos principales:

- id
- name
- slug
- image
- featured
- active
- created_at

---

# Relaciones

products
│
├── brand
└── category

---

# Convenciones

Todos los slugs estarán en minúsculas.

Ejemplos:

apple

samsung

gaming

phones

smartwatches

---

# Roadmap

Sprint 7

- Brands
- Categories

Sprint 8

- Filtros

Sprint 9

- Búsqueda

Sprint 10

- Mega menú

Sprint 11

- Variantes

Sprint 12

- Colecciones

---

# Versionado

| Fecha | Versión | Cambios |
|--------|----------|----------|
| Sprint 7 | v0.2.0-alpha | Arquitectura inicial del catálogo |

---

# Notas

Toda modificación del catálogo deberá actualizar este documento antes de realizar cambios en la base de datos.