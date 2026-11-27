# Registro de cambios

## 2026-11-27 (b) · Buscador más visible y con sinónimos

- **Botón «Buscar» siempre visible** (abajo a la izquierda; solo icono en móvil). Abre el buscador que ya tenía el portal, que hasta ahora solo se alcanzaba con Ctrl+K o desde la Guía. Archivo nuevo: `assets/buscador-acceso.js`, cargado desde `index.html` y `404.html`. No modifica la aplicación ni guarda datos.
- **Sinónimos en el índice de búsqueda** (`assets/searchIndex-iugNGIG5.js`, función `__sinPortal`): 18 grupos que amplían las 103 entradas con términos habituales del alumnado (orientador ↔ Orientación Educativa; CAP ↔ MUFP; online / a distancia ↔ teleformación; prácticas ↔ Prácticum; examen ↔ convocatoria; ciclo superior / FP ↔ CFGS; magisterio ↔ grados de maestro; tutoría ↔ PAT, etc.). Se añaden con menos peso que las palabras clave originales, de modo que los primeros resultados de las búsquedas que ya funcionaban se mantienen.
- Ejemplos: «orientador» pasa de 0 a 2 resultados; «online» y «a distancia», de 0 a 38; «trabajo fin de grado», de 2 a 25; «examen», de 1 a 10.
- Verificación: mismas descargas y secciones, 0 errores, 0 violaciones de CSP, axe 0 violaciones, botón sin solapamientos a 1440 y 390 px.
- Limitación conocida: «CAP» sigue mostrando primero entradas que contienen esa secuencia dentro de otras palabras; las del MUFP aparecen, pero no encabezan la lista.

## 2026-11-27 · Mejora de despliegue, privacidad y precisión normativa

Cambios aplicados sobre la compilación publicada (sin código fuente). El comportamiento de la aplicación es idéntico: mismas nueve secciones, mismas descargas (CSV, PDF, .ics, QR) y 0 incidencias de accesibilidad automáticas (axe-core 4.10.2, WCAG 2.0–2.2 A/AA).

### Depuración
- Se retiran 124 archivos que ninguna página utilizaba (≈ 12,2 MB): 120 módulos JS/CSS de compilaciones anteriores, dos imágenes y una fotografía duplicada en `assets/aistudio/`, y la copia de la fotografía en `src/`. El repositorio pasa de 14 MB a ≈ 3 MB. Los archivos siguen disponibles en el historial de Git.

### Privacidad, seguridad y autonomía
- Tipografías autoalojadas en `assets/fonts/` (sustituyen a Google Fonts): el navegador ya no transmite la IP del usuario a Google.
- El dossier `assets/aistudio/…html` usa copias locales de Chart.js 4.5.1 y Lucide 1.43.0 (antes, jsDelivr y unpkg sin verificación de integridad).
- Política de seguridad de contenidos (CSP) y política de referente en `index.html` y `404.html`.
- Aviso `<noscript>` con enlace a educ.ulpgc.es.
- `.nojekyll` en la raíz (lo citaba `LEEME_GITHUB_PAGES.txt`, pero faltaba).

### Contenido
- Comparador normativo, criterio «vigencia» del Reglamento 1/2026: «Vigente desde julio 2026» pasa a «Publicado en julio de 2026; en vigor desde la convocatoria ordinaria del curso 2026-2027», conforme al índice oficial de reglamentos de la ULPGC («entrará en vigor en la convocatoria ordinaria del curso académico siguiente a su aprobación y publicación en el BOULPGC»). Archivo: `assets/ConsultationWorkspace-DSu38aT7.js`.

### Documentación
- `README.md`, `LICENCIAS-TERCEROS.md` y este registro.
