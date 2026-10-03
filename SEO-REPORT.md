# MYT Klima SEO implementation

## Scope and audit

Completed locally on 3 October 2026. Deployment is still required. Existing typography, colors, page layouts, hero copy, and animation design are preserved.

The live site returned HTTP 200 for all six public pages, with basic titles. `/robots.txt`, `/sitemap.xml`, `/gizlilik`, and `/kvkk` returned 404. The project had no canonicals, social metadata, sitemap, robots route, manifest, breadcrumbs, or structured data. The original favicon was the Vercel triangle. Existing images already used `next/image`, dimensions, and Turkish alt text. Pages already had one H1, main landmarks, and semantic navigation/footer elements.

## Metadata by route

Each route now has its own description, self-referencing canonical, Open Graph title/description/URL, `tr_TR` locale, and Twitter large-image card. All use one 1200×630 social image made from the existing technician photo and MYT text identity.

| Route | Exact title |
| --- | --- |
| `/` | İstanbul Klima Servisi, Montaj ve Bakım \| MYT Klima |
| `/klimalar` | İstanbul Klima Satışı ve Klima Seçimi \| MYT Klima |
| `/hizmetler` | İstanbul Klima Hizmetleri \| Montaj, Bakım ve Servis \| MYT Klima |
| `/vrf-sistemleri` | İstanbul VRF Sistemleri ve Projelendirme \| MYT Klima |
| `/hakkimizda` | MYT Klima Mühendislik \| İstanbul İklimlendirme |
| `/iletisim` | İletişim \| MYT Klima İstanbul |

Descriptions follow the supplied wording and are centralized in `app/seo.ts`. Absolute page titles prevent duplicate brand suffixes; the root retains the `%s | MYT Klima` template for future pages. HTML remains `lang="tr"`.

## Configuration, crawling, and schema

- `app/business.ts` remains the source of verified business/contact data. `app/seo.ts` holds domain handling, metadata, route inventory, and schema definitions.
- Current local `SITE_URL`: `https://myt-klima.vercel.app`, the stable staging fallback. `NEXT_PUBLIC_SITE_URL` overrides it. Paths, credentials, query strings, and fragments are rejected in that setting. Deployment-specific `VERCEL_URL` is never used.
- Production robots: `User-Agent: *`, `Allow: /`, and the central-origin sitemap URL. Public page metadata is `index, follow`.
- When `VERCEL_ENV` exists and differs from `production`, robots disallows `/`, page metadata is `noindex, nofollow`, and the sitemap is empty.
- Production sitemap contains exactly the six public routes. No fabricated modification dates or nonexistent legal routes.
- Organization schema is global; WebSite schema is on the homepage. Five inner pages have visible breadcrumbs and matching BreadcrumbList schema.
- `/hizmetler` has an OfferCatalog with eight actual Service entries, an Organization provider reference, and İstanbul service area. Plumbing and natural gas entries describe maintenance/control only. No rich-result eligibility is claimed.
- **No verified physical address exists in the project. LocalBusiness schema was intentionally not added.** No address, coordinates, hours, ratings, social profiles, certifications, or experience claims were fabricated.

## Visible changes and performance

- Restrained İstanbul signals in the homepage service line, Services/About introductions, footer, and Contact business details. Contact says “Hizmet bölgesi: İstanbul geneli”.
- Subtle breadcrumbs within the existing inner-page containers.
- Homepage service names now link to actual service anchors, climate selection, or VRF. Homepage selection text links to `/klimalar`, and the company reference links to `/hakkimizda`. Services links to climate selection; Klimalar links to installation. Existing contact/WhatsApp and VRF CTAs remain.
- Legal labels remain visible without links to nonexistent pages.
- Logo accessible names include the visible wordmark; the contact phone link has an underline.
- Homepage hero uses Next.js 16 `preload`; the below-fold VRF diagram now uses default lazy loading. Homepage and VRF responsive image sizes were corrected. Other below-fold images retain default lazy loading; original source quality is unchanged.
- Existing Outfit `next/font`, server page components, small client interaction components, and transform/opacity animations remain. No runtime dependencies were added. Reduced-motion styles and no-JavaScript visibility are retained.
- Default Vercel favicon replaced with MYT wordmark identity; SVG icon, Apple icon, and browser manifest added.

