# 02 — Content strategy, tone of voice, and the copy system

**Al-Jilanee Textile Industry (Pvt) Ltd, Faisalabad — website documentation**

This file is the writing manual for the site. It is written for two people: the
owner who commissioned it, and the junior member of staff who will be left
maintaining it. You do not need to know anything about websites to use it.

Everything in it is traceable. Where a statement comes from the research brief
(`docs/00-RESEARCH.md`), it is labelled **VERIFIED**, **MEASURED**,
**UNVERIFIED** or **UNKNOWN** using the definitions in that document. Where it
comes from the site's own files, it is labelled **[MEASURED — from the build]**.
Where it is my judgement as a consultant, it says so in the sentence.

Nothing in this file is a fact about the company unless the company's own
website already says it. Capacity, machines, prices, certificates, addresses
and phone numbers are **UNKNOWN** until the owner supplies them, and the copy
system below is built so that a missing fact is visible rather than invented.

---

## 1. Who this site is written for

### 1.1 The one-sentence definition of the reader

> A fabric buyer, exporter or sourcing manager who is qualifying a processing
> partner, probably outside Pakistan, at a desk, and who will decide within
> about ten minutes whether to send one specification.

This is not a consumer. Nobody is browsing. The reader is checking.

### 1.2 What the reader already knows

They arrived knowing the trade's vocabulary. They are not looking for a
definition of a dye house. They want four things the site must give them
quickly:

| They know | They are checking | Where the site answers it |
|---|---|---|
| What "pure processing" means, and that it differs from a composite mill | Whether we know our own scope, or are claiming to be bigger than we are | Homepage "What pure processing means here" callout; `about.html` §1 |
| How lots, colourways and lead times work | Whether we will quote a real date or a vague one | Homepage §4; `dyeing.html` lot structure |
| Which certificates a processor should hold | Which we hold, and which we have never applied for | `quality.html` register and log book |
| That a headline number is easy to write and hard to check | Whether our numbers are checkable | `capacity.html` machine table |

Because they already know the vocabulary, **the jargon is not the problem. The
ambiguity is.** A reader who knows what mercerising is does not need it
explained; they do need to be told whether we run it.

### 1.3 What the reader is afraid of

Four fears, in the order they occur:

1. **The supplier will not answer the phone, or the person who answers is not
   the person who decides.** → `about.html` names who the buyer deals with; the
   `quality.html` "Verify us" list tells the buyer to ask a question we would
   rather not answer.
2. **The mill is not what the website says.** Nine in ten processing units in
   Faisalabad have no website at all, so a website is unusual here and can be
   treated as a claim rather than as information. **VERIFIED** (`00-RESEARCH`
   §A1–A3).
3. **The order will be late and the reason will be the buyer's own delay in
   approving a shade.** → Homepage §4 names where the clock is running at every
   stage.
4. **The fabric will fail a buyer's audit, and that is the buyer's problem,
   not ours.** → `quality.html` publishes the testing split and the
   certification gaps.

### 1.4 What makes them close the tab

Every one of these is a documented finding from the audit, not an opinion:

| What they see | Why it kills the read | Source |
|---|---|---|
| Placeholder text in production ("Lorem ipsum"), a stock photo, a template footer | The site was assembled, not written by anyone who works there | **VERIFIED** — `00-RESEARCH` §A6 |
| A stat counter that renders zero | Same | **VERIFIED** — §A6 |
| A certificate with no number, body or expiry | It cannot be verified, so it is worthless | **VERIFIED** — §C1 |
| A lead time with no starting stage | The promise cannot be checked and probably cannot be kept | **VERIFIED** — §E3 |
| A photo gallery of obviously stock images | The plant has not been seen | **VERIFIED** — §C6 |
| A page that is mostly image and almost no text | Nothing loads on a bad connection, so there is no case at all | **MEASURED** — §C3, the six audited sites run 0.23%–20.25% text by weight of their HTML |
| "Leading", "world-class", "zero defect" | Every buyer in this trade has read a hundred of these | **VERIFIED** — §A6, §C6 |

Note the direction of the last one. A competitor that discloses what it does
**not** have — TSG Tintoria states plainly that its ZDHC team has completed
training but the company has not joined the protocol — is doing the opposite of
what closes a tab. **VERIFIED** (`00-RESEARCH` §C6). That single line is the
tone model for this whole site.

### 1.5 How the reader actually gets here

Deals in this trade are still closed face to face; the US Department of
Commerce's own country guide says face-to-face contact is the business norm,
with the internet named as the channel that is growing. **VERIFIED**
(`00-RESEARCH` §A7).

So the website is not replacing relationship selling. It has three jobs:

1. Make the **first** contact faster, by letting a buyer self-qualify before
   they ever message.
2. **Survive the second** one, by being the document a buyer re-sends to a
   colleague who was not in the room.
3. Give an answer that a colleague in another country can read without a call.

Because the buyer is at a desk and probably outside Pakistan, and because
Pakistan itself is **64.51% desktop / 35.49% mobile** **MEASURED**
(`00-RESEARCH` §D7), the reading posture is a person at a monitor, often
re-reading one section rather than scrolling once. That is why the site is
tables rather than pictures, and why there is no hero image.

---

## 2. Tone of voice

### 2.1 The house style in one line

> **A competent engineer who respects your time.**

Not a salesman. Not a brochure. The voice of the shift supervisor who has run
the machine for fifteen years and will tell you the job cannot be done that way
before you pay for the mistake.

Three consequences of that voice, which every rule below comes from:

- **It answers first.** The answer is in the first sentence. The reasoning is
  after it, for the reader who wants it.
- **It names the number or it says it has no number.** There is no third option.
- **It is short.** A sentence that survives being said aloud in a dye house,
  in noise, survives being read on a phone in a hotel room.

### 2.2 How to state a number

