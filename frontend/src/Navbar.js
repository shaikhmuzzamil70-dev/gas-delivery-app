import { useState } from "react";

function Navbar({ setFilter }) {
  const [open, setOpen] = useState(false);

  const handleClick = (value) => {
    setFilter(value);
    setOpen(false); // close menu after click
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <h2 className="logo">🏠 Hayat Real Estate</h2>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* MENU */}
      <div className={`nav-links ${open ? "active" : ""}`}>

        <ul className="menu">

          <li>
            <button onClick={() => handleClick("all")}>🏠 Home</button>
          </li>

          <li>
            <button onClick={() => handleClick("flat")}>🏢 Flat</button>
          </li>

          <li>
            <button onClick={() => handleClick("commercial")}>🏬 Commercial</button>
          </li>

          <li>
            <button onClick={() => handleClick("plot")}>📍 Open Plot</button>
          </li>

          <li>
            <button onClick={() => handleClick("industrial")}>🏭 Industrial</button>
          </li>

          <li>
            <a
              className="whatsapp"
              href="https://wa.me/917666620238"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              💬 WhatsApp
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;