/* ===== components/Certificazioni — quality & ISO badges (dark) ===== */
const CERTS = [
["ISO 9001", "UNI EN ISO 9001:2015", "Sistema di gestione per la qualità",
"Processi controllati e tracciabili in ogni fase, dalla commessa alla spedizione."],
["ISO 14001", "UNI EN ISO 14001", "Gestione ambientale",
"Attenzione al ciclo dei materiali, allo smaltimento del truciolo e dei fluidi."],
["IATF 16949", "Automotive", "Qualità settore automotive",
"Requisiti specifici per la fornitura di componenti destinati al settore auto/moto."],
["Metrologia", "Strumenti certificati", "Collaudo dimensionale",
"Verifica su piano di granito con calibri e goniometri tarati periodicamente."]];


function Certificazioni() {
  const scope = MT.useGsap(() => {MT.revealUp(scope.current, { stagger: 0.1 });}, []);

  return (
    <section className="section cert" id="certificazioni" ref={scope} data-screen-label="Certificazioni">
      <div className="wrap">
        <div className="cert-grid">
          <div className="cert-left">
            <div className="eyebrow accent-eyebrow section-animate">Qualità & certificazioni</div>
            <h2 className="sec-title section-animate">
              La precisione è un metodo, non un caso
            </h2>
            <p className="sec-lead section-animate">
              Ogni particolare nasce da un processo definito e verificabile. Lavoriamo per
              standard riconosciuti e documentiamo i controlli, perché ciò che consegniamo sia
              ripetibile e conforme al disegno tecnico.
            </p>
            <a className="btn btn-ghost section-animate" style={{ marginTop: "28px" }} onClick={() => navigate("qualita")}>
              La qualità Mec Tech →
            </a>
          </div>
          <div className="cert-badges">
            {CERTS.map(([code, sub, title, desc]) =>
            <div className="cert-badge section-animate" key={code}>
                <div className="cert-seal">ISO</div>
                <div className="code">{sub}</div>
                <div className="title">{title}</div>
                <p className="desc">{desc}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

window.Certificazioni = Certificazioni;