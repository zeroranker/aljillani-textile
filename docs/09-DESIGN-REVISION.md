# 09 — Design revision, round 2

**This document supersedes the visual system in `03-DESIGN.md`.**
The structure in `03-DESIGN.md` still holds. The tokens, the typeface and the
component styling do not. Where they disagree, this file is correct and
`03-DESIGN.md` is history.

---

## 1. Why this revision happened

The first build was, in its own words, "Technical Datasheet". It was executed
as the *absence* of design rather than as a designed idea. Specifically:

| What was wrong | Why it read as cheap |
|---|---|
| Ground colour `#f5f3ee` (warm cream) | Warm-beige is the most-shipped "premium" background in machine-generated work. It is a tell, in the same family as a purple-to-blue gradient hero |
| System fonts only | Nothing in the typography said "this company". A buyer cannot name the supplier from the page |
| Three grey bars as the mark | A wireframe placeholder, not an identity |
| Four equal bordered cards in a row | The single most recognisable template shape on the web |
| Em dash in every heading and sentence | A known generated-prose tell |
| 53 `EDIT:` notes rendered on the page | Visible to a buyer. It read as unfinished, which is the opposite of the intent |
| Data presented as tables of text | The numbers are the product. They were the one thing not treated as the subject |

The content strategy survived the critique intact. It was the execution that
failed. Nothing in `00-RESEARCH.md`, `01-SITEMAP.md` or `02-CONTENT.md` was
changed as a result of this revision, apart from punctuation.

---

## 2. Design read and dials

**Read:** redesign-overhaul of a B2B supplier site, read by a fabric buyer and
an importer, in a confident-industrial language, with editorial scale contrast
and data treated as the visual subject.

| Dial | Value | Why |
|---|---|---|
| `DESIGN_VARIANCE` | **8** | Four equal cards is symmetry at its most generic. The set had to break. |
| `MOTION_INTENSITY` | **5** | A mill is not a product launch. One reveal, one observer, and it honours `prefers-reduced-motion`. |
| `VISUAL_DENSITY` | **6** | The audience came for specifications. Density is the product, but it has to be *composed* density rather than stacked text. |

**Two deliberate departures from the `design-taste-frontend` skill**, because
the client brief overrides it:

1. **No React, Next, or Tailwind.** The owner must be able to edit this in
   Notepad. A build step is a maintenance cost the client cannot carry.
2. **No chart library.** The skill's table guidance assumes a React data grid.
   These are plain `<table>` elements an owner can edit. The lead-time chart
   is CSS.

---

## 3. Palette

Cold, not warm. One accent.

| Token | Value | Measured contrast |
|---|---|---|
| `--paper` | `#e8eaee` | cool light ground |
| `--paper-raised` | `#f6f7f9` | cards, panels |
| `--paper-sunk` | `#dcdfe5` | table headers, recessed |
| `--ink` | `#0d0f15` | **17.87:1** on paper-raised, 13.9:1 on paper |
| `--ink-2` | `#363d4a` | **10.19:1** raised, 8.18:1 sunk |
| `--ink-3` | `#5a606e` | **5.88:1** raised, **4.72:1** sunk |
| `--indigo` | `#152c55` | dye-vat blue. Dark sections. **13.79:1** w/ white |
| `--indigo-deep` | `#0b1a35` | hero and footer ground. **17.31:1** w/ white |
| `--signal` | `#b8390f` | madder red. **The** accent. **5.78:1** w/ white |
| `--line` | `#cfd3da` | hairlines |
| `--line-strong` | `#7f8796` | **3.37:1** raised, **3.00:1** paper, meets SC 1.4.11 |

**Ratios are measured, not estimated.** Two tokens failed on first pass and
were solved numerically rather than nudged: `--ink-3` at 4.45:1 on
`--paper-sunk` and `--line-strong` at 2.18:1 on raised, which failed SC 1.4.11
non-text contrast outright.

**Rule: one accent.** Indigo is a surface, not a second accent. The page does
not invert theme mid-scroll.

---

## 4. Type

**Archivo Variable**, weights 100 to 900, latin subset, **34.1 KB**, self-hosted
at `assets/fonts/archivo-var.woff2`. One family, used for display, headings,
body and UI.

**Newsreader (a serif) was downloaded and then rejected.** A serif/sans pairing
is the default "expensive" move. A single strong grotesque gets there without
the cliché and saves 58 KB.

`font-display: swap` with a preloaded file. `optional` was considered and
rejected: on a cold visit the reader would work through the whole datasheet in
a fallback face and never see the real one.

