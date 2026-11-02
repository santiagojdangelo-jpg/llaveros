# Personalísimo · Visualizador de llavero almohadón

Web app (Next.js + Tailwind + Canvas 2D + Three.js) para que el cliente personalice un llavero almohadón de ~7 × 7 cm.

## Flujo
1. El cliente sube su imagen (PNG/JPG/WEBP).
2. La acomoda sobre la plantilla cuadrada de 7 × 7 cm (atajos Rellenar / Zona segura / Entera, zoom, posición, rotación, color de fondo). Se marca la costura (5 mm) y la salida de la cinta.
3. Pestaña "Vista 3D": ve cómo queda en el almohadón con cinta y argolla.
4. "Guardar mi diseño" → PNG de 1050×1050 px (solo la plantilla) a Cloudinary (carpeta `personalisimo/disenos-llavero`).
5. Pantalla de éxito → "Volver a la tienda para comprar" (TiendaNube), con el link del diseño copiado.

## Qué tenés que configurar
Variables de entorno (ver `.env.example`; en Vercel: Settings → Environment Variables, y después Redeploy):

| Variable | Qué es |
|---|---|
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Tu cloud name |
| `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` | Preset **Unsigned** |
| `NEXT_PUBLIC_TIENDANUBE_URL` | URL del producto/carrito del llavero |

Medidas, margen de costura y posición de la cinta: `lib/config.js` (`PILLOW_CM`, `PILLOW_SEAM_CM`, `PILLOW_LOOP_X`). Forma del almohadón 3D: inicio de `components/Pillow3D.jsx`.

## Correr local
```
npm install
npm run dev
```

## Deploy en Vercel
Subí **todo el contenido** de esta carpeta a la raíz de un repo de GitHub (tienen que verse `app/`, `components/`, `lib/`, `package.json`), importalo en Vercel y cargá las 3 variables.
