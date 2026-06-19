import { Helmet } from "react-helmet-async";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import ForWhom from "./components/ForWhom/ForWhom";
import Situations from "./components/Situations/Situations";
import Modality from "./components/Modality/Modality";
import Approach from "./components/Approach/Approach";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const SITE_URL = "https://clinicaparaartistas.com";

function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "En Acto",
    alternateName: "Psicología para artistas y creadores",
    description:
      "Psicología para artistas y creadores. Atención psicológica online en español para personas vinculadas a procesos creativos.",
    url: SITE_URL,
    image: `${SITE_URL}/og-en-acto.jpg`,
    inLanguage: "es",
    areaServed: [
      "España",
      "Francia",
      "Alemania",
      "Italia",
      "Bélgica",
      "Países Bajos",
      "Europa",
    ],
    availableLanguage: ["es"],
    serviceType: [
      "Psicología para artistas",
      "Atención psicológica online",
      "Psicoterapia online en español",
      "Acompañamiento psicológico para procesos creativos",
    ],
    founder: {
      "@type": "Person",
      name: "Guillermo Pietra Figueredo",
      jobTitle: "Psicólogo",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Universidad de Buenos Aires",
      },
    },
    sameAs: ["https://www.instagram.com/insitupsi/"],
  };

  return (
    <>
      <Helmet>
        <title>En Acto | Psicología para artistas y creadores</title>

        <meta
          name="description"
          content="Psicología para artistas y creadores. Atención online en español para personas vinculadas a procesos creativos, escénicos, musicales, visuales y literarios."
        />

        <meta
          name="keywords"
          content="psicología para artistas, psicólogo para artistas, psicoterapia online en español, atención psicológica online, artistas hispanohablantes, procesos creativos, bloqueo creativo"
        />

        <link rel="canonical" href={`${SITE_URL}/`} />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Header />

      <main>
        <Hero />
        <ForWhom />
        <Situations />
        <Modality />
        <Approach />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;