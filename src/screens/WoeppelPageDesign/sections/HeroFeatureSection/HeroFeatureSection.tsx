import { useState, useCallback } from "react";

const projects = [
  {
    title: "Stump Lane",
    subtitle: "Key West, FL — Coastal Kitchen Renovation",
    imageAlt: "Stump Lane project — bright coastal kitchen interior",
    imageSrc: "https://c.animaapp.com/jPZwUw1S/img/aime-cover-5@2x.png",
  },
  {
    title: "Mount Riante",
    subtitle: "Key West, FL — Elegant Living Space",
    imageAlt: "Mount Riante project — elegant open living area",
    imageSrc: "https://c.animaapp.com/jPZwUw1S/img/cov5-1@2x.png",
  },
  {
    title: "The LaCala",
    subtitle: "Key West, FL — Coastal Bedroom Retreat",
    imageAlt: "The LaCala project — serene coastal bedroom",
    imageSrc: "https://c.animaapp.com/jPZwUw1S/img/aime-pic-2@2x.png",
  },
];

export const HeroFeatureSection = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + projects.length) % projects.length);
  }, []);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % projects.length);
  }, []);

  const activeProject = projects[activeIndex];
  const thumbnails = projects
    .map((p, i) => ({ ...p, realIndex: i }))
    .filter((_, i) => i !== activeIndex);

  return (
    <section
      aria-labelledby="projects-heading"
      className="w-full bg-[#f9f7f4] py-10 sm:py-14 px-4 sm:px-8 lg:px-16"
    >
      {/* Section header */}
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
        <p className="[font-family:'Merriweather',Helvetica] font-light text-[#636363] text-sm sm:text-base leading-relaxed max-w-2xl">
          A selection of recent projects crafted with care — designed to tell a
          story of creativity, collaboration, and results.
        </p>
      </div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto flex flex-col gap-4">
        {/* ── Featured image ── */}
        <div className="relative w-full group/featured rounded-xl overflow-hidden shadow-xl">
          {/* Image */}
          <div className="w-full aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden bg-[#e8e0d5]">
            <img
              key={activeProject.imageSrc}
              src={activeProject.imageSrc}
              alt={activeProject.imageAlt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Title overlay */}
          <div className="absolute bottom-4 left-5 sm:bottom-6 sm:left-8">
            <p className="[font-family:'Playfair_Display',Helvetica] font-normal text-[#c1b4a1] text-xs sm:text-sm tracking-[2px] uppercase mb-1">
              {activeProject.subtitle}
            </p>
            <h3 className="[font-family:'Merriweather',Helvetica] font-light text-white text-xl sm:text-2xl lg:text-[30px] leading-snug drop-shadow-md">
              {activeProject.title}
            </h3>
          </div>

          {/* Prev arrow */}
          <button
            type="button"
            aria-label="Previous project"
            onClick={prev}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/60 hover:bg-white/90 shadow-md transition-all duration-200 opacity-0 group-hover/featured:opacity-100 focus:opacity-100"
          >
            <img
              src="https://c.animaapp.com/jPZwUw1S/img/vector.svg"
              alt=""
              aria-hidden="true"
              className="w-4 h-5"
            />
          </button>

          {/* Next arrow */}
          <button
            type="button"
            aria-label="Next project"
            onClick={next}
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

        {/* ── Thumbnail row ── */}
        <div className="flex flex-row gap-3 sm:gap-4">
          {thumbnails.map((project) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setActiveIndex(project.realIndex)}
              aria-label={`View ${project.title}`}
              className="relative flex-1 overflow-hidden rounded-lg sm:rounded-xl shadow-md group/thumb focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7faac4] focus-visible:ring-offset-2 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="aspect-[3/2] w-full overflow-hidden bg-[#e8e0d5]">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                />
              </div>

              {/* Hover/always-on overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

              {/* Click-to-expand hint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200">
                <span className="bg-white/80 text-[#636363] [font-family:'Merriweather',Helvetica] text-xs font-normal px-3 py-1.5 rounded-full shadow">
                  View project
                </span>
              </div>

              {/* Project name */}
              <div className="absolute bottom-0 left-0 right-0 px-3 py-2 sm:px-4 sm:py-3">
                <p className="[font-family:'Merriweather',Helvetica] font-light text-white text-xs sm:text-sm leading-snug truncate">
                  {project.title}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* ── Dot indicators ── */}
        <div
          className="flex justify-center gap-2.5 pt-2"
          role="tablist"
          aria-label="Project indicators"
        >
          {projects.map((project, i) => (
            <button
              key={project.title}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to ${project.title}`}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
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
