# Pre-Launch Gate — Al-Jilanee Textile Industry (Pvt) Ltd

**Nine pages. One sheet. Print it, fill it in by hand, sign it.**
Nobody launches this website until this sheet is complete.

---

## What this sheet is for

This is a go / no-go checklist. Every line on it can be checked by looking at the
live website or at a document, without asking anyone's opinion.

- **PASS** means you checked it yourself and it is true.
- **FAIL** means it is not true yet. A FAIL blocks the launch. It is not a
  criticism of anybody — it is the last chance to catch it while it is still cheap.
- If a line genuinely does not apply, write **N/A** in the column and give the
  reason in the same cell. Do not leave it blank.

A blank column is a failed gate. So is a column filled in by somebody who did not
look.

## How to use it

1. Do sections **1** and **2** first. They are the ones that can still embarrass the
   business in front of a buyer.
2. Do sections **3** and **9** next. If the domain is not yours, nothing else matters.
3. Sections **4** to **8** are technical. If you are not the person who built the
   website, hand these to whoever did, and read the results.
4. Then read the sign-off block at the end and sign it.

**One person checks. A second person reads the finished sheet.** The person who
filled in the numbers is not the person who signs for them.

## The evidence words used on this sheet

These four words are used the same way in the research brief and in every other
document in this project. They mean exactly what they say.

| Word | Meaning |
|---|---|
| **VERIFIED** | Read from the real document, or checked by running the check. |
| **MEASURED** | Computed from the files themselves. Anyone repeating the same check gets the same answer. |
| **UNVERIFIED** | Plausible, but no primary source was reached. Never publish it as fact. |
| **UNKNOWN** | Not found. Recorded as a question, never guessed. |

An UNKNOWN is allowed on this sheet. What is not allowed is an UNKNOWN that is
printed on the website as though it were a fact.

## Where this sheet starts from

These are the measurements taken on the draft build on **30 September 2026**. They
are **MEASURED** — they are the sizes of the files as they sit on disk. They are
here so you know what you are comparing against, not to tell you the site passes.

| What | Draft build, measured 30 Sep 2026 |
|---|---|
| Pages | 9 |
| Visible `TO CONFIRM` chips, all nine pages | **182** (108 of them on `capacity.html`) |
| Pages with `data-draft="true"` (the DRAFT ribbon) | 9 of 9 |
| `assets/css/site.css` | 43,428 bytes |
| `assets/js/site.js` | 9,754 bytes |
| Heaviest page, uncompressed, with its CSS, JS and favicon | 87,772 bytes (`index.html`) |
| Lightest page, same calculation | 72,436 bytes (`about.html`) |
| Requests per page | 4 — the page, one stylesheet, one script, one favicon |
| Web fonts loaded | 0 |
| Photographs on the site | 0 real photographs — every frame is a labelled placeholder |
| A visitor-facing link into an unpublished directory | `facility.html` links to `docs/06-CLIENT-CHECKLIST.md`. The path is now correct on disk, but `docs/` is **not** a published directory, so on the live site it will 404 for a visitor. Either publish `docs/` or replace the link with the capture instructions as plain words. `quality.html` also holds a commented-out template row pointing at `assets/certificates/[file].pdf` — harmless while it stays commented, broken the moment it is switched on without the file. |
| Working instructions printed on the pages | **48** visible `EDIT:` notes, outside the HTML comments, spread across all nine pages |
| Placeholder WhatsApp number still live | `923000000000`, in all nine pages |

The site will change before launch — at minimum, the photographs go in and the
chips come out. **Re-measure on the day you sign. Never sign against these
numbers.**

---

## 1. Content

Nothing unfinished is visible to a visitor. Nothing is published that the business
cannot back up.

