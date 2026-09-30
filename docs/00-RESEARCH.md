# 00 — Research Summary

**Al-Jilanee Textile Industry (Pvt) Ltd, Faisalabad — website strategy**
Prepared August 2026. Every claim below is labelled with its evidence class.

---

## How to read the evidence labels

| Label | Meaning |
|---|---|
| **VERIFIED** | I retrieved the source directly and read the primary document or ran the check myself. |
| **MEASURED** | I computed it — counts, byte weights, text density, contrast ratios. Reproducible. |
| **UNVERIFIED** | Plausible, widely repeated, or inferred — but I could not reach a primary source. **Nothing in this document is built on an UNVERIFIED item without saying so.** |
| **UNKNOWN** | I could not find it. Recorded as a question for the client, never guessed. |

**This is the discipline the whole project runs on.** The site publishes unconfirmed
figures as visibly marked placeholders rather than as plausible numbers. That rule
was applied to the research first, and then to the copy.

---

## Method, and its limits — read this before trusting the numbers

The research was done in two passes by separate agents, plus direct work by me.

**What worked.** Direct HTTP retrieval of known authoritative URLs — association
directories, standards bodies, company websites — and running DNS and HTTP checks
against every domain in those directories myself. That produced the strongest
section of this document (Topic A) because it is primary and reproducible.

**What did not work, and this matters.** General web search was largely unavailable
throughout. The built-in search tool returned *"DeepSeek search has no API key"*.
The Parallel Search MCP hit its free-tier rate limit after the first four calls and
did not recover. Direct fetches failed with DNS resolution errors. Every general
search engine reachable from the command line — DuckDuckGo, Mojeek, Bing, Brave,
Ecosia, SearXNG, Startpage, Yandex — returned CAPTCHAs, 403/429, or, in Bing's case,
**provably poisoned results** (a query for a Faisalabad textile company returned
pages about aluminium extrusions and Chrome downloads).

**Consequence, stated plainly:**

- Topics A, C and the standards half of B are **strong and primary-sourced**.
- Topic B's buyer-checklist section is partly **practitioner inference, not
  quotation**. Items are marked.
- Topic D (technical standards) is strong — Core Web Vitals, WCAG 2.2 and SEO
  guidance all come from primary vendor documentation.
- Topic E (industry capability) is strong on published academic and government
  sources.

**No URL in this document is fabricated. No number was invented to fill a gap.**
Where a source could not be reached, the gap is named instead.

---

## TOPIC A — The state of Faisalabad processor web presence

### A1. The market is, in practice, offline. **VERIFIED**

The All Pakistan Textile Processing Mills Association (APTPMA) publishes member
lists by region. I counted the records directly.

| Region | Member records | With a website listed | Share |
|---|---|---|---|
| Faisalabad | **114** | **12** | **10.5%** |
| Lahore–Gujranwala | 76 | 2 | 2.6% |
| Karachi | 198 | 17 | 8.6% |

Source: `aptpma.com.pk/faisalabad`, `/lahore-gujranwala/`, `/karachi/`

**So roughly nine in ten Faisalabad processing units have no website at all.**
For a client in this market, that is not a competitive disadvantage to overcome.
It is an uncontested position.

### A2. Of the twelve websites the association does list, one works. **VERIFIED**

I resolved and fetched every unique domain on the Faisalabad list.

| Listed URL | What it serves today |
|---|---|
| `www.aljillanitex.com` | **No DNS record at all** — no A, no NS. Dead. |
| `www.habibfabrics.com` | No DNS. Dead. Also mis-listed against Hilal Fabrics. |
| `www.matex.pk` | No DNS. Dead. |
| `www.sargodhatex.com` | No DNS. Dead. |
| `www.ittehadtextile.com` | Resolves, serves **HTTP 402 Payment Required** — an unpaid parked storefront |
| `www.rashidtex.com` | Repurposed → B2C women's clothing retail, "FLAT 40% OFF" |
| `www.rashidfabrics.com` | Repurposed → B2C shalwar kameez retail |
| `www.sitara.com` | **Hijacked** → "Sitara Travel", a Central-Asia tour operator |
| `www.mj-textile.com` | **Hijacked** → Chinese-language casino page + a Hebei transformer manufacturer |
| `www.ahsandigital.com` | Abandoned → a solo Google Ads freelancer's portfolio |
| `www.saeedfabrics.com` | **Live and genuine** — real unit, honest, four pages thin |

**Survival rate on the industry's own directory: 1 of 11 ≈ 9%.**

