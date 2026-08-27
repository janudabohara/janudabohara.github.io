# Portfolio handoff

## Current state

- Production root: `X:\Portfolio website\janudabohara.github.io`
- Framework: Astro 4, Tailwind 3, React 18 islands
- Output: static site for Netlify
- Figma source: `https://www.figma.com/design/c0tsAqB9rOoatx00RMKbPL`
- Design: warm off-white, light-only editorial system with matte-glass surfaces

## Verified identity

- Januda Bohara / Bohara Satharasinghe
- Pre-University Research Assistant at the Multidisciplinary AI Research Centre, University of Peradeniya
- Email: `bohara.sat@gmail.com`
- LinkedIn: `https://linkedin.com/in/janudaa`

Do not publish guessed profile links. GitHub, Discord, Credly, and Google Developer Program remain configured without URLs and are omitted from production until verified.

## Content architecture

Astro Content Collections are defined for `technical-work`, `field-notes`, and `journal`. Shared metadata supports dates, tags, cover media, alt text, draft state, and ordering. Collection-specific schemas support project links, event/gallery details, and journal metadata. Drafts are filtered from production routes and RSS.

No demonstration entries have been fabricated. Empty archives are intentional until real content is supplied.

## Design implementation

The Figma file contains 33 variables, five text styles, two glass effect styles, reusable components, eight desktop routes, eight mobile routes, and content-pattern documentation. Code tokens mirror the Figma naming in `src/styles/global.css` and `tailwind.config.mjs`.

The monogram is used only in navigation, favicon, and footer. The transparent project asset is `public/brand/jb-monogram.png`.

The capability matrix avoids percentages and groups confirmed abilities by working context. Event-media listings should use muted previews; detail pages may display natural color inside warm-neutral mats with captions and alt text.

## Deployment and verification

- Netlify build command: `npm run build`
- Publish directory: `dist`
- Static sitemap and RSS are enabled.
- Run the production build after every schema, route, or external-profile change.
