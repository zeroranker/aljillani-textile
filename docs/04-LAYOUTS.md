# 04 — Layouts

**Per-page layout and wireframe logic, all nine pages.**
This document describes what exists. It does not prescribe anything aspirational.

---

## How to read the section tables

Each page is described by:

- **Purpose** — the one job the page does
- **Order** — the sequence of sections, and why that sequence
- **Reading path** — where the eye goes, and what the buyer is meant to conclude
  after each section
- **Responsive** — what changes on a small screen

Sections are numbered in the order they appear in the HTML.

---

## The two pages that decide the deal

### index.html — the homepage

**Purpose.** A buyer lands here from a search, a WhatsApp message or a link in an
email. Within about ten seconds they must know three things: what this company
does, whether it can do *their* job, and how to start a conversation. Everything
else is optional.

**Why the sequence is what it is.** The research found that the dominant failure
across Faisalabad processor websites is not ugliness — it is **absence**. Capacity,
machines, certification and lead times are missing, and that data exists inside
the plant. So the homepage puts those four things *before* the company story, which
is the conventional order and the wrong one for this buyer.

```
┌──────────────────────────────────────────────────────────────┐
│ ▌ DRAFT ribbon (removed at launch)                           │
├──────────────────────────────────────────────────────────────┤
│ [brand]   Dyeing Printing Finishing Capacity Facility Quality  │  sticky header
│           About                 [Get a quote]        ☰ mobile │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Fabric dyeing, printing and finishing, quoted honestly.     │  H1 — the claim
│  [one paragraph: what we are, and what this site does]      │     is the positioning
│                                                              │
│  ┌──────────────┐  ┌────────────────────────────────────┐   │
│  │ AT A GLANCE  │  │  Dyeing · Pretreatment · Printing   │   │  .datasheet
│  │ Type  ─────  │  │  · Finishing                        │   │  + .factstrip
│  │ Location ─── │  │ ──────────────────────────────────  │   │    4-up
│  │ Throughput   │  │  Capacity   Machines   Lead time    │   │
│  │ Machines ──  │  │                                     │   │
│  │ Lead time ── │  └────────────────────────────────────┘   │
│  │ Certs ─────  │                                          │
│  └──────────────┘                                          │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  What we can do to your fabric                               │
│  [Dyeing] [Pretreatment] [Printing] [Finishing]  4 cards     │
│  callout: we are a pure processing unit, not a mill          │
├──────────────────────────────────────────────────────────────┤
│  ▌ Which stage does the clock start from?        ← DIFF 1    │
│  ① Enquiry → ② Lab dip → ③ Your approval →                    │
│  ④ Bulk → ⑤ Finishing                                       │
│  rail: lead times, each with its starting stage              │
├──────────────────────────────────────────────────────────────┤
│  Capacity, machines and the floor itself                     │
│  [Capacity & machines] [Factory & facility]                  │
│  3 hatched .shot placeholders — captioned, not decorative    │
├──────────────────────────────────────────────────────────────┤
│  ▌ WHAT WE HOLD — AND WHAT WE DO NOT           ← DIFF 2      │
│  dark indigo section, 6 rows with .status pills             │
│  held / progress / on request / not held                     │
├──────────────────────────────────────────────────────────────┤
│  Send us these six things ──────────────┐ Two ways to       │
│  1 construction  2 quantity  3 shade     │ reach us         │
│  4 process  5 date  6 market/cert        │ WhatsApp→Email   │
│  CTA row ─────────────────────────────── │ →Telephone       │
└──────────────────────────────────────────────────────────────┘
     [Enquiry form] [WhatsApp]  ← .wa-bar, small screens only
```

**Reading path and what the buyer should think:**

| # | Section | What the buyer should conclude |
|---|---|---|
| 1 | Hero + H1 | "Quoted honestly" is a claim most suppliers would not dare make. That is interesting. |
| 2 | `.datasheet` "At a glance" | This is a spec sheet, not a brochure. Someone here thinks like an engineer. |
| 3 | `.factstrip` 4-up | I can see the shape of the business in four numbers. |
| 4 | Four capability cards | They do my job, or close to it. |
| 5 | "Pure processing" callout | They are honest about scope. Also: a mill quote is not comparable to mine. |
| 6 | **Clock section** | They know that "30–60 days" is meaningless without a starting point. Nobody else has told me that. |
| 7 | Capacity + facility | There is a real plant, and they are prepared to be checked. |
| 8 | **What we hold / do not** | They told me what they *don't* have. I can now judge whether I can work with them. |
| 9 | Six things + contact | I know exactly what to send. The friction just dropped. |

