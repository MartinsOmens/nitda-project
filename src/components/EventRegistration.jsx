import { assets } from "../assets/assets";
import NavBar from "./NavBar";

export default function EventRegistration() {
  return (
    <>
      <NavBar />
      <div className="h-screen bg-[#F9FAFB] flex items-center justify-center overflow-hidden">
        <div className="flex flex-col gap-5 items-start">
        {/* Back Navigation */}
         <button className="flex items-center gap-2 duration-300 group">
          <img
            src={assets.arrow_left}
            alt="Back"
            className="w-6 transition-transform duration-300 group-hover:-translate-x-1"
          />
          <p className="text-gray-700 text-lg font-medium transition-colors duration-300 group-hover:text-black">
            Back to Events
          </p>
          </button>


          {/* Registration Card */}
          <div className="bg-white p-8 border border-gray-300 rounded-lg w-[700px] max-h-[70vh] shadow-2xl overflow-y-auto">
            <h2 className="font-semibold mb-2 text-lg">Event Registration</h2>
            <p className="text-gray-600 text-sm">
              Please fill in your details to register for this event
            </p>

            <form action="" method="get" className="space-y-5 mt-10">

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  className="w-full text-gray-700 border border-gray-300 px-3 py-2 rounded-md bg-white focus:ring-2 focus:ring-[#7741C3] focus:outline-none transition"
                />
              </div>

              {/* Matric Number */}
              <div>
                <label htmlFor="matricNumber" className="block font-medium mb-2">Matric Number</label>
                <input
                  type="text"
                  id="matricNumber"
                  placeholder="Enter your matric number"
                  className="w-full text-gray-700 border border-gray-300 px-3 py-2 rounded-md bg-white focus:ring-2 focus:ring-[#7741C3] focus:outline-none transition"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full text-gray-700 border border-gray-300 px-3 py-2 rounded-md bg-white focus:ring-2 focus:ring-[#7741C3] focus:outline-none transition"
                />
              </div>

              {/* Department */}
              <div>
                <label htmlFor="department" className="block font-medium mb-2">Department</label>
                <input
                  type="text"
                  id="department"
                  placeholder="Enter your department"
                  className="w-full text-gray-700 border border-gray-300 px-3 py-2 rounded-md bg-white focus:ring-2 focus:ring-[#7741C3] focus:outline-none transition"
                />
              </div>

              {/* Gender Dropdown */}
              <div>
                <label htmlFor="gender" className="block font-medium mb-2">Gender</label>
                <select
                  id="gender"
                  className="w-full text-gray-700 border border-gray-300 px-3 py-2 rounded-md bg-white focus:ring-2 focus:ring-[#7741C3] focus:outline-none transition appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Track */}
              <div>
                <label htmlFor="track" className="block font-medium mb-2">Track</label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    id="track"
                    placeholder="Select Track"
                    className="w-full text-gray-700 border border-gray-300 px-3 py-2 rounded-md bg-white focus:ring-2 focus:ring-[#7741C3] focus:outline-none transition"
                  />
                  <img
                    src={assets.down_icon}
                    alt="Dropdown icon"
                    className="absolute right-3 w-4 pointer-events-none"
                  />
                </div>
              </div>

              {/* Photo Upload */}
              <div>
                <label htmlFor="photo" className="block font-medium mb-3">Photo</label>
                <div className="bg-white px-5 py-2 border border-gray-300 rounded-lg flex items-center gap-2 w-[200px] cursor-pointer">
                  <img src={assets.upload} alt="Upload icon" className="w-5" />
                  <p className="text-gray-600">Choose Photo</p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#7741C3] text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-[#4c0ba5] transition"
              >
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
