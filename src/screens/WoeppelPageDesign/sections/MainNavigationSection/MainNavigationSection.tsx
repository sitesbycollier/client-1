import { useState, useEffect } from "react";

const navItems = [
  { label: "HOME", href: "#" },
  { label: "PORTFOLIO", href: "#hero-feature" },
  { label: "ABOUT", href: "#designer-intro" },
  { label: "SERVICES", href: "#services" },
];

export const MainNavigationSection = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[#fefefe]/95 backdrop-blur-sm transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 h-[70px] sm:h-[80px] flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#"
          aria-label="Amie Woeppel Interiors — home"
          onClick={handleNavClick}
          className="shrink-0 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7faac4]"
        >
          <img
            className="h-[60px] sm:h-[70px] w-auto object-contain"
            alt="Amie Woeppel Interiors logo"
            src="https://c.animaapp.com/jPZwUw1S/img/headeramie-logo-jpg-1@2x.png"
          />
        </a>

        {/* Desktop nav links */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-1 lg:gap-2"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="[font-family:'Playfair_Display',Helvetica] font-normal text-[#4c4c4c] text-sm lg:text-[15px] tracking-[1.5px] leading-4 px-3 py-2 rounded hover:text-[#7faac4] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#7faac4]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 [font-family:'Playfair_Display',Helvetica] font-normal text-sm lg:text-[15px] tracking-[1px] text-white bg-[#c1b4a1] hover:bg-[#a8997f] px-4 py-2 rounded-full transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#7faac4]"
          >
            Contact Us
          </a>
        </nav>

        {/* Hamburger button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded gap-[5px] shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#7faac4]"
        >
          {/* Line 1 */}
          <span
            className={`block h-[2px] bg-[#4c4c4c] rounded-full transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"}`}
          />
          {/* Line 2 */}
          <span
            className={`block h-[2px] bg-[#4c4c4c] rounded-full transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-5"}`}
          />
          {/* Line 3 */}
          <span
            className={`block h-[2px] bg-[#4c4c4c] rounded-full transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"}`}
          />
        </button>
      </div>

      {/* Mobile slide-down drawer */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[400px] border-t border-[#ece7e0]" : "max-h-0"}`}
        aria-hidden={!menuOpen}
      >
        <nav
          aria-label="Mobile navigation"
          className="bg-[#fefefe] flex flex-col px-6 py-3"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
              className="[font-family:'Playfair_Display',Helvetica] font-normal text-[#4c4c4c] text-[15px] tracking-[1.5px] py-3.5 border-b border-[#f0ebe4] last:border-b-0 hover:text-[#7faac4] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-3 mb-2 [font-family:'Playfair_Display',Helvetica] font-normal text-[15px] tracking-[1px] text-center text-white bg-[#c1b4a1] hover:bg-[#a8997f] px-4 py-3 rounded-full transition-colors duration-200"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};