**Responsive.** `.datasheet` and `.factstrip` stack vertically; the `.grid-sidebar`
collapses so the rail follows the main column; `.flow` becomes a single column with
the rail content below. The `.wa-bar` appears and the header CTA is retained.

---

### capacity.html — the transparency page

**Purpose.** This is the page a sceptical buyer opens specifically to check
whether the other pages are true. It must therefore be the densest and least
attractive page on the site, and it must not editorialize.

**Why it exists at all.** The single best technical disclosure found anywhere in
the Pakistani market is a 17-row machine table ending "Total Machines: 17". A
headline capacity figure is a claim. A machine list is evidence.

```
┌──────────────────────────────────────────────────────────────┐
│ Capacity, machines and lead times           H1 + lead        │
├──────────────────────────────────────────────────────────────┤
│  [Our figure]  [Industry range]  [Confirmed slot]            │
│   3 cards explaining what kind of number each one is         │
│  ← a buyer who does not read this cannot read the tables     │
├──────────────────────────────────────────────────────────────┤
│  What we can process                                         │
│  Measure | Our figure | Mid-sized Pakistani unit, industry   │
│  9 rows, every "our figure" a TO CONFIRM chip                │
│  callout: where these industry ranges come from              │
├──────────────────────────────────────────────────────────────┤
│  What is actually on the floor                               │
│  Stage | Machine | Manufacturer | Model | Qty | Width/cap    │
│  20 rows — pretreat, dye, print, finish, utilities           │
│  callout addressed to the person filling it in               │
├──────────────────────────────────────────────────────────────┤
│  How your order is broken into lots ───┐ Lead times          │
│  Item | Our figure | Typical in trade  │  dyeing 30–60 d     │
│  6 rows                             ┌───┘  printing 20–40 d   │
│  Working pattern (deflist)          │   lab→bulk 15–30 d     │
│                                     │   ours: TO CONFIRM     │
│                                     └── [Ask for a slot]    │
├──────────────────────────────────────────────────────────────┤
│  Water, power and effluent                                    │
│  Measure | Our figure | Industry reference                    │
│  7 rows. ZLD row says in as many words: do not claim it.     │
├──────────────────────────────────────────────────────────────┤
│              [Ask for a confirmed slot] [See the facility]   │
└──────────────────────────────────────────────────────────────┘
```

**Reading path and what the buyer should think:**

| # | Section | What the buyer should conclude |
|---|---|---|
| 1 | The three cards | These people distinguish between a claim, a benchmark and a commitment. |
| 2 | Throughput table | Every figure is a placeholder right now, and it is labelled. Nothing is being spun. |
| 3 | Machine table | 20 specific machine types. This is a real plant with a real layout. |
| 4 | Lots + lead times | "Each colourway is its own lot and the last one sets the date." Nobody has told me that before. |
| 5 | Water and effluent | They benchmark themselves against a published study. Either very confident or very honest. |
| 6 | CTA | Fine. Let us talk. |

**Responsive.** The `.table-wrap` scrolls horizontally on narrow screens rather
than reflowing the table into something unreadable. This is deliberate — a
reflowed six-column spec table is worse than a scroll.

---

## The seven remaining pages

### dyeing.html

**Purpose.** Prove the buyer can be served competently on the single largest process
in the business, and explain the shade-matching timeline honestly.

| # | Section | Why it is here |
|---|---|---|
| 1 | `.pagehead` + breadcrumbs | Orientation. The buyer arrived mid-site or from search. |
| 2 | Dye-class capability matrix | Seven dye classes × four fibres, with a `.status` pill per cell. Shows scope and scope-limits at a glance. |
| 3 | "Pretreatment is where the shade is actually won" — 5-step `.flow` | The section that demonstrates competence. Most competitors will not explain this. |
| 4 | "Why this matters to you" rail | Translates the technical section into buyer consequence. |
| 5 | "How a shade is agreed" — 6-row `.deflist` | The timeline. This is where the 15–30 day buyer decision time becomes visible. |
| 6 | 7-item `.qa` accordion | The questions buyers actually ask before a first order. |

**Responsive.** Matrix scrolls. Flow becomes single column. Rail follows.

---

### printing.html

**Purpose.** Help a buyer choose a print method without being sales-sold into one.

