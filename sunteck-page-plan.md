# Sunteck Page — Design & Implementation Plan
### (Sub-page within the Locate Homes website)

**Reference site (clone target — colors, fonts, layout, animation language):** [sunteckindia.com](https://www.sunteckindia.com/), specifically its **project microsite pattern** (studied via the WestWorld/Naigaon project page as the closest structural match: sunteckindia.com/west-world)
**Page name/route:** `/sunteck` (linked from the Locate Homes main header nav)
**Project content:** Sunteck Naigaon township ("Naigaon #1 Choice")
**360° virtual tour source:** https://fisheye360.in/view/Sunteck_Naigaon/
**Content status:** Real project details as supplied below; imagery/video are placeholders until real assets are provided.

---

## 1. Design Analysis of sunteckindia.com (Project Page Pattern)

### 1.1 Visual Identity
- **Color palette:** Predominantly **white/off-white backgrounds**, **black/charcoal text**, with an **accent gold/bronze** tone typical of Sunteck's branding used sparingly on CTAs, dividers, and icons. Dark near-black sections used for contrast (footer, sticky enquiry panel).
- **Typography:** Bold, wide-tracked uppercase headlines for section eyebrows (e.g. "AMENITIES", "GALLERY", "LOCATION"), paired with a large serif/modern-serif display font for hero headline, and a clean sans-serif for body copy — mirrors the same "premium real estate" pattern as the Gerax reference, but slightly more corporate/developer-brochure in tone.
- **Iconography:** Custom line-icon set for connectivity categories (F&B, hospitals, shopping, education, corporates).
- **Photography:** Artist's impressions + actual site images, clearly labeled ("Artist's Impression" / "Actual Image") — a credibility convention worth keeping for authenticity.

### 1.2 Structural Pattern (Project Microsite)
1. **Hero:** Full-bleed background video (desktop + mobile versions), project logo overlay, bold headline, small status badge (e.g. "OC Received").
2. **Sticky/floating utility bar:** Call, Enquiry, WhatsApp — persistent across scroll (mobile-first lead-gen pattern).
3. **About the project:** Descriptive copy + a row of **animated stat counters** (acres of land, % green space, number of towers, BHK types, phase acreage).
4. **Amenities:** Tabbed gallery (**Outdoor / Indoor**) — grid of amenity photo cards with captions.
5. **Gallery:** Tabbed (**Interior / Exterior**) — mixed grid of large + small images with captions.
6. **Video section:** Multiple embedded videos (Clubhouse, Project AV, Show Flat walkthrough) in a row/grid, each with a play button overlay.
7. **Floor plans:** Tabbed (**Unit Plan / Floor Plan / Master Plan**) — image viewer per BHK type with carpet area details.
8. **Testimonials:** Video testimonial thumbnails + still image band.
9. **Location:** Embedded Google Map + categorized connectivity lists (Connectivity, Upcoming Development, F&B, Hospitals, Shopping, Corporates, Education) each with its own icon.
10. **FAQs:** Accordion-style Q&A specific to the project.
11. **Bottom lead-gen band:** "Download Brochure" + a full enquiry form (name, phone with country code, email) + RERA number(s) displayed for compliance/trust.
12. **Footer:** Shared site footer (reused from main Locate Homes footer, or a simplified project-specific version).

### 1.3 Animation & Interaction Language
| Pattern | Behavior |
|---|---|
| Hero | Full-bleed video autoplay, headline fade-in |
| Stat counters | Count-up from 0 on scroll into view |
| Amenity/Gallery tabs | Click-to-filter grid with crossfade transition |
| Image cards | Fade-up + slight scale-in on scroll, staggered |
| Video cards | Play-button overlay → opens video (inline or modal) |
| Floor plan tabs | Click-to-switch image viewer |
| FAQ accordion | Expand/collapse with rotating plus/minus icon |
| Sticky utility bar | Persistent across scroll, mobile-optimized |
| Location icons | Fade-up per category block on scroll |

---

## 2. Sunteck Page — Final Content Structure

Built as a **clone of the Sunteck project-page pattern**, restyled to fit within the Locate Homes site (using the shared Locate Homes header/footer), populated with the supplied Naigaon project details.

1. **Hero** — "NAIGAON #1 CHOICE" badge + headline "Get Ready for the World's Future Masterpiece!"
2. **Intro strip** — supporting line: "Here's your chance to offer clients world-class living at unmatched prices."
3. **Project Highlights** — stat/feature band
4. **Amenities** — 55+ amenities, tabbed grid
5. **Connectivity** — distance list with icons
6. **Pricing** — Exclusive Festive Prices table (1 BHK / 2 BHK)
7. **Gallery** — image + video carousel
8. **360° Virtual Tour** — embedded Fisheye360 tour
9. **Enquiry / Contact band**
10. Shared Locate Homes footer

---

## 3. Section-by-Section Plan

### 3.1 Hero
- Full-bleed background video/image (placeholder), dark gradient overlay for text legibility.
- Small uppercase badge/pill: **"NAIGAON #1 CHOICE"** (gold/bronze accent, matches Sunteck's status-badge convention like "OC Received").
- Large serif headline: **"Get Ready for the World's Future Masterpiece!"**
- Sub-line: *"Here's your chance to offer clients world-class living at unmatched prices."*
- Primary CTA: "Enquire Now" · Secondary: "Download Brochure"
- Sticky utility bar (mobile): Call · Enquiry · WhatsApp — fixed to bottom, matching Sunteck's pattern.

### 3.2 Project Highlights
Presented as an animated stat/feature band (count-up on scroll), mirroring Sunteck's "0 Acres / 0% Green Space" style:
| Stat | Value |
|---|---|
| Township Size | 150 Acres — *Largest in Western Suburbs* |
| Open Space | 85% — *More greenery, more breathing space* |
| Residences | Luxury Apartments — *Premium views & world-class finishes* |
| Amenities | 55+ |

Below the stat band: a short descriptive paragraph (lorem ipsum placeholder, styled like Sunteck's "Come Home to Infinite Living" copy block).

### 3.3 Amenities (55+)
- Section eyebrow: "AMENITIES" → Headline: "Indulge in World-Class Living."
- Tabbed grid (single tab is fine here, or split Indoor/Outdoor like the reference):
  - Grand Clubhouse
  - Swimming Pool
  - Badminton Court
  - Cricket Pitch
  - Gym
  - Indoor Games
  - Banquet Hall
  - Movie Theatre
  - Landscaped Gardens & Recreational Spaces
  - Premium Retail Boulevard
  - *"Just name it, we have it"* — closing tagline styled as a bold callout beneath the grid.
- Each amenity as a photo card (placeholder image), fade-up + scale-in on scroll, staggered.

### 3.4 Connectivity
- Section eyebrow: "CONNECTIVITY" → icon-based list, matching Sunteck's location-icon convention:
  - Naigaon Station — 1.5 KM
  - Vasai Station — 3.5 KM
  - WEH (Western Express Highway) — 4 KM
  - Juhu Chandra Station — 500 M
- Optional embedded Google Map (placeholder pin) beneath/beside the list, matching the reference's map + list split layout.

### 3.5 Exclusive Festive Pricing
- Section eyebrow: "💰 EXCLUSIVE FESTIVE PRICES" → styled as a pricing table/cards (not literal emoji in final UI — use a small icon instead):
  | Configuration | Type | Area | Price |
  |---|---|---|---|
  | 1 BHK | Platinum | 407 sq.ft | ₹37 Lacs* Onwards |
  | 2 BHK | — | 550 sq.ft | ₹49 Lacs* Onwards |
- Fine print: "*Prices subject to change. T&C apply." (placeholder disclaimer, matches real-estate compliance convention).
- CTA on this section: "Get Best Price" → opens/anchors to the enquiry form.

### 3.6 Amenities Redux / Highlight Callout
- A secondary reinforcing band, matching the repeated messaging in your content: **"Amenities that Redefine Luxury Living"** — 55+ world-class amenities, landscaped gardens & recreational spaces, premium retail boulevard — styled as a 3-column icon+text row (lighter treatment than the full amenities grid in 3.3, functions as a summary/trust reinforcement before the gallery).

### 3.7 Gallery — Image & Video Carousel
- Horizontally scrollable carousel (matching the Locate Homes 9:16 video rail pattern already established in the main site plan) combining:
  - Project images (exterior, interior, elevation, clubhouse) — placeholder images.
  - Project videos (walkthrough, clubhouse, show flat) — placeholder videos with play-button overlay, matching Sunteck's video-card convention.
- Tabs or filter pills above the carousel: **All / Images / Videos** (optional — can default to a single mixed row for simplicity).
- Snap-scroll behavior, drag on desktop, swipe on mobile.

### 3.8 360° Virtual Tour
- Section eyebrow: "EXPLORE IN 360°" → embedded iframe of the Fisheye360 tour:
  `https://fisheye360.in/view/Sunteck_Naigaon/`
- Full-width embed panel with a "View Fullscreen" button (opens the tour in a new tab as fallback, since some 360 viewers block iframe embedding — flag this for the dev to verify during build).
- Short supporting line: "Take a virtual walk through Sunteck Naigaon before you visit."

### 3.9 Enquiry / Contact Band
- Full-bleed background image (placeholder) + centered headline: "Uncover what's in store for you."
- CTA row: **Download Brochure** + **Enquire Now** (opens inline form or modal).
- Inline enquiry form fields: Name, Phone (with country code dropdown), Email, Message, consent checkbox — matching Sunteck's real enquiry form pattern.
- RERA number placeholder displayed near the form for compliance/trust (e.g. "RERA No. [Placeholder]").

### 3.10 Footer
- Reuses the **shared Locate Homes footer** (dark, nav columns, contact block, socials) already defined in the main site plan — no need to duplicate Sunteck's own footer, since this page lives inside the Locate Homes site.

---

## 4. Animation Specification Summary

| # | Element | Trigger | Effect |
|---|---|---|---|
| 1 | Hero | Page load | Video autoplay, headline/badge fade-in |
| 2 | Stat band | Scroll into view | Count-up animation (0 → target) |
| 3 | Amenity cards | Scroll into view | Staggered fade-up + slight scale-in |
| 4 | Connectivity list | Scroll into view | Fade-up per item, staggered |
| 5 | Pricing cards | Scroll into view | Fade-up |
| 6 | Gallery carousel | Drag/swipe/scroll | Horizontal snap-scroll; video play-button overlay on hover |
| 7 | 360 tour panel | Scroll into view | Fade-up reveal of embed frame |
| 8 | Enquiry form | Scroll/click | Fade-up on view; inline validation on submit |
| 9 | Sticky utility bar | Always (mobile) | Fixed bottom bar — Call / Enquiry / WhatsApp |
| 10 | Global | Continuous | Smooth/inertia scrolling, consistent with the rest of the Locate Homes site |

---

## 5. Technical Notes

- **Header/Footer:** Reuse the Locate Homes global header and footer components — the Sunteck page is a nav destination within the same site, not a separate standalone site, so navigation must remain consistent.
- **Colors/Fonts:** Match Sunteck's palette (white/charcoal base + gold/bronze accent) and typographic pairing (bold uppercase eyebrows + serif display headline + clean sans body) as closely as possible within the Locate Homes type system, so the page feels like an authentic "developer partner page" rather than a mismatched insert.
- **360° embed:** Test `fisheye360.in` iframe embedding early — some virtual tour providers set `X-Frame-Options` that block embedding. Fallback: a styled preview image with a "Launch 360° Tour" button opening the link in a new tab.
- **Forms:** Enquiry form should submit to the same lead-capture endpoint/CRM as the main Locate Homes contact form (to be defined) — keep field names consistent across both.
- **Video/image carousel:** Reuse the same horizontal scroll-snap component built for the main site's "location-wise videos" section (see `locate-homes-design-plan.md`, section 3.5) — just extend it to support mixed image + video cards here.
- **RERA / compliance:** Placeholder RERA number(s) to be swapped for real registration numbers before launch — legally required for Indian real estate marketing pages.

---

## 6. Suggested Build Sequence

1. Hero + sticky utility bar.
2. Project Highlights (stat band).
3. Amenities grid.
4. Connectivity section.
5. Pricing section.
6. Gallery carousel (image + video).
7. 360° virtual tour embed.
8. Enquiry/contact band + form.
9. Wire into shared Locate Homes header/footer, confirm nav link ("Sunteck") routes correctly.
10. Full responsive + animation QA pass.

---

*Document prepared as the working design & implementation reference for the Sunteck sub-page of the Locate Homes website.*
