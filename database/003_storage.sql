/*
===========================================================
 JM-STORE STORAGE
 Version: v0.2.0-alpha
===========================================================
*/

/*
===========================================================
 PRODUCT IMAGES
===========================================================
*/

insert into storage.buckets
(
    id,
    name,
    public
)
values
(
    'products',
    'products',
    true
)
on conflict (id) do nothing;


/*
===========================================================
 CATEGORY IMAGES
===========================================================
*/

insert into storage.buckets
(
    id,
    name,
    public
)
values
(
    'categories',
    'categories',
    true
)
on conflict (id) do nothing;


/*
===========================================================
 BRAND LOGOS
===========================================================
*/

insert into storage.buckets
(
    id,
    name,
    public
)
values
(
    'brands',
    'brands',
    true
)
on conflict (id) do nothing;


/*
===========================================================
 USER AVATARS
===========================================================
*/

insert into storage.buckets
(
    id,
    name,
    public
)
values
(
    'avatars',
    'avatars',
    true
)
on conflict (id) do nothing;


/*
===========================================================
 DOCUMENTS
===========================================================
*/

insert into storage.buckets
(
    id,
    name,
    public
)
values
(
    'documents',
    'documents',
    false
)
on conflict (id) do nothing;