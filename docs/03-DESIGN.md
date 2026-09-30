> **SUPERSEDED IN PART, round 2.** The tokens, typeface and component styling
> in this file are history. The current visual system is
> **docs/09-DESIGN-REVISION.md**; where the two disagree, that file is
> correct. The information architecture and design reasoning below still hold.
# 03 — Design System

Al-Jilanee Textile Industry (Pvt) Ltd — the design language, the tokens and every
component in `assets/css/site.css`, written so that somebody who does not write
CSS can change the site without breaking it.

**Who this file is for**

- **(a) The owner or a junior member of staff** who will maintain the site. Every
  section answers "what is this, when do I use it, and what must not break".
- **(b) The person who commissioned it** who needs to see why the site looks like
  a specification sheet and not like the other textile websites.

**The source of truth is `assets/css/site.css`.** It is 42.0 KB, 1,244 lines,
22 numbered sections plus a "20b". If this document and the stylesheet ever
disagree, the stylesheet is right and this document is out of date — fix the
document.

**How evidence is labelled in this file**

| Label | Meaning here |
|---|---|
| **MEASURED** | I computed it or counted it while writing this document. The method is given. |
| **VERIFIED** | Recorded in `00-RESEARCH.md` with a primary source. The section is cited. |
| **UNVERIFIED** | Plausible but not sourced. Treated as a hint, never as a fact. |
| **UNKNOWN** | Not known. Not guessed. |

---

## 1. The design language, and why

### 1.1 What "Technical Datasheet" means

The whole site is built to look like the specification document a textile mill
would put in a buyer's hand: a printed data sheet, a lab report, or a machine
list. Seven ideas hold it together.

| Idea | What it looks like on screen | Where it lives in the CSS |
|---|---|---|
| Warm paper, not white | The page ground is a warm bone colour, `#f5f3ee`, not `#ffffff` | `--paper` |
| Near-black ink | Body text is `#16181d`, a soft black with a blue cast | `--ink` |
| Dye-vat indigo | One deep indigo, used for the header rules, the data-sheet bar and the footer | `--indigo` |
| Rust signal | One rust colour, used **only** for things you can act on | `--signal` |
| Hairline rules | 1px borders everywhere; no drop shadows except two | `--line`, `--line-strong` |
| Tabular monospace numbers | Every measured value — kg, metres, dates, machine counts — renders in the system's monospace face with digits of equal width | `--font-mono`, `.val` |
| 2px square corners | Nothing on this site is rounded. `--radius: 2px` | `--radius` |

"Tabular numerals" means the digits are all the same width, so a column of
numbers lines up on the decimal point. That is why a machine table on this site
reads cleanly without centring anything.

The name is a description, not a decoration. When you add a section, ask:
**would this look right printed on a mill's data sheet?** If the answer is no,
you are about to break the design.

### 1.2 Why the two obvious directions were rejected

Three directions were considered. One was chosen. The two rejected ones are
listed here so nobody re-proposes them in six months.

**Rejected: "Industrial Dark."** Full-bleed charcoal or near-black background,
white text, a saturated accent colour, cards floating on the dark ground.

Why not: in the 2010s and 2020s that look is the default skin of every software
product. It reads as "SaaS dashboard", not as "mill". A textile processing unit
is a physical plant with dye vats, steam, wet floors and hard machinery. Putting
it in a dark software interface is a costume. Worse, dark themes make dense
tables harder to read for a buyer scanning twenty machine rows on a laptop in
daylight, which is exactly what this site asks that buyer to do. The research
found the honest competitor — the one live, genuine site in the sample — is
plain, not dark.

**Rejected: "Photographic Documentary."** Full-bleed photography, a dramatic
image of the plant, overlays, a scrolling sequence.

Why not: it is **impossible today**, and pretending otherwise would be the worst
kind of lie. The client has no photographs. There is no dye-house shot, no
printing hall, no nameplate photograph. The alternatives are stock photography of
some other mill — which is a fabricated claim about this business — or a
full-colour abstract image — which is decoration with no information in it. The
research found the anti-reference: a live, ranking Faisalabad dyeing site
shipping a hero image whose own filename is `istockphoto-…jpg`, a fabricated
founder with a stock headshot, and stat counters rendering zero.

The site solves this honestly instead. Every image slot is a **labelled spec
plate**: a hatched frame that says `Awaiting photo · facility-01` and tells you
exactly which photograph belongs there and what it must show. That is a
documentation device, not a placeholder pretending to be content. When the client
photographs the plant, a real `<img>` drops into the same frame and the styles
handle both cases.

**Chosen: "Technical Datasheet."** Warm paper, hairline rules, one data sheet
panel, monospace numerals, no photography required.

### 1.3 The argument the design rests on

This is the whole case, in one paragraph, and it comes from the research
(`00-RESEARCH.md`, Topic C — **VERIFIED**):

> Across the sites measured, one real Faisalabad processor — which advertises
> itself as "Pakistan's leading textile processing unit", 44 million metres of
> capacity and 700+ employees — renders **242 words** inside 138 KB of markup,
> next to roughly 7.8 MB of images. Another, with the best machine tables in the
> sample, has a **0.71% text share**: the tables are beautiful and unreadable by
> any search engine, any AI assistant, or any buyer on a poor connection.

That is the gap: **not polish. Disclosure.** The local field has plenty of sites
that look expensive. Not one of them publishes the number of machines, the lot
size band, the working width, the certificate expiry date, or the stage the lead
time starts from. So the design spends its entire budget on making *checkable
data* comfortable to read, and spends almost nothing on making the site look
expensive.

Everything below follows from that. The type is a system font because a data
sheet must open instantly. The corners are square because round corners are a
consumer signal. The photographs are absent because a photograph is not
evidence. The dark section exists once, on the page, to make one point — the list
of certificates this mill does **not** hold — and it earns that contrast.

### 1.4 Quick reference — the most common changes

| To change this | Edit this one place | Do not |
|---|---|---|
| The page background | `--paper` in `:root` | Add a background to `<body>` |
| The main action colour | `--signal` and `--signal-deep` | Add a fifth accent colour |
| How big the headings are | `--fs-800`, `--fs-display` | Use `font-size` on a heading tag |
| The gap between sections | `.section { padding-block }` | Add `margin-top` to each section |
| The width of the content | `--wrap` | Add a second `max-width` |
| How fast a hover or focus state changes | `--dur` | Write `0.3s` in a component |
| Add a new page | Copy any existing page; it already has the header, nav, footer and ribbon | Start from a blank file |

---

## 2. Colour

### 2.1 How to read the ratios in this section

Every ratio below was **MEASURED** while writing this document using the standard
WCAG 2.x formula: convert each channel to relative luminance with the
0.03928 threshold and the 2.4 exponent, then take the lighter value plus 0.05
over the darker value plus 0.05. The script was checked against three published
reference values first — `#000000` on `#ffffff` returns exactly 21.0000,
`#777777` on `#ffffff` returns 4.4781, and `#767676` on `#ffffff` returns 4.5422.
**Every ratio printed below is the full computed value, not a one-decimal
rounding.** A figure that passes only after rounding is a figure that fails.

> **A note on the figures in `00-RESEARCH.md` §D4.** That section records
> 16.3:1, 9.4:1, 5.4:1, 14.2:1 and 6.4:1, described as "measured by hand". My
> recomputation gives 16.01, 9.53, 5.51, 12.82 and 6.37. The last one is the
> brief's 6.4 rounded to one decimal, so the brief is not entirely unrounded.
> Every pair passes AA by a wide margin either way, so the conclusion does not
> change — but **use the numbers in this table**, and if you change a token,
> recompute rather than reusing either set.

**The three thresholds you need to know (WCAG 2.2 AA):**

| Threshold | Applies to | Requirement |
|---|---|---|
| Text contrast | Normal body text | **4.5:1** |
| Text contrast | Large text — 24px and above, or 18.66px and above in bold | **3:1** |
| Non-text contrast | Focus rings, control boundaries, anything you must be able to *see* to operate the page | **3:1** |

### 2.2 The ground colours

| Token | Hex | What it is | Where it is used |
|---|---|---|---|
| `--paper` | `#f5f3ee` | The page. Warm bone, not white. | `<body>`, all section backgrounds |
| `--paper-raised` | `#ffffff` | Things that sit *on* the paper | Cards, tables, form fields, mobile nav drawer, WhatsApp bar |
| `--paper-sunk` | `#ebe7de` | Things that sit *in* the paper | Page headers, table zebra rows, alternating data-sheet rows, photo placeholders |

The three-step ground is doing real work. A card that is pure white on a bone
page reads as "raised" without a shadow. A zebra row in `--paper-sunk` reads as
"this is a different band" without a line. **If you find yourself wanting a
fourth ground, you almost certainly want `--line` instead.**

### 2.3 The ink colours on paper

| Token | Hex | Role | On `--paper` | On `--paper-raised` | On `--paper-sunk` | AA (4.5:1) |
|---|---|---|---|---|---|---|
| `--ink` | `#16181d` | Body text, headings, table first column | **16.01:1** | **17.76:1** | **14.39:1** | pass, all three |
| `--ink-2` | `#3a3f49` | Secondary text — leads, card body, captions, table column heads | **9.53:1** | **10.57:1** | **8.56:1** | pass, all three |
| `--ink-3` | `#5c6270` | Muted — eyebrows, units, hints, footnotes, placeholders | **5.51:1** | **6.11:1** | **4.95:1** | pass, all three |

The tightest of the 30 measured pairs is `--ink-3` on `--paper-sunk` at
**4.95:1**. That is the "TO CONFIRM" chip on a zebra row and the unit text
inside a data-sheet row. It passes, with 0.45 of headroom. **If you darken
`--paper-sunk` at all, re-measure `--ink-3` on it first** — that is the pair that
will break first.

### 2.4 The brand and action colours on paper

| Token | Hex | Role | On `--paper` | On `--paper-raised` | AA (4.5:1) |
|---|---|---|---|---|---|
| `--indigo` | `#1b2a4a` | Headings' accent, data-sheet values, the current nav item, the focus ring | **12.82:1** | **14.22:1** | pass |
| `--indigo-deep` | `#131c33` | The footer ground; hover state of the ink button | 15.25:1 (as ink-invert) | — | pass |
| `--indigo-soft` | `#e8ebf2` | *Declared but never used.* Intended for tinted wells. | — | — | — |
| `--signal` | `#a63d12` | **Actions only.** Primary button fill, `link-arrow`, the current nav underline, the eyebrow accent | **5.74:1** | **6.37:1** | pass |
| `--signal-deep` | `#83300d` | Hover / active for the above | — | white text on it: **8.77:1** | pass |
| `--signal-soft` | `#f7ece6` | Tinted callout ground | ink-2 on it: **9.11:1** | signal on it: **5.49:1** | pass |