| DO | DON'T |
|---|---|
| Give the unit and the basis: "30–60 days **from shade approval**", "200–1,400 kg **per machine**". | "We are fast." / "High capacity." |
| Say which of three kinds it is: **our commitment**, **industry range**, or **a slot confirmed against your order**. The `capacity.html` page teaches all three with three cards before the first table appears. **[MEASURED — from the build]** | Let the reader guess. A number without a label is a sales figure. |
| Publish a band with its source, not a flattering midpoint. The site uses 6,000–25,000 kg/day and names the 21-mill audit underneath it. **VERIFIED** (`00-RESEARCH` §E2) | Publish a round number you cannot defend. "25,000 kg/day" is a claim; "6,000–25,000 kg/day, industry range" is context. |
| Keep our figure and the industry figure in different columns, always. | Put our number next to a benchmark in the same cell. It silently becomes the benchmark. |
| Never state a rating without the test method. | "Wash fastness 4–5." Without the method, the number means nothing. The site already says this on `finishing.html`: *"A rating is only meaningful with the test method named alongside it."* |
| Never state a tolerance without its reference. "GSM ±5 against the approved sample" is a commitment. "GSM ±5" is not. | Publish a tolerance you have never held for a full season. |

The test: **would the buyer be able to check this number against something
outside our website?** If not, it is a claim, and claims need the source.

### 2.3 How to state a limitation

Three moves, always in this order:

1. **Name it.** Not bury it in a paragraph.
2. **Say what it would cost to remove** — money, time, and what has to change in
   the plant.
3. **Say whether it is worth doing for the buyer's order**, and be willing to
   say no.

The template, already used on `quality.html`:

> If your programme requires a certificate we do not hold, we will tell you
> what it costs, how long it takes, and whether it is worth starting — and we
> will say plainly if the answer is no.

| DO | DON'T |
|---|---|
| "We do not run cold pad-batch. On your construction that route would not have been right anyway." | "We offer a comprehensive range of dyeing services." |
| "Our lab-dip turnaround is not measured often enough to publish, so here is the trade range instead." | "Fast lab dips." |
| Delete the row entirely where the honest answer is "we do not do this". `finishing.html` instructs the owner: *"Delete every row we do not run."* | Leave a menu of what the industry offers and let the buyer order the row you cannot deliver. |

That last point is the single most likely way this site gets falsified by
accident, and the site says so in its own instruction text.

### 2.4 How to disagree with a buyer's assumption

The reader is competent. Disagreeing with them is a technical act, not a
personal one. Four moves, in order:

1. **Confirm** — restate their assumption in their words, so they know it was
   heard.
2. **Correct** — give the reason it does not hold *here*, with a mechanism, not
   a verdict.
3. **Consequence** — say what will actually go wrong, in their terms.
4. **Alternative** — offer the route that works.

Three real examples from the current pages, all in the same shape:

- Homepage, on comparing a processor to a mill: *"You are comparing a
  processing quote against a composite mill's price, you are not comparing the
  same thing — and we will say so before you send us the order."*
- `finishing.html`, on soft fabric: *"A soft towel and a soft t-shirt are
  opposite requirements — never specify both from one base."*
- `printing.html`, on moving from digital to rotary: *"A strike-off approved on
  digital does not automatically approve the rotary version."*

| DO | DON'T |
|---|---|
| "Cotton goes on a reactive route, not a disperse one. Sending cotton to a polyester route wastes a lot and a machine slot." | "That is not how we do it." |
| Name the trade term the buyer's own words are missing, then explain it in one line. | Use the word without defining it, assuming they know. |
| Say the consequence in their currency: money, days, machine slots, audit findings. | Say the consequence in ours: "that is not best practice." |

### 2.5 How to say no

The site has three standing refusals, and they are the reason the refusals
read as confidence rather than as lost business. `about.html` §2: *We are not
the cheapest. We are not the biggest. We are not for every certification.*

The template:

> **No** — [the reason, in one clause]. **What we can do instead** is [the
> alternative]. **If that does not work for you,** [an honest referral or a
> clean exit].

Three rules that make a no land:

- **A no must carry a next step.** The site never ends a refusal at the
  refusal. Homepage: *"we will tell you early rather than take the work and
  struggle with it. That costs us an order and saves both of us a season."*
- **Never soften a no into a maybe.** "We might be able to look at it" is
  worse than a no, because the buyer plans around it.
- **Never refuse on a technicality the buyer cannot check.** If the machine
  cannot do it, say the machine cannot do it. `capacity.html` says this of
  unnameable makes: *"Do not name a make that is not on the nameplate."*

### 2.6 Words that are banned on this site

Not because they are always false, but because a buyer in this trade discounts
the whole page when they appear.

| Never write | Write instead |
|---|---|
| leading, number one, premier, world-class | *(delete. The machine table is the credential.)* |
| cutting-edge, state-of-the-art, advanced | "computerised colour kitchen and dosing" — if that is what the machine does |
| passionate, committed to excellence, dedicated to quality | "we will tell you when a lot is going to be late" |
| eco-friendly, sustainable, green | The litres per kg, against the published benchmark |
| high quality, premium quality, finest | The tolerance and the test method |
| state-of-the-art machinery | The make, the model and the working width |
| We value our long-standing relationships | *(delete. The retained-sample commitment already says it concretely.)* |

`quality.html` publishes an explicit list of claims the site does not make, as
a visible section rather than as an internal rule. That list is part of the
copy, and it is a good one to keep current.

---

## 3. The house vocabulary

These are the words the trade actually uses. Using them is not showing off — a
buyer matching your page against their checklist needs *your* words, not
"textile processing". **VERIFIED** (`00-RESEARCH` §B1.2, which quotes the
GOTS definition of wet processing as sizing, desizing, pre-treatment, dyeing,
printing including digital printing, finishing and laundry).

**The rule for every term below: use the trade word, and define it in the same
sentence the first time it appears on a page.** Never use a trade word as if
the reader had just arrived from a different industry.

### 3.1 Process terms

