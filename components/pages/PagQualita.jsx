/* ===== pages/Qualita — certificazioni + metodo di collaudo ===== */
const METODO = [
  ["01", "Riesame del disegno", "Analisi della documentazione tecnica e definizione del piano di controllo prima della produzione."],
  ["02", "Controllo in processo", "Verifiche dimensionali a bordo macchina durante la lavorazione, con frequenza definita."],
  ["03", "Collaudo finale", "Verifica dimensionale alla macchina di misura a coordinate, con calibri e micrometri tarati periodicamente."],
  ["04", "Tracciabilità", "Ogni lotto è documentato e tracciabile: report dimensionale disponibile su richiesta."],
];

function PageQualita() {
  const scope = MT.useGsap(() => { MT.revealUp(scope.current, { stagger: 0.09 }); }, []);
  return (
    <React.Fragment>
      <PageHero
        eyebrow="Qualità & certificazioni"
        title="La precisione è un metodo, non un caso"
        sub="Lavoriamo per standard riconosciuti e documentiamo i controlli, perché ciò che consegniamo sia ripetibile e conforme al disegno tecnico."
        img="assets/photo-qc-protractor.jpg"
      />

      <Certificazioni showIntro={false} />

      <section className="section" ref={scope} data-screen-label="Metodo">
        <div className="wrap">
          <div className="metodo-grid">
            <div>
              <div className="eyebrow accent-eyebrow section-animate">Il nostro metodo</div>
              <h2 className="sec-title section-animate">Controllo in ogni fase</h2>
              <p className="sec-lead section-animate">
                Il controllo qualità non è un passaggio finale ma accompagna l'intero ciclo
                produttivo, dalla presa in carico del disegno fino alla spedizione.
              </p>
            </div>
            <div className="metodo-list section-animate">
              {METODO.map(([n, t, d]) => (
                <div className="metodo-item" key={n}>
                  <div className="mi-num">{n}</div>
                  <div>
                    <h4>{t}</h4>
                    <p>{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
window.PageQualita = PageQualita;
