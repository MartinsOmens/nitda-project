import { LogOut, Plus, Calendar, ClipboardCheck, UserPlus } from "lucide-react";

import { Link, Outlet, useNavigate } from "react-router-dom";

// Reusable NavLink component
const NavLinkButton = ({ to, label, Icon }) => (
  <Link
    to={`/admin/${to}`}
    className="flex items-center justify-center gap-2 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-white hover:text-black transition whitespace-nowrap text-sm sm:text-base"
  >
    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
    <span>{label}</span>
  </Link>
);

// Logout Button
const LogoutButton = ({ onLogout }) => (
  <button
    className="flex items-center gap-2 text-white text-sm sm:text-base bg-[#7741C3] px-4 sm:px-5 py-2 rounded-md hover:bg-[#5a2d8f] transition"
    onClick={onLogout}
  >
    <LogOut className="w-4 h-4" />
    Logout
  </button>
);

export default function AdminDashboard() {
  const navigate = useNavigate();

  const navLinks = [
    { to: "create-event", label: "Create Event", icon: Plus },
    { to: "manage-event", label: "Manage Event", icon: Calendar },
    { to: "attendance", label: "Attendance", icon: ClipboardCheck },
    { to: "manage-subadmin", label: "Manage SubAdmin", icon: UserPlus },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/log-in");
  };

  return (
    <div className="w-full pt-5 mb-5 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="max-w-[1200px] px-4 sm:px-6 lg:px-8 py-5 mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700">
            Admin Dashboard
          </h2>
          <p className="text-sm text-gray-600">
            Manage events, attendance and admin requests
          </p>
        </div>

        <div className="w-full sm:w-auto">
          <LogoutButton onLogout={handleLogout} />
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full max-w-[1200px] mx-auto bg-[#7741C3] my-6 px-4 py-3 rounded-xl sm:rounded-full flex md:justify-between gap-2 overflow-x-auto sm:overflow-visible sm:flex-wrap sm:justify-center">
        {navLinks.map(({ to, label, icon: Icon }) => (
          <NavLinkButton key={to} to={to} label={label} Icon={Icon} />
        ))}
      </nav>

      {/* Main Content */}
      <main className="w-full max-w-[1200px] mx-auto bg-white rounded shadow px-4 sm:px-7 py-5 sm:py-6">
        <Outlet />
      </main>
    </div>
  );
}
