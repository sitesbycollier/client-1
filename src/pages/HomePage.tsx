import { useState, useCallback, useEffect } from "react";
import { ContactFormSection } from "../sections/ContactFormSection";
import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";

const heroFiles = import.meta.glob(
  "/src/assets/hero/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    import: "default",
  }
);

const heroSlides = Object.entries(heroFiles)
  .map(([path, src]) => {
    const filename = path.split("/").pop() ?? "hero-image";

    const title = filename
      .replace(/\.[^/.]+$/, "")
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    return {
      id: filename.replace(/\.[^/.]+$/, ""),
      imageSrc: src as string,
      imageAlt: `${title} interior design project`,
      title,
    };
  })
  .sort((a, b) => a.id.localeCompare(b.id));

const HERO_ROTATION_MS = 5000;

export const HomePage = (): JSX.Element | null => {
  const [heroIndex, setHeroIndex] = useState(0);

  const goToSlide = useCallback((nextIndex: number) => {
    setHeroIndex(nextIndex);
  }, []);

  const heroPrev = useCallback(() => {
    setHeroIndex((index) => {
      return (index - 1 + heroSlides.length) % heroSlides.length;
    });
  }, []);

  const heroNext = useCallback(() => {
    setHeroIndex((index) => {
      return (index + 1) % heroSlides.length;
    });
  }, []);

  useEffect(() => {
    if (heroSlides.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setHeroIndex((index) => (index + 1) % heroSlides.length);
    }, HERO_ROTATION_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  if (heroSlides.length === 0) {
    return null;
  }

  const activeSlide = heroSlides[heroIndex];

  return (
    <div
      className="bg-[#fefefe] w-full overflow-x-hidden"
      data-model-id="485:133"
    >
      <Header />

      <section aria-label="Featured project slideshow" className="w-full">
        <div className="relative w-full">
          <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] lg:h-[620px] overflow-hidden bg-[#e8e0d5]">
            {heroSlides.map((slide, index) => (
              <img
                key={slide.id}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  index === heroIndex ? "opacity-100" : "opacity-0"
                }`}
                alt={slide.imageAlt}
                src={slide.imageSrc}
              />
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-6 right-5 sm:bottom-10 sm:right-10 lg:right-[120px]">
            <p className="[font-family:'Merriweather',Helvetica] font-light text-white text-base sm:text-2xl lg:text-[28px] leading-snug drop-shadow-md">
              {activeSlide.title}
            </p>
          </div>

          {heroSlides.length > 1 && (
            <>
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
            </>
          )}
        </div>

        <div className="w-full text-center py-7 sm:py-10 px-4">
          <h1 className="[font-family:'Playfair_Display',Helvetica] font-normal text-[26px] sm:text-[38px] lg:text-[44px] tracking-[3px] leading-snug">
            <span className="text-[#636363]">Welcome to </span>
            <span className="text-[#7faac4]">Amie Woeppel </span>
            <span className="text-[#7faac4]">INTERIORS</span>
          </h1>

          <p className="mt-2 [font-family:'Playfair_Display',Helvetica] font-semibold text-[#636363] text-sm sm:text-lg tracking-[2px] leading-relaxed">
            Elevating Key West with Luxury Interior Design
          </p>

          {heroSlides.length > 1 && (
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
                  onClick={() => goToSlide(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === heroIndex
                      ? "w-6 h-2.5 bg-[#7faac4]"
                      : "w-2.5 h-2.5 bg-[#c1b4a1] hover:bg-[#9a8d7f]"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <div id="contact">
        <ContactFormSection />
      </div>

      <Footer />
    </div>
  );
};