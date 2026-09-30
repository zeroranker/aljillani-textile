# 05 — Technical Reference

Al-Jilanee Textile Industry (Pvt) Ltd — how the website is built, what it
weighs, where it is hosted, how it is secured, and how to check any of it
yourself.

**Who this file is for**

- **(a) The owner, or a member of staff who will maintain the site.** Every
  section answers: what is this, does it cost anything, and what breaks if I
  change it.
- **(b) The person who commissioned it**, who needs to see why the site was not
  built on a normal website builder, and what that decision bought.

**Read this sentence before you read anything else.** Almost every number in
this file is a measurement I took from the files themselves. Those numbers are
labelled **MEASURED** and they are reproducible. Every number about the outside
world — how big the average website is, how much of the web blocks AI
crawlers — is reproduced from `00-RESEARCH.md` and labelled **VERIFIED** with
the section it came from. Where I could not verify something, it says
**UNKNOWN** and it stays UNKNOWN until somebody checks it. Nothing in this
document is a guess wearing a number.

**A word on the three words used most often here.** *Byte* is a unit of file
size. 1 KB is 1,024 bytes, which is the convention this file uses throughout
— 237,881 bytes is written as 232.3 KB, not as 237.9 KB. *Compressed* means
squeezed for sending over the internet: a server squeezes the file, the
visitor's browser un-squeezes it, and the visitor never notices. *Served*
means what the hosting computer actually sends; *on disk* means the file
sitting in the project folder. The two are different, and §3.7 explains the
one set of numbers in this document that is still unproven.

## 1. The stack, and why

### 1.1 What is in the box

**Stack** means the set of technologies a website is built from. Here it is
almost nothing, and that is the decision.

| Part of the stack | What this site uses | Where it is |
|---|---|---|
| Language | HTML — the markup language every web page is written in | The nine `.html` files |
| Styling | CSS — the language that decides how things look | `assets/css/site.css`, one file, 42.0 KB |
| Behaviour | JavaScript — the language that makes a page react | `assets/js/site.js`, one file, 9.5 KB |
| Fonts | None. The visitor's own device supplies the letters | `--font-sans` in `site.css` |
| Images on the page | None at all today. Not one. | — |
| Icons | Two: a favicon and a touch icon | `assets/img/` |
| Database | None | — |
| Server-side code (PHP, Python, Node) | None | — |
| Contact form | No server. It composes a WhatsApp message. | `site.js`, §5 |
| Build step (a tool that turns source into the shipped files) | None | — |
| Analytics, tracking pixels, cookie banners | None | — |

**MEASURED, taken from the files:** the stylesheet contains no `@import`, no
`@font-face` and no `url()` — that is, it loads nothing from anywhere else.
No page contains an `<img>` element. There is no `url()` in the CSS. The site
requests nothing from any domain other than its own.

### 1.2 The comparison that justifies it

Every Web Almanac figure in the second column below is **VERIFIED** in
`00-RESEARCH.md` §D2. The Web Almanac is an annual study that measures
millions of real web pages. The third column is where the research recorded
the best-performing *hosted* builder in the same study; the study publishes
that one figure and no others, so the other cells say so rather than guessing.

| Measure, mobile home page | Web Almanac 2025 median | Best hosted builder in the same study | This site |
|---|---|---|---|
| Total page weight | 2,559 KB | not published | **22.5 KB** (`index.html`, worst page) **MEASURED** |
| Requests per page | 72 | not published | **4** **MEASURED** |
| JavaScript | 646 KB | not published | **9.5 KB** raw, **3.4 KB** compressed **MEASURED** |
| Largest Contentful Paint | 4.7 seconds | not published | **UNKNOWN** — not yet measured on the live site. See §10, Test 8 |
| Share of pages that pass Core Web Vitals | **57%** of pages under 1 MB; **30%** of pages over 5 MB | **85%** | n/a — the heaviest page here is 2.2% of 1 MB (22.5 KB) |

Read the second column twice. The best *hosted* builder studied — a product
sold, supported and updated by a company, for money — passed the Core Web
Vitals checks 85% of the time. Above 5 MB, the share falls to 30%. Median
pages are over 2.5 MB and take more than 72 requests to draw.

**A folder of nine HTML files has no failure mode of this kind.** There is no
theme, no plugin, no database call, no third-party script that can be slow,
because there is no third party. The performance is a property of the file
system, not of a monthly upgrade.

### 1.3 Why WordPress is actively harmful here

This is not a general dislike of WordPress. It is a specific mismatch with
this client's situation. Six reasons, in plain words.

1. **It is a program, and programs need looking after.** A static page is a
   document. WordPress is an application that talks to a database, loads
   themes and plugins, and accepts changes from the internet. Every version
   the company does not install is a version with a known fault still running.
2. **We have already seen what that looks like in this market.** The research
   found a live, ranking Faisalabad processing site running WordPress that
   ships placeholder filler text on every service page, invents a founder who
   does not exist, has four statistic counters all reading zero, a hero image
   whose filename begins `istockphoto-`, and a footer reading *"Copyright ©
   2025 Construction Company. Powered By Bosathemes."* — **VERIFIED**,
   `00-RESEARCH.md` §A6. That is not a careless company's website. It is what
   this tool becomes when nobody can maintain it. This client's premise is
   that nobody will.
3. **It adds a database.** A database must be backed up, patched, protected
   and kept alive. The research's own finding about the sector is the pattern
   of **absent data**, not of broken systems (§A6) — the plant has the data.
   A database does not help a one-editor company publish what it already knows.
4. **Every plugin is somebody else's code.** The research also found a site
   loading five font families "because nobody deleted the theme" — **VERIFIED**,
   §C6. A plugin is the same problem in a different costume. On a nine-page
   site there is nothing to install, so there is nothing to inherit, and
   nothing to pay someone to clean up later.
5. **It cannot be handed over.** Nine HTML files can be opened by any web shop
   in Faisalabad tomorrow. A WordPress install can only be maintained by
   whoever understands this install, this theme, this database and this
   backlog. For a company whose entire web presence was, until now, one row in
   an association's HTML table, **transferability is the point.**
6. **The editing surface is a moving target.** The owner of this company is
   not going to become a WordPress administrator. The site has to be editable
   by whoever in the office is asked, on the day they are asked, with no
   training. A text file meets that test. An admin screen behind a login,
   inside a plugin, does not.

**What "build step" means, since it appears in the table above.** A build step
is the process of turning source files into the files the browser downloads.
Most modern sites cannot be opened and understood in their shipped form; you
must run a tool first. This site has no such step. What is in the folder is
what the browser gets, and what you read is what the visitor sees.

### 1.4 The one thing this design gave up

Stating the trade honestly: this approach means the site cannot have an
online shop, a member login, a live job-status lookup, a comment feed, or a
form that stores an enquiry and emails it automatically. Every one of those
needs a server, a database and someone responsible for them. The site
deliberately does none of them, because none of them is worth the maintenance
cost for this business. If a buyer later needs a portal, that is a new
project, and it should be scoped and priced as one.

## 2. The Core Web Vitals budget

**Core Web Vitals** are Google's three measurements of whether a page feels
fast. They are the industry's shared yardstick for this. The three names are
jargon; here is what each one means in plain English.

| Name | What it actually measures to a visitor | Google's "good" threshold | Measured at |
|---|---|---|---|
| **LCP** — Largest Contentful Paint | How long until the biggest thing on screen has finished appearing. Usually the first line of text or the main heading. | 2.5 seconds or less | the 75th percentile of real visits |
| **INP** — Interaction to Next Paint | How long the page takes to react after you tap or click something. | 200 milliseconds or less | the 75th percentile of real visits |
| **CLS** — Cumulative Layout Shift | How much the page jumps around while it loads. A page where the text shoves down as an ad loads scores badly. | 0.1 or less | the 75th percentile of real visits |

All three thresholds and the 75th-percentile rule are **VERIFIED**,
`00-RESEARCH.md` §D1. All three are recorded as "Stable" — settled, not
expected to change.

### 2.1 What protects each one

| Vital | The design decisions that protect it, and why |
|---|---|
| **LCP** | **No webfont.** This is the single biggest one, and it has a measured basis. **VERIFIED** (web.dev, §D3): when the element that becomes the largest on screen is text set in a **system font** — a font already installed on the visitor's own device — its resource load time is **0 milliseconds**. Nothing is downloaded, so nothing delays it. The first paint of the first line of text *is* the largest element. Second: one stylesheet, 9.4 KB compressed, from a cache after the first visit. Third: no hero photograph, no carousel, no above-the-fold image to wait for. Fourth: the script is marked `defer`, so it is fetched in the background and never blocks drawing. |
| **INP** | 9.5 KB of JavaScript doing three things: open a menu, build a WhatsApp link, validate a form. No framework, no event library, no third-party widget, no chat bubble script. There is nothing long-running on the page for the browser to be busy with. Validation runs on `blur` — when you leave a field — never while you are typing, so it never competes with your keystrokes. |
| **CLS** | No late-loading element. **Every image slot already reserves its space:** `.shot__frame` in `site.css` carries `aspect-ratio: 4 / 3`, so a photograph has a box to occupy before it arrives and cannot shove the text below it. That 4:3 ratio is exactly the shape of the nine photographs in the `08-UPDATE-GUIDE.md` shot list, so nothing is cropped away. There is no banner that appears after a delay, no ad slot, and no font swap, because there is no font to swap. The one sticky element (the header) and the one fixed element (the WhatsApp bar on a phone) are accounted for with reserved space. The site also respects `prefers-reduced-motion` (`site.css` §22): if a visitor has asked their device to reduce motion, nothing on this site moves. |

**The most important sentence in this section:** these are the *conditions*
that make good scores. They are not a measurement of the site's actual
scores, because no measurement has been run on the live site yet. **UNKNOWN
until then.** §10, Test 8 tells you how to find out in about ten minutes.

