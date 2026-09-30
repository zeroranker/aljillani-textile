# Al-Jilanee Textile Industry (Pvt) Ltd — Draft Website

> **⚠️ THIS IS A DRAFT. DO NOT PUBLISH IT.**
>
> Every fact the company has not yet supplied sits on the page as a visible
> **`TO CONFIRM`** chip. Nothing has been invented to fill those gaps.
>
> **MEASURED:** there are **182** such chips across the nine pages — 108 of them
> on `capacity.html` alone. Until every one is replaced with a real figure from
> the plant's own records, this site is not publishable.
>
> The red **DRAFT** ribbon across the top of each page is a warning to your own
> staff. **It is not a lock.** Nothing technically stops a search engine from
> reading a draft, so the gate is a person following a checklist — see
> `docs/PRE-LAUNCH-GATE.md`.

---

## What this is

A nine-page website for **Al-Jilanee Textile Industry (Pvt) Ltd**, a *pure fabric
processing unit* in Faisalabad, Pakistan. Pure processing means the company does
dyeing, printing and finishing on fabric it does not own. It does not spin yarn
and it does not weave cloth.

The site is a folder of plain files. There is no database, no login, no server
code, and nothing to install. You can open any page in a text editor, change the
words, and put it back.

It is written for two readers at once:

- **You**, if you are the owner or a member of staff who will look after it. Every
  document here is written to be used, not admired.
- **Whoever commissioned it**, who needs to see why the site is built this way
  and not the more usual way.

---

## Before anything else: the domain is not yours yet

This is the single most urgent item in the project, and it is not a website task.

**VERIFIED** (`docs/00-RESEARCH.md` §A3): `aljillanitex.com` — the web address
the industry association's own directory prints against this company — **has no
DNS record at all**. No address record, no name-server record. A registry lookup
returns **404**, which means the domain is **unregistered**, not merely
misconfigured.

**Anyone can register it.** Not a competitor, not necessarily anyone in textiles.
Anyone, anywhere, at any moment.

The site already depends on it. I read the files and confirmed this:

| Where | What it says |
|---|---|
| All nine `.html` files | `https://www.aljillanitex.com/` is written into the canonical tag and the `og:url` |
| `sitemap.xml` and `robots.txt` | Every entry points at that address |
| `index.html` and `contact.html` | The address `info@aljillanitex.com` is written in as the email. A domain with no DNS has no mail server, so **that address cannot receive anything today** |

**Why this is worse than a marketing problem.** In the Faisalabad processing
sector, **five of the eleven** domains listed by the association for testing now
belong to somebody else (**VERIFIED**, §A3). One listed against a textile company
is a tour operator in Central Asia. Another is a gambling site. A domain that is
lost does not merely stop generating enquiries — it hands an international buyer
**someone else's business under your name**.

> **Do this today, before anything else in this folder matters.**
> Register `aljillanitex.com` through a registrar you trust. Hold it in a
> **company-controlled** account, not a personal one, with at least two people
> able to sign in. Turn on auto-renewal. **Do not let it lapse** — a lapsed domain
> goes through a deletion cycle and can be taken by anyone.
>
> Full instructions: `docs/06-CLIENT-CHECKLIST.md` §1.

Once the domain is live, decide whether you will serve `www.` or the bare name
and make the other one redirect permanently. Everything in the build writes
`www.`. Pick one; do not leave both live.

---

## How to look at it on your own computer

Open a command prompt in the folder that holds `index.html` and run:

```
python -m http.server 8000
```

Then open this address in your browser:

**http://localhost:8000/**

Press **Ctrl + C** in the command window to stop the server.

**Even simpler:** you can also just double-click `index.html` and it will open
normally. **MEASURED:** every link, script and image on this site is written as a
*relative* path — there is no leading slash anywhere — so it works straight off
the disk with no server at all. The one-line server above is better for testing,
because it behaves the same way the real web host will.

*If `python` is not installed on your machine, opening `index.html` directly is
a perfectly good alternative. Nothing else on this site needs a server.*

---

## The files in this folder

### The nine pages

| File | What it is |
|---|---|
| `index.html` | **Homepage.** What the unit is, where it is, what it does, and how to start an enquiry. Also the section that explains *which stage a lead-time clock starts from* — the thing that makes the site useful to a buyer planning an order. |
| `dyeing.html` | Dye classes matched to fibre, pretreatment, shade matching and lot structure. |
| `printing.html` | Rotary screen, digital and flat screen printing compared side by side, plus strike-off approval and colour limits. |
| `finishing.html` | What each finish does, which finishes work against each other, and why the stenter queue sets the schedule. |
| `capacity.html` | **The evidence page.** Throughput, the full machine table, lot sizes, working pattern, lead times, water and effluent figures. Every number is labelled *ours* or *industry benchmark*. This is where most of the 182 open chips are. |
| `facility.html` | The plant, shot by shot. Every image slot is a labelled plate naming the photograph that belongs there and what it must show. |
| `quality.html` | How a lot is checked, what is tested in-house versus sent out, and a certificate register that lists **both** what is held and what is not held. |
| `about.html` | What the unit is and is **not**, and where it sits in the Faisalabad processing cluster. |
| `contact.html` | WhatsApp, email, fax and a structured enquiry form — plus what to include so the quote comes back accurate. |

