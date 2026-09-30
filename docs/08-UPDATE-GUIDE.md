# Updating the Al-Jilanee Textile Website

This document is for the person who will look after the website day to day. It
assumes you have never edited a web page before. It does not assume you write
code, and it does not assume you use a special program.

Read section 1 and section 2 first. Then come back to section 4 when you have
something real to change.

---

## Editing mode: add `?edit` to the address

**Do this first, every time, before you edit anything.**

Type `?edit` onto the end of any page address in your browser and press Enter:

```text
https://aljillanitex.com/capacity.html?edit
```

Fifty-three places across the site carry a blue note written for you. They say
what to put there, and what a good answer looks like. They are hidden from a
buyer, and they only appear when you add `?edit`.

Without it you are editing blind, and several of these notes exist precisely
because the honest answer is not obvious from the sentence around it.

A blue bar appears at the top of the page to remind you which mode you are in.

**Two different things, do not confuse them:**

| | What it is | Who sees it |
|---|---|---|
| Blue note | An instruction to you about what to write | Only you, and only with `?edit` |
| Dashed `TO CONFIRM` chip | A claim the site cannot yet stand behind | Every buyer, always, until you replace it |

The chip is not a note to yourself. It is the site telling the truth about what
it does not know. You remove it by **finding out the real figure**, never by
deleting the chip.

## A note on the words this guide uses

The research behind this website labels every fact one of four ways. The same
labels are used here, so you can tell how much weight to put on any statement.

| Label | What it means |
|---|---|
| **VERIFIED** | Somebody checked it against the original source. |
| **MEASURED** | It was counted or calculated from the actual files. You can repeat the count yourself. |
| **UNVERIFIED** | Plausible and widely repeated, but not confirmed against a source. |
| **UNKNOWN** | Nobody has found it out. Recorded as a question, never guessed. |

Two labels you will meet constantly in this guide:

- Anything marked **TO CONFIRM** on the website is a value nobody has been given
  yet. It is not a mistake. It is the site refusing to publish a number it
  cannot prove.
- The client's own phone number, address, machine makes, capacity figures,
  certificate numbers and staff names are all currently **UNKNOWN**. The website
  says so out loud. When you are given one, you replace the chip — you do not
  invent it.

If you ever feel tempted to type a plausible number into a gap, that is the one
moment this whole project is built to prevent.

---

## 1. What this website is

The Al-Jilanee Textile website is nine HTML files, one stylesheet, one small
script, and a folder of images. It is **MEASURED** at 301,621 bytes in total —
about 295 KB. For scale, an ordinary photograph taken on a modern phone is
measured in megabytes, not kilobytes.

There is no database. There is no login. There is nothing to install. There is
no build step — that phrase means there is no program that has to run before the
site can be shown, no folder called `dist`, no command line. What is on your
disk is exactly what a visitor's browser receives, and it works the moment the
files are on a web server.

The whole site also works with JavaScript switched off. **MEASURED**: the script
at `assets/js/site.js` only adds three conveniences — the mobile menu button,
pre-filled WhatsApp links, and the enquiry form. Turn scripting off in your
browser and every word, every number and every contact route is still there.
The script never asks the internet for anything (**MEASURED**: it contains no
network calls).

### The files, and where they live

All paths below are relative to the folder that holds `index.html`.

```
aljillani/
├── index.html          Homepage
├── dyeing.html         Dyeing and pretreatment
├── printing.html       Printing
├── finishing.html      Finishing
├── capacity.html       Capacity, machines, lead times
├── facility.html       The plant, photograph by photograph
├── quality.html        Quality and the certificate register
├── about.html          About the unit
├── contact.html        Contact and the enquiry form
├── robots.txt          Instructions for search engines
├── sitemap.xml         The list of pages, for search engines
├── site.webmanifest    The phone home-screen icon
├── llms.txt            A plain-text summary for AI assistants
├── assets/
│   ├── css/site.css    The whole stylesheet, one file
│   ├── js/site.js      The whole script, one file
│   └── img/            favicon.svg, logo-512.png,
│                       apple-touch-icon.png, og-default.png
└── docs/               This guide and the working papers
```

### Why it was built this way

Plain HTML was chosen on purpose, and the reason is in the research.

A hosted website builder sends a median mobile home page of **2,559 KB across 72
requests, carrying 646 KB of JavaScript** (**VERIFIED**, from the Web Almanac
2025 — see `docs/00-RESEARCH.md` §D2). The median time until the main content
of that page appeared was **4.7 seconds**. Home pages under 1 MB passed Google's
Core Web Vitals on mobile **57%** of the time — the web's own speed-and-
readability test. Pages over 5 MB passed **30%**.

This site loads under 300 KB with no framework, no web font and no analytics.

But the real reason is not speed. **It is this document.** A site made of plain
files can be explained to its owner in one sitting, because there is nothing
hidden behind it. If this site were built on a builder, the person maintaining
it would be clicking through someone else's interface, and the honest answer to
"can I change this myself?" would be "probably not". Here the answer is "yes,
open the file, change the words between two bits of punctuation, save".

---

## 2. What you can safely change

These edits cannot break the site. They change text only. You do not need to
touch any other file, and you do not need to ask anyone.

| What you can change | Where it lives | Why it is safe |
|---|---|---|
| The words in any existing paragraph | Anywhere in the `.html` files, between a `>` and a `<` | Plain text. The browser reads it as text. |
| A phone number | Wherever it is shown | Also plain text |
| A price or a rate, if you ever publish one | Inside a table cell | Plain text |
| A machine in the machine list | `capacity.html`, the `<table class="spec">` in the middle of the page | A table row is a self-contained line |
| A certification row | `quality.html`, the register and the log book | Same — a row is a self-contained line |
| The year in the footer | The `<p>` that begins `&copy;` — see section 4 | Plain text |
| Alt text on a photograph | The `alt="…"` inside an `<img>` | A text value, read aloud by screen readers |
| The wording of a `<summary>` question | `dyeing.html`, `printing.html`, `finishing.html` | Plain text |

**One rule covers all of it: if you are only changing words *between* the
angle brackets, you are safe. If you are changing the brackets themselves, stop
and read section 3.**

### The one exception to "words only"

The WhatsApp buttons are not plain text. Their link is assembled by the script
from the number stored in `data-wa` on the `<body>` tag. That is covered in full
in section 3 and in walkthrough 1.

---

## 3. What you must not change, and what breaks if you do

There are five things on this site that look ordinary and are not. Each one is
there for a reason a stranger would not guess.

### 3.1 The colour tokens at the top of `assets/css/site.css`

Open `assets/css/site.css`. Lines 22 to 104 are a block that starts with `:root`
and holds every colour, font size, spacing step and border radius the site uses.
Each one has a name, a value and a comment explaining what it is for:

```
  --ink:          #16181d;  /* body text on paper   — 16.3:1 */
  --ink-3:        #5c6270;  /* muted / meta         —  5.4:1 */
  --signal:       #a63d12;  /* rust. primary CTA. white on this = 6.4:1 */
```

Those ratios are **contrast ratios**. A contrast ratio is a way of writing down
how easy a colour is to read against another colour. The rule is simple: the
higher the number, the easier it is to read. Those figures were **MEASURED** by
hand against the WCAG 2.2 AA floor of 4.5:1 and are recorded in
`docs/00-RESEARCH.md` §D4:

