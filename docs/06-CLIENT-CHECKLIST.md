# Client Checklist — Al-Jilanee Textile Industry (Pvt) Ltd

**Everything we need from you, and exactly how to capture it.**
Al-Jilanee Textile Industry (Pvt) Ltd · Faisalabad · Draft website

---

## How to use this document

This is a working document, not a contract. Work down it in order and tick
things off. Where a box says **Source of truth**, it names the record you should
read the answer out of — not what we would like it to be.

If you cannot answer something, write **UNKNOWN** next to it and move on. An
UNKNOWN is fine. A guess is not. The website is built so that every unconfirmed
value is visible on the page as a dashed **TO CONFIRM** chip rather than
printed as a plausible-looking number. A chip is a reminder. A wrong number is
a broken promise to a buyer, and it is the one thing on this site we cannot
take back.

### The four evidence labels used throughout

These are the same labels used in the research brief, so that nothing in this
project is quietly upgraded from a guess to a fact.

| Label | What it means |
|---|---|
| **VERIFIED** | Read directly from a primary document, or checked by running the check. |
| **MEASURED** | Computed from primary sources. Reproducible. |
| **UNVERIFIED** | Plausible and widely repeated, but no primary source was reached. |
| **UNKNOWN** | Not found. Recorded as a question. Never guessed. |

Every blank field in this document is **UNKNOWN** until you fill it. Where the
site already shows a **TO CONFIRM** chip, the page is named so you can find it.

---

## 1. The five things needed first

These five are in this order on purpose. The first one is not a website task,
and it is the most urgent item in the whole project.

| # | What we need | Why it is on this list | Where it lands on the site |
|---|---|---|---|
| 1 | **The domain** | Until it exists, the site points at nothing and the email address does not work. | Every page, plus `sitemap.xml` and `robots.txt` |
| 2 | **The legal identity** | The name, the entity and the address a buyer will put on a purchase order. | `about.html`, and the footer of all nine pages |
| 3 | **The numbers** | Capacity, machines and lot sizes. This is the single most common thing missing in this trade. | `capacity.html`, `index.html`, `dyeing.html`, `printing.html`, `finishing.html` |
| 4 | **The certificates** | Or an honest statement that there are none. Both are publishable; neither is negotiable. | `quality.html` |
| 5 | **The photographs** | Real photographs of your own floor. Nothing else is acceptable. | `facility.html`, `index.html` |

### Why the domain is item one

- **VERIFIED.** The domain printed against your company in the industry
  association's own directory, `aljillanitex.com`, **has no DNS record at all.**
  No address record, no name server record. A registry lookup returns 404,
  which means the domain is **not registered**, not merely misconfigured.
- **Which means anyone can register it.** Not a competitor, not necessarily
  someone in textiles — anyone, anywhere, at any moment, for the price of a
  renewal.
- **VERIFIED.** Of the eleven domains listed by the association for Faisalabad
  processing units that could be tested, **five now belong to somebody else.**
  One listed against a textile company is a tour operator in Central Asia.
  Another is a gambling site.
- The site depends on that domain already. Every page carries
  `https://www.aljillanitex.com/` in its canonical tag and its `og:url`, and
  the address `info@aljillanitex.com` is written into `contact.html` and
  `index.html`. A domain with no DNS has no mail server, so **that address
  cannot receive anything today.**

What a hijacked domain actually costs you: it does not merely fail to generate
an enquiry. It actively hands an international buyer **someone else's business**
under your name. For a company whose only formal public identity outside the
association directory is this domain, that is a reputational risk before it is
a marketing one.

**Do this today, before anything else on this list.**

- [ ] Register `aljillanitex.com` yourself, or through a registrar you trust.
- [ ] Put it in a **company-controlled** account, not a personal one. At least
      two people should be able to log in.
- [ ] Turn on auto-renewal, and put a renewal reminder in the calendar for one
      month before the renewal date.
- [ ] Do **not** let it lapse. A lapsed domain goes through a deletion cycle and
      can be re-registered by anyone.
- [ ] Once it resolves, tell us. We will change nothing on the site until you
      confirm it is live — but we will check that it is.

*(We do not quote a price for registration here. Ask your registrar. What we
will say is that this is the cheapest competitive advantage available to you and
right now it is unclaimed — most of your competitors have no working website at
all, let alone a live domain.)*

---

## 2. Company identity

These are not marketing words. They are the details that appear on a purchase
order, a letter of credit and a supplier onboarding form. Copy them **exactly**
as they appear on your own paperwork.

| Item | Your answer | Source of truth — read it from | Where it appears on the site | What happens if it is wrong |
|---|---|---|---|---|
| Legal entity name, exactly as registered | ______________ | Your incorporation or registration document | `about.html` company record; footer of all nine pages; the page titles | Buyers cannot match you to a supplier form; a contract may be unenforceable against the wrong entity |
| Which entity actually signs the contract | ______________ | Your accountant, or the person who signs | Not currently stated anywhere — we will add it | The most expensive kind of wrong. See the note below |
| Registered address | ______________ | Your registration document | Footer of all nine pages; `contact.html` plant address | Buyer invoices, courier deliveries and legal notices go to the wrong place |
| Plant address — if different from the registered one | ______________ | Your utility bill or the plot document | `contact.html`, `facility.html`, `index.html` fact strip | A courier arrives at a registered office that is not the factory |
| NTN / STR | ______________ | Your FBR registration | **Not currently published on the site** — see the note below | Wrong tax details on an invoice |
| Year established | ______________ | Your registration document | `about.html` company record; `facility.html` plant facts | Easily checked, and the wrong answer dates you as a new entrant |
| Employee count, **with the date it was counted** | ______________ | Your payroll or attendance record | `about.html`; `facility.html` plant facts | A bare number goes out of date within months and then looks careless |
| Built-up area, in square feet | ______________ | The building drawing, or measured | `facility.html` plant facts (currently a TO CONFIRM chip) | Minor, but it is on the page |
| Plot size — acres or kanal | ______________ | The plot document or purchase record | `facility.html` plant facts | Minor, same as above |
| **Which belt of Faisalabad the plant is in** | ______________ | Your address and the local area name | `about.html` rail; `facility.html` | See below — this one is more useful than it looks |
| Markets actually served | ______________ | Your sales records | `index.html` data sheet | Overstating the markets you serve is a credibility loss on page one |
| Processes you actually run | ______________ | Your own floor | `about.html`; `dyeing.html`; `printing.html`; `finishing.html` | The finishing menu is a list of what the industry offers. Every row you do not run must be deleted. See §10 |
| Working days per week | ______________ | Your production schedule | `facility.html`; `capacity.html` | A buyer planning a delivery needs this more than almost anything else |

