import { useState } from "react";
import { assets } from "../assets/assets";
import NavBar from "./NavBar";

export default function AdminLogIn() {
  const [role, setRole] = useState("admin");

  return (
    <>
      {/* Fixed Navbar */}
      <NavBar />

      {/* Fullscreen Container */}
      <div className="h-screen bg-[#F9FAFB] flex items-center justify-center px-4 overflow-hidden">
        <div className="flex flex-col gap-5 w-full max-w-md sm:max-w-lg md:max-w-md">
          {/* Back Navigation */}
          <button className="flex items-center gap-2  duration-300 group">
            <img
              src={assets.arrow_left}
              alt="Back"
              className="w-6 transition-transform duration-300 group-hover:-translate-x-1"
            />
            <p className="text-gray-700 text-lg font-medium transition-colors duration-300 group-hover:text-black">
              Back to Events
            </p>
          </button>

          {/* Login Card */}
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-300 shadow-lg">
            {/* Header */}
            <div className="text-center mb-4">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">Login</h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Sign in to access the {role === "admin" ? "Admin" : "Sub-Admin"}{" "}
                dashboard
              </p>
            </div>

            {/* Role Selector */}
            <div className="w-full flex items-center justify-between gap-3 sm:gap-8 rounded-full px-2 sm:px-3 py-1.5 bg-gray-200 mt-5">
              <div
                onClick={() => setRole("admin")}
                className={`flex items-center gap-2 px-4 sm:px-6 py-1.5 rounded-full cursor-pointer transition ${
                  role === "admin"
                    ? "bg-white text-black shadow"
                    : "bg-transparent text-gray-700"
                }`}
              >
                <img src={assets.admin} alt="Admin" className="w-5" />
                <p className="text-sm sm:text-base">Admin</p>
              </div>

              <div
                onClick={() => setRole("sub-admin")}
                className={`flex items-center gap-2 px-4 sm:px-6 py-1.5 rounded-full cursor-pointer transition ${
                  role === "sub-admin"
                    ? "bg-white text-black shadow"
                    : "bg-transparent text-gray-700"
                }`}
              >
                <img src={assets.sub_admin} alt="Sub-Admin" className="w-5" />
                <p className="text-sm sm:text-base">Sub-Admin</p>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-5 mt-8">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="admin@nihub.com"
                  className="w-full text-gray-700 border border-gray-300 px-3 py-2 rounded-md bg-white focus:ring-2 focus:ring-[#7741C3] focus:outline-none transition"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full text-gray-700 border border-gray-300 px-3 py-2 rounded-md bg-white focus:ring-2 focus:ring-[#7741C3] focus:outline-none transition"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#7741C3] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#4c0ba5] transition"
              >
                Login as {role === "admin" ? "Admin" : "Sub-Admin"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
