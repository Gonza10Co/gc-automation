/* GC Automation · video de apertura (datos ficticios en las escenas de la historia).
   Escenas 0 a 3 y 8: slides reales de ~/dev/lab/gc-automation/presentacion, capturadas a 2880x1800
   en mockup/slides/ (ver "Escena slide" en el SKILL.md). */


window.PITCH = {
  title: 'GC Automation · Video de apertura',
  scenes: {

  // 0 · Somos GC Automation: portada y enseguida "Qué hacemos" (las cuatro formas)
  somos: { slide: { imgs: ['slides/slide-1.png', 'slides/slide-3.png'], at: [0, 0.22] } },

  // 1 · Gonzalo Correa
  perfil: { slide: { imgs: ['slides/slide-2.png'], zoom: 1.05 } },

  // 2 · Empresas que ya trabajan distinto
  clientes: { slide: { imgs: ['slides/slide-5.png'], zoom: 1.05 } },

  // 3 · Cómo trabajamos
  como: { slide: { imgs: ['slides/slide-6.png'] } },

  // 4 · Claudia y su Excel
  claudia: { card: {
    f: 'Una historia', k: 'Martes · 9:40 p. m. · Ibagué',
    h: 'Todos se fueron a casa.<br>Claudia sigue cuadrando el Excel.',
    p: 'Mientras tanto, en su WhatsApp, tres clientes preguntan precios. Nadie les contesta.',
    rain: true,
    logo: '📗 <b>cartera_octubre_FINAL_v7.xlsx</b> &nbsp;·&nbsp; 48 MB &nbsp;&nbsp;&nbsp; 💬 <b>3</b> mensajes sin leer',
  } },

  // 5 · La misma noche, con un asistente de IA (la nota de voz saliente suena con la voz2)
  ricardo: {
    cap: ['La misma noche', 'Ricardo, cliente de Chaparral', 'martes 9:41 p. m.'], clock: '9:41',
    contact: ['Distribuidora El Combeima', 'EC'],
    steps: [
      ['day', 'HOY'],
      ['voice', 'in', '0:06', 'Buenas noches. Necesito veinte cajas de aceite para mañana. ¿Hay?', '9:41 p. m.'],
      ['think', '🎙️', 'Nota de voz entendida', 'Pide 20 cajas de aceite, para mañana', 'Pedido'],
      ['think', '📱', 'Cliente identificado por su número', 'Ricardo Bocanegra · Tienda La Esquina, Chaparral · cupo al día', 'Tendero'],
      ['think', '🗄️', 'Inventario en el sistema de ustedes', 'Aceite vegetal caja x 12 de 900 ml · bodega Ibagué', '64 cajas'],
      ['think', '💲', 'Precio de su lista', '20 cajas a $92.000 · lista tenderos', '$1.840.000'],
      ['think', '🚚', 'Ruta de mañana', 'Chaparral va en la ruta sur de las 6 a. m.', 'Antes de 10 a. m.'],
      ['typing', 900],
      ['voice', 'out', '', '', '9:41 p. m.', 'v2'],
      ['in', 'Sí, sepárelas 🙌', '9:42 p. m.'],
      ['think', '✅', 'Pedido creado en el sistema', 'PED-2187 · 20 cajas · ruta sur de mañana', '$1.840.000', 'hero'],
    ]
  },

  // 6 · Facturas de proveedores que se causan solas
  facturas: {
    cap: ['A la mañana siguiente', 'La oficina de Claudia', 'miércoles 7:30 a. m.'], clock: '7:30',
    contact: ['Facturas', 'EC'],
    desk: { url: 'facturas.elcombeima.co/bandeja', logo: 'EC', brand: 'El Combeima', title: 'Facturas de proveedores',
            nav: ['Bandeja del correo', 'Causadas', 'Proveedores', 'Reglas contables', 'Reportes'], active: 0,
            placeholder: 'Buscar proveedor…', user: 'Claudia · Gerencia' },
    steps: [
      ['ahead', 'Llegaron al correo · 5 facturas'],
      ['scan', 'Grasas y Aceites del Valle S.A.S.', 'FE-48213 · 120 cajas de aceite · llegó 6:52 a. m.', 'Por causar', 'pend', '🧾'],
      ['scan', 'Arrocera La Esperanza', 'FV-10872 · 300 bultos de arroz · llegó 7:04 a. m.', 'Por causar', 'pend', '🧾'],
      ['scan', 'Transportes Ruta Sur', 'TRS-3391 · fletes de octubre · llegó 7:10 a. m.', 'Por causar', 'pend', '🧾'],
      ['scan', 'Empaques del Tolima', 'EMT-5520 · cajas y estibas · llegó 7:15 a. m.', 'Por causar', 'pend', '🧾'],
      ['scan', 'Distrimarcas Colombia', 'DMC-90114 · granos y enlatados · llegó 7:22 a. m.', 'Por causar', 'pend', '🧾'],
      ['think', '📥', 'Leídas del correo', 'El XML de la factura electrónica, sin digitar nada', '5 facturas'],
      ['mark', 0, 'Causada', 'ok'],
      ['think', '🧮', 'Cuentas contables según el proveedor', 'Inventario, fletes, IVA y retenciones', 'Automático'],
      ['mark', 1, 'Causada', 'ok'],
      ['mark', 2, 'Causada', 'ok'],
      ['mark', 3, 'Causada', 'ok'],
      ['mark', 4, 'Causada', 'ok'],
      ['think', '🔗', 'Causadas en el software contable', '', '0 errores', 'hero', ['Siigo', 'Alegra', 'World Office']],
    ]
  },

  // 7 · Así se vería su semana
  tablero: { dash: {
    tag: 'Tablero', title: 'Así se vería su semana',
    kpis: [{ n: 184, p: '$', s: ' M', l: 'ventas de la semana' }, { n: 312, p: '$', s: ' M', l: 'cartera por cobrar' },
           { n: 21, s: ' %', l: 'margen bruto' }, { n: 4, l: 'clientes que pierden plata', hl: true }],
    chart: { title: 'Rentabilidad por cliente (millones al mes)',
             vals: [14.2, 11.8, 9.6, 8.1, 7.4, 6.2, 5.5, 4.3, 3.8, 2.9, 2.1, 1.4, 0.8, -1.2, -2.6, -3.4, -4.9],
             hi: [13, 14, 15, 16], labels: ['los que más le dejan', 'los que le quitan plata'],
             legend: 'pierden plata: descuentos y fletes se comen el margen', focusAt: 0.72 },
    list: { title: 'Cartera por cobrar', items: [
      ['Supermercado La 15 · Ibagué', 48.2, '$48,2 M'], ['Autoservicio El Vecino · Espinal', 36.5, '$36,5 M'],
      ['Tienda La Esquina · Chaparral', 12.9, '$12,9 M'], ['Mercados San Pedro · Melgar', 9.4, '$9,4 M'],
      ['Granero El Triunfo · Líbano', 7.1, '$7,1 M']] },
  } },

  // 8 · Cierre: slide final de la presentación (Gonza toma la palabra)
  cierre: { slide: { imgs: ['slides/slide-7.png'], zoom: 1.05 } },
  },
  order: ['somos', 'perfil', 'clientes', 'como', 'claudia', 'ricardo', 'facturas', 'tablero', 'cierre'],
};