### Which belt of Faisalabad

Processing units in the district concentrate in three areas: the **Small
Industrial Estate on Sargodha Road** (plot-numbered plots, the densest
concentration of smaller and mid-sized units), the **Dhanola / Millat Road**
dyeing belt, and the larger **Khurrianwala / Sheikhupura Road** sites further
out. **VERIFIED** from the Punjab government district profile and the industry
association's directory.

Tell us which one you are in. A buyer arranging a visit, a courier, or a
third-party inspector needs it, and it tells them what kind of site to expect
before they arrive.

### What happens if these are wrong

**The contracting entity is the one that matters most.** Every page on this site
names *Al-Jilanee Textile Industry (Pvt) Ltd*. If the entity that actually signs
your quotations and invoices is a different company — a proprietorship, a
trading company, or a sister unit — then the website is describing one business
while your paperwork describes another. Buyers check this. So do auditors. We
will add a short, plain statement of which entity contracts as soon as you tell
us. Please tell us either way, including if the answer is simply "it is all the
same company".

**The address must be the one a courier can actually find.** If your registered
office and the plant are in different places, say so plainly on `contact.html`
rather than leaving a buyer to guess.

### A note on NTN and STR

The site deliberately does **not** print your NTN or STR. That was a decision,
not an oversight: in the research for this project these were treated as claims
that must not be published without written confirmation, alongside export-unit
status and duty-related terms.

If you want either number printed on the site, tell us **in writing**, after
checking with your accountant. Otherwise we will hold it on file and leave it
off the page.

---

## 3. Numbers

Every figure the site asks for, with the record you should read it out of.

**Read these three columns carefully:**

- **Your figure** — what you are publishing. This becomes a commitment.
- **Source of truth** — the record it comes out of. This is the whole point of
  the table.
- **Who signs it off** — the person who will be asked about it in six months.

The page `capacity.html` already tells buyers there are three kinds of number on
this site: a figure **we will stand behind**, an **industry range** for context,
and a **confirmed slot** booked against their order. Only put a number in the
first column if it belongs there.

### The warning that matters most in this section

> **Never take a capacity figure from a target. Take it from a record.**
>
> A target is what somebody decided the plant should achieve. A record is what
> the plant actually did. They are different numbers, and only one of them can
> be put in a contract.

**The method we recommend, so it is defensible:**

1. Take your daily production records for the **last three completed months**.
2. Work out the **daily output for each day the plant ran**, in kg of finished
   fabric.
3. Take the **median** — the middle value — not the average and not the best
   day. A quiet month or a power cut will drag an average down and a
   record-setting day will pull it up.
4. Write the figure like this: *"8,000 kg/day, based on the median daily output
   for May–July 2026."* The date is part of the claim.

**Two further rules:**

- Do not publish the **theoretical** capacity of a machine (the number on the
  specification plate) as your plant capacity. Publish what the plant achieved.
  If you want to mention the machine's rated capacity, publish it in the
  machine row on `capacity.html` where it belongs, and label it as the
  machine's rating.
- **Every duration must name the stage its clock starts from.** The homepage
  section *"Which stage does the clock start from?"* is the first thing on this
  site that no competitor does. If you write "45 days" anywhere, you have thrown
  away the one advantage the site was built around. Write "45 days from shade
  approval", or "45 days from strike-off approval", or whatever is true.

### A. Production and capacity — `capacity.html`

| Figure | Your figure | Unit | Source of truth — read it from | Who signs it off | Chip on |
|---|---|---|---|---|---|
| Dyeing throughput | __________ | kg/day | Last three months of daily production records, median | __________ | `capacity.html`, `index.html` data sheet |
| Monthly throughput | __________ | tonnes/month | The same records, summed per month | __________ | `capacity.html` |
| Dyeing machines in operation | __________ | machines | Count on the floor, not the purchase record — subtract anything idle or broken | __________ | `capacity.html`, `index.html` |
| Bulk machine capacity, each | __________ | kg | The machine's own rating plate (photograph it — §4) | __________ | `capacity.html` |
| Sample / lab machine capacity | __________ | kg | Same | __________ | `capacity.html` |
| Stenter capacity, each | __________ | __________ | Nameplate; speed if you can read it | __________ | `capacity.html` |
| Print capacity, each machine | __________ | m/min | The printer's specification plate, and only if you are willing to stand behind it | __________ | `capacity.html`, `printing.html` |
| Working days per month | __________ | days | Your actual production calendar for the last year | __________ | `capacity.html` |
| Shifts per day | __________ | shifts | The shift roster | __________ | `capacity.html` |
| Lot size band you will actually run | __________ | kg | The smallest and largest lots you have genuinely run | __________ | `capacity.html` |
| Colourways run in parallel | __________ | number | How many machines can run at once, not how many you would like | __________ | `capacity.html` |

**Industry context already printed on the page** — for your reference only, do
not copy these into the "your figure" column. The dyeing throughput band shown
as context is 6,000–25,000 kg/day, anchored on an audit of 21 operating
Pakistani processing mills (**VERIFIED**, per the research brief §E2). Sample
machines 10–100 kg; bulk machines 200–1,400 kg; lot flexibility 10–1,500 kg.

### B. Lots and minimums — `capacity.html`, `dyeing.html`, `printing.html`

| Figure | Your figure | Unit | Source of truth | Who signs it off | Chip on |
|---|---|---|---|---|---|
| Minimum per colourway — dye to order | __________ | m | Your smallest recent dye order | __________ | `capacity.html`, `dyeing.html` |
| Minimum per colourway — print | __________ | m | Your smallest recent print order | __________ | `capacity.html`, `printing.html` |
| Sample yardage for development | __________ | m | What you actually send out | __________ | `capacity.html` |
| Sensible first bulk order | __________ | m | Advice, not a rule — say who gives it | __________ | `capacity.html` |
| Greige you hold in stock, if any, and at what minimum | __________ | m | Your stock record | __________ | `dyeing.html` (currently a TO CONFIRM chip) |

