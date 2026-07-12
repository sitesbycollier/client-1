import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "HOME", to: "/" },
  { label: "PORTFOLIO", to: "/projects" },
  { label: "ABOUT", to: "/about" },
  { label: "SERVICES", to: "/#services" },
];

export const MainNavigationSection = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  const handleHashNavigation = (hash: string) => {
    const scrollToTarget = () => {
      const targetId = hash.replace("#", "");
      const target = document.getElementById(targetId);

      if (!target) return;

      const headerOffset = 90;
      const top =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });

      if (window.location.hash !== hash) {
        window.history.replaceState(null, "", hash);
      }

      setMenuOpen(false);
    };

    if (location.pathname !== "/") {
      navigate(`/${hash}`);
      setTimeout(scrollToTarget, 100);
      return;
    }

    scrollToTarget();
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[#fefefe]/95 backdrop-blur-sm transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 h-[70px] sm:h-[80px] flex items-center justify-between gap-4">
        <Link
          to="/"
          aria-label="Amie Woeppel Interiors — home"
          onClick={handleNavClick}
          className="shrink-0 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7faac4]"
        >
          <img
            className="h-[60px] sm:h-[70px] w-auto object-contain"
            alt="Amie Woeppel Interiors logo"
            src="https://c.animaapp.com/jPZwUw1S/img/headeramie-logo-jpg-1@2x.png"
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-1 lg:gap-2"
        >
          {navItems.map((item) => {
            const isHashLink = item.to.startsWith("/#");
            const hash = isHashLink ? item.to.replace("/", "") : "";
            return isHashLink ? (
              <button
                key={item.label}
                type="button"
                onClick={() => handleHashNavigation(hash)}
                className="[font-family:'Playfair_Display',Helvetica] font-normal text-[#4c4c4c] text-sm lg:text-[15px] tracking-[1.5px] leading-4 px-3 py-2 rounded hover:text-[#7faac4] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#7faac4]"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className="[font-family:'Playfair_Display',Helvetica] font-normal text-[#4c4c4c] text-sm lg:text-[15px] tracking-[1.5px] leading-4 px-3 py-2 rounded hover:text-[#7faac4] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#7faac4]"
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="ml-3 [font-family:'Playfair_Display',Helvetica] font-normal text-sm lg:text-[15px] tracking-[1px] text-white bg-[#c1b4a1] hover:bg-[#a8997f] px-4 py-2 rounded-full transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#7faac4]"
          >
            Contact Us
          </Link>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded gap-[5px] shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#7faac4]"
        >
          <span
            className={`block h-[2px] bg-[#4c4c4c] rounded-full transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"}`}
          />
          <span
            className={`block h-[2px] bg-[#4c4c4c] rounded-full transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-5"}`}
          />
          <span
            className={`block h-[2px] bg-[#4c4c4c] rounded-full transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"}`}
          />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[400px] border-t border-[#ece7e0]" : "max-h-0"}`}
        aria-hidden={!menuOpen}
      >
        <nav
          aria-label="Mobile navigation"
          className="bg-[#fefefe] flex flex-col px-6 py-3"
        >
          {navItems.map((item) => {
            const isHashLink = item.to.startsWith("/#");
            const hash = isHashLink ? item.to.replace("/", "") : "";
            return isHashLink ? (
              <button
                key={item.label}
                type="button"
                onClick={() => handleHashNavigation(hash)}
                className="text-left [font-family:'Playfair_Display',Helvetica] font-normal text-[#4c4c4c] text-[15px] tracking-[1.5px] py-3.5 border-b border-[#f0ebe4] last:border-b-0 hover:text-[#7faac4] transition-colors duration-200"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                onClick={handleNavClick}
                className="[font-family:'Playfair_Display',Helvetica] font-normal text-[#4c4c4c] text-[15px] tracking-[1.5px] py-3.5 border-b border-[#f0ebe4] last:border-b-0 hover:text-[#7faac4] transition-colors duration-200"
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="mt-3 mb-2 [font-family:'Playfair_Display',Helvetica] font-normal text-[15px] tracking-[1px] text-center text-white bg-[#c1b4a1] hover:bg-[#a8997f] px-4 py-3 rounded-full transition-colors duration-200"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};
