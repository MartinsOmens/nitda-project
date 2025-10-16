import { assets } from "../assets/assets";
import NavBar from "./NavBar";

export default function MyLogs() {
  return (
    <>
      {/* Fixed Navbar */}
      <NavBar />

      {/* Fullscreen Centered Layout */}
      <div className="min-h-screen bg-gradient-to-br from-[#f6f0f3] to-[#e0e0e0] flex items-center justify-center px-4 pt-24 overflow-hidden">
        <div className="relative bg-white w-full max-w-md sm:max-w-lg md:max-w-md lg:max-w-lg rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 overflow-hidden">
          {/* Decorative gradient blob */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#7F265B]/20 rounded-full blur-3xl" />

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={assets.logo} alt="logo" className="w-12 sm:w-16" />
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#3d3d3d]">
              Login to your Account
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              See what’s going on with your business
            </p>
          </div>

          {/* Google Login Button */}
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 px-4 sm:px-5 py-2.5 rounded-lg bg-white hover:bg-[#7741C3] hover:text-white transition-colors duration-300 shadow-sm text-sm sm:text-base">
            <img src={assets.goggle_icon} alt="Google" className="w-4 sm:w-5 h-4 sm:h-5" />
            <span className="font-medium">Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="text-gray-400 text-xs sm:text-sm mx-3">
              or sign in with email
            </span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Login Form */}
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="mail@abc.com"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-[#7741C3] focus:outline-none transition text-sm sm:text-base"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-[#7741C3] focus:outline-none transition text-sm sm:text-base"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 text-sm">
              <label className="flex items-center gap-2 text-gray-500">
                <input type="checkbox" className="accent-[#7741C3] w-4 h-4" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-[#7741C3] font-medium hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-[#7741C3] text-white py-2.5 rounded-md font-semibold hover:bg-[#5e2c8c] transition-all shadow-md text-sm sm:text-base"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Not registered yet?{" "}
            <a href="#" className="text-[#7741C3] font-semibold hover:underline">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

