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

export const Footer = (): JSX.Element => {
  return (
    <footer
      aria-label="Footer"
      className="w-full bg-[#f9f7f4] border-t border-[#ece7e0] py-10 sm:py-12 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 sm:gap-10">
        <img
          className="h-14 w-auto object-contain"
          alt="Amie Woeppel Interiors logo"
          src="https://c.animaapp.com/jPZwUw1S/img/headeramie-logo-jpg-1@2x.png"
        />

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
          © {new Date().getFullYear()} Amie Woeppel Interiors. All rights
          reserved. <br></br> Design by{" "}
          <a
            href="https://sitesbycollier.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            Sites By Collier
          </a>
        </p>
      </div>
    </footer>
  );
};
