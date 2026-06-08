/* ===== components/Hero — clip-path diagonal, vertical label, GSAP timeline ===== */
function Hero() {
  const scope = MT.useGsap(() => {
    const h1 = document.querySelector(".hero h1");
    const chars = MT.splitToChars(h1);

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set([".hero-eyebrow", chars, ".hero-sub", ".hero-actions .btn", ".hero-stats > div", ".hero-vlabel", ".scroll-cue"], { opacity: 1, y: 0, yPercent: 0 });
      return;
    }

    const tl = gsap.timeline({ delay: 0.15 });
    tl.from(".hero-overlay", { opacity: 0, duration: 0.8 }).
    from(".hero-bg", { scale: 1.12, duration: 1.6, ease: "power2.out" }, 0).
    from(".hero-eyebrow", { y: 24, opacity: 0, duration: 0.6 }, 0.3).
    from(chars, { yPercent: 110, opacity: 0, duration: 0.7, stagger: 0.018, ease: "power3.out" }, 0.35).
    from(".hero-sub", { y: 28, opacity: 0, duration: 0.7 }, "-=0.35").
    from(".hero-actions .btn", { y: 24, opacity: 0, duration: 0.55, stagger: 0.12 }, "-=0.3").
    from(".hero-stats > div", { y: 28, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.25").
    from(".hero-vlabel", { opacity: 0, duration: 0.8 }, "-=0.5").
    from(".scroll-cue", { opacity: 0, duration: 0.6 }, "-=0.4");

    // subtle parallax on the bg as you scroll
    gsap.to(".hero-bg", {
      yPercent: 14, ease: "none",
      scrollTrigger: { trigger: document.querySelector(".hero"), start: "top top", end: "bottom top", scrub: true }
    });
  }, []);

  const STATS = [
  ["1000", " m²", "Superficie produttiva"],
  ["20", "", "Macchinari CNC"],
  ["5.700", "", "Pezzi prodotti · 2024"]];


  return (
    <section className="hero" id="home" ref={scope} data-screen-label="Hero">
      <img className="hero-bg" src="assets/hero-factory-bw.jpg" alt="Reparto produttivo Mec Tech" />
      <div className="hero-overlay"></div>
      <span className="mt-vlabel hero-vlabel">Evolving Precision</span>
      <div className="wrap hero-content">
        <div className="eyebrow accent-eyebrow hero-eyebrow">Lavorazioni meccaniche di precisione</div>
        <h1 data-text="Meccanica di|precisione, *su misura.*"></h1>
        <p className="hero-sub">
          Un'attività giovane e dinamica al servizio dei settori più disparati.
          Tornitura, fresatura e lavorazioni CNC con macchinari di ultima generazione.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary btn-lg" onClick={() => navigate("contatti")}>Richiedi preventivo →</a>
          <a className="btn btn-ghost-light btn-lg" onClick={() => navigate("lavorazioni")}>Le lavorazioni</a>
        </div>
        <div className="hero-stats">
          {STATS.map(([n, u, lab]) =>
          <div key={lab}>
              <span className="hs-num">{n}<span className="u">{u}</span></span>
              <span className="hs-lab">{lab}</span>
            </div>
          )}
        </div>
      </div>
      <div className="scroll-cue"><span>Scorri</span><span className="line"></span></div>
    </section>);

}

window.Hero = Hero;