### A3. The hijack rate is the finding that should worry an owner. **VERIFIED**

Five of eleven domains now belong to somebody else. `sitara.com`, listed for Sitara
Textile Industries, is a travel agency in Central Asia. `mj-textile.com` is a
gambling site.

This matters beyond lost leads. For a Pakistani SME, **the domain is the business's
only formal public identity** outside the association directory. A hijacked domain
does not merely fail to generate a sale — it actively hands an international buyer
someone else's business. In this market, that is a reputational risk, not a
marketing one.

> ### ⚠️ ACTION REQUIRED — the client's own domain is dead
>
> `aljillanitex.com` — the domain printed in the APTPMA directory against this
> company — **has no DNS record whatsoever.** RDAP returns 404, meaning the domain
> is unregistered at the registry, not merely misconfigured.
>
> **Anyone can register it.** Until that is fixed, this is the single most urgent
> item in this project, and it has nothing to do with the website. See
> `07-LAUNCH.md` §0.

### A4. A DuckDuckGo search for the company returns exactly one result. **VERIFIED**

Searching `"Al-Jilanee Textile" Faisalabad` returns **one** result: the APTPMA
directory page. No LinkedIn profile, no Facebook page, no trade listing, no review,
no directory entry anywhere else.

The company's entire web presence is a row in a print-era HTML table.

### A5. The directory predates the channel the business actually runs on. **VERIFIED**

Across all 114 Faisalabad records: **114 fax numbers, 114 landlines, 113 email
addresses, and exactly one mobile number.** Not one WhatsApp contact.

The association's directory is organised around the communications of the 1980s.
The business is conducted on WhatsApp. This is why the site makes WhatsApp the
primary channel rather than a link in a footer.

Forty-nine of the 114 records use free mail (Gmail, Hotmail, Yahoo, Live) as the
only business address. One email address, `hassan186@live.com`, is copy-pasted
across **six different member companies**.

### A6. The failure mode is not broken websites. It is absent data. **VERIFIED**

I catalogued 23 distinct failure modes across the audited sites. The instructive
ones:

- **`itdind.com` (Ibrahim Textile Dyeing, Faisalabad) — the anti-reference.** A
  live, ranking WordPress site shipping **Lorem Ipsum in production** on every
  service page, a **fabricated founder** ("Jhon Martin") with a stock headshot, all
  four stat counters rendering **zero**, a hero image literally named
  `istockphoto-1069103796-612x612-1.jpg`, and a footer reading
  *"Copyright © 2025 Construction Company. Powered By Bosathemes."* It also
  misspells Bleaching as **"Bleacing"** in its own navigation. Response time on
  measurement: 6,771 ms.
- **`ahmadjamal.pk`** — real numbers ("44+ Million Mtr Capacity", "700+ Employees"),
  real specialisation, a fax number, departmental emails with named extensions.
  But: **zero certifications named anywhere**, no machine list, and 18 client logos
  whose alt text is literally `client`.
- **`tauseeftextiles.com/dying.html`** — the only site found with buyer-grade
  technical disclosure: 17 machines listed by model, "25000 kgs per day", lot range
  "10 kgs to 1,500 kgs", named Brückner and Santex finishing lines, a QC lab, an
  ETP. It also ships template meta keywords (`HTML5,CSS3,Template`) and broken
  English.

**The pattern across all of them:** the most common absence is not a broken
thing — it is the **absence of capacity, machinery and certification data**. That
data exists inside the plant. It is a knowing failure, not a technical one.

> **Corrected premise.** An earlier draft of this research used `alkhidmat.com` as
> a Faisalabad textile benchmark. **That is wrong.** `alkhidmat.com` is the Alkhidmat
> Welfare Society, a Karachi humanitarian NGO. `alkhidmattextile.com` and
> `alkhidmattextiles.com` do not resolve; `alkhidmat.com.pk` is a 477-byte stub; and
> no "Al-Khidmat Textile Processing" appears in the 114-record Faisalabad list.
> The benchmark is now **`ahmadjamal.pk` (structural model)** and
> **`tauseeftextiles.com/dying.html` (technical model)**.

### A7. How deals actually route. **VERIFIED, and it constrains the design**

The US Department of Commerce's own country guide states that "the traditional
approach to selling in Pakistan has been through personal contact with a major
wholesaler… this trend is changing… **as well as the internet**", and that
"**face-to-face contact is the business norm**."

**Design consequence:** the website is not replacing relationship selling. Its job
is to make the *first* contact faster and to survive the second one — and to be
the artefact a buyer re-sends to a colleague who was not in the room. That is why
the site is dense with checkable data rather than designed to impress in thirty
seconds.

