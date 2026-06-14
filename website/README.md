# Sitio web — Rubén Carpinteiro (@rubencarpinteiro_)

Landing de una sola página, **estática** (HTML + CSS + JS vanilla, sin build ni dependencias).
Generada a partir de la cuenta de Instagram [@rubencarpinteiro_](https://www.instagram.com/rubencarpinteiro_/).

## Estructura

```
website/
├── index.html        # Página única con todas las secciones
├── css/styles.css    # Estilos (paleta, layout responsive)
├── js/main.js        # Menú móvil + año dinámico
├── assets/           # Imágenes (foto, og-image.jpg, etc.)
└── README.md         # Este archivo
```

## Cómo verlo

Solo abre `index.html` en tu navegador. O sírvelo localmente:

```bash
cd website
python3 -m http.server 8000
# Abre http://localhost:8000
```

> Los reels de Instagram **necesitan conexión a internet** para renderizarse.

## ✅ Cómo añadir tus reels (importante)

El sitio usa el **sistema oficial de incrustación de Instagram**. En `index.html`, en la sección
`#reels`, hay bloques con marcadores `REEL_1`, `REEL_2`, etc.:

1. Abre el reel en Instagram y copia su URL, por ejemplo:
   `https://www.instagram.com/reel/Cxxxxxxxxxx/`
2. Pega esa URL en `data-instgrm-permalink="..."` reemplazando `REEL_1`, `REEL_2`...
3. Guarda y recarga. El script `embed.js` (ya incluido) los renderiza automáticamente.

Puedes añadir o quitar bloques `<blockquote class="instagram-media">` según cuántos reels quieras.

## Cómo personalizar

- **Textos:** edita las secciones marcadas con `<!-- EDITABLE -->` en `index.html`.
- **Créditos de actor:** sección `#trabajos` (añade año, rol, más títulos).
- **Redes / email:** sección `#contacto` — sustituye `TU_EMAIL@ejemplo.com` y el enlace de LinkedIn.
- **Imagen al compartir:** añade `assets/og-image.jpg` (referenciada en las meta Open Graph).
- **Colores:** variables CSS al inicio de `css/styles.css` (`--accent`, `--bg`, etc.).

## Despliegue gratis

- **GitHub Pages:** sube el repo y activa Pages apuntando a la carpeta `website/`.
- **Netlify / Vercel:** arrastra la carpeta `website/` (sin configuración de build).

## Nota

Los textos son una propuesta editable basada en información pública de la cuenta. Revísalos y
ajústalos. Los reels se muestran mediante la incrustación oficial de Instagram, que respeta los
derechos de autor y siempre muestra la versión actual del vídeo.
