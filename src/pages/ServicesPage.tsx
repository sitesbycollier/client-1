import { ServicesOverviewSection } from "../sections/ServicesOverviewSection";
import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";

export const ServicesPage = (): JSX.Element => {
  return (
    <div className="bg-[#fefefe] w-full overflow-x-hidden">
      <Header />

      <main id="services" aria-label="Services page" className="w-full">
        <ServicesOverviewSection />
      </main>

      <Footer />
    </div>
  );
};
