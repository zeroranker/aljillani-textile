# 07 — Launch Plan

**Al-Jilanee Textile Industry (Pvt) Ltd — website launch**
Read this document in order. Section 0 comes before everything else, and it is not
about the website.

---

## Section 0 — The domain emergency

**Do this before anything else in this document.**

### What the problem is

The All Pakistan Textile Processing Mills Association publishes this company as:

> **M/S AL-JILANEE TEXTILE INDUSTRY (PVT) LTD**, Power House Road, Abdullahpur,
> Faisalabad — website: **www.aljillanitex.com**

That domain **does not exist.** Verified three ways:

| Check | Result |
|---|---|
| DNS lookup (`Resolve-DnsName`) | No A record, no NS record. "DNS name does not exist." |
| RDAP registry lookup (`rdap.org/domain/aljillanitex.com`) | **HTTP 404 — unregistered at the registry** |
| HTTP fetch | HTTP 503 |

A 404 from RDAP means the domain is not parked, not misconfigured and not expired
in the registrar's grace period. **It is available to anyone who wants it.**

### Why this is a business risk, not a web task

This is not hypothetical for the industry. I resolved and fetched all eleven unique
domains listed on the trade association's own Faisalabad page. The result:

| Listed domain | Status today |
|---|---|
| `aljillanitex.com` | **Unregistered** |
| `habibfabrics.com` | No DNS |
| `matex.pk` | No DNS |
| `sargodhatex.com` | No DNS |
| `ittehadtextile.com` | Resolves, serves **HTTP 402** — unpaid parked storefront |
| `rashidtex.com` | Repurposed → B2C clothing retail |
| `rashidfabrics.com` | Repurposed → B2C retail |
| **`sitara.com`** | **Hijacked → "Sitara Travel", a Central-Asia tour operator** |
| **`mj-textile.com`** | **Hijacked → Chinese-language gambling site** |
| `ahsandigital.com` | Abandoned → a freelance web designer's portfolio |
| `saeedfabrics.com` | Live and genuine |

**Four dead, one parked, five belonging to other people. One working. Roughly 9%.**

The consequence for a small processing unit is worse than a lost lead. **The domain
is the company's only formal public identity** outside the association's printed
directory. A buyer who follows an association link to a hijacked domain is not
just misinformed — they are handed someone else's business and may conclude that
*this* company is unreliable.

### The fix — do these in order

**1. Check whether it has already been taken.**
Open a registrar and try to search for `aljillanitex.com`. If it is available, buy
it **today**.

**2. If it has been taken**, do not panic and do not buy it back from whoever holds
it. Register a clean domain you control and treat the old one as lost. Options, in
order of preference:

- `aljillanitee.com` (one `i`) — a one-character typo costs almost nothing if it is
  used consistently everywhere, and it is the actual registered name of several
  trading companies
- `aljillanitex.com.pk` — country-code domain, clearly local, clearly this company
- The name plus the sector, e.g. `aljillaneetextile.com` — least elegant, most
  memorable

Whatever you choose, **change the association directory entry** so buyers are
sent somewhere real.

**3. Once you hold it, lock it down.** These five settings are the difference
between a domain you own and a domain you rented:

| Setting | Value | Why |
|---|---|---|
| **Registrar lock** | ON | Stops anyone, including a compromised account, from transferring it away |
| **Auto-renew** | ON, multi-year | The most common cause of a hijack is a lapsed domain. Five of the eleven above show signs of this |
| **Renewal reminder** | 30 days before expiry, to the owner's mobile — not the registrar's | Auto-renew fails silently more often than people expect |
| **2FA** | ON, on the registrar account | Hijacks start with a compromised email account |
| **DNSSEC** | ON, if the registrar supports it | Makes DNS spoofing materially harder |

**4. Check what else is in the company's name.**
Before launch, search for other freebies in the name: a Facebook page, a LinkedIn
company page, an Instagram account, a Google Business Profile, an APTPMA listing,
a trade directory entry. A DuckDuckGo search for the company currently returns
**exactly one result** — the association directory. There is no social presence at
all. Claiming those is cheap, takes an afternoon, and is the same play as the
domain.

### Who must hold what

Write this down, on paper, and give a copy to the owner. Every one of these
accounts should be registered to a company email address, not a personal one.