**On minimums:** state them **per colourway**, not per order, because that is how
the process actually works — one colourway is one dye lot, and lots are never
pooled. A buyer who is told "our minimum is 5,000 m" and then receives five
separate colourways of 1,000 m has been misled.

### C. Working pattern — `capacity.html`, `facility.html`

| Figure | Your figure | Source of truth | Chip on |
|---|---|---|---|
| Working days (which days, and any half day) | __________ | The shift roster | `capacity.html` working pattern; `facility.html` plant facts |
| Shifts — production days only, or seven days | __________ | The shift roster | `capacity.html` |
| Annual shutdown, if any, and when | __________ | Last year's actual dates | `capacity.html` — the page notes this is a date buyers plan around |
| Office hours — when you actually answer | __________ | Your own working day | `capacity.html`; `contact.html`; `index.html` |

### D. Lead times and tolerances

| Figure | Your figure | Source of truth | Chip on |
|---|---|---|---|
| Lab dip turnaround — **and state which window it covers**: first submission, or a re-submission after a rejection | __________ | Your lab dip register | `dyeing.html`; `index.html` data sheet |
| Dyeing lead time you commit to, and the stage it starts from | __________ | Your order book — what you actually hit | `capacity.html` rail |
| Printing lead time you commit to, and the stage it starts from | __________ | Your order book | `capacity.html`; `printing.html` |
| Tolerance — GSM | ± _______ | Your specification sheet and your test records | `quality.html` |
| Tolerance — width | ± _______ | Same | `quality.html`; `finishing.html` |
| Tolerance — shrinkage, **and the test method** | ± _______ | Same. Name the method. | `quality.html`; `finishing.html` |
| Fastness you will guarantee, **and against which test method** | __________ | Your lab's actual method | `quality.html` |
| What happens if bulk misses the approved lab dip — your remedy | __________ | Your commercial decision | `dyeing.html` |
| Payment terms and incoterms you actually offer | __________ | Your accountant and your shipping agent | `dyeing.html` |
| Artwork formats you accept, for print | __________ | What your print unit can open | `printing.html` |

**On tolerances — read this twice.** The page `quality.html` says a published
tolerance is a stronger claim than a certificate, because it is a commitment
rather than a description. That is true. It also means a published tolerance
you do not hold is a claim you will be held to. Publish the tolerance you
actually work to, not the one a customer once asked for.

*(For context only: the research records that buyers in this trade commonly
work to GSM ±5 and width ±3 inches against the approved sample. **UNVERIFIED**
as a market norm. Yours may be tighter. Yours may not be.)*

### E. Water, power, steam and effluent — `capacity.html`

This is the part of the site most likely to be measured by an auditor, so it
has the strictest rule: **only publish a figure you have measured.**

| Figure | Your figure | Unit | Source of truth | Chip on |
|---|---|---|---|---|
| Water per kg of fabric processed | __________ | L/kg | The water meter reading divided by the kg produced, over a defined period. State the period. | `capacity.html` |
| Water metering in place | yes / no | — | Look at the meter | `capacity.html` |
| Effluent treatment on site | yes / no | — | Look at it, and confirm it is running | `capacity.html` |
| Effluent treatment capacity | __________ | m³/day | The unit's rated capacity plate | `capacity.html` machine table |
| The discharge standard you actually meet | __________ | mg/L | Your latest wastewater test report | `capacity.html` |
| Wastewater testing — how often, by which laboratory | __________ | — | The report itself | `capacity.html` |
| Connected load | __________ | kW | The sanctioned load on your electricity connection — the number on the bill or the connection agreement | `capacity.html` |
| Steam generation | __________ | t/h | The boiler's rating plate | `capacity.html` machine table |
| Captive generation | __________ | kVA | The rating plate. State the fuel and the running hours. | `capacity.html` machine table |

**Three warnings on this table:**

1. **Zero liquid discharge is not claimed anywhere on this site, and must not
   be claimed unless you can prove it with an audited figure.** The page says so
   in as many words. Do not add it.
2. **Power supply.** Faisalabad has faced sustained supply difficulty for
   several years, and captive generation is effectively universal in the sector
   (**VERIFIED**, research brief §E5). You will be asked about continuity of
   supply. Answer it factually — the number of generators, their capacity and
   their fuel, and how long you can run without the grid. Do not overstate.
   `about.html` has a TO CONFIRM chip waiting for exactly this.
3. **Water.** The published benchmarks on the page are 60–150 L/kg typical and
   50–75 L/kg best in class, and measured consumption across 21 audited mills
   ran from 74 to 313 L/kg (**VERIFIED**, §E4). Publishing your own number
   against that benchmark is a checkable claim. Publishing *"eco-friendly"* is
   not a claim at all.

### F. Quality and process — `quality.html`

| Item | Your answer | Source of truth | Chip on |
|---|---|---|---|
| Is dosing computerised? | __________ | The colour kitchen | `quality.html` recipe control step |
| Do you file the approved swatch and match repeats against it? | __________ | **Your own policy**, confirmed by whoever runs it | `quality.html`; `dyeing.html` |
| Which tests do you run **in house** | __________ | Your lab's actual test list | `quality.html` testing table |
| Which tests do you **send out**, and to which laboratory | __________ | The actual lab reports | `quality.html` |
| Describe your traceability records honestly | __________ | **Written by whoever actually keeps the batch records** | `quality.html` traceability block |

The testing table on `quality.html` asks you to mark every row as in-house,
outsourced, or not offered. Nine of its eleven rows are currently marked **To
confirm**; two are already marked **Outsourced** — restricted substances and
wastewater testing. The restricted-substances row carries the reason in the
table itself: *"Cannot be done in a mill lab. Requires an accredited chemical
laboratory."* Confirm those two against your own practice and leave them as they
are unless you have a real reason to change them.

**Accredited laboratories available in Faisalabad** (**VERIFIED**, §E6): the
Pakistan Textile Testing Foundation, accredited under ISO/IEC 17025 by the
Pakistan National Accreditation Council and by NEXT in the United Kingdom, plus
SGS and Intertek operations in the city. **Name the one you actually use.** A
real lab you use is worth more than a description of testing you cannot perform.

