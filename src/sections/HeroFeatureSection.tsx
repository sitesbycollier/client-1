import { useState, useCallback, useMemo } from "react";
import { projects } from "../data/projects";

export const HeroFeatureSection = (): JSX.Element => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeProject = projects[activeProjectIndex];
  const activeImages = activeProject.images;
  const activeImage = activeImages[activeImageIndex];

  const prevImage = useCallback(() => {
    setActiveImageIndex((index) => {
      const imageCount = activeProject.images.length;
      return (index - 1 + imageCount) % imageCount;
    });
  }, [activeProject.images.length]);

  const nextImage = useCallback(() => {
    setActiveImageIndex((index) => {
      const imageCount = activeProject.images.length;
      return (index + 1) % imageCount;
    });
  }, [activeProject.images.length]);

  const otherProjectCards = useMemo(
    () =>
      projects
        .map((project, index) => ({
          ...project,
          projectIndex: index,
          coverImage: project.images[0],
        }))
        .filter((project) => project.projectIndex !== activeProjectIndex),
    [activeProjectIndex],
  );

  return (
    <section
      aria-labelledby="projects-heading"
      className="w-full bg-[#f9f7f4] py-10 sm:py-14 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto mb-8 sm:mb-10">
        <p className="[font-family:'Playfair_Display',Helvetica] font-normal text-[#c1b4a1] text-sm tracking-[3px] uppercase mb-2">
          Our Work
        </p>
        <h2
          id="projects-heading"
          className="[font-family:'Merriweather',Helvetica] font-light text-[#636363] text-2xl sm:text-[32px] leading-snug mb-3"
        >
          Explore Our <span className="font-normal">Projects</span>
        </h2>
        <p className="[font-family:'Merriweather',Helvetica] font-light text-[#636363] text-sm sm:text-base leading-relaxed max-w-3xl">
          Click a project below, then use the large image arrows to browse that
          project gallery.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-5">
        <div className="relative w-full group/featured rounded-xl overflow-hidden shadow-xl">
          <div className="w-full aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden bg-[#e8e0d5]">
            <img
              key={activeImage.src}
              src={activeImage.src}
              alt={activeImage.alt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-4 left-5 sm:bottom-6 sm:left-8">
            <p className="[font-family:'Playfair_Display',Helvetica] font-normal text-[#c1b4a1] text-xs sm:text-sm tracking-[2px] uppercase mb-1">
              {activeProject.subtitle}
            </p>
            <h3 className="[font-family:'Merriweather',Helvetica] font-light text-white text-xl sm:text-2xl lg:text-[30px] leading-snug drop-shadow-md">
              {activeProject.title}
            </h3>
          </div>

          <button
            type="button"
            aria-label="Previous image"
            onClick={prevImage}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/60 hover:bg-white/90 shadow-md transition-all duration-200 opacity-0 group-hover/featured:opacity-100 focus:opacity-100"
          >
            <img
              src="https://c.animaapp.com/jPZwUw1S/img/vector.svg"
              alt=""
              aria-hidden="true"
              className="w-4 h-5"
            />
          </button>

          <button
            type="button"
            aria-label="Next image"
            onClick={nextImage}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/60 hover:bg-white/90 shadow-md transition-all duration-200 opacity-0 group-hover/featured:opacity-100 focus:opacity-100"
          >
            <img
              src="https://c.animaapp.com/jPZwUw1S/img/vector-1.svg"
              alt=""
              aria-hidden="true"
              className="w-4 h-5"
            />
          </button>
        </div>

        <div className="pt-1">
          <p className="[font-family:'Playfair_Display',Helvetica] font-normal text-[#c1b4a1] text-xs sm:text-sm tracking-[2px] uppercase mb-3">
            Other Projects
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {otherProjectCards.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => {
                  setActiveProjectIndex(project.projectIndex);
                  setActiveImageIndex(0);
                }}
                aria-label={`Select ${project.title}`}
                className="relative overflow-hidden rounded-xl shadow-sm border border-[#e3dbd0] transition-all duration-200 hover:border-[#7faac4] hover:ring-2 hover:ring-[#7faac4]/20"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#e8e0d5]">
                  <img
                    src={project.coverImage.src}
                    alt={project.coverImage.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-left">
                  <p className="[font-family:'Merriweather',Helvetica] font-light text-white text-sm sm:text-base leading-snug">
                    {project.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div
          className="flex justify-center gap-2.5 pt-2"
          role="tablist"
          aria-label="Image indicators"
        >
          {activeImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              role="tab"
              aria-selected={index === activeImageIndex}
              aria-label={`Go to image ${index + 1}`}
              onClick={() => setActiveImageIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                index === activeImageIndex
                  ? "w-6 h-2.5 bg-[#7faac4]"
                  : "w-2.5 h-2.5 bg-[#c1b4a1] hover:bg-[#9a8d7f]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
