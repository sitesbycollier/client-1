import { useState, useCallback } from "react";
import { ContactFormSection } from "./sections/ContactFormSection";
import { DesignerIntroSection } from "./sections/DesignerIntroSection";
import { HeroFeatureSection } from "./sections/HeroFeatureSection";
import { MainNavigationSection } from "./sections/MainNavigationSection";
import { ServicesOverviewSection } from "./sections/ServicesOverviewSection";

const heroSlides = [
  {
    id: "stump-lane",
    imageSrc: "https://c.animaapp.com/jPZwUw1S/img/aime-cover3-1.png",
    imageAlt: "Stump Lane Project kitchen interior",
    title: "Stump Lane Project",
  },
  {
    id: "mount-riante",
    imageSrc: "https://c.animaapp.com/jPZwUw1S/img/cov5-1@2x.png",
    imageAlt: "Mount Riante elegant living space",
    title: "Mount Riante Project",
  },
  {
    id: "lacala",
    imageSrc: "https://c.animaapp.com/jPZwUw1S/img/aime-pic-2@2x.png",
    imageAlt: "The LaCala coastal bedroom",
    title: "The LaCala Project",
  },
];

const socialLinks = [
  {
    id: "linkedin",
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
    src: "https://c.animaapp.com/jPZwUw1S/img/linkedin.svg",
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/",
    label: "Facebook",
    src: "https://c.animaapp.com/jPZwUw1S/img/icon.svg",
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/",
    label: "Instagram",
    src: "https://c.animaapp.com/jPZwUw1S/img/instagram.svg",
  },
];

const partnerLogos = [
  {
    id: "ellipse-4",
    src: "https://c.animaapp.com/jPZwUw1S/img/ellipse-4@2x.png",
  },
  {
    id: "ellipse-5",
    src: "https://c.animaapp.com/jPZwUw1S/img/ellipse-5@2x.png",
  },
  {
    id: "ellipse-6",
    src: "https://c.animaapp.com/jPZwUw1S/img/ellipse-6@2x.png",
  },
  {
    id: "ellipse-7",
    src: "https://c.animaapp.com/jPZwUw1S/img/ellipse-7@2x.png",
  },
];

