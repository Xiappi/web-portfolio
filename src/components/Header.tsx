import { NavLink } from "react-router";

export default function Header() {
  const baseStyle = "px-3 py-1 rounded-full transition font-medium";
  const inactive = "text-gray-700 hover:text-blue-500";
  const active = "text-white bg-blue-500 shadow-md";

  return (
    <nav
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        bg-white/80 backdrop-blur-md shadow-lg
        rounded-full px-6 py-3 z-50
        flex items-center gap-6
      "
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? active : inactive}`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? active : inactive}`
        }
      >
        About
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? active : inactive}`
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? active : inactive}`
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}