| Term | In plain words | Safe or trap |
|---|---|---|
| **Pre-treatment** | Everything that happens to fabric *before* the dye goes on, to make it accept colour. | **Safe.** Use it as a heading. It is the stage buyers know least about and care most about, so it earns its own section on `dyeing.html`. |
| **Desizing** | Washing out the size that was applied to warp yarn so the yarn stops being stiff. Woven fabric only. | **Safe**, but only for woven cloth. Saying it about knit fabric is a tell. |
| **Scouring** | A hot alkaline wash that removes oil, dirt and the natural stuff left on the fibre. | **Safe.** One of the two most important words on the site. |
| **Mercerising** | Treating cotton with alkali under tension. The fabric gets shinier, stronger in feel, and takes more dye — so you can hit a deep shade in one lot instead of two. | **Safe, if you can do it.** It is a `To confirm` item on `dyeing.html` and `finishing.html`. Do not describe its benefits in the present tense anywhere until the machine list is filled in. |
| **Reactive** | The dye class for cotton and other cellulosics. Best wash fastness for the money. | **Safe.** The default for cotton. |
| **Disperse** | The dye class for polyester and nylon. Needs a machine that can run hot. | **Safe.** |
| **Direct** | The cheap dye class for pale and medium shades on cotton. Softer hand than reactive, less depth of shade. | **Safe**, but do not present it as equal to reactive. The difference in fastness is the whole reason reactive costs more. |
| **Acid** | The dye class for wool, silk and polyamide. Bright shades on protein fibres. | **TRAP.** The site itself says *"Wool and silk are not a normal part of our range."* Listing acid dye without that sentence is a capability claim. |
| **Cationic** | The dye class for acrylic. Bright shades other classes cannot reach. | **Safe** as a definition. Only publish it as a capability with a machine behind it. |
| **Pigment** | Colour that sits **on the surface** of the fabric rather than bonding into it. Cheap, fast, softer handling. | **TRAP.** Almost always used wrongly, as a synonym for "any dye". Write "pigment printing" or "pigment finish", and say explicitly that pigment is mostly a print or a finish rather than an exhaust dye. `dyeing.html` gets this right — keep it. |
| **Cold pad-batch** | A continuous dyeing route where the dye is padded onto the cloth and fixed in a stack, rather than the cloth floating in a bath. Better water economy on big lots. | **TRAP, but a useful one.** The common abbreviation **CPB** is ambiguous to a buyer outside the trade. Always write it in full. Also do not confuse it with **thermosol**, which is the hot version. Both are separate rows on the machine list. |
| **Exhaust dyeing** | The standard route where the fabric floats in a dye bath in a machine until it takes the colour. | **Safe.** |
| **Jigger** | An older, open-width dyeing machine for lighter fabric, as against a jet or soft-flow machine. | **Safe** as a machine-list row. Not worth explaining on a page. |
| **Singeing** | Burning off the surface fibres of woven cloth so it is smooth. | **Safe** as a machine-list row only. |
| **Strike-off** | A short printed length produced for approval before the bulk is committed. | **Safe, and important.** It is the print equivalent of a lab dip, and the clock starts after it is approved. |
| **Stenter** (or *tenter*) | The big heated machine that holds fabric at a set width while it is dried, heat-set and finished. | **Safe, and it is the most useful single fact on `finishing.html`.** Almost every finish is another pass through it, and it is the bottleneck in most plants. Say so and the whole finishing page makes sense. |
| **Sanforising** | Pre-shrinking fabric so it does not shrink further in the wash. | **Safe** on knitted fabric sold with a shrinkage guarantee. Do not offer it for wovens. |
| **Lab dip** | A small-batch dye trial on your actual fabric, to agree a shade before bulk. | **Safe, and it is the number worth comparing between units.** A rejected round restarts production time as well as waiting. |

### 3.2 Order and measurement terms

| Term | In plain words | Safe or trap |
|---|---|---|
| **Lot** (dye lot) | One batch of one colourway. The unit of production, the unit of traceability, the unit that gets inspected. | **Safe, and load-bearing.** The two facts buyers most often misunderstand are both about lots: one colourway is one lot, and **lots are never pooled**. Pooling is how a shade drifts between deliveries. |
| **Colourway** | One colour, in one fabric, for one buyer. Three colourways is three lots, not one. | **Safe.** The homepage states it directly, and it is worth stating twice. |
| **Greige** (also *gray* or *raw*) | Fabric as it comes off the loom, before any dyeing, printing or finishing. It is our raw material, not our product. | **Safe.** Spell it "greige" throughout, as the site does. The "pure processing" argument on the homepage and `about.html` depends on this word being understood. |
| **GSM** | Grams per square metre — the weight of the fabric. | **TRAP if bare.** Always qualify: against what, and by what method, and against which standard. "180 GSM" is not a specification; "180 GSM ±5 against the approved sample" is. |
| **Shrinkage tolerance** | The amount of shrinkage the mill guarantees not to exceed. Usually written as a percentage, after washing, against a stated method. | **Safe and strong.** `quality.html` makes the point that a published tolerance is a stronger claim than a certificate, because it is a commitment rather than a description. Publish only what you have actually held. |
| **Liquor ratio** | How much water the machine uses per kilogram of fabric. | **TRAP if bare.** It is a real technical number and it changes the price. State one only if it comes off a recipe, and say which machine. Never invent one to look efficient. |
| **Fastness** | How well a colour holds up. Wash, rub, light. | **TRAP without a method.** Publish the rating *and* the test method, or publish nothing. A fastness figure without a method is a decoration. |
| **Crocking** (rub fastness) | Whether colour rubs off onto another fabric when the two are rubbed together. | **Safe** as a definition. It is the one buyers forget to ask for and then blame you for. |
| **Pilling** | Small balls forming on the surface of a fabric after wear and washing. | **Safe.** Mostly a knitted-construction issue. |

### 3.3 Certificate and compliance terms

These are the highest-risk words on the site, because a buyer can check every
one of them with a single email to the issuing body.

