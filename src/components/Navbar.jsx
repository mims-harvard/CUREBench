import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-3 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="font-serif text-xl font-bold">
  <span className="text-crimson">CURE-Bench</span>
  <span className="ml-1 text-gray-600 text-sm font-sans">NeurIPS 2025</span>
</Link>
        <div className="space-x-6 text-sm">
          <Link to="/" className={pathname === "/" ? "text-blue-700 font-semibold" : "text-gray-700 hover:text-blue-800"}>Home</Link>
          <Link to="/faq" className={pathname === "/faq" ? "text-blue-700 font-semibold" : "text-gray-700 hover:text-blue-800"}>FAQ</Link>
          <Link to="/organizers" className={pathname === "/organizers" ? "text-blue-700 font-semibold" : "text-gray-700 hover:text-blue-800"}>Organizers</Link>
        </div>
      </div>
    </nav>
  );
}