| # | What must be true | How to check | P/F | Checked by, date |
|---|---|---|---|---|
| 1.1 | Not one `TO CONFIRM` chip is visible on any of the nine pages. Open each page on the live domain and search it for "TO CONFIRM", "To confirm" and "to confirm". Count must be zero. | Ctrl+F in the browser, all nine pages | | |
| 1.2 | The orange DRAFT ribbon is gone from every page. It disappears when `data-draft="true"` is removed from the opening `<html>` tag. | Look at the top of each page | | |
| 1.3 | No placeholder text of any kind survives: no "lorem ipsum", no "TODO", no "XXX", no "[file].pdf", no "Address to confirm", no "coming soon". | Search the site files for each of those strings | | |
| 1.4 | No working instruction is printed on a page. The draft shows **48** `EDIT:` notes to the visitor — in body text, in table captions and in small print — on all nine pages. Every one of them is either answered with a real value or removed. The `EDIT:` notes hidden inside HTML comments are fine; they are not shown to a visitor. | Search each page for "EDIT:" and read what is on screen | | |
| 1.5 | Every chip that was removed was resolved **one of three ways**: replaced by a value that has a record behind it, deleted because the business does not have it, or replaced by an honest sentence saying so. | Cross-read against the client checklist; each of the 182 chips accounted for | | |
| 1.6 | Every photograph on the site was taken by this business, on this floor. No stock library images, no supplier marketing images, no generated or rendered factory images. | Look at each file in `assets/img/`; ask who took it | | |
| 1.7 | The photograph file names mean the same thing everywhere. `facility-01` is the same shot on the homepage and on the facility page. | Compare the captions on `index.html` and `facility.html` | | |
| 1.8 | The facility page does not contradict itself: the sentence about how many photographs there are matches the frames actually on the page. Do not add a tenth frame to make a sentence true. | Read `facility.html` start to finish | | |
| 1.9 | No client logos, no client names, no logo wall, no testimonials anywhere on the site. | Search all nine pages | | |
| 1.10 | No superlative that cannot be evidenced. Search for: "leading", "number one", "no. 1", "best", "world-class", "cutting-edge", "state-of-the-art", "passionate", "committed to excellence", "trusted by". Every hit is deleted, or backed by a document. | Ctrl+F, all nine pages | | |
| 1.11 | The company name is spelled the same way everywhere. As delivered, the nine pages use the name **Al-Jilanee** 99 times, and the full name **Al-Jilanee Textile Industry (Pvt) Ltd** 35 times, with no misspelling and no second spelling. | Search the site for "Al-Jilanee", "Al-Jillani" and "Al-Jilani" | | |
| 1.12 | The legal entity name in the title, description, social preview name, footer and structured data of every page matches the incorporation document **character for character**. The registered name is currently **UNKNOWN** — this line cannot pass until the owner reads it off the registration document. | Compare every page against the registration document | | |
| 1.13 | Every process name is spelled correctly and the same way on every page — pretreatment, bleaching, mercerising, sanforising, calendering, stenter, rotary screen. One spelling, not two. | Read the three process pages against the business's own paperwork | | |
| 1.14 | Every duration on the site names the stage its clock starts from. "30–60 days **from shade approval**", never a bare "30–60 days". This is the site's own promise and its main advantage. | Read the homepage lead-time section and the capacity page | | |
| 1.15 | No visible reference to any internal document: nothing on the public site says "See docs/PRE-LAUNCH-GATE.md" or shows a link to a file in `docs/`. The draft ribbon prints one, and the facility page links another. | Read the top of every page; click anything mentioning `docs/` | | |

---

## 2. Facts

Every figure on the site can be traced to a record, a nameplate or a document, and
a named person has signed for it.