**The rule that makes `--signal` work:** rust is reserved. It marks the thing you
can *do*. A primary button. A "read more" arrow. The underline on the page you
are already on. Nothing decorative is ever rust. When the whole site is bone and
indigo, one rust element is unmissable; if rust appears five times on a page it
has stopped meaning "act here".

**`--indigo` is not the action colour.** It is the *brand* colour: what the mill
is, not what the visitor should do. A measured value in a data sheet is indigo
because it is a fact, not because it is clickable.

### 2.5 The lines

| Token | Hex | Role | Contrast against `--paper` | Against `--paper-raised` |
|---|---|---|---|---|
| `--line` | `#d8d4ca` | Internal hairlines: table rows, card inner rules, section separators | **1.33:1** | **1.48:1** |
| `--line-strong` | `#b3ac9c` | The border around a whole component: cards that matter, tables, form fields, the data sheet | **2.04:1** | **2.26:1** |
| `--line-invert` | `#33405e` | Hairlines on the indigo ground: dark cards, footer rules | 1.38:1 vs `--indigo` | — |

These are below 3:1 and that is **deliberate and acceptable**. WCAG's 3:1
non-text rule applies to things you must be able to *see in order to operate the
page* — a focus ring, a control's boundary, the edge of a hit area. A hairline
between two table rows carries no meaning on its own; the table's own heading
and its `--line-strong` border identify it.

The test to apply before you rely on a border: **can the user identify and use
this control from its label and shape alone?** For a ghost button the answer is
yes — the label is indigo on paper at 12.82:1. For a form field, yes — the
permanent label above it is `--ink-2` at 10.57:1. The border reinforces, it does
not carry. **The day you add a control whose only visual signal is a border
colour changing on hover, that control fails.**

### 2.6 The four status colours

These exist for one purpose: to say honestly whether something is held, in
progress, available on request, or not held. They are the most important four
colours on the site.

| State | Pill | Text colour | Fill | Measured contrast on its own fill | AA (4.5:1) |
|---|---|---|---|---|---|
| Held | `.status--held` | `--held` `#1c5c41` | `--held-soft` `#e4efe9` | **6.71:1** | pass |
| In progress | `.status--progress` | `--progress` `#7a5200` | `--progress-soft` `#f6eedd` | **5.99:1** | pass |
| Available on request | `.status--onrequest` | `--onrequest` `#2b4b7d` | `--onrequest-soft` `#e7edf6` | **7.42:1** | pass |
| Not held | `.status--notheld` | `--notheld` `#5c6270` | `--notheld-soft` `#eceae4` | **5.08:1** | pass |

The pill's border is the same colour as its text, so the pill boundary is 5.08:1
or better too — the shape is legible, not just the words.

The names are the vocabulary of the site. Use these four words, and no others:

- **Held** — we have the document, the number and the expiry are published.
- **In progress** — applied for, or under way. *Currently unused on the site:
  **MEASURED**, zero occurrences across all nine pages, because the client's real
  certification position is **UNKNOWN**. The state exists in the CSS so that when
  the owner tells you the truth, you change one word.*
- **Available on request** — we can arrange it through a third party.
- **Not held** — we do not have it, and we are saying so.

**Do not invent a fifth state.** A grey "coming soon" pill is a promise nobody
authorised.

### 2.7 The dark-section inversion

A dark section is the one place the ground flips. These tokens are used there
instead.

| Token | Hex | Role | Measured contrast |
|---|---|---|---|
| `--indigo` | `#1b2a4a` | The dark ground itself | — |
| `--ink-invert` | `#f5f3ee` | Headings and primary text on indigo | **12.82:1** — pass |
| `--ink-invert-2` | `#c3cbdb` | Secondary text and body copy on indigo | **8.73:1** — pass |
| `--indigo-deep` | `#131c33` | Footer ground | ink-invert on it: **15.25:1**; ink-invert-2 on it: **10.38:1** — both pass |

**The failure you must never cause.** If a light-ink token is left on an indigo
ground — or a dark-ink token is left on a dark ground — the page still *looks*
plausible on a good monitor and is unreadable to the person who needs it. These
are the numbers, so you can catch it before shipping:

| If this ends up on `--indigo` | Ratio | Verdict |
|---|---|---|
| `--ink` | 1.25:1 | invisible |
| `--ink-2` | 1.35:1 | invisible |
| `--ink-3` | 2.33:1 | fails |
| `--line-strong` | 6.30:1 | fine — a border, not text |

**How the inversion is triggered.** Adding `section--dark` to a `<section>` is
only half the instruction. The stylesheet uses a **second class, `on-dark`,**
which re-points the components. The markup in the shipped pages is:

```html
<section class="section section--dark on-dark" id="trust">
```

**Always write both classes together.** `section--dark` paints the ground;
`on-dark` repaints the components sitting on it. Drop `on-dark` and every card
inside that section keeps its white background — visually wrong, but readable.
Add `on-dark` without `section--dark` and nothing changes, harmlessly.

What `on-dark` re-points today: `.eyebrow`, `.card`, `.card p`,
`.card__index`, `.btn--ghost`, and `:focus-visible`. Anything else you place
inside a dark section needs its own `.on-dark` rule added.

**One specificity rule worth knowing.** `.on-dark .eyebrow` (two class selectors)
beats `.eyebrow--signal` (one class selector), regardless of source order. So
`eyebrow eyebrow--signal` inside a dark section renders in `--ink-invert-2`, not
rust — automatically, and correctly. **MEASURED**: 30 of the 32 eyebrows on the
site use `eyebrow--signal`; the two plain `.eyebrow` instances are both inside
the dark quality section, where the signal colour would be wrong anyway.

**Tables do not invert.** `table.spec` keeps its white ground and its
`--line-strong` border even inside a dark section, because a data sheet is white
paper. If you ever put one there, expect a bright block in a dark section. That
is correct, not a bug — but check it looks deliberate.

---

## 3. Typography

### 3.1 There are two font families, and both belong to your operating system

```css
--font-sans: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
             Arial, "Noto Sans", "Liberation Sans", sans-serif;
--font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas,
             "Liberation Mono", "Courier New", monospace;
```

**Zero webfonts. Not one file is downloaded.** Everything else on the site is a
file the visitor has to fetch; the font is not.

### 3.2 Why zero webfonts — the measured reason

`00-RESEARCH.md` §D3 records this as **VERIFIED** from web.dev: if the largest
painted element (the **LCP**, Largest Contentful Paint) is text set in a system
font, its **resource load time is 0 ms**. A webfont is a blocking request, and
when it finally arrives it replaces text that is already on screen, which pushes
everything down and registers as a **CLS** — a layout shift. Core Web Vitals
thresholds are LCP ≤ 2.5 s, INP ≤ 200 ms and CLS ≤ 0.1 at the 75th percentile
(`00-RESEARCH.md` §D1, **VERIFIED**).

So the claim this design makes is exact: **on this site the largest thing on
screen is the first line of text, and it is painted the instant the HTML
arrives.** There is no font swap, because there is no font.

**The other reason is arithmetic.** The research catalogued a competitor
loading Rubik, Roboto, Arimo, Open Sans *and* Abril Fatface, and another loading
Montserrat at all fourteen weights for a five-item menu (`00-RESEARCH.md` §C6,
**VERIFIED**). Two families resolved by the operating system cost zero bytes.

**What it looks like, honestly.** A different computer shows a slightly
different letterform. That is the trade and it was made on purpose. If you are
shown this on a Windows laptop and it is Calibri or Segoe UI, and then on a Mac
and it is SF Pro, and then on an Android phone and it is Roboto — that is the
design working, not a bug. Do not "fix" it by adding a webfont.

**The exception worth knowing:** `--font-sans` is used only twice in the whole
stylesheet — once on `<body>` and once to override `.unit` inside tables. Almost
everything mono is deliberate.

### 3.3 The type scale

All sizes are `rem`, so they scale with the visitor's own browser setting. A
visitor who has set their text size to 120% gets 120% everywhere, including
padding, because the spacing scale is `rem` too. **Never replace a `rem` with a
`px` on a type or spacing token.**

| Token | Value | What it is for | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| `--fs-100` | `0.75rem` (12px) | Mono labels, table units, eyebrow text, pill text | 600–700 | 1.2–1.4 | `+0.08em`, uppercase |
| `--fs-200` | `0.8125rem` (13px) | Dense meta, hints, captions, card footers | 400–600 | 1.5–1.6 | normal |
| `--fs-300` | `0.9375rem` (15px) | **The workhorse.** Table cells, card body, nav links, buttons, field text | 400–650 | 1.6 | normal |
| `--fs-400` | `1rem` (16px) | **Body text. Never go below this.** | 400 | 1.6 | normal |
| `--fs-500` | `1.0625rem` (17px) | The `.lead` paragraph and accordion questions | 400–600 | 1.75 | normal |
| `--fs-600` | `1.25rem` (20px) | `h4`, card titles, flow-step titles | 650 | 1.15 | `-0.005em` |
| `--fs-700` | `1.5rem` (24px) | `h3`, the big number in a `.fact` | 650 | 1.15 | `-0.011em` |
| `--fs-800` | `1.875rem` (30px), `2.125rem` (34px) at ≥896px | `h2` | 650 | 1.15 | `-0.011em` |
| `--fs-900` | `2.375rem` (38px), `3rem` (48px) at ≥896px | *Declared but never used* — `h1` uses `--fs-display` | — | — | — |
| `--fs-display` | `clamp(2.125rem, 1.4rem + 3.2vw, 3.5rem)` | **`h1` only.** Grows with the window between 34px and 56px | 650 | 1.15 | `-0.011em` |

`--fs-display` uses `clamp()` — a value that is a minimum, a formula based on
viewport width, and a maximum. On a 320px phone it is 34px. On a 1440px monitor
it has stopped at 56px. **It will never be enormous on a wide screen and never
unreadable on a narrow one.** Do not set an `h1` size by hand.

**Line heights:** `--lh-tight: 1.15` (headings), `--lh-snug: 1.3` (accordion
questions), `--lh-body: 1.6` (everything else), `--lh-loose: 1.75` (leads).
Headings are tight because they are short and heavily weighted; body copy is
loose because at 15–16px on a bone ground, 1.5 would be cramped for a reader
who is not a native English speaker — which is, in this trade, a large share of
buyers.

**Letter spacing:** `--ls-wide: 0.08em` for the small uppercase mono labels.
Uppercase without tracking looks broken at 12px, because capital letters are
naturally spaced for lowercase. `--ls-tight: -0.011em` for the large headings,
the opposite correction.

### 3.4 The measure — how long a line is allowed to be

The **measure** is the maximum width of a line of text, in characters. Long
lines are the single biggest readability problem on a wide screen.

| Class | Width | Where |
|---|---|---|
| `.lead` | `44ch` | The lead paragraph under a hero or a section heading |
| `.measure` | `62ch` | Normal body copy in a section |
| `.measure-narrow` | `46ch` | Long-form reading, e.g. the buyer-questions block |
| `.section-head` | `58ch` | The eyebrow + heading + paragraph group |
| `.pagehead__lead` | `58ch` | Under an inner page's `h1` |
| `.qa__a` | `66ch` | The answer inside an accordion |
| `--wrap` | `74rem` (1184px) | The whole content column |
| `--wrap-narrow` | `46rem` (736px) | *Declared but never used.* Use the `.measure-narrow` class instead. |

