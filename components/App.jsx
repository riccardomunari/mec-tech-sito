/* ===== App — pushState router (home + 6 internal pages) + SEO meta ===== */
const { useState: useStateApp, useEffect: useEffectApp } = React;

const ROUTES = {
  "home": Home,
  "azienda": PageAzienda,
  "lavorazioni": PageLavorazioni,
  "settori": PageSettori,
  "parco-macchine": PageParcoMacchine,
  "qualita": PageQualita,
  "contatti": PageContatti,
};

const SEO_BASE = "https://mectech.srl";
const SEO_OG_IMG = SEO_BASE + "/assets/hero-factory-bw.jpg";

const SEO_MAP = {
  home: {
    title: "Lavorazioni Meccaniche CNC di Precisione | Mec Tech Rolo (RE)",
    description: "Mec Tech S.R.L.: tornitura, fresatura e rettifica CNC conto terzi a Rolo (RE). 5 assi simultanei, tolleranza ±0.005mm. Automotive, oleodinamica, medicale. Preventivo gratuito.",
    canonical: SEO_BASE + "/",
    ogImage: SEO_OG_IMG,
  },
  azienda: {
    title: "Chi Siamo | Mec Tech — Meccanica di Precisione dal 2000",
    description: "Mec Tech nasce a Rolo (RE) dalla fusione di esperienze nel settore metalmeccanico. Passione, precisione ed evoluzione tecnologica: scopri la nostra storia e i nostri valori.",
    canonical: SEO_BASE + "/azienda",
    ogImage: SEO_OG_IMG,
  },
  lavorazioni: {
    title: "Lavorazioni CNC: Tornitura, Fresatura, Rettifica | Mec Tech",
    description: "Lavorazioni meccaniche CNC su alluminio, acciaio inox, titanio e tecnopolimeri. Tornitura fino a Ø320mm, fresatura 5 assi, finitura Ra 0.4. Conto terzi a Rolo (RE).",
    canonical: SEO_BASE + "/lavorazioni",
    ogImage: SEO_OG_IMG,
  },
  settori: {
    title: "Settori Serviti: Automotive, Oleodinamica, Medicale | Mec Tech",
    description: "Mec Tech lavora per automotive, oleodinamica, pneumatica, telecomunicazioni, laserterapia e illuminotecnica. Meccanica di precisione conto terzi per ogni settore industriale.",
    canonical: SEO_BASE + "/settori",
    ogImage: SEO_OG_IMG,
  },
  "parco-macchine": {
    title: "Parco Macchine CNC: Tornitura, Fresatura, Rettifica | Mec Tech",
    description: "Torni CNC bi-mandrino, centri di lavoro 3-4-5 assi e rettifiche in piano e in tondo. Scopri il parco macchine di Mec Tech a Rolo, Reggio Emilia.",
    canonical: SEO_BASE + "/parco-macchine",
    ogImage: SEO_OG_IMG,
  },
  qualita: {
    title: "Qualità e Collaudo | Controllo Dimensionale CNC | Mec Tech",
    description: "Controllo qualità in ogni fase: riesame del disegno, misure a bordo macchina e collaudo finale su piano di granito. Tolleranze certificate per ogni commessa.",
    canonical: SEO_BASE + "/qualita",
    ogImage: SEO_OG_IMG,
  },
  contatti: {
    title: "Contatti | Mec Tech S.R.L. — Rolo (RE)",
    description: "Contatta Mec Tech S.R.L. a Rolo (RE): tel. 0532 731671, info@mectech.srl. Richiedi un preventivo per lavorazioni meccaniche di precisione conto terzi.",
    canonical: SEO_BASE + "/contatti",
    ogImage: SEO_OG_IMG,
  },
};

function setSeoMeta(name, content, isOg) {
  const attr = isOg ? "property" : "name";
  let el = document.querySelector('meta[' + attr + '="' + name + '"]');
  if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
  el.setAttribute("content", content);
}

function setSeoCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) { el = document.createElement("link"); el.setAttribute("rel", "canonical"); document.head.appendChild(el); }
  el.setAttribute("href", url);
}

function updateSeoMeta(seo) {
  document.title = seo.title;
  setSeoMeta("description", seo.description, false);
  setSeoMeta("og:title", seo.title, true);
  setSeoMeta("og:description", seo.description, true);
  setSeoMeta("og:url", seo.canonical, true);
  setSeoMeta("og:image", seo.ogImage, true);
  setSeoCanonical(seo.canonical);
}

function readRoute() {
  const p = location.pathname.replace(/^\//, "").replace(/\/$/, "").trim();
  return ROUTES[p] ? p : "home";
}

function App() {
  const [route, setRoute] = useStateApp(readRoute());

  useEffectApp(() => {
    const onNav = () => {
      const r = readRoute();
      setRoute(r);
      updateSeoMeta(SEO_MAP[r]);
      window.scrollTo({ top: 0, behavior: "auto" });
      ScrollTrigger && ScrollTrigger.refresh();
    };
    window.addEventListener("popstate", onNav);
    updateSeoMeta(SEO_MAP[route]);
    return () => window.removeEventListener("popstate", onNav);
  }, []);

  const Page = ROUTES[route] || Home;

  return (
    <div className="site">
      <Navbar route={route} />
      <main key={route}>
        <Page />
      </main>
      <Footer />
    </div>
  );
}

window.App = App;