| # | What must be true | How to check | P/F | Checked by, date |
|---|---|---|---|---|
| 2.1 | Every published number has a **source record** (which document it was read out of) and a **name** (who stands behind it). | Use the "source of truth" and "who signs it off" columns in the client checklist, line by line | | |
| 2.2 | Capacity figures come from production records — the last three completed months, median — and the period is stated on the page. No figure comes from a target, a brochure or a machine's theoretical maximum. | Read `capacity.html` | | |
| 2.3 | Every machine make, model, quantity and working width on `capacity.html` is read off a nameplate, and a photograph of that nameplate is in `assets/img/` as `nameplate-NN.jpg` with the row pointing at it. | Open each photograph and read it; compare with the table | | |
| 2.4 | The machine table and the dye-class / process list on the dyeing page agree with each other. If the two disagree, the site loses its credibility entirely. | Compare `capacity.html` and `dyeing.html` line by line | | |
| 2.5 | Any machine cell the business cannot photograph is left empty, with a note saying why. No make is guessed. | Look for empty cells and read the note | | |
| 2.6 | Every certificate row carries **all six fields**: scheme name, certification body, certificate number, expiry date, scope, and a link to the PDF in `assets/certificates/`. | Read the log book on `quality.html` | | |
| 2.7 | Every expiry date on the site is in the future on the day you sign. | Compare with today's date | | |
| 2.8 | The legal entity named on each certificate is the entity named on the site and on the invoice. A certificate issued to a sister company does not certify this plant. | Read each PDF | | |
| 2.9 | No export-oriented-unit claim, duty drawback, Form-A, EOE-CLT, GSP+, NTN or STR appears anywhere on the site — unless the accountant has confirmed it **in writing** and that letter is attached to this sheet. | Search all nine pages; check for the letter | | |
| 2.10 | Any wording "GRS" has been re-checked against the paper certificate in hand and with the body that issued it. Until that is settled the site must not print "GRS certified"; it prints GRTS / RCS with the warning attached. | Read the register on `quality.html`; read the physical certificate | | |
| 2.11 | Every water, effluent, power, steam and connected-load figure is a measured value with its period stated. There is **no zero-liquid-discharge claim** anywhere. | Read the environment section of `capacity.html` | | |
| 2.12 | Every published tolerance — GSM, width, shrinkage — names the test method behind it, and that method is one the business actually uses. | Read `quality.html` | | |
| 2.13 | Employee count, built-up area and year established each carry the date or the record they came from. A bare number is a claim that goes stale. | Read `about.html` and `facility.html` | | |
| 2.14 | Lead times, lot minimums, office hours and the reply commitment are commitments the business can keep, and the person who can keep them has confirmed it in writing. | Read them aloud to the person who will keep them | | |
| 2.15 | Every row of the certification register on `quality.html` reads one of four things: **held**, **in progress**, **available on request**, or **not held**. No row is left open. | Read the register | | |
| 2.16 | Industry figures shown for context — the 6,000–25,000 kg/day band, the 30–60 day dyeing range, the effluent limits, the water benchmarks — are labelled on the page as industry range, and are not presented as this plant's own figures. | Read the captions and notes around each figure | | |

---

## 3. Legal and identity

This section protects the business, not the website. It is first in the queue
because of what happened to other Faisalabad processors: **five of the eleven
domains listed for Faisalabad units by their own trade association now belong to
somebody else** — one to a tour operator, one to a gambling site (**VERIFIED**,
research brief §A2–A3).

| # | What must be true | How to check | P/F | Checked by, date |
|---|---|---|---|---|
| 3.1 | `aljillanitex.com` is registered and resolves — it returns an address record and a name server record. As of the research, it had **none** and the registry returned 404, meaning it was unregistered and could be taken by anyone. | Look the domain up in a browser | | |
| 3.2 | The domain is **locked** at the registrar so it cannot be transferred without a code the company holds. | Registrar settings | | |
| 3.3 | Auto-renew is on, the renewal date is in a calendar, and there is a reminder one month before it. | Registrar settings and the calendar | | |
| 3.4 | DNSSEC is on at the registrar and the record validates. | Registrar / DNSSEC checker | | |
| 3.5 | The site is served over HTTPS, and typing `http://` by hand takes you to the secure version automatically. | Type the address with and without `https://` | | |
| 3.6 | The security certificate covers both `aljillanitex.com` and `www.aljillanitex.com`, and the whole site uses the **same** version of the address — no page pointing at one and another at the other. | Open the padlock; check every canonical URL | | |
| 3.7 | The telephone number on the site **rings**. Make the call. | Phone call, written down here: | | |
| 3.8 | The fax number on the site **receives a fax**. Send one and confirm it arrives. | Send it, confirm here: | | |
| 3.9 | The email address on the site **receives a reply**. Send from outside the company and wait. | Send it, record the reply time here: | | |
| 3.10 | The WhatsApp number on the site is the real one and is answered. The draft carries the placeholder `923000000000` in all nine pages and in two telephone links — **every one of those must be gone**. | Search the site files for `923000000000`; message the number | | |
| 3.11 | Every email address published is a role-based mailbox that a person reads (`info@`, and any of `orders@`, `sales@`, `quality@`, `accounts@` that actually exist). Send to each one. | Read each address, send to each one | | |
| 3.12 | The entity named on the website is the entity that signs the contract and issues the invoice. If they differ, the site says so in as many words. | Compare the site, the quotation, the invoice and the registration document | | |
| 3.13 | The address published is an address a courier can actually find. If the registered office and the plant are different places, both are stated. | Compare with the utility bill or plot document | | |
| 3.14 | The logo, the favicon and the shared link picture were made for this business, with written permission from whoever drew them. | Ask, and keep the permission | | |
| 3.15 | No NTN or STR is printed on the site unless the accountant has confirmed it in writing. | Search all nine pages | | |

