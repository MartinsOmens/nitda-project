import NavBar from "./NavBar";
import banner from "../assets/banner.png";
import { assets, eventData } from "../assets/assets";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="relative">
        <div className="relative bg-cover bg-center h-screen w-full min-h-screen flex items-center flex-col justify-center text-white px-4" style={{ backgroundImage: `url(${banner})` }}>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Welcome to NIHUB Events</h2>
            <p className="text-base sm:text-lg text-gray-300 mb-8 ">Discover and register for exciting tech events, workshops, and bootcamps hosted by NITDA. Enhance your skills and connect with fellow tech enthusiasts.</p>
            <button className="bg-[#270557] px-5 py-1.5 hover:bg-[#3a0785]  cursor-pointer rounded-md font-semibold transition-all duration-300">Explore Events</button>
        </div>
        </div>

        <div className="relative -mt-20 w-[90%] md:w-[60%] sm:w-[40%] mx-auto bg-[#F9FAFB] shadow-xl rounded-xl p-8 z-20 mb-8">
           <div className="text-center">
             <h2 className="text-3xl sm:text-4xl font-bold mb-2 ">Available Events</h2>
             <p className="text-gray-600 text-lg">Browse and register for upcoming events</p>
           </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-8 px-4">
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
                    className="w-full h-48 object-cover"
                    />
                
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                    <p className="font-extrabold text-lg text-gray-900 mb-2">
                        {item.title}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 min-h-[60px]">
                        {item.desc}
                    </p>

                    <div className="flex flex-col gap-2 text-gray-700 text-sm">
                        <div className="flex items-center gap-2">
                        <img src={assets.calendar} alt="calendar" className="w-5" />
                        <p>{item.date}</p>
                        </div>
                        <div className="flex items-center gap-2">
                        <img src={assets.location} alt="location" className="w-5" />
                        <p>{item.location}</p>
                        </div>
                        <div className="flex items-center gap-2">
                        <img src={assets.user} alt="user" className="w-5" />
                        <p>{item.registered}</p>
                        </div>
                    </div>
                    </div>

                    {/* Button stays at the bottom */}
                    <button className="bg-black text-white px-4 py-2 mt-6 w-full rounded-md font-semibold hover:bg-[#222] transition-all duration-300">
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
