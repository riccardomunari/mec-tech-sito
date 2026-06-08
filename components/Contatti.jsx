/* ===== components/Contatti — form (validated) + company data ===== */
const { useState: useStateContatti } = React;
function Contatti() {
  const [form, setForm] = useStateContatti({ nome: "", azienda: "", email: "", tel: "", settore: "", msg: "" });
  const [errors, setErrors] = useStateContatti({});
  const [sent, setSent] = useStateContatti(false);

  const scope = MT.useGsap(() => {MT.revealUp(scope.current, { stagger: 0.1 });}, []);

  const set = (k) => (e) => {
    setForm({ ...form, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: null });
  };

  const validate = () => {
    const err = {};
    if (!form.nome.trim()) err.nome = "Inserisci il tuo nome";
    if (!form.email.trim()) err.email = "Inserisci una email";else
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) err.email = "Email non valida";
    if (!form.msg.trim()) err.msg = "Descrivi la tua richiesta";
    return err;
  };

  const submit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setSent(true);
      gsap.fromTo(".form-success", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
    }
  };

  return (
    <section className="contatti" id="contatti" ref={scope} data-screen-label="Contatti">
      <div className="wrap">
        <div className="con-grid">
          <div className="con-info">
            <div className="eyebrow accent-eyebrow section-animate">Contatti</div>
            <h2 className="sec-title section-animate">Hai un disegno tecnico? Costruiamolo insieme.</h2>
            <p className="sec-lead section-animate">
              Inviaci la tua richiesta: ti risponderemo con una prima valutazione di fattibilità
              e un preventivo dedicato.
            </p>
            <div className="con-blocks">
              <div className="con-block section-animate">
                <div className="lab">Sede produttiva</div>
                <div className="val">Via degli Intarsiatori Rolesi, 3<br />42047 Rolo (RE) · Italia</div>
              </div>
              <div className="con-block section-animate">
                <div className="lab">Scrivici</div>
                <div className="val"><a href="mailto:info@mectech.srl">info@mectech.srl</a><br />mectechsrl@pec.it</div>
              </div>
              <div className="con-block section-animate">
                <div className="lab">Telefono</div>
                <div className="val"><a href="tel:+390532731671">0532 731671</a></div>
              </div>
            </div>
          </div>

          <div className="con-form section-animate">
            {!sent ?
            <form onSubmit={submit} noValidate>
                <div className="form-title">Richiedi un preventivo</div>
                <p className="form-sub">I campi contrassegnati sono obbligatori.</p>
                <div className="field-row">
                  <div className="field">
                    <label>Nome e cognome *</label>
                    <input className={errors.nome ? "invalid" : ""} value={form.nome} onChange={set("nome")} placeholder="Mario Rossi" />
                    {errors.nome && <span className="err">{errors.nome}</span>}
                  </div>
                  <div className="field">
                    <label>Azienda</label>
                    <input value={form.azienda} onChange={set("azienda")} placeholder="La tua azienda" />
                  </div>
                </div>
                <div className="field-row">
                  <div className="field">
                    <label>Email *</label>
                    <input className={errors.email ? "invalid" : ""} value={form.email} onChange={set("email")} placeholder="nome@azienda.it" />
                    {errors.email && <span className="err">{errors.email}</span>}
                  </div>
                  <div className="field">
                    <label>Telefono</label>
                    <input value={form.tel} onChange={set("tel")} placeholder="+39 ..." />
                  </div>
                </div>
                <div className="field">
                  <label>Settore</label>
                  <select value={form.settore} onChange={set("settore")}>
                    <option value="">Seleziona…</option>
                    <option>Automotive / Motociclismo</option>
                    <option>Oleodinamica / Pneumatica</option>
                    <option>Telecomunicazioni / Ferrovie</option>
                    <option>Medicali / Laserterapia</option>
                    <option>Illuminotecnica</option>
                    <option>Altro</option>
                  </select>
                </div>
                <div className="field">
                  <label>La tua richiesta *</label>
                  <textarea className={errors.msg ? "invalid" : ""} rows="4" value={form.msg} onChange={set("msg")} placeholder="Descrivi il particolare, le quantità e le tolleranze richieste…"></textarea>
                  {errors.msg && <span className="err">{errors.msg}</span>}
                </div>
                <button type="submit" className="btn btn-primary btn-lg">Invia richiesta →</button>
              </form> :

            <div className="form-success">
                <div className="check">✓</div>
                <h3>Richiesta inviata</h3>
                <p>Grazie {form.nome.split(" ")[0]}. Ti ricontatteremo al più presto con una prima valutazione.</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>);

}

window.Contatti = Contatti;