| Asset | Account | Held by |
|---|---|---|
| Domain registrar | ☐ | ☐ |
| DNS / nameserver | ☐ | ☐ |
| Web hosting | ☐ | ☐ |
| Company email | ☐ | ☐ |
| Search Console | ☐ | ☐ |
| Certificate-directory logins (if any) | ☐ | ☐ |

**When an owner leaves or the business is sold, the website goes with them or it
does not go at all.** This is the single most common way a small business loses
its web presence, and it is entirely avoidable.

---

## Section 1 — The content gate

**The rule: nothing publishes with a placeholder on it.**

Every unconfirmed fact on this site renders as a dashed `TO CONFIRM` chip, and
every page carries a rust DRAFT ribbon in draft mode. These are not decoration —
they are a publication control.

Before launch:

- [ ] Run a search across all nine files for `TO CONFIRM` — **the result must be zero**
- [ ] Run a search for `EDIT:` — **the result must be zero**
- [ ] Search for `Lorem` — must be zero
- [ ] Search for `placeholder`, `example.com`, `TBC`, `N/A`, `xxx` — must be zero
- [ ] Remove `data-draft="true"` from the `<html>` tag on all nine pages
- [ ] Every machine make on `capacity.html` is legible on a photographed nameplate
- [ ] Every number on `capacity.html` traces to a production record, not a target
- [ ] Every certificate row on `quality.html` has a real number, body, scope and expiry
- [ ] The company history paragraph on `about.html` is written by someone who works there
- [ ] No superlative survives that cannot be evidenced

**Worked example of the search.** In a code editor, open the project folder,
select all files, and search for `TO CONFIRM`. You should get zero results. If you
get results, the site is not ready.

---

## Section 2 — The technical gate

Full detail and the self-test script are in `05-TECHNICAL.md`. The summary:

| Check | Expected | Result |
|---|---|---|
| Worst-case first page load | **22.5 KB** (index.html, compressed) | ☐ |
| Repeat page load | **12.8 KB** (CSS + JS cached) | ☐ |
| JavaScript | **3.4 KB** compressed | ☐ |
| Requests per page | 3 (HTML, CSS, JS) — no images above the fold | ☐ |
| Webfonts | **0** | ☐ |
| Broken internal links | 0 | ☐ |
| Console errors | 0 | ☐ |
| Structured data | Valid JSON-LD on all 9 pages | ☐ |
| Canonical URLs | Present and absolute on all 9 | ☐ |
| HTTPS | Working, with an auto-renewing certificate | ☐ |
| `robots.txt` | Reachable, allows AI crawlers, points at the sitemap | ☐ |
| `sitemap.xml` | Contains exactly the 9 live pages | ☐ |

**Context for these numbers.** The median mobile home page on the web is about
2,559 KB across 72 requests. This site's heaviest page is 22.5 KB. A buyer
opening the site on a connection from Faisalabad to Dubai or from a Lagos
warehouse office gets the whole thing in a single round trip.

---

## Section 3 — The accessibility gate

The target is **WCAG 2.2 Level AA**. You do not need to buy a tool to check the
things that matter most here.

### The criteria that actually bind on this site

| Criterion | Level | What it means here | How to self-test |
|---|---|---|---|
| **2.5.8 Target Size (Minimum)** | AA | Every tap target is at least **24 × 24 CSS pixels** | Zoom to 200% in your browser. If two links become hard to hit separately, this fails |
| **2.4.11 Focus Not Obscured (Minimum)** | AA | The sticky header and WhatsApp bar must not cover something you have focused | Press Tab repeatedly through the page. Watch the last few items near the bottom |
| **3.2.6 Consistent Help** | A | Contact channels appear in the same order everywhere | Check the contact block on three different pages — order should be identical |
| **3.3.7 Redundant Entry** | A | The form never asks twice for the same thing | Fill the enquiry form once; nothing should repeat |
| **3.3.8 Accessible Authentication** | AA | **There is no CAPTCHA, deliberately.** A CAPTCHA fails this criterion | Confirm no CAPTCHA exists anywhere |
| 1.4.3 Contrast (Minimum) | AA | 4.5:1 for body text, 3:1 for large text | See below |
| 2.1.1 / 2.4.7 | A | Everything works from the keyboard alone | Unplug your mouse and try to reach every link and submit the form |

