import { ContactFormSection } from "../sections/ContactFormSection";
import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";

export const ContactPage = (): JSX.Element => {
  return (
    <div className="bg-[#fefefe] w-full overflow-x-hidden">
      <Header />

      <main id="contact" aria-label="Contact page" className="w-full">
        <ContactFormSection />
      </main>

      <Footer />
    </div>
  );
};