| Term | In plain words | Safe or trap |
|---|---|---|
| **OEKO-TEX STeP** | A certification of the **facility** — the plant itself, its chemicals, its environmental and social systems. Runs on a three-year cycle with an on-site audit. It explicitly recognises BSCI, FWF, SA8000, ISO 14001 and ISO 9001. | **SAFE — and it is the one to lead with.** A dyehouse is exactly the kind of facility it is for. **VERIFIED** (`00-RESEARCH` §B3). |
| **OEKO-TEX STANDARD 100** | A certification of the **product**, issued per colourway, following the fabric rather than the plant. | **TRAP if used loosely.** A processor does not own the fabric, so the label usually follows the article and is raised by the brand, not the mill. `quality.html` gets this right; the homepage row for it must be read with that in mind. **VERIFIED** — §B3. |
| **MADE IN GREEN**, **ECO PASSPORT** | STeP + STANDARD 100 combined; and certification of individual chemical inputs such as softeners and fixatives. | **Safe as register rows.** Publish your position on each. Do not imply holding one because you hold its neighbour. |
| **GOTS** | The organic textile standard. A job-work dyehouse is **in scope** and does not need to own the cotton — but it must hold its own scope certificate, validate the incoming fabric's certificates, record quantities, and pass wastage reconciliation at audit. | **Safe, and worth understanding before you answer a buyer.** Most demanding scheme on the register. **VERIFIED** — §B3. |
| **GRTS / RCS**, and the old **GRS** | Recycled-content chain of custody. The standards body now develops and operates GOTS and **GRTS**, announced 14 September 2026, described as a new processing standard covering a broader range of eligible fibres. GOTS itself is at Version 8.1 (22 July 2026). | **TRAP — the most dangerous one on the site.** Whether GRS is formally withdrawn or in transition is **UNKNOWN** (`00-RESEARCH` §B4; the Textile Exchange site returned HTTP 403). The register therefore reads **GRTS / RCS**, not GRS, and carries a warning. ⚠️ See §7.4 below — the homepage still says GRS and must be brought into line. |
| **ZDHC MRSL** | The restricted-substances list for chemical inputs; it exists, per the research, *"to phase out harmful substances at the source."* Buyers ask what goes into the drum, not only what leaves the pipe. **VERIFIED** — §B1.6. | **TRAP.** Naming ZDHC or the MRSL implies membership and conformance. If you have not joined the protocol, say so — that is the TSG Tintoria model, and it is the right one. Do not describe your chemical inputs as "MRSL compliant" without a real check. |
| **Higg FEM** | The facility environmental module: self-assessment plus verification. Required by most multinational brands. | **Safe as a register row.** A common row for a mid-sized unit to have applied for and not yet passed. |
| **SMETA / BSCI** | Social compliance audits. SMETA is buyer-mandated and usually non-negotiable. | **Safe as register rows.** The buyer's real fear here is the "failing it ends the conversation" risk, and the register should say that, as `quality.html` already does. |
| **ISO 9001 / ISO 14001** | Management systems for quality and for the environment. | **Safe.** Never publish the certificate without the number, the body and the expiry. |
| **Export-oriented unit / duty drawback / Form-A** | Separate energy and duty treatment for exporters. | **BANNED unless confirmed in writing.** `00-RESEARCH` §B5 deliberately excludes all of it, and the register carries an explicit instruction not to claim it without written accountant confirmation. A badge that fails an audit is worse than a missing badge. |

**The general rule for this whole section:** a certificate name is a fact about
a third party that a buyer can verify in a minute. If you cannot produce the
document, do not name the scheme as something you hold — name it in the
register as something you do not hold, which is what the register is for.

### 3.4 Terms the site must not invent

| Term | Status | Rule |
|---|---|---|
| A test-method standard number (AATCC, ISO 105, BS, and so on) | **UNKNOWN** — not in the research brief, and the correct number depends on the test | Ask the client for the standard number they work to. Until then, describe the test in words and publish no number. |
| A machine make or model | **UNKNOWN** except where already on the page | `capacity.html` names no manufacturer at all. The verified list of makes common on Faisalabad units appears only inside a labelled instruction to the person filling the table in, with the warning: *do not name a make that is not on the nameplate.* **VERIFIED** — §E7. |
| A price, rate or discount | **UNKNOWN** | The site publishes no prices. Not one. Leave it that way; a price on a website is a quote you cannot honour. |
| Lead time for this unit | **UNKNOWN** | The site publishes industry ranges and names the stage each starts from. It does not publish a turnaround it has not committed to. |

---

## 4. The homepage, section by section

`index.html` is eight numbered sections inside a fixed frame. The order is not
decorative: **it answers the buyer's questions in the order the buyer asks
them.** Each section's HTML comment names its job, and each has a matching
number you can find in the file.

### 4.0 The frame (header, footer, mobile bar, hidden data)

| Element | Job |
|---|---|
| Header + "Get a quote" | Present on every page, always in the same place |
| Draft ribbon | Says the site is not publishable yet. Visible only while `data-draft="true"` is on the `<html>` tag. **[MEASURED — from the build, `site.css` §20b]** |
| Footer | Full legal name, full address, the same five service links, the same four company links, APTPMA membership, and the year |
| Mobile action bar | Two buttons — Enquiry form, WhatsApp — fixed on small screens |
| JSON-LD | The machine-readable version of the visible identity. Values must match the visible text exactly |
| "Skip to main content" link | The first thing in the tab order |

**Principle:** the buyer can reach the enquiry from any page without scrolling
to the bottom, and can see the whole identity without clicking anything.

### 4.1 Section 1 — Hero: "Instant clarity"

**Contents:** eyebrow ("Pure processing unit · Faisalabad, Pakistan"), the H1
("Fabric dyeing, printing and finishing, quoted honestly."), a three-sentence
lead, two buttons, a one-line lead-time range, and the **At a glance** data
sheet in the aside.

**Exact job:** answer *"what do they do?"* in one line and *"what do I do
next?"* in one click. Nothing else.

**Principles:**

- **No hero image, no carousel, no video.** The words are the page. The site is
  text-first by construction, because local competitors run 0.23% to 20% text
  by weight and the best information a site owns is worth nothing if it cannot
  be read. **MEASURED** (`00-RESEARCH` §C3, C6).
- **The data sheet answers the buyer's first real question — "how big are
  you?" — before they have to ask it.** All six rows are `To confirm` chips in
  the draft, and each one names the page it belongs on, so the maintainer
  always knows where the real number lives. **[MEASURED — from the build]**
- **The lead time appears in the hero, not three sections down**, already with
  its starting stage attached: *"30–60 days for dyeing after shade approval,
  20–40 days for printing after sample approval."* The buyer gets a usable
  number in the first screen.
- **The homepage is written as a self-contained entity summary** — what the
  company is, where it is, what it does, how to reach it, all above the fold —
  because roughly 62% of AI-assistant referrals land on the homepage.
  **VERIFIED** (`00-RESEARCH` §D5).

### 4.2 Section 2 — The four numbers

**Contents:** four facts in a strip — Type of unit, Location, Association,
Inquires via.

**Exact job:** give the buyer the four facts they screen on before reading
anything, each of which is falsifiable in a way a slogan is not.

