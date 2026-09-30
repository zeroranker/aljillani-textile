# 01 — Sitemap and Information Architecture

**Al-Jilanee Textile Industry (Pvt) Ltd, Faisalabad** — the shape of the website, why it
has that shape, and what you must do to keep it true.

This document is written for two people at once. If you are the owner or a member of
staff who will edit the website, you can read the page table, the link plan and the
checklist and act on them without reading the rest. If you commissioned this work, the
argument sections explain why the site is built this way and not the more usual way.

Every external claim below carries the evidence label defined in `00-RESEARCH.md`:
**VERIFIED** (I read the source myself), **MEASURED** (I computed it), **UNVERIFIED**
(plausible but not sourced) and **UNKNOWN** (not found; recorded, never guessed).
Claims about the website's own files are labelled **AS BUILT** — I read the file.

Plain English is used throughout. A *greige* is unfinished fabric as it comes off the
loom. A *dye lot* is one colourway's worth of fabric processed as a single batch. A
*stenter* is the machine that holds fabric at a set width while it is dried and
heat-set; it is normally the narrowest point in a processing plant. A *nameplate* is
the metal plate on a machine showing its make and model.

---

## The short version

Nine pages, all at the top level, all in one folder, all ending `.html`.

Seven of them sit in the navigation bar. The eighth, Contact, is the orange "Get a
quote" button that sits in the same place on every page. The ninth is the homepage.

The navigation order is not alphabetical. It is the order in which a buyer decides:
*can you do my job* → *are you big enough* → *are you real* → *can you pass my audit*
→ *who are you* → *send it*.

The unusual decision, and the one that matters most, is that **Capacity, Facility and
Quality are top-level pages, equal in the navigation to the three service pages.**
Most companies bury those three under About or Services. They are not buried here,
because they are the three things the entire local market is missing.

The site is nine files deep in a market where the only working competitor has four
pages. That is deliberate, and the reason is given below.

---

## The nine pages

### The page table

Priority here means **commercial intent** — how close the page is to an order — not
how important the page feels to us. **P0** means a page that either captures the
enquiry or carries the data the market is universally missing. **P1** means a page
that closes a deal which a P0 page opened. **P2** means a page that is read late and
rarely decides anything on its own.

| # | URL | File | Priority | `sitemap.xml` | Its exact job in the buying journey | The buyer's question it answers |
|---|---|---|---|---|---|---|
| 1 | `/` | `index.html` | **P0** | 1.0 | Say what the unit is, where it is, and how big it is — without a single click. Then route the buyer to the right process page. | "Are these people real, and what do they do?" |
| 2 | `/dyeing.html` | `dyeing.html` | **P0** | 0.9 | Let a buyer match their fibre to a dye class, and understand pretreatment and shade matching before they price anything. | "Can you dye my fabric, and how do I know the shade will hold?" |
| 3 | `/printing.html` | `printing.html` | **P0** | 0.9 | Help a buyer choose between rotary, digital and flat screen on their own artwork — before they send it. | "Which print method suits my design and volume?" |
| 4 | `/finishing.html` | `finishing.html` | **P0** | 0.9 | Explain what each finish does, which finishes fight each other, and why the stenter queue sets the date. | "What can you finish my fabric to, and what will it cost me in time?" |
| 5 | `/capacity.html` | `capacity.html` | **P0** | 0.9 | The evidence page. Throughput, the full machine table, lot sizes, working pattern, lead times, water and effluent — each figure labelled as *ours* or *industry benchmark*. | "Are you big enough for my order, and can I check your claims?" |
| 6 | `/contact.html` | `contact.html` | **P0** | 0.9 | Take the enquiry. WhatsApp first, then a structured form, then every direct channel including fax. | "How do I reach a person who can decide?" |
| 7 | `/quality.html` | `quality.html` | **P1** | 0.8 | Show how a lot is checked, what is tested in-house versus sent out, and the full certificate register — including every certificate **not** held. | "Will I pass my buyer's audit, and can I verify what you claim?" |
| 8 | `/facility.html` | `facility.html` | **P1** | 0.8 | Prove the plant exists, shot by shot, and explain how to verify us without travelling to Pakistan. | "Is there actually a factory there?" |
| 9 | `/about.html` | `about.html` | **P2** | 0.7 | Establish what the unit is and is **not**, and place it in the Faisalabad processing belt. | "Who am I dealing with, and what are the limits?" |

A note on `sitemap.xml`. The research brief records no source for how search engines
use the `<priority>` element. Treat the values in that file as this table's order
written down in the one file your web host will read, and nothing more. They are a
statement of intent for the owner, not a promise of ranking.

### The buying journey, in order

A first-order buyer — someone who has never heard of this company — moves like this.

1. **Arrive.** They click a search result, or a colleague forwards the link, or a
   WhatsApp contact sends the URL. **→ `index.html`.**
2. **Qualify the fit.** "Pure processing unit" immediately separates this company
   from composite mills. The buyer either continues or leaves. **→ `index.html`.**
3. **Route to the process.** Most buyers need one or two of the four process groups.
   The homepage capability grid sends them to the right page in one click.
   **→ `dyeing.html` / `printing.html` / `finishing.html`.**
4. **Check the size.** This is where a buyer either stops or goes to the enquiry form.
   **→ `capacity.html`.**
5. **Check the plant.** Photographs and a live video walk. This is the step that
   replaces a visit. **→ `facility.html`.**
6. **Check the paperwork.** Certificates, tolerances, traceability records — the buyer
   may be doing this for a compliance team who never speaks to you.
   **→ `quality.html`.**
7. **Check the character.** Is this a company that tells the truth? The "what we are
   not" section does more work here than a management team page would.
   **→ `about.html`.**
