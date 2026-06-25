/* ===== pages/Settori — schede settore con descrizioni ===== */
const SETTORI_DETT = [
  ["Automotive / Motociclismo", "Particolari custom per moto e veicoli: supporti, staffe, componenti motore e ciclistica, dalla prototipazione alla piccola serie."],
  ["Oleodinamica", "Corpi valvola, raccordi e componenti per impianti in pressione, con tenute e tolleranze critiche."],
  ["Pneumatica", "Cilindri, attuatori e minuteria meccanica per l'automazione industriale."],
  ["Telecomunicazioni / Ferrovie", "Componenti strutturali e di precisione per apparati di rete e materiale rotabile."],
  ["Laserterapia / Medicali", "Particolari ad alta finitura per dispositivi medicali e apparecchiature laser."],
  ["Illuminotecnica", "Corpi e dissipatori in alluminio per sistemi di illuminazione tecnica."],
  ["Equitazione", "Articoli tecnici e accessori metallici per il settore equestre."],
  ["…e altri ancora", "La meccanica di precisione non ha limiti: valutiamo ogni nuova richiesta e settore."],
];

function PageSettori() {
  const scope = MT.useGsap(() => { MT.revealUp(scope.current, { stagger: 0.07 }); }, []);
  return (
    <React.Fragment>
      <PageHero
        eyebrow="Settori"
        title="Al servizio dei settori più disparati"
        sub="La meccanica di precisione, per sua natura, non ha limite ai campi in cui può intervenire. Ecco dove operiamo ogni giorno."
        img="assets/16042026-mectec-34.jpg"
      />

      <section className="section" ref={scope} data-screen-label="Settori">
        <div className="wrap">
          <div className="setd-grid">
            {SETTORI_DETT.map(([t, d], i) => (
              <div className="setd-card section-animate" key={t}>
                <div className="setd-idx">{String(i + 1).padStart(2, "0")}</div>
                <h3>{t}</h3>
                <p>{d}</p>
                <div className="setd-bar"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-darkest" data-screen-label="Settori CTA">
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="eyebrow accent-eyebrow" style={{ justifyContent: "center" }}>Non trovi il tuo settore?</div>
          <h2 className="sec-title" style={{ color: "#fff", margin: "0 auto 28px", maxWidth: "20ch" }}>
            Raccontaci il tuo progetto, troviamo la soluzione
          </h2>
          <a className="btn btn-primary btn-lg" onClick={() => navigate("contatti")}>Richiedi un preventivo →</a>
        </div>
      </section>
    </React.Fragment>
  );
}
window.PageSettori = PageSettori;