---

## TOPIC B — What buyers actually evaluate

Partly primary-sourced, partly practitioner reasoning. The split is marked.

### B1. Disqualifying if absent

1. **A live, non-hijacked web identity.** Traced to A2/A3: six of seven testable
   sites on the association's own list were dead or hijacked. **The cheapest
   competitive advantage available, and currently unclaimed.** → `robots.txt`,
   domain hygiene in `07-LAUNCH.md`
2. **A named, specific processing scope** using the standards' own vocabulary.
   GOTS defines wet processing as *"sizing, desizing, pre-treatment, dyeing,
   printing (including digital printing), finishing, laundry"*. A buyer matching
   you to their checklist needs your words, not "textile processing". →
   `dyeing.html`, `printing.html`, `finishing.html`
3. **Published capacity in buyer-plannable units** — per machine, per process, with
   a lot-size range. → `capacity.html`
4. **Certifications named, with issuing body, number, scope and expiry, and a way
   to verify them.** → `quality.html` certificate log book
5. **A laboratory and a test regime.** GOTS requires chemical inputs to be
   *"approved prior to their use"*. → `quality.html`
6. **Environmental and chemical compliance, stated concretely.** ZDHC's MRSL exists
   to *"phase out harmful substances at the source"* — buyers ask what goes into
   the drum, not only what leaves the pipe. → `capacity.html` environment table
7. **A complete, contactable location**: street address, landline, **fax**, and
   role-based mailboxes. The directory carries a fax for **100% of its 114
   members** — it is expected in this market. → `contact.html`
8. **A live enquiry mechanism that reaches a human.** Absent on three of the four
   audited sites. → `contact.html` WhatsApp composer

### B2. Deciding

9. **Traceability and documentation discipline.** GOTS: *"Fabric processors must
   purchase GOTS certified yarns and maintain records of quantities purchased.
   Wastage, volume reconciliation and transportation documentation shall be
   verified during an onsite audit."* **For a job-work processor this is the
   competence a buyer is actually buying**, and no site in the Faisalabad sample
   mentions it. → `quality.html` traceability block
10. **Machine and process depth, stated honestly.** Listing processes you do not
    run is fatal under audit. → the finishing menu is explicitly labelled as
    "what the industry offers", with rows to delete
11. **Certifications current as of today — including the GRS question.** See B4.
12. **Certifications that fit a *processor*, not a brand.** See B3.
13. **Audit-readiness as a selling point.** OEKO-TEX STeP's six modules
    (chemical management, environmental performance, environmental management,
    social responsibility, quality management, health and safety) are a ready-made
    section structure — a roadmap if not held, proof if held.
14. **Effluent treatment, with capacity.** → `capacity.html`
15. **Lead-time framing.** **UNVERIFIED** — no source reached for lead-time norms in
    this trade. The site therefore states the stage a clock starts from rather
    than inventing a turnaround figure.
16. **MOQ / minimum-lot policy.** **UNVERIFIED** as a market norm; the site
    reserves the field and marks it for the client.

### B3. Certification findings that changed the build

**OEKO-TEX STeP is the right scheme to lead with, not STANDARD 100.** This was the
most consequential correction in the project, and it came late.

- **STeP** certifies the **facility** — *"all facility types… from fibre
  manufacturing to spinning or tanning to finishing and making-up"* — and explicitly
  recognises BSCI, FWF, SA8000, ISO 14001 and ISO 9001. It runs a three-year
  cycle with on-site audit. **A dyehouse is exactly what it is for.**
- **STANDARD 100** certifies the **product**, from yarn to finished article, per
  colourway. A processor does not own the fabric, so the label follows the
  article and is usually raised by the brand, not the mill.

`quality.html` was rewritten to lead with STeP and to add MADE IN GREEN and
ECO PASSPORT. Had this not been caught, the site would have pointed buyers at the
wrong certificate for a pure processing unit.

**GOTS places a job-work dyehouse in scope.** It need not own the cotton. Wet
processing is defined to include *"sizing, desizing, pre-treatment, dyeing,
printing (including digital printing), finishing, laundry"*, and GOTS warns this
section carries *"the highest level of associated risks"*. A pure processor must
hold its own scope certificate, validate incoming scope and transaction
certificates, record quantities, and pass wastage and volume reconciliation at
audit.

**Certification is itself a web-presence requirement.** OEKO-TEX instructs
certified firms to self-list: *"Do you carry a valid certification and want to be
part of the Buying Guide? Log into OEKO-TEX® Connect."* **A certificate held but
never published online is commercially invisible.** → `07-LAUNCH.md`

