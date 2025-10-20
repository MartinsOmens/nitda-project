import { assets } from "../../assets/assets";

export default function CreateEvent() {

    return(
        <div>
            <main className="mx-auto p-8 px-10 text-gray-700">
                <h2 className="text-2xl font-medium">Create Event</h2>
                <p className="text-lg text-gray-500 mt-2">Add a new event to the platform</p>

                <form action="" method="get" className="flex flex-col gap-5 mt-5">

                    <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="event-title" className="text-lg text-gray-600">Event Title</label>
                            <input type="text" id="event-title" placeholder="eg., AI Workshop"
                                className="w-lg bg-[#eee] focus:outline-none px-5 py-2 rounded-lg text-lg text-gray-500"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="event-date" className="text-lg text-gray-600">Event Date</label>
                            <input type="text" id="event-date"
                                className="w-lg bg-[#eee] focus:outline-none px-5 py-2 rounded-lg text-lg text-gray-500"
                            />
                        </div>
                    </div>


                     <div className="flex flex-col gap-2 mt-5">
                            <label htmlFor="description" className="text-lg text-gray-600">Description</label>
                            <input type="text" id="description" placeholder="Describe the event...."
                                className="w-full bg-[#eee] focus:outline-none p-5 rounded-lg text-lg text-gray-500"
                            />
                        </div>
                    

                     <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="location" className="text-lg text-gray-600">Location</label>
                            <input type="text" id="location" placeholder="eg., NITDA Innovation Hub"
                                className="w-lg bg-[#eee] focus:outline-none px-5 py-2 rounded-lg text-lg text-gray-500 shadow"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="capacity" className="text-lg text-gray-600">Capacity</label>
                            <input type="text" id="capacity" placeholder="eg., 50"
                                className="w-lg bg-[#eee] focus:outline-none px-5 py-2 rounded-lg text-lg text-gray-500"
                            />
                        </div>
                    </div>

                     <div className="flex flex-col gap-2 w-[200px] mb-4">
                        <p>Event Image</p>
                        <button className="flex items-center gap-3 bg-white px-5 py-1.5 border border-gray-300 rounded-md cursor-pointer text-lg font-medium">
                            <img src={assets.upload} alt="" />
                            Choose Image
                        </button>
                    </div>

                    <div className="w-[200px]">
                        <button className="bg-[#7741C3] text-white font-medium py-1.5 px-5 rounded-md cursor-pointer hover:bg-[#4c0ba5] transition-colors">
                            Create Event
                        </button>
                    </div>
                    


                </form>
            </main>
        </div>
    )
    
}