### 2.2 What Core Web Vitals are worth in search results

**Nothing has been published. That is the honest answer.**

**VERIFIED** (§D1): Google has never published a Core Web Vitals ranking
weight. There is no documented number, no threshold above which a page ranks
better, and no official statement that a passing score improves a position.

If anybody — a web designer, an SEO agency, a course — tells this client that
speed is worth a stated percentage of their ranking, that claim is being
sold, not cited. This project does not make it, and this file will not repeat
it.

What the numbers *are* worth, honestly: they are worth **real visitors**. A
buyer on a phone in a dyehouse office, on a connection that is not good,
opening a link somebody sent them on WhatsApp. That is the reason to be fast,
and it does not need a ranking story to justify it.

## 3. The performance budget

**A budget** means a number you agree not to exceed, written down before you
start, so that "we added a bit more" becomes a decision rather than a drift.
Section 3.5 is the budget. Sections 3.1 to 3.4 are what was actually achieved.

### 3.1 The shared assets, exactly as they stand

**MEASURED** from the files. "On disk" is the size of the file in the project
folder. "Compressed" is what it becomes when a server sends it with the
standard web compression turned on.

| File | What it is | On disk | Compressed |
|---|---|---|---|
| `assets/css/site.css` | The whole design system, every component | **43,428 B (42.4 KB)** | **9.4 KB** |
| `assets/js/site.js` | Menu, WhatsApp links, form validation | **9,754 B (9.5 KB)** | **3.4 KB** |
| `assets/img/og-default.png` | The picture that appears when a link is shared in WhatsApp, LinkedIn or a chat. 1200 × 630 | 12,691 B | — |
| `assets/img/apple-touch-icon.png` | The icon on an iPhone home screen. 180 × 180 | 626 B | — |
| `assets/img/logo-512.png` | The logo, used by search engines, never by a visitor | 3,174 B | — |
| `assets/img/favicon.svg` | The tab icon in a browser | 377 B | — |

Two figures worth pausing on. The stylesheet compresses to about **22% of its
size** — 9.4 KB out of 42.4. The script compresses to about **35%** — 3.4 KB
out of 9.5. Plain text compresses well because the same words and the same
braces keep recurring; a photograph does not, which is why photographs are
treated separately in §3.5.

### 3.2 Page by page

**MEASURED.** "First visit" is what a visitor downloads who has never been to
the site before: the page, the stylesheet and the script, compressed.
"Repeat visit" is the stylesheet and script only, because the browser already
has them.

| Page | HTML on disk | HTML compressed | First visit | Repeat visit |
|---|---|---|---|---|
| `index.html` | 38,927 B | 10.2 KB | **62.5 KB** | 48.2 KB |
| `quality.html` | 34,052 B | 9.1 KB | 57.3 KB | 48.2 KB |
| `capacity.html` | 32,763 B | 7.2 KB | 55.4 KB | 48.2 KB |
| `dyeing.html` | 28,717 B | 7.6 KB | 55.8 KB | 48.2 KB |
| `contact.html` | 27,212 B | 7.2 KB | 55.4 KB | 48.2 KB |
| `facility.html` | 23,362 B | 5.9 KB | 54.2 KB | 48.2 KB |
| `finishing.html` | 22,916 B | 6.2 KB | 54.4 KB | 48.2 KB |
| `printing.html` | 22,447 B | 5.9 KB | 54.1 KB | 48.2 KB |
| `about.html` | 21,772 B | 6.0 KB | 54.2 KB | 48.2 KB |
| **Total** | **262,170 B (256.0 KB)** | — | — | — |

Reading the table:

- **Worst first visit on the whole site: 22.5 KB.** That is `index.html`, the
  page a buyer is most likely to open first.
- **Repeat visit: 12.8 KB.** One stylesheet and one script, and the page
  itself is almost free.
- **The mean page is 26,431 B of raw HTML** (237,881 ÷ 9).
- **A visitor who reads all nine pages in one sitting downloads about 76.4 KB
  in total** — 63.6 KB of compressed pages plus the 12.8 KB of shared files.
  State the comparison carefully, because it is not like-for-like: that is
  the **entire site** against the **homepage alone** of the competitors in the
  next table.

**A fact that explains all of it: there is not one photograph on the site
today.** No page contains an `<img>` element. A website's weight is usually
almost entirely photographs, and this one has none yet. The nine planned
plant photographs are the single largest future change to these numbers, and
§3.5 budgets for them.

### 3.3 Against the audited competitors

**MEASURED** by the research in `00-RESEARCH.md` §C3 and §A6, and **VERIFIED**
in the sense that the research fetched each site directly and measured the
bytes.

**State the caveat first, because the research states it:** these are
single-shot byte and response measurements taken from one host, not Lighthouse
audits. They are **directional** — good enough to show an order of magnitude,
not good enough to rank two close competitors.

| Site | HTML on disk | Text as a share of that HTML | Other weight | First-load response time |
|---|---|---|---|---|
| **This site, heaviest page** | 35.6 KB | **19.63%** (`index.html`) | 0 images, 0 KB | not measured |
| **This site, lightest page** | 19.8 KB | 27.02% (`about.html`) | 0 images, 0 KB | not measured |
| `proedgepak.com` | 25 KB | 11.68% | — | — |
| `tauseeftextiles.com` | 128 KB | 20.25% | — | — |
| `ahmadjamal.pk` | 138 KB | **1.23%** | **~7.8 MB of images** across 38 image requests | — |
| `itdind.com` | 279 KB | — | — | **6,771 ms** |
| `sintelinc.com` | **1,640 KB** | **0.23%** | — | — |

**The single most useful column is the text share**, so it gets its own
explanation. *Text as a share of HTML* means: of all the characters in the raw
page source, what proportion are words a person reads. A page that is 1% text
is 99% markup, script and framework. `ahmadjamal.pk` advertises 44 million
metres and 700 employees and renders **242 words** inside 138 KB of markup
next to about 7.8 MB of images. `sintelinc.com` renders 494 words inside
**1,640 KB**.

This site's pages run from **16.14% to 31.58%** text, mean about **24.6%**.
The audited competitors ran from 0.23% to 20.25%.

**State this carefully, because the easy version of the claim is false.** The
accurate statement is:

- The **mean** page on this site, about **24.6%**, is text-richer than the
  best audited competitor, `tauseeftextiles.com` at **20.25%**.
- **Eight of the nine pages** exceed 20.25% individually.
- **One page does not:** `contact.html`, at 16.14%. It is low because a
  contact page is mostly form controls and repeated contact details rather
  than prose, not because it is thin on information.

So: this site's typical page is text-richer than the best audited
competitor's best page, and this site's leanest page is roughly comparable to
it. Neither statement supports the looser version — "every page here beats
every competitor" — and that version is not written anywhere in this
project.

### 3.4 The honest word about a 42 KB stylesheet

**The stylesheet is bigger than it should be, and here is the arithmetic.**

The working target for a stylesheet on a site this size was **30 KB**. The
actual file is **42.0 KB**. That is 12.0 KB over, or 40% over. Saying
otherwise would be a flattering lie, and this document does not contain one.

Three things are true at the same time, and the conclusion is not as simple as
"therefore it is fine":

1. **It is one file, not nine.** A visitor downloads it once. The second page
   they open costs them 0 KB of stylesheet.
2. **It compresses to 9.4 KB** — 22% of the file, which is a fifth of the
   space on the wire.
3. **It is shared by all nine pages, so its cost per page falls as the site
   grows.** 9.4 KB ÷ 9 pages is about **1 KB per page**. If the site grew to
   twenty pages, each additional page would add about **0.5 KB**, not 9.4 KB.

**Why the extra 12 KB is there.** `03-DESIGN.md` documents 22 numbered CSS
sections plus a "20b", across 1,244 lines, holding **55 custom properties**
(the colour, spacing, type and radius tokens) and covering a full dark-section
inversion, a print stylesheet, a `forced-colors` (Windows High Contrast)
stylesheet, `prefers-reduced-motion` handling, nineteen components and five
breakpoints. Each of those is a readability or safety feature for a buyer or
an editor, and each of them costs lines. The 30 KB target was set before those
were specified.

**The honest conclusion:** 42 KB is a fair price for what is in it, and 9.2
KB over the wire is not a problem for any visitor on any connection. But the
42 KB figure is over the target, and it is recorded here as over the target so
that the next editor knows they are continuing a decision, not a precedent.
If the site ever gains a second stylesheet, this file must be re-read first.
Two stylesheets would break the amortisation argument entirely.

### 3.5 The budget going forward

**This is the real budget, not a flattering one.** The right-hand column is the
current measured value. The middle column is the line. **If a change pushes a
measured value past the line, it is a decision to make deliberately — not
something to discover six months later.**

| # | What is being limited | **The line** | Now (**MEASURED**) | If it is exceeded |
|---|---|---|---|---|
| 1 | First visit, any page, including CSS and JS | **25 KB** | 22.5 KB worst | Stop. Find what was added. |
| 2 | HTML on disk, any one page | **40 KB** | 35.6 KB heaviest | Split the page. |
| 3 | All nine pages, HTML on disk, total | **260 KB** | 240.7 KB | Split before the tenth page. |
| 4 | `site.css` on disk | **50 KB** | 42.0 KB | A second stylesheet. Then re-read §3.4. |
| 5 | `site.css` compressed | **12 KB** | 9.4 KB | Same. |
| 6 | `site.js` on disk | **12 KB** | 9.5 KB | Something has been added that should not have been. |
| 7 | `site.js` compressed | **4 KB** | 3.4 KB | Same. |
| 8 | Requests per page | **5** | 4 | Every added file is one more thing to fail. |
| 9 | Photographs on any one page | **9, and no more** | 0 today | The shot list in `08-UPDATE-GUIDE.md` §5 fixes nine. |
| 10 | Each photograph, after compression | **180 KB** | none yet — **target, not a measurement** | Reshoot, or re-compress at a lower quality step. See the note below. |
| 11 | Photographs on one page, total after compression | **1.2 MB** | 0 today — **target** | Drop to fewer frames, or compress harder. |
| 12 | Webfonts | **0** | 0 | There is no version of this site that needs one. See §2.1. |
| 13 | Third-party requests to another domain | **0** | 0 | A font, an analytics script, a chat widget, a map embed. All are a privacy decision. See §6. |
| 14 | Analytics scripts | **0** | 0 | See §6 before you add one. |

