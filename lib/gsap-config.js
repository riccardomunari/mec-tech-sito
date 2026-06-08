/* ============================================================
   lib/gsap-config — plugin registration + reusable helpers
   Mirrors a Next.js lib/gsap-config.ts. Exposes window.MT.
   ============================================================ */
(function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "power3.out" });

  const { useRef, useLayoutEffect } = React;

  const prefersReduced = () =>
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* useGsap — gsap.context wrapper for safe cleanup in React
     (stands in for @gsap/react's useGSAP hook). Returns a scope ref. */
  function useGsap(setup, deps = []) {
    const scope = useRef(null);
    useLayoutEffect(() => {
      const ctx = gsap.context(setup, scope);
      return () => ctx.revert();
      // eslint-disable-next-line
    }, deps);
    return scope;
  }

  /* splitChars — wrap text into word+char spans (SplitText substitute).
     Preserves line breaks passed as an array of lines. */
  function splitToChars(el) {
    if (!el || el.dataset.split) return [];
    const lines = el.getAttribute("data-text").split("|");
    el.innerHTML = "";
    const chars = [];
    lines.forEach((line, li) => {
      // segments wrapped in *...* render with the accent class
      const words = line.split(" ");
      let accent = false;
      words.forEach((word, wi) => {
        const wordEl = document.createElement("span");
        wordEl.className = "word";
        [...word].forEach((ch) => {
          if (ch === "*") { accent = !accent; return; }
          const c = document.createElement("span");
          c.className = "char" + (accent ? " accent" : "");
          c.textContent = ch;
          wordEl.appendChild(c);
          chars.push(c);
        });
        el.appendChild(wordEl);
        if (wi < words.length - 1) el.appendChild(document.createTextNode("\u00A0"));
      });
      if (li < lines.length - 1) el.appendChild(document.createElement("br"));
    });
    el.dataset.split = "1";
    return chars;
  }

  /* revealUp — staggered fade-up of .section-animate children on scroll-in */
  function revealUp(root, opts = {}) {
    const els = gsap.utils.toArray(root.querySelectorAll(".section-animate"));
    if (!els.length) return;
    if (prefersReduced()) { gsap.set(els, { opacity: 1, y: 0 }); return; }
    gsap.set(els, { y: opts.y ?? 60, opacity: 0 });
    ScrollTrigger.batch(els, {
      start: opts.start ?? "top 85%",
      onEnter: (batch) =>
        gsap.to(batch, {
          y: 0, opacity: 1, duration: 0.8,
          stagger: opts.stagger ?? 0.12, overwrite: true,
        }),
      once: true,
    });
  }

  /* counter — animate a number from 0 to target on first scroll-in */
  function counter(el, target, opts = {}) {
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: opts.duration ?? 2,
      ease: "power2.out",
      snap: { v: 1 },
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
      onUpdate: () => {
        el.textContent = Math.round(obj.v).toLocaleString("it-IT");
      },
    });
  }

  window.MT = { useGsap, splitToChars, revealUp, counter };
})();