8. **Send it.** **→ `contact.html`**, or the WhatsApp button, which is on every page.

Two of these steps are out of order on purpose, and both are deliberate departures
from normal practice. Steps 4 and 5 — capacity and facility — normally sit *after*
trust. Here they sit before it, because in this market the buyer cannot form trust
without data. Step 7 is last because the research is clear that face-to-face contact
is the business norm in this trade, not the website.

### Why nine and not more

The budget is nine files and the ceiling is nine files. Here is the arithmetic.

| Group | Pages | Why it cannot shrink |
|---|---|---|
| Homepage | 1 | The one page that must answer everything without a click |
| Process pages | 3 | Three separate decision types, with three different tables |
| Data pages | 3 | The three data families the market is missing |
| Company + contact | 2 | The minimum a legitimate business needs |
| **Total** | **9** | |

The process pages cannot be merged. A buyer with a fabric arrives needing a dye-class
comparison; a buyer with artwork arrives needing a print-method comparison. Forcing
both onto one page produces the long undifferentiated services page that most of this
market publishes, and that page is the reason buyers cannot find anything on it.

The data pages cannot be merged either, and this is the least obvious decision on the
site. Capacity, facility and quality are three different kinds of proof, checked by
three different readers: a production planner, a buyer doing supplier due diligence,
and a compliance officer. They also have three different update cycles. Capacity
changes when a machine is added. Facility changes when a photograph is retaken.
Quality changes when a certificate expires. Merging them would mean one page that all
three readers have to scroll past to find their own answer.

The external benchmark for "how many pages is enough" is small. Of the eleven domains
listed for Faisalabad units that could be tested, exactly one served a real site, and
that site had **four pages**. **VERIFIED** (`00-RESEARCH.md` A2). Nine pages is more
than double the only live competitor in the field. That is the honest ceiling for a
business that has to maintain the files by hand.

---

## Why this structure, from the research

### The market you are actually in

This is the part that makes the IA non-negotiable, so it is worth stating in full.

Of the 114 Faisalabad member units listed by the All Pakistan Textile Processing Mills
Association (APTPMA), **12 have a website listed — 10.5%**. **VERIFIED** (A1). So
roughly nine in ten processing units in this city have no web presence at all.

Of the domains on that list that could be tested at all, **one serves a real site**.
**Five of the eleven now belong to somebody else** — one is a travel agency in Central
Asia, one is a gambling site. **VERIFIED** (A2, A3).

And a search for the company by name returns **one result**: the association's own
directory page. No LinkedIn, no Facebook, no trade listing, no review. **VERIFIED** (A4).

Three consequences, and the IA follows from all three.

**One: the site is not competing on traffic volume.** There is no volume contest to
win, because there is no field to out-rank. A nine-page site for a city-level supplier
is not under-built; against a field of zero it is an unoptained position.

**Two: the real competition is the dead link and the hijacked domain.** A buyer who
finds eleven broken sites and one four-page site is not comparing marketing. They are
deciding whether *any* Faisalabad supplier is reachable at all. That is why the site
is built to be a live, checkable, machine-readable artefact rather than a brochure.

**Three: the field's failure is missing data, not broken design.** Across 23
catalogued failure modes, the most common absence was not a broken thing. It was the
**absence of capacity, machinery and certification data** — data that exists inside
the plant, so it is a knowing failure rather than a technical one. **VERIFIED** (A6).
The reference site that publishes a machine list, a daily tonnage and a lot-size range
also ships template meta keywords and broken English. The design benchmark is good;
the data is the advantage.

### The three findings that produced this shape

**Finding 1 — capacity, machines and certification are the universal absence.**
Three pages exist entirely around them, and they hold top-level navigation slots equal
to the service pages.

This is the single most consequential structural decision on the site, and it is
deliberately unorthodox. On a normal B2B site, Capacity and Facility would be
sub-pages of About, and Quality a sub-page of Services. That would be a mistake here,
for two reasons.

Depth costs attention, and this market cannot afford depth. A buyer searching
"fabric dyeing capacity kg/day Pakistan" arrives from outside, on a phone or a slow
connection, with one question. Every extra level of nesting is another click between
that search and the number. With only nine pages there is no room for a third level
anyway.

A sub-page also signals optionality. Burying capacity under About says "this is nice
to know". It is not nice to know. It is the answer to the buyer's first question.

**Finding 2 — the buyer's first contact is face-to-face, and the website is not
replacing it.** The US Department of Commerce's own country guide for Pakistan states
that face-to-face contact is the business norm, and that selling is now also moving
onto the internet. **VERIFIED** (A7).

So the website's job is narrower than a website is usually given: make the *first*
contact faster, and be the artefact a buyer re-sends to a colleague who was not in the
room. That artefact has to survive being forwarded. It has to be readable as text, on a
bad connection, by someone who is not a textile expert.

Every structural choice that follows from this is a choice about the forwarded copy:

- **Text first, by construction.** No hero image, no carousel, no client logo wall.
  In the peer study, one competitor rendering a genuine 44-million-metre capacity ships
  **242 words inside 138 KB of markup**. The best text share in the whole sample was
  20%. **MEASURED** (C3).
- **Tables, not adjectives.** A headline like "44 Million Mtr Capacity" is a claim. A
  machine list is evidence a buyer can check against the mill they visited. **VERIFIED**
  (C2).
- **Machine-readable, because two thirds of the field ships nothing.** Only 2 of 9
  peers ship any structured data at all. **VERIFIED** (C4). JSON-LD is on all nine of
  our pages.

