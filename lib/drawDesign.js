// ════════════════════════════════════════════════════════════════
//  Lógica de dibujo compartida entre la vista previa y la exportación.
//  Así lo que ve el cliente es EXACTAMENTE lo que se imprime.
// ════════════════════════════════════════════════════════════════

/**
 * Estado de la transformación del diseño (en unidades de la zona imprimible):
 *   x, y     → desplazamiento del centro del diseño respecto al centro de la zona
 *   scale    → 1 = la imagen "cubre" la zona (cover). <1 deja bordes, >1 hace zoom.
 *   rotation → grados
 */
export const INITIAL_TRANSFORM = { x: 0, y: 0, scale: 1, rotation: 0 };

/**
 * Dibuja el diseño dentro de un rectángulo (0,0,zoneW,zoneH) del contexto actual,
 * recortado a esa zona. El llamador hace ctx.translate() a la esquina de la zona.
 */
export function drawDesign(ctx, img, zoneW, zoneH, t) {
  const base = Math.max(zoneW / img.naturalWidth, zoneH / img.naturalHeight);
  const s = base * t.scale;

  ctx.save();
  ctx.beginPath();
  ctx.rect(0, 0, zoneW, zoneH);
  ctx.clip();

  ctx.translate(zoneW / 2 + t.x, zoneH / 2 + t.y);
  ctx.rotate((t.rotation * Math.PI) / 180);
  ctx.scale(s, s);
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(img, -img.naturalWidth / 2, -img.naturalHeight / 2);
  ctx.restore();
}

/**
 * Pinta la plantilla completa: color de fondo opcional (para los espacios vacíos)
 * y encima el diseño del cliente. Se usa en el editor, en las vistas previas y
 * en el archivo final que se sube a Cloudinary.
 */
export function paintTemplate(ctx, img, w, h, t, bg) {
  if (bg) {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);
  }
  drawDesign(ctx, img, w, h, t);
}
