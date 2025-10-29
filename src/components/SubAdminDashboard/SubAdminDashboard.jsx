import { LogOut, Plus, Calendar, ClipboardCheck} from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router-dom";


// Reusable NavLink component

const NavLinkButton = ({ to, label, Icon }) => (
  <Link
    to={`/subadmin/${to}`}
    className="w-full flex items-center text-center gap-2 bg-transparent text-white px-5 py-1.5 rounded-full cursor-pointer hover:bg-white hover:text-black"
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </Link>
);

const LogoutButton = ({ onLogout }) => (
  <button
    className="flex items-center gap-2 text-white text-lg bg-[#7741C3] px-5 py-2  rounded-md"
    onClick={onLogout}
  >
    <LogOut className="w-4 h-4" />
    Logout
  </button>
);

export default function SubAdminDashboard() {

  const navigate = useNavigate();
  // Define the navigation links
  const navLinks = [
    { to: "sub-create-event", label: "Create Event", icon: Plus },
    { to: "sub-manage-event", label: "Manage Event", icon: Calendar },
    { to: "sub-attendance", label: "Take Attendance", icon: Calendar },
    
  ];

  const handleLogout = () => {
    // Your logout logic goes here
    console.log("Logged out");
    navigate("/log-in"); // redirects to login page
  };

  return (
    
    <div className="w-full mb-6">
   
      {/* Header Section */}
      <div className=" bg-white px-6 sm:px-12 py-5 mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 rounded-md shadow">

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700">
            Sub-Admin Dashboard
          </h2>
          <p className="text-sm text-gray-600">
            Manage events, attendance, and sub-admin requests
          </p>
        </div>

        {/* Logout Button */}
        <div className="mt-3 sm:mt-0 w-full sm:w-auto">
          <LogoutButton onLogout={handleLogout} />
        </div>

      </div>

      {/* Navigation Links */}
      <nav className="w-full max-w-[1200px] flex items-center mx-auto text-center bg-[#7741C3] my-10 px-5 py-2 md:rounded-full flex-wrap sm:flex-nowrap">
        {navLinks.map(({ to, label, icon: Icon }) => (
          <NavLinkButton key={to} to={to} label={label} Icon={Icon} />
        ))}
      </nav>

      {/* Main Content */}
      <main className="w-full max-w-[1200px] mx-auto bg-white rounded shadow px-7 py-6">
        <Outlet />
      </main>
    </div>
  );
}