| # | Section | Why it is here |
|---|---|---|
| 1 | `.pagehead` | — |
| 2 | Method comparison — 4 columns × 8 rows | The most useful thing a printing page can do. A buyer arrives with a design, not with a method. |
| 3 | Digital-to-rotary callout + "we may only run one" callout | Prevents the site from describing a market the plant is not in. |
| 4 | The run — 6-step `.flow` | From file to roll, with the strike-off as the pivot. |
| 5 | Lead times rail | 20–40 days from sample approval, stated with its start point. |
| 6 | 5-item `.qa` | Minimums, artwork, strike-off portability. |

**Responsive.** The comparison table is the one page element that most needs the
horizontal scroll.

---

### finishing.html

**Purpose.** Explain that finishing is a queue, not a menu.

| # | Section | Why it is here |
|---|---|---|
| 1 | `.pagehead` | — |
| 2 | "Why the finishing route is a schedule" + 5-step flow | The reframing. Sets price and lead time expectations honestly. |
| 3 | Mechanical finishes table — 8 rows | What it does / when it is asked for / our status. |
| 4 | Chemical finishes table — 9 rows | Includes the conflicts: softener against wicking, stiff against soft. |
| 5 | Rail: three deciding questions + our finishing line | The menu is a market list, not an inventory. An explicit note says to delete rows we do not run. |
| 6 | 4-item `.qa` | Price impact, absorbency conflict, tolerance, mid-production changes. |

**Responsive.** Two wide tables scroll. Everything else stacks.

---

### quality.html

**Purpose.** The trust page. State the whole position, including the gaps.

| # | Section | Why it is here |
|---|---|---|
| 1 | `.pagehead` | — |
| 2 | "How a lot is checked" — 6-step `.flow` | Quality as process control, not as a final inspection department. |
| 3 | Acceptance tolerances callout | A published tolerance is a commitment; a certificate is a description. |
| 4 | **Traceability** callout + 3 cards | The real differentiator for job work. What an organic audit asks for. |
| 5 | In-house vs outsourced testing — 11 rows | The honest split. A mill lab cannot produce a chemical safety certificate. |
| 6 | "What we hold, and what we do not" — 13-row register | The honesty centrepiece. Includes the certification we do not have. |
| 7 | **Certificate log book** — 5 columns | Issuing body, expiry, scope, document. The highest-trust pattern in the sector. Ships with one honest row. |
| 8 | "What this site does not claim" | An explicit list of eight claims refused. |
| 9 | "Verify us" rail | Five things a buyer can do to check us, none of which cost money. |

**Responsive.** Two tables scroll. The dark register section is full width on all
sizes — it is meant to be unmissable.

---

### facility.html

**Purpose.** Hold the photograph slots open with a capture instruction, and answer
"I cannot visit Pakistan" properly.

| # | Section | Why it is here |
|---|---|---|
| 1 | `.pagehead` | — |
| 2 | Note for the site owner | Says plainly that this page is the one that most limits trust, and that the placeholders are deliberate. |
| 3 | 9 `.shot` figures with hatched placeholders | Each frame labelled with what it proves. Doubles as the capture instruction. |
| 4 | "Two shots worth more than the other eight" | Prioritises the capture if the budget only covers two. |
| 5 | "How to check us without travelling" — 5-step flow | Live video walk, nameplates on demand, free shade trial, buyer-verifies certificates, third-party inspection. |
| 6 | Plant facts rail | Built-up area, plot, year, employees — all placeholders. |

**Responsive.** Gallery goes 3-up → 2-up → 1-up. Placeholders are hatched CSS, not
images, so they cost nothing and never break.

---

### about.html

**Purpose.** Establish that this is a real company in a real cluster, and be
explicit about what it is not.

| # | Section | Why it is here |
|---|---|---|
| 1 | `.pagehead` | — |
| 2 | Company + "what we are not" | Three cards: not the cheapest, not the biggest, not for every certification. |
| 3 | "Faisalabad and the processing belt" | Real cluster statistics, then the three industrial belts, with a placeholder for which one we are in. |
| 4 | Power and continuity callout | Names the sector-wide power problem as context the buyer should ask about, rather than answering with an unverifiable genset number. |
| 5 | "How we would rather work" — 4 commitments | One counterparty, decisions not silences, your standard, inspect before dispatch. |
| 6 | Company record rail | The factual summary table. |

**Responsive.** Cards stack three-up → one-up. Rail follows.

---

### contact.html

**Purpose.** Convert. WhatsApp first, because that is where the work is done.