---

## 4. Machines — how to photograph a nameplate

The machine list on `capacity.html` is the most credible thing on the site,
because anyone who has worked in this trade can check it. It also has no
tolerance for error: the page states plainly that a wrong make is noticed
immediately and costs more credibility than an empty row.

So the make, model and rated capacity of every machine you publish must come
**off the machine itself**. Here is how to get a usable shot.

### Before you start — safety and permission

- [ ] Get the maintenance supervisor or the shift in charge to walk with you.
      Do not open an electrical panel, do not remove a guard, and do not stop a
      running machine to take its photograph.
- [ ] Photograph during a planned break or a changeover, not mid-cycle.
- [ ] Do not climb on a machine. If the plate is above head height, ask
      someone taller or use a stable step with a handrail.

### Step by step

1. **Clean the plate.** Wipe it with a dry cloth. Do not scrape, do not use
   solvent, do not retouch paint. A dirty plate photographs as an unreadable
   plate.
2. **Light it.** Use the plant's own lighting, or daylight if there is a window
   on that side. Do not use a camera flash — it produces glare off metal and
   blows out the first line of text. Do not stand where your own shadow falls
   across the plate.
3. **Stand square to it.** Hold the camera parallel to the plate. A tilted
   photograph makes text look like text it is not.
4. **Frame it.** The plate should fill about half to two-thirds of the frame.
   Leave a few centimetres of the machine body visible around it, so a buyer can
   tell which machine the plate belongs to.
5. **Set the exposure.** Tap the plate on the phone screen before you shoot. If
   you do not, the camera meters for the dark machine body and the plate goes
   black.
6. **Take three frames:**
   - one square-on showing the plate and some of the machine,
   - one tight on the plate alone,
   - one with a ruler or your hand next to it, for scale.
7. **Check before you walk away.** Open the photo on the phone screen and zoom
   in. Read out loud the make, the model, the year if it is there, and any
   capacity or width rating. **If you cannot read it, it is not a usable shot.**
   Retake it now, while you are standing there.
8. **Save it with the right name** (below).
9. **Write down what you read,** exactly as it appears, next to the row in the
   machine table.

### File names

Save every plate into `assets/img/` using this pattern:

```
nameplate-01.jpg
nameplate-02.jpg
nameplate-03.jpg
…
```

Lower case, hyphens, no spaces, `.jpg`. Keep the full-resolution original — we
will downscale for the web. Number them in the order you walk the plant, and
put the matching `nameplate-NN` reference in the machine table on
`capacity.html` so every row points at the photograph that backs it.

The plant page also wants one nameplate shot, published as **`facility-03`**,
1200 × 900. Pick your clearest plate for that one.

### What makes a nameplate shot usable

Tick all eight before you leave the machine:

- [ ] The **make** is readable
- [ ] The **model** is readable
- [ ] The **year of manufacture** is readable, if the plate carries one
- [ ] The **rated capacity or working width** is readable
- [ ] The plate is square to the camera, not skewed
- [ ] The plate is not in shadow and has no glare across it
- [ ] Enough of the machine is in frame to identify which machine it is
- [ ] No filter, no sharpening that turns a 0 into an 8

### If a machine has no nameplate

Some machines — particularly ones built locally, and Faisalabad has local
machine builders — may carry no data plate. If that is your situation:

- [ ] Photograph the machine itself, in full, from two angles.
- [ ] Photograph any manufacturer badge, works plate, or serial plate that does
      exist.
- [ ] Find the purchase invoice, the delivery note, or the service record, and
      send us a copy.
- [ ] Tell us. We will then say so in the table — "local build, capacity from
      the purchase record" — rather than publish an unsourced figure.

For reference: the makes recorded in the research as genuinely appearing on
operating Faisalabad units' published lists are **Monforts, Benninger, Goller,
Lafer, Ramisch, Cibitex, Bisio, Biancalani, Osthoff, Brugman, Kusters, Sclavos,
Fongs, Then, Thies, Brueckner, Santex, Ferraro** for wet and finishing
equipment, and **Epson, Atexco, Aroli, SETEX** for digital printing and colour
control. Local builders named are **Noori Engineering** and **Skilled
Industries** (**VERIFIED**, §E7).

**This list is a reference for you, not a menu.** `capacity.html` says it in as
many words: *"Do not name a make that is not on the nameplate."* It is the
fastest way to disqualify the unit with a buyer who has worked in this trade
for five minutes.

### Why an illegible nameplate means the machine list is unsubstantiated

This is worth stating plainly, because it is not a small thing:

1. **The site promises a photo on demand.** `facility.html` offers nameplates on
   demand: *"Ask for a photo of any machine on our list, and you will get one
   with its nameplate visible. If we cannot produce it, that machine is not on
   the floor."* An illegible plate means you cannot honour that promise.
2. **A live video walk is the main verification offer.** The site invites a
   buyer to walk the floor on a live call and watch the machines running. A
   nameplate that cannot be read on a phone camera in that light cannot be read
   on a video call either.
3. **A wrong make costs more than an empty row** (**VERIFIED**, §C2). A reader
   who spots one wrong make stops trusting the whole table — including the rows
   that were correct.
4. **The alternative is worse than doing nothing.** The research found a live,
   ranking Faisalabad site with a fabricated founder carrying a stock headshot
   and a hero image file literally named `istockphoto-1069103796-612x612-1.jpg`
   (**VERIFIED**, §A6). That is what an unsubstantiated machine list drifts
   into.

---

## 5. Photographs

### The shot list

Ten photographs is the intended coverage of the plant. The page now defines
**nine frames**, `facility-01` to `facility-09`, and its introductory text has
been corrected to say "Nine photographs cover the plant" so that the count a
visitor can verify matches the number promised. If you would rather have ten,
add the tenth frame rather than editing the number.