| Text and background | Measured ratio | AA requirement |
|---|---|---|
| Body ink on paper | 16.3:1 | 4.5:1 — pass |
| Secondary ink on paper | 9.4:1 | 4.5:1 — pass |
| Muted ink on paper | 5.4:1 | 4.5:1 — pass |
| White on indigo | 14.2:1 | 4.5:1 — pass |
| White on rust (signal) | 6.4:1 | 4.5:1 — pass |

**What breaks:** if you change one of these colours, the ratio changes. A buyer
with older eyes, a buyer on a cheap phone in daylight, or a buyer reading the
site at night may be unable to read the text at all — and they will never tell
you. They will just go to a competitor whose site they *can* read.

Two extra warnings on this block. The comment in the file itself says *"Ratios
are not rounded"* — a colour that passes only after the number is rounded down
has failed. And the site deliberately uses no web fonts, only whatever your
operating system already has (**VERIFIED**, web.dev: a text element in a system
font has a load time of 0 ms — see `docs/00-RESEARCH.md` §D3). Do not add a
font from the internet. One font request undoes the reason the site is quick.

If you want a different colour, say so and let the person who built it re-check
the ratio. That is a five-minute job for them and a permanent loss of trust for
you if they guess.

### 3.2 The structure of the header and the footer

The header (the bar at the top with the logo and the menu) and the footer (the
bar at the bottom with the address and the links) are written out **in full, in
every one of the nine files**. They are not generated. They are not shared.

This means:

- **A change to the menu has to be made nine times.** If you rename a page or
  add one, every file's header and footer must be updated, or visitors will find
  a dead link from some pages and a live one from others.
- The header is **sticky** — it stays at the top as you scroll. The layout
  accounts for its height with a value called `--header-h`. If you change the
  header's height without changing that number, the top of every page will be
  hidden underneath it.
- There is a hidden link at the very top of every page reading "Skip to main
  content". It is invisible until someone presses the Tab key. It exists so a
  keyboard or screen-reader user can jump past the menu in one keystroke. Do not
  delete it.
- The footer contains the current year. See walkthrough 5 — and note that
  **MEASURED**, no script updates it for you. You must edit all nine files.

### 3.3 The `data-wa` attribute

Every one of the nine files opens its `<body>` like this:

```
<body data-wa="923000000000">
```

`data-wa` is where the WhatsApp number lives. The script reads it when the page
loads and builds every WhatsApp link from it. **MEASURED**: the placeholder
`923000000000` appears in that attribute in all nine files.

Three separate things are true at once, and all three can bite:

1. **Change it on five pages and not the other four, and your website now
   publishes two different WhatsApp numbers.** A buyer who arrives by a Google
   search on one page and then clicks through from another has no way to tell.
2. **Delete it and nothing appears to happen.** The script has a fallback value
   baked in at `assets/js/site.js` line 30. The buttons keep working — pointing
   at the placeholder number, which belongs to nobody.
3. **The visible telephone links are separate.** In `index.html` line 591 and
   `contact.html` line 296 there is a link written out in full:

   ```
   <a class="channel__v" href="tel:+923000000000"><span class="todo">Number to confirm</span></a>
   ```

   Two things are in that line and they are independent of each other: the
   `tel:+…` value, which is what the phone dials, and the text between the
   opening and closing `span` tags, which is what the visitor reads. **If you
   change one and not the other, the page shows a number that does not dial, or
   dials a number nobody is shown.** Always change both in the same edit.

### 3.4 Removing a class

A class is a label attached to an element that tells the stylesheet how to
display it. `<table class="spec">` tells `site.css` "this is a data table — use
the hairline rules, the zebra striping and the monospace numbers".

If you remove `class="spec"`, the table still displays and still contains
everything. It just loses every bit of its formatting and becomes a plain grid
of text. Nothing breaks; it simply stops looking like a website.

The same is true of `class="card"`, `class="shot"`, `class="status"` and the
rest. **They are invisible. You cannot see them by looking at the page.** That
is exactly why they must not be touched by accident — an accidental keystroke
deletes them just as easily as a deliberate one.

The same applies to the `data-` attributes — `data-wa`, `data-wa-msg`,
`data-rfq`, `data-nav-toggle`, `data-year`. These are how the page passes
information to the script. Some carry a value, like `data-wa="923001234567"`,
and some carry none at all. Deleting one silently switches off a feature.

### 3.5 The `<meta charset="utf-8">` line

This is the one line that must stay **first inside `<head>`**, above every
comment and every other line.

Browsers work out how to read a page by examining the first 1024 bytes of the
file. If a long comment — especially one containing a dash or a middle dot —
sits above the charset line, the browser can fail to spot it, fall back to
Windows-1252, and mangle every non-English character on the page. It will
read `30–60 days` as `30â€"60 days` and `DYEING · PRINTING` as `DYEING Â· PRINTING`.

This is not a theoretical risk. It happened on this site: the homepage carried a
long editing-notes comment above the charset line and rendered the whole page
in mojibake until the line was moved to the top of `<head>`.

**The rule:** if you ever add a big block of notes at the top of a file, put it
*after* the charset line, never before it.

### 3.6 The machine-readable block at the bottom of each page

Every page ends with a `<script type="application/ld+json">` block. It looks
like a small wall of punctuation, and it is the part of the page a computer
reads rather than a person.

It states the company's name, address, telephone number and page title in a
structured form, so a search engine or a procurement system can understand the
page instead of merely showing a picture of it. The research found that only
**two of nine** Faisalabad competitor sites shipped anything of the kind
(**VERIFIED**, `docs/00-RESEARCH.md` §C4).

Two rules, both from the comment printed directly above that block in the files:

- Values must **match the visible text on the page exactly**. If you change a
  phone number on the page and not in this block, the two disagree in public.
- Any change to the company name, address, telephone or email must be made in
  this block as well as on the page.

If you are not sure whether something you are editing is inside this block, it
starts with a `{` and ends with a `}` and sits at the very bottom of the file.
**Leave it alone and ask.**

---

## 4. Five common edits, step by step

### How to open and save a file

**On Windows:**

1. Open the `aljillani` folder.
2. Right-click the file you want → **Open with** → **Notepad**.
3. Make your change.
4. Press **Ctrl + S** to save, or use *File → Save*.
5. Close Notepad.

**On a Mac:** right-click the file → **Open With** → **TextEdit**. Press
**Cmd + S** to save.

Both work. Notepad and TextEdit do not add anything behind your back, do not
reformat the file, and do not need an internet connection. Word and Google Docs
must **not** be used — both will rewrite the file and destroy the structure.

**One habit that will save you.** Before you edit anything, copy the whole
`aljillani` folder on your desktop and name it `aljillani-backup`. It takes two
seconds and it is your undo button. Section 10 explains why.

**Find and replace.** Press **Ctrl + H** (or **Cmd + Shift + H** on a Mac). You
get two boxes: what to find, and what to replace it with. The "Find" strings
below are copied exactly from the files, so you can paste them in.

---

### Walkthrough 1 — Changing the phone number

This is the most common edit and the one with the most places to get wrong.
There are five places to change. Do all five, every time.

**A warning about the example numbers below.** `923001234567`, `+923001234567`
and `+92 41 111 1111` are **made-up examples**. They belong to nobody and will
never connect. They are here only to show the shape of a number. Never paste one
into the site, and never leave one there to look like a real number while the
chip is still waiting for the real one.

**Step 1 — the WhatsApp number. In all nine files.**

