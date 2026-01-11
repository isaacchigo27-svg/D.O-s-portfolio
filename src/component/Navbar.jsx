import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="navbar">
        <a href="#hero" className="logo">Divine Tech</a>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* TOP OVERLAY MENU */}
      <div className={`mobile-dropdown ${open ? "open" : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