| # | File name | Size | The shot | What it proves |
|---|---|---|---|---|
| 1 | `facility-01.jpg` | 1600 × 1200 | Dye house — machine line. Wide shot down the length of the dye house, machines on both sides, nameplates in frame if possible. | How many machines exist and how the floor is laid out |
| 2 | `facility-02.jpg` | 1600 × 1200 | A machine mid-run, loaded. | That the floor is working. A static, empty dye house is the single most common sign of a unit that is not currently operating |
| 3 | `facility-03.jpg` | 1200 × 900 | Machine nameplate, close and straight on. | This is the photograph that supports the machine list. **If a nameplate is not legible, the machine list is not substantiated** |
| 4 | `facility-04.jpg` | 1600 × 1200 | Printing hall. The printer running, with cones or screens visible. | Whether the unit prints at all, and which method — the first thing a buyer checks against the printing page |
| 5 | `facility-05.jpg` | 1600 × 1200 | Stenter line. The stenter in operation, fabric entering and leaving. | Capacity. The stenter is the bottleneck in almost every processing plant |
| 6 | `facility-06.jpg` | 1200 × 900 | Lab dip room. Sample machines, the dip bench, the lightbox. | The lab-dip turnaround claim. **Do not publish a turnaround figure without this room existing** |
| 7 | `facility-07.jpg` | 1600 × 1200 | Finished rolls, packed and labelled, with a visible roll label. | The packing standard, and that orders are genuinely being prepared for dispatch |
| 8 | `facility-08.jpg` | 1200 × 900 | Effluent treatment. | **Only photograph it if it is operating.** A visible treatment plant with no stated standard invites a harder question than no photograph at all |
| 9 | `facility-09.jpg` | 1200 × 900 | Boiler and steam plant. | The steam generation figure on the capacity page, and continuity of supply — a question a serious buyer always asks |

### Three notes on this table before you pick up the phone

**One. The page used to say ten, and defined nine. Now fixed.** The
introductory text on `facility.html` read *"Ten photographs covers the plant"*
while only nine frames were specified, ending at `facility-09`. On a site whose
whole argument is that it does not overstate itself, a promise the reader can
count and disprove is worse than no promise. The sentence now says nine. If you
would rather have ten, **send a genuine tenth shot and we will add it properly.
Do not** photograph something to fill a gap.

**Two. The homepage reuses three of these file names for different shots.**
`index.html` currently labels its three placeholder frames `facility-01`,
`facility-02` and `facility-03` as *dye house*, *printing hall* and *stenter* —
which does not match `facility.html`, where those same three numbers mean *dye
house*, *machine mid-run* and *machine nameplate*. **If photographs are dropped
in by file name, three images will land in the wrong slots.** This will be
corrected before launch; it is recorded here so that nobody wastes a day
photographing to the wrong brief.

**Three. Shoot 4:3, landscape.** Every size in the table is 4:3 because the page
displays each frame in a 4:3 box and crops whatever does not fit. Anything shot
taller or wider loses its edges. Horizontal framing, machine whole, not sliced
in half.

### Hard rules

- [ ] **Real photographs only.** Taken by you, on your floor, in your plant.
- [ ] **No stock photography.** Not free, not from a subscription library, not
      "for illustration".
- [ ] **No images taken from another company's website**, and no images from a
      supplier's marketing material.
- [ ] **No AI-generated or rendered images** of a factory. Not as a
      placeholder, not as a background, not as "until we get real ones".
- [ ] **No heavy filters, no HDR** that invents a clean floor or brightens a
      dark dye house into something it is not.
- [ ] **No staged shots.** If the floor is busy, photograph it busy. If it is
      quiet, photograph it quiet.
- [ ] **No confidential information in frame.** Customer names printed on your
      fabric, order paperwork, screens showing buyer data, or another company's
      roll labels. Turn the roll, move the camera, or crop it out. If a person
      is recognisable, get their permission.
- [ ] **Keep the original full-resolution file.** We will downscale.
- [ ] **Do not publish a recorded plant tour as evidence.** The site offers a
      *live* video walk precisely because a recorded tour is staged and a live
      walk is not. Offer the call; do not pre-record a walk-around and put it up
      as proof.

### What a buyer concludes

**From a stock photo:** that nobody who built the site ever stood on a dye house
floor. And from there — that the capacity numbers are borrowed too, that the
certificate list is decorative, and that the lead times are guesses. Buyers in
this trade identify a generic factory image in seconds: too clean, no people, no
dust, wide-angle, nobody wearing anything that belongs on a production floor.
This is not a theoretical risk. The research found exactly that failure in the
wild (**VERIFIED**, §A6).

**From a working floor:** that the plant is running, that the machines in the
photograph are the machines in the machine list, and that somebody put their
name to the pictures.

There is also a self-consistency point, and it is the strongest argument on this
page. `quality.html` publishes an explicit list of what this site does not
claim — and among them is **"No stock photography."** If the photographs on
`facility.html` turn out to be stock, the site is lying in the exact place it
promised to be honest. That is worse than having no photographs at all, because
the placeholders are already doing their job.

**If the budget for a photographer only covers two frames, shoot `facility-02`
and `facility-03`** — a machine actually running, and a legible nameplate. The
page itself says these two do more for a buyer's confidence than a wide shot of
the whole plant.

---

## 6. Certificates

### What to send

- [ ] **The PDF or a clear scan of the certificate itself.** A photograph of
      the certificate laid flat, in full, square to the camera, with the
      signature and stamp area legible. A second, tighter shot of the **number**
      and the **expiry date**.
- [ ] The **certificate number**, exactly as printed.
- [ ] The **issuing body's** full name.
- [ ] The **scope** — what it actually covers.
- [ ] The **issue date** and the **expiry date**.
- [ ] The **name of the legal entity on the certificate.** It must match the
      entity in §2. A certificate issued to a sister company does not certify
      this plant.

### Where to put the file

Create this folder and put the documents in it:

```
assets/certificates/
```

It does not exist yet. The certificate log book on `quality.html` already links
to `assets/certificates/[file].pdf`.

**File naming:**

```
assets/certificates/<scheme>-<body>-<number>.pdf
```

Lower case, hyphens, no spaces. For example:
`assets/certificates/iso9001-nqa-12345.pdf`. This keeps the folder readable and
makes the log book row trivial to build.

### The certificate log book — the five fields

`quality.html` carries a certificate log book with exactly these columns. It is
the highest-trust pattern found anywhere in the Pakistani sector (**VERIFIED**,
§C1), and a buyer can verify every row in under a minute. Copy this table and
fill one row per certificate.

