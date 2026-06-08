/* ===== pages/Contatti — form + info + mappa + orari ===== */
function PageContatti() {
  return (
    <React.Fragment>
      <PageHero
        eyebrow="Contatti"
        title="Costruiamolo insieme"
        sub="Inviaci il tuo disegno tecnico o la tua richiesta: ti risponderemo con una prima valutazione di fattibilità e un preventivo dedicato."
      />

      <Contatti />

      <section style={{ paddingBottom: "110px" }} data-screen-label="Mappa & orari">
        <div className="wrap">
          <div className="con-extra">
            <div className="con-map">
              <iframe
                title="Mappa — Mec Tech, Rolo (RE)"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.621874522053!2d10.842247977072525!3d44.86999207107039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f894e61cf87b9%3A0x27903e972fb0dd80!2sVia%20degli%20Intarsiatori%20Rolesi%2C%203%2C%2042047%20Rolo%20RE!5e0!3m2!1sit!2sit!4v1780130123437!5m2!1sit!2sit"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a className="map-open" href="https://maps.app.goo.gl/NPcswfPWuGcAup456" target="_blank" rel="noopener noreferrer">Apri in Google Maps →</a>
            </div>
            <div className="con-orari">
              <div className="oh">Orari uffici</div>
              <div className="orow"><span className="d">Lun — Gio</span><span className="h">08:00 — 12:30 · 14:00 — 18:00</span></div>
              <div className="orow"><span className="d">Venerdì</span><span className="h">08:00 — 13:00</span></div>
              <div className="orow"><span className="d">Sab — Dom</span><span className="h">Chiuso</span></div>
              <div className="oh" style={{ marginTop: "28px" }}>Dove siamo</div>
              <div className="orow"><span className="d">Sede produttiva</span><span className="h">Via degli Intarsiatori Rolesi, 3 — 42047 Rolo (RE)</span></div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
window.PageContatti = PageContatti;