**Lines 10 and 11 are targets, not measurements.** No photograph exists yet, so
there is nothing to measure. They are written down now so that the person who
adds the first photograph has a number to hit rather than an opinion.

**Line 10 is deliberately tighter than the other document's rule, and here is
the arithmetic for the difference.** `08-UPDATE-GUIDE.md` §5 gives the editor
a working target of *under 300 KB per photograph*, and correctly labels it as a
rule of thumb rather than a measurement. That figure is repeated in this
document unchanged. **180 KB is a tightening of it, and the reason is line 11:**

- Nine photographs at 300 KB — the update guide's target — is **2.7 MB**. That
  would make `facility.html` heavier than every audited competitor's *entire
  homepage*, including `sintelinc.com` at 1,640 KB. The one page this project
  most wants photographs on would be the heaviest page in the market.
- Nine photographs at 180 KB is **1.6 MB**. Still over line 11.

**The two lines are meant to squeeze each other, and that is deliberate.** Line
10 is the per-file ceiling. Line 11 is the page ceiling. Together they mean the
nine photographs have to average about **130 KB**, not 180 KB. If a set comes
out over 1.2 MB, the answer is fewer frames or a lower quality step — not a
larger line in this table.

**No photograph on this site may carry a number that appears nowhere else.**
A machine count, a capacity figure or a lot size printed only inside a picture
is invisible to a search engine, to an AI assistant, and to a visitor running
in reduced-data mode. If the number matters, it is in the text.

### 3.6 The text-share finding, restated

| Page | Text characters as a share of raw HTML |
|---|---|
| `about.html` | 27.02% |
| `capacity.html` | 23.49% |
| `contact.html` | 16.14% |
| `dyeing.html` | 27.72% |
| `facility.html` | 24.62% |
| `finishing.html` | 27.38% |
| `index.html` | 19.63% |
| `printing.html` | 24.01% |
| `quality.html` | 31.58% |
| **Range** | **16.14% – 31.58%** |
| **Mean** | **≈ 24.6%** |
| Audited peers' range (§C3) | 0.23% – 20.25% |

Every page on this site is in the top half of that peer range, and the mean
page is richer in readable text than the best audited competitor. The reason
is structural, not editorial discipline: there is no hero image, no carousel
and no client logo wall, so the words are simply what is left.

### 3.7 What is measured but not yet proven

One honest caveat, and it matters more than any figure in the tables above.

**The compressed numbers in this document are deflated on disk, as a proxy
for what a server sends.** They are the right proxy — deflate and gzip are
closely related, and nearly every host compresses text automatically. But
**whether the chosen host actually serves these files compressed, and for how
long it tells the browser to keep them, is UNKNOWN.** No server has been
chosen yet, so no server has been measured.

If the host does not compress, every first visit becomes roughly **85 KB**
(36,509 + 43,428 + 9,754 bytes) instead of 22.5 KB. Still small. Still better
than every audited competitor in §3.3. But **nearly four times heavier than it
needs to be**, and entirely fixable with one setting on the host's side.
**§10, Test 2 tells you how to check it in one minute.**

Three other things are UNKNOWN and stay UNKNOWN until measured:

| Unknown | What it needs | Where it is checked |
|---|---|---|
| Does the host send the files compressed? | A live host | §10, Test 2 |
| How long does the browser keep the stylesheet and script? | A live host | §10, Test 4 |
| What are the real LCP, INP and CLS scores? | A live host, real visitors | §10, Test 8 |

## 4. Hosting

### 4.1 What a static site actually needs

**Hosting** means the computer that is permanently connected to the internet
and holds the files. Read this list, because most of it is shorter than
people expect.

| Requirement | This site | Why |
|---|---|---|
| Somewhere to store files | **9 HTML files and 10 supporting files** | That is the entire site |
| A web server that sends them | Any web server, anywhere | They are just files |
| A web address (a domain name) | **Not yet registered — see §4.4** | The most urgent item in the project |
| A place to point that name | DNS — the directory that turns a name into a computer's address | Two or four records |
| A secure connection (HTTPS, the padlock) | One certificate, usually free and automatic | Not optional in 2026 |
| A database | **No** | Nothing stores data |
| Server-side code | **No** | There is no logic on the server |
| Email sending | **No** | The form opens WhatsApp; it does not send mail |
| A control panel, database, plugin store or licence belonging to the site | **No** | The list above is the whole list |

**That is the honest selling point of a static site, and it is a real one: a
hosting decision is made once and then never has to be revisited.** There is
no renewal negotiation for software, no plugin to update, no licence to
expire, no version to fall behind on.

### 4.2 The options, ranked by how hard they are to maintain

`08-UPDATE-GUIDE.md` §7 already describes three ways to publish. This section
adds the maintenance ranking, which is the question that actually decides it.

Ranked **easiest to maintain first**, for an owner with no technical help:

| Rank | Option | Cost | How hard to publish an update | How hard to keep safe | The honest catch |
|---|---|---|---|---|---|
| **1** | **The web host the company already pays for** — almost always because a mailbox on the company's own name already exists | Whatever is already being paid; often no extra charge at all | **Lowest.** A File Manager in the browser, or FTP | Low, *if* the account has a strong password and two-factor login | You must upload the **contents** of the folder, not the folder. Get this wrong and every address 404s. |
| **2** | **A static host with a free tier** — drag a folder into a web page, it is published in about a minute | Free at this size (§4.3) | **Very low.** Drag and drop | Low | The address looks like `some-words.example-host.com`. Fine for showing a buyer the finished site. Not what you want as your permanent business address. Moving behind your own domain later is easy but needs someone technical. |
| **3** | **A code-hosting service with its free static-site feature** — keeps a full history of every change, so any mistake can be undone | Free at this size (§4.3) | **Highest** of the three. Needs an account and basic confidence | Low, if two-factor login is on | **Do not attempt it alone.** Choose this only if a technical person will maintain the site. The undo history is genuinely valuable — it is the reason to pick it. |
| **4** | **A local shared host in Pakistan** | Varies; see §4.3 | Low — same File Manager pattern | Low | The main advantage is that a support number answers in Urdu or Punjabi and someone can visit the office. That is a real advantage for this business. No provider is named in this document because none was researched; ask whoever already handles the company's email. |

**The recommendation is rank 1 if the company already pays for hosting or a
mailbox, and rank 2 for anything you need to show a buyer before that is
sorted.** Whichever is chosen, the update routine is identical: change the
file, check it, upload the same folder again. There is no database to migrate
and nothing for the host to rebuild.

### 4.3 What it costs

**I have not verified a single price, and neither has the research brief.
Domain and hosting prices change, they differ by country and by term length,
and some registrars charge more for privacy. So this section prints no number
it cannot stand behind. It prints the four things to find out and a table to
write the answers in. Fill it in at the moment of purchase and keep it here.**

**Read the renewal price, never the first-year price.** A first-year price is
frequently promotional and the renewal price is higher. Every registrar shows
both. The gap between them is the whole cost of the decision.

| # | Line item | What to ask for | Figure, written in | Year |
|---|---|---|---|---|
| 1 | Domain, first year | The `.com` for `aljillanitex.com`, plus **privacy** if offered | | |
| 2 | **Domain, renewal each year** | Not the promotional price — the standard one | | |
| 3 | Domain renewal for 10 years | Ask whether "lifetime" or multi-year registration is offered, and at what multiple of one year | | |
| 4 | Hosting, first year | The plan for a site of 19 files | | |
| 5 | **Hosting, renewal each year** | The standard rate, not the introductory one | | |
| 6 | Business mailbox, first year and renewal | An address on the company's own name, not a Gmail one | | |
| 7 | Certificate for HTTPS | Confirm it is included and renews by itself | | |
| 8 | **Total, year 1** | Sum of 1 + 4 + 6 | | |
| 9 | **Total, year 10** | (2 × 9) + (5 × 9) + mailbox renewals, **or** line 3 if a lifetime term was bought | | |

**On the free tiers in ranks 2 and 3.** `08-UPDATE-GUIDE.md` §7 records them
as free for a site this size. That is a reasonable statement about a 19-file
site. **The specific limits of those free tiers are UNKNOWN to this project** —
bandwidth included per month, number of sites allowed, the overage price,
whether a payment card is required to open an account, and what happens to
the site if a limit is reached. None of that was researched, and it changes.
Open the provider's own pricing page and write the answers in:

| Question | Free tier | Paid tier |
|---|---|---|
| Transfer (bandwidth) included per month | | |
| Number of sites allowed | | |
| Cost if the limit is passed | | |
| Is a payment card needed to open the account? | | — |
| What happens to the site if a limit is reached — is it suspended, throttled, or taken down? | | |

**What a 19-file site actually needs from a free tier is very little.** The
whole site is 237,881 bytes of HTML — 232.3 KB — plus ten supporting files
totalling 68,830 bytes (67.2 KB), of which a visitor downloads only the
stylesheet and the script. **A first-visit transfer of 22.5 KB is about
22,000 bytes, or roughly one fifty-thousandth of a single gigabyte.** Even a
year of heavy use would be a rounding error against any published free
allowance. **The limit worth checking is not bandwidth. It is whether the
account can be closed or suspended without warning, and whether somebody
technical has to keep it open.**

