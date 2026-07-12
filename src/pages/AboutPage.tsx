import { DesignerIntroSection } from "../sections/DesignerIntroSection";
import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";

export const AboutPage = (): JSX.Element => {
  return (
    <div className="bg-[#fefefe] w-full overflow-x-hidden">
      <Header />

      <section
        id="designer-intro"
        aria-label="Designer introduction"
        className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-16"
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="shrink-0 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] mx-auto lg:mx-0">
            <img
              className="w-full aspect-[0.77] object-cover rounded-xl shadow-lg"
              alt="Portrait of interior designer Amie Woeppel"
              src="https://c.animaapp.com/jPZwUw1S/img/amie-jpg-1.png"
            />
          </div>
          <div className="flex-1">
            <p className="[font-family:'Playfair_Display',Helvetica] font-normal text-[#c1b4a1] text-sm tracking-[3px] uppercase mb-2">
              About Amie
            </p>
            <h1 className="[font-family:'Merriweather',Helvetica] font-light text-[#636363] text-2xl sm:text-[30px] leading-snug mb-6">
              Thoughtful interiors by{" "}
              <span className="text-[#7faac4] font-normal">Amie Woeppel</span>
            </h1>
            <DesignerIntroSection />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
