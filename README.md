# Portal de Memorias de Verificación y Normativa · FCEDU-ULPGC

Aplicativo web interactivo para consultar las Memorias de Verificación de los títulos de la Facultad de Ciencias de la Educación (FCEDU) de la Universidad de Las Palmas de Gran Canaria: Grados en Educación Infantil, Educación Primaria y Educación Social; Doble Grado en Educación Infantil y Educación Primaria; Máster en Formación del Profesorado (MUFP) y Máster en Intervención y Mediación Familiar, Social y Comunitaria (MUIMFSC). Incluye un simulador del Reglamento 1/2026 de Evaluación Compensatoria, el desglose del Prácticum, el acceso desde CFGS, la atribución docente (RD 1834/2008 y RD 1594/2011), un cronograma académico descargable (.ics), un comparador normativo, casos prácticos para el PAT y un glosario.

> **Aviso.** Recurso de apoyo con finalidad informativa y didáctica. No sustituye a la normativa publicada en el BOE, el BOC o el BOULPGC ni a las resoluciones de los órganos competentes de la ULPGC.

## Publicación (GitHub Pages)

El repositorio contiene la aplicación ya compilada; no requiere Node.js.

1. Rama `main`, carpeta `/ (root)`: *Settings → Pages → Deploy from a branch*.
2. El archivo `.nojekyll` debe permanecer en la raíz.
3. `404.html` es copia de `index.html` (la navegación interna usa `#tab=…`).

## Estructura

```
index.html · 404.html · favicon.svg · .nojekyll
assets/
  index-*.js, *.js        aplicación compilada (React + Vite) y módulos diferidos
  index-*.css             estilos
  fonts/                  tipografías autoalojadas (fonts.css + woff2)
  aistudio/               dossier normativo en HTML autónomo
    vendor/               Chart.js 4.5.1 y Lucide 1.43.0 (copias locales)
  facultad_educacion_ulpgc_edificio-*.jpg
```

## Privacidad y seguridad

- Sin peticiones a terceros: las tipografías y las bibliotecas del dossier se sirven desde el propio sitio (antes se cargaban desde Google Fonts, jsDelivr y unpkg).
- Política de seguridad de contenidos (CSP) declarada en `index.html` y `404.html`: solo se ejecuta código del propio origen.
- El navegador guarda en `localStorage` y `sessionStorage` únicamente preferencias de lectura y visualización y el progreso de los casos prácticos; no se envía ningún dato.

## Mantenimiento

- Al recompilar, vaciar la carpeta de salida (`build.emptyOutDir: true` en Vite) y sustituir `assets/` completa: así no se acumulan módulos de compilaciones anteriores.
- Las correcciones del contenido deben hacerse en el código fuente, que no está en este repositorio; véase `CHANGELOG.md` para los ajustes aplicados directamente sobre la compilación.
- Licencias de los componentes de terceros: `LICENCIAS-TERCEROS.md`.