**On "lifetime" domain registration.** Some registrars sell it. The test is
arithmetic, not the word: take the multiple of the yearly price that
"lifetime" costs, and compare it with what ten years of ordinary renewal would
cost. If the multiple is higher, lifetime is not cheaper — it is only simpler,
and it puts the whole ten years with one company. It is still worth buying if
it is genuinely cheaper, because §4.4 explains why this domain matters more
than the average one.

### 4.4 The domain — the most urgent item in this project

**This is not a web task. Read it as a business risk.**

`aljillanitex.com` — the domain printed against this company in the All
Pakistan Textile Processing Mills Association's own directory — **has no DNS
record at all. RDAP returns 404, which means the domain is not registered at
the registry, not merely misconfigured. Anyone can register it.**
**VERIFIED**, `00-RESEARCH.md` §A3.

**The hijack evidence, and why it makes two settings mandatory rather than
decorative.** Of the eleven domains on the association's Faisalabad list that
the research could resolve, **five now belong to somebody else**
(**VERIFIED**, §A2, §A3):

| Domain, as listed for a Faisalabad processor | What it serves now |
|---|---|
| `sitara.com` (Sitara Textile Industries) | A travel agency in Central Asia |
| `mj-textile.com` | A gambling site, plus a Chinese transformer manufacturer |
| `rashidtex.com` | B2C women's clothing retail |
| `rashidfabrics.com` | B2C shalwar kameez retail |
| `ahsandigital.com` | A solo advertising freelancer's portfolio |

For a Pakistani SME the domain is the business's **only formal public identity**
outside the association directory. A hijacked domain does not merely fail to
produce a sale. It actively hands an international buyer somebody else's
business, under this company's name. In this market that is a reputational
risk, not a marketing one — and the research states that explicitly.

**What we do not know, and are not going to pretend to.** How each of those
five was lost. A lapsed renewal is one mechanism. A registrar account being
compromised is another. A former employee keeping access is a third. The
research does not claim to know, and neither will this file. **That
uncertainty is the argument for the two controls below: they cover different
failure routes, and neither covers all of them.**

| Control | What it is, in plain words | What it stops | Cost |
|---|---|---|---|
| **Registrar lock** | A setting at the registrar that refuses to move the domain to a different registrar without a second, explicit authorisation from you | The domain being transferred out by someone who got into the account. It is a second lock on the same door. | Usually free. Confirm with the registrar. |
| **Two-factor login on the registrar account** | A second code, from your phone, on top of the password | Most account takeovers. A password alone is not enough. | Free on every registrar worth using. |
| **Auto-renew, on a card that does not expire** | The renewal is paid without anyone remembering to do it | A lapsed renewal is the most obvious route by which a domain dies, and the easiest of all to prevent | The renewal price, yearly |
| **DNSSEC** | A system that lets the domain publish a digital signature for its own name records, so a resolver can tell a forged record from a genuine one | Records being forged in transit — a false address pointing visitors somewhere hostile | Usually free to enable. DNSSEC must be switched on at the registrar **and** published in the parent zone; a registrar that does not support it should be avoided. |
| **Your own record of the account** | Registrar name, account number, login, renewal date, recovery email and recovery phone, written down and kept **off** the domain's own hosting | Losing the account and not being able to get back in | Free |

**Two practical warnings.**

1. **The recovery contact must be an address and a phone the company controls,
   not one belonging to whoever set the site up.** If the person who registered
   it leaves, and the recovery address is their personal one, the company can
   be locked out of its own domain.
2. **A registrar's own staff can, in principle, act on a domain account.** A
   registrar with published abuse contacts and a real support address is
   preferable to the cheapest one available, because there will come a day
   when someone needs to explain the problem to a human. **UNKNOWN:** no
   registrar has been chosen or assessed in this project. The checklist at the
   top of this section is what to assess them against, and it is the same
   list for every registrar.

## 5. Security and privacy

### 5.1 What this site cannot be attacked through

A static site is a set of files served to visitors. It accepts no input,
stores nothing, and runs no code of its own. That removes whole categories of
risk that are ordinary on other websites. This table is worth keeping, because
most of the security advice a small business receives assumes one of these
exists.

| Common website risk | Does it apply here? | Why |
|---|---|---|
| A database being stolen | **No** | There is no database |
| SQL injection — text typed into a form being run as a database instruction | **No** | No database, no server-side code. The form's text goes into a WhatsApp message in the visitor's own browser and is never transmitted to the company. |
| A login page being guessed or brute-forced | **No** | There is no login |
| A file upload being executed | **No** | There is no upload. The form takes typed text only. |
| A visitor's enquiry being intercepted in transit | **No** | Nothing is transmitted. Open the network panel while submitting the form and nothing leaves. |
| A software framework with a known vulnerability | **No** | No framework, no package, no dependency to update |
| A plugin with a known vulnerability | **No** | No plugins |
| A content management system admin account being compromised | **No** | No admin account exists |
| A spammer filling a database with rubbish | **No** | Nothing to fill |
| A hidden security update being missed | **No** | Nothing to update |
| Cross-site scripting — one visitor's input being executed as code on another visitor's page | **No** | Nothing on this site is ever shown to a second visitor. There is no stored content and no per-visitor page. The only strings the script reads are attributes the site itself wrote. |
| Denial of service by a large request | **Largely no** | There is no application to exhaust. Any host has a flood limit; that is a host problem, not a site problem |

**All of the above is structural, not a setting.** It cannot be switched off
by accident, and it cannot be undone by a misconfiguration. This is the
strongest security argument for a static site, and it is a stronger one than
"we installed a plugin."

### 5.2 What still needs doing

The table above is not a claim that the site cannot be harmed. Five things
still can.

| Real risk | What it actually is | What to do |
|---|---|---|
| **The hosting account** | Whoever holds the login can replace every page. That is a bigger prize than a database. | A strong, unique password. Two-factor login. Do not share the login; keep it in one place the owner controls. |
| **The domain account** | See §4.4. | Registrar lock, two-factor, auto-renew, and your own record of the details. |
| **Staff error** | Uploading the folder wrongly, or deleting a page | Keep a copy of the folder off the hosting computer. `08-UPDATE-GUIDE.md` §8 makes backup a precondition of saving. |
| **Serving the site without HTTPS** | Every visitor's connection is unencrypted and can be tampered with | Confirm the padlock on all nine pages. Most hosts now issue the certificate free and renew it automatically. Confirm it is on, rather than assuming. |
| **Mixed content** | A page served over HTTPS that loads something over plain HTTP is blocked by the browser | Currently impossible: the site loads nothing from any other domain (§1.1). Adding any external file reintroduces the risk. |

**One recommendation that is not technical.** Keep the site simple enough that
a new person can take it over in an afternoon: nine HTML files, one
stylesheet, one script, and this document. That is a security control as well
as a maintenance one. **A third-party component nobody is watching is a
liability nobody is measuring** — and this site has none, which is worth more
than any hardening tool.

### 5.3 The honeypot, and why there is no CAPTCHA

**CAPTCHA** is the "I am not a robot" checkbox or puzzle. It is used because
automated programs fill in web forms to send spam. On this site it would be
both ineffective and a real accessibility failure.

**The honeypot, and how it works.** A form contains a field that is invisible
to a person and obvious to a program. If it is left empty, a human sent the
enquiry. If it has been filled in, a program did, and the submission can be
discarded. The field on `contact.html` is inside a container with
`aria-hidden="true"` (so a screen reader skips it), `tabindex="-1"` (so the
keyboard skips it) and `autocomplete="off"`. It is not required, so a person
cannot be blocked by it.

**Why there is no CAPTCHA: WCAG 2.2 Success Criterion 3.3.8, Accessible
Authentication (Minimum), Level AA.** **VERIFIED**, `00-RESEARCH.md` §D4,
quoted there from the W3C standard. In plain terms, the criterion says: do not
make a person prove who they are with something they cannot do. A CAPTCHA
imposes a cognitive test — reading distorted letters — or a motor test —
dragging an object — on a user who may be unable to pass it. **A CAPTCHA
would be the one element on this site that fails the level of accessibility it
was built to.** It would also fail many buyers quietly, which is worse.

**The trade, stated plainly.** A honeypot catches naive spam and will not
stop a determined one. That is accepted, and the reasoning is arithmetic: a
fabric processing enquiry is worth a great deal more than the spam it might
attract, and the endpoint is a `wa.me` link. **The attack surface is a URL, not
a database.** There is nothing to fill, nothing to store and nothing to
breach, so even a spam submission that gets through costs nothing and goes
nowhere.

**The one thing the owner must understand about spam control here.** Because
the form hands the message to WhatsApp, spam is visible to the person
receiving it and is deleted by them. **It is never silently accepted into a
system.** There is no inbox to fill and no reputation to damage.

## 6. Analytics

**Analytics** means software that records who visited and what they did.

### 6.1 Why there is none

**There is no analytics, no tracking pixel, no tag manager, no heat map, no
session recording and no cookie of any kind on this site.** The network panel
on any page shows requests going to this domain and nowhere else. This is
deliberate, and the reasons are three.

1. **The audience is named and few.** The research found that across all 114
   Faisalabad records in the association's own directory there is not one
   WhatsApp contact, and that a DuckDuckGo search for the company returns
   exactly one result — the directory page itself (**VERIFIED**, §A4, §A5).
   The buyers of a Faisalabad processing unit are a small, identifiable group
   reached through people they already know. §A7 records that
   face-to-face contact is the business norm in this market. Analytics would
   tell this company that forty people looked at the capacity page. It would
   not tell it which forty.
2. **The measurements this site was built around came from asking.** The
   machine list, the lot ranges, the lead times and the certificate log book
   are all things a buyer can check in an audit. No analytics tool reports
   whether a machine row is true. The research found that the sector's
   universal absence is **absent data**, not absent traffic (§A6) — and no
   dashboard fixes absent data.
3. **The cost of privacy consent.** Section 6.3.

### 6.2 What to do instead