| Field | What goes in it | Why the column exists |
|---|---|---|
| **Certificate** | The scheme name, exactly as the body writes it | The buyer looks for their scheme by name |
| **Certification body** | The full registered name of the issuer | Tells the buyer who to go and ask |
| **Number** | The certificate or licence number | This is what makes the certificate verifiable rather than decorative |
| **Expires** | `DD-MM-YYYY` | The single most useful date on the page — it tells the buyer how much runway they have |
| **Scope** | Which products, processes and sites it covers | Stops a buyer assuming a facility certificate covers a facility they have not seen |
| **Document** | A link to the PDF in `assets/certificates/` | Removes the need to ask for anything by email |

### Three checks before you send anything to us

- [ ] **Name.** The entity named on the certificate is the entity named on your
      website and on your invoices.
- [ ] **Scope.** The scope covers what you are about to claim it covers. A
      certificate whose scope names a different site, or names manufacturing
      rather than processing, does not certify this plant.
- [ ] **Expiry.** The date is in the future, today.

### The self-listing step — a certificate nobody can find is invisible

- [ ] **OEKO-TEX — VERIFIED.** OEKO-TEX instructs certified firms to publish
      themselves: *"Do you carry a valid certification and want to be part of the
      Buying Guide? Log into OEKO-TEX® Connect."* Log in, list the company, and
      check that the entry appears. The research states the consequence in one
      line: **a certificate held but never published online is commercially
      invisible.** Nobody finds you by a certificate they cannot see.
- [ ] **GOTS / GRTS — ask your issuing body.** Our research verified the
      OEKO-TEX instruction directly and did **not** verify an equivalent
      published listing step for GOTS/GRTS. Treat the OEKO-TEX step above as a
      definite instruction and this one as a question to put to whichever body
      issued your certificate: *how do we appear in your certified-supplier
      listings, and what is the reference?* Send us the listing reference and we
      will publish it.

### ⚠️ If any certificate says "GRS" — check it before printing the term

**VERIFIED:** the body that operates GOTS states that it develops and operates
GOTS and GRTS, and describes **GRTS** as *"a new textile processing standard
covering a broader range of eligible fibres"*, announced **14 September 2026**.
GOTS itself is at **Version 8.1** (22 July 2026).

**UNKNOWN:** whether GRS has been formally withdrawn or is in transition. The
research could not reach the Textile Exchange site to confirm either way.

So:

- [ ] If you hold a physical certificate that prints **GRS**, tell us the exact
      wording and the expiry date. Do not assume it is still valid, and do not
      assume it is void.
- [ ] Re-verify **any older literature** that says "GRS certified" — an old
      price list, a letterhead, a brochure, a previous website — before reusing
      the term anywhere.
- [ ] The site already lists **GRTS / RCS**, not GRS, and carries a warning to
      check any physical certificate before printing the term. That warning stays
      until this is settled with the issuing body.

### Maintenance — this is not a one-off

- [ ] Put a **calendar reminder two weeks before every expiry date** in the log
      book. The page says a log book with a stale expiry date is worse than no
      log book, because it turns a transparency gesture into evidence of
      inattention.

### If you hold no certificates

Then the log book says so, in the words it already uses: *"No other
certificates are held at the time of publication."* That row is not a gap in
the website. It is the current state of the business, and it is the honest
position.

Leave it in place. The research found that the strongest site in the sector
publishes its certificate table **empty of anything it could not substantiate**,
and that the highest-value pattern in this sector is the table itself — its
presence proves discipline whether or not it is full. Publishing the gaps is
faster and more credible than being found out.

**What we do need from you either way:** a tick against every row of the
certification register on `quality.html`, so that each scheme reads *held*,
*in progress*, *available on request*, or *not held*. A row left as "To confirm"
means you have not said.

---

## 7. People and contact

### Who a buyer speaks to

| Field | Your answer |
|---|---|
| Name | __________ |
| Role — the actual job title | __________ |
| What they can decide | __________ |
| Direct line | __________ |
| Email | __________ |
| WhatsApp | __________ |
| Languages they actually speak | __________ |

In a unit of this size this is usually **one or two people**, and that is an
advantage, not a weakness — a buyer who can reach the person who decides is
buying from a business rather than from an inbox.

**Say what they can decide.** "Pricing and lead time" is useful. "Export
documentation" is useful. "Everything" tells the reader nothing.

`about.html` has a **TO CONFIRM** chip waiting for exactly this, and its own
instruction is worth repeating: *"naming them is a stronger trust signal than a
'management team' section with stock photographs."*

### Why a named person beats a generic mailbox

`contact.html` already makes the point. The field data backs it up.

- **VERIFIED.** Across all 114 Faisalabad member records in the association's
  directory there are 114 fax numbers, 114 landlines and 113 email addresses —
  and **exactly one mobile number**. Not one WhatsApp contact. Forty-nine of the
  114 use free mail such as Gmail or Hotmail as their only business address. One
  email address is copy-pasted across **six different member companies**
  (**VERIFIED**, §A5).

A generic mailbox in this market is frequently nobody's. A named person with a
direct line is the opposite of that.

### Role-based mailboxes

The site currently uses one address, `info@aljillanitex.com`, in `contact.html`
and `index.html`. A small, clear set is better than one:

| Mailbox | For |
|---|---|
| `info@…` | General enquiries — keep this one |
| `orders@…` / `sales@…` | Quotations, order confirmations |
| `quality@…` | Lab dips, test results, certification questions |
| `accounts@…` | Invoices, payment, letters of credit |

These are **suggestions**, not requirements. Tell us which ones actually exist
and we will publish only those. `contact.html` has a "Direct to a department"
channel with a **TO CONFIRM** chip waiting for this.

> **⚠️ The email domain does not exist yet.** `info@aljillanitex.com` sits on
> the domain that has no DNS record at all (§1). Until the domain is registered
> and mail hosting is set up, that address cannot receive anything. **Nobody
> replies to a buyer from a mailbox that does not exist.** Set this up on the
> same day you register the domain.

### The other channels

| Channel | Your answer | Note |
|---|---|---|
| Office / landline | __________ | `contact.html` and `index.html` both carry a `TO CONFIRM` chip |
| Mobile / WhatsApp | __________ | This is the primary channel. The site is built around it |
| **Fax** | __________ | See below — do not skip this one |
| Office hours | __________ | The hours you actually answer, not the hours you would like to |