Open `index.html`. Press **Ctrl + H**.

| | |
|---|---|
| Find | `data-wa="923000000000"` |
| Replace with | `data-wa="923001234567"` |

Use your real number in this exact format: country code first, then the number,
digits only. No `+`, no spaces, no dashes. (The `+` and the spaces go in the
visible telephone link — see step 3.)

Now do the same for `about.html`, `capacity.html`, `contact.html`,
`dyeing.html`, `facility.html`, `finishing.html`, `printing.html` and
`quality.html`. All nine. Use **Find** (not replace) with `data-wa="` to check
you have not missed one — it should report nine matches across the nine files.

**Step 2 — the fallback in the script. Once.**

Open `assets/js/site.js`. Line 30 reads:

```
  var WA_NUMBER = (body.getAttribute("data-wa") || "923000000000").replace(/[^0-9]/g, "");
```

Change only the number inside the quotes on the right-hand side:

| | |
|---|---|
| Find | `|| "923000000000"` |
| Replace with | `|| "923001234567"` |

This is the safety net described in section 3.3. If you change it, then even a
page where `data-wa` has gone missing still dials the right number.

**Step 3 — the visible telephone links. Two files.**

Open `index.html`, press **Ctrl + H**.

| | |
|---|---|
| Find | `<a class="channel__v" href="tel:+923000000000"><span class="todo">Number to confirm</span></a>` |
| Replace with | `<a class="channel__v" href="tel:+923001234567">0300 123 4567</a>` |

Two changes in that one line, and they are independent of each other. The
`tel:+92…` part is what the phone dials, and it takes the international form: a
`+`, then the country code `92`, then the number with no spaces. The words that
follow are what the visitor reads, and they take the ordinary display form used
in Pakistan. Change one without the other and the page shows a number that does
not dial, or dials a number nobody is shown.

Do the same in `contact.html` — the same string appears there at line 296.

**Step 4 — the structured data block. Two files.**

If you have also confirmed the office landline, find this in `index.html`
inside the `ld+json` block at the bottom:

```
      "telephone": "+92-41-0000000",
```

and change it to the same office number you just published, in the same format.

**Step 5 — check.** Close the file, then double-click `index.html`. Look for
"Number to confirm" anywhere on the page. If it is gone, you have done it. Open
`contact.html` and look again. Then scroll to the very bottom of `index.html`
on a phone or in a narrow browser window and tap the WhatsApp button — WhatsApp
should open with your number at the top.

---

### Walkthrough 2 — Adding a machine to the list

Open `capacity.html` and search for `Hydro-extractor`. You will find this block:

```
            <tr>
              <td>Drying</td>
              <td>Hydro-extractor</td><td><span class="todo">—</span></td><td><span class="todo">—</span></td><td><span class="todo">—</span></td><td><span class="todo">—</span></td>
            </tr>
```

Read it left to right. Six cells, and the table header at the top of the table
tells you what each one is:

| Cell | Column heading | What goes in it |
|---|---|---|
| 1 | Process stage | The part of the journey: Pretreatment, Dyeing — bulk, Printing, Finishing, Utilities |
| 2 | Machine | What the machine is called |
| 3 | Manufacturer | The make, read off the nameplate |
| 4 | Model | The model, read off the nameplate |
| 5 | Qty | How many of them |
| 6 | Working width / capacity | The working width with its unit, or the capacity with a unit such as `t/h` or `m³/day` |

Every cell except the first two currently holds `<span class="todo">—</span>`,
which is the placeholder chip. **Copy the whole `<tr>…</tr>` block**, paste it at
the end of the `<tbody>`, then fill in the four empty cells.

A filled-in row looks like this — and note that the bracketed words are prompts
for you, not text to leave in:

```
            <tr>
              <td>Finishing</td>
              <td>Stenter</td>
              <td>[make, as printed on the nameplate]</td>
              <td>[model, as printed on the nameplate]</td>
              <td>[how many]</td>
              <td>[working width] mm</td>
            </tr>
```

**Three rules for this table, and they are the whole reputation of the site.**

1. **Only name a make that is on the nameplate.** Not the make you wish you had,
   not the make the agent told you is "the same", not a guess. The site says
   this in bold at the foot of the table: *"Do not name a make that is not on
   the nameplate. It is the fastest way to disqualify the unit with a buyer who
   has worked in this trade for five minutes."*
2. **If you do not know the model, leave the chip.** An empty cell is honest. A
   wrong model is not.
3. **Photograph the nameplate** and save it as `facility-03` (see section 5).
   That photograph is what substantiates the row.

A word on where the makes come from: the research **VERIFIED** that Monforts,
Benninger, Goller, Lafer, Ramisch, Cibitex, Bisio, Biancalani, Osthoff, Brugman,
Kusters, Sclavos, Fongs, Then, Thies, Brueckner, Santex and Ferraro are present
on operating Faisalabad units' published lists, and Epson, Atexco, Aroli and
SETEX for digital printing and colour control. Faisalabad also builds machines
locally — Noori Engineering and Skilled Industries among them. **That list is
there so you recognise a name, not so you can fill a cell with it.** If your
machine is locally made, that is a real machine. Say so.

---

### Walkthrough 3 — Adding or updating a certificate

Open `quality.html` and search for `APTPMA membership`. You will find two
places, and they are different jobs.

**Job A — the register.** This is the long table of every certification scheme
in the trade, showing whether you hold it. Find the line for ISO 9001:

```
            <tr>
              <td>ISO 9001</td>
              <td>Quality management system</td>
              <td>Some buyers; a general credibility marker</td>
              <td><span class="status status--notheld">To confirm</span></td>
            </tr>
```

The last cell is the status. There are three kinds of chip:

| Chip | Write | When |
|---|---|---|
| `<span class="status status--held">Held</span>` | green | You hold the document, the number and the expiry |
| `<span class="status status--notheld">Not held</span>` | grey | You do not hold it. **This is a perfectly good answer and it is honest.** |
| `<span class="status status--onrequest">Available on request</span>` | blue | Something you do not hold but can arrange |

To change a chip, find the exact `<span class="status status--notheld">To
confirm</span>` inside that row and replace it with one of the three above.
Then change the word `To confirm` inside it to whatever is true: `Held`,
`Not held`, or `In progress`.

**Job B — the log book.** This is the table below the register, and it is the
one a buyer's compliance team reads. It has five columns: Certificate,
Certification body, Expires, Scope, Document. It currently has one real row
(APTPMA membership) and a row that says no other certificates are held.

A commented-out template row is sitting in the file, ready to be used. Search
for `[Scheme name]`:

```
            <!--
            <tr>
              <td>[Scheme name]</td>
              <td>[Issuing body]</td>
              <td>[DD-MM-YYYY]</td>
              <td>[Which products / processes it covers]</td>
              <td><a href="assets/certificates/[file].pdf">View PDF</a></td>
            </tr>
            -->
```

To use it:

1. **Delete the `<!--` and the `-->`** — the two pieces of punctuation that are
   hiding it. A pair of those marks means "the computer should ignore
   everything between them".
2. **Copy the row** once for each certificate you hold.
3. **Replace the five bracketed placeholders** with the real values.
4. **Create a new folder** called `certificates` inside `assets`, so the path
   becomes `assets/certificates/`. **MEASURED**: that folder does not exist yet,
   and the template row assumes it will.
5. **Save the scanned PDF** into it with a plain filename — `iso-9001-2026.pdf`,
   all lower case, no spaces.
