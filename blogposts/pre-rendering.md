---
title: 'Dos Formas de Pre-renderizado en Next.js'
date: '2023-06-14'
---

Next.js tiene dos formas de pre-renderizado: **Generación Estática** y **Renderizado en el Lado del Servidor**. La diferencia radica en **cuándo** genera el HTML para una página.

## Generación Estática

La Generación Estática es el método de pre-renderizado que genera el HTML en **tiempo de compilación**. El HTML pre-renderizado se reutiliza en cada solicitud.

![Dos Formas de Pre-renderizado](https://nextjs.org/static/images/learn/data-fetching/static-generation.png)

Fuente de la imagen: [Next.js](https://nextjs.org/static/images/learn/data-fetching/static-generation.png)

## Renderizado en el Lado del Servidor

El Renderizado en el Lado del Servidor es el método de pre-renderizado que genera el HTML en **cada solicitud**.

![Dos Formas de Pre-renderizado](https://nextjs.org/static/images/learn/data-fetching/server-side-rendering.png)

Fuente de la imagen: [Next.js](https://nextjs.org/static/images/learn/data-fetching/server-side-rendering.png)

Es importante destacar que Next.js te permite **elegir** qué forma de pre-renderizado usar para cada página. Puedes crear una aplicación Next.js "híbrida" utilizando Generación Estática para la mayoría de las páginas y Renderizado en el Lado del Servidor para otras.