---

## 4. Technical

Nothing here is a matter of taste. Each line is a number, a file or a result.

### The budgets

Copy the budget figures out of `docs/05-TECHNICAL.md` into the Budget column
before you start. If that file is not there on the day you sign, this section is a
**FAIL** — a budget nobody can point at is not a budget.

| Measure | Budget (from `05-TECHNICAL.md`) | Measured on the day | P/F |
|---|---|---|---|
| Page weight, heaviest page | ______ | ______ | |
| Requests per page | ______ | ______ | |
| JavaScript, total | ______ | ______ | |
| CSS, total | ______ | ______ | |
| Largest Contentful Paint (optional field data) | ______ | ______ | |

Draft build for comparison — **MEASURED** 30 Sep 2026, uncompressed bytes from the
files on disk: CSS 43,428 B; JavaScript 9,754 B; heaviest page 87,772 B; lightest
page 72,436 B; 4 requests per page; no web fonts. **These will change.** The
photographs have not been added yet, and they are the heaviest thing on the site.
Measure on the day, with the real images in place, and write the new numbers in
the column above.

For reference only, Google's published thresholds for the three Core Web Vitals
are 2.5 s, 200 ms and 0.1 at the 75th percentile, assessed on field data
(**VERIFIED**, research brief §D1).

### The checks

| # | What must be true | How to check | P/F | Checked by, date |
|---|---|---|---|---|
| 4.1 | The budget table above is filled in, and every figure is inside it. | Fill it in, compare | | |
| 4.2 | Every one of the nine pages loads over HTTPS from the real domain and returns "OK". Not from a folder on your own computer. | Open each address in a private window | | |
| 4.3 | The browser console is empty on all nine pages — no errors, no red lines. Open the developer tools, reload each page. | Console | | |
| 4.4 | The site still works with JavaScript switched off. Every page is readable and every link works with scripts disabled. | Turn JavaScript off in the browser, load all nine pages | | |
| 4.5 | No broken link anywhere. Click every link in the site, including footer links. One still needs a decision: the facility page links to `docs/06-CLIENT-CHECKLIST.md`, and `docs/` is not published, so a visitor would get a 404. Publish `docs/`, or replace the link with the capture instructions as plain words. | Click everything | | |
| 4.6 | No broken image. Every picture referenced by the site exists and appears. | Look at each page | | |
| 4.7 | The structured data on each page parses with no errors in a schema validator. | Paste each page into a schema validator | | |
| 4.8 | The structured data matches what the page actually says. The draft carries `"streetAddress": "TO CONFIRM"` in the homepage organisation block — that must be replaced with the real address or removed. | Read the JSON against the visible page | | |
| 4.9 | Every page has a canonical address, no two pages claim the same one, and each matches the address the page is actually served from. | Read the canonical tag on each page | | |
| 4.10 | `sitemap.xml` lists **exactly the nine live pages** — no more, no fewer — and every one of them loads. | Open `sitemap.xml` and compare against the nine pages | | |
| 4.11 | Every `lastmod` date in `sitemap.xml` is the real publication date. The draft says 2026-08-01 on all nine. | Read the file | | |
| 4.12 | `robots.txt` is live at the root of the domain and does not block the site. The permissions given to AI crawlers are a deliberate decision — one line of comment each — and they are still there. | Open `https://www.aljillanitex.com/robots.txt` | | |
| 4.13 | No page contains `noindex`, and no page blocks itself with a robots meta tag. | Search all nine pages | | |
| 4.14 | `site.webmanifest` loads and both of its icons exist. | Open the file, open each icon | | |
| 4.15 | The shared link picture (`og-default.png`) is the real one, at 1200 × 630, regenerated from the finished brand. | Share a link into a chat and look at the preview | | |
| 4.16 | The site loads from a slow connection without collapsing. Test on mobile data, not on office Wi-Fi. | Phone, mobile data | | |

