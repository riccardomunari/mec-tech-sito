/* ===== components/Settori — sectors served, orange triangle bullets (dark) ===== */
const SETTORI = [
  "Automotive / Motociclismo",
  "Oleodinamica",
  "Pneumatica",
  "Telecomunicazioni / Ferrovie",
  "Laserterapia / Medicali",
  "Illuminotecnica",
  "Equitazione",
  "…e altri ancora",
];

function Settori() {
  const scope = MT.useGsap(() => {
    MT.revealUp(scope.current, { stagger: 0.08 });
  }, []);

  return (
    <section className="section section-darkest" id="settori" ref={scope} data-screen-label="Settori">
      <div className="wrap">
        <div className="set-grid">
          <div className="set-left">
            <div className="eyebrow accent-eyebrow section-animate">Settori serviti</div>
            <h2 className="sec-title section-animate" style={{ color: "#fff" }}>
              Al servizio dei settori più disparati
            </h2>
            <p className="sec-lead section-animate">
              La meccanica di precisione, per sua natura, non ha limite ai campi in cui può
              intervenire. Con i nostri collaboratori e i macchinari di ultima generazione
              soddisfiamo richieste tra loro molto diverse.
            </p>
            <a className="btn btn-primary section-animate" style={{ marginTop: "28px" }} onClick={() => navigate("settori")}>
              Esplora i settori →
            </a>
          </div>
          <ul className="set-list section-animate" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {SETTORI.map((s) => (
              <li className="set-item" key={s}><span className="set-bullet"></span>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

window.Settori = Settori;