**Finding 3 — local sites win or lose on being legible, and the best information a
site owns is worth nothing if it cannot be read.** One competitor has the best machine
tables in the study and a **0.71% text share**, because the tables are inside images
and cannot be read by a search engine, an AI assistant, or a buyer on a bad
connection. **VERIFIED** (C6).

This is the load-bearing reason for the whole sitemap, and it is the direct answer to
the question "why no more pages". A page that exists but cannot be read is worse than
no page, because it has spent a slot. Nine readable pages beat thirty unreadable ones.

### Finding → decision

| Research finding | Evidence | Structural decision it produced |
|---|---|---|
| 90% of Faisalabad units have no site; 9% of listed sites work | A1, A2 — **VERIFIED** | Compete on being the one live, checkable site, not on volume. Nine pages, not a hundred. |
| 5 of 11 domains hijacked or repurposed | A3 — **VERIFIED** | Flat, shallow, static. No CMS, no login, no server config. Smallest possible thing to keep alive. |
| Capacity / machine / certification data is the universal absence | A6 — **VERIFIED** | Three pages built around it, all at top level. |
| Best technical disclosure in the field is a standalone process page, not an index | A6, C2 — **VERIFIED** | Three process pages, not one services page. |
| Local sites ship 1–20% text; a competitor renders 242 words | C3 — **MEASURED** | Text-first. No hero image, no carousels, no logo wall. |
| Only 2 of 9 peers ship any structured data | C4 — **VERIFIED** | JSON-LD on all nine pages. |
| Face-to-face is the business norm | A7 — **VERIFIED** | Site is a forwarding artefact, not a pitch. Density over polish. |
| The one live competitor has four pages | A2 — **VERIFIED** | Nine is the ceiling. More would exceed the local benchmark and the owner's maintenance capacity. |
| Best information locked in images is worth nothing | C6 — **VERIFIED** | Every table is real HTML text. No content inside a picture. |
| ~62% of AI referrals land on the homepage | D5 — **VERIFIED** | Homepage written as a self-contained entity summary. |
| Lead times are quoted without a start point by everyone else | E3 — **VERIFIED** | "Which stage does the clock start from?" is a homepage section, not a footnote. |
| 64.5% of Pakistani traffic is desktop | D7 — **MEASURED** | Tables designed for desktop first; mobile verified, not assumed. |
| Fax appears in 100% of the association's 114 directory records | B1.7 — **VERIFIED** | Fax is a first-class channel on `contact.html`, not a footnote. |

---

## Navigation

### Desktop: seven items and one button

At 64 rem and wider (64 rem = 1024 CSS pixels, set in `assets/css/site.css` line 367),
the header is a single row: brand on the left, seven navigation links, then the orange
"Get a quote" button on the right. The seven items, in order:

**Dyeing · Printing · Finishing · Capacity · Facility · Quality · About**

**Why seven, in this order.** The order is the buying journey, and it is not
alphabetical. A buyer scanning the bar reads it left to right as a sequence of
questions: can you dye it, print it, finish it; are you big enough, are you real, can
you pass an audit; who are you. Alphabetical order would destroy that sequence and
tell the buyer nothing.

**Why Contact is not in the list.** It is the button instead, and the button is more
prominent than any link: it is the only rust-coloured element in the header, it never
moves, and it is on all nine pages. Adding a tenth "Contact" link beside a "Get a
quote" button pointing at the same page would be two controls for one destination, and
the buyer would be unsure which one is real.

**Why seven fits.** Seven single-word labels plus a logo plus a button is what fits one
row at 1024 pixels. Two-word labels are the thing that breaks it: at the 15 px size set
in `site.css`, each extra word costs roughly 40 pixels, and seven items at 40 pixels
each is 280 pixels of overflow. That is why the labels are "Facility" and "Quality"
rather than "Factory & Facility" and "Quality & Certifications" — the long versions
are correct as page titles and as footer links, and wrong as navigation.

> **Check this yourself after any label change.** Open the site in a browser window
> exactly 1024 pixels wide and confirm the header stays on one line. This is a layout
> check, not a measurement taken for this document. **UNKNOWN** until you look.

**Why the three data pages get top-level slots.** Covered above under Finding 1. The
short version: burying Capacity, Facility and Quality under About or Services would
put the market's universal missing data one click further from the buyer, and would
tell the buyer it was optional. It is not optional.

### The mobile drawer

Below 64 rem the seven links collapse into a drawer opened by a "Menu" button in the
header. **AS BUILT.**

| Behaviour | How it works, and why |
|---|---|
| **Opening** | A `<button>` with `aria-expanded` and `aria-controls="site-nav"`. The navigation element starts with the `hidden` attribute, so it is genuinely hidden, not just moved off-screen. |
| **Position** | Not a side sheet. A full-width panel pinned directly below the header, so the header stays visible and the buyer's place on the page is never lost. |
| **Height** | Capped at the viewport height minus the header, and it scrolls. Seven long labels will not fit on a short phone; scrolling inside the panel is better than cutting items off. |
| **Label** | The button reads "Menu" when closed and "Close" when open. It is named by what it will do next, not by what it is. |
| **Closing on navigation** | Tapping a link closes the drawer — but only a real tap. A keyboard activation is skipped deliberately, so a keyboard user tabbing through the menu does not have it collapse under them. |
| **Closing on Escape** | Escape closes the drawer and returns focus to the Menu button, so focus is never lost. |
| **Closing on resize** | Crossing back above 1024 px closes it, so a window resized from narrow to wide does not leave a stale open panel behind a visible header row. |
| **Touch target** | The Menu button is 44 px tall, against a WCAG 2.2 AA minimum of 24 × 24 CSS pixels. Comfortably clear. |
| **Without JavaScript** | The site has no JavaScript dependency. With scripts off, the `hidden` attribute is never set, so the panel simply stays open and readable as a stacked list. Every link still works. |

