/* ===== pages/Lavorazioni — servizi + materiali + capacità ===== */
const MATERIALI = [
  ["Alluminio", "Leghe 6000 · 7075 · Ergal"],
  ["Acciaio inox", "AISI 303 · 304 · 316"],
  ["Acciai legati", "Bonificati · da cementazione"],
  ["Ottone & rame", "Per particolari elettrici/idraulici"],
  ["Titanio", "Gradi 2 · 5 (su richiesta)"],
  ["Tecnopolimeri", "PEEK · POM · PA6 · PTFE"],
];

const CAPACITA = [
  ["5", "Assi simultanei"],
  ["Ø320", "Tornitura · mm"],
  ["±0.005", "Tolleranza · mm"],
  ["Ra 0.4", "Finitura superficiale"],
];

function PageLavorazioni() {
  const scope = MT.useGsap(() => { MT.revealUp(scope.current, { stagger: 0.08 }); }, []);
  return (
    <React.Fragment>
      <PageHero
        eyebrow="Lavorazioni"
        title="Lavorazioni meccaniche di precisione"
        sub="Tornitura, fresatura, rettifica e finitura: un ciclo completo per asportazione di truciolo, gestito internamente dal disegno al pezzo finito."
        img="assets/photo-part-blocks.jpg"
        vlabel="Lavorazioni Meccaniche"
      />

      <Lavorazioni />

      <section className="section section-tint" ref={scope} data-screen-label="Materiali">
        <div className="wrap">
          <div className="lav-head">
            <div>
              <div className="eyebrow accent-eyebrow section-animate">Materiali</div>
              <h2 className="sec-title section-animate">I materiali che lavoriamo</h2>
            </div>
            <p className="sec-lead section-animate">
              Dai metalli leggeri agli acciai legati, fino ai tecnopolimeri tecnici:
              selezioniamo il materiale in base alla funzione del particolare.
            </p>
          </div>
          <div className="mat-grid section-animate">
            {MATERIALI.map(([n, m]) => (
              <div className="mat-cell" key={n}>
                <div className="mat-name"><span className="b"></span>{n}</div>
                <div className="mat-meta">{m}</div>
              </div>
            ))}
          </div>
          <div className="cap-row">
            {CAPACITA.map(([n, l]) => (
              <div className="cap-item section-animate" key={l}>
                <div className="cap-num">{n}</div>
                <div className="cap-lab">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
window.PageLavorazioni = PageLavorazioni;
