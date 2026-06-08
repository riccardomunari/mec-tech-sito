/* ===== pages/ParcoMacchine — reparti + tabella tecnica ===== */
const REPARTI = [
["R1", "Tornitura", "Torni CNC bi-mandrino e automatici a fantina mobile per lavorazioni su barra e in ripresa."],
["R2", "Fresatura", "Centri di lavoro a 3, 4 e 5 assi per geometrie complesse e alte tolleranze."],
["R3", "Rettifica", "Rettifiche in piano e in tondo per finiture e accoppiamenti critici."],
["R4", "Controllo", "Sala metrologica con strumenti certificati su piano di granito."]];


function PageParcoMacchine() {
  const scope = MT.useGsap(() => {MT.revealUp(scope.current, { stagger: 0.09 });}, []);
  return (
    <React.Fragment>
      <PageHero
        eyebrow="Parco macchine"
        title="Tecnologia di ultima generazione"
        sub="Un parco macchine costantemente aggiornato che copre l'intero ciclo produttivo internamente, su una superficie di oltre 1.000 m²."
        img="assets/hero-factory-bw.jpg" />
      

      <section className="section" ref={scope} data-screen-label="Reparti">
        <div className="wrap">
          <div className="proc-head">
            <div className="eyebrow accent-eyebrow section-animate">I reparti</div>
            <h2 className="sec-title section-animate">Quattro reparti, un unico flusso</h2>
          </div>
          <div className="rep-grid">
            {REPARTI.map(([k, t, d]) =>
            <div className="rep-card section-animate" key={k}>
                <div className="rep-k">{k}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <ParcoMacchine />
    </React.Fragment>);

}
window.PageParcoMacchine = PageParcoMacchine;