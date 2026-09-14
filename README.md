# APPES Professional AI — Soluciones completas

Landing page para **asesoramiento legal + contable potenciado por IA**.

Esta versión incorpora una sección detallada y en lenguaje claro con ocho casos de uso para abogados y ocho para contadores. También reemplaza términos técnicos como RAG y AI Agents por explicaciones centradas en el resultado para el cliente.

## Concepto

La estructura toma como referencia únicamente patrones de comunicación comunes en SaaS profesionales modernos:

- hero con propuesta de valor;
- plataforma / workspace visual;
- control humano;
- beneficios;
- workflows;
- integraciones;
- CTA.

Los textos y la identidad visual son propios de APPES.

## Logo interactivo

El logo está dividido en dos capas:

- `assets/appes-logo-base.png`
- `assets/appes-monkey-arm.png`

La cara del mono **no se gira ni cambia**. Permanece siempre de perfil.

Cuando el usuario apoya el mouse:

1. el brazo se eleva desde el hombro;
2. el ángulo acompaña sutilmente la posición del cursor;
3. al retirar el mouse vuelve a la postura original;
4. en dispositivos táctiles la animación queda desactivada.

La animación usa CSS transforms + JavaScript y no requiere GIF, video ni librerías.

## Archivos

```text
appes-professional-ai-v6/
├── index.html
├── styles.css
├── app.js
├── README.md
└── assets/
    ├── appes-logo-original.png
    ├── appes-logo-base.png
    ├── appes-monkey-arm.png
    └── favicon.png
```

## Antes de publicar

En `index.html`, reemplazar:

```text
TU_EMAIL_AQUI
```

por el email real de APPES.

## GitHub / Cloudflare Pages

Sitio 100% estático. No necesita Node ni build.

```bash
git add -A
git commit -m "APPES Professional AI V6"
git push origin main
```

Cloudflare Pages:

- Framework preset: `None`
- Build command: vacío
- Output directory: `/`