**Note:** WCAG 2.2 **removed** SC 4.1.1 Parsing. Invalid markup is no longer a
conformance failure. This site is written with valid semantics anyway.

### Self-tests that need no software

- [ ] **Keyboard only.** Put the mouse down. Reach the skip link, every nav item, every
      form field, and submit the form. You should never get stuck.
- [ ] **Focus visible.** Tab through the page. A focus ring must be visible at all
      times. Never remove it with `outline: none` without replacing it.
- [ ] **No images.** Turn images off in your browser settings. Nothing should break
      and nothing should disappear. The site has no content images by design.
- [ ] **200% zoom.** The page must still work. Text must not overlap or vanish.
- [ ] **Phone, real device.** Not a simulator. The sticky bar must not cover the
      last field of the form.
- [ ] **Escape closes the menu.** On a phone, open the navigation, press Escape.
      The menu should close.
- [ ] **Error messages.** Submit the form with a bad email. The message must say how
      to fix it, not merely "invalid input".

### Contrast, already verified

The design tokens were hand-checked and the ratios are **not rounded**:

| Pair | Ratio | Requirement | |
|---|---|---|---|
| ink on paper | 16.3:1 | 4.5:1 | pass |
| ink-2 on paper | 9.4:1 | 4.5:1 | pass |
| ink-3 on paper | 5.4:1 | 4.5:1 | pass |
| white on indigo | 14.2:1 | 4.5:1 | pass |
| white on signal | 6.4:1 | 4.5:1 | pass |

**If you change any colour, you must re-check it.** Use a free contrast checker.
A ratio that passes only after rounding up is a ratio that fails.

---

## Section 4 — Domain, DNS, HTTPS and email

In order:

- [ ] Domain registered and locked (Section 0)
- [ ] Nameservers pointed at the host
- [ ] HTTPS enabled with an **auto-renewing** certificate — a static site gets one
      free; never disable auto-renewal on it
- [ ] **www and non-www both resolve**, and one 301-redirects to the other. Pick
      `www.` and redirect the bare domain to it, or the reverse — but only one
      canonical answer, or you split your own search authority
- [ ] `http://` redirects to `https://`
- [ ] Company email on the domain: `info@`, plus role-based mailboxes
- [ ] The email addresses on `contact.html` and in the footer are **real and
      monitored**

**On role-based mailboxes.** The best contact block in the Faisalabad sample
publishes separate commercial and HR addresses, a landline, a UAN, a fax, and named
internal extensions. That is a deliberate signal: it says a person answers, and
you can find out who.

For a unit this size, three mailboxes are enough:

| Mailbox | Goes to | Purpose |
|---|---|---|
| `info@` | The person who answers everything | General enquiries |
| `production@` or `dyeing@` | The shift or floor lead | Technical and order questions |
| `accounts@` | The office | Invoices, purchase orders, documents |

**Avoid a free-mail address as the only contact.** Forty-nine of the 114
association records use Gmail or similar as their sole business address, and one
address is copy-pasted across six different companies. It is the clearest signal
available that a business is not yet organised.

**A fax number is expected in this market.** The association directory carries one
for 100% of its Faisalabad members. If the business has one, publish it.

---

## Section 5 — Analytics

**The recommendation is to launch with none.**

A static nine-page site with no cookies has nothing to declare, no banner to show
and no consent to collect. Adding analytics puts a privacy notice and a consent
mechanism in front of every single visitor, in exchange for data you already know
the answer to: *how many enquiries arrive, and what are they about?*

**And the honest test is that the website does not generate the business.** The
research is unambiguous — the US Department of Commerce's own guide says face-to-face
contact "is the business norm" in Pakistan, and that internet selling is the newer
channel on top of it. The association directory and word of mouth are still how
Faisalabad units get found.

### What to do instead

- **Count the enquiries yourself.** Every enquiry arrives by WhatsApp, email or
  phone. A notebook is a perfectly good analytics system at this volume.
- **Keep a one-line log:** date, buyer, country, process, quantity, outcome. After
  six months you will know more about your own business than any dashboard tells you.
- **Use Search Console** (Section 6) for the one thing a spreadsheet cannot answer:
  what people are searching for when they find you.
- **Ask buyers one question in your first reply:** "How did you find us?" It is
  the most accurate attribution you will ever get, and it costs nothing.

