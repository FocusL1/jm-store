# 🗄️ Base de Datos - JM-STORE

## Descripción

Esta carpeta contiene todos los scripts oficiales relacionados con la base de datos de JM-STORE.

Ningún cambio importante en la base de datos debe realizarse directamente en Supabase sin que exista previamente su correspondiente script SQL dentro de esta carpeta.

De esta forma mantenemos:

- Historial de cambios.
- Versionado.
- Documentación.
- Reproducibilidad del proyecto.

---

# Estructura

## 001_schema.sql

Contiene la estructura principal de la base de datos:

- Tablas
- Relaciones
- Índices
- Restricciones
- Comentarios

---

## 002_seed.sql

Contiene los datos iniciales necesarios para el funcionamiento del sistema.

Ejemplos:

- Monedas
- Marcas
- Categorías
- Configuración inicial

---

## 003_storage.sql

Configuración del almacenamiento en Supabase Storage.

Incluye:

- Buckets
- Políticas
- Organización recomendada de archivos

---

## 004_policies.sql

Contiene todas las políticas de seguridad (Row Level Security - RLS).

Incluye:

- Permisos de administradores
- Permisos de clientes
- Acceso a tablas
- Acceso al Storage

---

# Convenciones

Todos los scripts SQL deberán seguir estas reglas:

- Utilizar nombres en inglés.
- Documentar las tablas importantes.
- Utilizar claves primarias UUID.
- Mantener consistencia en nombres de columnas.
- Evitar datos duplicados mediante relaciones.

---

# Filosofía

La base de datos es la única fuente de verdad del proyecto.

Toda modificación deberá quedar registrada en esta carpeta antes de ser aplicada en Supabase.

---

Versión actual:

JM-STORE v0.2.0-alpha