---

## 5. Accessibility

The bar here is WCAG 2.2 Level AA. The specific things that matter for this site are
spelled out in the research brief §D4. Two of them are quoted here because they bind
on this build: **every interactive target must be at least 24 × 24 CSS pixels**
(SC 2.5.8), and **a sticky header or bar must never cover a focused element**
(SC 2.4.11).

| # | What must be true | How to check | P/F | Checked by, date |
|---|---|---|---|---|
| 5.1 | Every control a person has to hit — menu items, buttons, links, form fields, footer links, scrollable tables — is at least 24 × 24 CSS pixels. Measure, do not eyeball. | Browser element inspector, every page | | |
| 5.2 | The page still works with images switched off. Every fact on the site is readable as text. **No photograph may be the only place a number appears.** | Switch images off in the browser, read all nine pages | | |
| 5.3 | Focus is always visible. Press Tab repeatedly through a page; a clear outline appears on everything you land on — including the skip link and the tables. | Keyboard only | | |
| 5.4 | The whole site can be operated with the keyboard alone: Tab, Shift+Tab, Enter, Space, Escape. | Keyboard only, all nine pages | | |
| 5.5 | The skip link works. On first load, press Tab once — the first thing you reach is "Skip to main content" — and press Enter to land in the main text. | Keyboard only, any page | | |
| 5.6 | There is no CAPTCHA anywhere. | Look at the contact form | | |
| 5.7 | Error messages say how to fix the problem. Send the contact form with a broken email address and a two-digit phone number and read the two messages aloud. | Contact page | | |
| 5.8 | The mobile menu opens with the keyboard, closes with Escape, and returns focus to the button that opened it. | Keyboard only, narrow window | | |
| 5.9 | No field on the enquiry form asks twice for the same information, and no field uses placeholder text as its only label. | Contact page | | |
| 5.10 | The contact channels appear in the **same order on every page** — WhatsApp, email, telephone, fax. `contact.html` is the reference order; check the other pages against it. | Compare the nine pages | | |
| 5.11 | Nothing on the site moves or animates on its own. If you have asked your device to reduce motion, the site respects it. | Load each page and wait | | |
| 5.12 | Contrast has been re-checked on **any** colour changed since the design was signed off. Body text needs 4.5 : 1; large text and anything you must be able to see in order to operate a control needs 3 : 1. If no colour changed, write "no colour changed" in the cell — that is a valid pass. | Contrast checker, every changed colour | | |
| 5.13 | The sticky header and the WhatsApp bar never cover the last line of a page, and never cover whatever you have just focused with the keyboard. | Keyboard through every page to the end | | |

---

## 6. Mobile

Pakistan is 64.5% desktop and 35.5% mobile by connection (**MEASURED**,
StatCounter August 2026, research brief §D7). Both matter. Mobile is checked on a
real phone, because most people in this trade will open a link on one.

