/* ===== components/ParcoMacchine — technical machine spec table ===== */
const MACCHINE = [
  ["Centro di lavoro 5 assi", "Fresatura simultanea", "850 × 600 × 500 mm", "12.000 rpm", "±0.005 mm", "4"],
  ["Centro verticale 3 assi", "Fresatura", "1.100 × 600 × 600 mm", "10.000 rpm", "±0.008 mm", "6"],
  ["Tornio CNC bi-mandrino", "Tornitura in ripresa", "Ø 320 × 650 mm", "4.500 rpm", "±0.005 mm", "5"],
];

function ParcoMacchine() {
  const scope = MT.useGsap(() => { MT.revealUp(scope.current, { stagger: 0.07 }); }, []);

  return (
    <section className="section section-tint" id="parco-macchine" ref={scope} data-screen-label="Parco Macchine">
      <div className="wrap">
        <div className="pm-head">
          <div className="eyebrow accent-eyebrow section-animate">Parco macchine</div>
          <h2 className="sec-title section-animate">Tecnologia di ultima generazione</h2>
          <p className="sec-lead section-animate">
            Un parco macchine costantemente aggiornato ci permette di coprire l'intero ciclo
            produttivo internamente, garantendo continuità, precisione e tempi certi.
          </p>
        </div>

        <div className="pm-table section-animate">
          <div className="pm-row head">
            <div className="pm-cell">Macchina</div>
            <div className="pm-cell">Corsa / capacità</div>
            <div className="pm-cell">Mandrino</div>
            <div className="pm-cell">Tolleranza</div>
            <div className="pm-cell">Q.tà</div>
          </div>
          {MACCHINE.map(([name, lav, corsa, mand, tol, qty]) => (
            <div className="pm-row" key={name}>
              <div className="pm-cell name">{name}<span className="sub">{lav}</span></div>
              <div className="pm-cell mono" data-lab="Corsa / capacità">{corsa}</div>
              <div className="pm-cell mono" data-lab="Mandrino">{mand}</div>
              <div className="pm-cell mono" data-lab="Tolleranza">{tol}</div>
              <div className="pm-cell qty" data-lab="Q.tà">{qty}</div>
            </div>
          ))}
        </div>
        <div className="pm-note section-animate">
          <span className="dot"></span>
          Dati indicativi del parco macchine — richiedi la scheda tecnica completa per il tuo progetto.
        </div>
      </div>
    </section>
  );
}

window.ParcoMacchine = ParcoMacchine;