| Instead of analytics | How |
|---|---|
| Count enquiries | Count them. They arrive on WhatsApp, by email and by telephone. Put a note in a diary. **The number is exact, and it is the only number that matters.** |
| Learn which page a buyer read | Ask. One line in the WhatsApp reply — "which page were you reading when you got in touch?" — is worth more than a heat map. |
| Know whether a page is useful | Ask the same question again in six months. |
| Watch for a broken page | §10 of this document, and `PRE-LAUNCH-GATE.md`. Both are free and happen on a schedule. |
| Check what a search engine shows | Google's Search Console. **This is different from analytics and worth doing:** it reports what the search engine knows about your own site — which pages it has indexed, what it thinks each page is about, and what questions people typed to find you. It collects nothing about your *visitors*. It is a search-engine reporting tool, not a tracking tool. It does require setting up a property on the live domain. |
| Count where enquiries came from | Ask each enquirer how they found you, and write the answers down. Three months of that is worth more than a year of an analytics tool, and it is accurate. |

**If Search Console is set up, one honest warning.** It will report that no
pages are indexed for a while, and the reporting is delayed. That is normal and
is not an error. `PRE-LAUNCH-GATE.md` §8 is the correct pace for judging
search, and it says not to judge in the first weeks.

### 6.3 The privacy consequence of adding any

**Adding analytics is not a technical change. It is a change to what this
company says about itself.**

The moment a third-party script is added, the site starts:

- setting cookies and creating identifiers on a visitor's device;
- sending information about the visitor to another company's servers, in
  another country, before the visitor has agreed to anything;
- collecting data about people who are not customers and have not chosen to
  have data collected about them.

Three practical consequences follow.

1. **A consent mechanism becomes necessary.** In practice this means a cookie
   banner, which is exactly the element this site omits. The research's
   measurements of this site's page weight do not include one, and adding it
   would change every number in §3.2.
2. **A privacy statement becomes necessary.** `01-SITEMAP.md` records that no
   substantive privacy page was built, on the grounds that the site collects
   nothing. **That reasoning becomes false the moment analytics is added**, and
   the decision is documented in the sitemap so it is not quietly invalidated.
3. **Every one of the budget lines in §3.5 moves.** Line 13 currently reads
   **0 third-party requests to another domain**. A single analytics tag makes
   it 1, adds a network dependency to a site that deliberately has none, and
   means the first paint is no longer fully under this site's control.

**If the decision is made to add it,** the order of work is: change the
privacy statement first, add the consent mechanism second, measure the new page
weight third and record it in §3.2 and §3.5, and keep the budget honest
afterwards. **No specific product is recommended in this document, and none
should be chosen before the decision above is made deliberately** — the choice
of tool is the easy part, and it is the wrong thing to think about first.

## 7. The SEO and AEO layer, page by page

**SEO** means being found by a search engine. **AEO** — "answer engine
optimisation" — is the industry term for being found and quoted by an AI
assistant. The research's position on AEO is worth stating before the details,
because it decides most of them.

**VERIFIED** (`00-RESEARCH.md` §D5): Google now **explicitly advises against**
AEO and GEO "hacks", against the `llms.txt` convention, and against "special
schema". The published guidance is that nothing special is required beyond
being crawlable, indexable and snippet-eligible.

So the strategy here is not a trick layer. It is ordinary SEO done properly,
plus two deliberate decisions that follow from the research. **Everything on
this site is readable text, because that is what both search engines and AI
assistants can read.** No content is locked in an image or generated by
JavaScript, which is the single most common way good information is made
invisible — research §C6 found a competitor with the best machine tables in
the study and a 0.71% text share, meaning **the tables were not crawlable
at all**.

### 7.1 Titles, descriptions, canonicals and link previews

Every page carries all four. **What each one is for, in plain English:**

- **Title** — the clickable blue line in a search result. The most valuable
  single piece of text on the page.
- **Meta description** — the grey summary under it. Written to be read by a
  person deciding whether to click, not to be ranked.
- **Canonical** — a statement of "this page's real address is here". It stops
  a search engine treating several copies of one page as several pages.
- **Open Graph (`og:`)** — what a link preview looks like when somebody shares
  the page in WhatsApp, LinkedIn, Facebook or a chat. On this site this
  matters more than usual, because **WhatsApp is the primary channel for this
  business** (§A5).

**MEASURED — what is actually in the files:**

| Page | Title | Title chars | Meta description chars | Canonical | `og:image` |
|---|---|---|---|---|---|
| `index.html` | Fabric Dyeing, Printing & Finishing in Faisalabad \| Al-Jilanee Textile | 74 | **227** | `https://www.aljillanitex.com/` | `og-default.png` + explicit 1200 × 630 |
| `dyeing.html` | Reactive & Disperse Fabric Dyeing in Faisalabad \| Al-Jilanee Textile | 72 | 194 | `.../dyeing.html` | `og-default.png` |
| `finishing.html` | Fabric Finishing in Faisalabad — Setting, Sanforising & Finishes \| Al-Jilanee Textile | 91 | **208** | `.../finishing.html` | `og-default.png` |
| `printing.html` | Rotary Screen & Digital Fabric Printing in Pakistan \| Al-Jilanee Textile | 76 | 187 | `.../printing.html` | `og-default.png` |
| `capacity.html` | Capacity, Machines & Lead Times \| Al-Jilanee Textile Processing Faisalabad | 78 | 182 | `.../capacity.html` | `og-default.png` |
| `facility.html` | Factory & Facility — Dye House, Printing and Finishing \| Al-Jilanee Textile | 81 | 181 | `.../facility.html` | `og-default.png` |
| `about.html` | About the Unit — Faisalabad Textile Processing \| Al-Jilanee Textile Industry | 78 | 179 | `.../about.html` | `og-default.png` |
| `quality.html` | Quality Control & Certifications — What We Hold \| Al-Jilanee Textile | 74 | 174 | `.../quality.html` | `og-default.png` |
| `contact.html` | Contact & Enquiries — Get a Processing Quote \| Al-Jilanee Textile | 71 | 168 | `.../contact.html` | `og-default.png` |

**Titles.** All nine sit between **71 and 91 characters**, and every one carries
the process words and the place. Whether a search result will show all of a
title, or cut its tail, depends on the device and the screen, and **the exact
cut-off is UNKNOWN to this project — it was not researched.** The cheap and
correct way to settle it is to look: open a search on a real phone, and if any
of the nine titles visibly loses its ending, shorten that one and nothing
else. Do not shorten them on principle.

**Descriptions — one honest problem.** They run from **168 to 227**
characters. A search engine decides how much of a description to show and
cuts the rest with dots; the exact cut-off varies by device and is **UNKNOWN**
to this project, because it was not researched. The practical reading is that
**the two longest — `index.html` at 227 and `finishing.html` at 208 — are
long enough that the end of each will very likely be cut**, and the end is
where the useful part sits: `index.html` ends with *"the certificates we do
not hold are published openly"*, which is the most distinctive sentence on
the site. If descriptions are ever trimmed, **move the distinctive clause
into the first 160 characters rather than cutting the sentence.** The other
seven are close enough to the usual display length to be left alone.

**Canonicals and link previews.** Every page declares a single canonical
address and every page points at the same single link picture.

**Two notes an editor must not miss.**

1. **All nine canonical addresses use `https://www.aljillanitex.com`.** That
   domain does not exist yet (§4.4). Until it is registered, the canonical
   points nowhere. **The site must not be published under any other name and
   left there.**
2. **`facility.html`'s description says "Photographs and video" and there is no
   photograph and no video on the page.** The description promises something
   the page does not yet deliver. When the photographs are added this becomes
   correct and needs no change. **If the photographs are never added, that
   sentence must be rewritten before launch.** A description that promises
   something absent is the same class of error as a placeholder figure, and
   this site does not allow those.

### 7.2 The structured data — JSON-LD

**Structured data** is information about the page, written in a structured
format so a computer can read the page as data rather than as text.
**JSON-LD** is the format Google's guidance points to, and it is a block of
text inside the page that describes what the page is about.

**Research finding behind it:** of the nine sites audited, only two ship any
schema at all. `ahmadjamal.pk`, `ayeshatextile.com`, `tauseeftextiles.com`,
`itdind.com`, `auko-texgroup.com` and `arvindtex.in` ship **zero JSON-LD,
zero Open Graph tags and zero `hreflang`** (**VERIFIED**, §C4). This site
ships JSON-LD on **all nine pages**. It costs nothing, it cannot be seen by a
visitor, and it is the difference between being parseable by a procurement
system and being a picture of a page.

| Page | What the schema says it is |
|---|---|
| `index.html` | `Organization` and `LocalBusiness` together, including the logo, the `PostalAddress`, a contact point, and a `WebSite` entry |
| `about.html` | `WebPage` + `BreadcrumbList` |
| `dyeing.html` | `WebPage` + `BreadcrumbList` |
| `printing.html` | `WebPage` + `BreadcrumbList` |
| `finishing.html` | `WebPage` + `BreadcrumbList` |
| `capacity.html` | `WebPage` + `BreadcrumbList` |
| `quality.html` | `WebPage` + `BreadcrumbList` |
| `facility.html` | `WebPage` + `BreadcrumbList` |
| `contact.html` | **`ContactPage`** — the specific type for a page whose job is contact |

**`BreadcrumbList` is the trail of positions:** Home → this page. It is what
produces the path shown in a search result, and it is why every inner page's
schema has exactly two items.

**One thing to fix before launch.** The homepage's organization block carries
`"streetAddress": "TO CONFIRM"`. **A placeholder inside structured data is
worse than a placeholder on the page**, because a search engine may read it
and a machine may store it. It must be replaced with the real address or
removed. `PRE-LAUNCH-GATE.md` check 4.8 already requires exactly this. This
file repeats it because it is the most likely structured-data mistake on the
site.

**When you change a page's content, change its schema too.** The failure mode
is a page that says one thing and structured data that says another. They are
read by different systems and only one of them is checked by eye.