## Validation

- `npm run lint`: passed. Local browser artifacts and pre-existing `.checks` scripts are excluded from app linting.
- `npx tsc --noEmit`: passed.
- `npm run build`: passed; all six public pages and metadata routes prerender successfully. The build needs network access for the existing Google-hosted Outfit font.
- Browser audit at 1440px and 390px: all routes HTTP 200; one H1/main each; Turkish language; expected canonicals and Open Graph URLs; production indexing enabled; JSON-LD parses; correct breadcrumb counts; no horizontal overflow.
- All rendered internal page and hash links resolve. No legal 404 links remain.
- All sections remain visible while scrolling with normal motion and with JavaScript disabled; mobile menu opening and Escape closing passed on all six routes.
- Configuration checks: production, preview, development, custom-domain override, optional verification token, absent token, and invalid origin handling passed.
- Local mobile Lighthouse during this pass: **Performance 96, SEO 100, Accessibility 100**; FCP 1.1s, LCP 2.7s, CLS 0, TBT 40ms. These are lab observations, not production field Core Web Vitals. LCP still has room for improvement.
- Broader axe checks with reduced motion identified existing contrast failures in two homepage maintenance notes and two Services maintenance labels. Colors were preserved as requested. The phone-link distinction issue was fixed. A Lighthouse score of 100 does not mean every accessibility issue is resolved.
- Browser audit output/screenshots and Lighthouse JSON are in the ignored `.browser-check/` folder.

## Manual actions outside code

1. Deploy this change to production; it has not been published by this task.
2. Set `NEXT_PUBLIC_SITE_URL=https://your-final-domain` in Vercel before the custom-domain production build, then redeploy. Use the chosen HTTPS origin without a path. Canonical, social, sitemap, and structured-data URLs update together.
3. Configure the preferred custom domain and redirects from alternate domains in hosting. The app does not guess the final domain or redirect visitors to an unknown domain.
4. Add a real `GOOGLE_SITE_VERIFICATION` token and rebuild if using Search Console's HTML-meta verification. **No token is currently configured locally.** Alternatively use Search Console's DNS verification.
5. Verify the chosen property and submit `/sitemap.xml` in Search Console after deployment. Recheck robots, canonical URLs, social image fetching, and production indexing on the actual domain.
6. If a verified public physical address becomes available, evaluate LocalBusiness schema then. The illustrative storefront image is not evidence of an address.
7. Existing maintenance-text contrast findings require a separately approved color adjustment. No fake legal pages, reviews, or district pages were added.

## Files changed

- Shared SEO: `app/business.ts`, `app/seo.ts`, `app/json-ld.tsx`, `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`.
- Page metadata/copy: `app/page.tsx`, `app/klimalar/page.tsx`, `app/hizmetler/page.tsx`, `app/vrf-sistemleri/page.tsx`, `app/hakkimizda/page.tsx`, `app/iletisim/page.tsx`.
- Navigation/accessibility: `app/breadcrumbs.tsx`, `app/breadcrumbs.module.css`, `app/site-header.tsx`, `app/site-footer.tsx`, `app/site-footer.module.css`, `app/services-section.tsx`, `app/climate-selection.tsx`, `app/contact-cta.module.css`, `app/globals.css`.
- Identity: `app/favicon.ico`, `app/icon.svg`, `app/apple-icon.png`, `app/manifest.ts`, `public/images/myt-klima-social.jpg`.
- Validation/documentation: `eslint.config.mjs`, `SEO-REPORT.md`.
