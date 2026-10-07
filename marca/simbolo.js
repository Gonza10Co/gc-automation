// Símbolo GC Automation · "C + pulso"
// La C (de GC) se abre y de su centro sale el pulso: el proceso arranca adentro de la empresa,
// sale solo y se cierra en el punto oro (el resultado).
// Grilla de 64. C: centro (27,32), r=13, abertura ±48°. Trazo C 6.6, pulso 4.4, punto r=3.9.
window.GC = {
  C: 'M35.7 22.3A13 13 0 1 0 35.7 41.7',
  P: 'M27 32H36.6L40.8 25L44.9 39L47.7 32H50',
  dot: [53.6, 32, 3.9],
  svg({bg = '#111A2E', c = '#FFFFFF', p = '#7FB2FF', dot = '#F2A91F', ring = true, rx = 15, size = 64, frame = true, id = 'r' + Math.random().toString(36).slice(2, 7)} = {}) {
    let f = '';
    if (frame) {
      f = `<rect width="64" height="64" rx="${rx}" fill="${bg}"/>`;
      if (ring) f = `<defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6FB6FF"/><stop offset="1" stop-color="#4C4FE0"/></linearGradient></defs>` +
        f + `<rect x="1.25" y="1.25" width="61.5" height="61.5" rx="${rx - 1.25}" fill="none" stroke="url(#${id})" stroke-width="2.5"/>`;
    }
    return `<svg width="${size}" height="${size}" viewBox="0 0 64 64" role="img" aria-label="GC Automation">${f}` +
      `<path d="${this.C}" fill="none" stroke="${c}" stroke-width="6.6" stroke-linecap="round"/>` +
      `<path d="${this.P}" fill="none" stroke="${p}" stroke-width="4.4" stroke-linecap="round" stroke-linejoin="round"/>` +
      `<circle cx="${this.dot[0]}" cy="${this.dot[1]}" r="${this.dot[2]}" fill="${dot}"/></svg>`;
  }
};
