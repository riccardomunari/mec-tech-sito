/* ===== components/Showcase — B&W product/process photo grid ===== */
function Showcase({ tint }) {
  const scope = MT.useGsap(() => { MT.revealUp(scope.current, { stagger: 0.08 }); }, []);
  return (
    <section className={"section " + (tint ? "section-tint" : "")} ref={scope} data-screen-label="Showcase">
      <div className="wrap">
        <div className="proc-head section-animate">
          <div className="eyebrow accent-eyebrow">In officina</div>
          <h2 className="sec-title">Materia, mani e macchine</h2>
        </div>
        <div className="show-grid section-animate">
          <figure className="show-fig big"><img src="assets/hero-factory-bw.jpg" alt="Reparto produttivo" /><figcaption>Reparto produttivo · Rolo (RE)</figcaption></figure>
          <figure className="show-fig"><img src="assets/photo-swarf.jpg" alt="Truciolo di lavorazione" /><figcaption>Truciolo · asportazione</figcaption></figure>
          <figure className="show-fig"><img src="assets/photo-worker-part.jpg" alt="Operatore con componente" /><figcaption>Collaudo in linea</figcaption></figure>
        </div>
      </div>
    </section>
  );
}

window.Showcase = Showcase;