### The files that run the site

| File | What it is |
|---|---|
| `assets/css/site.css` | **The whole stylesheet in one file** — every colour, size, spacing and component. It is the source of truth for how the site looks. |
| `assets/js/site.js` | The whole script in one file, about 9 KB. It only adds three conveniences: the mobile menu button, pre-filled WhatsApp links, and the enquiry form. **The site works fully with JavaScript switched off.** |
| `robots.txt` | Instructions for search engines. It contains **no** block rule, and it explicitly *allows* the major AI crawlers — most sites block them, which is a free advantage to leave open. |
| `sitemap.xml` | The nine pages in the order a buyer needs them. Update the `<lastmod>` line whenever you publish a change. |
| `site.webmanifest` | The icon and colours used when someone adds the site to a phone's home screen. |
| `llms.txt` | A plain-text summary of the company and its pages, for AI assistants. It says on its own face that it is a proposed convention with about 2% adoption — so nobody mistakes it for something load-bearing. |

### The images

| File | What it is |
|---|---|
| `assets/img/favicon.svg` | The tab icon. |
| `assets/img/logo-512.png` | The 512×512 logo, used by search engines and sharing previews. |
| `assets/img/apple-touch-icon.png` | The 180×180 icon for an iPhone home screen. |
| `assets/img/og-default.png` | The 1200×630 picture that appears when someone shares a link on WhatsApp or Facebook. **This matters more than usual here — WhatsApp is this business's main channel.** |

There are **no photographs** on this site, and there are no `<img>` tags in the
HTML at all. Photograph slots are drawn as labelled plates instead. That is on
purpose — see *What is deliberately missing* below.

---

## Five design principles

1. **It looks like a data sheet, not a brochure.** Warm paper background, hairline rules, 2-pixel square corners, one indigo and one rust colour. If a new section would not look right printed on a mill's specification sheet, it does not belong.
2. **The words are the page.** No hero image, no carousel, no animated counters. The competitor sites in this trade measure between 0.2% and 20% of their markup as actual readable text; this one is built the other way round.
3. **Every measured number is set in the system monospace,** so a column of digits lines up on the decimal point without centring anything.
4. **Nothing is hidden.** What the company holds is published. So is what it does not hold, on its own page, in its own words.
5. **If it is not measurable and it is not true, it is not on the site.**

The full system — every colour with its contrast ratio, every size, every
component, and a list of things not to do — is in `docs/03-DESIGN.md`.

---

## The documents in `docs/`

Read these in the order that matches what you are trying to do.

| Document | What it is for | Read it when |
|---|---|---|
| `docs/08-UPDATE-GUIDE.md` | How to change the site day to day. Assumes you have never edited a web page. | **Start here.** Read sections 1 and 2 first, then come back to section 4 when you have something real to change. |
| `docs/06-CLIENT-CHECKLIST.md` | Everything we need from the company, with the record to read each answer out of, and a note on what happens if it is wrong. | You are collecting facts, certificates or photographs. §1 has the five things needed first. |
| `docs/PRE-LAUNCH-GATE.md` | One printable sheet, nine sections, filled in by hand and signed by two people. | The week you publish. It ends in a GO / NO-GO decision. |
| `docs/03-DESIGN.md` | The design system: every token, component and contrast ratio, plus a "do not do this" checklist. | Before you change anything in `assets/css/site.css`. |
| `docs/02-CONTENT.md` | Who the site is written for, the tone of voice, the house vocabulary, and the placeholder policy. | Before you write or rewrite a single sentence of copy. |
| `docs/01-SITEMAP.md` | The nine pages, why they are in that order, the link plan, and the URL policy. | You are adding or removing a page, checking links, or fixing an address. |
| `docs/00-RESEARCH.md` | The research the whole site is built on: the state of the local market, what buyers check, and the 2026 technical standards. Every claim in it carries an evidence label. | You want to know *why* a decision was made, or where a published figure came from. |
| `docs/logo-source.html`<br>`docs/og-image.html`<br>`docs/apple-touch-source.html` | The source drawings for the three image files. You open one, change the text, capture it at the size named in its header, and replace the PNG. | You are changing the logo or the WhatsApp preview picture. |

*A note on the numbering:* it skips 04, 05 and 07. Those working papers were not
kept in this folder. Where `00-RESEARCH.md` refers to `05-TECHNICAL.md` or
`07-LAUNCH.md`, read `08-UPDATE-GUIDE.md` and `PRE-LAUNCH-GATE.md` instead — they
cover the same ground.

### How evidence is labelled throughout

Every external claim in these documents carries one of four labels. They mean
the same thing in every file:

| Label | What it means |
|---|---|
| **VERIFIED** | Somebody read the original source or ran the check. |
| **MEASURED** | It was counted or calculated from the actual files. You can repeat the count. |
| **UNVERIFIED** | Plausible and widely repeated, but no original source was reached. |
| **UNKNOWN** | Nobody has found it out. Recorded as a question. Never guessed. |