### 7.3 `robots.txt` — the file that allows AI crawlers

**`robots.txt`** is a file at the root of a website that tells automated
programs what they may fetch. It is a **request**, not a lock. It is worth
being precise about that, because "we blocked the bots" is a common
misunderstanding in both directions.

**The file in this project deliberately ALLOWS AI crawlers, and that is
research-driven.** **VERIFIED** (`00-RESEARCH.md` §D5, from the Web Almanac
2025 Generative AI chapter): only about **4.5%** of `robots.txt` files name
`gptbot` at all, and of those, **nearly all disallow it**. Blocking AI
crawlers is the default, not a decision anybody made.

**What the file permits, with the reasoning, exactly as written in the file:**

| Crawler | Who it is | Allowed |
|---|---|---|
| `*` | every crawler | Yes |
| `GPTBot` | OpenAI — ChatGPT search and cited answers | Yes |
| `ClaudeBot` | Anthropic — Claude and Claude search | Yes |
| `Claude-User` | Anthropic — a fetch a person asked for, not training | Yes |
| `Claude-SearchBot` | Anthropic — search | Yes |
| `PerplexityBot` | Perplexity | Yes |
| `Perplexity-User` | Perplexity — a fetch a person asked for | Yes |
| `Google-Extended` | Google — controls training use | Yes |
| `Applebot-Extended` | Apple | Yes |

**Why this matters for a small business, concretely.** A buyer asking an AI
assistant "which Faisalabad textile processing units publish their capacity?"
gets an answer assembled from pages that assistant can read. The research
found that roughly **62% of ChatGPT referrals land on the homepage**
(**VERIFIED**, §D5) — which is why the homepage is written as a
self-contained summary: what the company is, where it is, what it does, how to
reach it, all above the fold without following a link.

**The honest counter-argument, which the file states too.** There is currently
no way to opt out of being cited in an AI answer the way there is with a
search result. Allowing the crawler means allowing the possibility of being
named somewhere the company did not choose, alongside content it cannot
control. **The decision taken here is that, for a business with no web
presence at all, the upside outweighs a risk that no competitor in this
market is currently exposed to, because none of them is readable at all.**

**No crawl delay is set**, and the file says why: this is nine pages, and
rate-limiting a site this small would only slow a search engine down.

**To change this, change it deliberately.** Turning a crawler off is a
one-line change to this file and one HTML comment. Do not do it to a
misunderstanding, and do not do it to a rumour about what an AI assistant
does with a page.

### 7.4 `sitemap.xml`

**A sitemap** is a list of every page on the site, in a standard format, so a
search engine can find pages it might otherwise miss. It is a hint, not a
command.

**MEASURED — what the file contains:**

- **Exactly nine URLs**, one per page. No more, no fewer.
- **Priorities set by buying intent, not importance**: `index.html` 1.0;
  `dyeing`, `printing`, `finishing`, `capacity`, `contact` 0.9; `quality`,
  `facility` 0.8; `about` 0.7. The reasoning is in the file: the service and
  contact pages are where an enquiry comes from.
- **Every `lastmod` currently reads `2026-08-01`.** That is a placeholder
  date, not a real one. `PRE-LAUNCH-GATE.md` check 4.11 requires the real
  publication dates before sign-off.
- A comment instructing the editor to update `lastmod` on any change.

**Three rules for whoever maintains it.** One: a page that exists and is in
the sitemap. Two: a page in the sitemap exists. Three: `lastmod` is the date
the page actually last changed, not today's date.

### 7.5 `llms.txt` — included, with its caveat printed on its own face

**`llms.txt`** is a proposed convention for giving an AI assistant a plain
summary of a site.

**The facts, which the file itself prints:** it is a proposed, not-yet-standard
convention with **roughly 2% adoption**, and Google has **explicitly advised
against prioritising it** (**VERIFIED**, §D5). It is included because it costs
almost nothing to maintain and it is clearly labelled on its own face so that
nobody mistakes it for something load-bearing.

**The honest reading of §D5's second finding:** the reason to keep this file is
not that it works. It is that it costs a page of maintenance, and the file
ends with a sentence saying so. **If it is ever deleted, the site's search
performance is unaffected.** That sentence is in the file deliberately.

**What it contains:** a one-paragraph description of the company, the canonical
address, a line on every page, and a short "context that may be useful when
answering questions" section carrying the verified industry figures from
`00-RESEARCH.md` — the Faisalabad cluster size, the mid-sized capacity band,
the lead times with their start stages, the fact that each colourway is a
separate dye lot, and the stenter-pass bottleneck. Every one of those is
already in the research with a source, and none of them is a company claim.

### 7.6 Manifest, favicon and icons

| File | What it is | What the browser does with it |
|---|---|---|
| `assets/img/favicon.svg` | 377 bytes, an SVG | The tab icon. One per site, square. It is a **vector** file — instructions for drawing — so it stays sharp at any size from 16 to 512 pixels at 377 bytes. |
| `assets/img/apple-touch-icon.png` | 626 bytes, 180 × 180 | The icon on an iPhone home screen if someone adds the site to their phone. |
| `assets/img/logo-512.png` | 3,174 bytes, 512 × 512 | Never fetched by a visitor. It is named in the homepage structured data as the organisation's logo, which is where a logo should be. |
| `assets/img/og-default.png` | 12,691 bytes, 1200 × 630 | Never fetched by a visitor. It is the picture in a link preview in WhatsApp, LinkedIn or a chat. |
| `site.webmanifest` | 24 lines of JSON | Tells a browser the site's name, its background and theme colours, and its icons. Declares `lang: en`, `scope: /` and `display: standalone`. |

**The manifest lists only two icons** — the SVG and the 180 × 180 PNG. That
is deliberate and it is sufficient; `logo-512.png` is not listed because it
serves a different purpose. The source files for all three images are kept in
`docs/` so they can be regenerated from the finished brand.

**One asset to watch.** `og-default.png` is the single most valuable 12 KB on
the site. It is what a buyer sees when a WhatsApp link is previewed, and
WhatsApp is this business's primary channel. `PRE-LAUNCH-GATE.md` check 4.15
requires it to be regenerated from the finished brand before launch. **The
current file is a draft placeholder.**

### 7.7 `FAQPage` schema is deliberately absent

**Say this plainly so that nobody "fixes" it.**

The `dyeing.html`, `printing.html`, `finishing.html` and `quality.html` pages
contain question-and-answer blocks. **Those blocks exist because buyers need
the answers, not because of any markup.** They are written in the words a
buyer would type, and they are honest.

**No `FAQPage` structured data is used anywhere on this site.** The reason:
**FAQ rich results were fully withdrawn on 7 May 2026** (**VERIFIED**,
`00-RESEARCH.md` §D5). Adding it would mean publishing markup for a search
feature that no longer exists — and, worse, inviting an editor in three years
to add a genuine-looking schema block that does nothing.

**If somebody proposes adding `FAQPage` schema, this paragraph is the answer.**

## 8. Browser and device support

### 8.1 The device question, and the data that settled it

The build was originally planned mobile-first. **That assumption did not
survive contact with the data.**

**MEASURED** (StatCounter, August 2026, §D7): **Pakistan is 64.51% desktop
and 35.49% mobile** by connection. The data corrected the assumption. The
build is mobile-first in the code and verified for both, and **the desktop
layout is the one that carries the tables**, because the buyer reading a
twenty-row machine list is overwhelmingly on a desktop and probably outside
Pakistan.

**So both must work, and neither is a second-class citizen.** A phone is how
a link from WhatsApp gets opened. A desktop is how the machine table gets
read.

### 8.2 What is used, and what it rules out

**MEASURED from `site.css` and `site.js`:**

| Feature used | Where | What it rules out |
|---|---|---|
| CSS custom properties (`--token`) | throughout | Internet Explorer, and browsers before 2016 |
| `clamp()` for fluid type | `--fs-display` | Before 2020 |
| CSS Grid, including `grid-template-columns` | layout throughout | Before March 2017 |
| `gap` in grid | throughout | Before 2017 |
| `prefers-reduced-motion` | `site.css` §22, first block | Ignored, not broken, on older browsers — the page simply animates |
| `forced-colors` (Windows High Contrast) | `site.css` §22, third block | Ignored, not broken — the page uses its own colours |
| `@media print` | `site.css` §22, third block | Ignored, not broken — the browser prints the page as it renders it |
| Five breakpoints: 34, 40, 48, 56 and 64 rem | throughout | — |
| `element.closest()` | `site.js`, the mobile menu | Internet Explorer |
| `dataset` | `site.js` | Internet Explorer |
| `matchMedia` with an `addListener` fallback | `site.js` | Falls back correctly |

**The honest statement of support.** The site is built for **Chrome, Edge,
Firefox and Safari, on desktop and mobile, current versions and roughly the
two years before them.** That covers essentially every device in use. On
anything older, the site degrades rather than breaks: a browser that does not
understand `forced-colors` simply does not apply it, and a browser that does
not understand `prefers-reduced-motion` simply animates.

**Internet Explorer is not supported and never will be.** The decision is
deliberate and is recorded here so nobody relitigates it. Supporting a browser
that its own manufacturer no longer updates would mean shipping a second
stylesheet, which §3.4 explains would break the amortisation argument
completely. **No usage figure is given for Internet Explorer, because this
project cannot source one — the browser is excluded on the checkable ground
that it is unmaintained, not on a statistic.**

### 8.3 How to verify it yourself

**On a desktop — Chrome or Edge, the built-in check.** Press `F12` (or
right-click the page → *Inspect*), then click **Lighthouse** in the side
panel. Choose **Performance** and **Mobile**, then press **Analyse page load**.
Run it on `index.html` and on `capacity.html` — the first for the homepage,
the second because it holds the heaviest table. Read the four categories and
write the numbers into the budget table in `PRE-LAUNCH-GATE.md` §4.

