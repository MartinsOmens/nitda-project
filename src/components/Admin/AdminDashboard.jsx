import { Plus, Calendar, Users, LogOut } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function AdminDashboard() {
  
  const location = useLocation();
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white w-full py-6 px-6 md:px-20 flex flex-col md:flex-row items-start md:items-center justify-between shadow-sm border-b border-gray-200">
        <div className="flex flex-col items-start gap-1">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
            Admin Dashboard
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Manage events, attendance, and sub-admin requests
          </p>
        </div>

        <button className="mt-4 md:mt-0 bg-white px-5 py-2 text-gray-700 rounded-md border border-gray-300 shadow-sm flex items-center gap-2 hover:bg-[#7741C3] hover:text-white hover:shadow-sm transition-all duration-300">
          <LogOut className="w-5 h-5 transition-transform duration-300" />
          <span>Logout</span>
        </button>
      </header>

      <section className="py-10 flex items-center justify-center">
        <div className="w-full max-w-[1200px]  bg-[#7741C3] rounded- flex flex-wrap justify-center md:justify-between gap-4 px-6 py-4 transition-all duration-300 shadow-lg">
          <Link
            to="create-event"
            className="flex-1 min-w-[180px] bg-transparent px-8 py-2 rounded-full flex items-center justify-center gap-2 text-white font-medium hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <Plus className="w-5 h-5" />
            <span>Create Event</span>

           </Link>
          

          <Link
            to="manage-event"
            className="flex-1 min-w-[180px] bg-transparent px-8 py-2 rounded-full flex items-center justify-center gap-2 text-white font-medium hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <Plus className="w-5 h-5" />
            <span>Manage Events</span>
          </Link>

          <Link
            to="attendance"
            className="flex-1 min-w-[180px] bg-transparent px-8 py-2 rounded-full flex items-center justify-center gap-2 text-white font-medium hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <Plus className="w-5 h-5" />
            <span>Attendance</span>
          </Link>

          <Link
            to="manage-subAdmin"
            className="flex-1 min-w-[180px] bg-transparent px-8 py-2 rounded-full flex items-center justify-center gap-2 text-white font-medium hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <Plus className="w-5 h-5" />
            <span>Manage Sub-Admin R</span>
          </Link>
        </div>
      </section>
      <main className="w-full max-w-[1200px] mx-auto  bg-white rounded-xl shadow-md p-8 text-gray-700">
        <Outlet/>
      </main>
    </div>
  );
}
