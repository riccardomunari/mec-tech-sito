/* ===== components/PageHero — internal page header band (dark) ===== */
function PageHero({ eyebrow, title, sub, img, vlabel }) {
  const scope = MT.useGsap(() => {
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const tl = gsap.timeline({ delay: 0.1 });
    tl.from(".ph-bg", { scale: 1.14, duration: 1.4, ease: "power2.out" }, 0)
      .from(".ph-crumb", { y: 20, opacity: 0, duration: 0.5 }, 0.1)
      .from(".ph-eyebrow", { y: 24, opacity: 0, duration: 0.55 }, 0.2)
      .from(".ph-title", { y: 36, opacity: 0, duration: 0.7 }, 0.3)
      .from(".ph-sub", { y: 24, opacity: 0, duration: 0.6 }, "-=0.35")
      .from(".ph-vlabel", { opacity: 0, duration: 0.8 }, "-=0.4");
  }, []);

  return (
    <section className="page-hero" ref={scope}>
      {img && <img className="ph-bg" src={img} alt="" />}
      <div className="ph-overlay"></div>
      {vlabel && <span className="mt-vlabel ph-vlabel">{vlabel}</span>}
      <div className="wrap ph-content">
        <div className="ph-crumb">
          <a onClick={() => navigate("home")}>Home</a>
          <span className="sep">/</span>
          <span className="cur">{eyebrow || title}</span>
        </div>
        {eyebrow && <div className="eyebrow accent-eyebrow ph-eyebrow">{eyebrow}</div>}
        <h1 className="ph-title">{title}</h1>
        {sub && <p className="ph-sub">{sub}</p>}
      </div>
    </section>
  );
}

window.PageHero = PageHero;