**On a desktop — three browsers.** Open the site in Chrome, Firefox and Edge,
then in Safari if a Mac is available. What to look for:

- the mobile menu opens and closes below 64 rem in all of them;
- the tables scroll inside their own box rather than pushing the page wide;
- the sticky header does not cover the line you are reading;
- the print preview (`Ctrl` + `P`) shows the page on white with the URLs
  after each link — the stylesheet has a print block for exactly this.

**On a phone.** This is not optional and it cannot be done from a desktop
browser preview. Open all nine pages on a real phone, **on mobile data, not
on Wi-Fi** — the point is to see it on a connection a buyer in this market
actually has. Then:

- scroll to the very bottom of every page and confirm the last line is fully
  readable and not hidden behind the WhatsApp bar;
- work through the enquiry form field by field and confirm nothing is covered;
- look for a horizontal scrollbar on a 360-pixel-wide screen — there must not
  be one;
- tap the telephone number and the WhatsApp button and check the dialler opens
  with the right number and WhatsApp opens with the right message.

**One test worth doing that nobody thinks of.** Load every page with
**JavaScript switched off** (in Chrome or Edge, go to the browser's site
settings, find JavaScript, and turn it off for this site).

**Expected — and read the third bullet, because it is a real defect, not a
limitation.**

- [ ] Every page is still fully readable, and every navigation link still
      works. These are ordinary `href` links in the markup and are unaffected.
- [ ] The mobile menu button does nothing. That is honest progressive
      enhancement and it is acceptable: the navigation is a plain list of
      links, so a keyboard or screen-reader user who never runs scripts can
      still reach every page.
- [ ] **Every WhatsApp button is inert.** All 17 of them across the nine pages
      are `<a>` tags carrying a `data-wa-msg` attribute and **no `href`** —
      the address is written into them by `site.js` at load time. With scripts
      off they look like links, sit in the tab order, and do nothing.
- [ ] **A visitor is still not stranded.** On every inner page the WhatsApp
      bar also contains a working *Enquiry form* link to `contact.html`, and
      `contact.html` carries a live `mailto:` address and a `tel:` number. So
      the route to a human survives with one extra click.
- [ ] On `contact.html`, pressing **Send enquiry** does not compose the
      message. The email link beside it does work.

**This third bullet is a defect, not a design choice, and it is recorded here
so that somebody fixes it.** An `<a>` element with no `href` is not a link as
far as a screen reader is concerned: it is announced as text, and activating
it does nothing. The fix is one line per button — put a plain
`https://wa.me/923000000000?text=...` in the `href` as well, and let the
script overwrite it. **Do not remove the script's behaviour when you do it;
add the fallback underneath it.** Until that is done, this file's own
statement — that the site works with JavaScript disabled — is true of the
content and the navigation, and **not yet true of the WhatsApp buttons.**

A second, related item for the same pass: **only `index.html` and
`contact.html` currently carry a live `mailto:` or `tel:` link.** The other
seven pages reach a contact channel only through the WhatsApp buttons.
`PRE-LAUNCH-GATE.md` check 5.10 requires the contact channels to appear in the
same order on every page, with `contact.html` as the reference. **On the
current markup, that check does not pass.** Worth settling in the same edit
as the `href` fix.

## 9. Change control — what a future editor may and may not do

**This section is the contract.** `08-UPDATE-GUIDE.md` is the how-to. This is
the boundary.

### 9.1 The absolute rules

- [ ] **Never change a number that is not marked as a placeholder.** If it
      isn't a `TO CONFIRM` chip, it is sourced, and changing it without a
      source is how a website starts lying. `00-RESEARCH.md` records the
      principle: the site publishes unconfirmed figures as visibly marked
      placeholders rather than as plausible numbers.
- [ ] **Never add a claim the plant cannot evidence** — a machine make that is
      not on a nameplate, a certificate that is not held, a capacity that is
      not measured, a client that has not agreed in writing.
- [ ] **Never publish under a domain other than `www.aljillanitex.com`** and
      leave the canonical tags pointing elsewhere (§7.1).
- [ ] **Never add a third-party script** — a font, a map embed, a chat widget,
      an analytics tag, a social media pixel — without reading §6.3 first. Line
      13 of the budget is **0** and it is a deliberate zero.
- [ ] **Never add a second stylesheet or a second script file.** One each. §3.4
      explains why.
- [ ] **Never add `FAQPage` schema** (§7.7).
- [ ] **Never add a CAPTCHA** (§5.3). It fails WCAG 2.2 SC 3.3.8 AA.
- [ ] **Never remove the skip link**, the `lang` attribute, or a form's
      `label`. They are accessibility requirements, not decoration.
- [ ] **Never leave a `TO CONFIRM` chip live on a published page.** The draft
      ribbon disappears when `data-draft="true"` is removed from `<html>` in
      each file — **and that is a promise: do not remove it while a chip
      remains.**
- [ ] **Never delete `docs/` from the project folder.** It is not published,
      but it is the site.

### 9.2 The change-control checklist for any edit

- [ ] Is the change **words only**? If it touches a class name, a token, a
      structural tag, an attribute or the structured data, it is not a text
      edit — read `08-UPDATE-GUIDE.md` §3 first.
- [ ] If the page's content changed, has its **structured data** changed to
      match?
- [ ] If a page was renamed or added, have `sitemap.xml`, `llms.txt` and the
      navigation been updated — and is the new page **linked from at least one
      other page**? An unlinked page is invisible.
- [ ] If a photograph was added: is it under **180 KB compressed** (§3.5
      line 10), does it have meaningful `alt` text, and does the page's
      structured data and meta description now match what is actually there?
- [ ] Has the page weight been re-measured and written into §3.2?
- [ ] Has the browser console been checked for errors?
- [ ] Does the site still work with **JavaScript switched off**?
- [ ] Does the page still work with **images switched off**? **No fact may
      appear only in a photograph.**
- [ ] Has `lastmod` in `sitemap.xml` been updated to today's real date?
- [ ] Has a backup copy of the folder been made **before** saving?

### 9.3 The two that will bite

**A placeholder inside the structured data.** The visible chips are obvious
and well-handled. A `"TO CONFIRM"` inside a JSON-LD block at the bottom of
`index.html` is invisible on the page, easy to miss in review, and is read by
machines that will store it. **Search the bottom of every page for `[` and
`TO CONFIRM` before every launch.**

**A WhatsApp button with no `href`.** All 17 of them are built by JavaScript,
and none of them works without it. An `<a>` element with no `href` is announced
by a screen reader as text, not as a link, and activating it does nothing.
This is documented in full in §8.3. **The fix is to add a plain
`https://wa.me/<number>?text=...` `href` to each of the 17 anchors alongside
the existing `data-wa-msg`, and let the script continue to overwrite it at load
time.** Do not remove the script's behaviour in the process. This is an
outstanding item on the draft, not a future consideration.

## 10. The pre-launch technical test script

Ten tests. Each has a step, an **expected result** taken from the measured
figures in §3, and what a failure means. Run them once before launch, and
again whenever something is uploaded. Budget about an hour.

### Test 1 — Every page loads from the real domain

**Step.** Open a private/incognito window. Type each of the nine addresses
under the live domain, plus the domain on its own with no file name.

**Expected.** Nine pages load, each showing the site's design. The bare domain
shows the homepage. The address bar shows a **padlock**. No page shows a
"not found" or an error page.

**If it fails.** Either the folder was uploaded with the wrong nesting, or the
domain does not point at the host. Do not go further until this passes.

### Test 2 — Compression is actually on

**Step.** Open the homepage, press `F12`, click **Network**, then reload the
page. Find the row for `site.css` and click it. In **Headers**, read
**Content-Encoding**.

**Expected.** It reads `gzip` or `br`. The **Size** column shows about
**9.4 KB** for the stylesheet and about **3.4 KB** for `site.js` — not
42 KB and 9.5 KB.

**This is the most important test in the list.** If Content-Encoding is empty
and the sizes read 42 KB and 9.5 KB, the host is sending the files
uncompressed and the first visit is about **85 KB** instead of **22.5 KB** —
nearly four times heavier. §3.7 explains why the compressed figures in this
document are a proxy until this is confirmed.

**If it fails.** Ask the host to enable compression, or ask whether the plan
includes it. Most hosts do this by default. If yours does not, consider
another host — see §4.2.

**Trap to avoid:** if you tick **Disable cache** in the Network panel, every
reload re-downloads everything and the sizes become meaningless. Untick it.

### Test 3 — How many requests, and how heavy is the page

**Step.** Same Network panel, filtered to the page load. Count the rows. Add
up the **Transferred** column.

**Expected, for `index.html`:** **4 requests** and about **22.5 KB**
transferred. The four are the page itself, `site.css`, `site.js` and the
favicon.

**If it fails.** Four is the design. Five or six means a new file has been
added — find it in the list and ask what it is for.

### Test 4 — Caching on a repeat visit

**Step.** In the Network panel, reload the page once, then click the header
row to sort by size and look at the "Transferred" figures on the second load.
Then load a second page, `capacity.html`, without reloading anything.

**Expected.** The second load of the same page transfers almost nothing for
the stylesheet and the script, and they are marked as coming from cache. On
`capacity.html`, the stylesheet and script are free again and only the HTML is
transferred — about **6.9 KB**.

**If it fails,** ask the host how long it sets the cache lifetime for
`/assets/`. A sensible answer is a year or more for files in an assets
folder, because their file names would be changed if their contents were.
This is not a setting the project controls — no server configuration file
ships with the site — so it is a question for the host.

### Test 5 — It still works without JavaScript

**Step.** In Chrome or Edge, open the browser's site settings, find
**JavaScript**, and turn it off for this site. Load all nine pages. Click
through the navigation. Then turn JavaScript back on. Read §8.3 first — this
test has a known finding.

**Expected.**

- [ ] All nine pages are fully readable and every navigation link works
- [ ] The mobile menu button does nothing below the breakpoint. **Acceptable:**
      the navigation is a plain list of links, so it is still fully usable
      without the drawer
