/* ===== pages/Azienda — storia, processo, officina ===== */
const AZ_VALORI = [
  ["Passione", "Mettiamo dedizione in ogni fase della lavorazione, dal disegno al pezzo finito."],
  ["Precisione", "Tolleranze strette e controlli documentati: la qualità è un metodo, non un caso."],
  ["Evoluzione", "Aggiorniamo costantemente competenze e macchinari per seguire ogni settore."],
];

function PageAzienda() {
  const scope = MT.useGsap(() => { MT.revealUp(scope.current, { stagger: 0.1 }); }, []);
  return (
    <React.Fragment>
      <PageHero
        eyebrow="Azienda"
        title="Persone e precisione, dal 2000"
        sub="Un'attività giovane e dinamica nel settore della meccanica di precisione, nata a Rolo (RE) dalla fusione di esperienze e passione."
        img="assets/photo-worker-part.jpg"
        vlabel="Evolving Precision"
      />

      <ChiSiamo showCta={false} />

      <section className="section section-tint" ref={scope} data-screen-label="Valori">
        <div className="wrap">
          <div className="proc-head">
            <div className="eyebrow accent-eyebrow section-animate">I nostri valori</div>
            <h2 className="sec-title section-animate">Ciò che ci guida in officina</h2>
          </div>
          <div className="cards-3">
            {AZ_VALORI.map(([t, d], i) => (
              <div className="setd-card section-animate" key={t}>
                <div className="setd-idx">0{i + 1}</div>
                <h3>{t}</h3>
                <p>{d}</p>
                <div className="setd-bar"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process dark={true} />
      <Showcase />
    </React.Fragment>
  );
}
window.PageAzienda = PageAzienda;
