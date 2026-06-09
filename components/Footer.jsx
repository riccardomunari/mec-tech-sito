/* ===== components/Footer — CTA band, address columns, group logos ===== */
function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-cta">
          <h2>Trasformiamo il tuo<br/>progetto in precisione.</h2>
          <a className="btn btn-primary btn-lg" onClick={() => navigate("contatti")}>Richiedi un preventivo →</a>
        </div>

        <div className="foot-grid">
          <div className="foot-brand">
            <img src="assets/logo-mectech-white.png" alt="Mec Tech" />
            <div className="foot-tag">Evolving Precision</div>
            <div className="foot-group">
              <div className="foot-group-lab">Parte del gruppo</div>
              <div className="foot-logos">
                <span className="group-mark">Mecaf<span className="m-orange">▪</span></span>
                <a href="http://pasinitech.eu/" target="_blank" rel="noopener noreferrer" className="group-mark">Pasini Tech <span className="sfx">s.r.l.</span></a>
              </div>
            </div>
          </div>
          <div className="foot-col">
            <div className="foot-h">Sede produttiva</div>
            <p>MEC TECH S.R.L.<br/>Via degli Intarsiatori Rolesi, 3<br/>42047 Rolo (RE)</p>
          </div>
          <div className="foot-col">
            <div className="foot-h">Naviga</div>
            <p>
              <a onClick={() => navigate("azienda")}>Azienda</a><br/>
              <a onClick={() => navigate("lavorazioni")}>Lavorazioni</a><br/>
              <a onClick={() => navigate("parco-macchine")}>Parco Macchine</a><br/>
              <a onClick={() => navigate("settori")}>Settori</a><br/>
              <a onClick={() => navigate("qualita")}>Qualità</a>
            </p>
          </div>
          <div className="foot-col">
            <div className="foot-h">Contatti</div>
            <p>
              <a href="mailto:info@mectech.srl">info@mectech.srl</a><br/>
              mectechsrl@pec.it<br/>
              <a href="tel:+390532731671">0532 731671</a>
            </p>
          </div>
        </div>

        <div className="foot-base">
          <span>© 2026 Mec Tech s.r.l. · Tutti i diritti riservati</span>
          <span className="mono">P.IVA 03066410352</span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
