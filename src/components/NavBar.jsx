import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const styles = {
    nav: {
      backgroundColor: "#ffffff",
      padding: "1rem",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#2c3e50",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      cursor: "pointer",
      transition: "color 0.3s ease",
    },
    logoHover: {
      color: "#3b82f6",
      textDecoration: "underline",
    },
    linkedinIcon: {
      fontSize: "1.2rem",
      color: "#0077b5",
    },
    links: {
      display: "flex",
      gap: "2rem",
      alignItems: "center",
    },
    link: {
      textDecoration: "none",
      color: "#64748b",
      fontSize: "1rem",
      fontWeight: "500",
      padding: "0.5rem 1rem",
      borderRadius: "0.375rem",
      transition: "all 0.2s ease",
    },
    activeLink: {
      color: "#3b82f6",
      backgroundColor: "#eff6ff",
    },
  };

  const links = [
    { path: "/", label: "Home" },
    { path: "/step-analysis", label: "Step Analysis" },
    { path: "/watch-time", label: "Watch Time" },
    { path: "/combined", label: "Combined" },
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <a
          href="https://www.linkedin.com/in/s%C4%B1la-yavuz-/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.logo}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = styles.logoHover.color;
            e.currentTarget.style.textDecoration =
              styles.logoHover.textDecoration;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = styles.logo.color;
            e.currentTarget.style.textDecoration = "none";
          }}
        >
          Step & TikTok Analysis by Sıla Yavuz
          <span style={styles.linkedinIcon}>🔗</span>
        </a>
        <div style={styles.links}>
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                ...styles.link,
                ...(location.pathname === link.path ? styles.activeLink : {}),
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
