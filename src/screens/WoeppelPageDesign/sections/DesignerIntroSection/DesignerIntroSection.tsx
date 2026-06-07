const introSegments = [
  {
    text: "With more than ",
    className: "font-light text-black tracking-[0.06px]",
  },
  {
    text: "10 years of design experience",
    className: "text-[#7faac4] tracking-[0.06px]",
  },
  { text: ", ", className: "font-light text-black tracking-[0.06px]" },
  { text: "Amie", className: "text-[#c1b4a1] tracking-[0.06px]" },
  {
    text: " brings creativity and a sharp eye for detail to every space she transforms. With an ",
    className: "font-light text-black tracking-[0.06px]",
  },
  {
    text: "AAS in Business Administration and a Certificate in Architectural Interior Design from New York Institute of Art + Design",
    className: "text-black tracking-[0.06px]",
  },
  {
    text: ", she turned her passion into ",
    className: "font-light text-black tracking-[0.06px]",
  },
  { text: "Amie Woeppel", className: "text-[#c1b4a1] tracking-[0.06px]" },
  { text: "\u00A0", className: "font-light text-black tracking-[0.06px]" },
  { text: "Interiors.", className: "text-[#7faac4] tracking-[0.06px]" },
  {
    text: " Blending sophistication and function, ",
    className: "font-light text-black tracking-[0.06px]",
  },
  {
    text: "every project is designed to reflect each client\u2019s lifestyle and story.",
    className: "italic text-[#7faac4] tracking-[0.06px]",
  },
];

export const DesignerIntroSection = (): JSX.Element => {
  return (
    <section aria-label="Designer introduction">
      <p className="[font-family:'Merriweather',Helvetica] font-normal text-base sm:text-lg text-left tracking-[0.36px] leading-[1.8] sm:leading-[45px]">
        {introSegments.slice(0, 11).map((segment, index) => (
          <span key={`${segment.text}-${index}`} className={segment.className}>
            {segment.text}
          </span>
        ))}
        <br />
        <span className={introSegments[11].className}>
          {introSegments[11].text}
        </span>
      </p>
    </section>
  );
};
