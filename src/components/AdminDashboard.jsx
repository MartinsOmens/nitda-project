import { LogOut } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
export default function AdminDashboard() {
  return (
    <div className="w-full h-screen">
      <div className="bg-white px-10 py-5 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold text-gray-700">
            Admin Dashboard
          </h2>
          <p className="text-sm">
            Manage events, attendance, and sub-admin requests
          </p>
        </div>

        <button className="flex items-center gap-2 text-white bg-[#7741C3] px-5 py-2 rounded-md">
          <LogOut />
          <p className="text-lg">Logout</p>
        </button>
      </div>

      {/* --------LINKS TO EVENTS */}

      <nav className="w-full max-w-[1200px] flex items-center justify-between mx-auto bg-[#7741C3] my-10 px-12 py-3 rounded-full">
        <Link
          to="create-event"
          className="bg-transparent px-5 py-1.5 rounded-full cursor-pointer hover:bg-white"
        >
          Create Event
        </Link>

        <Link
          to="manage-event"
          className="bg-transparent px-5 py-1.5 rounded-full cursor-pointer hover:bg-white"
        >
          Manage Event
        </Link>

        <Link
          to="attendance"
          className="bg-transparent px-5 py-1.5 rounded-full cursor-pointer hover:bg-white"
        >
          Attendance
        </Link>

        <Link
          to="manage-subadmin"
          className="bg-transparent px-5 py-1.5 rounded-full cursor-pointer hover:bg-white"
        >
          Manage-SubAdmin
        </Link>
      </nav>

      <main className="w-full max-w-[1200px] mx-auto bg-white rounded shadow px-12 py-6">
        <Outlet />
      </main>
    </div>
  );
}
