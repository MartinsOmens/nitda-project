import { Upload } from "lucide-react";

const SubCreateEvent = () => {
  return (
    <div className="w-full px-6 py-4">
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="text-3xl font-medium text-gray-600">Create New Event</h1>
        <p className="text-sm text-gray-600">Add a new event to the platform</p>
      </div>

      {/*------- Form Section --------------- */}

      <div className="w-full flex flex-col gap-6">

        <div className="flex flex-col sm:flex-row gap-6">
          {/* Event Title */}
          <div className="flex flex-col gap-2 w-full sm:w-1/2">
            <label htmlFor="event-title" className="font-medium text-gray-700">
              Event Title
            </label>
            <input
              type="text"
              id="event-title"
              placeholder="e.g A.I Workshop"
              className="bg-[#F3F3F5] w-full px-5 py-2 text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7741C3] transition-all duration-300"
            />
          </div>

          {/* Event Date */}
          <div className="flex flex-col gap-2 w-full sm:w-1/2">
            <label htmlFor="event-date" className="font-medium text-gray-700">
              Event Date
            </label>
            <input
              type="date"
              id="event-date"
              className="bg-[#F3F3F5] w-full text-gray-500 px-5 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7741C3] transition-all duration-300"
            />
          </div>
          
        </div>

        {/* Event Description */}
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="event-description"
            className="font-medium text-gray-700"
          >
            Description
          </label>
          <input
            type="text"
            id="event-description"
            placeholder="Describe the event...."
            className="bg-[#F3F3F5] w-full p-5 text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7741C3] transition-all duration-300"

          />
        </div>

       <div className="flex flex-col sm:flex-row gap-6">
         {/* Event Location */}
        <div className="flex flex-col gap-2 w-full sm:w-1/2">
          <label htmlFor="event-location" className="font-medium text-gray-700">
            Event Location
          </label>
          <input
            type="text"
            id="event-location"
            placeholder="e.g NITDA Innovation HUB"
            className="bg-[#F3F3F5] w-full text-gray-500 px-5 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7741C3] transition-all duration-300"
          />
        </div>

         {/* Event Capacity*/}
        <div className="flex flex-col gap-2 w-full sm:w-1/2">
          <label htmlFor="event-capacity" className="font-medium text-gray-700">
            Capacity
          </label>
          <input
            type="text"
            id="event-capacity"
            placeholder="e.g, 50"
            className="bg-[#F3F3F5] w-full text-gray-500 px-5 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7741C3] transition-all duration-300"
          />
        </div>

       </div>

        {/* Create Event */}
       <div>
        <p className="font-medium text-gray-700 mb-3">Event Image</p>
            <button className="flex items-center gap-2 text-gray-700 font-medium border border-gray-300 px-5 py-2 rounded-md cursor-pointer">
                <Upload/>
                Choose Image
            </button>
       </div>
        {/* Submit Button */}
        <div className="mt-4">
          <button className="w-full sm:w-auto bg-[#7741C3] text-white py-2 px-6 rounded-md cursor-pointer hover:bg-[#5a32a3]">
            Create Event
          </button>
        </div>

      </div>
    </div>
  );
};

export default SubCreateEvent;