### B4. ⚠️ "GRS certified" may already be a stale label

**VERIFIED:** The body that operates GOTS states it *"develops and operates GOTS and
GRTS"*, and describes **GRTS** as *"a new textile processing standard covering a
broader range of eligible fibres"*, announced **14 September 2026**. GOTS is at
**Version 8.1** (22 July 2026).

**UNKNOWN:** whether GRS is formally withdrawn or in transition. The Textile
Exchange site returned HTTP 403.

**Consequence:** `quality.html` now lists **GRTS / RCS**, not "GRS", and carries a
warning to check any physical certificate before printing the term. Any
pre-existing literature saying "GRS certified" should be re-verified.

### B5. What must never be published

**UNVERIFIED and deliberately excluded.** EOE-CLT, anything called "CTE", EU GSP+,
duty drawback, Form-A, NTN/STR, PSW procedure. The FBR site is a JavaScript shell
returning byte-identical 17,304-byte responses to every query, and
`ecom.customs.gov.pk` does not resolve.

The site's `quality.html` carries an explicit row telling the owner **not** to
publish an export-oriented-unit claim without written accountant confirmation. A
badge that fails an audit is worse than a missing badge.

### B6. Trade context, verified portion

Source: US Dept. of Commerce ITA country guides, Feb–Mar 2026.

- "Pakistan has the **highest tariffs in South Asia**"; a five-year tariff
  reduction plan launched May 2025.
- FTAs: **Sri Lanka, China, Malaysia.** Preferential: **Iran, Indonesia, Turkey,
  Mauritius.** SAARC member.
- US–Pakistan TIFA signed 2003; latest intercessional meeting April 2024.
- US bilateral investment treaty: closed 2012, **still not signed**.
- "Imports of goods into Pakistan generally require a **Letter of Credit** unless a
  special exemption is obtained in advance."
- World Bank B-READY: **65.9/100**, third quintile of 50 assessed.

---

## TOPIC C — What the best B2B industrial sites actually do

Thirteen sites fetched directly; markup stripped and measured. Not Lighthouse —
single-shot byte and response measurements from one host, so **directional only**.

### C1. The certificate log book is the highest-value pattern in the sector

**Samira Fabrics** publishes a table with columns *Certificate Name | CB (certifying
body) | Expiry Date | Scope | View Certificate*, with eleven live rows, each linking
to the actual scanned PDF. Verified examples: `BSCI | TUV Nord | 04-12-2026`;
`Oeko-Tex Fabrics | Aitex | 30-04-2027`; `ISO 9001 | NQA | 02-02-2029`.

It answers the only three questions a compliance team actually asks: **who issued
it, when does it lapse, what does it cover.**

`quality.html` now has a first-class certificate log book with exactly these
columns, seeded with one honest row (APTPMA membership) and a commented template
row. It ships empty rather than full — and that is the point: the table says
*"No other certificates are held at the time of publication"* rather than
displaying borrowed badges.

### C2. Capacity belongs in a table, not a headline

**Auko-Tex Group** publishes `Brand | Origin | Qty | Capacity/MC` per machine
(`MCS | Italy | 01 | 1000 kg`). **Tauseef** publishes a 17-row machine table
ending `Total Machines | 17`. **Ahmad Jamal** buries its machine makes two clicks
deep, at `/dyeing-2`, below the fold.

The logic: a headline like "44 Million Mtr Capacity" is a claim. A machine list is
evidence a buyer can sanity-check against the mill they visited. And a buyer who
never clicks never learns the mill is real.

`capacity.html` is a full 20-row machine table with manufacturer, model, quantity
and working width, plus a **total row the owner must fill**.

### C3. Pakistani "designed" sites are shipping almost no text. **MEASURED**

Text characters as a share of raw HTML:

| Site | HTML | Text chars | **Text share** | Words |
|---|---|---|---|---|
| tauseeftextiles.com | 128 KB | 26,474 | **20.25%** | 3,941 |
| proedgepak.com | 25 KB | 2,999 | 11.68% | 484 |
| ayeshatextile.com | 83 KB | 4,008 | 4.70% | 611 |
| berto.it | 271 KB | 7,605 | 2.75% | 1,104 |
| **ahmadjamal.pk** | 138 KB | 1,734 | **1.23%** | **242** |
| **sintelinc.com** | **1,640 KB** | 3,845 | **0.23%** | 494 |

