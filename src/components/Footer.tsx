import { mdiCopyright } from "@mdi/js";
import Icon from "@mdi/react";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <nav className="flex gap-8 text-gray-600 text-sm mb-4 md:mb-0">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <Icon path={mdiCopyright} size={0.75} />
          <p>2025 Adam Mattatall. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