`ch` is the width of the "0" character in the current font, so `62ch` means
roughly 62 characters. **If you write a long paragraph, put it inside
`.measure`. If you forget, the line runs the full 1184px and the visitor loses
their place on the return sweep.** This is the most common mistake a new
contributor makes.

### 3.5 `.eyebrow` — the signature element

This is the one thing that makes the site recognisable at a glance, and it
appears **32 times across the nine pages** (**MEASURED**).

```html
<span class="eyebrow eyebrow--signal">Capabilities</span>
<h2>What we can do to your fabric</h2>
```

A 12px uppercase monospace label in `--ink-3` (or `--signal`) sitting on its own
line above a heading, with `--sp-3` (12px) underneath. It is the same device as
the `SECTION 04 /` on a printed technical manual, and it is what makes a long
page skimmable: a reader who reads nothing else can still list your sections.

**Use it:** at the top of every `.section-head`, once per page head, and any
time you open a group of cards or a run of table rows.

**Do not use it:** for a category tag, a status, or anything the reader must not
be able to miss. At 12px uppercase it is deliberately quiet. If a thing is
important enough that missing it would cost money, make it a heading.

**Accessibility:** it is a `<span>`, not a heading, so it does not appear in the
document outline — that is intentional. It must sit *outside* the `<h2>`, not
inside it, or the heading text announced to a screen reader becomes
"CAPABILITIES, What we can do to your fabric". Never nest it inside a heading.

### 3.6 `.val` — the monospace number

```html
<span class="channel__v val">30–60 days</span>
```

Two things: the monospace family, and `font-variant-numeric: tabular-nums` so
the digits are all the same width. **Use `.val` on every measured value** —
capacity, dates, durations, counts, percentages, machine numbers. If a number
appears in body prose and it matters to a buyer, give it the class.

In `table.spec` the equivalent is the cell class `.num`, which bundles the mono
family, tabular numerals, `--sp-1` letter tightening, `white-space: nowrap` and
`--indigo`. Units go in a `<span class="unit">` inside the cell, which renders
back in the sans face, one step smaller, in `--ink-3` — so `6,000–25,000
kg/day` reads as one number plus one quiet unit, and the unit is 6.11:1 on
white, comfortably readable.

---

## 4. Space, radius, width and header height

### 4.1 The 4px base scale

Every gap, every padding, every margin on this site is a multiple of 4 pixels.
**There are no one-off values.** If you need a gap, it is on this list; if it
is not, you are about to invent a value that will not match anything.

| Token | Value | Typical use |
|---|---|---|
| `--sp-1` | `0.25rem` = 4px | The inside of a pill; margins inside a caption |
| `--sp-2` | `0.5rem` = 8px | Label-to-input gap, gaps inside a chip |
| `--sp-3` | `0.75rem` = 12px | Inside a button, eyebrow-to-heading, small item gaps |
| `--sp-4` | `1rem` = 16px | **The default.** Between paragraphs, card padding on small items, page gutters below 768px |
| `--sp-5` | `1.5rem` = 24px | Card padding, callout padding, the gap between sections that are `--tight` |
| `--sp-6` | `2rem` = 32px | Between a heading group and its content |
| `--sp-7` | `2.5rem` = 40px | Between `h3` blocks in `.prose`; the sidebar gap |
| `--sp-8` | `3rem` = 48px | Section padding on mobile; between `h2` blocks in `.prose` |
| `--sp-9` | `4rem` = 64px | Section padding on desktop; hero padding on desktop |
| `--sp-10` | `5rem` = 80px | *Declared but never used* |
| `--sp-11` | `6rem` = 96px | *Declared but never used* |

**The rules that make the scale work:** inside a component use `--sp-3` to
`--sp-5`; between components use `--sp-5` to `--sp-8`; between page sections
use `.section` padding, not a margin. **The page gutter is `--sp-4` (16px) below
768px and `--sp-6` (32px) at 768px and above.**

### 4.2 Radius

| Token | Value | Used on |
|---|---|---|
| `--radius` | `2px` | **Everything.** Buttons, cards, the data sheet, tables, pills, inputs, the nav toggle, the skip link, status pills |
| `--radius-lg` | `3px` | *Declared but never used* |

**Nothing on this site is round, and that is a decision, not an oversight.**
Rounded corners are a consumer-software signal — they read as friendly, casual,
app-like. A specification sheet has square corners. A dye house has square
corners. 2px is used rather than 0px so that the components do not look like
untouched HTML.

The two exceptions are deliberate and small: the focus ring uses `1px` so it does
not look like a border, and the 6px dot inside a status pill is a circle because
it is a dot, not a corner.

### 4.3 The two shadows

| Token | What it is | Where |
|---|---|---|
| `--shadow-plate` | `0 1px 0 var(--line)` — a one-pixel rule, not a shadow | `.card`. It reads as a card sitting on paper rather than floating above it. |
| `--shadow-lift` | Two soft shadows, 18% at the top | `.datasheet`, `.card--link:hover`, the mobile nav drawer |

**If you add a third shadow, you have broken the design.** Two is the vocabulary:
paper-thin, and lifted. A blurred, coloured, coloured-edge "soft UI" glow is
exactly the look this project is escaping.

### 4.4 The content width and the header

| Token | Value | Notes |
|---|---|---|
| `--wrap` | `74rem` = **1184px** | The full content column. At 1184px it is 74 characters of body text — the measure is doing the work, not the container |
| `--wrap-narrow` | `46rem` = 736px | *Declared but never used.* Use the class `.measure-narrow` |
| `--header-h` | `3.75rem` = **60px** below 896px | The sticky header's minimum height |
| `--header-h` | `4.5rem` = **72px** at 896px and above | Set in a media query in `:root` |

Everything sticky is anchored to `--header-h`, which is why the header can grow
without anything else breaking:

- `html { scroll-padding-top: calc(var(--header-h) + var(--sp-4)); }` — so a
  focused element never lands under the header.
- `:target { scroll-margin-top: calc(var(--header-h) + var(--sp-5)); }` — so
  jumping to `#pretreatment` from a link in another page clears the header too.
- The mobile nav drawer is `position: fixed; inset: var(--header-h) 0 auto 0` —
  it sits directly under whatever the header height currently is.

**Those three lines are WCAG 2.2 SC 2.4.11 Focus Not Obscured (Minimum), Level
AA** (`00-RESEARCH.md` §D4, **VERIFIED**). They are not decoration. If you make
the header taller by hand, verify all three still work; if you make it taller
than about 90px on a phone, the drawer will eat the screen.

---

## 5. The components

Each component below gives you: what it is, when to use it, when **not** to,
and its accessibility obligations. They are in stylesheet order, so you can read
this section with `site.css` open beside it.

### 5.1 Accessibility primitives (CSS §3)

**`.skip` — the skip link.** The first thing in the tab order on every page. It
sits off-screen at `top: -100px` and slides to `top: 12px` when focused, so a
keyboard or screen-reader user can jump past the header and the seven-item menu
straight to `<main id="main">`.

- **Use it:** as the very first element inside `<body>`, on every page, pointing
  at `#main`. There is exactly one, and `id="main"` must exist.
- **Do not use it:** for a "skip to search" or a second skip link. One is enough.
- **Accessibility:** it must respond to `:focus`, not `:focus-visible` — a skip
  link that only appears on keyboard focus is invisible to a user who navigates
  by other means. Its own outline is the standard indigo ring, and it is the
  first thing a keyboard user sees, so it must be unmissable. It is hidden from
  printing, because a skip link on paper is meaningless.

**`.vh` — visually hidden.** A 1×1px clip that keeps text in the accessibility
tree. Use it for a heading that exists for structure but would read out of
context ("Section 3"), or a label whose meaning is carried by the field it
labels. **Do not use it for anything a sighted user needs** — that is hiding
content, and it fails WCAG. `.hp` (the spam honeypot) is a *different* mechanism
and does remove itself from the accessibility tree; see §5.17.

**:focus-visible — the accessibility floor.** A 3px solid `--indigo` ring with a
2px offset, changing to `--paper` on dark grounds. Measured: **12.82:1** against
the paper ground, **14.22:1** against white cards, **12.82:1** as paper-on-indigo.
That clears the 3:1 non-text requirement with a very large margin.

- **Do not remove or soften these rules.** The stylesheet's own editing guide
  calls them the site's accessibility floor.
- `:focus { outline: none; }` exists only so that mouse clicks do not draw a
  ring. If you delete the `:focus` line, you get a ring on every click — ugly but
  not broken. If you delete the `:focus-visible` block, you break keyboard
  navigation entirely.

### 5.2 Layout containers (CSS §5)

**`.wrap`** — the centred content column, `max-width: 1184px`, with the page
gutter. Every top-level section contains exactly one. Nested `.wrap`s inside a
`.wrap` double the padding — a common accident, and it looks like a bug because
it is one.

**`.section`** — vertical padding between page sections, `--sp-8` (48px) on
mobile and `--sp-9` (64px) on desktop. Modifiers:

| Modifier | Effect | Use it for |
|---|---|---|
| `.section--tight` | `--sp-7` (40px) | Short sections that follow a big one — a fact strip, a closing note |
| `.section--sunk` | `--paper-sunk` ground | Breaking up a long run of identical sections, and any page head |
| `.section--dark` + `.on-dark` | Indigo ground | **Once per page.** See §6 |
| `.section--rule` | 1px top border | The first section after another, when a sunk band has just ended |

**`.section-head`** — the eyebrow + heading + paragraph group, capped at 58ch
with `--sp-6` underneath. `.section-head--center` centres it. Use one per
section; it is the unit that makes a long page readable.

**`.grid` and friends** — `gap: --sp-4` always. `.grid-2`, `.grid-3`, `.grid-4`
give 2 columns at 640px, and `.grid-3`/`.grid-4` reach 3 and 4 columns at 1024px.
`.grid-sidebar` is the workhorse two-column shape: main content plus a
`20rem` (320px) rail, from 1024px. **Use `.grid-sidebar` on any page that has
both an argument and a set of numbers or contacts.** It is why the lead-time
page and the contact page do not feel like a wall.

**`.stack` / `.stack-lg`** — vertical rhythm between block children, `--sp-4` or
`--sp-6`. Use when you are stacking plain `<div>`s. **Do not use on a list of
links or form fields** — use `<ul class="stack">` or `.form` so the semantics
survive.

### 5.3 Header and navigation (CSS §6)

**`.site-header`** — sticky, `z-index: 100`, a hairline bottom border, and a
translucent paper background with a blur so content scrolling underneath stays
legible. Translucency is why the header text is measured against `#f5f5f5`
(the 0.94 blend over the page ground), where `--ink-2` measures **9.69:1** —
passes, with room.