### One gap in the drawer to close

Between 768 px and 1024 px wide — a small laptop, or a tablet held upright — there is
**no visible "Get a quote" button anywhere in the header or in the drawer**, and no
fixed action bar at the foot of the screen either. The header button is hidden below
1024 px, and the fixed two-button action bar only appears below 768 px. In that band the
buyer's only route to the enquiry form is to scroll all the way down to the page footer
and use the "Contact & enquiries" link there. **AS BUILT** — verified in
`assets/css/site.css` lines 367–369 and 1063.

The stylesheet already defines a `.nav__cta` class for exactly this purpose, at line
388. It is not used in any of the nine files. The fix is small: add a quote button
inside the navigation element, in the same block, in all nine files.

---

## Keywords: which page serves which search

### Be honest about volume first

**The research brief contains no search-volume data for any term.** No keyword
tool output, no ranking difficulty, no monthly searches, for any of the words below.
**UNKNOWN**, and it is not filled in here with a guess.

So the priority split below is built on two things we *do* have evidence for:

1. **Commercial intent** — how close a search is to an order, taken from the buyer
   checklist in `00-RESEARCH.md` B1 and B2, which is partly primary-sourced and partly
   marked practitioner reasoning.
2. **Whether we can answer it honestly** — a term we cannot serve truthfully is a term
   we do not target, no matter how many people search it.

**The realistic shape of this market** is: a small city-level supplier serving a national
and export audience. High-intent terms are low volume. A page that ranks first for
"fabric dyeing Faisalabad" is worth more than a page that ranks 40,000th for "how to
dye cotton at home". Optimising for the second is a way of doing nothing for a very
long time.

**One more thing to be straight about.** The phrase lists in the three tables below are
*proposals* — the words a buyer in this trade plausibly types, chosen from the buyer
checklist and the page content. They are not measured demand. Nothing here has been
checked against a keyword tool, because no keyword tool output exists in the research
brief. If you later buy a volume check, expect the low-volume, high-intent end of
these lists to confirm rather than surprise.

### P0 — the six pages that carry the enquiry

These terms are low volume and high intent. Each one has a page built for it.

| Page | Term it is built for | Why this page earns it |
|---|---|---|
| `dyeing.html` | fabric dyeing Faisalabad · fabric dyeing Pakistan · reactive dyeing · disperse dyeing · knit dyeing | GOTS defines wet processing to include "sizing, desizing, pre-treatment, dyeing, printing, finishing, laundry". A buyer matching a supplier to a checklist needs *our words*, not "textile processing". **VERIFIED** (B1.2) |
| `printing.html` | fabric printing Faisalabad · digital fabric printing Pakistan · rotary screen printing Pakistan · textile printing services | A buyer arrives with artwork, not with a print method. The page is built to make that choice for them, which is the one thing a printing page can uniquely do. **AS BUILT** |
| `finishing.html` | fabric finishing Faisalabad · stenter · sanforising · heat setting · peaching · calendering | Finishes are specified by buyers, not chosen by mills, and the two halves of the finish menu — mechanical and chemical — are genuinely different decisions. **AS BUILT** |
| `capacity.html` | textile processing capacity Pakistan · dyeing capacity kg per day · dye house machine list | This is the term the entire field is failing to rank for, because they do not publish the number. Publishing it is the cheapest available competitive advantage in this market. **VERIFIED** (A6) |
| `contact.html` | fabric processing quote · textile processing contact Pakistan · get fabric dyed Faisalabad | The only page whose job is conversion. It carries the WhatsApp composer, the form and every direct channel including fax. **AS BUILT** |
| `index.html` | Al-Jilanee Textile · textile processing Faisalabad · fabric dyeing printing finishing Pakistan | ~62% of AI-assistant referrals land on the homepage, so it is written as a self-contained entity summary. **VERIFIED** (D5) |

### P1 — real terms, served as sections, not as new pages

These are terms real buyers use. Each one is answered **inside a page that already
exists**, under a heading that a human can find. None of them gets its own URL. The
reason is in the next section, but stated here plainly: **a thin page is worse than no
page in this market**, because the field is already full of them and a buyer who lands
on one concludes the unit cannot produce data.