**If you later add analytics**, choose a tool that does not require cookies, does
not build a cross-site profile, and does not need a consent banner under GDPR. If
a tool needs a banner, it is wrong for this site.

---

## Section 6 — Search Console and sitemaps

- [ ] Add the property to **Google Search Console** and verify by DNS
- [ ] Add the property to **Bing Webmaster Tools**
- [ ] Submit `https://www.aljillanitex.com/sitemap.xml`
- [ ] Confirm `robots.txt` is reachable at the root
- [ ] Confirm the site passes a URL inspection for the homepage

**On allowing AI assistants.** This site's `robots.txt` explicitly allows
`GPTBot`, `ClaudeBot`, `Claude-User`, `PerplexityBot` and `Google-Extended`, each
with a comment explaining why.

This is a deliberate commercial decision, not an oversight. Roughly **95% of
websites block these crawlers**, usually by copying a template and never
considering it. When an overseas buyer asks ChatGPT or Claude for fabric
processing in Faisalabad, a permitted small supplier is simply eligible to be
mentioned and a blocked one is not. It costs nothing, it collects no data, and it
requires the homepage to be a self-contained summary — which it is.

**Expect very little traffic.** Be honest with yourself about this. The realistic
traffic is a handful of visitors a month from people already looking for a
processor. The site's job is to make those visitors certain enough to send an
enquiry, not to attract a large audience. Judge it by enquiries, not by sessions.

---

## Section 7 — Certificate directory self-listing

**Only relevant once a certificate is actually held.**

A certificate that exists but is not published online is commercially invisible.
This is stated explicitly by the certifying bodies themselves.

- [ ] **OEKO-TEX** — log in to OEKO-TEX Connect and set the company profile to
      appear in the Buying Guide. This takes minutes and is the single highest-value
      follow-up available.
- [ ] **GOTS / GRTS** — list in the Certified Suppliers Database
- [ ] Any other scheme — check whether that body runs a public register

**Do this in the same week the certificate is issued**, and every time it renews.
A lapsed entry in a public register is worse than no entry.

### The GRS check

If any certificate, letterhead, sample pack or existing document says **"GRS
certified"**, re-verify it against the physical certificate before that wording is
reused anywhere. The body that operates GOTS now describes **GRTS** as a new textile
processing standard covering a broader range of eligible fibres, announced
14 September 2026, with GOTS at Version 8.1. Whether GRS is formally withdrawn or in
transition is unconfirmed — so confirm, do not assume, and do not publish the term
until you have.

---

## Section 8 — Launch day

| When | Action |
|---|---|
| Before anything goes live | Confirm Section 0 is complete and Section 1 search returns zero `TO CONFIRM` |
| Morning | Publish all files. Open the live site on a real phone, on mobile data, not office Wi-Fi |
| Morning | Test the enquiry form end to end. Confirm the WhatsApp message arrives with the right content |
| Morning | Send yourself a test enquiry from a different network. Confirm email and phone are live |
| Midday | Tell the five people who asked for this that it is live |
| Midday | **Update the APTPMA directory entry** with the correct working domain. This is the discovery channel — fixing it is worth more than anything else on this list |
| Afternoon | Submit the sitemap in Search Console |
| Afternoon | Ask three colleagues to open it on their phones and tell you the first thing they thought it was |
| Evening | Check the console for errors. There should be none |
| **Week 1** | Tell every existing contact by WhatsApp that the site exists, with the link |
| **Week 1** | Add the URL to the company email signature |
| **Month 1** | Ask every contact who visited to say what they thought of it. Change the thing they most often mention |

**The single most important launch-day action is updating the association
directory.** It is where Faisalabad buyers actually look, it is print-era and
unmaintained, and the entry currently points at a domain that does not exist.

---

## Section 9 — The first 30 days

### Do

- Answer every enquiry. Response speed is a bigger differentiator than any page on
  this site.
- Watch for the questions buyers ask that the site does not answer. Each one is a
  page or a paragraph to add.
- Note which page an enquiry came from, if you can tell.

### Do not

- **Do not redesign in month one.** The instinct will be strong. Resist it. Let the
  site collect a month of evidence first.
- **Do not add stock photography** because the facility page looks empty. Empty and
  honest beats full and false.
- **Do not add a client logo wall** because competitors have one. A buyer
  reverse-searches those logos and finds that none of them mean what the wall
  implies.