| # | What must be true | How to check | P/F | Checked by, date |
|---|---|---|---|---|
| 6.1 | Every page has been opened on a real phone, on mobile data — not only in a browser preview on a computer. | Nine pages, on the owner's own phone | | |
| 6.2 | The WhatsApp bar at the bottom does not cover any content. Scroll to the very bottom of every page: the last line is fully readable. | Nine pages | | |
| 6.3 | The WhatsApp bar does not cover a control you have just tapped or focused. Work through the enquiry form on the phone, field by field. | Contact page on the phone | | |
| 6.4 | Wide tables scroll sideways inside their own box. They do not push the rest of the page out of line. Check the machine table and the certificate log book in particular. | `capacity.html`, `quality.html`, and the three process pages | | |
| 6.5 | The navigation drawer opens when the Menu button is tapped. | Any page, narrow screen | | |
| 6.6 | The navigation drawer closes when **Escape** is pressed. On a phone, tap outside it. | Phone with a keyboard, and in the browser | | |
| 6.7 | The open drawer does not trap you. You can tab straight out of it and reach the rest of the page without closing it. | Keyboard only | | |
| 6.8 | Nothing overflows sideways on a 360-pixel-wide screen. Look for a horizontal scrollbar on any page. | Phone, smallest common size | | |
| 6.9 | Tapping the telephone number opens the dialler with the right number, and tapping the WhatsApp button opens WhatsApp with the real number and the right message. | Tap both | | |
| 6.10 | The phone's own accessibility check reports no problem on any page. | Phone: Settings → Accessibility → Accessibility scan | | |

---

## 7. Privacy and honesty

Two separate promises. The first is about what the site does with a visitor's
details. The second is about what it says.

| # | What must be true | How to check | P/F | Checked by, date |
|---|---|---|---|---|
| 7.1 | The site collects nothing. No analytics, no tracking, no pixels, no cookies, no third-party scripts, no fonts loaded from anywhere else. Open the network panel on each page: the only requests are to this domain. | Browser network panel, nine pages | | |
| 7.2 | The enquiry form sends nothing to any server. It opens WhatsApp with the message already typed. Watch the network panel while submitting — nothing is transmitted. | Contact page, network panel | | |
| 7.3 | There is no cookie banner. If one ever appears, something has changed and this section must be rechecked. | Load any page | | |
| 7.4 | The list of promises published on `quality.html` is still true: no "leading" or number one claim, no zero-defect claim, no client logo wall, no stock photography, no unverified testimonials, no zero-discharge claim, no 100% quality claim, no round-the-clock promise. | Read the list, then check the whole site against each line | | |
| 7.5 | No photograph shows a customer's name, an order book, order paperwork, a screen with buyer data, or another company's roll labels. Any recognisable person has given written permission. | Look at every photograph at full size | | |
| 7.6 | Any document published in `assets/certificates/` or `assets/documents/` contains no confidential information belonging to a customer or another company. | Open every PDF | | |

---

## 8. Search

People find this business by typing, so this section is short and blunt. Across the
114 Faisalabad processing units on their own trade association's directory, **all
114 carry a fax number, exactly one carries a mobile number, and not one lists
WhatsApp** (**VERIFIED**, research brief §A5). A site that can be found — and found
by an assistant answering a buyer's question — is worth more than it costs.

| # | What must be true | How to check | P/F | Checked by, date |
|---|---|---|---|---|
| 8.1 | Google Search Console is set up for the real domain, and the property is verified — and the owner, not only the person who built the site, has access. | Search Console | | |
| 8.2 | The sitemap is submitted in Search Console and reads "Success". | Search Console → Sitemaps | | |
| 8.3 | `robots.txt` is live at the root address and points at the sitemap. | Open it in the browser | | |
| 8.4 | No page anywhere says `noindex`, and no internal link is marked `nofollow`. | Search all nine pages | | |
| 8.5 | All nine pages can be indexed, and the ones that are not are not indexed **on purpose**, with the reason recorded here: | ______________ | | |
| 8.6 | Every page has its own title and its own description — nine different sentences, not one sentence repeated. | Read the nine titles together | | |
| 8.7 | The homepage answers, above the fold, who the company is, where it is, what it does and how to reach it. Roughly 62% of AI assistant referrals land on the homepage, so that page has to stand alone (**VERIFIED**, §D5). | Read the homepage on a phone | | |
| 8.8 | Sharing a link into WhatsApp, LinkedIn or email shows the right picture and the right text. | Share one link | | |
| 8.9 | The business is listed in its own trade association's directory with a working domain, and — if a certificate is ever held — listed in the issuing body's own buying guide. A certificate nobody can find is invisible. | Association directory; buying guide | | |

---

## 9. Ownership

The most common way a small business loses a website is not a failure of the
website. It is that one person knew the password and that person left. Five of the
eleven domains on the association's Faisalabad list now belong to other people.

