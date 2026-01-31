import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" style={{ display: "inline-flex", width: 18, height: 18, position: "relative" }}>
      <span
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: open ? 8 : 4,
          height: 2,
          borderRadius: 999,
          background: "rgba(255,255,255,0.85)",
          transform: open ? "rotate(45deg)" : "none",
          transition: "all 140ms ease",
        }}
      />
      <span
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 8,
          height: 2,
          borderRadius: 999,
          background: "rgba(255,255,255,0.85)",
          opacity: open ? 0 : 1,
          transition: "all 140ms ease",
        }}
      />
      <span
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: open ? 8 : 12,
          height: 2,
          borderRadius: 999,
          background: "rgba(255,255,255,0.85)",
          transform: open ? "rotate(-45deg)" : "none",
          transition: "all 140ms ease",
        }}
      />
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  // Close menu on route change
  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Simple responsive flag
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 820);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) => `nav-link ${isActive ? "active" : ""}`;

  const NavLinks = () => (
    <>
      <NavLink to="/" className={linkClass}>Home</NavLink>
      <NavLink to="/tools" className={linkClass}>Tools</NavLink>
      <NavLink to="/apps" className={linkClass}>Apps</NavLink>
      <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
      <NavLink to="/support" className={linkClass}>Support</NavLink>
      <NavLink to="/about" className={linkClass}>About</NavLink>
      <NavLink to="/privacy" className={linkClass}>Privacy Policy</NavLink>
      <NavLink to="/terms" className={linkClass}>Terms</NavLink>
    </>
  );

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        backdropFilter: "blur(10px)",
        background: "rgba(10,14,20,0.55)",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      <div
        className="container"
        style={{
          paddingTop: 12,
          paddingBottom: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 12,
              background: "linear-gradient(135deg, #1e5eff 0%, #00c2ff 45%, #ffd000 100%)",
              boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
              flex: "0 0 auto",
            }}
            aria-hidden="true"
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1, minWidth: 0 }}>
            <strong style={{ letterSpacing: -0.02, whiteSpace: "nowrap" }}>NextWave AI Suite</strong>
            <span className="small" style={{ whiteSpace: "nowrap" }}>Developer & App Support Hub</span>
          </div>
        </Link>

        {!isMobile ? (
          <nav style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }}>
            <NavLinks />
          </nav>
        ) : (
          <button
            type="button"
            className="btn"
            onClick={() => setOpen(v => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            style={{ height: 40, padding: "0 12px", borderRadius: 12 }}
          >
            <MenuIcon open={open} />
            <span style={{ marginLeft: 8 }}>{open ? "Close" : "Menu"}</span>
          </button>
        )}
      </div>

      {isMobile && open && (
        <div className="container" style={{ paddingBottom: 12 }}>
          <div className="mobile-menu">
            <div className="mobile-menu-grid">
              <NavLinks />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