Numbers and labels are **system mono**, which costs nothing and gives the
data register a distinct voice from the prose.

| Role | Size |
|---|---|
| `--t-h1` | `clamp(2.05rem, 1.5rem + 2.1vw, 3.5rem)` |
| `--t-h2` | `clamp(1.6rem, 1.15rem + 1.9vw, 2.75rem)` |
| `--t-h3` | `clamp(1.18rem, 1.02rem + 0.7vw, 1.6rem)` |
| `--t-body` | `clamp(1rem, .96rem + .18vw, 1.075rem)` |
| `--t-micro` | `.75rem` |

`--t-h1` is capped at 3.5rem so the desktop headline sets in **two lines**, not
three. The hero grid was widened to `1.16fr / .84fr` to make that possible.

---

## 5. The mark

A plain weave: four warp threads, three weft threads, with the weft broken into
segments that pass over and under the warp in turn. The third thread is the
signal colour, a dyed thread in a greige bolt.

Source: `assets/img/mark.svg`. Inlined in the header and footer of all nine
pages. Colours are driven by `--mark-warp`, `--mark-weft` and `--mark-dye` so
the mark inverts correctly on the dark footer and hero.

**This is a placeholder the client may replace.** It is a structural mark, not
a final identity. `08-UPDATE-GUIDE.md` §9 explains how to swap it.

---

## 6. What changed in the components

| Component | Before | After |
|---|---|---|
| `.card` | bordered box, radius, shadow, equal 4-up | editorial: left rule, mono index, large heading, arrow on the foot. No card chrome. `.card--contained` exists for genuine objects |
| `.fact__v` / `.fact__n` | inverted: long phrases set in display size, wrapping to three lines | `.fact__v` is the headline value, `.fact__n` is the supporting line |
| `.datasheet__row` | fixed 0.9fr / 1.1fr, leaving a dead margin beside short values | `1fr auto`, value column hugs its content |
| `.lead` | **name collision.** A lead-time rail and a hero lead paragraph both used `.lead`, giving the paragraph a card background | rail renamed `.timeline*`, `.lead` is now the hero/pagehead lead paragraph |
| `.edit-note` | did not exist; 53 `EDIT:` notes rendered in faint grey on the page | hidden by default, revealed with `?edit` |
| `.todo--empty` | a bare em dash inside a dashed "to confirm" chip | a quiet em-dash marker, so "not stated" reads differently from "confirm this" |
| range chart | did not exist | `.rangebar`, the lead times drawn rather than listed |

---

## 7. The lead-time chart

The lead times are this site's best original data and they were a text list.

`.rangebar` draws them on one linear 0 to 60 day scale, each bar spanning that
stage's published minimum to maximum. The axis is labelled so the reader can
check it. Pure CSS, no JavaScript, no library.

**The reactive dye cycle is deliberately not on it.** At 8 to 14 hours it is
under a day, and a one-pixel bar beside a 60-day bar would mislead. It sits
below the chart in its own unit, with a sentence saying why.

These are published industry ranges. The caption states in words that they are
not a commitment on any order.

---

## 8. Editing mode

All 53 owner annotations are still in the markup. They are wrapped in
`.edit-note` and hidden. **Load any page with `?edit`** and they appear in
blue, under a bar that explains what you are looking at.

```text
https://aljillanitex.com/capacity.html?edit
```

The `TO CONFIRM` chips are a different system and stay visible to buyers on
purpose. They mark claims the site cannot yet stand behind. Do not hide them
and do not confuse the two.

---

## 9. Weight

| | Before | After |
|---|---|---|
| Worst first visit | 22.5 KB | **61.7 KB** |
| Shared per visit | 12.8 KB | 48.2 KB (CSS 10.2 + JS 3.9 + font 34.1) |
| Web Almanac 2025 mobile median | 2,559 KB | we are **2.41%** of it |

The 34.1 KB font is the whole difference. It was a deliberate reversal: the
first build protected a performance number the client did not care about, at
the cost of looking like every other site. 61.7 KB will pass Core Web Vitals
comfortably.

If the font is ever removed, drop the `<link rel="preload">` in every `<head>`
at the same time or the browser will warn about an unused preload.

---

## 10. What did not change

- The information architecture, the nine pages, the seven nav links.
- Every claim, every number, every certification status. Only punctuation.
- `TO CONFIRM` chips: **104**, all still visible to buyers.
- The WhatsApp-first enquiry path and the RFQ form, field names untouched.
- Contrast compliance, verified again from scratch on the new palette.
- WCAG 2.2 AA, including SC 2.5.8 target size and the no-CAPTCHA decision.
