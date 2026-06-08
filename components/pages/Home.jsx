/* ===== pages/Home — full overview (unchanged composition) ===== */
function Home() {
  return (
    <React.Fragment>
      <Hero />
      <ChiSiamo />
      <Lavorazioni />
      <Settori />
      <ParcoMacchine />
      <Certificazioni />
      <Contatti />
    </React.Fragment>
  );
}
window.Home = Home;
