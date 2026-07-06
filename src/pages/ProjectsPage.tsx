import { ContactFormSection } from "../sections/ContactFormSection";
import { HeroFeatureSection } from "../sections/HeroFeatureSection";
import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";

export const ProjectsPage = (): JSX.Element => {
  return (
    <div className="bg-[#fefefe] w-full overflow-x-hidden">
      <Header />

      <main id="projects" aria-label="Projects page" className="w-full">
        <HeroFeatureSection />
      </main>

      <div id="contact">
        <ContactFormSection />
      </div>

      <Footer />
    </div>
  );
};
