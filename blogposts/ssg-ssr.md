---
title: 'Cuándo Usar Generación Estática vs. Renderizado en el Lado del Servidor'
date: '2023-06-17'
imageUrl: '/server-side.png'
categories: 'Tecnologia'
---


Recomendamos utilizar **Generación Estática** (con y sin datos) siempre que sea posible, ya que tu página puede ser construida una vez y servida por CDN, lo que la hace mucho más rápida que tener un servidor renderizando la página en cada solicitud.

Puedes usar Generación Estática para muchos tipos de páginas, incluyendo:

- Páginas de marketing
- Entradas de blog
- Listados de productos de comercio electrónico
- Páginas de ayuda y documentación

Debes preguntarte: "¿Puedo pre-renderizar esta página **anticipadamente** a la solicitud del usuario?" Si la respuesta es sí, entonces debes elegir Generación Estática.

Por otro lado, Generación Estática **no** es una buena idea si no puedes pre-renderizar una página antes de la solicitud del usuario. Tal vez tu página muestra datos que se actualizan con frecuencia y el contenido cambia en cada solicitud.

En ese caso, puedes utilizar **Renderizado en el Lado del Servidor**. Será más lento, pero la página pre-renderizada estará siempre actualizada. O puedes omitir el pre-renderizado y utilizar JavaScript en el lado del cliente para llenar los datos.

