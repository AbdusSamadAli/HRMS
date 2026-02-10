import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    location.pathname === path
      ? "text-white font-semibold"
      : "text-white/80 hover:text-white";

  return (
    <nav className="bg-blue-600 px-6 py-4 flex gap-6">
      <Link to="/employees" className={linkClass("/employees")}>
        Employees
      </Link>
      <Link to="/attendance" className={linkClass("/attendance")}>
        Attendance
      </Link>
    </nav>
  );
}