| Term | Served as | On which page | Why a section and not a page |
|---|---|---|---|
| OEKO-TEX STeP · OEKO-TEX certification | Register row, plus a callout naming it as the one most worth having | `quality.html` | It is one row in a register of fifteen. Splitting it out would orphan it from the honest comparison it lives in. |
| GOTS certified processing Pakistan | Register row, with the wet-processing scope explained | `quality.html` | The answer is a paragraph inside a fifteen-row table. |
| GRS certified | Register row, renamed **GRTS / RCS**, with a warning to re-verify | `quality.html` | See the warning below. |
| Higg FEM · ZDHC wastewater testing · SMETA · BSCI | Register rows, each with "who normally requires it" | `quality.html` | Same. |
| water consumption textile dyeing L/kg | Environment and utilities table, benchmarked | `capacity.html` | One of seven rows. Measured at 74–313 L/kg across 21 mills, only two in the efficient band. **VERIFIED** (E4) |
| effluent treatment plant textile Pakistan · NEQS BOD COD limits | Same table, against the national limits | `capacity.html` | BOD₅ ≤ 80, COD ≤ 150, TSS ≤ 200 mg/L are **VERIFIED** (E4) and belong beside our figure, not on a page of their own. |
| textile dyeing lead time · how long does fabric dyeing take | "Which stage does the clock start from?", plus a lead-time rail | `index.html` and `capacity.html` | The insight is that a lead time without a start point is meaningless. That argument needs both pages; a dedicated page would need to repeat itself on both. **VERIFIED** (E3) |
| lab dip · shade matching · lab dip turnaround | Six-step shade-matching section | `dyeing.html` | The steps only mean anything next to the dye-class table. |
| strike-off · pre-production sample · minimum print run | The print run, and the buyer questions | `printing.html` | Same. |
| minimum order quantity fabric dyeing · MOQ dye lot | Buyer questions, and the lot-structure table | `dyeing.html` and `capacity.html` | The research marks minimum-lot policy **UNVERIFIED** as a market norm, so the site reserves the field and marks it for you rather than inventing a figure. **VERIFIED as a finding** (B2.16) |
| textile processing mill Faisalabad · where are the processing units | Cluster section, naming the three belts | `about.html` | ~250 processing units in the district, ~1,545 nationally. **VERIFIED** (E1) |
| factory tour textile mill · virtual factory tour Pakistan | Remote verification section | `facility.html` | The page answers the need; whether the phrase is actually searched is **UNKNOWN**. |
| GSM shrinkage tolerance · width tolerance fabric | "Our acceptance tolerances" callout | `quality.html` | A published tolerance is a stronger claim than a certificate, and it belongs beside the inspection steps. |
| incoterms Pakistan textile · letter of credit Pakistan | One buyer question, answered honestly | `dyeing.html` | Imports into Pakistan generally require a letter of credit unless a special exemption is obtained in advance. **VERIFIED** (B6). One question, one answer. |

### P2 — terms deliberately not targeted

| Term | Decision | Reason |
|---|---|---|
| "GRS certified" as a headline term | **Do not target** | The body that operates GOTS states it develops and operates GOTS and GRTS, describing GRTS as announced 14 September 2026. Whether GRS is withdrawn or in transition is **UNKNOWN** — the Textile Exchange site returned HTTP 403. Building a page on a possibly-stale label is a liability. The term appears once, inside a re-verification warning. **VERIFIED / UNKNOWN** (B4) |
| Export-oriented unit · GSP+ · EOE-CLT · duty drawback · Form-A · NTN/STR · PSW | **Never publish** | Deliberately excluded. The FBR site returns byte-identical responses to every query and `ecom.customs.gov.pk` does not resolve, so none of it could be sourced. **UNVERIFIED** (B5) |
| Urdu-language equivalents | **Out of scope for now** | The site is `<html lang="en">` throughout. The research brief contains nothing about Urdu search behaviour or buyer language. **UNKNOWN** — a decision for you, not an assumption for us. |
| "How to dye cotton" style tutorial terms | **Not targeted** | Very high volume, close to zero commercial intent for a job-work processor, and the research gives no basis for assuming a content-writing capacity in a plant that has no website today. |
| Jobs, careers, recruitment | **No page** | Nothing in the research brief supports one. **UNKNOWN** demand. Do not create a page for it, and do not leave a dead link to one. |
| "Best textile mill in Pakistan" style superlative terms | **Not targeted** | The site publishes an explicit list of claims it does not make, including "no leading or number one". Targeting a superlative term would contradict the page it would land on. **AS BUILT** |

---

## The four pages we are not building, and why

These are decisions, not omissions. Each one has a reason you can repeat to anyone who
asks why the site "is missing" something.

### No `/services` index page

**The decision:** the three process pages sit at the top level. There is no page that
lists them.

Three reasons.

The navigation bar already *is* the index. Dyeing, Printing, Finishing, three words
across the top of every page, always in the same place. An index page would restate
those three words one click later, and would be reachable from nowhere except itself.

It would add a click to the most valuable journey on the site. Most buyers need one or
two process groups. The homepage capability grid sends them to the right one directly.
A `/services` page inserts a page they must read and dismiss.

And the index page would be a worse version of the homepage section that already
exists. The homepage already has a four-card capabilities grid with one line of copy
per process. The index would be that grid again, with less copy.

**The benchmark agrees.** The one site in the study with genuine buyer-grade technical
disclosure built it as a standalone process page — a dyeing page with a seventeen-row
machine table — rather than behind an index. **VERIFIED** (A6).

### No `/blog`

**The decision:** no articles, no news, no dated posts.

The buyer's questions are already answered, in the buyer's words, on the pages where
they are useful. Dyeing has seven buyer questions. Printing has five. Finishing has
four. Quality has the register and the log book. These are not decoration — they exist
because buyers ask them. **VERIFIED as a build decision** (D5).

Note what the research says about *why* they exist: FAQ structured data was fully
withdrawn from Google Search on 7 May 2026, and the Q&A blocks are deliberately not
marked up. They are there because buyers need the answers, not to win a rich result. A
blog would be adding a publishing obligation to serve the same function worse and
later.

Then the maintenance argument, which is the one that should decide it for you. A blog
is not a page; it is a permanent commitment to publish, forever, or lose the archive's
credibility. The same person who maintains this site cannot be relied on to remember a
certificate expiry date without a calendar reminder — `quality.html` says so on the
page itself. Adding an editorial calendar to that is how a small site ends up publishing
nothing for eight months and looking worse than never having started.

**Revisit only if** you can name the person who writes it and a realistic schedule. If
you cannot name both, the answer is no.

### No separate `/certifications` page

**The decision:** the certification register and the certificate log book are two
sections of `quality.html`. Not a page of their own.

The reason is the pairing. The power of this part of the site comes entirely from
"what we hold" sitting directly beside "what we do not hold", in the same table, in
the same reading. `quality.html` currently states, in its own words, that no other
certificates are held at publication. Split that register from the log book and you
have two pages: one listing a single row, and one sitting empty. The contrast is the
argument. Split it and the argument is gone.