Anything marked **TO CONFIRM** on the website is a **UNKNOWN** value waiting for
a real answer. It is not a mistake and it is not something to tidy away.

---

## What to do first

- [ ] **Register the domain today.** Everything else on this list waits behind it.
- [ ] **Open `docs/06-CLIENT-CHECKLIST.md` and work down it in order.** The first five items are the domain, the legal identity, the numbers, the certificates and the photographs.
- [ ] **Confirm the legal entity name from your registration document.** The site writes *Al-Jilanee Textile Industry (Pvt) Ltd*; whether that matches the registered name exactly is currently **UNKNOWN**. Note also that the name on the site (*Al-Jilanee*) and the domain (*aljillanitex*) are spelled two different ways — whether they are the same name is **UNKNOWN** and only you can settle it.
- [ ] **Fill in the machine table from your own production records, not from a target.** A target is a wish. A record is a fact.
- [ ] **Delete the placeholder WhatsApp number `923000000000` from every file.** It now appears in **three** places: `assets/js/site.js`, the `data-wa` attribute in all nine pages, and the static `wa.me` href on every WhatsApp button. Use replace-in-all-files, then search once more and expect zero hits. A live link that reaches a stranger is worse than no link at all.
- [ ] **Then walk the site with `docs/PRE-LAUNCH-GATE.md` and do not publish until it is signed.**

> **If you are ever tempted to type a plausible number into a gap — a capacity
> figure, a machine count, a certificate date — that is the one moment this
> whole project is built to prevent.** Write **UNKNOWN** on the checklist and
> leave the chip on the page. A chip is a reminder. A wrong number is a broken
> promise to a buyer.

---

## What is deliberately missing, and why

Nothing on this list was left out by accident. Each one is a decision, and each
one has a reason you can check in `docs/00-RESEARCH.md`.

| Not used | Why |
|---|---|
| **Any framework** (WordPress, React, Bootstrap, a hosted page builder) | So that you can edit the site yourself with Notepad. A hosted builder sends a median mobile home page of **2,559 KB across 72 requests carrying 646 KB of JavaScript**, taking **4.7 seconds** to show its main content (**VERIFIED**, Web Almanac 2025). The heaviest single page here is **58.4 KB** on a first visit, including a 34 KB webfont; the whole nine-page site is about **376 KB** on disk. |
| **Any build step** — nothing to compile, no `dist` folder, no command line | What is on your disk is exactly what a visitor's browser receives. There is nothing hidden behind it, which is why it can be explained in one sitting. |
| **Web fonts** | The site uses the operating system's own type. When the main content is text in a system font, its load time is **0 ms** — there is no font request to wait for (**VERIFIED**). A web font also causes the page to jump when it swaps in. |
| **Analytics** | Nothing about who visits the site is collected, logged or sent anywhere. |
| **A cookie banner** | There are no cookies. There is nothing to consent to, and a fake consent banner is worse than none. |
| **FAQ schema** | Google withdrew FAQ rich results on **7 May 2026** (**VERIFIED**, §D5). The question-and-answer blocks on the service pages are still there — because buyers need the answers, not because of any markup. |
| **Stock photography** | The company has no photographs of its own floor yet. A stock photograph of some other mill would be a fabricated claim about this business. The research found a live, ranking Faisalabad dyeing site shipping a hero image whose own filename is `istockphoto-…jpg`, alongside a fabricated founder with a stock headshot (**VERIFIED**, §A6). |
| **A client logo wall, a testimonial band, or animated counters** | You do not have a client list to publish, and inventing one is the single worst thing this site could do. The research found a competitor shipping 18 client logos whose alt text is literally `client`, and another whose four stat counters all render **zero** (**VERIFIED**, §A6). |
| **A CAPTCHA on the enquiry form** | A CAPTCHA is the one element here that would fail the accessibility standard on cognitive load (WCAG 2.2, SC 3.3.8). Spam control is a hidden field that only a robot fills in. And because the form's endpoint is a WhatsApp link rather than a database, there is no database to attack. |
| **A database, a login, or any server-side code** | An enquiry is assembled in the buyer's browser and handed to WhatsApp. There is nothing on a server to fail, and nothing stored about your visitors. |

---

## The rule this project runs on

Nothing goes on this website unless it can be evidenced by a document, a record,
or the nameplate on a machine — and where the company holds nothing, the site
says so in plain words instead of staying quiet. The research brief behind this
build labels every fact **VERIFIED**, **MEASURED**, **UNVERIFIED** or **UNKNOWN**,
and that discipline was applied to the research first and then to the copy, so
that a buyer can tell exactly how much weight to put on any sentence they read.
Where a figure is still open it is left on the page as a visible **TO CONFIRM**
chip rather than printed as a plausible-looking number, because a machine list, a
certificate expiry date or a lead time that turns out to be wrong is the one
thing a processor in Faisalabad cannot take back — and in this market, where
roughly nine in ten processing units have no website at all, a site that can be
checked is worth more than a site that merely looks expensive.