**`.brand`** — the mark plus the name plus the sub-line "Dyeing · Printing ·
Finishing". It is a link to the homepage and needs an `aria-label` because the
visible text alone does not say "home". **The mark is inline SVG with
`aria-hidden="true" focusable="false"`** — decorative, correctly hidden, and it
carries the whole brand colour.

**`.nav` and `.nav__link`** — seven items: Dyeing, Printing, Finishing,
Capacity, Facility, Quality, About. There is deliberately **no "Home"** (the
brand is home) and **no "Contact"** (Contact is the action, it is the rust
button). Each link has a 2px bottom border that is transparent at rest,
`--line-strong` on hover, and `--signal` when the link carries
`aria-current="page"`.

- **Accessibility:** the current page must be marked with
  `aria-current="page"` and not with colour alone — the rust underline *is* the
  colour, and the attribute is what a screen reader announces. Link text must
  make sense read on its own, out of context, which is why they are process
  names and not "More". The nav is a `<nav aria-label="Main">`; the breadcrumb
  trail is a separate `<nav aria-label="Breadcrumb">`, so the two are
  distinguishable.

**`.nav-toggle` and the mobile drawer.** Below 1024px the menu collapses to a
`Menu` / `Close` button and the nav becomes a full-width panel dropping from the
header.

- **Use it:** this is the only navigation pattern on the site. Do not add a
  second menu, a mega-menu, or a search box.
- **Do not use it:** as a hamburger icon. It is a **text button** reading
  "Menu", which means its function is readable without the icon, which means it
  works when the icon font fails to load. This is a deliberate choice and it is
  the one navigation decision most likely to be "improved" by mistake.
- **Accessibility:** the button has `aria-expanded`, which flips between `false`
  and `true`, and `aria-controls` pointing at the nav's `id`. **The visible word
  changes with the state** — "Menu" when closed, "Close" when open — so the
  control is named by what it will do next. It is 44px tall, against the WCAG
  2.2 SC 2.5.8 Target Size (Minimum) AA floor of 24×24 CSS px. The drawer closes
  on `Escape` and returns focus to the button. It closes when you pick a
  destination, but **not** when a click has `detail === 0` — that is the keyboard
  case, so tabbing through the open menu does not close it under your fingers.
  A media-query listener closes it if the window grows past 1024px, so
  rotating a tablet does not leave an invisible open drawer.

### 5.4 Buttons and links (CSS §7)

Five button skins. They are the only five that exist.

| Class | Looks like | Use for |
|---|---|---|
| `.btn` (base) | 48px tall, `--sp-3` vertical and `--sp-5` horizontal padding | The base; always add a variant |
| `.btn--primary` | Rust fill, white text, **6.37:1** | **The one action on a screen.** "Send a specification", "Send enquiry", "Get a quote" |
| `.btn--ink` | Indigo fill, paper text, **12.82:1** | A second action that is important but not primary |
| `.btn--ghost` | Transparent, indigo text, `--line-strong` border, **12.82:1** | The alternative route. "Message on WhatsApp", "Email instead" |
| `.btn--sm` | 40px tall, `--fs-200` text | In the header, in the mobile bar, in a rail |
| `.btn--block` | Full width of its container | Inside a `.rail`, and the mobile action bar |

`.btn-row` is a flex row that wraps, with `--sp-3` gaps. **Put buttons in a
`.btn-row` so they wrap on a phone instead of overflowing.** There is no icon
button, no arrow button and no pill button.

`.link-arrow` is the inline text link with a rust underline and a `→`. Use it
for "read the detail" links inside a card or a callout, where a full button would
be too loud.

**Accessibility, for buttons generally:**

- The minimum height is 48px on `.btn` and 40px on `.btn--sm`, both far above
  the 24px AA floor of SC 2.5.8. **Do not reduce these.** On a phone, a 32px
  button is a mis-tap generator.
- `.btn` sets `text-align: center` and `inline-flex`, so a wrapped two-word
  label stays centred.
- **A `<button>` is for actions; an `<a href>` is for destinations.** The form's
  submit is a real `<button type="submit">`; "Get a quote" is an `<a>`. The
  whole site is only 9 pages and there is no dynamic content, so this rule is
  easy to follow and there is never a reason to break it.
- The white on rust pair is **6.37:1**, measured, unrounded. Do not lighten
  `--signal` to make a button feel friendlier.

### 5.5 Hero (CSS §8)

**`.hero`** — the top block of the homepage. Vertical padding `--sp-7`/`--sp-8`
on mobile, `--sp-9`/`--sp-9` on desktop. `.hero__grid` becomes two columns at
1024px: `1.15fr` for the words, `1fr` for the data sheet.

- **What is in it:** an eyebrow, the `h1`, a `.lead` paragraph, a `.btn-row`
  with two actions, and a `.hero__note` — a small mono paragraph that states the
  published lead-time range and links to the page that explains the clock.
- **What is not in it, deliberately:** no image, no video, no carousel, no
  stat counter, no testimonial, no client logo strip. See §10.
- **Accessibility:** one `h1` per page and only one. The `h1` is set in
  `--fs-display` so it is 34px at minimum — comfortably above the large-text
  threshold, which matters because the design leans on weight rather than size
  to create hierarchy. The lead is capped at 44ch so it does not run the full
  width. **Do not put a second `<h1>` in the data sheet column.**

### 5.6 `.datasheet` — the signature component (CSS §8)

A bordered panel with an indigo title bar reading `AT A GLANCE` and a `DATA SHEET`
stamp, then a two-column list of label/value rows. Odd rows are tinted
`--paper-sunk`; values are mono, bold, indigo, right-aligned, with tabular
numerals. Values can carry a `<small>` note underneath in `--ink-3`.

This is the most important component on the site, and the reason is in the
research (`00-RESEARCH.md` §C2, **VERIFIED**): a headline like "44 Million Mtr
Capacity" is a claim, and a machine list is evidence a buyer can check. So the
very first thing on the homepage is a specification panel, and **six of its six
rows currently render a `TO CONFIRM` chip** because the client's real figures are
**UNKNOWN**. That is not an embarrassment. It is the design working.

- **Use it:** once per page, on the homepage, for the handful of values that
  answer "is this mill worth talking to".
- **Do not use it:** for a list of links, a menu, or anything you would call
  "features". It is a definition list, so it must be built from `<dl>`, `<dt>`
  and `<dd>`. A `<div>` grid of label and value pairs loses the relationship
  between them for a screen reader.
- **Accessibility:** the `<dl>` gives the pairing. The whole panel is an
  `<aside>` with `aria-labelledby` pointing at the title, so it is announced as
  a labelled complementary region rather than floating text. The value column
  is right-aligned with `tabular-nums`, so a screen reader reads "30 to 60 days"
  correctly — do not use `dir="rtl"` tricks or images of numbers. A `TO CONFIRM`
  chip is real text inside the `<dd>`, not a background image, so it is read
  aloud. **A chip must never be the only place a value appears** — always pair
  it with the real number when you fill it in.

### 5.7 `.factstrip` and `.fact` (CSS §8)

A four-across strip of headline facts directly under the hero, on a white ground
with a `--line-strong` border, cells separated by hairlines. Two columns on
mobile, four at 768px. Each `.fact` has a mono key, a large indigo value, and an
optional small note.

- **Use it:** for the four screening facts, once, near the top. Type of unit,
  location, association, how to enquire. Those are what a buyer checks before
  deciding whether to keep reading.
- **Do not use it:** as a general stat row anywhere else, and **never as a
  counter that counts up when you scroll** (see §10). A `.fact__v` that animates
  is the exact failure mode this project is built against.
