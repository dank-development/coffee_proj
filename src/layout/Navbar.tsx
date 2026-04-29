import { useState, useEffect, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

type Link = {
  label: string;
  href: string;
};

type Props = {
  logo: ReactNode;
  links: Link[];
};

export const Navbar = ({ logo, links }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 h-20 top-0 py-5 ${isScrolled ? "glass-strong" : "bg-transparent"} transition duration-500 z-100`}
    >
      <nav className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        {/* <img
          src={logoSrc}
          alt="logo"
          className="h-full w-auto object-contain transition hover:scale-110 hover:opacity-70 rounded-md"
        /> */}
        {logo}

        {/* Desktop */}
        <>
          <div className="hidden md:flex items-center gap-1">
            <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
              {links.map(({ label, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="px-4 py-2 text-sm text-muted-foreground font-medium transition hover:text-foreground hover:translate-x-1 hover:bg-surface rounded-full"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden p-2 text-foreground transition hover:cursor-pointer hover:scale-110 hover:opacity-70"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile hamburger menu"
          >
            {isOpen ? (
              <X size={24} className="invert" />
            ) : (
              <Menu size={24} className="invert" />
            )}
          </button>
        </>
      </nav>

      {/* Mobile  */}
      {isOpen && (
        <div
          className={`md:hidden ${isScrolled ? "glass-strong" : "bg-transparent"} transition duration-500 animate-fade-in`}
        >
          <div className="container mx-auto mt-4 px-6 py-6 flex flex-col gap-4">
            {links.map(({ label, href }, index) => (
              <a
                key={index}
                href={href}
                className="text-lg text-muted-foreground font-medium hover:text-foreground px-4 py-2 transition hover:translate-x-1 hover:bg-surface rounded"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