There is also a density problem. A dedicated certifications page for a unit whose log
book currently contains exactly one row — APTPMA membership — would be a page about the
absence of certificates. Page credibility scales with the density of real data behind
it. One row cannot carry a page.

And when certificates do arrive, they will not arrive one at a time in a way that
justifies a page. They will land together, in the log book, and the register above it
will be updated in the same edit. **AS BUILT** — the log book already carries a
commented template row for exactly that, and a maintenance note about the two-week
expiry reminder.

The sector benchmark says the same thing. The certificate log book is described in the
research as the highest-value trust pattern in the Pakistani sector — but it is
described as a *table on a quality page*, with columns for certificate name, issuing
body, expiry date, scope and a link to the document. Not a destination. **VERIFIED** (C1).

### No substantive privacy-policy page

**The decision:** no `privacy.html`. The one honest sentence about data already sits
under the submit button on `contact.html`, where the buyer reads it before they press
send.

**The reason is factual, not philosophical.** The form has no server. When a buyer
presses "Send enquiry", `assets/js/site.js` assembles what they typed into a single
message and opens a `wa.me` link in WhatsApp. Nothing is transmitted to the website.
Nothing is stored on the website. The buyer sees the whole message before it sends.
There is no database, no form processor, no analytics script and no cookie banner —
the research records this build as having none of the four. **AS BUILT**, verified in
`assets/js/site.js` and confirmed across all nine files.

A privacy policy written for a form that does not exist would be fiction. And the rule
this whole site runs on is that nothing on it is invented. That rule does not get an
exception for the page that is legally convenient.

**This is a trigger, not a permanent decision.** The moment any of these becomes true,
a privacy policy stops being optional:

- [ ] A server or a form-handling service is added
- [ ] Analytics of any kind are installed
- [ ] A file-upload capability is added to the form
- [ ] A newsletter or mailing list is started

Any one of those makes it a real obligation and a real page. Record it in the launch
checklist as a condition, not as a to-do.

---

## URL naming

### The rules

| Rule | What it means | Where it already holds |
|---|---|---|
| Flat | Every page is a file in the site root. No folders, no nesting. | All nine files sit beside `index.html` |
| Visible extension | Every page keeps `.html` in its address. | `dyeing.html`, not `/dyeing` |
| One word, no punctuation | Lowercase, a single dictionary word, no hyphens, no underscores, no numbers, no slugs. | `dyeing`, `printing`, `finishing`, `capacity`, `facility`, `quality`, `about`, `contact` |
| Lowercase, always | Every filename starts with a lowercase letter and contains no capitals. | Holds across all nine files |
| One exception | The homepage is `index.html` and is served at `/`. | `index.html` line 24 |
| Anchors are not pages | A link like `dyeing.html#pretreatment` is a jump inside a page. It has no entry in `sitemap.xml` and no breadcrumb. | Confirmed: `sitemap.xml` contains nine `<url>` entries, no anchors |

### Why each rule

**Flat, with no folders.** Every internal link in the site is one word long —
`href="dyeing.html"`, never `../` or `/services/dyeing.html`. That means any page can
be opened from a folder on your desktop, emailed to someone as a file, or copied onto
a memory stick, and every link inside it still works. The moment pages move into
folders, that stops being true and you start debugging relative paths instead of
selling fabric.

It is also the smallest possible thing to keep alive. Five of eleven domains in this
market were abandoned or taken over. A flat root of nine static files, with no CMS and
no login, is nine things to maintain. A nested site with a database is a hundred, and
one of them is a password.

**.html kept visible.** You edit these files by hand. A file you can double-click is a
file you can maintain. Hiding the extension means a server has to be configured to
rewrite `/capacity` into `capacity.html`, and that configuration has to be correct on
every host, forever, for a cosmetic gain on nine addresses. The trade is not worth it.

**One word, lowercase, no punctuation.** Two reasons.

First, case. Windows and macOS treat filenames as case-insensitive by default. Linux
web servers do not. If `Capacity.html` and `capacity.html` both exist on your laptop
they are the same file; on the server they are two different addresses, one of which
returns "not found". All-lowercase makes that mistake impossible to make.

Second, the mapping. Because every filename is a single word, the filename, the
navigation label, the page topic, the breadcrumb and the footer link are all the same
word. There is no lookup table in your head between "what the file is called" and
"what the page is about". Adding a hyphen or a slug breaks that, and buys nothing —
there is no keyword benefit to a filename in this market, and pretending otherwise
would be a claim we cannot source.

**The homepage is the only page where two addresses must agree.** It is served at `/`
and its canonical URL is `https://www.aljillanitex.com/` — with no `index.html` on the
end. The `<link rel="canonical">`, the `og:url` and the `<loc>` in `sitemap.xml` all
write the same bare `/`. That is the one place where a mismatch creates a duplicate
page, so it is the one place to check after any move.

### The domain is not registered yet

Every canonical URL, every `og:url` and every sitemap entry in this build is written
against **`https://www.aljillanitex.com/`**. That domain is currently a placeholder.

The research found that `aljillanitex.com` — the domain the association directory
prints against this company — **has no DNS record at all**, and that an RDAP lookup
returns 404, meaning the domain is **unregistered at the registry**, not merely
misconfigured. **VERIFIED** (A3). Anyone can register it.

This is not a website problem and it is not this document's problem to solve. It is
recorded here because every URL policy in this file depends on it, and because a
hijacked domain in this market does not merely lose leads — it hands an international
buyer somebody else's business. It is the first item in the launch checklist.

