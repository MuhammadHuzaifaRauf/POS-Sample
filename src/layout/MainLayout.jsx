import React from "react";
import { Link } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <a className="navbar-brand color-secondary fw-semibold" href="/">
            Techloset Solutions
          </a>
        </div>
      </nav>
      <main>
        <div className="container mt-3">{children}</div>
      </main>
    </>
  );
}
