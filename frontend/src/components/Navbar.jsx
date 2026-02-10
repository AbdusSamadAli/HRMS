import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 px-6 py-4 flex gap-6">
      <Link to="/" className="text-white hover:text-white/80">
        Home
      </Link>
      <Link to="/employees" className="text-white hover:text-white/80">
        Employees
      </Link>
      <Link to="/attendance" className="text-white hover:text-white/80">
        Attendance
      </Link>
    </nav>
  );
}