| # | Section | Why it is here |
|---|---|---|
| 1 | `.pagehead` | — |
| 2 | WhatsApp-first callout | A pre-filled message, so the buyer never faces a blank compose box. |
| 3 | The form — 8 required fields | Single scroll, validated on blur, no CAPTCHA. |
| 4 | Direct rail: WhatsApp → Email → Telephone → Fax → Department | The channel order required by WCAG 2.2 SC 3.2.6. |
| 5 | "Six things that get you a real quote" | Repeated from the homepage deliberately — a buyer landing here directly needs the same briefing. |
| 6 | "Useful things to read first" rail | Sends the undecided buyer back to the evidence before they enquire. |

**Responsive.** Form goes single column. Rail follows. `.wa-bar` persists.

---

## The shared patterns

### `.datasheet` — the signature component

A bordered spec panel, monospace keys, tabular figures, on the paper-sunk ground.
It appears above the fold on the homepage and nowhere else.

**Why it is the signature.** The research says the local field already has sites
that look expensive. What they do not have is a *spec sheet* on the first screen.
A datasheet tells a procurement reader, before they read a single sentence of
prose, that the person who built this site thinks in figures.

**Rule:** it carries facts with units, or it does not appear. It is never used for
navigation, promotion or decoration.

### `.grid-sidebar` + `.rail`

A two-column split: main content left, a narrow right rail.

**What goes in the rail, always in this order:**

1. **Lead times or the key numbers** for the page
2. **The contact channels**, in the fixed order WhatsApp → Email → Telephone →
   Fax → Department

**Why the fixed order.** WCAG 2.2 **SC 3.2.6 Consistent Help** is Level A. If the
help mechanism moves between pages, a user who returns to find it cannot find it.
The rail appears on every page and the channel order never changes. This is the
one place where a purely aesthetic decision would be a conformance failure.

### `.flow` — numbered process steps

An ordered list with a large monospace numeral, a heading and a real technical
sentence per step.

**Why it is used on every process page.** The clearest tonal differentiator found
in the Pakistani sample is writing the process as a numbered narrative in the
buyer's vocabulary. A capability grid tells a buyer what you sell. A numbered
narrative tells them you have done it before.

**Rule:** each step is one technical sentence and one buyer consequence. No step
is a marketing claim.

### `.table-wrap` — the scrolling spec table

```html
<div class="table-wrap" tabindex="0" role="region" aria-label="Machine list, scrollable">
  <table class="spec">
    <caption>Machine list — EDIT: …</caption>
    …
```

**Why the `tabindex="0"` and the `role="region"`.** A horizontally scrollable
container is not keyboard-scrollable unless it is focusable, and a focusable
region with no accessible name is announced as an unlabelled group. The
`tabindex` makes it reachable; the `role` and `aria-label` make it announceable.
Both are required, and both are on all nine tables.

**Rule:** never let a wide table reflow into stacked cards. A stacked six-column
spec table is unreadable, and unreadable is the same as absent.

### The mobile drawer, the sticky header and the WhatsApp bar

- The header is sticky and about 4.5 rem tall on small screens.
- Below 64 rem, the nav collapses behind a `Menu` button with `aria-expanded` and
  `aria-controls`. Escape closes it. Crossing the breakpoint resets it.
- `.wa-bar` is a fixed two-button bar, **small screens only**.
- The page gets bottom padding so the bar can never sit permanently over content.
- **WCAG 2.2 SC 2.4.11 Focus Not Obscured (Minimum)**: focus rings on elements
  near the bottom are offset so the fixed bar never covers them. A focused control
  is never hidden behind either fixed element.

### `.todo` and `.draft-ribbon` — the placeholder system

- **`.todo`** renders an unconfirmed value as a dashed chip reading `TO CONFIRM`.
  It is visible on the rendered page, not just in the source. Anyone reviewing the
  site can see exactly what is still unconfirmed.
- **`html[data-draft="true"]`** shows a rust ribbon across the top of every page.
- Both disappear the moment real data arrives. The rule is in `PRE-LAUNCH-GATE.md`:
  **no page ships with a chip on it.**

The purpose is not decoration. It is to make it structurally impossible for a
plausible-looking invented number to reach a buyer.

---

## A note on what is deliberately not here

| Absent | Why |
|---|---|
| Full-width hero image | There is no photograph, and a stock photograph is worse than none. |
| Client logo wall | A buyer reverse-searches them. 18 placeholder logos with `alt="client"` were found on a competitor. |
| Animated stat counters | A counter reading zero proves nobody checked. We publish fixed numbers instead. |
| Carousel | Nothing on this site is a list of peers. |
| Testimonials | Cannot be verified, and unverifiable is the whole problem. |
| Newsletter | There is no database, and there is not going to be one. |
| Cookie banner | There are no cookies. A banner would be a lie about a site that collects nothing. |