6. **Point the link at it**: `href="assets/certificates/iso-9001-2026.pdf"`.
7. **Delete the "No other certificates are held" row** once a real certificate
   exists. Search for `No other certificates are held`.

If you have no PDF to hand, put `On request` in that last cell instead of
inventing a link. Several buyers accept that and it is honest.

**Dates.** Use the format `DD-MM-YYYY`, the same format the sector's published
certificate tables use. Note there are two `status` classes in the file for the
register, and the register also carries a warning you should read before
changing the recycled-content row: any physical certificate still printed as
**GRS** may be stale, because the standard's own body now develops and operates
**GOTS and GRTS**, and describes GRTS as the successor covering a broader range
of fibres (**VERIFIED** — announced 14 September 2026; `docs/00-RESEARCH.md`
§B4). The site therefore lists **GRTS / RCS**. If anyone holds a certificate
printed as GRS, check it with the issuing body before the word goes on the
website.

---

### Walkthrough 4 — Replacing a TO CONFIRM chip with a real figure

This is the single most important edit on the site, because the chips are what
stop an invented number reaching a buyer.

**The rule: you replace the whole chip, not the words inside it.**

Open `capacity.html` and search for `Dyeing throughput`. You will find:

```
            <tr>
              <td>Dyeing throughput</td>
              <td><span class="todo">To confirm</span></td>
              <td class="num">6,000–25,000 <span class="unit">kg/day</span></td>
            </tr>
```

The middle cell is yours. The third cell belongs to the industry and must not
change.

**Step 1 — write down the number, and where it came from, before you open the
file.** The site's own caption demands it: *"EDIT: fill from the plant's own
production records, not from a target."* A target is what you hope to reach. A
record is what actually happened. If the figure is an average, say so in your
own notes — the site publishes averages elsewhere with the word "average" on the
page.

**Step 2 — copy this line exactly:**

```
              <td class="num">12,500 <span class="unit">kg/day</span></td>
```

Note what it does. `class="num"` puts the number in the site's monospace type
with aligned digits, which is what makes a column of figures readable at a
glance. The `<span class="unit">` puts `kg/day` in smaller grey type beside it,
so the reader knows what they are looking at. **A figure without a unit is not a
figure.** It is a rumour.

**Step 3 — replace** the entire `<td><span class="todo">To confirm</span></td>`
with your line above. Press **Ctrl + H**:

| | |
|---|---|
| Find | `<td><span class="todo">To confirm</span></td>` |
| Replace with | `<td class="num">12,500 <span class="unit">kg/day</span></td>` |

**Caution.** That find string appears many times on the page. Replace **one**,
click *Replace*, not *Replace All*. Use *Replace All* only when the value really
is the same everywhere.

**Step 4 — check that you have not changed the industry column.** The industry
range is not yours. It was checked and it is correct. If you touch it, you are
quoting someone else's research as your own, and the next person to look it up
will find it still true — which is exactly how it gets quietly falsified.

**Step 5 — now find the same figure elsewhere.** The homepage "At a glance"
panel says `EDIT: capacity.html`, which means it expects the figure you just
put on the capacity page to appear here too. Open `index.html`, search for
`Daily dyeing capacity`, and replace:

```
            <dd><span class="todo">To confirm</span><small>EDIT: capacity.html</small></dd>
```

with:

```
            <dd><span class="val">12,500</span> <span class="small">kg/day</span></dd>
```

Two small differences from the table version, and they are worth knowing.
**MEASURED** in `site.css`: the `unit` class is only styled inside a data table
(line 679 reads `table.spec .unit`), so it does nothing here. Outside a table,
the class that sets a number in the site's monospace type with aligned digits is
`val` (line 229) — you can see it used on the homepage lead-time figures. And
the datasheet's own small grey text style is simply `small`, which is already on
the line you are replacing.

**A figure that appears on two pages must be the same figure on both pages.** A
buyer who finds two different capacity numbers for the same plant stops reading
and starts wondering.

**Step 6 — count what is left.** Press **Ctrl + F** and search for `class="todo"`
in the file. That finds every remaining chip on the page. The number only ever
goes down.

---

### Walkthrough 5 — Changing the year in the footer

Open any page and scroll to the bottom. You will find:

```
      <p>&copy; <span data-year>2026</span> Al-Jilanee Textile Industry (Pvt) Ltd. All rights reserved.</p>
```

**The `<span data-year>` is a trap.** The name suggests the year updates itself.
It does not. **MEASURED**: the script at `assets/js/site.js` contains no
reference to `data-year` at all — it is a label nothing reads, probably left in
from an earlier idea. The number is typed by hand.

So on 1 January:

| | |
|---|---|
| Find (in each of the nine files) | `<span data-year>2026</span>` |
| Replace with | `<span data-year>2027</span>` |

All nine files. Then open all nine pages and check the footer on each. A wrong
year in one footer out of nine is the sort of small error that tells a buyer
nobody read the site before it went out.

You could also just type the year plainly — `&copy; 2027 Al-Jilanee Textile…` —
and drop the `<span>` entirely. It does the same job with less to confuse you.
Either is fine; doing the same thing on all nine pages is what matters.

---

## 5. Adding a photograph

`facility.html` is built and waiting. It currently shows nine labelled
placeholders instead of photographs, and it is the page that most limits how
much a buyer trusts every other number on the site. Filling it in is the single
highest-value hour you can spend on this website.

### The rules, before the mechanics

From the note printed on the page itself:

- **Real photographs only.** No stock. No borrowed competitor images. No
  heavily filtered shots. The research found a live, ranking Faisalabad site
  whose hero image was literally named `istockphoto-1069103796-612x612-1.jpg`
  (**VERIFIED**, `docs/00-RESEARCH.md` §A6). A stock photograph is the fastest
  possible way to look like a competitor.
- **A grey, unglamorous photograph of a working floor outperforms a beautiful
  empty one.**
- **Put the machine nameplate in frame** where the machine is what you are
  claiming.
- Horizontal framing. Daylight or good plant lighting.

### Which nine photographs, and what size

The shot list is fixed in `facility.html`, and each slot already names its file
and its size. Shoot in this order:

| File | Size | What it must show | Why it matters |
|---|---|---|---|
| `facility-01.jpg` | 1600 × 1200 | Dye house, machines on both sides | Proves how many machines exist |
| `facility-02.jpg` | 1600 × 1200 | One machine **running**, fabric loaded | Proves the floor is working |
| `facility-03.jpg` | 1200 × 900 | **One machine nameplate, straight on, sharp** | This is the one that substantiates the machine list |
| `facility-04.jpg` | 1600 × 1200 | Printing hall, printer running | Proves whether the unit prints at all |
| `facility-05.jpg` | 1600 × 1200 | Stenter in operation | The stenter is the bottleneck in almost every plant |
| `facility-06.jpg` | 1200 × 900 | Lab dip room, sample machines, lightbox | Do not publish a lab-dip turnaround without this room existing |
| `facility-07.jpg` | 1600 × 1200 | Packed rolls with a visible roll label | Shows the packing standard |
| `facility-08.jpg` | 1200 × 900 | Effluent treatment | **Only if it is actually running** |
| `facility-09.jpg` | 1200 × 900 | Boiler and steam plant | Answers the continuity-of-supply question |

If the budget for a photographer only covers two frames, the page says which two:
**`facility-02`** (a machine actually running) and **`facility-03`** (a legible
nameplate). They do more for a buyer's confidence than a wide shot of the whole
plant.

