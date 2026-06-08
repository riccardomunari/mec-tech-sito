/* ===== components/Process — 5-step production timeline ===== */
const PROC_STEPS = [
  ["01", "Primo contatto", "Ricezione della richiesta e prima indicazione di fattibilità, con sviluppo di un preventivo ad-hoc."],
  ["02", "Pianificazione", "Generazione della commessa, pianificazione delle attività e verifica del materiale necessario."],
  ["03", "Produzione", "Il materiale viene tagliato, preparato e disposto per la lavorazione all'interno delle macchine."],
  ["04", "Trattamenti", "Superato il collaudo, se richiesto si gestiscono eventuali lavorazioni e trattamenti conto terzi."],
  ["05", "Spedizione", "Operazioni finali, imballaggio e spedizione del prodotto finito al cliente."],
];

function Process({ dark }) {
  const scope = MT.useGsap(() => {
    MT.revealUp(scope.current, { stagger: 0.1 });
    gsap.utils.toArray(scope.current.querySelectorAll(".step-bar span")).forEach((bar) => {
      gsap.fromTo(bar, { scaleX: 0 }, {
        scaleX: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: bar, start: "top 90%", once: true },
      });
    });
  }, []);

  return (
    <section className={"section " + (dark ? "section-darkest" : "")} ref={scope} data-screen-label="Processo">
      <div className="wrap">
        <div className="proc-head">
          <div className="eyebrow accent-eyebrow section-animate">Processo produttivo</div>
          <h2 className="sec-title section-animate" style={dark ? { color: "#fff" } : null}>
            Curiamo l'intero processo
          </h2>
          <p className="sec-lead section-animate">
            Dal primo contatto alla spedizione, ogni fase è gestita e tracciata internamente.
          </p>
        </div>
        <div className="timeline">
          {PROC_STEPS.map(([n, t, d]) => (
            <div className="step section-animate" key={n}>
              <div className="step-num">{n}</div>
              <div className="step-bar"><span></span></div>
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Process = Process;