**Two things to decide the moment you hold the domain:**

- [ ] **Register it.** Before anything else in this document matters.
- [ ] **Pick `www` or bare, and make the other one redirect permanently.** Everything
      in the build writes `www`. If you serve the bare domain instead, every canonical
      on all nine pages points at an address that does not resolve. Pick one. Do not
      leave both live.

---

## Internal links

### Nothing is orphaned, and here is the proof

Every one of the nine files carries the same header and the same footer. That means
every page is reachable from every other page in **at most two clicks**, and no page
is unreachable.

| Page | Reached from the header nav | Reached from the footer | Reached from context in the body | Inbound contextual links from other pages |
|---|---|---|---|---|
| `index.html` | Brand logo | Brand logo | — | Every page, via the brand and the breadcrumb |
| `dyeing.html` | Yes | Yes, twice | Homepage capability grid | `dyeing.html#pretreatment` from the homepage and every footer |
| `printing.html` | Yes | Yes | Homepage capability grid | Homepage capability card |
| `finishing.html` | Yes | Yes | Homepage capability grid | Homepage capability card |
| `capacity.html` | Yes | Yes | Homepage hero note, lead-time rail, transparency cards | `dyeing.html` rail, `finishing.html` rail, `quality.html`, `about.html`, `facility.html` |
| `contact.html` | Header CTA button | Yes | Hero, lead-time rails, every service page, `quality.html` | Footer and action bar on all nine pages |
| `quality.html` | Yes | Yes | Homepage trust section, `dyeing.html` rail, `contact.html` | `dyeing.html`, `about.html`, `contact.html` |
| `facility.html` | Yes | Yes | Homepage transparency card | `capacity.html`, `about.html` |
| `about.html` | Yes | Yes | Homepage closing callout | `facility.html`, `quality.html` |

**Orphan count: zero. Broken link count: zero.** The footer on all nine files lists the
same five service links and the same four company links, covering all eight inner
pages. `contact.html` is additionally linked from the header button, the action bar,
and the body of every other page.

**But reachability is not the goal. The contextual links are what carry the argument.**
A link in the footer says "this page exists". A link inside the body says "here is why
you are being sent, and what you will find when you arrive". Four of the most important
contextual links on the site are missing.

### The four contextual links to add

| From | To | Where it should go | Why it matters |
|---|---|---|---|
| `printing.html` | `capacity.html` | The "Printing at this unit" callout, beside the note about which methods are actually run | A buyer reads the print method comparison and then needs the print machine list. Today they have to go via the footer. |
| `printing.html` | `quality.html` | Beside the strike-off step in the print run | Strike-off approval and pre-dispatch inspection are quality control points, and they are what quality.html's process-control flow actually describes. |
| `finishing.html` | `quality.html` | The "What shrinkage tolerance do you work to?" answer | The answer is a placeholder on finishing.html; the tolerance itself is published on quality.html under "Our acceptance tolerances". Sending the buyer there is the point of the question. |
| `capacity.html` | `quality.html` | The wastewater testing row and the water metering row in the environment table | Wastewater testing and third-party accredited testing are both on quality.html's testing table. Right now a buyer who lands on the effluent figures has to go looking. |

### One stray link to delete

`index.html` line 665 contains a hidden, `aria-hidden` footer link pointing at
`assets/img/og-default.png` with no anchor text:

```html
<li><a href="assets/img/og-default.png" hidden aria-hidden="true"> </a></li>
```

It is a leftover. Delete it.

The reason matters more than the reason it is untidy. The research catalogues, among the
field's failures, a competitor site shipping eighteen client logos whose alt text is
literally `client` — an image with no readable description attached to it. A link with
no anchor text is the same defect in link form: it tells a screen reader and a search
engine nothing, and it puts a link to an image file in a navigation list. **VERIFIED as
a pattern** (A6, C6).

---

## Breadcrumbs and canonical URLs

### Breadcrumbs

**The policy: two levels, always, and never a third.**

The breadcrumb sits in the page header, above the `h1`, on all eight inner pages. The
homepage has none, which is correct — it is the root of the tree.

```
Home / Dyeing
Home / Capacity
Home / Quality
```

**Why two levels and never three.** Because there is no third level to show. There is no
`/services` parent, because there is no `/services` page. A breadcrumb that says
"Home / Services / Dyeing" would describe a hierarchy that does not exist, and the only
way to make it true would be to build the index page this document argues against.

The second term is the same single word as the navigation label — Dyeing, Printing,
Finishing, Capacity, Facility, Quality, About, Contact — with one exception on Contact,
where the visible crumb reads "Contact" and the page heading reads "Send us your
specification". That is deliberate: the crumb is a location, the heading is a task.

**One rule about deep links.** `dyeing.html#pretreatment` is linked from the homepage
capability grid and from every footer. It is a jump *inside* the Dyeing page, not a
page. It must never appear as a breadcrumb, and it must never be added to
`sitemap.xml`. `sitemap.xml` currently contains nine entries, none of them an anchor, and
that is correct.

**The machine-readable version mirrors the visible one exactly.** Each of the eight
inner pages carries a `BreadcrumbList` in its JSON-LD with position 1 = Home at
`https://www.aljillanitex.com/` and position 2 = the page itself. The numbers in the
structured data and the words on screen are the same numbers and the same words, in the
same order. A mismatch between the two is a straightforward lie to a machine.

The homepage carries no breadcrumb in either form. It carries `Organization`,
`LocalBusiness` and `WebSite` instead. `contact.html` carries `ContactPage` rather than
the `WebPage` + `BreadcrumbList` pair the other seven inner pages carry — that is the
specified build, and its visible breadcrumb is still present and still correct.

