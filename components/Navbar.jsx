/* ===== components/Navbar — sticky, scroll-color, pushState navigation ===== */
const { useState, useEffect } = React;

const NAV_LINKS = [
  ["Azienda", "azienda"],
  ["Lavorazioni", "lavorazioni"],
  ["Settori", "settori"],
  ["Parco Macchine", "parco-macchine"],
  ["Qualità", "qualita"],
  ["Contatti", "contatti"],
];

function navigate(route) {
  const path = !route || route === "home" ? "/" : "/" + route;
  if (location.pathname === path) window.scrollTo({ top: 0, behavior: "smooth" });
  else {
    history.pushState(null, "", path);
    window.dispatchEvent(new Event("popstate"));
  }
}

/* legacy in-page scroll (used by hero scroll cue on home) */
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

function Navbar({ route }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the fullscreen menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const menuScope = MT.useGsap(() => {
    if (open) {
      gsap.fromTo(".nav-overlay", { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(".nav-overlay .nav-link, .nav-overlay-cta",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.07, delay: 0.08 });
    }
  }, [open]);

  const go = (r) => { setOpen(false); navigate(r); };

  return (
    <React.Fragment>
      <header className={"navbar" + (scrolled ? " scrolled" : "") + (open ? " menu-open" : "")}>
        <div className="wrap nav-inner">
          <a className="nav-logo" href="/" onClick={(e) => { e.preventDefault(); go("home"); }}>
            <img src="assets/logo-mectech-white.png" alt="Mec Tech" />
          </a>
          <nav className="nav-desktop">
            {NAV_LINKS.map(([label, id]) => (
              <button key={id} className={"nav-link" + (route === id ? " active" : "")} onClick={() => go(id)}>{label}</button>
            ))}
          </nav>
          <a className="btn btn-primary btn-sm nav-cta" onClick={() => go("contatti")}>Richiedi preventivo →</a>
          <button className={"burger" + (open ? " open" : "")} aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {open && (
        <div className="nav-overlay" ref={menuScope}>
          {NAV_LINKS.map(([label, id]) => (
            <button key={id} className={"nav-link" + (route === id ? " active" : "")} onClick={() => go(id)}>{label}</button>
          ))}
          <a className="btn btn-primary btn-lg nav-overlay-cta" onClick={() => go("contatti")}>Richiedi preventivo →</a>
        </div>
      )}
    </React.Fragment>
  );
}

window.Navbar = Navbar;
window.navigate = navigate;
window.scrollToId = scrollToId;
