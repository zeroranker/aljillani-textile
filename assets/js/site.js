/* ==========================================================================
   AL-JILANEE TEXTILE INDUSTRY (PVT) LTD — SITE BEHAVIOUR
   --------------------------------------------------------------------------
   The entire site works with JavaScript disabled. Everything here is
   progressive enhancement.

   SIZE: 14.3 KB raw, 4.9 KB gzipped, which is what a buyer actually
   downloads. An earlier version of this header said "under 8 KB" without
   saying which measure it meant. Raw was already 11.4 KB at the time, so the
   claim was wrong either way it was read. Check it with:
     node -e "const z=require('zlib'),f=require('fs');const b=f.readFileSync('assets/js/site.js');console.log(b.length,z.gzipSync(b).length)"

   WHAT THIS FILE DOES
   1. Opens/closes the mobile navigation.
   2. Builds "Send this enquiry on WhatsApp" links, pre-filled with the
      page context so the buyer never starts from a blank message.
   3. Turns the RFQ form into a message composer: the buyer fills the
      fields, presses send, and the enquiry is composed in WhatsApp with
      everything they typed. There is no server to fail and no spam.

   HOW TO CHANGE THE WHATSAPP NUMBER
   Search this project for the placeholder 923000000000. It appears in THREE
   places, and all three must be changed or the site will show two different
   numbers depending on whether JavaScript ran:
     - assets/js/site.js   (the fallback used by the form)
     - <body data-wa="..."> in every .html file (the number the script reads)
     - the static href="https://wa.me/923000000000?text=..." on every
       WhatsApp button in every .html file. These are the no-JavaScript
       fallback, so they are the copy a visitor actually follows.
   Use your editor's "replace in all files" and replace all three. Then search
   once more for 923000000000 and expect zero results.
   Replace with the real number in international format, digits only, no +,
   no spaces. Example: 923001234567
   ========================================================================== */