**On the fax: supply it.** **VERIFIED** — the association's directory carries a
fax number for **100% of its 114 Faisalabad members**. In this market a fax
number is expected, and its absence is read as a sign of a very small or
unofficial operation. `contact.html` already has a Fax channel with the note
*"For purchase orders and lab-dip submissions, not for enquiries"* — that
distinction is deliberate and worth keeping.

### Office hours and a stated response commitment

- [ ] **Office hours:** the hours a person actually answers WhatsApp and email.
- [ ] **Response commitment:** what a buyer can expect, and by when.

The site carries a **TO CONFIRM** chip in several places for this:
`contact.html` (the WhatsApp channel, *"Replies — hours to confirm"*, and the
*"What happens after you send it"* block), and `index.html` (*"Replies during —
hours to confirm"* in the fact strip, and *"Office hours — to confirm"* under
the telephone channel).

State a time you can keep. **A stated reply time is one of the few things on
this page a competitor cannot copy without lying.** If the honest answer is
"same working day, Monday to Saturday", publish that.

---

## 8. Logo and brand assets

### What is on the site right now

There is **no company logo on this site.** The header uses a neutral mark drawn
in code — three stacked bars inside a square — together with the name set as
type. It is a placeholder that was designed to look deliberate, and it is used
consistently in the header and footer of all nine pages.

Four image files support it:

| File | Size | Used for |
|---|---|---|
| `assets/img/favicon.svg` | any | Browser tab |
| `assets/img/apple-touch-icon.png` | 180 × 180 | Phone home-screen icon |
| `assets/img/logo-512.png` | 512 × 512 | Link previews and structured data |
| `assets/img/og-default.png` | 1200 × 630 | The picture WhatsApp and social platforms show when the link is shared |

### If you have a real logo

Send us:

- [ ] The **original vector file** — `.ai`, `.eps` or `.svg`. Never a
      screenshot, never a JPEG of a logo, never a Word document.
- [ ] The **brand name spelled exactly as you want it** on screen.
- [ ] The **full-colour** version and a **one-colour** version, so the logo
      works in print, on a fax, and on a single-colour label.
- [ ] The **colours written down** — the hex codes or the Pantone references.
- [ ] Whether the **registered company name** and the **brand name** are the
      same. If they differ, tell us which appears where.
- [ ] **Signed permission** from whoever drew it. See §10.

We will regenerate the four files above from your original, at the sizes listed.

### If you do not have a logo

**The site works without one.** The current mark is a deliberate placeholder and
nothing on the site depends on a logo existing.

- [ ] **Keep the current mark.** This is the recommended default. It is clean,
      it loads instantly, and it does not pretend to be an identity you have not
      built.
- [ ] **Commission one.** If you decide to, that is a normal cost and a normal
      delay, and it should not hold up the launch. **We do not quote a figure or
      a timeline for design work here** — ask a designer for both, in writing,
      and take the highest quote as the real one.

Either way, the launch is not blocked by this item.

---

## 9. Documents to publish later

Once the site is live, these can be added. Publishing a document is stronger
than promising it on request — the research found one site advertising "audit
reports, certificates and test results available to buyers on request" and
another publishing the same documents, and found that publishing converts better
(**VERIFIED**, §C6).

### Folder layout

```
assets/certificates/     certificates, one PDF each
assets/documents/        everything below
```

`assets/certificates/` does not exist yet. `assets/documents/` does not exist
yet. Both are created on request.

### What to add, and when

| Document | Where it goes | When |
|---|---|---|
| Each certificate PDF | `assets/certificates/` | As soon as it is held — see §6 |
| Latest wastewater test report | `assets/documents/` | When you have one; it directly answers the effluent question on `capacity.html` |
| APTPMA membership confirmation | `assets/documents/` | Whenever the current one is available |
| A one-page company profile PDF | `assets/documents/` | Useful for a buyer filling in a supplier form — but only if it matches the website exactly |
| Your own traceability and records description | `quality.html` | See §3F |
| Batch record sample, redacted | `quality.html` | Only if you are comfortable; a redacted example is genuinely persuasive |

### Rules for anything published here

- [ ] **PDF, not a screenshot.** A screenshot of a certificate is what a
      certificate nobody can verify looks like.
- [ ] **Nothing with a buyer's or another company's confidential data on it.**
      Customer names, order books, per-customer pricing, shipping documents,
      letters of credit.
- [ ] **Nothing that says you are an export-oriented unit without written
      confirmation from your accountant.** Duty drawback is restricted to
      value-added products, and the research deliberately excluded every
      export-benefit claim it could not verify. `quality.html` carries a row
      telling you the same thing: *"Do not claim this without written
      confirmation from your accountant."*
- [ ] **One owner for keeping it current.** A published document that has been
      superseded is worse than no document. Put the renewal date in the same
      calendar as the certificate expiries.

---

## 10. Do not send us

These are the things that look like evidence and are not. In each case the site
would end up making a claim it cannot support — and this particular site is
built so that it never does.

