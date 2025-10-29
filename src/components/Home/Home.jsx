import banner from "@/assets/images/banner.png";
import { assets, eventData } from "@/assets/assets";
import { Link } from "react-router-dom";
import NavBar from "../Navbar/Navbar";

export default function Home() {
  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <div className="relative">
        <div
          className="relative h-[80vh] sm:h-screen w-full bg-cover bg-center flex flex-col justify-start text-white px-4 sm:px-10 md:px-20 lg:px-32 pt-20 sm:pt-32 md:pt-40"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 max-w-2xl text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
              Welcome to NIHUB Events
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
              Discover and register for exciting tech events, workshops, and
              bootcamps hosted by NITDA. Enhance your skills and connect with
              fellow tech enthusiasts.
            </p>

            <Link
              to="/event-registration"
              className="inline-block mr-4 bg-[#7741C3] px-6 py-2 sm:py-3 hover:bg-[#5e2fa3] cursor-pointer rounded-md font-semibold transition-all duration-300 text-sm sm:text-base"
            >
              Explore Events
            </Link>
          </div>
        </div>

        {/* Events Section */}
        <div className="relative -mt-16 sm:-mt-24 md:-mt-28 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto bg-[#F9FAFB] shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 z-20 mb-12 sm:mb-16 md:mb-24">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Available Events
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              Browse and register for upcoming events
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-6 sm:gap-8">
            {eventData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    <p className="font-extrabold text-lg text-gray-900 mb-2 line-clamp-2">
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 min-h-[60px] line-clamp-3">
                      {item.desc}
                    </p>

                    <div className="flex flex-col gap-2 text-gray-700 text-sm sm:text-base">
                      <div className="flex items-center gap-2">
                        <img
                          src={assets.calendar}
                          alt="calendar"
                          className="w-4 sm:w-5"
                        />
                        <p>{item.date}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <img
                          src={assets.location}
                          alt="location"
                          className="w-4 sm:w-5"
                        />
                        <p>{item.location}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <img
                          src={assets.user}
                          alt="user"
                          className="w-4 sm:w-5"
                        />
                        <p>{item.registered}</p>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <button className="bg-black text-white px-4 py-2 mt-6 w-full rounded-md font-semibold hover:bg-[#222] transition-all duration-300 text-sm sm:text-base">
                    {item.btnText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