(function () {
  "use strict";

  var doc = document;
  var body = doc.body;

  /* The international-format WhatsApp number, digits only.
     Falls back to the placeholder if the attribute is missing. */
  var WA_NUMBER = (body.getAttribute("data-wa") || "923000000000").replace(/[^0-9]/g, "");

  /* ---------------------------------------------------------------------
     1. MOBILE NAVIGATION
     --------------------------------------------------------------------- */
  function initNav() {
    var toggle = doc.querySelector("[data-nav-toggle]");
    var nav = doc.getElementById("site-nav");
    if (!toggle || !nav) return;

    var mq = window.matchMedia ? window.matchMedia("(min-width: 64rem)") : null;

    /* The nav is only a collapsible drawer on small screens. Above 64rem it
       is a plain horizontal list and must stay visible whatever state the
       toggle is in — hiding it there removes the entire primary navigation. */
    function isDrawer() { return !(mq && mq.matches); }

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.hidden = isDrawer() ? !open : false;
      /* Label the control by what it will do next, not what it is. */
      toggle.textContent = open ? "Close" : "Menu";
    }

    setOpen(false);

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    /* Close after choosing a destination, but not when tabbing around. */
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && e.detail !== 0) setOpen(false);
    });

    doc.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    /* Reset state if the layout grows past the mobile breakpoint. */
    if (mq) {
      var onChange = function (e) { if (e.matches) setOpen(false); };
      if (mq.addEventListener) mq.addEventListener("change", onChange);
      else if (mq.addListener) mq.addListener(onChange);
    }
  }

  /* ---------------------------------------------------------------------
     2. WHATSAPP DEEP LINKS
     Each <a data-wa-msg="..."> gets its href built at load time, so the
     markup stays readable and there is one place to change the number.
     --------------------------------------------------------------------- */
  function initWhatsAppLinks() {
    var links = doc.querySelectorAll("[data-wa-msg]");
    for (var i = 0; i < links.length; i++) {
      var msg = links[i].getAttribute("data-wa-msg") || "";
      links[i].setAttribute(
        "href",
        "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg)
      );
    }
  }

  /* ---------------------------------------------------------------------
     3. FORM VALIDATION
     Errors are stated in words and say how to fix the problem.
     Never colour alone. (WCAG 2.2 SC 3.3.1 and 3.3.3.)
     --------------------------------------------------------------------- */
  var RULES = {
    email: {
      test: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); },
      message: "This email address does not look complete. Please check it includes an @ and a domain, for example name@company.com."
    },
    tel: {
      test: function (v) { return v.replace(/[^0-9]/g, "").length >= 7; },
      message: "This phone number looks too short. Please include the full number with area code and country code."
    },
    required: {
      test: function (v) { return v.trim().length > 0; },
      message: "Please fill this in so we can quote accurately."
    }
  };

  function fieldError(field) {
    return field.closest(".field");
  }

  function validateField(input) {
    var wrap = fieldError(input);
    if (!wrap) return true;
    var err = wrap.querySelector(".field__error");
    var value = (input.value || "").trim();
    var rule = null;
    var ok = true;

    if (input.required && value === "") {
      rule = RULES.required;
    } else if (value !== "" && RULES[input.dataset.rule]) {
      rule = RULES[input.dataset.rule];
    }

    if (rule) ok = rule.test(value);

    if (err) err.textContent = ok ? "" : rule.message;
    if (ok) {
      wrap.removeAttribute("data-invalid");
      input.removeAttribute("aria-invalid");
    } else {
      wrap.setAttribute("data-invalid", "");
      input.setAttribute("aria-invalid", "true");
    }
    return ok;
  }

  function initValidation(form) {
    var inputs = form.querySelectorAll("input, select, textarea");
    for (var i = 0; i < inputs.length; i++) {
      /* Link each control to its hint and its error text, so a screen reader
         reads the explanation out with the field. Without this the buyer is
         told only "invalid" and has to go hunting for what is wrong.
         Done in script rather than in the markup so a field added later works
         without the owner remembering to add attributes. */
      var wrap = inputs[i].closest(".field");
      if (wrap) {
        var ids = [];
        var err = wrap.querySelector(".field__error");
        var hint = wrap.querySelector(".field__hint");
        if (err && err.id) ids.push(err.id);
        if (hint) { if (!hint.id) hint.id = inputs[i].id + "-hint"; ids.push(hint.id); }
        if (ids.length) inputs[i].setAttribute("aria-describedby", ids.join(" "));
      }

      /* Validate on blur, never while typing — correcting mid-word is hostile. */
      inputs[i].addEventListener("blur", function (e) { validateField(e.target); });
      /* Re-validate live once the field has already been marked wrong. */
      inputs[i].addEventListener("input", function (e) {
        var w = fieldError(e.target);
        if (w && w.hasAttribute("data-invalid")) validateField(e.target);
      });
    }
  }

  /* ---------------------------------------------------------------------
     4. THE ENQUIRY FORM
     There is no server. On submit we assemble everything the buyer typed
     into a single WhatsApp message and open it. The buyer always sees
     exactly what will be sent, so nothing is lost if they change their mind.
     --------------------------------------------------------------------- */
  function buildMessage(form) {
    var lines = ["New enquiry from the website", ""];
    var fields = form.querySelectorAll("input, select, textarea");

    for (var i = 0; i < fields.length; i++) {
      var f = fields[i];
      if (!f.name || f.type === "hidden" || f.type === "checkbox") continue;
      var label = form.querySelector('label[for="' + f.id + '"]');
      var name = label ? label.textContent.replace(/\s+/g, " ").trim() : f.name;
      /* Strip the "(optional)" hint from the label text. */
      name = name.replace(/\(optional\)/i, "").trim();
      var value = (f.value || "").trim();
      if (value) lines.push(name + ": " + value);
    }

    /* Buyer-readable link back to where they started. */
    if (form.dataset.source) lines.push("", "Sent from: " + form.dataset.source);

    return lines.join("\n");
  }

  function initForm(form) {
    initValidation(form);

    var status = form.querySelector(".form__status");

    /* A plain link the buyer clicks themselves. A popup blocker cannot stop a
       real click, so this is the one route that works when window.open does
       not. Created here rather than in the markup so it stays hidden until it
       is actually needed. */
    function fallbackLink(url) {
      var link = form.querySelector("[data-wa-fallback]");
      if (!link) {
        link = doc.createElement("a");
        link.setAttribute("data-wa-fallback", "");
        link.className = "btn btn--primary mt-4";
        link.target = "_blank";
        link.rel = "noopener";
        link.textContent = "Open WhatsApp with your message";
        if (status && status.parentNode) status.parentNode.insertBefore(link, status.nextSibling);
        else form.appendChild(link);
      }
      link.href = url;
      return link;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var inputs = form.querySelectorAll("input[required], select[required], textarea[required]");
      var firstBad = null;
      var allOk = true;

      for (var i = 0; i < inputs.length; i++) {
        if (!validateField(inputs[i])) {
          allOk = false;
          if (!firstBad) firstBad = inputs[i];
        }
      }

      if (!allOk) {
        var stale = form.querySelector("[data-wa-fallback]");
        if (stale) stale.remove();
        if (status) {
          status.className = "form__status form__status--err";
          status.textContent = "Please check the highlighted fields before sending.";
        }
        if (firstBad) firstBad.focus();
        return;
      }

      var message = buildMessage(form);
      var url = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(message);

      /* window.open returns null when a popup blocker stops it. That is common
         on Safari and on locked-down office networks, and this form is the one
         thing on the site a buyer cannot do without.

         Before this return value was checked, a blocked popup still reported
         "Your enquiry has been opened in WhatsApp" and then called
         form.reset(), which destroyed a detailed enquiry the buyer had just
         typed, several minutes of work, with no way to recover it. So: never
         claim success unless a window actually opened, and never clear the
         form on a path that did not deliver. */
      var opened = null;
      try { opened = window.open(url, "_blank", "noopener"); } catch (err) { opened = null; }

      if (opened) {
        var stale2 = form.querySelector("[data-wa-fallback]");
        if (stale2) stale2.remove();
        if (status) {
          status.className = "form__status form__status--ok";
          status.textContent =
            "Your enquiry has been opened in WhatsApp, ready to send. " +
            "Press send there and we will reply with a date we commit to.";
        }
        form.reset();
      } else {
        if (status) {
          status.className = "form__status form__status--err";
          status.textContent =
            "Your browser blocked the WhatsApp window, so nothing has been sent. " +
            "Nothing you typed has been lost. Open the button below to send it, " +
            "or allow pop-ups for this site and press send again.";
        }
        var link = fallbackLink(url);
        if (link) link.focus();
      }
    });
  }

  /* ---------------------------------------------------------------------
     5. REVEAL ON SCROLL
     ---------------------------------------------------------------------
     One behaviour, one observer. Elements marked [data-rise] start one
     step down and settle. If the observer is missing, or the reader has
     asked for reduced motion, or JavaScript never runs at all, everything
     is simply visible. Nothing on this site may be invisible because an
     effect failed.
     --------------------------------------------------------------------- */
  function initReveal() {
    var items = doc.querySelectorAll("[data-rise]");
    if (!items.length) return;

    var reduce = window.matchMedia &&
                 window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      for (var n = 0; n < items.length; n++) items[n].classList.add("is-in");
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add("is-in");
          io.unobserve(entries[i].target);
        }
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });

    for (var i = 0; i < items.length; i++) io.observe(items[i]);
  }

  /* ---------------------------------------------------------------------
     6. BOOT
     ---------------------------------------------------------------------
     Each step runs inside its own guard. Without this, one error anywhere
     aborted every step after it, and because "no-js" has already been
     removed by that point, a page could be left with content that is styled
     invisible and no way to recover short of disabling JavaScript again.
     A failed enhancement is never allowed to cost a reader the page.
     --------------------------------------------------------------------- */
  function safely(name, fn) {
    try {
      fn();
    } catch (err) {
      if (window.console && console.warn) console.warn("site.js: " + name + " failed", err);
    }
  }

  function boot() {
    doc.documentElement.classList.remove("no-js");

    /* Editing mode. Load any page with ?edit and the owner annotations
       appear, along with a bar explaining what you are looking at. */
    if (/[?&]edit(&|=|$)/.test(window.location.search)) {
      doc.documentElement.classList.add("editing");
    }

    safely("nav", initNav);
    safely("whatsapp links", initWhatsAppLinks);
    safely("reveal", initReveal);
    safely("forms", function () {
      var forms = doc.querySelectorAll("form[data-rfq]");
      for (var i = 0; i < forms.length; i++) initForm(forms[i]);
    });
  }

  if (doc.readyState === "loading") {
    doc.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