- **Accessibility:** the value uses `font-variant-numeric: tabular-nums` so
  digits align. The `.fact__k` label is 12px uppercase mono in `--ink-3`
  (5.51:1 — passes). On the homepage the four values are overridden to
  `--fs-600` (20px) with an inline style, because the values are words ("Pure
  processing", "APTPMA member") and 24px would wrap awkwardly. That inline
  override is intentional; if you reuse `.fact` elsewhere, drop it.

### 5.8 `.pagehead` and `.crumbs` (CSS §9)

**`.pagehead`** — the top band of every inner page. A `--paper-sunk` ground, an
`h1` and a `.pagehead__lead` capped at 58ch, a hairline underneath, `--sp-6`
padding on mobile and `--sp-8` on desktop.

- **Use it:** exactly once, as the first thing inside `<main>` on each of the
  eight inner pages. Never on the homepage — the hero does that job there.
- **Do not use it:** for a second section on the same page. A second `.pagehead`
  reads as a page break.

**`.crumbs`** — a 12px mono uppercase breadcrumb trail.

```html
<nav class="crumbs" aria-label="Breadcrumb">
  <a href="index.html">Home</a> <span aria-hidden="true">/</span> <span aria-current="page">Contact</span>
</nav>
```

- **The separator is `aria-hidden="true"`.** A screen reader should hear "Home,
  Contact", not "Home, slash, Contact". This is the whole reason the separator
  is a `<span>` and not a bare `/` character.
- **The last crumb is a `<span>` with `aria-current="page"`, not a link.** A
  page should not link to itself. The attribute is what gets announced.
- Do not add a crumb level. The site is two levels deep and always will be.

### 5.9 `.card` (CSS §10)

White ground, 1px `--line` border, `--sp-5` padding, `--shadow-plate`, 2px
corners. `.card__index` sets a mono number in rust above the title (the `01`,
`02` on the homepage capability cards). `.card__foot` is pushed to the bottom
with `margin-top: auto`, so a row of cards of different text lengths still lines
its links up. **19 cards across the site — 13 plain, 6 `card--link`, 11 carrying
a `.card__index` number (MEASURED).**

- **Use it:** for a group of three or four parallel items — process groups, ways
  to work together, categories. In a `.grid-2`, `.grid-3` or `.grid-4`.
- **Do not use it:** for a single piece of content. One card alone looks like a
  mistake. And do not use it for a table's worth of data — that is
  `table.spec`, which is a different component with a different job.
- **`.card--link`** makes the whole card clickable. **The accessibility cost is
  real and must be paid properly:** the card is an `<article>`, and inside it
  there is also a real `<a class="link-arrow">` in `.card__foot`. The link is
  what a screen reader and a keyboard reach; the card is what a mouse clicks.
  The `:focus-visible` rule on `.card--link` is 3px at a 3px offset so the
  keyboard focus on the inner link is clearly visible against the card's edge.
  **If you remove the `link-arrow`, the card stops being a link to everyone
  except a mouse user — and the styling still looks clickable. That is the
  single most damaging thing you can do to this component.**

### 5.10 `.table-wrap` and `table.spec` (CSS §11)

**This is the real spec surface of the site.** The research found that capacity
data belongs in a table, not a headline (`00-RESEARCH.md` §C2, **VERIFIED**),
and that a table hidden inside client-side JavaScript is worth nothing
(§C6, **VERIFIED**). There are **11 `table.spec` tables across the site, all 11
inside a `.table-wrap`** (**MEASURED**).

```html
<div class="table-wrap" tabindex="0" role="region" aria-label="Machine list, scrollable">
  <table class="spec">
    <caption>Machines by process</caption>
    …
```

- **`min-width: 34rem` (544px)** on the table forces horizontal scroll on a
  phone rather than crushing five columns into 375px. **That scroll is the
  design working, not a failure.** Do not remove the `min-width` to "make it fit".
- **Accessibility obligations, all four of them:**
  1. `tabindex="0"` on the wrapper makes the scrollable region keyboard-
     reachable. Without it, a keyboard user cannot scroll the table sideways.
  2. `role="region"` plus `aria-label` names the region, so a screen reader
     announces what is scrollable before the user hits the arrow keys.
  3. Every table has a `<caption>`, rendered in 12px uppercase mono on a
     `--paper-sunk` band. It is not decoration; it is the table's accessible
     name.
  4. The header row is a real `<thead>` with `<th scope="col">`.
- **`.num` cells** carry the mono family, tabular numerals, `nowrap`, and
  `--indigo` (12.82:1 on paper, 11.52:1 on a zebra row). `.unit` spans inside
  them step back to sans, `--fs-200`, `--ink-3`. **Put the unit inside the same
  cell, in a `<span class="unit">` — never in a separate column** unless the
  unit differs row to row, because a separate unit column forces the reader to
  track two columns at once.
- **Zebra rows** use `--paper-sunk` on even rows. Never use colour alone to
  group rows; the zebra is decoration on top of the border, and the border is
  what carries the structure.
- `thead th` is `white-space: nowrap` and uppercase — column headings never
  break across two lines, which would make a five-column table unreadable.
- **Add a `Total` row** as a normal `<tr>` with the class on the value cell. A
  total the owner must fill in is shown with a `TO CONFIRM` chip like any other
  unknown value.

### 5.11 `.status` pills (CSS §12)

A bordered, 2px-rounded chip: 12px uppercase mono, 3px vertical and 8px
horizontal padding, a 6px dot in `currentColor`, and a 1px border in the same
colour. Four variants, defined in §2.6.

- **Use it:** in a table cell, in a `.keyvalue__row`, or in a list, whenever the
  answer to a question is one of the four states. **60 pills across the site**
  (**MEASURED**).
- **Do not use it:** for severity, for a category, for a rating, or for any
  state that is not one of the four words. And **never colour alone** — the word
  is inside the pill and must stay there. The colour is a second signal, never
  the only one (WCAG SC 1.4.1 Use of Colour).
- **Accessibility:** the dot is a CSS `::before` and is decorative; the word
  carries everything. Contrast is 5.08:1 at worst. 12px is small — it is the
  smallest text on the site, and it is only acceptable because **the same state
  is always also stated in the surrounding prose**. If you ever use a pill as the
  only place a reader learns something, use a bigger size or add the sentence.

### 5.12 `.callout` (CSS §13)

A bordered panel with a 3px left border in `--indigo`, on white, with a mono
uppercase key line. Two variants: `.callout--signal` (rust left border, tinted
`--signal-soft` ground — for warnings and "before you do this" notes) and
`.callout--sunk` (`--paper-sunk` ground, rust left border — a quieter aside).
**40 callouts across the site** (**MEASURED**).

- **Use it:** to say the thing that would otherwise be lost — a definition, a
  caveat, a policy, a "this is where the clock starts" note. One per idea.
- **Do not use it:** for a warning about something the site controls, and never
  stack two callouts together. Three callouts in a row is a page that is
  apologising.
- **Accessibility:** it is a plain `<div>` containing a `<span class="callout__k">`
  and paragraphs — **it is not a heading**. If the callout's key is a real
  section title, make it an `<h3>` and style it with the class. Do not rely on
  the left border to convey "this is important"; the key line does that.

### 5.13 `.flow` (CSS §14)

An ordered list rendered as a vertical process: a 2.5rem (40px) square on the
left carrying a zero-padded counter (`01`, `02`, …), a hairline connecting the
squares, and the step's content on the right. **27 steps across the site**, in
the lead-time sequence and the quality-control sequence.

- **Use it:** for a sequence where the order is the point — the process route,
  what happens to a lot, what the QC sequence is. The connecting line is the
  whole point; it says "this is a run, not a list".
- **Do not use it:** for a set of parallel options, for more than about six
  steps (the line gets very long), or for anything that is not sequential.
- **Accessibility:** it is an `<ol class="flow">`, so the order is in the
  markup, not just in the picture. **Known trade-off:** the reset applies
  `list-style: none` to `ol[class]`, and CSS counters are not reliably
  announced. A screen-reader user will hear "list, 5 items" and the step
  headings, but **not the numbers "01" to "05"**. That loss is acceptable here
  because the numbers add no information the headings do not. If you ever need
  the numbers to be real, write them into the markup as text. Note also that
  `list-style: none` can cause some screen readers to drop list semantics
  entirely; adding `role="list"` to the `<ol>` restores it and costs nothing.

### 5.14 `.gallery` and `.shot` (CSS §15)

**`.gallery`** is a grid — `.gallery--2` at 640px, `.gallery--3` at 1024px.

**`.shot`** is a figure: a 4:3 `.shot__frame` and a `.shot__body` caption block
with a `.shot__title`, a mono `.shot__meta` line giving the shot's reference and
shooting brief, and a `.shot__note` saying what the photograph must prove.

**The placeholder is the point.** The frame is a hatched pattern in `--line` on
`--paper-sunk`, with a dashed-border chip reading `Awaiting photo ·
facility-01`. **12 shots across the site** (**MEASURED**), all of them awaiting
photographs, because the client has none (**UNKNOWN** — see §1.2).

To add a real photograph, replace the chip with an image and keep the caption:

```html
<div class="shot__frame">
  <img src="assets/img/facility-01.jpg" alt="Dye house machine line, six machines, nameplates legible">
</div>
```

- **The stylesheet handles both cases** — `.shot__frame img` is already styled to
  `object-fit: cover` at 100% × 100%. You do not need to touch the CSS.
- **Accessibility:** every image needs real `alt` text describing what the
  photograph shows, not "facility photo" and never a filename. The `.shot__meta`
  line is inside the `<figcaption>`, so it is read as part of the caption. If a
  photograph is decorative, `alt=""` is correct — but for a facility gallery,
  a photo of your own dye house is never decorative.
- **Do not** put a stock photograph in a `.shot` frame. The research found a
  live ranking Faisalabad site whose hero image is named
  `istockphoto-…jpg` (`00-RESEARCH.md` §A6, **VERIFIED**). That is the single
  fastest way to look like a competitor.

### 5.15 `.qa` — the buyer-question accordion (CSS §16)

A stack of native `<details>` elements: `.qa` container, `.qa__item` per question,
`<summary class="qa__q">` for the question, `.qa__a` for the answer. **16
questions across three pages** — seven on `dyeing.html`, five on
`printing.html`, four on `finishing.html` (**MEASURED**). `quality.html` does
not use this component; it states the same kind of thing as a written list of
claims the mill does not make, which suits that page better than a set of
closed questions.

- **Use it:** for real questions a buyer asks, written in the buyer's words. Four
  to six per page. They exist because buyers need the answers, not for markup —
  the research found FAQ rich results were withdrawn on 7 May 2026 and that the
  published guidance is to do nothing special (`00-RESEARCH.md` §D5,
  **VERIFIED**).
- **Do not use it:** for a glossary, for navigation, or for a list that is
  shorter than three items. An accordion of two things should just be a list.
- **Accessibility, and this is the strongest component on the site:**
  - It is **native `<details>`**. There is no JavaScript. It opens with a mouse,
    with Enter, with Space, and it is announced correctly by screen readers with
    the right expanded/collapsed state. **Do not replace it with a div and a
    click handler.** That would cost you all of that.
  - The `+` / `−` sign is `::after` content and is decorative. The open state is
    carried by the element, not by the glyph. The minus is written
    `"\2212"` (U+2212, a true minus sign), not a hyphen — if you retype that
    value, use the escape or copy the character; a hyphen looks wrong at 24px.
  - The summary's hit area is the full row width (`justify-content:
    space-between` pushes the sign to the right edge), padded `--sp-4`
    vertically, so the target is far above the 24px floor.
  - Questions are `--fs-500` at `--lh-snug` and answers are capped at 66ch.
- **The answers must be honest.** Several of them currently say "we do not hold
  this" or carry a `TO CONFIRM` chip. That is correct and it is the reason the
  accordion is trusted.

### 5.16 Forms (CSS §17)

The enquiry form on `contact.html`. A two-column grid from 768px, one column
below. `.field` is a flex column: an uppercase mono `<label>`, the control, an
optional `.field__hint`, and a `.field__error`. `.field--full` spans both
columns (used for the textarea). `.form__submit` spans both columns and holds the
submit button plus a privacy note. `.form__status` is a live region that
appears only when it has content.

- **Nine required fields, one scroll, no steps.** The research found field
  *count*, not step count, is what determines whether a form gets finished
  (`00-RESEARCH.md` §D6). **MEASURED** in the shipped markup: 13 controls in
  total, 9 of them required — name, email, phone, fabric and construction,
  quantity, process, shade, date, destination — plus 3 optional ones (company,
  certification, free text) and the honeypot. `00-RESEARCH.md` §D6 calls this
  "eight required fields" and then lists nine; the markup is the authority, and
  it is nine. If you add a tenth required field, you have broken the design.
- **The labels are permanent and visible above the control.** Placeholder text
  is an *example* ("e.g. 100% cotton single jersey, 180 GSM, 58 inch"), never a
  label. A placeholder that disappears on first click is a WCAG SC 3.3.2 failure
  and it loses the user's place.
- **There is no CAPTCHA, and this is deliberate.** A CAPTCHA is the one element
  that would fail **WCAG 2.2 SC 3.3.8 Accessible Authentication (Minimum), AA**
  (`00-RESEARCH.md` §D4, **VERIFIED**), because it imposes a cognitive or motor
  test the user may not be able to pass. Spam control is a **honeypot**: a
  `.hp` wrapper at `left: -9999px` with `tabindex="-1"` on the input and
  `aria-hidden="true"` on the wrapper, so a human never sees it and a
  keyboard or screen-reader user never reaches it. Only a bot fills it in.
- **Accessibility obligations:**
  - `autocomplete` tokens on name, organisation, email and tel, so a returning
    visitor is not retyping.
  - Errors are stated in words and **say how to fix the problem** — "This email
    address does not look complete. Please check it includes an @ and a domain,
    for example name@company.com." Never "Invalid input". This is WCAG SC 3.3.3
    Error Suggestion.
  - **Never colour alone.** `.field__error` has a `⚠` prefix from `::before`,
    the border goes 2px `--signal`, and the text is set. Three signals.
  - Validation fires **on blur, never while typing** — correcting someone
    mid-word is hostile — and then re-validates live once the field has already
    been marked wrong, so fixing it clears the error immediately.
  - The form has `novalidate`, because the browser's own bubbles are
    untranslatable and unhelpful.
  - `.form__status` carries `role="status" aria-live="polite"`, so the
    confirmation is announced rather than silently swapped in.
  - Controls are 48px minimum height, double the AA floor.
- **There is no server.** Submitting composes the enquiry into a WhatsApp message
  and opens it. The visitor sees exactly what will be sent before they send it.
  Nothing is stored. Say so on the page — the copy already does.
- **Do not add a CAPTCHA, a cookie banner, or a hidden field that the visitor
  has to fill in.**

### 5.17 `.rail` and `.channel` (CSS §18)

**`.rail`** is the 320px sidebar in `.grid-sidebar`: white ground, a
`--line-strong` border, `--sp-5` padding, and a `.rail__title` — a mono
uppercase heading with a hairline underneath. A rail can hold more than one
title (`finishing.html` has two).

**`.channel`** is one contact route: a 2.75rem (44px) bordered icon tile on the
left, and on the right a mono `.channel__k` label, a `.channel__v` value (often a
link, often mono), and a `.channel__n` note. `.addr` renders a postal address in
normal, non-italic type.

- **The order rule is an accessibility requirement, not a style preference.**
  WCAG 2.2 **SC 3.2.6 Consistent Help (Level A)**: if help is offered on more than
  one page, it must appear in the same relative order every time. The full
  channel order on `contact.html` is **WhatsApp → Email → Telephone → Fax →
  Direct to a department → Plant address**; the homepage rail carries the first
  three of those in the same positions. **Do not reorder them to suit a page.**
  If you add a channel, add it at the same position everywhere it appears.
- **A reuse worth knowing about.** The homepage's "Typical lead times" rail
  reuses `.channel__k`, `.channel__v` and `.channel__n` for *data rows* —
  a labelled, mono, tabular value with a note — not for contact routes. It is
  why the lead times look like contact details. It works, and it is deliberate,
  but it means **`.channel` has two jobs**. When you add a rail, decide which job
  you mean, and never mix them inside one rail.
- **The icon tiles are `aria-hidden="true"`.** They are 20px line SVGs whose
  meaning is entirely in the adjacent text. A screen reader should hear
  "Telephone", not "telephone icon, telephone".
- `.channel__v` has `word-break: break-word` so a long email address wraps
  instead of forcing a horizontal scrollbar.
- `.channel__n` is where the honesty lives — "Replies during [hours to
  confirm]", "For purchase orders and lab-dip submissions, not for enquiries".
  Keep that note. It is the difference between a contact list and a contact page.
- **Fax has a slot because the association directory carries a fax for 100% of
  its 114 Faisalabad records** (`00-RESEARCH.md` §B1 item 7, **VERIFIED**). It
  is expected in this market. Do not remove it.

### 5.18 `.wa-bar` — the mobile action rail (CSS §19)

A fixed two-button bar at the bottom of the screen, shown only below 768px:
"Enquiry form" (ghost) and "WhatsApp" (primary). It is `display: none` by default
and turns on at `max-width: 47.99rem`.

- **Why it exists:** the research found that across all 114 Faisalabad directory
  records there are 114 fax numbers, 114 landlines, 113 email addresses and
  **exactly one mobile number — and not one WhatsApp contact** (`00-RESEARCH.md`
  §A5, **VERIFIED**). The business is conducted on WhatsApp. So on a phone,
  WhatsApp is a thumb-reach away on every page.
- **Accessibility:** the bar is **not** the only route to either action — the
  header button, the hero buttons, the rail and the full form are all there on
  mobile too. So the bar never becomes the only way to do anything. Its buttons
  are `.btn--sm`, 40px tall, well above the 24px AA floor. It carries
  `env(safe-area-inset-bottom)` padding so it clears the home indicator on a
  modern phone.
- **Two things you must not break:**
  1. **The footer must stay last.** The footer gets extra bottom padding
     (`--sp-8`, 48px) below 768px to clear the bar. **MEASURED**: the bar is
     about 57px tall (40px button + 8px padding top and bottom + 1px border),
     so the 48px compensation is 9px short of the bar's full height — but that
     shortfall sits inside padding that contains no text, so nothing is ever
     covered. If you put a newsletter form or anything else after the footer,
     it will be hidden.
  2. **It does not cover a focused element.** The bar is at the bottom and the
     page reserves room beneath it, so tabbing to a control in the last screen of
     content brings it into view above the bar.
- On desktop it is `display: none` and contributes nothing. Do not add a second
  floating element on desktop.

### 5.19 The footer (CSS §19)

`--indigo-deep` ground, `--ink-invert-2` text (**10.38:1** — pass), `--sp-8`
top and `--sp-6` bottom padding. `.footer-grid` is three columns from 768px:
`1.4fr` for the brand and address, `1fr` for Services, `1fr` for Company.
`.footer-bottom` is a hairline-separated row at `--fs-200` with the copyright
and the APTPMA membership line.

- **Footer headings are `<h2>`** in the markup and are styled as 12px mono
  uppercase labels. This is deliberate: a screen-reader user can jump to the
  footer's headings, and the visual design is not compromised. Do not demote
  them to `<span>`s to save a tag.
- **The brand block is the full legal name** and the address is an
  `<address>` element with `<strong>` for the office label. The full legal name
  is deliberate — it is the only formal public identity this company has outside
  the association directory, and the research found five of eleven domains on
  that directory now belong to somebody else (`00-RESEARCH.md` §A3, **VERIFIED**).
- **The footer repeats the nav, it does not replace it.** Every page has the
  same three-column layout in the same order.
- Do not add a newsletter sign-up, a social media row, a "back to top" button or
  a second sitemap. None of them serve a buyer reading a machine table.
- **Known defect, noted honestly:** one page (`index.html`) contains an extra
  empty footer link used to preload the Open Graph image. It carries `hidden`
  and `aria-hidden="true"`, so it is invisible and unannounced, but it is still
  an `<a>` in the Company list. It should be replaced with a proper preload
  link in the `<head>` when that is done.

### 5.20 Supporting components (CSS §20)

**`.brief-list`** — a numbered "what to send us" list. The numbers are
CSS counters in 1.75rem squares, and the component is a `<ol>`. Used on the
homepage, the contact page and the finishing page. **The same VoiceOver
`list-style: none` caveat as `.flow` applies.**

**`.tags`** — a wrapping row of small mono chips for vocabulary (fabric
constructions, process terms). Use for *vocabulary*, not for status — a tag that
says "in progress" is a status pill wearing the wrong hat. Each tag must be
readable on its own; they are words like "Reactive", "Disperse", "Pigment".

**`.keyvalue`** — a two-column comparison block that pairs a statement with a
status pill. This is the component that carries the "what we do not hold" list on
the homepage, in a `--section--dark` section. Rows alternate `--paper-sunk`.
`keyvalue__k` is the statement; `keyvalue__n` is the small note underneath it,
which is where "Usually buyer-triggered" and "Only worth the cost for a specific
programme" live. Those notes are why the list is credible.

**`.deflist`** — a `<dl>` inside prose, with the term in mono indigo on the left
(`minmax(9rem, 14rem)`) and the definition on the right, collapsing to one
column below 544px. Used for "Legal name / Established / Type / Location /
Association / Processes / Employees / Markets" on the About page — the classic
"spec block". **It is a real `<dl>`, so keep it one.**

**`.val`** — see §3.6.

### 5.21 The pre-launch placeholder system (CSS §20b)

**`.todo`** — the dashed `TO CONFIRM` chip: 11px uppercase mono in `--ink-3` on
`--paper-sunk`, with a **dashed** border. **182 of them across the nine pages
(**MEASURED**), of which 9 are the one inside each page's draft ribbon, leaving
173 in the page content.**

**`.draft-ribbon`** — a rust bar at the top of every page, white text, centred.
It appears only when the `<html>` tag carries `data-draft="true"`, and all nine
pages currently do.

**This is the most important thing on the site, and it is a component, not a
note.** The site's governing rule is that an unconfirmed figure is published as a
visible, obviously-unfinished marker rather than as a plausible number. The
dashed border is the visual argument: it reads as a specification waiting for a
value, not as a rendering failure.

- **To publish a page:** replace every chip on it, then remove
  `data-draft="true"` from that page's `<html>` tag. The ribbon disappears on its
  own. Do not delete the `.draft-ribbon` markup — the `hidden` state is driven by
  the attribute.
- **To publish the whole site:** work down `docs/PRE-LAUNCH-GATE.md`, then remove
  the attribute from all nine pages.
- **Never style a `.todo` chip to look finished.** Never make its border solid.
  Never give a `TO CONFIRM` chip a colour that reads as a value. If you catch
  yourself wanting a chip to look tidy, that is the moment this site's whole
  premise is under attack.
- The chip on the draft ribbon itself is an inline-styled override (white on
  transparent) so it stays visible against the rust bar.

### 5.22 Utilities (CSS §21)

Sixteen single-purpose classes: `.mt-0`, `.mt-4` to `.mt-8`, `.mb-4` to `.mb-6`,
`.text-mono`, `.text-sm`, `.text-xs`, `.text-muted`, `.center`, `.nowrap`,
`.no-border`. All map to tokens — none of them hard-codes a value.

- **Use them:** for a one-off nudge when a component's own spacing is wrong in
  one specific place.
- **Do not use them:** as layout. If you find yourself writing three utility
  classes in a row, the component needs a rule, not a workaround. A page that
  needs `.mt-8 .mt-4 .mt-6` on consecutive elements is a page that will break the
  next time somebody changes a token.

---

## 6. The dark section pattern

There is exactly one dark section on the site: the quality and compliance block
on the homepage, `id="trust"`, on an `--indigo` ground.

**When to invert.** Once per page, and only around content that **changes the
reader's expectations**. In this site, that content is the list of certificates
the mill does not hold. Everything above that section is bone and white; the
ground drops out for one screen and comes back. A reader who scrolls it without
reading still feels that something different happened.

**Why it works, mechanically:**

1. **It is the only saturated ground on the page.** On a bone-and-white screen,
   a 400px indigo band is the single largest colour event. You do not need an
   animation to make it register.
2. **The indigo is already in the design.** It is the header rule, the brand
   colour, the data-sheet title bar, the footer. The dark section is not a new
   colour — it is the existing brand colour used as a ground, which is why it
   looks composed rather than imported.
3. **The ink flips to a pair that is still measured.** `--ink-invert` at
   12.82:1 and `--ink-invert-2` at 8.73:1. The design did not get darker-texted
   for contrast; it checked.
4. **The footer already does it.** `--indigo-deep` at the bottom of every page
   means the dark ground is a bookend. A page opens light and closes dark; the
   one inverted section in the middle reads as deliberate punctuation.

**When NOT to invert:** for a page's main content, for a second section, for a
callout, for a table, or to make a page feel "premium". Two dark sections on one
page is a habit. Three is a website for a software company.

**Checklist for adding a dark section:**

- [ ] `class="section section--dark on-dark"` — both classes, always.
- [ ] Any card inside it renders with the `.on-dark` card treatment
      (5% white ground, `--line-invert` border).
- [ ] Any ghost button inside it uses the `.on-dark` variant.
- [ ] The eyebrow renders in `--ink-invert-2`, not rust.
- [ ] Focus rings switch to `--paper` via `.on-dark :focus-visible`.
- [ ] No table is inside it, or you have checked that the white table looks
      deliberate.
- [ ] There is still only one dark section on the page.

---

## 7. Motion (CSS §22, first block)

### 7.1 What moves

**MEASURED: four CSS `transition` declarations, seven animated properties, one
duration, one easing curve.**

| What | What changes | Duration | Where |
|---|---|---|---|
| `.skip` | `top` from −100px to 12px, when focused | `--dur` | Once, on first Tab |
| `.btn` | `background-color`, `border-color`, `color` on hover | `--dur` | Every button |
| `.card--link` | `border-color` and `box-shadow` on hover | `--dur` | 6 cards |
| `.field` controls | `border-color` on hover and focus | `--dur` | Every input |

```css
--dur: 140ms;
--ease: cubic-bezier(0.2, 0, 0.2, 1);
```

That is the complete list. There is no CSS `transform` property anywhere in
the stylesheet. No `scale`, no `translate`, no `rotate`, no `@keyframes`, no
`animation`, no `opacity` fade, and no scroll-triggered anything. The JavaScript
file contains no animation code of any kind — its entire job is the mobile menu,
the WhatsApp links, and the form.

> **The header's one non-transition effect.** `.site-header` uses
> `backdrop-filter: saturate(150%) blur(8px)`. A blur is not motion — nothing
> moves — so it is not disabled by `prefers-reduced-motion`, and it should not
> be. It is the reason the header can be 94% opaque and still show what is
> scrolling underneath.

> **Searching the file for the word "transform" returns 19 hits. Every one of
> them is `text-transform: uppercase`**, which changes the shape of *letters*,
> not the position of *boxes*. The distinction matters: a text transform is free
> and causes no layout shift; a `transform` is neither.

### 7.2 Why that is the right amount

Motion on a website is a claim about attention. It says *look here first*.
A buyer reading a machine table is not being persuaded of anything — they are
checking whether you are real. Motion would compete with the one thing the page
exists to do.

Three concrete reasons:

1. **It costs performance.** Every animated property is main-thread work during
   the interaction the Core Web Vitals are measuring (`00-RESEARCH.md` §D1,
   **VERIFIED**). The site has zero JavaScript beyond a 9.5 KB enhancement file
   and no framework (`00-RESEARCH.md` §D2, **MEASURED**). Animation would be the
   first thing to break that.
2. **It is an accessibility cost with no upside here.** Motion triggers nausea
   and dizziness for some people, and WCAG SC 2.3.3 Animation from Interactions
   exists for exactly this. A datasheet gains nothing from a bouncing pill.
3. **It is a competitor signature.** The reference site in the research has four
   stat counters that render **zero** (`00-RESEARCH.md` §A6, **VERIFIED**). A
   number that counts up when you scroll to it is decoration pretending to be
   evidence. On a site whose entire argument is that it publishes checkable
   data, an animated number is a lie about the numbers.

### 7.3 `prefers-reduced-motion`

The stylesheet sets, for every element:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This honours the operating-system setting ("Reduce motion" on iOS and macOS,
"Remove animations" in Windows). **Do not remove it, and do not scope it down.**
`0.01ms` rather than `0s` is deliberate: it lets an animation's `animationend`
event still fire, so a component that depends on it finishes rather than
breaking. `scroll-behavior: auto` is belt-and-braces — nothing in the
stylesheet sets `scroll-behavior: smooth`, so this line costs nothing and
protects a future edit.

Note what is **not** disabled: `backdrop-filter`. A blur is not motion, and
removing it would change the header's legibility.

### 7.4 Rules for any motion you are ever tempted to add

- [ ] It must be under 200ms.
- [ ] It must be `opacity`, `background-color`, `border-color` or `color` — never
      `width`, `height`, `top` or `left`, which cause layout shift.
- [ ] It must be inside the existing `prefers-reduced-motion` block's reach
      (i.e. use `transition`, not `animation`).
- [ ] It must be triggered by the visitor's own action, never on a timer.
- [ ] It must not be the only way information is conveyed.
- [ ] If you cannot write a sentence saying what the buyer *understands* because
      of it, do not add it.

---

## 8. Print and forced colours (CSS §22, second and third blocks)

### 8.1 Print

`@media print` exists because **a buyer prints this site.** The research found
that this business is run on WhatsApp and fax, and that the association
directory carries a fax for every one of its 114 Faisalabad records
(`00-RESEARCH.md` §A5 and §B1, **VERIFIED**). A machine table that goes to a
buyer as a printout, or gets attached to an email, is a real use case — and a
certificate log book printed and pinned above a desk is how a sales office
actually works.

What the print rules do:

| Rule | Effect | Why |
|---|---|---|
| `.site-header, .wa-bar, .skip, .btn` hidden | Navigation, the mobile bar, the skip link and all buttons disappear | None of them work on paper. A printed spec sheet has no "Enquiry form" button. |
| `body { background:#fff; color:#000; font-size:11pt }` | Plain black on white at a print-appropriate size | Ink is expensive and a bone ground wastes toner |
| `.section { padding-block: 0.5rem }` | Sections nearly touch | Vertical space is expensive on paper |
| `a[href^="http"]::after { content:" (" attr(href) ")" }` | **The URL is printed after every web link, in 9pt grey** | The single most useful line in the whole print stylesheet. A printed page that is passed around stays useful. |
| `.table-wrap { overflow:visible; border:0 }` and `table.spec { min-width:0 }` | The horizontal scroll is removed and the table is allowed to be as wide as the page | On paper there is no viewport, so the 544px floor would just clip |

**Three things about print you must know:**

1. **A dark section will print as blank text.** The print rules set `body` to
   white and black, but `.section--dark` still sets its own colour, and browsers
   do not print background graphics by default. So the home page's "What we
   hold — and what we do not" section prints as near-white text on white paper:
   **MEASURED, `--ink-invert` on white is 1.11:1 — effectively invisible.** This
   is a real defect in the current build. The fix, when someone picks it up, is
   to add to the print block:
   ```css
   .section--dark { background: none; color: #000; }
   .section--dark h1, .section--dark h2, .section--dark h3 { color: #000; }
   .section--dark .lead, .section--dark p { color: #333; }
   .on-dark .card { background: none; border-color: #999; color: #000; }
   .on-dark .card p { color: #333; }
   ```
   Until then, **if you need a printed copy of that section, print the
   `quality.html` page instead** — it carries the same information in a form that
   prints correctly.
2. **The draft ribbon is not hidden in print.** That is, I would argue, correct:
   a printed page that still says DRAFT should not be able to be mistaken for a
   final specification. If the owner disagrees, add `.draft-ribbon` to the print
   hide list.
3. **`@page` margins are not set.** The browser default applies, which is
   usually fine. If the owner wants tighter margins on the machine table, set
   `@page { margin: 15mm; }` rather than fighting it per-element.

### 8.2 Forced colours

`@media (forced-colors: active)` exists for **Windows High Contrast mode**,
which replaces your colours entirely with a user-chosen system palette.

What the rules do: `.btn`, `.card`, `.datasheet`, `.rail`, `.shot` and
`.table-wrap` get a `1px solid CanvasText` border, because in forced-colours
mode the `--line-strong` hairlines are suppressed and the components would lose
their edges. `.status` gets a `CanvasText` border for the same reason — the pill
would otherwise be a coloured word with no shape. The focus ring switches to
`Highlight`, the system's own focus colour, which is what the user's operating
system is telling assistive technology to draw.

**What forced colours does well here, and why it is not an accident:** the design
never encoded meaning in a subtle tint. Structure is carried by borders, not by
a 3% background difference. Structure is carried by words, not by coloured dots.
That is why the whole design system survives the mode with seven lines of CSS.

**The one place it is thin:** the four status colours. In forced-colours mode a
pill becomes a word in the system text colour inside a `CanvasText` border — the
*shape* survives, the *colour coding* does not. That is fine, because the words
"Held", "Not held" and "Available on request" were carrying the meaning all
along. **This is the single best argument for why the status pills must always
contain the word and never only the colour.**

---

## 9. Responsive behaviour

Five breakpoints, all in `rem` so they respond to the visitor's own font size.

| Breakpoint | Pixels | What changes |
|---|---|---|
| ≤ 34rem | ≤ 544px | `.deflist` rows collapse from two columns to one |
| 40rem | 640px | `.grid-2`, `.grid-3`, `.grid-4` go to **2 columns**. `.gallery--2` becomes two across. `.check-grid--2` becomes two across |
| 48rem | 768px | Page gutter 16px → **32px**. Section padding 48px → **64px**. `.form` becomes **2 columns**. `.factstrip` goes from 2 to **4 across**. `.pagehead` and `.hero` padding grows. `.footer-grid` becomes 3 columns. `.check-grid--2`. `.gallery--2` |
| 56rem | 896px | **In `:root` only:** header height 60px → **72px**; `--fs-900` 38px → 48px; `--fs-800` 30px → **34px** (so `h2` grows) |
| 64rem | 1024px | Nav collapses to the `Menu` drawer below this. `.grid-3` → 3 across, `.grid-4` → 4 across, `.grid-sidebar` becomes main + 320px rail, `.hero__grid` becomes 1.15fr / 1fr, `.gallery--3` → 3 across |
| ≤ 47.99rem | ≤ 767.84px | `.wa-bar` appears (fixed bottom bar). Footer gets extra bottom padding to clear it |

### 9.1 A breakpoint quirk you should not "fix"

**The type scale steps at 56rem (896px). The navigation collapses at 64rem
(1024px).** Between 896px and 1023px, the header is at its **desktop height of
72px** and the menu is **still a drawer**. That is a 128px-wide band where the
header is large and the menu is small.

It is safe, and it is safe by design: the drawer is positioned with
`inset: var(--header-h) 0 auto 0`, so it attaches to whatever the header height
currently is, and both the scroll padding and the `:target` scroll margin are
calculated from the same token. **If you move one breakpoint, move both, and
check the drawer still meets the header.**

### 9.2 What actually matters at each size

**Below 640px — the phone.** One column. The menu is a `Menu` text button. The
fact strip is two across. Tables scroll sideways inside `.table-wrap`, which is
keyboard-reachable and labelled. The WhatsApp bar is fixed at the bottom with
both actions, and the footer has extra padding so nothing is covered. The form is
one column. The lead is capped at 44ch.

**640px to 895px — the large phone and the small tablet.** Two-column card
grids appear. This is where the homepage capability cards stop being a stack and
start being a comparison. Nothing else changes.

**896px to 1023px — the small laptop.** Headings step up, the header is 72px,
the menu is still a drawer. Most of the site's visitors are on a desktop
(64.51% desktop against 35.49% mobile, `00-RESEARCH.md` §D7, **MEASURED** from
StatCounter), and the buyer reading a machine list is probably on a machine
wider than this.

**1024px and above — the working size.** Seven-item horizontal nav, the rust
`Get a quote` button in the header, the hero's two columns with the data sheet
beside the words, the 320px rail, the four-across capability grid, the
four-across fact strip, the three-across shot gallery, the three-column footer.
**The wide tables get their full width here**, which is the point — the design is
built desktop-first because that is who is reading it.

### 9.3 The desktop assumption, stated honestly

The build is written mobile-first in the code — the base rules are the small
screen and the media queries add — but the **verification and the design intent
are desktop-first**, because the research corrected the assumption: Pakistan is
64.51% desktop, and a buyer checking a 20-row machine list is overwhelmingly on
a laptop and probably outside Pakistan (`00-RESEARCH.md` §D7, **VERIFIED**).
Both are checked. The tables are the reason.

---

## 10. Do not do this

A checklist to run before you add anything to this site. Every item on it is
something the research found in the actual Faisalabad market
(`00-RESEARCH.md` Topic A and Topic C, **VERIFIED**), and every one of them would
make this site look like its competitors.

- [ ] **Do not add a hero carousel or a slider.** A buyer comparing dyeing
      capacity is not browsing a mood board. The research found the
      award-site canon in this sector is creative agencies with "Industries" in
      the name; the one genuine manufacturer on it serves a homepage of **114
      bytes of HTML** (§C5).
- [ ] **Do not add stock photography.** Not a hero, not a texture, not an
      "our team" page. The live ranking Faisalabad dyeing site ships a hero
      image named `istockphoto-1069103796-612x612-1.jpg` and a fabricated
      founder with a stock headshot (§A6). Do not become that site.
- [ ] **Do not add a client logo wall.** One audited competitor ships 18 client
      logos whose alt text is literally `client` (§A6). You do not have a client
      list to publish, and inventing one is the single worst thing this site
      could do.
- [ ] **Do not add animated counters.** A number that counts up when you scroll
      to it is a claim about your importance, not about your capacity. The
      reference site has four of them, all rendering **zero** (§A6).
- [ ] **Do not add gradient buttons, glassmorphism, or blurred colour cards.**
      The design has two shadows and a 2px radius. A gradient button says
      "startup", and this is a dye house.
- [ ] **Do not add an icon font.** The three channel icons are inline SVG so they
      are sharp, weightless, and never fail to load. A competitor loads five
      font families (§C6). The two families on this site are `system-ui` and the
      system monospace, and both are free.
- [ ] **Do not add a third or fourth font family — or a first webfont.** The
      largest thing on this screen is the first line of text and it paints in
      **0 ms** because it is set in a system font (§D3, **VERIFIED**). Adding a
      webfont undoes the site's one unambiguous performance claim.
- [ ] **Do not add a testimonial carousel, a "trusted by" band, or a partner
      strip.** Same reason as the logo wall.
- [ ] **Do not add a page that is under 400 words.** The site's whole argument is
      that its competitors ship 242 words in 138 KB of markup (§C3, **MEASURED**).
      A thin page is the exact failure this project exists to fix.
- [ ] **Do not add a CAPTCHA** (§D4, **VERIFIED** — SC 3.3.8).
- [ ] **Do not add a cookie banner, an analytics script, or a chat widget.**
      There is no cookie, no analytics and no server. A consent banner for
      nothing is a lie to the visitor and a black mark in a buyer's assessment.
- [ ] **Do not publish a certification badge the mill does not hold.** Publish the
      gap instead, with a `.status--notheld` pill and the reason (§C6, §C7).
- [ ] **Do not publish a headline capacity number without the machine list
      behind it** (§C2). A headline is a claim; a machine list is evidence.
- [ ] **Do not quote a lead time without saying what the clock starts from**
      (§E3). "45 days" and "45 days from shade approval" are different promises
      and only one of them can be kept.
- [ ] **Do not reorder the contact channels** (SC 3.2.6, Level A).
- [ ] **Do not remove the focus ring, the skip link, or the `prefers-reduced-motion`
      block.**
- [ ] **Do not change a token in one component.** Tokens are in `:root`; that is
      the entire point of them.

### 10.1 The three tests before you add anything

1. **Is this information the buyer can check?** If it is a claim ("leading",
   "world-class", "eco-friendly"), it does not belong. If it is a figure with a
   unit and a source, it does.
2. **Does it still work with JavaScript off?** The entire site does. Anything
   that needs a script to be readable has broken that.
3. **Is the same thing already here in a better place?** This site is
   deliberately repetitive — the contact rail appears on every page in the same
   order, the status vocabulary repeats, the "pure processing" message is stated
   three times on the homepage. That repetition is the design. A new section
   that says something already said four times earlier is a section to delete,
   not to add.

---

## 11. Quick maintenance reference

| Question | Answer |
|---|---|
| Where do I change the page colour? | `--paper` in `:root`, `site.css` line 24 |
| Where do I change the rust button? | `--signal` and `--signal-deep`, lines 41–42 |
| Where do I add a new spacing value? | The `--sp-*` block, lines 86–88. Only if it fits the 4px base |
| Why is my `h1` not 38px? | It uses `--fs-display`, which is a `clamp()`. `h1` is not sized by `--fs-900` |
| Why is there no gap under my heading? | Headings have no margin by design. Use `.mt-4` or put it in `.prose` |
| Which token do I use for a mono number? | Add `class="val"`, or `<td class="num">` in a table |
| How do I publish a page? | Fill every `TO CONFIRM` chip, then remove `data-draft="true"` from its `<html>` tag |
| How do I add a real photograph? | Put an `<img>` inside `.shot__frame`; the CSS already styles it |
| How do I add a new page? | Copy an existing one. The header, nav, footer, ribbon and skip link all come with it |
| How do I add a new contact channel? | Add it in the **same position on every page** — `.channel` inside `.rail` |
| What is the minimum button height? | 48px (`.btn`), 40px (`.btn--sm`). The AA floor is 24px; do not go near it |
| What contrast do I need for body text? | 4.5:1. `--ink` on `--paper` is 16.01:1 |
| What contrast for a border or a focus ring? | 3:1 against its background — but only where the border is the *only* thing identifying the control |
| Which tokens are declared but unused? | `--fs-900`, `--indigo-soft`, `--radius-lg`, `--sp-10`, `--sp-11`, `--wrap-narrow`. They are harmless. Leave them or delete them — do not "start using" them just because they exist |
| How do I recompute a contrast ratio? | Relative luminance per channel with the 0.03928 threshold and the 2.4 exponent, then `(lighter + 0.05) / (darker + 0.05)`. Verify your method against `#000000` on `#ffffff`, which must return exactly 21 |

### 11.1 Hard-coded values in the stylesheet

The stylesheet's own editing guide says: *"Every colour, size and spacing value
is a token… Do not hard-code values in the component sections."* **MEASURED:
twelve lines break that rule.** They are listed here with their line numbers so
you can decide deliberately rather than by accident.

| Line | Literal | What | Why it is there |
|---|---|---|---|
| 283 | `rgba(245, 243, 238, 0.94)` | `.site-header` background | The translucency is the point. It cannot be a token |
| 313 | `0.625rem` | `.brand__sub` | A 10px mono label that must sit below `--fs-100` |
| 413 | `#fff` | `.btn--primary` text | White on rust. `--ink-invert` is `#f5f3ee`, which is warm and would look dirty on rust |
| 427 | `rgba(255, 255, 255, 0.08)` | `.on-dark .btn--ghost:hover` | The dark equivalent of a hover fill |
| 494 | `0.625rem` | `.datasheet__stamp` | Same 10px mono label as the brand sub-line |
| 615 | `rgba(255, 255, 255, 0.05)` | `.on-dark .card` background | A 5% white veil, not a colour |
| 632 | `#e8a17f` | `.on-dark .card__index` | A lightened rust clearing **6.66:1** on indigo. Pure `--signal` measures **2.23:1** there and would fail AA. **A computed necessity, not an oversight** |
| 770 | `0.5rem` | `.flow__step::after` `bottom` | The end-stop of the connector line. **This one should be `var(--sp-2)`** — it is the same value, typed by hand |
| 920 | `0.7rem` and `1rem` | `.field select` caret position | Two nudges to line the CSS-drawn arrow up with the text |
| 1073 | `#fff` | `.site-footer a:hover` | The hover needs to be brighter than `--ink-invert` on indigo-deep |
| 1122 | `0.625rem` | `.brief-list li::before` | The 10px counter inside the 1.75rem square |
| 1170 | `0.6875rem` | `.todo` font size | 11px. Deliberately smaller than `--fs-100` so the chip reads as a stub |

On top of those, the component sections use raw pixel values for the things a
token would be wrong for: `1px` hairlines and borders, `2px` and `3px` border
widths, `3px` and `6px` inside the status dot, `5px` for the select caret,
`7px` and `8px` nudges, `14px` for the placeholder hatch, `20px` and `24px` for
the SVG channel icons, and `40px`, `44px` and `48px` for the hard target sizes
on `.btn--sm`, `.nav-toggle` and `.btn`. Those are decisions, not omissions —
but they are also the values you would have to hunt down if you ever needed to
change one.

**Two clean-ups worth making when someone next touches the stylesheet:** promote
the three `0.625rem` uses to a new `--fs-000` token and the `0.6875rem` to a
`--fs-todo`, and change line 770's `bottom: 0.5rem` to `bottom: var(--sp-2)`.
Neither changes anything on screen. Both bring the file closer to its own rule.

---

## 12. Open questions this file cannot answer

These are **UNKNOWN** and are not guessed anywhere above.

1. **Which real photographs will replace the 12 spec plates**, and who shoots
   them. The frame is 4:3 and the CSS is ready.
2. **Whether any certification is in progress.** The `--progress` state exists in
   the CSS and is used zero times. The moment the owner answers, one word changes
   in a table cell.
3. **Whether the machine makes list can be published.** The research verified
   makes genuinely present on operating Faisalabad units' published lists
   (`00-RESEARCH.md` §E7, **VERIFIED**) but warns: *do not name a make that is
   not on the nameplate*. The table ships with every manufacturer cell empty.
4. **Whether the print defect in §8.1 is acceptable to ship.** It affects one
   section of one page and the fix is five lines of CSS. It has not been fixed
   here because this document does not own the stylesheet.
5. **Whether the `footer` preload link on the homepage should stay.** See §5.19.
6. **Whether the `.brief-list` and `.flow` `<ol>` elements should carry
   `role="list"`.** There are **eight** such lists — three `.brief-list` and five
   `.flow` — spread across six pages (`MEASURED`). It is a one-attribute change
   per list that closes a real VoiceOver gap. It has not been made here.