Note that all nine sizes are 4:3 — the same shape as the frames on the page, so
nothing is cropped away.

### Where to save it

Into the existing folder `assets/img/`, using exactly the name in the table
above — lower case, hyphens, no spaces, `.jpg`. That is the naming the page and
the file paths already expect. Do not rename a file after uploading it; the
page will show a broken frame.

Keep the full-resolution original from the phone somewhere else. You will want
it if you ever have to crop or re-shoot.

### How to resize and compress

A modern phone produces a file of several megabytes. The site's frames are
displayed at about 400 pixels wide on a desktop screen and are then scaled down
on a phone, so anything larger is wasted weight that every visitor downloads.
1600 × 1200 is generous.

On Windows, any of these will do it — all are free and built in or free to use:

- **Paint.** Open the photo → *Resize* in the ribbon → set Horizontal to 1600,
  keep the lock on so the height changes to 1200 → *File → Save As* → choose
  **JPEG Image** → set quality to **80** or **85** → save.
- **Photos.** Open the photo → the three dots → *Resize* → set the longest edge
  to 1600 → *Save a copy*.
- **Phone gallery.** Most phones let you choose "Large" or "Medium" instead of
  "Original" when sending or saving. Either is acceptable.

**A working target: under 300 KB per photograph.** That is a practical rule of
thumb, not a measured value from the research. If a file comes out at 1.5 MB,
reduce the quality step to 70 and try again. If it is 60 KB, you may have gone
too far — look at it on the page before accepting it.

Then **look at every photograph full size before you upload it.** Blur, a
highlight blown out to white, a nameplate you cannot read, a person's face you
did not mean to include — all of it is visible on the page.

### Putting it on the page

Open `facility.html` and search for `facility-01`. You will find:

```
          <div class="shot__frame"><span class="shot__pending">Awaiting photo · facility-01</span></div>
```

Replace that whole line with:

```
          <div class="shot__frame"><img src="assets/img/facility-01.jpg" alt="Dye house machine line, machines on both sides, nameplates in frame" width="1600" height="1200" loading="lazy"></div>
```

Three things changed:

1. The `<span class="shot__pending">…</span>` — the grey dashed "Awaiting
   photo" chip — is gone, because there is now a photograph to show.
2. An `<img>` element replaced it. **MEASURED**: `site.css` line 823 already
   styles `.shot__frame img` to fill the frame and crop neatly. You do not touch
   the stylesheet.
3. `alt="…"` now describes the photograph for anyone who cannot see it.

Do the same for each photograph. **Do not delete the caption block underneath.**
The `<p class="shot__title">`, the `shot__meta` line and the `shot__note` are
the site's argument about why each picture matters. Keep them.

### What alt text is, and what it is not

`alt` text is the **spoken description of the photograph**, read aloud by screen
readers for a blind visitor, and shown by a browser if the image fails to load.
It is read *instead of* the image.

It is **not** a caption. That is a real distinction and this site depends on it:

| | Alt text | Caption |
|---|---|---|
| Replaces the image? | Yes — read instead of it | No — shown below it |
| Who writes it | The person adding the photo | The site author |
| Answers | "What am I looking at?" | "What does this prove?" |
| Length | One sentence, or a few words | Can be two sentences |
| Example | `alt="Dye house machine line, machines on both sides, nameplates in frame"` | "Shows how many machines and how they are laid out." |

The caption is already there, underneath, in the `<figcaption>` block. So the
alt text must not repeat it.

**How to write a good one.** Describe the content of the photograph, for a
reader who has never seen the factory. Count the machines only if you counted
them:

- Good: `alt="Dye house machine line, machines on both sides, nameplates in frame"`
- Good: `alt="Dye house machine line, six machines counted, nameplates legible"`
- Good: `alt="Stenter in operation with fabric entering and leaving"`
- Good: `alt="Machine nameplate reading [the make and model as printed]"`
- Bad: `alt="facility photo"` — says nothing
- Bad: `alt="facility-01.jpg"` — a filename is not a description
- Bad: `alt="Click here"` — it is not a link
- Bad: `alt="our factory which is the best in Faisalabad and very modern"` — a
  claim, not a description, and one you cannot support

**When is an empty `alt=""` correct?** When the photograph carries no
information — a divider, a decorative background, a purely atmospheric shot. On
this site that is never the case. A photograph of your own dye house is
information, and it must be described.

---

## 6. Removing a row that does not apply

Two tables on this site are **menus of what the industry offers**, not lists of
what the plant has. Both will grow rows that have to be deleted as the facts come
in.

They are:

- **`finishing.html`** — the *Mechanical finishes* and *Chemical finishes*
  tables. The file says so in as many words: *"this is a menu of what is
  technically available in this industry, not an inventory. Delete every row we
  do not run. A finishing list longer than the plant can deliver is the most
  common way a processor site gets quietly falsified — a buyer will simply order
  the row we cannot do."*
- **`capacity.html`** — the *machine list*. The same logic applies: a row for a
  machine that is not on the floor is worse than an empty row.

### How to delete one row

Every table row starts with `<tr>` and ends with `</tr>`, and it can be on one
line or spread over several. Two cases:

**Case 1 — the row is on one line.** This is how `finishing.html` writes them:

```
                <tr><td>Heat setting</td><td>Fixes the fabric at a set width and gives it dimensional stability</td><td>Almost always — it is the base of every other finishing route</td><td><span class="status status--notheld">To confirm</span></td></tr>
```

Find the row you want gone. Press **Home** to go to the start of the line, then
**Shift + Down** then **Shift + End** to select the whole line, then **Delete**.
Now delete the blank line it left behind.

**Case 2 — the row is spread over several lines.** This is how `capacity.html`
writes its machine list. Click once just before the `<` of `<tr>` to put the
cursor there, then hold **Shift** and click just after the `>` of `</tr>`. That
selects the whole block, however many lines it covers. Press **Delete**, then
delete the blank lines it left behind.

### Three things to get right

1. **Delete `<tr>` and `</tr>` together.** If you leave a stray `<tr>` behind,
   the page still renders but a whole column shifts and it is very hard to spot.
2. **Do not delete the `<thead>` rows.** The rows at the top of the table, which
   say `Finish`, `What it does`, `Asked for when`, `Our status`, are the column
   headings. Every row beneath them relies on them. They live between `<thead>`
   and `</thead>`; the rows you are deleting live between `<tbody>` and
   `</tbody>`.
3. **When a table becomes empty, the page gets worse, not better.** If deleting
   a row leaves nothing, the honest fix is to remove the whole table *and* the
   sentence above it that introduces it. Say so before you do — a heading with
   nothing under it is the single most obvious sign of a site nobody maintains.

### Replacing a chip instead of deleting a row

For the finishing tables, there is a middle option and it is the better one where
the finish genuinely is available but only sometimes. Leave the row, delete only
the last cell's chip, and write the truth instead:

```
<td>Held — single stenter</td>
```

or

```
<td>Not available</td>
```

A row that says "we cannot do this" is worth more than a missing row, because a
buyer who cannot find a finish assumes you never considered it.

---

## 7. Publishing

### What "publish" means for a site like this

There is no website to log into and no page to save. A static site is a folder
of files. Publishing means **copying that folder onto a computer that is
reachable from the internet**, and making sure the address people type lands on
`index.html`.

