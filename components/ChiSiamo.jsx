/* ===== components/ChiSiamo — intro copy + animated stat counters ===== */
const CS_STATS = [
  ["+", 25, "", "Anni di esperienza"],
  ["+", 20, "", "Macchine CNC in linea"],
  ["+", 200, "", "Clienti attivi"],
];

function ChiSiamo({ showCta = true } = {}) {
  const scope = MT.useGsap(() => {
    MT.revealUp(scope.current);
    // reveal the diagonal-cut photo with a clip wipe
    gsap.from(".cs-media .reveal-mask img", {
      scale: 1.18, duration: 1.2, ease: "power3.out",
      scrollTrigger: { trigger: ".cs-media", start: "top 80%", once: true },
    });
    gsap.fromTo(".cs-media .reveal-mask",
      { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
      { clipPath: "var(--clip-cut-tr)", duration: 1.1, ease: "power3.inOut",
        scrollTrigger: { trigger: ".cs-media", start: "top 80%", once: true } });
    // counters
    document.querySelectorAll(".cs-stat .num .count").forEach((el) => {
      MT.counter(el, parseInt(el.dataset.target, 10));
    });
  }, []);

  return (
    <section className="chisiamo" id="chi-siamo" ref={scope} data-screen-label="Chi Siamo">
      <div className="wrap">
        <div className="cs-grid">
          <div className="cs-media section-animate">
            <div className="reveal-mask">
              <img src="assets/photo-worker-part.jpg" alt="Operatore Mec Tech con componente lavorato" />
            </div>
            <div className="cs-badge"><span className="pre">EST.</span> ROLO · RE</div>
          </div>
          <div className="cs-copy">
            <div className="eyebrow section-animate">Chi siamo</div>
            <h2 className="sec-title section-animate">Persone, macchine e un metodo condiviso</h2>
            <p className="section-animate">
              Realizziamo principalmente <b>particolari per il settore metalmeccanico</b>,
              mettendo a disposizione dei clienti le capacità acquisite negli anni dai nostri
              operatori.
            </p>
            <p className="section-animate">
              Seguiamo costantemente l'<b>evoluzione tecnologica</b> del settore, investendo in
              macchinari e competenze per servire ambiti che vanno dal motociclismo a campi tra
              loro molto disparati.
            </p>
            {showCta && (
              <a className="btn btn-ghost section-animate" onClick={() => navigate("azienda")}>Scopri l'azienda →</a>
            )}
          </div>
        </div>

        <div className="cs-stats">
          {CS_STATS.map(([pfx, target, sfx, lab]) => (
            <div className="cs-stat section-animate" key={lab}>
              <div className="num">
                <span className="pfx">{pfx}</span>
                <span className="count" data-target={target}>0</span>{sfx}
              </div>
              <div className="lab">{lab}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.ChiSiamo = ChiSiamo;
