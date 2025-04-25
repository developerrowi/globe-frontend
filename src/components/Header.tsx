// src/components/Header.tsx

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore"; // adjust path if needed

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isAuthRoute = location.pathname === "/login" || location.pathname === "/signup";
  const clearToken = useAuthStore((state) => state.clearToken);

  const handleLogout = () => {
    clearToken();
    setDropdownOpen(false);
    setMenuOpen(false);
    navigate("/login");
  };

  if (isAuthRoute) return null;

  return (
    <nav className="bg-blue-900 text-white px-4 py-3">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">Globe Assessment</Link>

        {/* Burger icon */}
        <button
          className="md:hidden block focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/products" className="hover:text-gray-300">Products</Link>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-gray-300 focus:outline-none"
            >
              Account
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg z-50">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-blue-100"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-2">
          <Link to="/products" className="hover:text-gray-300">Products</Link>
          <button
            onClick={handleLogout}
            className="text-left hover:text-gray-300"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