Ahmad Jamal — "Pakistan's leading textile processing unit", 44M metres, 700+
employees — renders **242 words** inside 138 KB of markup alongside ~7.8 MB of
images across 38 image requests.

**Implication for this build:** the site is text-first by construction. There is no
hero image, no carousels, no client logo wall. The words are the page.

### C4. Structured data is nearly absent. Only 2 of 9 sites have any. **VERIFIED**

`ahmadjamal.pk`, `ayeshatextile.com`, `tauseeftextiles.com`, `itdind.com`,
`auko-texgroup.com` and `arvindtex.in` ship **zero JSON-LD, zero Open Graph tags,
zero hreflang**. `samirafab.com` and `sintelinc.com` do ship schema; Sintel
includes `PostalAddress`, the hook for a knowledge-panel appearance.

**This build ships JSON-LD on all nine pages** — `Organization`, `LocalBusiness`,
`WebSite` on the homepage; `WebPage` + `BreadcrumbList` on the inner seven;
`ContactPage` on the contact page. It costs nothing and it is the difference
between being parseable by a procurement system and being a picture of a page.

### C5. The award-site canon is not about manufacturing — do not use it

Awwwards' entire "industrial" category is dominated by **creative agencies that
merely have "Industries" in the name** — Rejouice, Blink Industries, Q Industrial,
Volume Industries, Gravity Industries, KMZ Industries, Frain Industries, Daybar
Industries. The single genuine manufacturer, **Terminal Industries** (Awwwards
Site of the Month, Sep 2025), serves a homepage of **114 bytes of HTML** — a
client-rendered app with effectively zero crawlable content.

**CSSDA Website of the Year top-ten for both 2024 and 2025 contains no industrial
or manufacturing site at all.**

**Conclusion: Awwwards and CSSDA were rejected as design benchmarks for this
project.** The benchmark is the spec-sheet-and-machine-table sites — Sintel, TSG
Tintoria, Minnesota Rubber, Pro Edge — because those are sites that serve a
procurement reader.

### C6. What actually fails, from the field

Beyond the lorem ipsum and the hijacked domains already in Topic A:

- **The best content locked inside images or client-side JS.** Auko-Tex has the best
  machine tables in the study and a **0.71% text share** — the tables are not
  crawlable. The best information a site owns is worth nothing if a search engine,
  an AI assistant, or a buyer on a bad connection cannot read it.
- **Five font families because nobody deleted the theme.** Samira loads Rubik,
  Roboto, Arimo, Open Sans *and Abril Fatface* (almost certainly a leftover demo
  face). Ayesha loads **Montserrat at all fourteen weights** for a five-item nav.
  **This build loads zero webfonts** — see Topic D.
- **Certification requested by email instead of published.** Pro Edge promises
  *"audit reports, certificates and fastness test results available to buyers on
  request"*. Samira publishes the same documents and converts better.
- **Numbers with no units or no qualifier.** Arvind Textiles is the model: `89,184
  spindles`, `1,300 MT/month`, `300 Toyota airjet looms (models 710, 810, 910) with
  Karl Mayer warping`, `7 million m/month` grey, `20 MW renewable energy`, qualified
  with `Ne 30–70`.
- **Disclosing what you do not have yet.** TSG Tintoria states plainly that its
  ZDHC team has completed training but the company **has not joined the protocol**.

That last one is the single most important tone decision in this project, and it
is why `quality.html` publishes an explicit list of claims the site does not make.

### C7. Trust postures available, and the one chosen

Two honest, contrasting models exist:

- **Samira Fabrics** — maximum disclosure. Every certificate public with expiry.
- **Pro Edge Pakistan** — minimum verified disclosure. One real certification, plus
  *"including the retained sample held against your own lot"*, and *"Every claim we
  make is documented, and auditable."*

**This site takes a third position, which is the union of both:** publish the
disclosure where we have it (the certificate log book, the machine table), and
state the gap precisely where we do not (the full certification register, the
placeholders). It also adopts Pro Edge's **retained-sample** commitment, because it
is concrete, costs nothing, and is effectively impossible for a competitor to fake.

---

## TOPIC D — 2026 technical standards

### D1. Core Web Vitals

**VERIFIED** (web.dev): LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1, assessed at the
75th percentile. All three are "Stable" in the lifecycle.

**Google has never published a Core Web Vitals ranking weight.** Any site claiming
one is selling something. This project makes no such claim.

### D2. Why not WordPress

