const services = [
  {
    title: "Full-Service Interior Design",
    description:
      "From space planning, finishes to furnishings, lighting, and custom details, Amie Woeppel creates a cohesive design tailored to the way you live. Whether it is your primary residence or vacation retreat, our Full-Service Interior Design experience takes your project from first ideas to final styling, guiding the process and delivering a space that feels personal and effortlessly livable.",
    iconSrc: "https://c.animaapp.com/jPZwUw1S/img/home.svg",
    iconAlt: "",
  },
  {
    title: "Discovery Call",
    description:
      "A discovery call helps us understand your needs, preferences, and project scope before the design process begins.",
    details: [
      "Introduction",
      "Client vision and goals",
      "Project scope",
      "Style preferences",
      "Budget and timeline",
      "Existing conditions",
      "Client lifestyle",
      "Next steps",
    ],
    iconSrc: "https://c.animaapp.com/jPZwUw1S/img/home.svg",
    iconAlt: "",
  },
  {
    title: "New Build & Renovations",
    description:
      "Designing a home from the ground up or reimagining an existing one requires both creative vision and technical precision. Our team will guide you through every phase of the process, ensuring your home is functional and tailored to the way you live. We collaborate closely with architects and builders to ensure every decision is approached holistically to create a seamless final result.",
    iconSrc: "https://c.animaapp.com/jPZwUw1S/img/layers.svg",
    iconAlt: "",
  },
  {
    title: "Site Visit + Consultation",
    description:
      "A paid consultation provides a more in-depth design conversation tailored to your project, your home, and the decisions ahead.",
    details: [
      "Detailed client interview",
      "Site assessment",
      "Design analysis",
      "Style and inspiration",
      "Budget and timeline planning",
      "Action plan",
      "Q&A session",
    ],
    iconSrc: "https://c.animaapp.com/jPZwUw1S/img/layers.svg",
    iconAlt: "",
  },
];

export const ServicesOverviewSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="services-heading"
      className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <p className="[font-family:'Playfair_Display',Helvetica] font-normal text-[#c1b4a1] text-sm tracking-[3px] uppercase mb-2 text-center">
          What We Offer
        </p>
        <h2
          id="services-heading"
          className="[font-family:'Merriweather',Helvetica] font-light text-[#636363] text-2xl sm:text-[32px] leading-snug mb-10 text-center"
        >
          Explore Our <span className="font-normal">Services</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col gap-5 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#f0ebe4]"
            >
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#f3f9f8] rounded-xl">
                  <img
                    className="w-7 h-7 sm:w-8 sm:h-8"
                    alt={service.iconAlt}
                    aria-hidden="true"
                    src={service.iconSrc}
                  />
                </div>
                <h3 className="[font-family:'Merriweather',Helvetica] font-normal text-[#636363] text-lg sm:text-xl lg:text-[22px] leading-snug">
                  {service.title}
                </h3>
              </div>
              <p className="[font-family:'Merriweather',Helvetica] font-light text-[#4c4c4c] text-sm sm:text-base leading-[1.85]">
                {service.description}
              </p>
              {"details" in service && service.details ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="[font-family:'Merriweather',Helvetica] font-light text-[#4c4c4c] text-sm leading-relaxed flex gap-2"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7faac4]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