- **Do not add a blog.** Nine pages that are all true beats thirty pages that are
  mostly filler.
- **Do not add a cookie banner** — there is nothing to consent to.

### The 30-day review

Answer these four questions, in writing:

1. How many enquiries arrived, and from where?
2. What did they ask that the site did not answer?
3. What did they say made them hesitate?
4. What did they say convinced them?

Question 2 is a content roadmap. Question 3 is a design brief. Question 4 is the
thing to double down on.

---

## Section 10 — Rollback

This is a static site, which makes rollback unusually easy and unusually important
to set up **before** you need it.

**Before launch:**

- [ ] Keep a complete copy of the version you are replacing, if there is one
- [ ] Know exactly how to restore it (hosting control panel, FTP, or git)
- [ ] Keep every file in version control, even if that means a private repository
      you never think about again

**If something breaks after launch:**

1. **If the site is completely down** — hosting problem, not content. Check the
   hosting status, then the domain and DNS.
2. **If one page is broken** — restore that one file. This is the most common case
   and it is a 30-second fix.
3. **If the site says something false** — remove that claim immediately rather than
   reasoning about it. A wrong number on a live site is worse than a missing one.
4. **If the whole site looks wrong** — restore the previous version wholesale.

**If a fact turns out to be wrong after publication** — a capacity figure that was
never right, a machine that has been scrapped, a certificate that has expired —
remove it the same day. The credibility this site is built on is worth more than
any figure on it, and it is not recoverable once a buyer catches you out.

---

## Section 11 — Ownership handover

**Fill this in and sign it before launch. Not after.**

| Item | Detail |
|---|---|
| Domain registrar | _______________________ |
| Registrar account email | _______________________ |
| 2FA enabled? | ☐ Yes ☐ No |
| Auto-renew enabled? | ☐ Yes ☐ No |
| Renewal reminder set for | _______________________ |
| DNS / nameserver | _______________________ |
| Hosting provider | _______________________ |
| Company email provider | _______________________ |
| Search Console owner | _______________________ |
| **All of the above registered to** | _______________________ |

**A company email address, not a personal one.** If the person who built this
website leaves, the business loses the domain, the hosting and the site unless
these are held at the company level. Five of the eleven domains examined in this
research show the signs of exactly that having already happened somewhere in this
industry.

Hand a printed copy of this page, and a copy of the registrar and hosting login
details, to the owner.

---

## Section 12 — Post-launch maintenance

### Weekly
- [ ] Check for enquiries that have gone unanswered

### Monthly
- [ ] Read every enquiry. Note recurring questions.
- [ ] Update the sitemap `<lastmod>` dates if you changed pages
- [ ] Check the site loads on a real phone

### Quarterly
- [ ] Review the machine list against the actual floor
- [ ] Review the capacity figures against actual production
- [ ] Check Search Console for new search terms and add anything valuable to an
      existing page
- [ ] Walk the site with `TO CONFIRM` in the search box — it should be empty

### Annually
- [ ] **Domain renewal** — confirm auto-renew is still on. Set the reminder 30 days out.
- [ ] **Every certificate expiry** in the log book, with a two-week warning
- [ ] Re-verify the contact details — people change jobs
- [ ] Re-read the site as a buyer would, and ask whether anything has become
      untrue. Anything that has, comes out.

---

## Launch sign-off

| Gate | Result | Date | Signed |
|---|---|---|---|
| §0 Domain secured | ☐ Pass ☐ Fail | | |
| §1 Content — zero placeholders | ☐ Pass ☐ Fail | | |
| §2 Technical | ☐ Pass ☐ Fail | | |
| §3 Accessibility WCAG 2.2 AA | ☐ Pass ☐ Fail | | |
| §4 DNS, HTTPS, email | ☐ Pass ☐ Fail | | |
| §5 Analytics decision | ☐ Pass ☐ Fail | | |
| §6 Search Console | ☐ Pass ☐ Fail | | |
| §7 Certificates (if held) | ☐ Pass ☐ N/A | | |
| §10 Rollback ready | ☐ Pass ☐ Fail | | |
| §11 Ownership recorded | ☐ Pass ☐ Fail | | |
| **GO / NO-GO** | ☐ **GO** ☐ **NO-GO** | | |

**Every gate must pass. A "no-go" is a good outcome — it means the check was worth
running.**