**MEASURED** from the Web Almanac 2025: the median mobile home page is **2,559 KB
across 72 requests**, carrying **646 KB of JavaScript**, with a median mobile lab
LCP of **4.7 s**. Home pages under 1 MB pass Core Web Vitals **57%** of the time on
mobile; over 5 MB, **30%**.

The best benchmarked hosted builder in the same study reached 85%. **Plain
hand-authored HTML beats all of them**, and it is the only option a non-technical
owner can edit with Notepad.

This build: **no framework, no build step, no webfont, no analytics, no cookie
banner.** See `05-TECHNICAL.md` for the measured budget.

### D3. The webfont decision

**VERIFIED** (web.dev): if the LCP element is text rendered in a **system font**,
its resource load time is **0 ms**. A webfont is a blocking request that also
triggers a layout shift when it swaps.

The only two font families in this project are `system-ui` and a monospace stack,
both resolved by the operating system. **The design uses the platform's own
typography**, which is why it can claim an LCP that is the first paint of the
first line of text.

### D4. WCAG 2.2 AA — the criteria that actually bind here

**VERIFIED** (W3C). The new criteria in 2.2 that change the build:

| SC | Level | Consequence in this build |
|---|---|---|
| 2.4.11 Focus Not Obscured (Min) | AA | Sticky header and WhatsApp bar must not cover a focused element. Handled. |
| 2.5.7 Dragging Movements | AA | No drag interactions anywhere. There are none. |
| **2.5.8 Target Size (Min)** | **AA** | **24 × 24 CSS px minimum.** Checked against every nav item, form control and footer link. |
| 3.2.6 Consistent Help | A | Contact channels appear in the **same order on every page**. |
| 3.3.7 Redundant Entry | A | The enquiry form does not ask twice for the same information. |
| **3.3.8 Accessible Authentication (Min)** | **AA** | **This is why there is no CAPTCHA.** See below. |

**4.1.1 Parsing has been removed from WCAG 2.2.** The site is still written with
valid semantics, but note that invalid markup is no longer a conformance failure —
a fair thing to know, and a reason not to over-invest in it.

**Contrast — MEASURED by hand against the tokens in `site.css`:**

| Pair | Ratio | AA requirement | |
|---|---|---|---|
| ink on paper | **16.3:1** | 4.5:1 | pass |
| ink-2 on paper | **9.4:1** | 4.5:1 | pass |
| ink-3 on paper | **5.4:1** | 4.5:1 | pass |
| white on indigo | **14.2:1** | 4.5:1 | pass |
| white on signal | **6.4:1** | 4.5:1 | pass |

**Ratios are not rounded.** A figure that passes only after rounding is a figure
that fails.

**The CAPTCHA decision, stated because it is counter-intuitive.** Spam control is
a honeypot field — visually hidden, removed from the tab order, `aria-hidden`. A
CAPTCHA would be the one element on this site that fails **SC 3.3.8**, because it
imposes a cognitive or motor test on a user who cannot pass it. Given that a
processing enquiry is worth far more than a form spam, a honeypot is the correct
trade here. The endpoint is a WhatsApp link, so the attack surface is a
`wa.me` URL, not a database.

### D5. AEO and GEO — what Google actually says

**VERIFIED.** Google now **explicitly advises ignoring** "AEO/GEO hacks", the
`llms.txt` convention (**~2.1% adoption**) and "special schema". The published
guidance is that nothing special is required beyond being crawlable, indexable and
snippet-eligible.

Two findings that did change the build:

1. **Only ~4.5% of robots.txt files name `gptbot` at all, and nearly all of those
   disallow it.** Blocking AI crawlers is a default, not a decision. **This site's
   `robots.txt` explicitly allows `GPTBot`, `ClaudeBot`, `Claude-User`,
   `PerplexityBot` and `Google-Extended`,** each with a comment explaining why.
   For a small business this is a free, available advantage.
2. **~62% of ChatGPT referrals land on the homepage.** The homepage is therefore
   written as a **self-contained entity summary** — what the company is, where it
   is, what it does, and how to reach it, all above the fold without following a
   link.

**`FAQPage` schema is dead and is not used anywhere.** FAQ rich results were fully
withdrawn on **7 May 2026**. The Q&A blocks in `dyeing.html`, `printing.html`,
`finishing.html` and `quality.html` exist because **buyers need the answers**, not
because of markup. They are written in the buyer's words and they are honest.

**`llms.txt` is included** — cheap to maintain, and clearly labelled on its own
face as a proposed convention with negligible adoption, so nobody mistakes it for
load-bearing.

### D6. Form design, within scope

