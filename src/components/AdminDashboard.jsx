import { LogOut, Plus, Calendar, ClipboardCheck, UserPlus} from "lucide-react";
import { Link, Outlet } from "react-router-dom";

// Reusable NavLink component

const NavLinkButton = ({ to, label, Icon }) => (
  <Link
    to={to}
    className="w-full flex items-center text-center gap-2 bg-transparent text-white px-5 py-1.5 rounded-full cursor-pointer hover:bg-white hover:text-black"
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </Link>
);


const LogoutButton = ({ onLogout }) => (
  <button
    className="flex items-center gap-2 text-white bg-[#7741C3] px-5 py-2 rounded-md"
    onClick={onLogout}
  >
    <LogOut className="w-5 h-5" />
    <p className="text-lg">Logout</p>
  </button>
);

export default function AdminDashboard() {
  // Define the navigation links
  const navLinks = [
    { to: "create-event", label: "Create Event", icon: Plus },
    { to: "manage-event", label: "Manage Event", icon: Calendar },
    { to: "attendance", label: "Attendance", icon: ClipboardCheck },
    { to: "manage-subadmin", label: "Manage SubAdmin", icon: UserPlus },
  ];

  const handleLogout = () => {
    // Your logout logic goes here
    console.log("Logged out");
  };

  return (
    <div className="w-full mb-6">

      {/* Header Section */}
      <div className=" bg-white px-12 py-5 mx-auto flex items-center justify-between flex-wrap sm:flex-nowrap">

        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold text-gray-700 ">
            Admin Dashboard
          </h2>
          <p className="text-sm">
            Manage events, attendance, and sub-admin requests
          </p>
        </div>

        {/* Logout Button */}
        <LogoutButton onLogout={handleLogout} />
      </div>

      {/* Navigation Links */}
      <nav className="w-full max-w-[1200px] flex items-center mx-auto text-center bg-[#7741C3] my-10 px-5 py-2 rounded-full flex-wrap sm:flex-nowrap">
        {navLinks.map(({ to, label, icon: Icon }) => (
          <NavLinkButton key={to} to={to} label={label} Icon = {Icon}/>
        ))}
      </nav>

      {/* Main Content */}
      <main className="w-full max-w-[1200px] mx-auto bg-white rounded shadow px-7 py-6">
        <Outlet />
      </main>
    </div>
  );
}