export const WoeppelPageDesign = (): JSX.Element => {
  const [heroIndex, setHeroIndex] = useState(0);

  const heroPrev = useCallback(() => {
    setHeroIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const heroNext = useCallback(() => {
    setHeroIndex((i) => (i + 1) % heroSlides.length);
  }, []);

  const activeSlide = heroSlides[heroIndex];

  return (
    <div
      className="bg-[#fefefe] w-full overflow-x-hidden"
      data-model-id="485:133"
    >
      {/* ── Sticky Nav ── */}
      <MainNavigationSection />

      {/* ── Hero Slideshow ── */}
      <section aria-label="Featured project slideshow" className="w-full">
        <div className="relative w-full">
          {/* Hero image */}
          <div className="w-full aspect-[16/9] sm:aspect-[2/1] lg:h-[620px] overflow-hidden">
            <img
              key={activeSlide.id}
              className="w-full h-full object-cover transition-opacity duration-500"
              alt={activeSlide.imageAlt}
              src={activeSlide.imageSrc}
            />
          </div>

          {/* Dark gradient overlay at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          {/* Slide title */}
          <div className="absolute bottom-6 right-5 sm:bottom-10 sm:right-10 lg:right-[120px]">
            <p className="[font-family:'Merriweather',Helvetica] font-light text-white text-base sm:text-2xl lg:text-[28px] leading-snug drop-shadow-md">
              {activeSlide.title}
            </p>
          </div>

          {/* Prev arrow */}
          <button
            type="button"
            aria-label="Previous slide"
            onClick={heroPrev}
            className="absolute left-3 sm:left-8 lg:left-[90px] top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 bg-white/50 hover:bg-white/80 rounded-full transition-colors duration-200 shadow"
          >
            <img
              className="w-4 h-5 sm:w-[22px] sm:h-[30px]"
              alt=""
              src="https://c.animaapp.com/jPZwUw1S/img/vector.svg"
            />
          </button>

          {/* Next arrow */}
          <button
            type="button"
            aria-label="Next slide"
            onClick={heroNext}
            className="absolute right-3 sm:right-8 lg:right-[90px] top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 bg-white/50 hover:bg-white/80 rounded-full transition-colors duration-200 shadow"
          >
            <img
              className="w-4 h-5 sm:w-[22px] sm:h-[30px]"
              alt=""
              src="https://c.animaapp.com/jPZwUw1S/img/vector-1.svg"
            />
          </button>
        </div>

        {/* Welcome text + dots below image */}
        <div className="w-full text-center py-7 sm:py-10 px-4">
          <h1 className="[font-family:'Playfair_Display',Helvetica] font-normal text-[26px] sm:text-[38px] lg:text-[44px] tracking-[3px] leading-snug">
            <span className="text-[#636363]">Welcome to </span>
            <span className="text-[#c1b4a1]">Amie Woeppel </span>
            <span className="text-[#7faac4]">INTERIORS</span>
          </h1>
          <p className="mt-2 [font-family:'Playfair_Display',Helvetica] font-semibold text-[#636363] text-sm sm:text-lg tracking-[2px] leading-relaxed">
            Elevating Key West with Luxury Interior Design
          </p>

          {/* Dot indicators */}
          <div
            className="flex justify-center gap-2.5 mt-5"
            role="tablist"
            aria-label="Hero slide indicators"
          >
            {heroSlides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={i === heroIndex}
                aria-label={`Go to ${slide.title}`}
                onClick={() => setHeroIndex(i)}
                className={`rounded-full transition-all duration-300 ${i === heroIndex ? "w-6 h-2.5 bg-[#7faac4]" : "w-2.5 h-2.5 bg-[#c1b4a1] hover:bg-[#9a8d7f]"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Gallery ── */}
      <div id="hero-feature">
        <HeroFeatureSection />
      </div>

      {/* ── Designer Intro ── */}
      <section
        id="designer-intro"
        aria-label="Designer introduction"
        className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-16"
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Photo */}
          <div className="shrink-0 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] mx-auto lg:mx-0">
            <img
              className="w-full aspect-[0.77] object-cover rounded-xl shadow-lg"
              alt="Portrait of interior designer Amie Woeppel"
              src="https://c.animaapp.com/jPZwUw1S/img/amie-jpg-1.png"
            />
          </div>
          {/* Text */}
          <div className="flex-1">
            <p className="[font-family:'Playfair_Display',Helvetica] font-normal text-[#c1b4a1] text-sm tracking-[3px] uppercase mb-2">
              About Amie
            </p>
            <h2 className="[font-family:'Merriweather',Helvetica] font-light text-[#636363] text-2xl sm:text-[30px] leading-snug mb-6">
              Design your dream home with{" "}
              <span className="text-[#c1b4a1] font-normal">Amie Woeppel</span>
            </h2>
            <DesignerIntroSection />
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <div id="services">
        <ServicesOverviewSection />
      </div>

      {/* ── Contact ── */}
      <div id="contact">
        <ContactFormSection />
      </div>

      {/* ── Footer ── */}
      <footer
        aria-label="Footer"
        className="w-full bg-[#f9f7f4] border-t border-[#ece7e0] py-10 sm:py-12 px-4 sm:px-8 lg:px-16"
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 sm:gap-10">
          {/* Logo */}
          <img
            className="h-14 w-auto object-contain"
            alt="Amie Woeppel Interiors logo"
            src="https://c.animaapp.com/jPZwUw1S/img/headeramie-logo-jpg-1@2x.png"
          />

          {/* Social icons */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 flex items-center justify-center hover:opacity-60 transition-opacity duration-200"
              >
                <img
                  className="w-full h-full object-contain"
                  alt=""
                  src={link.src}
                />
              </a>
            ))}
          </div>

          {/* Partner logos */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {partnerLogos.map((logo) => (
              <img
                key={logo.id}
                className="w-20 h-20 sm:w-28 sm:h-28 lg:w-[140px] lg:h-[140px] object-cover rounded-full shadow-sm"
                alt=""
                src={logo.src}
              />
            ))}
          </div>

          <p className="[font-family:'Merriweather',Helvetica] font-light text-[#9a8d7f] text-xs sm:text-sm text-center">
            &copy; {new Date().getFullYear()} Amie Woeppel Interiors. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