**Fill this table in and have the owner confirm it in writing. An unwritten
ownership arrangement is not ownership.**

| Account | Who holds it (name) | Where the password is stored | Second person who can get in | Owner confirmed in writing |
|---|---|---|---|---|
| Domain registrar | | | | |
| Hosting | | | | |
| DNS | | | | |
| Email hosting / domain email | | | | |
| Google Search Console | | | | |
| Any other service the site depends on | | | | |

| # | What must be true | How to check | P/F | Checked by, date |
|---|---|---|---|---|
| 9.1 | No account above is held in a single person's name or on a personal email address that disappears when they leave the business. | Read the table above | | |
| 9.2 | At least two people can log in to every account above. | Try, from each account | | |
| 9.3 | The owner holds a complete copy of the website files — every page, the stylesheet, the script, the images — and knows where it is. | Ask the owner to produce the folder | | |
| 9.4 | The owner can open a page in Notepad, change a word, save it and put it back online, without asking anyone. | Watch them do it once | | |
| 9.5 | The renewal dates for the domain, the hosting and every certificate are in one calendar, with reminders set before each one. | Open the calendar | | |
| 9.6 | The person who filled in this sheet is not the same person who signs it. | Compare the two names at the end | | |

---

## Blocking items

These five stop the launch regardless of anything else on this sheet. If any one of
them is open, the answer is **no-go**.

- [ ] **`aljillanitex.com` is registered and resolves.** Until this is fixed, the
      site points at nothing, the email address cannot receive anything, and anyone
      can take the name. Checked first, every time.
- [ ] **The placeholder number `923000000000` is gone from every file.** A live
      telephone link that reaches a stranger is worse than no link at all.
- [ ] **The legal entity name is confirmed from the registration document** and
      matches every page.
- [ ] **No claim on the site is outrunning the evidence.** This is the one failure
      that cannot be fixed quietly later.
- [ ] **The broken link on the facility page is fixed.** It offers the visitor a
      document that is not published, which is exactly the kind of small failure
      that makes a buyer doubt the rest of the page.

---

## Sign-off

Print this page. Sign it only when every section above is complete.

**What is being approved**

| | |
|---|---|
| Website address | `https://www.aljillanitex.com/` |
| Pages approved | 9 |
| Build being approved (the date on the files being published) | ____________________ |
| Date of this check | ____________________ |
| Checked by (name and role) | ____________________ |
| Read and signed by (name and role) | ____________________ |

**Section results**

| Section | Result | Name | Date |
|---|---|---|---|
| 1. Content | PASS / FAIL | | |
| 2. Facts | PASS / FAIL | | |
| 3. Legal and identity | PASS / FAIL | | |
| 4. Technical | PASS / FAIL | | |
| 5. Accessibility | PASS / FAIL | | |
| 6. Mobile | PASS / FAIL | | |
| 7. Privacy and honesty | PASS / FAIL | | |
| 8. Search | PASS / FAIL | | |
| 9. Ownership | PASS / FAIL | | |

**Any item deliberately accepted as open** — write it here, with the reason and the
person who accepted it. An accepted item is a decision. An unrecorded one is an
oversight.

| Item | Why it is accepted | Accepted by | Review on |
|---|---|---|---|
| | | | |
| | | | |

**Decision** — tick one

☐ **GO — publish**  &nbsp;&nbsp; ☐ **NO-GO — do not publish**

**Statement to be signed**

> I have read the live website, page by page, and I confirm that it makes no claim
> about this business that we cannot evidence with a document, a record or a
> nameplate. Where we hold nothing, the website says so. Where a figure is still
> open, it is either removed from the page or labelled as unconfirmed — and I
> accept that decision in writing.

Signature ______________________  Name ______________________  Role ______________________

Date ______________________

*Second signature — read by, not written by*

Signature ______________________  Name ______________________  Role ______________________

Date ______________________

### After signing

Keep the signed sheet with the launch records. Run sections **1**, **2** and **9**
again whenever a published figure changes, a certificate is renewed or expires, or
an account holder leaves the business. A signed sheet describes one version of the
site, and the site will change.
