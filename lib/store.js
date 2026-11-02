// ════════════════════════════════════════════════════════════════
//  REDIRECCIÓN A TIENDANUBE
// ════════════════════════════════════════════════════════════════

/**
 * ⚠️ URL A LA QUE VUELVE EL CLIENTE DESPUÉS DE GUARDAR SU DISEÑO ⚠️
 *
 * Se configura con la variable de entorno NEXT_PUBLIC_TIENDANUBE_URL
 * (en Vercel: Settings → Environment Variables). Ejemplos:
 *    https://tutienda.tiendanube.com/productos/llavero-almohadon/
 *    https://tutienda.tiendanube.com/comprar/        (checkout)
 *    https://tutienda.tiendanube.com/cart/           (carrito)
 */
export const STORE_URL = process.env.NEXT_PUBLIC_TIENDANUBE_URL || "";

export function storeUrlFor() {
  return STORE_URL;
}

/**
 * Si es true, se agrega el link del diseño a la URL como parámetro
 * (ej: ...?diseno=https://res.cloudinary.com/...). Útil si tu tema de
 * TiendaNube lee ese parámetro. Además el link se copia al portapapeles
 * para que el cliente pueda pegarlo en el campo de comentarios.
 */
export const PASS_DESIGN_AS_PARAM = true;
export const DESIGN_URL_PARAM = "diseno";

export function buildStoreUrl(designUrl) {
  const base = STORE_URL;
  if (!base) return "";
  try {
    const u = new URL(base);
    if (PASS_DESIGN_AS_PARAM && designUrl) u.searchParams.set(DESIGN_URL_PARAM, designUrl);
    return u.toString();
  } catch {
    return "";
  }
}