**Principle:** *pure processing · Faisalabad · APTPMA member · WhatsApp*. The
third one is a real structural fact from the industry association, and it is
the only one on the page the buyer can independently check without asking you.
Two of the four carry a chip. That is fine in a draft and fatal on a live site.

### 4.3 Section 3 — Capabilities

**Contents:** four cards — Dyeing, Pretreatment, Printing, Finishing — and a
callout defining what "pure processing" means.

**Exact job:** answer *"can you do my job?"*, not *"what departments do you
have?"*

**Principles:**

- Each card is titled by the **process**, not the department, and every card
  uses the trade's own vocabulary, because that is the vocabulary the buyer's
  checklist is written in. **VERIFIED** — §B1.2.
- The card promises an honest answer, including *"when the honest answer is
  that another unit is a better fit."* Promising a referral and then not
  offering one is worse than never saying it.
- The callout exists to prevent a **category error**: comparing a processing
  quote to a composite mill's price. That comparison happens constantly, and it
  is the fastest way to spend six weeks arguing about a number that was never
  comparable.

### 4.4 Section 4 — "Which stage does the clock start from?"

**Contents:** a five-step flow — Enquiry and route proposal · Lab dip or
strike-off · Your approval · Bulk production · Finishing, inspection and
packing — each with a line saying **where the clock is running**, plus a rail
with four published lead-time ranges and a disclaimer.

**Exact job:** remove the single most common source of disputes in this trade,
before the dispute happens.

**Principle:** the section's own opening line is the thesis — *"'45 days' and
'45 days from shade approval' are different promises. Only one of them can be
kept."* The ranges are real published ranges **VERIFIED** (§E3); what could
not be verified is how they are routinely quoted in the market, which is marked
**UNVERIFIED** in §B2.15 — and that gap is exactly why the site names the
stage instead of publishing a turnaround.

### 4.5 Section 5 — Capacity and facility proof

**Contents:** two cards linking to `capacity.html` and `facility.html`, then
three labelled photo placeholders — dye house machine line, printing hall,
stenter and finishing line.

**Exact job:** show that the numbers are backed by a plant.

**Principle:** *"A headline number is a sales figure. A machine list, a lot
band and a working pattern are a capability."* **VERIFIED** (§C2). The three
photo frames are **not broken images**. Each is a spec plate stating which
photograph belongs there, under what filename, and what a buyer will conclude
from it. That is a deliberate content decision, not an unfinished one.

### 4.6 Section 6 — "What we hold — and what we do not"

**Contents:** a six-row status register (ISO 9001, SMETA/BSCI, OEKO-TEX
STANDARD 100, Organic/Recycled, Higg FEM, Accredited third-party testing) and
a paragraph offering to price the gap.

**Exact job:** answer *"is there anything on this page that will embarrass me
later?"* — before the buyer finds it.

**Principle:** publishing a gap is faster and more credible than being found
out. Note the visual treatment: this is the dark section. It is the only place
on the homepage that changes the background, because it is the section doing
the most work.

### 4.7 Section 7 — The enquiry: "Send us these six things"

**Contents:** the six-item buyer brief, plus a rail with three channels
(WhatsApp, Email, Telephone).

**Exact job:** tell the buyer exactly what to send, so the first reply can be
a number rather than a questionnaire.

**Principle:** *a buyer who does not know what to send will not send it.* Both
buttons are pre-filled WhatsApp composers with the fields already laid out, so
the buyer never faces a blank message box. The composer is page-aware: the
hero's asks for four things, this section's asks for the fuller set, and
`contact.html`'s asks for all eight. **The six-item list is the constant; the
composer grows with the reader's intent.**

### 4.8 Section 8 — The close

**Contents:** one callout, "Before you send an order".

**Exact job:** state the size of the unit before the buyer discovers it at the
worst moment.

**Principle:** *"We are a mid-sized unit. If your requirement is very large,
very narrow, or needs a certificate we do not hold, we will tell you early
rather than take the work and struggle with it."* The homepage ends by
declining work it should not take, which is what makes the rest of the page
believable.

---

## 5. The two differentiators, argued

The site has exactly two ideas that no competitor in the Faisalabad sample
uses. They are the reason this site exists in this form. They are also the two
most likely to be quietly dropped by a later editor who thinks they are being
too negative. **Do not drop them.**

### 5.1 "Which stage does the clock start from?"

**What it is.** Homepage section 4, and the "Where the clock is running" line
on every step. Every duration on the site names the stage it begins at:
dyeing 30–60 days *from shade approval*; printing 20–40 days *from sample
approval*; strike-off 1–2 weeks; reactive cycle 8–14 hours per batch; lab dip
to bulk approval 15–30 days, mostly buyer decision time.

**Why it works — five reasons.**

1. **It is a factual statement about the trade, not a boast.** Nobody can
   dispute where a clock starts. There is nothing to verify and nothing to
   lose.
2. **It costs the mill nothing to say.** The mill is not admitting a fault; it
   is describing a process. That is why it is safe for a business that has
   nothing else to prove yet.
3. **It is unfakeable by a competitor who does not understand it.** A
   competitor could copy the words "30–60 days" in a heartbeat. They cannot
   copy a five-step flow that names their own queue and their own lab, because
   it requires knowing the process. **VERIFIED** — no site in the study does it
   (§E3).
4. **It converts a future argument into a shared model.** A buyer who has read
   the flow already knows the timeline they are buying. The dispute about "you
   were late" becomes "we were both in the queue you described" — and the
   conversation is about the remedy, not the blame.
5. **It earns the right to the rest of the page.** Having shown you will
   publish an inconvenient truth about lead times, the buyer is more willing
   to believe the machine table.

**The objection to handle, and the answer.** A reader can misread it as *"the
blame is yours"*. The section pre-empts this in two ways that must not be
edited out: each step is labelled with whose clock it is, including **"Where
the clock is running: your decision"**; and the same step immediately offers
the mill's own commitment — *"We will ask for a decision within a stated
window rather than leaving a lot idle."* That is a commitment, not a blame. If
you cut those two sentences, the section becomes an accusation and should be
cut entirely.

### 5.2 "What we hold — and what we do not"

