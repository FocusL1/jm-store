# DATABASE CATALOG

## Estado

🚧 En desarrollo

---

# Objetivo

Este documento sirve como índice oficial de todos los scripts SQL utilizados por JM-STORE.

Aquí se registra el propósito de cada archivo de la carpeta `/database`, el orden correcto de ejecución y su estado.

---

# Estructura

001_schema.sql
Creación de la estructura inicial de la base de datos.

Estado:
✅ Finalizado

---

002_seed.sql
Datos iniciales para pruebas.

Estado:
✅ Finalizado

---

003_storage.sql
Creación de buckets de Supabase Storage.

Estado:
✅ Finalizado

---

004_policies.sql
Políticas RLS iniciales.

Estado:
✅ Finalizado

---

005_schema_v2.sql
Ampliación del esquema principal.

Estado:
✅ Finalizado

---

006_seed_v2.sql
Datos adicionales de prueba.

Estado:
✅ Finalizado

---

007_catalog_schema.sql
Tablas relacionadas con el catálogo.

Estado:
🚧 En desarrollo

---

008_catalog_seed.sql
Datos iniciales del catálogo.

Estado:
🚧 En desarrollo

---

# Orden de ejecución

1. 001_schema.sql
2. 002_seed.sql
3. 003_storage.sql
4. 004_policies.sql
5. 005_schema_v2.sql
6. 006_seed_v2.sql
7. 007_catalog_schema.sql
8. 008_catalog_seed.sql

---

# Convenciones

- Nunca modificar un script ya ejecutado en producción.
- Cada cambio estructural importante deberá crear un nuevo archivo SQL.
- Los nombres usarán numeración secuencial de tres dígitos.

Ejemplo:

009_orders_schema.sql

010_orders_seed.sql

011_reviews_schema.sql

012_reviews_seed.sql

---

# Próximos scripts

009_orders_schema.sql

010_orders_seed.sql

011_reviews_schema.sql

012_reviews_seed.sql

013_coupons_schema.sql

014_notifications_schema.sql

015_indexes.sql

016_functions.sql

017_triggers.sql

018_reports.sql

---

# Versionado

| Archivo | Estado |
|----------|---------|
|001|✅|
|002|✅|
|003|✅|
|004|✅|
|005|✅|
|006|✅|
|007|🚧|
|008|🚧|

---

JM-STORE Database Catalog v1.0