### Canonical URLs

**The policy: exactly one canonical per page, absolute, matching the Open Graph URL and
the sitemap entry, and pointing at the page itself and never at a section anchor.**

| Page | Canonical | Must match |
|---|---|---|
| `index.html` | `https://www.aljillanitex.com/` | `og:url`, `sitemap.xml` `<loc>` |
| Each inner page | `https://www.aljillanitex.com/<name>.html` | `og:url`, `sitemap.xml` `<loc>` |

Section anchors inherit the page's canonical. `dyeing.html#pretreatment` is the same
document as `dyeing.html` and must not be given a canonical of its own.

**The one rule that is easy to break.** Never point a canonical at a redirect, and never
let two addresses serve the same page. After the domain goes live, check that
`https://www.aljillanitex.com/dyeing.html` and `https://www.aljillanitex.com/dyeing`
do not both return content. If they do, only one may carry a canonical and the other
must 301 to it — and that redirect belongs in the web host's configuration, not in the
HTML.

**There is nothing to disallow.** `robots.txt` contains no `Disallow` rule, and no page
carries a `noindex`. Every page is open to every crawler, including the AI crawlers
named explicitly in that file. That is a deliberate position, and the research explains
it: roughly 95% of sites either ignore `gptbot` or block it, so a small business that
permits access is taking an advantage that is already available and costs nothing.
**VERIFIED** (D5).

### The draft gate is a process gate, not a technical one

This matters enough to say on its own.

All nine files currently carry `data-draft="true"` on the `<html>` element, and a red
DRAFT ribbon is displayed across the top of each one. Removing that attribute removes
the ribbon. That is how the draft state is switched off.

**But nothing technical prevents the site being indexed while it is in draft.** There is
no `noindex`, no robots block, no password, no staging host. A draft with visible
"TO CONFIRM" chips is fully indexable. The gate is a human being following a checklist,
not a setting.

So:

- [ ] Keep the site unpublished — or on a host robots cannot reach — until every
      `TO CONFIRM` chip in `06-CLIENT-CHECKLIST.md` is resolved.
- [ ] Do not rely on the ribbon. It is a warning to your own staff, not a lock.

---

## Three file defects to fix before launch

These are not information-architecture problems. They are in the HTML files, they were
found while checking this document, and they are recorded here so they are not lost.
Each is a one-character or one-line fix.

**1. `index.html` — an HTML comment is not closed.**
A comment opens on line 2 (`<!--`) and does not close until line 21. Everything
between them is inside that comment and the browser ignores it — which includes the
opening `<html lang="en" data-draft="true">` tag, the opening `<head>` tag, the
character set declaration, and the viewport declaration. The consequence is that the
homepage has no declared language, no declared character set, and no mobile viewport
setting.

This also breaks the draft gate on that page specifically: `data-draft="true"` is on the
`<html>` tag, which is inside the comment, so the DRAFT ribbon on the homepage cannot
be switched off by removing the attribute as the other eight pages allow.

**Fix:** close the comment on line 15, immediately after the banner.

**2. Seven inner pages have a stray `?` before the doctype.**
`about.html`, `capacity.html`, `dyeing.html`, `facility.html`, `finishing.html`,
`printing.html` and `quality.html` all begin `?<!DOCTYPE html>` on line 1. The question
mark makes the browser discard the whole declaration, and the page renders in
compatibility mode instead of standards mode. `contact.html` and `index.html` are
correct.

**Fix:** delete the `?` on line 1 of those seven files.

**3. No permanent "Get a quote" button in the mobile drawer.**
Described under Navigation above. Between 768 px and 1023 px there is no visible
enquiry button anywhere on the page. The stylesheet already has a `.nav__cta` class
waiting for it.

**After any of these fixes, confirm the pages still render as designed.** These are
structural edits to files that currently work in some browsers. Check one page, then
all nine.

---

## Pre-launch checklist for this document

Structure and links:

- [ ] Register `aljillanitex.com` before anything else. **VERIFIED: it is currently
      unregistered at the registry and can be taken by anyone.**
- [ ] Decide `www` or bare domain, and make the other one redirect permanently.
- [ ] Fix the three file defects listed above.
- [ ] Add a "Get a quote" button inside the mobile drawer in all nine files.
- [ ] Add the four missing contextual links listed above.
- [ ] Delete the stray hidden link in `index.html` line 665.
- [ ] Confirm in a browser window set to exactly 1024 px wide that the header stays on
      one line.
- [ ] Click every link in every header, footer, breadcrumb and action bar, on all nine
      pages. Expected result: zero broken links.

Consistency:

- [ ] Check that each page's `dyeing.html#pretreatment`-style deep link is absent from
      `sitemap.xml`. It should contain exactly nine entries.
- [ ] Check that every `TO CONFIRM` chip on the homepage `datasheet` names the page the
      value actually belongs on. Several do; this is the cheapest maintenance rule on
      the site.
- [ ] Check the spelling of the company name in three places: the `<title>` tags, the
      footer, and the certificate log book. The site writes **Al-Jilanee**; the domain
      is **aljillanitex**. These may be the same name written two ways, or they may not
      be. **UNKNOWN.** The exact registered entity name is open question 1 in
      `00-RESEARCH.md`, and the log book must carry whatever the certificate itself
      says — not a spelling chosen for the website.

Before you go live:

- [ ] Resolve every `TO CONFIRM` chip against `06-CLIENT-CHECKLIST.md`.
- [ ] Only then remove `data-draft="true"` from all nine files.
- [ ] And only then publish — remembering that the DRAFT ribbon is a warning, not a
      lock.