| Do not send | Why it looks like evidence | Why it is not | Send this instead |
|---|---|---|---|
| **Stock photography** | It fills the frames, and it looks professional | `quality.html` explicitly promises **no stock photography**. Stock images of a factory are recognisable in seconds, and they contradict a promise made in public | The real floor, per §5 |
| **A competitor's certificate** | It looks exactly like yours | It is not. Publishing it is misrepresentation, and the buyer will check the number with the issuing body | Nothing. The log book's "no other certificates held" row is a stronger position than a borrowed PDF |
| **A group or sister company's certificate whose scope does not cover this plant** | It is your group's brand | The scope is what certifies the site. A certificate naming another site does not cover this floor | Your own certificates; or state the group relationship honestly, naming which site each certificate covers |
| **A logo you have no right to display** | It is already on your old letterhead | A logo drafted by a designer you never paid, borrowed from a previous employer, or belonging to a customer, creates a legal exposure on your own website | The current neutral mark, or a logo you own outright — see §8 |
| **A capacity number taken from a brochure** | It is a real number, from someone who knows the trade | A brochure figure is a sales claim, usually a theoretical machine maximum, usually years old | The median of your last three months of daily production records — see §3 |
| **A capacity number taken from a target** | It is what the plant is aiming for | A target is not a capability. When the order arrives, the buyer will hold you to the number you published | What the plant actually achieved, with the period stated |
| **A machine make you cannot photograph** | It is almost certainly the right make | The page says: *"Do not name a make that is not on the nameplate."* A wrong make costs more credibility than an empty row | An empty row, or a nameplate shot — see §4 |
| **A certificate number without an expiry date** | The number looks official | Without the expiry a buyer cannot plan around it, and the row looks like decoration | Both, every time |
| **"GRS certified" copied from old literature** | It was true once, probably | Whether GRS is withdrawn or in transition is **UNKNOWN**; GRTS was announced 14 September 2026 and covers a broader range of fibres | The exact wording of the certificate in your hand, and a check with the issuing body — see §6 |
| **Export-unit status, duty drawback, Form-A, or similar** | They are advantages every exporter has | The research deliberately excluded all of them as unverifiable, and the sources could not be reached | Nothing, unless your accountant confirms it **in writing** |
| **Client names or a logo wall** | It is the strongest social proof available | The site promises **no client logo wall** and **no unverified testimonials**. Most of these would need written permission you probably do not have | A named reference, if you have permission — offered by email, not printed |
| **An employee count with no date** | It is a simple fact | It is out of date within months and then reads as careless | The number, with the month it was counted |
| **A testimonial you cannot attribute** | It builds confidence | Unverifiable testimonials are on the site's own list of things it does not claim | A real quote from a real buyer, with their written permission and, if they ask, their name |

---

## 11. The one-page summary

Print this. Tick it. When every line is either ticked or deliberately marked
**UNKNOWN**, the site can go live.

### TODAY

- [ ] **Register `aljillanitex.com`** — it is unregistered and anyone can take it
- [ ] Set up mail hosting on that domain — `info@…` cannot receive anything today
- [ ] Confirm the legal entity name, exactly as registered
- [ ] Confirm which entity signs the contract

### THIS WEEK

- [ ] Registered address, and plant address if it is different
- [ ] Year established; employee count **with the date**
- [ ] Which belt of Faisalabad you are in
- [ ] Which processes you actually run — then delete every finishing and dye-class row you do not run
- [ ] Office landline, mobile/WhatsApp, **fax**, office hours
- [ ] The person a buyer speaks to, their role, and what they can decide
- [ ] A response commitment you can keep

### THE MACHINES — one walk of the plant

- [ ] Photograph every nameplate using the method in §4
- [ ] Tick all eight "usable nameplate" checks on each one
- [ ] Save as `nameplate-01.jpg`, `nameplate-02.jpg`, …
- [ ] Transcribe make, model, year and rated capacity for each row
- [ ] Fill in quantity and working width
- [ ] **Check the dye class table and the machine list agree with each other** — `dyeing.html` states the consequence in its own text: *"If the two disagree, the site loses its credibility entirely."*

### THE NUMBERS

- [ ] Daily and monthly throughput — from records, median of three months, period stated
- [ ] Machines in operation, and capacity per machine
- [ ] Lot sizes: minimum per colourway, dye and print; development yardage
- [ ] Working days, shifts, shutdown weeks
- [ ] Lead times — **each one naming the stage its clock starts from**
- [ ] Tolerances — GSM, width, shrinkage — **and the test method behind each**
- [ ] Lab dip turnaround, **and which window it covers**
- [ ] Water per kg, ETP capacity, connected load, steam generation, captive generation
- [ ] Who signed each figure off

### THE CERTIFICATES

- [ ] Every certificate: PDF, number, body, scope, issue date, expiry date
- [ ] Legal entity on each certificate matches the entity in the contract
- [ ] The **GRS / GRTS** question settled with the issuing body
- [ ] Listed in the OEKO-TEX Buying Guide (if held)
- [ ] Asked the GOTS/GRTS issuer how to appear in their supplier listings
- [ ] Calendar reminders set, two weeks before every expiry
- [ ] Every row of the certification register ticked — held, in progress, on request, or not held

### THE PHOTOGRAPHS

- [ ] `facility-01` to `facility-09`, at the sizes in §5
- [ ] Real photographs only — no stock, no competitor images, no generated images
- [ ] No customer names, paperwork or buyer data in frame
- [ ] `facility-08` (effluent) photographed **only if it is actually running**
- [ ] Nothing published that contradicts the promises on `quality.html`

### BEFORE LAUNCH

- [ ] Every **TO CONFIRM** chip on all nine pages is resolved into a value, a deletion, or an honest statement
- [ ] `data-draft="true"` removed from all nine `<html>` tags — the orange DRAFT ribbon disappears by itself
- [ ] Domain resolves, website loads on the domain, email works
- [ ] The nine photographs and all nameplates are in place, and the shot-count and filename issues at the end of this document are settled
- [ ] Somebody other than the person who filled this in has read the live site end to end

---

## Notes for whoever maintains the website

Four things in the build are recorded here so they are not lost.

- [x] **`facility.html` links to `docs/06-CLIENT-CHECKLIST.md`.** The path was
      wrong (`docs/CLIENT-CHECKLIST.md`, which does not exist) and is now
      corrected. **One action still remains, and only you can do it:** `docs/` is
      not a published directory, so on the live site this link will still 404 for
      a visitor. Before launch, either publish `docs/` or replace the link with
      the capture instructions as plain words.
- [x] **The shot-count mismatch — fixed.** `facility.html` promised "ten
      photographs" and defined nine. The sentence now says nine. Do not invent a
      tenth frame to make a different number true.
- [ ] **The filename collision.** `index.html` labels its three placeholder
      frames `facility-01`, `facility-02` and `facility-03` as *dye house*,
      *printing hall* and *stenter*. `facility.html` uses the same three numbers
      for *dye house*, *machine mid-run* and *machine nameplate*. Fix before any
      photographs are dropped in by file name.
- [ ] **The WhatsApp placeholder.** `data-wa="923000000000"` sits in the `<body>`
      tag of all nine pages, and `tel:+923000000000` appears in
      `contact.html` and `index.html`. It is a placeholder in a live link. It
      must be replaced with the real number, in international format, digits
      only, before launch.
