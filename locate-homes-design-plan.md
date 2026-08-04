# Locate Homes — Website Design & Implementation Plan

**Reference inspiration:** [gerax.ch](https://www.gerax.ch/) (luxury alpine real estate, Gstaad)
**Client:** Locate Homes — Real Estate Agency
**Goal:** Premium, luxury, editorial-feeling real estate website with the same design DNA and animation language as Gerax, adapted to a custom section structure.
**Content status:** Lorem ipsum placeholder for now; structure and design are final-intent.

---

## 1. Design Analysis of gerax.ch (Reference Site)

### 1.1 Visual Identity
- **Typography:** Large serif display typeface for headlines (editorial, "old money" luxury feel) paired with a clean, minimal sans-serif for body copy and UI labels.
- **Micro-labels:** Every section is preceded by a short, uppercase, letter-spaced label (e.g. "OBJECTS", "SERVICES", "CONTACTS"). This is the single biggest signature of the "premium real estate" aesthetic and must be replicated.
- **Color palette:** Neutral, muted, mostly white/cream backgrounds with deep charcoal/black text and a dark (near-black) footer for contrast. No loud brand colors — luxury is conveyed through restraint.
- **Photography style:** Full-bleed, editorial, naturally lit imagery — not stock-photo glossy. Consistent color grading across all images.
- **Numbered content blocks:** Services are shown as "01 / 02 / 03" instead of icon grids — feels like a catalog/lookbook rather than a generic template.

### 1.2 Structural Pattern
1. Full-bleed video hero with transparent header overlay, a 0→100% loading counter before video reveal, single headline + single CTA.
2. A toggle mechanic in the hero (Gerax uses Summer/Winter) that swaps the entire background image/video set.
3. Editorial intro/philosophy statement (large serif line + short paragraph, split imagery).
4. Trust/credibility block with animated stat counters ("5 years of experience").
5. Listings teaser split into two paths (For Sale / For Rent).
6. Numbered services list with hover-driven background crossfade.
7. Minimal full-bleed contact strip with one CTA.
8. Dark, minimal footer with nav columns, contact details, legal links, socials.

### 1.3 Animation & Interaction Language
| Pattern | Behavior |
|---|---|
| Hero load | Percentage counter animates 0→100%, then video/image reveals with a fade/scale |
| Header | Transparent over hero → transitions to solid background + shadow on scroll |
| Scroll reveals | Fade-up + slight translate-Y, staggered for grouped elements (cards, stats, text lines) |
| Stat counters | Numbers count up from 0 when scrolled into view |
| Services hover | Background image crossfades behind the list as user hovers each numbered item |
| Toggle switch | Smooth crossfade between two image/video sets (summer/winter) |
| Smooth scroll | Inertia-based smooth scrolling across the whole page (Lenis-style) |
| Logo/partner strips | Continuous horizontal marquee loop (not present on Gerax itself, but consistent with this design language — used per your spec below) |

---

## 2. Locate Homes — Final Site Structure

As specified, with full creative latitude on execution:

1. Hero / Opener (video, Gerax-style)
2. Header (white, sticky, includes "Sunteck" as a dedicated clickable page)
3. About Us
4. Logo strip — dual-direction marquee (left→right / right→left)
5. Location-wise videos — 9:16 ratio, horizontally scrollable
6. "How We Help You Get the Best Homes"
7. Contact section
8. Footer

---

## 3. Section-by-Section Plan

### 3.1 Header
- **Position:** Fixed/sticky, white background throughout (per your spec — not transparent-over-hero like Gerax, since you want it white from the start).
- **Left:** "Locate Homes" wordmark/logo.
- **Center or right nav:** Buy · Rent · Services · **Sunteck** · About Us · Contact.
  - Sunteck is a distinct clickable nav item leading to its own dedicated page (likely a featured-developer/project microsite within the main site).
- **Far right:** Phone number + email, plus a small uppercase location label (mirroring Gerax's "BASED IN GSTAAD, SWITZERLAND" line) — e.g. "BASED IN [CITY], INDIA."
- **Scroll behavior:** Subtle shadow/border appears once user scrolls past the hero, to keep separation from content without changing color (already white).
- **Mobile:** Hamburger → full-screen overlay menu with large nav links, matching Gerax's expand/close interaction pattern.

### 3.2 Hero / Opener
- Full-bleed background **video** (with image fallback/poster), muted, autoplay, loop.
- **Loader sequence:** 0% → 100% counter animates while video buffers, then fades out as video/headline reveal (direct Gerax signature).
- **Headline:** Large serif display line (Lorem ipsum placeholder), e.g. structured like "Your Key to [City]" pattern — one strong short line.
- **Sub-copy:** One short supporting sentence.
- **CTA:** Single primary button ("Explore Homes").
- **Optional toggle:** A Gerax-style two-state switch (e.g. "Buy / Rent" or "Residential / Commercial") that crossfades the hero background — recommended as a premium signature carried over from the reference.
- **Scroll cue:** Small animated arrow/line at bottom center.

### 3.3 About Us
- Split two-column layout:
  - Left: Large serif statement (short, punchy — philosophy/positioning line).
  - Right: Supporting paragraph (lorem ipsum) + 2–3 animated stat counters (e.g. "Years of Experience," "Homes Delivered," "Cities Covered").
- Secondary image block, offset/layered (as Gerax does with two overlapping images).
- CTA linking to a full About page.
- Scroll animation: fade-up + counter count-up triggered on viewport entry.

### 3.4 Logo Strip (Marquee)
- Two horizontal rows of partner/developer/media logos.
  - **Row 1:** scrolls left → right, continuous loop.
  - **Row 2:** scrolls right → left, continuous loop.
- Logos rendered grayscale by default, full color on hover; loop pauses on hover.
- Implemented with pure CSS keyframe animation (no JS dependency) for performance.
- Section label above: uppercase micro-label, e.g. "TRUSTED BY."

### 3.5 Location-Wise Videos (9:16, Horizontal Scroll)
- Horizontally scrollable row of **vertical (9:16) video cards** — one per location/city, similar to a Reels/Shorts rail.
- **Scroll behavior:** CSS scroll-snap (`scroll-snap-type: x mandatory`), draggable on desktop (click-and-drag), native swipe on touch devices.
- Optional: a thin horizontal progress indicator beneath the row showing scroll position.
- Each card:
  - Video autoplays muted + loops when in view or on hover.
  - Bottom gradient overlay with location name.
  - Small "View Properties →" link/CTA.
- Section label: uppercase micro-label, e.g. "EXPLORE BY LOCATION."

### 3.6 How We Help You Get the Best Homes
- Numbered list block (01 / 02 / 03 / 04), matching Gerax's Services section pattern:
  1. Curated Search
  2. Site Visits
  3. Negotiation Support
  4. Paperwork & Handover
  *(placeholder labels — final copy TBD)*
- Interaction: hovering a numbered item crossfades a full-bleed background image behind the list (Gerax's exact services interaction).
- Each item can link out to a dedicated detail page later.
- Section label: uppercase micro-label, e.g. "OUR PROCESS."

### 3.7 Contact Section
- Full-bleed editorial background image.
- Centered or left-aligned headline (lorem ipsum) + single strong CTA ("Talk to an Advisor").
- Optional: inline short lead-gen form (Name, Phone, Message) directly in this section instead of only a CTA button, since this is a lead-generation-critical section.
- Subtle parallax on the background image as user scrolls.

### 3.8 Footer (Dark)
- Dark/near-black background for contrast against the rest of the white-based site.
- Nav columns: Buy, Rent, Sunteck, Services, About, Contact.
- Contact block: address, phone, email (styled like Gerax's footer contact lines).
- Legal links (Privacy Policy, Terms).
- Social icons (Instagram, Facebook, YouTube, LinkedIn).
- Copyright line: "© [Year] Locate Homes."

---

## 4. Animation Specification Summary

| # | Element | Trigger | Effect |
|---|---|---|---|
| 1 | Hero loader | Page load | Counter 0→100%, fade/scale reveal into video |
| 2 | Hero toggle (optional) | Click | Crossfade between two background sets |
| 3 | Header | Scroll | Shadow/border appears past hero threshold |
| 4 | About stats | Scroll into view | Count-up animation from 0 to target number |
| 5 | Section text blocks | Scroll into view | Fade-up + translate-Y, staggered per line/card |
| 6 | Logo strip | Continuous / hover | Infinite marquee, dual direction, pause + colorize on hover |
| 7 | Video rail | Drag / swipe / scroll | Horizontal snap-scroll; video autoplay on hover/inview |
| 8 | Services list | Hover | Background image crossfade behind list |
| 9 | Contact background | Scroll | Subtle parallax |
| 10 | Global | Continuous | Smooth/inertia scrolling site-wide |

---

## 5. Recommended Tech Stack

- **Frontend:** HTML/CSS/JS (or React if the site will scale into a multi-page app with a CMS later).
- **Scroll animation:** GSAP + ScrollTrigger for fade-ups, counters, and parallax.
- **Smooth scrolling:** Lenis (or equivalent inertia-scroll library).
- **Marquee:** Pure CSS keyframes — avoids JS overhead for a simple infinite loop.
- **Video handling:** Native HTML5 `<video>` with poster images and lazy-loading; compressed/streamed MP4s or WebM for the 9:16 clips to keep the horizontal rail performant.
- **Typography:** A serif display font (e.g. Fraunces, Canela-style) for headlines + a refined sans-serif (e.g. Inter, Neue Montreal) for body/UI — final brand fonts swappable later.
- **Responsiveness:** Mobile-first breakpoints; header collapses to full-screen overlay menu; video rail becomes native swipe; marquee and stats remain but simplify spacing.

---

## 6. Content Placeholders

All body copy, headlines, and service descriptions will use **Lorem Ipsum** for this phase. Final copywriting (positioning statement, service names, location names, About Us narrative) to be supplied later and dropped into the existing structure without redesign.

---

## 7. Suggested Build Sequence

1. Header + Hero (with loader animation) — approve look & feel first.
2. About Us section.
3. Logo marquee strip.
4. Location video rail (9:16 scroll).
5. "How We Help You" numbered process section.
6. Contact section.
7. Footer.
8. Full-page animation pass (scroll triggers, transitions, responsiveness, performance/QA).

---

*Document prepared as the working design & implementation reference for the Locate Homes website build.*