That is the entire concept. Everything below is a different way of performing
that copy.

Before any of it, one thing outside this document: the domain `aljillanitex.com`
— the one printed against this company in the industry association's own
directory — **has no DNS record at all, and RDAP returns 404, meaning it is not
even registered** (**VERIFIED**, `docs/00-RESEARCH.md` §A3). **Anyone can
register it.** Until it is bought and pointed at whatever host you choose, there
is no address to publish to, and a stranger could take the name that identifies
your business to international buyers. That is a business risk, not a web task,
and it should be settled before any of the three options below is used.

### The three realistic ways

**Option 1 — Your existing web host's control panel. The normal choice.**

If the company already has a website, or a mailbox on a domain, there is already
a hosting account with a login. Almost every host has a **File Manager** — a web
page that looks like a folder explorer inside your browser — and an **FTP**
section under it. You upload the contents of your `aljillani` folder into the
public folder, and the site is live.

- Cost: whatever the host already charges. Often the host already includes it.
- What you need: the login and password for the host, from whoever set it up.
- Speed of update: immediate, once uploaded.
- Difficulty: low, but it needs care — you must upload the **contents** of the
  folder, not the folder itself, or the addresses will be wrong.

**Option 2 — Netlify Drop. Fastest way to get a working address today.**

Netlify is a hosting service with a free tier, and it has a page called **Drop**
where you drag a folder onto the browser window and it is published and given a
web address within about a minute. No account needed to try it; an account is
needed to keep it.

- Cost: free for a site this size.
- What you need: a browser and an internet connection.
- Speed of update: about a minute, and you do it again the same way each time.
- Difficulty: the lowest of the three.
- **Honest limitation:** an address that looks like `some-random-words.netlify.app`.
  Perfect for showing a buyer the finished site, or for the plant to look at on
  a phone. Not what you would want as your permanent business address, and it is
  worth someone with more experience moving it behind your own domain later.

**Option 3 — GitHub Pages. The one to use once someone maintains it for you.**

GitHub is a free code-hosting service. GitHub Pages takes a repository and
publishes its contents as a website. It keeps a full history of every change
ever made, which means a mistake can always be undone, and it is what you want
if a technical person will look after the site.

- Cost: free.
- What you need: an account, and someone comfortable with the basics.
- Speed of update: a minute or two, once set up.
- Difficulty: the highest of the three. **Do not attempt it alone.**

### Which one to pick

| Situation | Use |
|---|---|
| You need to show a buyer something this week | Option 2 |
| The company already pays for hosting or a mailbox | Option 1 |
| Someone technical will maintain the site going forward | Option 3 |
| The domain has been registered and points somewhere | Whichever the domain's hosting is already on |

Whichever you choose, **the update procedure is the same every time**: change
the file, check it, then put the same folder up again. There is no database to
migrate and nothing for the host to rebuild.

---

## 8. Checking your work

### Before you save

- [ ] You have a backup copy of the folder on your desktop.
- [ ] You opened the file in Notepad or TextEdit — **not** Word, **not** Google
      Docs, **not** Excel.
- [ ] You changed words between angle brackets, or you are deliberately doing
      one of the structured edits in section 4 and you have read the warning
      above it.
- [ ] You have not touched `assets/css/site.css` lines 22 to 104.
- [ ] Any number you typed came from a record, not from a target.

### After you save — open the page

Double-click `index.html` (or whichever page you changed). It opens in your
browser straight from the folder. No software, no internet, no server needed.
**MEASURED**: every link between the pages of this site is *relative* — it
points at another file sitting in the same folder, and not one of them starts
with a forward slash — so the whole nine-page site works from a double-click.

Now look for four things:

**1. Is the page whole?** Scroll from top to bottom. The heading is at the top,
the tables are in the middle, the footer is at the bottom. If a chunk of text has
appeared at the top of the page in a different size, or a paragraph is showing
its angle brackets, you have broken a tag. Undo — section 10.

**2. Is the draft ribbon there?** At the very top of every page you should see a
rust-coloured bar reading **DRAFT — unconfirmed figures are shown as TO CONFIRM
chips**. It is supposed to be there. The site shows that ribbon on all nine pages
and it disappears only when `data-draft="true"` is removed from the `<html>` tag
— which is a deliberate act, done at the end of the launch work, not casually.

So: **ribbon present = normal. Ribbon missing = something is wrong.** If it has
gone, you have deleted or renamed the attribute and you should put it back.

**3. Do the chips count go down and not up?** Press **Ctrl + F** and search for
`class="todo"`. That finds every unfinished value on the page. After a good edit
this number should be lower than it was. If it went up, you have introduced
something unfinished.

**4. Did the number change everywhere it appears?** Search for your new number
across all nine files. Every place it should appear has it. A phone number on
three pages and not the fourth is the most common mistake on this list.

### On a phone

**This matters more than it sounds.** **VERIFIED**: Pakistan is 64.51% desktop
and 35.49% mobile (**StatCounter, August 2026** — `docs/00-RESEARCH.md` §D7).
The build was originally planned mobile-first, then corrected once the data
arrived: the tables are designed for a desktop first, because the buyer reading
a machine list is usually on a desktop and probably outside Pakistan. Both are
verified. **Check both.**

There is no built-in way to preview a folder of HTML on your own phone. The two
practical ways:

1. **Publish it first** using Option 2 from section 7, then open that address on
   your phone. Twenty minutes of work, and you get a real test.
2. **If the company has an internal network**, the person who set up the
   computer hosting the folder can serve it to the local network. Ask them.

When you do open it on the phone, check these five things:

- [ ] The **Menu** button at the top opens and closes the list of pages.
- [ ] The **WhatsApp** button at the bottom opens WhatsApp with your number and
      the message already written out.
- [ ] A **table** can be scrolled sideways with a finger, and the first column
      stays where it is.
- [ ] The enquiry form can be **filled in and sent**, and WhatsApp opens with
      what you typed.
- [ ] Nothing is **cut off** at the right-hand edge, and no text overlaps.

The mobile menu and the WhatsApp bar are added by the script. They are the only
two things that can behave differently on a phone from how they look in the
file, so they are the two worth testing every time.

---

## 9. Before you press save

The list to run down every single time. It takes thirty seconds.

- [ ] **I made a backup copy** of the folder before I started.
- [ ] **I am editing in Notepad or TextEdit**, not in Word, Google Docs or Excel.
- [ ] **I only changed words between angle brackets**, or I am deliberately doing
      a structured edit from section 4 and I read the warning above it.
- [ ] **Every number I typed came from a real record** — a production sheet, a
      certificate, a nameplate, a business card — not from a target, a
      competitor's number, or a rough idea.
- [ ] **Every machine make is one I read off a nameplate today.**
- [ ] **Every certificate number, issuing body and expiry date is copied from the
      document**, not remembered.
- [ ] **I did not touch** `assets/css/site.css` lines 22 to 104.
- [ ] **I did not delete a `class=`** or a `data-` attribute I did not fully
      understand.
- [ ] **I changed the WhatsApp number in all nine files** and in `assets/js/site.js`,
      or I did not change it at all.
- [ ] **I changed both halves of the telephone link** — the `tel:` value and the
      visible words — together.
- [ ] **Any figure that appears on more than one page is identical on all of
      them.**
- [ ] **I changed the structured data block** if I changed the company name,
      address, telephone or email.
- [ ] **I did not delete the "Skip to main content" link**, the header, the
      footer or the `.draft-ribbon` markup.