**What it is.** Homepage section 6; the full register and certificate log book
on `quality.html`; the "What this site does not claim" list; the "What we are
not" cards on `about.html`; the three-column "how to read this page" cards and
the zero-liquid-discharge row on `capacity.html`; the rule on `facility.html`
that the effluent plant is only photographed if it is running.

**Why it works — five reasons.**

1. **Anyone can copy the "held" rows. Nobody can copy the "not held" rows.**
   A unit with a full certificate register has nothing to publish in the second
   column. The honesty is the moat.
2. **It shortens the buyer's work, and buyers notice what saves them time.**
   Two minutes reading this register replaces a week of chasing. "A competent
   engineer who respects your time" is the entire positioning, expressed.
3. **It is verifiable, so it is safe.** A buyer can check any certificate with
   the issuing body. A claim that survives checking is cheap to make and
   expensive to fake. **VERIFIED** — §C1 is why the certificate log book is
   the highest-trust pattern in the sector; §B3 notes that OEKO-TEX itself
   instructs certified firms to self-list publicly, so a certificate held but
   never published is commercially invisible.
4. **It pre-empts the discovery risk.** The failure mode is not a buyer
   believing a false claim on your site. It is a buyer checking OEKO-TEX
   Connect, finding a gap, and re-reading everything you wrote. In a market
   where five of eleven domains on the association's own list now belong to
   somebody else — **VERIFIED** (§A3) — a buyer's trust is already fragile
   before you say anything.
5. **There is a reference model for it.** TSG Tintoria states plainly that its
   ZDHC team has completed training but the company has not joined the
   protocol. **VERIFIED** (§C6). That is the tone decision this site is built
   on.

