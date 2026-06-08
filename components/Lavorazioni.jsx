/* ===== components/Lavorazioni — service card grid, diagonal clip reveal ===== */
const LAVORAZIONI = [
  ["01", "Tornitura CNC", "Tornitura di precisione su barra e in ripresa, per particolari cilindrici complessi.",
    "assets/photo-part-bearing.jpg", ["Ø 4–250 mm", "Multi-asse", "Barra automatica"]],
  ["02", "Fresatura CNC", "Centri di lavoro a 3, 4 e 5 assi per geometrie articolate e tolleranze strette.",
    "assets/photo-part-blocks.jpg", ["5 assi", "Alluminio · Acciaio", "Prototipi & serie"]],
  ["03", "Rettifica", "Rettifica in tondo e in piano per finiture superficiali e accoppiamenti critici.",
    "assets/photo-collets.jpg", ["tol. ±0.005", "Ra 0.4", "Tempra"]],
  ["04", "Foratura & filettatura", "Forature profonde, maschiature e filettature su componenti di serie.",
    "assets/photo-parts-drilled.jpg", ["Fori passanti", "Filetti M2–M30", "Inserti"]],
  ["05", "Finitura & trattamenti", "Sbavatura, lucidatura e gestione di trattamenti conto terzi: anodizzazione, zincatura.",
    "assets/photo-forged-parts.jpg", ["Anodizzazione", "Zincatura", "Sabbiatura"]],
  ["06", "Controllo qualità", "Collaudo dimensionale con strumenti certificati su piano di granito.",
    "assets/photo-qc-protractor.jpg", ["Metrologia", "Report dimensionale", "100% tracciabile"]],
];

function Lavorazioni() {
  const scope = MT.useGsap(() => { MT.revealUp(scope.current, { stagger: 0.1 }); }, []);

  return (
    <section className="section" id="lavorazioni" ref={scope} data-screen-label="Lavorazioni">
      <div className="wrap">
        <div className="lav-head">
          <div>
            <div className="eyebrow accent-eyebrow section-animate">Lavorazioni & servizi</div>
            <h2 className="sec-title section-animate">Dal disegno tecnico<br/>al pezzo finito</h2>
          </div>
          <p className="sec-lead section-animate">
            Un ciclo completo di lavorazioni meccaniche per asportazione di truciolo,
            gestito internamente con macchinari di ultima generazione.
            <br/><a className="accent" style={{ cursor: "pointer", fontWeight: 600 }} onClick={() => navigate("lavorazioni")}>Vedi tutte le lavorazioni →</a>
          </p>
        </div>
        <div className="lav-grid">
          {LAVORAZIONI.map(([num, title, desc, img, tags]) => (
            <article className="lav-card section-animate" key={num}>
              <img className="lav-img" src={img} alt={title} />
              <span className="lav-num">{num}</span>
              <div className="lav-body">
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="lav-tags">
                  {tags.map((t) => <span className="lav-tag" key={t}>{t}</span>)}
                </div>
                <div className="lav-bar"></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Lavorazioni = Lavorazioni;