- [ ] **I did not put a `TO CONFIRM` chip back on something already confirmed.**
- [ ] **Every `<tr>` I deleted had its matching `</tr>` deleted with it**, and I
      did not touch a `<thead>` row.
- [ ] **Every photograph** is named exactly as the page expects, is in
      `assets/img/`, has real alt text, and has been looked at full size.
- [ ] **Every link I typed** points to a file that exists. No broken addresses.
- [ ] **The draft ribbon is still on the page.** It should be, until the launch
      work is finished.
- [ ] **I have opened the page and scrolled through all of it**, and I have
      opened it on a phone if anything I changed could affect the layout.

If you tick every box, press save.

---

## 10. When you break something

### First: it is almost certainly fixable

Nothing you can do from this guide can permanently damage the site. The files are
plain text. There is no database to corrupt, no build to break, no server to
restart. If a page looks wrong, the file contains a small mistake, and a small
mistake is reversible.

### What it looks like, and what it usually means

| What you see | What usually happened | What to do |
|---|---|---|
| A page shows its code — `<p>`, `<td>`, `<div>` appearing as visible text | A stray `<` or `>` was typed into the wording by accident | Undo (Ctrl + Z) and try again. If that fails, restore the backup. |
| The whole page is plain text, no colours, no layout | `assets/css/site.css` was renamed, moved or emptied | Put the file back from the backup |
| The DRAFT ribbon has vanished | `data-draft="true"` was removed from the `<html>` tag | Put `data-draft="true"` back |
| One photograph shows a broken-image symbol | The file is not in `assets/img/`, or the name does not match | Check the folder and the spelling, character by character. Linux servers are case-sensitive — `Facility-01.jpg` is not `facility-01.jpg` |
| A WhatsApp button opens the wrong number or nothing | `data-wa` changed on some files and not others | Undo, then do walkthrough 1 properly, all nine files |
| A table has a missing column or a shifted column | A `<td>` was deleted without its row | Restore from backup. This is the fastest route — hand-repairing a table is slower than undoing it |
| A link goes to a page that does not exist | A `href` was renamed or a file was moved | Restore the file, or put the old name back |
| The page is not recognised at all | The file was renamed — `index.html` must keep that exact name | Rename it back |

### How to undo

**Immediately, in the editor.** Press **Ctrl + Z** (Windows) or **Cmd + Z**
(Mac) repeatedly. The version of Notepad in current Windows keeps a long list of
undo steps, so keep pressing until the text is back the way it was. This fixes
almost everything.

**If the editor is closed.** In the file's right-click menu in File Explorer,
look for **Restore previous versions**. That works if File History or OneDrive is
switched on for the folder. It will not exist otherwise.

**If neither works — the backup copy.** That folder you copied to your desktop
before you started. Open it, copy the affected file back over the broken one, and
the site is as it was. This is the whole reason for the backup, and it is why
step one of every walkthrough in section 4 begins with it.

**If you have lost a file entirely** — deleted it, or overwritten it with
nothing: restore it from whatever backup the company already had, or ask the
person who commissioned the website to supply it again. Nothing in this project
is one-of-a-kind. It is all text, and the whole site was written from a working
specification.

**A note, so it is not a surprise later.** **MEASURED**: this folder is **not**
currently under version control — there is no `.git` folder in it. That means
there is no automatic record of who changed what and when. Two things follow, and
both are worth doing:

- Turn on **File History** (Windows: *Control Panel → File History → Turn on*),
  or put the folder in **OneDrive** or **Google Drive**. That gives you versions
  without asking anyone's permission.
- When the site reaches someone technical, ask for it to be put under **GitHub**
  (section 7, Option 3). From that day, every change is recorded and every
  mistake is one click from fixed.

### Who to ask

| Question | Who |
|---|---|
| Is this number true? | The person in the plant who owns that record — the production manager, the accounts office, the quality manager. Not the website file. |
| Is this certificate still valid? | Whoever holds the file. And check the number with the issuing body. |
| Is this machine make right? | Whoever is standing next to it, reading the nameplate |
| The page is broken and I cannot fix it | The person who commissioned this website. Give them the file name and what you see. |
| Should this claim go on the site at all? | The owner. The site deliberately states what it does not claim — see the list at the foot of `quality.html`. Adding a claim is an owner's decision, not an editor's. |

**If you are not sure whether a number is right, leave the chip.** A visible
`TO CONFIRM` costs the site nothing. A wrong number published once costs the
reputation it was meant to build. This is the whole premise of the site, and it
is the one rule that never has an exception.

---

## 11. Glossary

The HTML terms this guide uses, in plain English.

**Tag** — a piece of markup that tells the browser what something is. Written
with angle brackets, like `<p>` for a paragraph. An **opening tag** is `<p>`; a
**closing tag** is `</p>`, the same thing with a forward slash. Most tags come
in pairs.

**Element** — the tag plus its content plus its closing tag. All three together:
`<p>Faisalabad</p>`.

**Self-closing tag** — a tag with no closing tag, because there is no content
inside. Images use one: `<img src="…" alt="…">`.

**Attribute** — extra information inside an opening tag, made of a name and a
value: `class="spec"`, `href="capacity.html"`, `src="assets/img/x.jpg"`,
`alt="Stenter in operation"`, `data-wa="923001234567"`.

**Class** — an attribute that names what an element *is*, so the stylesheet knows
how to display it. `<table class="spec">`. Invisible on the page. The stylesheet
matches it with a dot, like `.spec` in `site.css`. Changing or removing a class
changes the appearance, usually by breaking it.

**ID** — like a class, but it must be unique on the page. Used for links that
jump to a place (`href="#pretreatment"` lands on `id="pretreatment"`).

**Alt text** — the description of an image, read aloud instead of the image by
screen readers. Not a caption; see section 5.

**Caption** — text shown beneath an image or table. On this site it is the
`<figcaption>` block under each photograph.

**Comment** — text inside the file that the browser ignores and you can read.
Written `<!-- like this -->`. Every file is full of them, and the ones marked
`EDIT:` are instructions to whoever fills in that value. You can delete a comment
after you have acted on it, or leave it — it does no harm.

**`DOCTYPE`** — the first line of an HTML file, declaring which version of the
rules the file follows. It must be the very first thing, with nothing in front
of it. See the rough edges noted at the end of this guide.

**Attribute `href`** — the destination of a link. `href="capacity.html"` points
at another file in the same folder. `href="#main"` jumps within the same page.
`href="mailto:info@…"` opens an email. `href="tel:+92…"` starts a phone call.

**Attribute `target="_blank"` and `rel="noopener"`** — open the link in a new
tab, and safely. Leave them as they are.

**Relative link** — a link to a file sitting in the same folder, written with no
website address. This is why the whole site works from a double-click with no
internet connection. A link written as `href="/capacity.html"` — with a
forward slash at the front — is *not* relative and will break. The website's
addresses all sit at the root of the domain, so the two forms happen to work
today, but do not start adding the slashes.

**Table parts** — `<table>` the whole thing; `<thead>` the headings; `<tbody>`
the body rows; `<tr>` one row; `<th>` a heading cell; `<td>` a normal cell;
`<caption>` the title above the table.

**Form controls** — `<form>` the form itself; `<label for="…">` the visible
label; `<input>` a single-line box; `<textarea>` a multi-line box; `<select>`
a dropdown; `<button>` a button. Every input on this site has a matching label
with a `for` that matches the input's `id`. If you delete the `for` or the `id`,
the label stops working.