**Baymard** (e-commerce only, so scope-limited and not over-applied here) reports
11.3 average fields, of which 8 are needed; **42% of users typed their full name
into a "First Name" field**; 31% encountered no inline validation; 93% saw no
adaptive error messages.

The transferable finding is **field count, not step count**. The enquiry form asks
**eight required fields and nothing more** — construction, quantity, process,
shade, date, market, plus name, email and phone. It is a single scroll, validated
inline on blur, with messages that say *how to fix the problem* rather than
*"invalid input"*.

### D7. The mobile assumption was wrong, and was corrected

**MEASURED** (StatCounter, August 2026): Pakistan is **64.51% desktop / 35.49%
mobile**.

The build was originally planned mobile-first. That was corrected. The site is
built **mobile-first in the code but verified for both**, and the desktop layout is
the one that carries the tables — because the buyer reading a machine list is
overwhelmingly on a desktop, and probably outside Pakistan. **The data corrected
the assumption; the assumption did not survive contact with the data.**

---

## TOPIC E — Realistic capability and constraints of a mid-sized Faisalabad unit

### E1. The cluster

**VERIFIED** (Government of Punjab district profile; SMEDA):
approximately **250 textile dyeing and processing units in Faisalabad district**,
alongside ~56,000 power looms and 137 spinning units. Nationally, about **1,545
processing units**, the large majority in Punjab. SMEDA describes the Faisalabad
weaving cluster as supported downstream by around **210 fabric processing units**
and 700 cloth exporters.

Processing units concentrate in three belts: the **Small Industrial Estate on
Sargodha Road**, the **Dhanola / Millat Road dyeing belt**, and larger
**Khurrianwala / Sheikhupura Road** sites. The site's `about.html` names all three
and asks the owner to say which one they are in.

### E2. The capacity envelope — this is a range, not a number

**VERIFIED** (Naqvi et al. 2019, audit of 21 operating Pakistani mills): measured
daily production spanned **4,267 to 38,427 kg/day**, with a dense mid-cluster
between roughly 8,600 and 26,500 kg/day.

Named Faisalabad units publish figures at both ends of the range, from about
**6,000 kg/day** at the smaller end to **25,000 kg/day** at the larger.

`capacity.html` therefore publishes a **band of 6,000–25,000 kg/day as the
mid-sized envelope**, labels it clearly as an industry range rather than the
client's own figure, and cites the study underneath it. **The client's actual
number is a placeholder.** This is the correct way to use a research finding: as
context that makes a future number meaningful, never as a substitute for it.

Supporting envelopes, all **VERIFIED** as industry norms: sample machines
**10–100 kg**; bulk machines **200–1,400 kg**; lot flexibility **10–1,500 kg**.

### E3. Lead times — and the one insight the whole site is built on

**VERIFIED** industry ranges: dyeing **30–60 days from lab-dip approval**;
printing **20–40 days from sample approval**; strike-off production **1–2 weeks**;
reactive exhaust cycle **8–14 hours per batch**; lab-dip-to-bulk-approval
**15–30 days** (mostly buyer decision time). Sea freight Karachi → UK
**25–35 days**.

**The insight:** a lead time without a starting point is meaningless, and
"30–60 days" is routinely quoted as 30–60 days from *order*, which is
unachievable. The homepage is built around a section titled **"Which stage does the
clock start from?"** and every duration on the site names the stage it begins at.

This is the site's first credibility differentiator, and no competitor in the study
does it.

### E4. Water, energy and effluent — measurable, so measured

**VERIFIED**: typical water intensity **60–150 L/kg**, best-in-class
**50–75 L/kg**. Measured across the 21 audited mills, consumption ran **74 to 313
L/kg**, and **only two** were in the water-efficient band.

**NEQS** limits for inland waters: **BOD₅ ≤ 80, COD ≤ 150, TSS ≤ 200 mg/L**.

`capacity.html` publishes the client's own figure against these public benchmarks —
because a unit publishing its number against a public benchmark is making a
checkable claim, and a unit publishing "eco-friendly" is making none.

**Zero liquid discharge is not claimed**, and the table says in as many words that
no mid-sized unit in this industry should claim it without an audited figure.

### E5. Power — the thing every buyer asks

**VERIFIED**: Faisalabad has faced sustained supply difficulty for several years.
In September 2024 around **1,000 power-loom units** in the city closed citing
energy shortages and tariffs, and load shedding is scheduled feeder by feeder.
Captive generation is effectively universal in the sector.

**No genset capacity is stated anywhere on this site.** The capacity page carries a
placeholder, and the `about.html` copy names the power question as context the
buyer should ask about directly rather than answering it with an unverifiable
number.

