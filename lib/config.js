// ════════════════════════════════════════════════════════════════
//  CONFIGURACIÓN DEL VISUALIZADOR DE LLAVERO ALMOHADÓN
// ════════════════════════════════════════════════════════════════

/** Carpeta de Cloudinary donde se guardan los diseños (si tu preset lo permite). */
export const CLOUDINARY_FOLDERS = {
  llavero: "personalisimo/disenos-llavero",
};

/** Restricciones del archivo que sube el cliente. */
export const ACCEPTED_TYPES = ["image/png", "image/jpeg", "image/webp"];
export const MAX_FILE_MB = 15;

// ════════════════════════════════════════════════════════════════
//  LLAVERO ALMOHADÓN  
// ════════════════════════════════════════════════════════════════

/**
 * Medida de la tela que se sublima (una sola cara, la de adelante).
 * Tu llavero mide aprox. 7 × 7 cm. Si hacés uno más rectangular (ej. 7 × 8),
 * cambiá solo estos números: el editor y la vista 3D se adaptan solos.
 */
export const PILLOW_CM = { w: 7, h: 7 };

/** Margen que "se come" la costura en todo el borde (cm). Lo que cae ahí se pierde o queda doblado. */
export const PILLOW_SEAM_CM = 0.5;

/** Resolución del lienzo de edición (px por cm). */
export const PILLOW_PX_PER_CM = 100;
export const PILLOW_TEMPLATE_PX = {
  w: Math.round(PILLOW_CM.w * PILLOW_PX_PER_CM),
  h: Math.round(PILLOW_CM.h * PILLOW_PX_PER_CM),
};

/** Resolución del archivo final que se sube a Cloudinary (px por cm). 150 px/cm ≈ 380 dpi → 1050×1050 px. */
export const PILLOW_EXPORT_PX_PER_CM = 150;

/**
 * Dónde sale la cinta con la argolla sobre el borde de arriba:
 * -1 = esquina izquierda, 0 = centro, 1 = esquina derecha. En tu llavero va cerca de una esquina.
 */
export const PILLOW_LOOP_X = 0.72;

/** Debajo de este lado mayor (px) se avisa que puede salir pixelado en 7×7 cm. */
export const PILLOW_MIN_RECOMMENDED = 800;