**`<details>` and `<summary>`** — a built-in expand-and-collapse box. The
`<summary>` is always the line you can click; the content underneath stays hidden
until it is. Used for the buyer questions on `dyeing.html`, `printing.html` and
`finishing.html`. No JavaScript involved.

**Stylesheet (CSS)** — `assets/css/site.css`. The file that decides how
everything looks. It is separate from the content so the words can change without
the appearance changing.

**Token** — a named value defined once at the top of `site.css` and used
everywhere else. Change the token, and every use of it changes at once. The
colours in lines 22 to 104 are the important ones.

**Script (JavaScript)** — `assets/js/site.js`. Adds the mobile menu, the WhatsApp
links and the form behaviour. The site works without it.

**JSON-LD** — the structured block at the bottom of each page that describes the
company to computers. Starts `{`, ends `}`, wrapped in
`<script type="application/ld+json">`. Leave it alone unless you are told
otherwise.

**Favicon** — the small icon in a browser tab. Here, `assets/img/favicon.svg`.

**`robots.txt`** — a plain-text file telling search engines which pages to look
at. It also explicitly allows the major AI crawlers, which about 95% of sites do
not (**VERIFIED**, `docs/00-RESEARCH.md` §D5). You do not need to touch it.

**`sitemap.xml`** — a list of the nine page addresses, for search engines. Only
needs changing if you add, rename or remove a page.

**Domain** — the name people type, such as `aljillanitex.com`. Owned, rented and
renewed separately from hosting.

**Hosting** — the computer on the internet that holds the files and serves them
when someone types your address.

**Publishing** — copying the folder onto that computer.

**Contrast ratio** — the number describing how easy one colour is to read against
another. Higher is easier. This site's colour pairs were measured at 5.4:1 or
better against the WCAG 2.2 AA requirement of 4.5:1 (**MEASURED**).

---

## 12. A maintenance calendar

A website with real numbers on it is not finished when it is published. It is
finished when somebody keeps checking whether the numbers are still true. This is
the schedule.

### Every week — five minutes

- [ ] Open the site on your own phone. Tap **Enquiry form**. Complete it and
      send. Does WhatsApp open with your number and the message filled in?
- [ ] Read one enquiry from the website. Is anything a buyer asked that the site
      does not answer? Write it down. That list is your content plan.
- [ ] Look at the messages that arrive on the WhatsApp business number. A
      question asked three times is a question the site should answer on the
      page.

### Every month — one hour

- [ ] Open all nine pages and scroll through each one. Two minutes a page.
- [ ] Search every file for `class="todo"`. **MEASURED**: there are currently
      **173** unfinished chips across the nine pages, plus one inside each
      page's draft ribbon. Every fact you are given should turn one of them into
      a real value. The number should fall every month.
- [ ] Check **certificate expiries**. `quality.html` carries a log book, and the
      page says in bold: *"A log book with a stale expiry date is worse than no
      log book, because it turns a transparency gesture into evidence of
      inattention."* Put a calendar reminder two weeks before each date in that
      table.
- [ ] Check the machine list against reality. Any machine sold, moved, or
      downgraded for repair — update or remove its row that week.
- [ ] Add one photograph if there is a spare half hour. `facility.html` has nine
      slots and the more it fills, the more the numbers are believed.

### Every quarter — half a day, with a person in the plant

- [ ] Walk the plant with a phone and photograph the nameplates. Compare against
      `facility-03` and the machine list on `capacity.html`. Anything that does
      not match, fix that day.
- [ ] Pull the last quarter's production records. Do the capacity figures on
      `capacity.html` still true, or were they a best month?
- [ ] Check whether any customer, auditor or buyer asked about a certificate you
      do not hold. If so, decide — apply, or write the answer on the site.
- [ ] Review the water and effluent figures on `capacity.html` against the
      published benchmarks. The site deliberately publishes the benchmark even
      where it has no figure of its own, because a unit that publishes its number
      against a public benchmark is making a checkable claim.
- [ ] List the open questions buyers asked this quarter that the site does not
      answer, and pick one to add. Write it plainly, in the buyer's words.

### Every year — one day, with the owner

- [ ] **Update the copyright year.** All nine footers. See walkthrough 5. **No
      script does this for you — MEASURED.**
- [ ] Review every certification: still held? Still in scope? Expired and not
      renewed? A lapsed certificate left on the site is the one error this site
      cannot survive, because the entire argument of `quality.html` is that a
      certificate can be checked with the body that issued it.
- [ ] **Re-read the "What this site does not claim" list** at the foot of
      `quality.html`. Does anything on it need adding? Did anything change that
      means a claim can now honestly be made?
- [ ] Review the domain. Is it registered, auto-renewing, and pointed at the
      right place? The research found that **five of eleven** domains on this
      industry's own directory now belong to somebody else, including one that is
      now a gambling site (**VERIFIED**, `docs/00-RESEARCH.md` §A3). For a
      business whose web identity *is* its reputation, an expired domain is a
      business risk, not a web chore.
- [ ] Review the industry ranges on `capacity.html`. They were researched in
      2026. If they are three years old, have someone check whether the trade
      has moved.
- [ ] Ask: what did buyers ask this year that the site could not answer? That
      list decides next year's content.

---

## Two rough edges to raise with the person who built this

Neither of these is yours to fix. Both are worth mentioning.

**1. Seven files start with a stray character.** **MEASURED**: in
`about.html`, `capacity.html`, `dyeing.html`, `facility.html`, `finishing.html`,
`printing.html` and `quality.html`, the first line reads:

```
?<!DOCTYPE html>
```

with a question mark in front of `<!DOCTYPE html>`. `contact.html` and
`index.html` are correct.

The `DOCTYPE` line must be the very first thing in the file. Anything in front of
it can put the browser into an older compatibility mode, which changes how it
measures boxes and can shift the layout. **The fix is deleting one character per
file**, and it should be done by whoever built the site, with the pages checked
before and after.

**2. Three links inside the site point at documents whose names do not match.**
**MEASURED**: `index.html` links to `docs/UPDATE-GUIDE.md` and
`docs/PRE-LAUNCH-GATE.md`, and `facility.html` links to
`docs/06-CLIENT-CHECKLIST.md`. The files in `docs/` are numbered —
`00-RESEARCH.md`, `01-SITEMAP.md`, `02-CONTENT.md`, `03-DESIGN.md`,
`06-CLIENT-CHECKLIST.md`, and this guide, `08-UPDATE-GUIDE.md`. **You are
reading this file**, so the first of those three links is one character away from
being right. The other two need either the links or the file names to be
reconciled. Ask the consultant. It is a two-minute job and it is the kind of
thing a buyer clicks once and quietly decides the site was not maintained.

---

## The short version

1. Open the file in Notepad. Change words **between** angle brackets. Save.
2. Never touch `site.css` lines 22 to 104. Never delete a `class`.
3. WhatsApp number: nine files **plus** `assets/js/site.js`.
4. Every number comes from a record. If you do not have the record, leave the
   `TO CONFIRM` chip exactly where it is.
5. Copy the folder to your desktop before you start. That is your undo button.
6. Publish by copying the folder to a web host. Nothing else.
7. Check it on a phone. The DRAFT ribbon should still be there.
8. When in doubt, leave it visible. On this site, honest beats polished — every
   single time.
