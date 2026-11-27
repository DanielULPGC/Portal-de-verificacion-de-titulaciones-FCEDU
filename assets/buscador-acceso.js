/*
 * Acceso visible al buscador del portal (mejora 2026-11-27).
 * El buscador ya existía, pero solo se abría con Ctrl+K o desde la Guía.
 * Este botón flotante reproduce ese atajo: no modifica la aplicación ni guarda datos.
 */
(function () {
  'use strict';
  if (document.getElementById('portal-boton-buscar')) return;

  var css = document.createElement('style');
  css.textContent = [
    '#portal-boton-buscar{position:fixed;left:16px;bottom:16px;z-index:45;display:inline-flex;align-items:center;gap:.5rem;',
    'min-height:44px;padding:0 1rem 0 .85rem;border:1px solid #f2b705;border-radius:999px;background:#1f4e5f;color:#faf9f5;',
    'font:600 .875rem/1 "Plus Jakarta Sans",system-ui,sans-serif;box-shadow:0 6px 18px rgba(17,22,29,.35);cursor:pointer}',
    '#portal-boton-buscar:hover{background:#17181a}',
    '#portal-boton-buscar:focus-visible{outline:3px solid #f2b705;outline-offset:3px}',
    '#portal-boton-buscar kbd{font:500 .7rem/1 "IBM Plex Mono",ui-monospace,monospace;padding:.2rem .35rem;border-radius:4px;',
    'background:rgba(250,249,245,.15);color:#faf9f5}',
    '#portal-boton-buscar svg{flex:none}',
    '@media (max-width:640px){#portal-boton-buscar{left:12px;bottom:12px;width:48px;height:48px;padding:0;justify-content:center}',
    '#portal-boton-buscar .pb-texto,#portal-boton-buscar kbd{display:none}}',
    '@media print{#portal-boton-buscar{display:none}}'
  ].join('');
  document.head.appendChild(css);

  var esMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  var boton = document.createElement('button');
  boton.type = 'button';
  boton.id = 'portal-boton-buscar';
  boton.setAttribute('aria-label', 'Buscar en el portal');
  boton.setAttribute('aria-keyshortcuts', esMac ? 'Meta+K' : 'Control+K');
  boton.title = 'Buscar en Memorias y Normativa (' + (esMac ? '⌘K' : 'Ctrl+K') + ')';
  boton.innerHTML =
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
    '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>' +
    '<span class="pb-texto">Buscar</span><kbd aria-hidden="true">' + (esMac ? '⌘K' : 'Ctrl K') + '</kbd>';

  boton.addEventListener('click', function () {
    window.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'k', code: 'KeyK', ctrlKey: !esMac, metaKey: esMac, bubbles: true, cancelable: true
    }));
  });

  function montar() { document.body.appendChild(boton); }
  if (document.body) montar(); else document.addEventListener('DOMContentLoaded', montar);
})();