**The objection to handle, and the answer.** A reader can read the register as
a confession that you are not serious. The answer is in the structure: the
register is a **position table with a status on every row**, not an apology
letter. "Not held" is a complete answer to a buyer's question. And the
certificate log book closes the loop with a single factual line — *"No other
certificates are held at the time of publication"* — which is a statement about
the present, not a promise about the future. The offer that follows it ("we
will tell you what it costs, how long it takes, and whether it is worth
starting") converts the gap into a conversation.

**Consistency rule.** The posture must appear on **every** page, or it reads as
a tactic on one page. It currently appears on all nine. If you add a tenth
page, it needs a "what we do not claim" element too.

---

## 6. "Six things that get you a real quote"

Homepage section 7 and `contact.html` §3, repeated deliberately — a buyer who
lands directly on the contact page needs the same briefing.

### 6.1 The six, and why each one is on the list

| # | Item | Why it cannot be left out |
|---|---|---|
| 1 | **Construction or reference** — fibre, blend, GSM, width, knit or woven | The dye class is decided by the fibre, not by preference. Send cotton to a polyester route or the reverse and you waste a lot and a machine slot. `dyeing.html` leads with exactly this. **VERIFIED** — §B1.2. |
| 2 | **Quantity in metres *and* kilograms, and how many colourways** | One colourway is one dye lot. Lots are never pooled. The **last** lot to finish sets the date, not the first. If you quote in metres alone, the machine, the liquor ratio and the price are all unknown. |
| 3 | **Target shade** — a physical standard, a Pantone or TCX code, or a photo with its light | A physical swatch is the only reliable standard. A code is a starting point, not a target: it does not know which lightbox your fabric will be judged in, or which batch of greige it is going onto. |
| 4 | **Process route** — what needs doing, and what has already been done | Printing onto undyed greige is a different job from printing after a dye. A base colour changes what the print can achieve. This is the single most common cause of a mis-quoted order. |
| 5 | **Target date, worked backwards** — the delivery date and destination, not "urgent" | "Urgent" is not a date. The delivery date and the destination are what let us say which stage is the constraint — which is the whole point of the clock section. |
| 6 | **Destination market and certification required** | Determines incoterms, payment terms, the testing regime, and whether the unit can serve the programme at all. Asking last is how a buyer discovers in week six that the programme needed a certificate nobody had. |

### 6.2 Why six, and not more

- **Six is the complete set of quote inputs.** Each one, if missing, makes the
  price a range instead of a number. Remove any of the six and you have that
  problem back. Add a seventh that is not one of these and you have a longer
  form.
- **Field count is what costs you enquiries, not step count.** The transferable
  finding in the research is that users abandon on field count, not on how many
  steps the form has. **VERIFIED**, with the caveat the research itself
  records: the underlying study is e-commerce only, so it is applied here as a
  principle and not as a number. (`00-RESEARCH` §D6.)
- **The six map one-to-one onto what the plant actually needs to price a lot**,
  and onto the enquiry form's own fields. The form on `contact.html` requires:
  name, email, phone, **fabric and construction**, **quantity**, **process
  required**, **target shade**, **required by**, **destination market** — that
  is the six plus three contact fields, with company, certification and a free
  message box left optional. **[MEASURED — from the build]**
  - ⚠️ **Note for the lead:** `00-RESEARCH` §D6 describes this as "eight
    required fields" while listing nine items, and the page has nine required
    inputs. The page is the authority. Worth reconciling the research wording
    so the two documents do not disagree.
- **The list is repeated, not linked.** A buyer who lands on `contact.html`
  from a search engine gets it without a click. That is the whole reason for
  the repetition.

---

## 7. FAQ strategy

### 7.1 Why the Q&A blocks exist

**Because buyers need the answers.** That is the entire justification, and it
is worth stating plainly because the industry default is to skip them.

The Q&A blocks are the last objection-removal step before a buyer messages you.
Each of them carries a **policy answer**, not a brochure answer: the minimum
lot, the remedy if the bulk does not match the approved lab dip, whether an
approved shade is retained for repeats, which incoterms and payment terms you
work on, what happens if finishes are added mid-production.

Three reasons those specific answers matter more than anything else on the
pages:

1. **The remedy policy is the one every buyer reads twice.** It decides who
   carries the risk of a lot. `dyeing.html` says so in the page copy.
2. **The retained-sample answer is the cheapest credibility available.** It
   costs nothing, is effectively impossible for a competitor to fake, and is
   the most commonly skipped thing in the trade. **VERIFIED** — §C7.
3. **The MOQ and lot-size answers filter the wrong enquiries early**, which
   saves both sides a season. Saying so is cheaper than declining later.

### 7.2 Why `FAQPage` schema is not used anywhere

**It buys nothing, and the site will not claim something it cannot back.**

FAQ rich results were **fully withdrawn on 7 May 2026**, and Google's published
guidance explicitly advises ignoring "special schema" and AEO/GEO tactics.
Nothing special is required beyond being crawlable, indexable and
snippet-eligible. **VERIFIED** — `00-RESEARCH` §D5, which also records that
Google advises against the `llms.txt` convention (roughly 2.1% adoption) and
that the site nevertheless ships one, clearly labelled on its own face as a
proposed convention so nobody mistakes it for load-bearing.

So the structure of the decision is:

| | |
|---|---|
| Why the Q&A blocks exist | The reader needs the answers |
| Why the markup is absent | The markup would produce no result, and adding it would imply a benefit that no longer exists |
| What replaces markup as a strategy | Being crawlable, indexable and snippet-eligible, and writing the question in the words a buyer would actually type |

**Maintenance rule:** the Q&A blocks are HTML `<details>` elements with visible
`<summary>` text. There is no hidden content and no client-side rendering, so
the answers are in the document. Keep it that way.

### 7.3 How to write a question a buyer would actually type

Six rules. The first three are about the question; the last three are about the
answer.

1. **No company name in the question.** The buyer searching does not know your
   name, or does not care. "What is your minimum order quantity?" — not
   "What is Al-Jilanee's MOQ?"
2. **Put the objection in the question, not in the answer.** If the question is
   "What is your minimum order quantity?", the reader is worried about being
   too small. If the question is "What are your order quantities?", they are
   browsing a spec sheet. The first one gets answered; the second one gets
   skipped.
3. **Use the buyer's noun, not the mill's.** "Will a strike-off approved on
   digital carry over to rotary?" — because that is literally the question. Not
   "On print method transferability".
4. **One question per block.** A summary line with an "and" in it is two
   questions, and half of it will be missed.
5. **If you would not search it, do not publish it.** Every existing question
   is one a buyer types. The test is: would this appear in a search box, with
   no company name in it?
6. **The answer starts with the answer.** First sentence answers. Reasoning
   after. If the honest answer is "no", the first word is "no".

Worked comparison, on a real case:

| ✗ Don't write | ✓ Do write |
|---|---|
| "What are your quality standards?" | "What fastness do you guarantee, and against which test method?" |
| "Do you offer flexible terms?" | "What incoterms and payment terms do you work on?" |
| "What makes Al-Jilanee different?" | "Can you hold a shade for repeat orders?" |

### 7.4 Where the Q&A currently sits — and one thing to fix

**[MEASURED — from the build]** Three pages carry a `<details>` Q&A block:

| Page | Section heading | Questions |
|---|---|---|
| `dyeing.html` | "What buyers ask before placing a first order" | 7 |
| `printing.html` | "Printing questions worth asking" | 5 |
| `finishing.html` | "Finishing questions worth asking" | 4 |
| | **Total** | **16** |

`quality.html` has **no** `<details>` block. It answers the same category of
question through the register, the certificate log book, the "Verify us" rail
and the "What this site does not claim" list.

- ⚠️ `00-RESEARCH` §D5 states the Q&A blocks are in `dyeing.html`,
  `printing.html`, `finishing.html` **and `quality.html`**. The built site has
  three, not four. Either the research note or the build needs correcting —
  the build is the authority, and this is a small pre-launch decision for the
  lead rather than something to fix silently.

**One content defect to fix before launch.** The homepage section 6 register
still reads **"Organic / recycled (GOTS, GRS)"**, while the `quality.html`
register reads **"GRTS / RCS"** and carries the warning about stale GRS
certificates. Given §B4, the homepage is the one place still using a term that
may no longer be current. **The rule: one term per scheme, across the whole
site.** Fix the homepage to match the register.

**A second, smaller one.** The certification field on `contact.html` uses the
placeholder *"e.g. OEKO-TEX Standard 100, or none"*. A placeholder is easy to
copy wholesale into a real enquiry, and a buyer who copies it may read it as a
claim that we hold it. Change the example to a neutral placeholder, or to a
scheme we are certain we do not hold.

---

## 8. Placeholder policy

### 8.1 What a chip is

Every unconfirmed value on the site renders as a visible chip:
`<span class="todo">To confirm</span>` — dashed border, monospace, uppercase,
grey. In the machine table the chip is a `—`. Photo slots render as a
`shot__pending` spec plate.

**[MEASURED — from the build, `site.css` §20b]**

**The design intent, stated in the stylesheet itself:** the site is built before
the client has supplied its real numbers, and rather than hide that, every
unconfirmed value renders visibly — *"This stops an invented figure from ever
reaching a buyer by accident."*

That is the whole policy. Everything below is how you operate it.

### 8.2 The three kinds of chip

| Chip | Where it appears | What it is waiting for |
|---|---|---|
| **Value chip** (`To confirm`) | Data sheet, capacity tables, lot tables, address, phone, hours, lead times | A real number, a real name, a real address |
| **Status pill** (`status--notheld`, currently carrying a chip) | Dye class table, finish tables, certification register, testing capability | Your decision: held, on request, or not offered |
| **Spec plate** (`shot__pending`) | Homepage gallery, `facility.html` shot list | A photograph, under the named filename |

The status pill has four states, already styled: **held**, **progress**,
**on request**, **not held**. Pick the true one.

### 8.3 The editing convention

- **Every chip is paired with an `EDIT:` comment** in the HTML, giving the
  instruction for the person filling it in. Search the file for `EDIT:` — the
  header comment on every page says so, and the index says *"Search this file
  for 'EDIT:' to jump between them."*
- **The Data sheet rows point at the page that owns the number.** Each chip
  carries a small note: `EDIT: capacity.html`, `EDIT: quality.html`. Follow it.
  Do not put a capacity number on a page that has no capacity table.
- **Where the value must come from production records, the comment says so.**
  `capacity.html`: *"fill from the plant's own production records, not from a
  target."* A target is a wish; a record is a fact.

### 8.4 The draft ribbon — and the rule that no page goes live with a chip

**How the ribbon works.** The ribbon is displayed only when
`data-draft="true"` is present on the `<html>` tag. Remove that attribute and
the ribbon disappears; every page of the site currently carries it.

```
Before:  <html lang="en" data-draft="true">
After:   <html lang="en">
```

**Note carefully that the ribbon and the chips are two independent switches.**
The ribbon is the page-level "not finished" flag. The chips are value-level
"not known" flags. Removing the ribbon does not remove a chip. The current
build has both on all nine pages, which is correct for a draft.

**The rule, in one line:**

> **No page goes live with a chip on it. Not one.**

It is worth knowing *why* this is absolute rather than aspirational, because
the reasons are specific:

- A chip on the **capacity page** is a machine claim, and a machine list is
  checkable by anyone who has worked in the trade for five minutes. A wrong make
  is noticed immediately.
- A chip in the **certificate register** is a compliance claim, and a buyer can
  verify every certificate in one email to the issuing body. A badge that fails
  an audit is worse than a missing badge.
- A chip on the **contact block** is a phone number or an address that does not
  work, and the enquiry channel is the one thing on the site that must never
  fail.
- A chip on a **photograph** slot means the page is describing a plant that the
  visitor cannot see, which is worse than not describing it.

**A `status--notheld` pill reading "Not held" is not a chip.** It is a complete,
honest answer and it can go live. This distinction matters: the site is allowed
to be small, and is not allowed to be vague.

### 8.5 What you may replace a chip with

Exactly four things. Never a fifth.

| Replace with | When |
|---|---|
| **The real value** | You have it, with a source. A record, a nameplate, a certificate number, a written answer from an accountant. |
| **A deletion** | The thing is not true or not done. Delete the row. `finishing.html`: *"Delete every row we do not run."* |
| **A scope statement** | "We do not run this." A status pill reading **Not held** or **Not offered**. |
| **A pointer** | The value genuinely belongs on another page, and the chip already says which one. |

**Never with a plausible round number.** If the only figure you have is a
target, the chip stays. This is the one rule that keeps the site worth
anything.

### 8.6 Recurring maintenance, not a one-off job

Two things expire and must be diarised:

- **Certificate expiry dates** in the log book. `quality.html` says it directly:
  a log book with a stale expiry date is worse than no log book, because it
  turns a transparency gesture into evidence of inattention. Put a reminder in
  the calendar **two weeks before** each date in that table.
- **Any GRS / GRTS question.** Until the Textile Exchange position is
  confirmed — currently **UNKNOWN** (`00-RESEARCH` §B4) — re-verify before
  printing either term in new material.

---

## 9. The 30-word voice test

Any new sentence the owner or a junior member of staff writes should be run
past this before it goes on the page.

> **Would I say this to a buyer I respect: the number, its unit, where the
> clock starts — or what I do not know — and can they act on it today?**

Thirty words. Three checks inside it:

| The words | The check | If it fails |
|---|---|---|
| "the number, its unit, where the clock starts" | Is there a figure, and does it carry its unit **and** its starting stage? | Add the unit. Add the stage. Or, if it is an industry range rather than yours, label it as one. |
| "or what I do not know" | If you have no figure, have you said so in as many words? | Replace the number with a chip, or with an honest sentence. Never a plausible guess. |
| "can they act on it today" | After reading it, can the reader do something? Send a spec, ask a question, delete a line from their list? | Rewrite. Information that changes nothing is decoration. |

And the wrapper — *would I say this aloud, to a buyer I respect* — is the test
for tone. If you would not say it on the phone, in the dye house, in the noise,
it does not go on the page.

### 9.1 A short checklist for adding any new block of copy

- [ ] Is every term defined in the sentence where it first appears?
- [ ] Does every number carry a unit, a basis, and a starting stage?
- [ ] Is every number marked as our commitment, an industry range, or a
      confirmed slot?
- [ ] Does every limitation say what it would cost to fix and whether it is
      worth it?
- [ ] Does any claim about the company have a document behind it — a nameplate,
      a certificate number, a production record, a written answer?
- [ ] Would this sentence survive a buyer checking it with the issuing body?
- [ ] Is there a "we do not" anywhere near the "we do"? If the block only ever
      says yes, it will read as a brochure.
- [ ] Is any banned word from §2.6 present?
- [ ] If it is a status, is it one of the four the CSS supports — held,
      progress, on request, not held?
- [ ] Does it pass the 30-word test?

---

## 10. Pre-launch content checks

Content problems, as opposed to technical ones, that must be clear before the
ribbon comes off. This list is not the launch checklist — that lives in
`07-LAUNCH.md` — it is the set of things that make **this** document's rules
true on the live site.

- [ ] **Every chip on every page is resolved** into a value, a deletion, a
      scope statement, or a pointer. §8.4, §8.5.
- [ ] **`data-draft="true"` is removed** from all nine `<html>` tags, and only
      after the line above is true.
- [ ] **The homepage register no longer says "GRS".** It must match the
      `quality.html` register, which reads GRTS / RCS. §7.4.
- [ ] **The `contact.html` certification placeholder** no longer suggests a
      scheme we might be read as holding. §7.4.
- [ ] **The `facility.html` link to `docs/06-CLIENT-CHECKLIST.md`** is removed or
      repointed. The path is now correct on disk, but `docs/` is not a published
      directory, so on the live site it would still 404 for a visitor. The capture
      instructions survive either way — they are written as words on the page, not
      only as a link.
      dead link in the middle of the page.
- [ ] **The finishing rows we do not run are deleted**, and the dye class rows
      are set to the true status, and the dye class table and the machine list
      agree with each other. `dyeing.html` states the consequence in its own
      page text: *"If the two disagree, the site loses its credibility
      entirely."*
- [ ] **The QA note in `00-RESEARCH` §D5** about a fourth Q&A block on
      `quality.html` is either corrected or the block is added. §7.4.
- [ ] **The `00-RESEARCH` §D6 field count** is reconciled with the nine required
      fields the form actually has. §6.2.
- [ ] **Every duration still names its starting stage.** If any was edited
      down to "45 days", it has lost the site's first differentiator. §5.1.
- [ ] **The domain is registered and resolving.** `00-RESEARCH` §A3 records
      that `aljillanitex.com` has no DNS record at all, that RDAP returns 404,
      and that anyone can register it. That is a business risk, not a web
      task, and no amount of copy on this site fixes it.
- [ ] **The certificate log book rows are current**, and the calendar reminders
      are in. §8.6.