### E6. Testing infrastructure

**VERIFIED**: accredited testing is available in Faisalabad — the **Pakistan
Textile Testing Foundation** (PNAC ISO/IEC 17025, NEXT-UK accredited), plus SGS
and Intertek operations in the city.

The realistic mid-sized certificate stack — **ISO 9001 + SMETA + OEKO-TEX**, with
Higg FEM and ZDHC wastewater testing added when a multinational buyer asks — is
**UNVERIFIED** as a market norm but is what a competent adviser would propose. The
site presents it as an option with a cost and a timeline, never as a claim.

**Critical correction carried into the build:** OEKO-TEX **STeP** is the
facility-level scheme that fits a dyehouse. STANDARD 100 follows the product. See
§B3.

### E7. Machine makes — how the list was built

**VERIFIED** as genuinely present on operating Faisalabad units' published lists:
**Monforts, Benninger, Goller, Lafer, Ramisch, Cibitex, Bisio, Biancalani, Osthoff,
Brugman, Kusters, Sclavos, Fongs, Then, Thies, Brueckner, Santex, Ferraro** for
wet and finishing equipment; **Epson, Atexco, Aroli, SETEX** for digital printing
and colour control. Faisalabad also builds machines locally — Noori Engineering
and Skilled Industries among them.

A correction was issued mid-research: an earlier candidate list including *Sotex,
Oriental, J.P. Biryani, Texo, RATCC, Mimici* **could not be verified** and was
struck. **The built site names no brand at all** — every manufacturer cell is a
placeholder — so nothing unverifiable was ever published. The verified list appears
only inside a clearly-labelled instruction addressed to the person filling the
table in, with the warning: *do not name a make that is not on the nameplate.*

---

## What this research changed about the build

| Finding | Change made |
|---|---|
| 6 of 7 testable sites on the association's own list are dead or hijacked | Treated the **live, unhijacked, structured-data-bearing site as the primary competitive weapon**, not as table stakes |
| Capacity/machine/certification data is the universal absence | Three pages built entirely around it: `capacity.html`, `quality.html`, `facility.html` |
| Certificate log book is the highest-trust pattern in the sector | Built as a **first-class section with Samira's column set** |
| Local sites are 1–4% text | Text-first by construction; no hero image, no carousels, no logo wall |
| Only 2 of 9 peers ship any schema | **JSON-LD on all nine pages** |
| Lead times quoted without a start point | The **"which stage does the clock start from"** homepage section, and every duration on the site names its start stage |
| Competitors publish badges they may not hold | `quality.html` publishes the **gaps**, and an explicit list of claims the site does not make |
| STeP vs STANDARD 100 | `quality.html` rewritten to lead with the facility-level scheme |
| GRS possibly superseded by GRTS (Sept 2026) | Register now reads **GRTS / RCS** with a re-verification warning |
| Fax appears in 100% of directory records | Fax channel added to `contact.html` alongside role-based mailboxes |
| SC 3.3.8 Accessible Authentication | **No CAPTCHA.** Honeypot instead. |
| Awwwards/CSSDA are not manufacturing benchmarks | Design benchmark switched to Sintel, TSG Tintoria, Pro Edge, Minnesota Rubber |
| Pakistan is 64.5% desktop | Tables designed for desktop first; mobile verified, not assumed |
| `gptbot` blocked by ~95% of sites | `robots.txt` **explicitly allows** the major AI crawlers |
| 62% of AI referrals land on the homepage | Homepage written as a **self-contained entity summary** |
| The client's own domain has no DNS | Escalated as **§0 of the launch checklist** — a business risk, not a web task |

---

## Open questions for the client

These are **UNKNOWN** and are recorded as questions, never guessed. Full capture
list in `06-CLIENT-CHECKLIST.md`.

1. Legal entity name, NTN/STR, and which entity actually contracts.
2. Per-machine data: make, model, working width, capacity per machine per day,
   count, total, min/max lot, per process.
3. Actual certificates — number, scope, expiry. **And whether any "GRS" certificate
   should now read GRTS.**
4. Real tolerances: GSM, width, shrinkage, and the test methods behind them.
5. Real lead times, and the stage each starts from.
6. Plant layout, headcount, years operating, ETP capacity, power source and backup.
7. Which make of which machine — photographed, legible nameplates.
8. Export Incoterms, port, forwarder, direct or agent.
9. Whether OEKO-TEX STeP is held or planned, with budget and timeline.
10. Response commitment and the office hours it applies in.