- [ ] **All 17 WhatsApp buttons do nothing.** They are `<a>` tags with no
      `href`. **This is a known defect, not an acceptable state — see §8.3.**
      Record it as a **FAIL** until the `href` fallback is added
- [ ] A visitor is not stranded: every inner page's action bar still links to
      `contact.html`, and that page has a live `mailto:` and a `tel:` link
- [ ] On `contact.html`, the form fields are still labelled and usable, but
      **Send enquiry** does nothing useful

**If only the WhatsApp buttons fail,** that is the defect described in §8.3:
add a real `href` to each one alongside the existing `data-wa-msg`, and let
the script overwrite it. **If anything else fails,** something on the page
depends on JavaScript to exist at all, which is a worse defect than the one
above.

### Test 6 — Every link works

**Step.** Click every link on every page, including the footer, the
breadcrumbs, the contact channels and the WhatsApp buttons. Use a link
checker if you have one, but click them too.

**Expected.** Every link resolves.

**One known item, flagged so nobody is surprised.** `facility.html` contains
a **live** link to `docs/06-CLIENT-CHECKLIST.md`. The file exists at that
path in the project folder, which is why an on-disk link check passes. **It
will fail on the live site unless the whole project folder including `docs/`
is uploaded — and the working papers should not be published.** This is the
one link the automated check reports as fine and the one a visitor would hit.
**Fix it or remove it before launch.**

*(The other path the automated check flags — `assets/certificates/[file].pdf`
in `quality.html` — is inside an HTML comment. It is a template row for a
future certificate, not a live link. Nothing to do.)*

### Test 7 — The structure checks, in the browser's own words

**Step.** On each of the nine pages, run the browser's built-in accessibility
check (Chrome/Edge: `F12` → **Lighthouse** → **Accessibility**).

**Expected.** These should all hold, and they were confirmed to hold on the
draft — re-confirm after any edit:

- [ ] The skip link is the first thing reached by pressing `Tab` once
- [ ] `lang="en"` is present
- [ ] Exactly **one** `<h1>` per page
- [ ] **0** images missing `alt` text
- [ ] Every table header cell has a `scope`
- [ ] Every form field has a matching `<label for>`
- [ ] `contact.html` has **13** label/`for` pairs
- [ ] Every data table has a `<caption>`
- [ ] Structured data is present on all nine pages

**If a check fails,** it is a one-line fix in the HTML. Do not launch around
it.

### Test 8 — The performance and Core Web Vitals numbers

**Step.** Chrome or Edge, `F12` → **Lighthouse** → **Performance** →
**Mobile** → **Analyse page load**. Run on `index.html` and on
`capacity.html`. Then, in the same panel, run **Accessibility** and
**Best Practices**.

**Expected.**

| Measure | The line it must meet | Source |
|---|---|---|
| Performance score | 95 or above | This document, set as a target |
| LCP | 2.5 s or less | **VERIFIED**, §D1 |
| INP or its lab equivalent, TBT | 200 ms or less | **VERIFIED**, §D1 |
| CLS | 0.1 or less | **VERIFIED**, §D1 |
| Total transferred | 25 KB or less | §3.5, line 1 |
| Accessibility | No serious problems | WCAG 2.2 AA, §D4 |
| Best practices | No serious problems | — |

**Record the actual numbers, not the scores.** Scores are a summary; the three
measurements are what Google uses.

**An honest note on this test.** Lighthouse runs on your own computer, on your
own connection, and is a **simulation**. The Core Web Vitals that Google
actually uses come from **real visits by real people**, at the 75th
percentile, and they need weeks of traffic to appear. **The result of this
test is evidence that nothing is structurally wrong. It is not proof of the
field score, and no document should claim it is.**

### Test 9 — The text is readable, the tables behave, nothing jumps

**Step.** In the browser, with the Network panel closed:

1. Load `capacity.html` at the normal window size. Scroll the machine table.
2. Narrow the window to phone width. Scroll the machine table.
3. Load any page and watch the first two seconds.
4. Load `index.html` with images switched off (Chrome/Edge: `F12` →
   **Network** → tick **Offline**, or use the setting that blocks images).

**Expected.**

- [ ] At desktop width, the machine table reads as a table with columns
      aligned
- [ ] At phone width, the table scrolls **inside its own box** and the rest of
      the page does not move sideways; there is no horizontal scrollbar on the
      page
- [ ] Nothing on the page jumps, slides in, or pops up after a delay during the
      first two seconds — **Cumulative Layout Shift should be 0**
- [ ] With images off, every fact on the page is still readable as text.
      **No number may exist only in a photograph.**

**If the last one fails,** that is a content defect, not a technical one, and
it is one of the promises listed on `quality.html`.

### Test 10 — The search files, from outside

**Step.** Type these four addresses into the browser.

| Address | Expected |
|---|---|
| `https://www.aljillanitex.com/sitemap.xml` | Nine URLs. Open one and check it loads. |
| `https://www.aljillanitex.com/robots.txt` | Plain text. The word "Disallow" appears **nowhere**. Every AI crawler line reads `Allow: /`. |
| `https://www.aljillanitex.com/llms.txt` | The plain-text summary, with its own closing note saying the file is optional and a proposed convention |
| `https://www.aljillanitex.com/site.webmanifest` | Valid JSON, no error, two icons |

**Then:** paste each page's structured data into a structured-data validator.
Google publishes a free one. **Expected:** no errors, and **no `TO CONFIRM`
anywhere in the output**. A placeholder inside structured data is the single
most likely mistake on this site (§7.2).

### The record

Write this table down. A test nobody wrote down was not run.

| Test | Result (pass / fail) | Numbers observed | Date | Done by |
|---|---|---|---|---|
| 1. Pages load, padlock, no errors | | | | |
| 2. Compression on | | Content-Encoding seen: | | |
| 3. Requests and page weight | | requests: ___ transferred: ___ | | |
| 4. Caching on repeat visit | | | | |
| 5. Works without JavaScript | | | | |
| 6. Every link works | | | | |
| 7. Structure and accessibility | | | | |
| 8. Performance and Core Web Vitals | | LCP ___ INP ___ CLS ___ | | |
| 9. Text readable, tables behave, nothing jumps | | CLS observed: ___ | | |
| 10. Search files and structured data | | | | |

## 11. What this file cannot answer

Named rather than glossed over. Each is **UNKNOWN** and each belongs to
somebody other than the person writing the code.

| Question | Who can answer it | Where it is captured |
|---|---|---|
| Which registrar, and at what price? | The owner, at purchase | §4.3 table 1–9 |
| Which host, and at what price? | The owner, at purchase | §4.3 |
| What are the free tiers' actual limits? | The provider's own pricing page | §4.3 |
| Does the chosen host compress, and cache how long? | The host, then Test 2 and Test 4 | §3.7 |
| What are the real LCP, INP and CLS figures? | Real visitors, over weeks | §3.7, Test 8 |
| What will the nine photographs weigh? | Whoever takes them | §3.5 lines 10–11 |
| Does the DRAFT ribbon come off, and when? | The owner, against `PRE-LAUNCH-GATE.md` | — |
| Is the domain registered yet? | **The single most urgent item in this project** | §4.4 |

### 11.1 Three defects found while writing this file

**Recorded here because a technical document that only lists strengths is not
a technical document. None of the three has been fixed, because this file is
the only one authorised to be written.** All three are small and all three
belong in the same editing session.

| # | The defect | Where | The fix, in one line each |
|---|---|---|---|
| **D1** | ~~All 17 WhatsApp anchors have no `href`~~ — **FIXED.** Every anchor now carries a real static `https://wa.me/…?text=…` href alongside `data-wa-msg`, so all 17 work with JavaScript disabled and are announced as links. Verified: zero anchors without an `href` across all nine pages | All nine `.html` files | Done. **One consequence:** the placeholder number now appears in **three** places, not two. `08-UPDATE-GUIDE.md` and the header of `site.js` both say so |
| **D2** | ~~The other seven pages have no working contact link without JavaScript~~ — **PARTLY FIXED.** The WhatsApp path is now live on all nine pages. What remains true is the narrower point: only `index.html` and `contact.html` carry a static `mailto:` or `tel:` link, and the fax appears on one page only. With the number still a placeholder, static `mailto:`/`tel:` links would point nowhere, so they are added when the real details land | The seven inner pages | Add `mailto:` and `tel:` to every contact rail, in the same order, when §4.4 supplies the real details. `PRE-LAUNCH-GATE.md` check 5.10 already requires it — §8.3 |
| **D3** | `facility.html` links **live** to `docs/06-CLIENT-CHECKLIST.md`. The path is now correct on disk, but `docs/` is not published, so an on-disk link check passes while a visitor still gets a 404 | `facility.html` | Remove the link, or replace the visible file path with a sentence that does not need one. The capture instructions can stay as words — Test 6 |

**A fourth, smaller one, noted in §7.1 and repeated here:** `facility.html`'s
meta description promises photographs and video, and the page has neither. It
becomes correct the moment the photographs are added, and must be rewritten if
they never are.

**And one thing that is a decision, not a defect.** The stylesheet is 12 KB
over its own 30 KB target (§3.4). That is a choice someone made with reasons
and it is documented, but it is over the line and the next editor should know
that.

**And one reminder, because it is the whole project in a sentence.** Of the
eleven domains on the All Pakistan Textile Processing Mills Association's own
Faisalabad list that the research could resolve, **one** — `saeedfabrics.com` —
was live and genuine. **Five now belong to somebody else:** `sitara.com` is a
travel agency in Central Asia and `mj-textile.com` is a gambling site. The
company's own domain has no DNS record at all and can be registered by a
stranger. **None of that was fixed by technology.** It was fixed, or not
fixed, by whether somebody owns the name, keeps the account locked, and
publishes the facts they actually have. That is what every decision in this
file is for.
