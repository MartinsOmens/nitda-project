import { Edit, Trash2 } from "lucide-react";

const events = [
  {
    title: "AI & Machine Learning Workshop",
    date: "2025-11-15",
    location: "NITDA Innovation Hub",
    registered: "32/50",
    status: "Open",
  },
  {
    title: "Web Development Bootcamp",
    date: "2025-11-22",
    location: "NITDA Innovation Hub",
    registered: "15/40",
    status: "Open",
  },
  {
    title: "Cybersecurity Essentials",
    date: "2025-12-22",
    location: "NITDA Innovation Hub",
    registered: "28/35",
    status: "Open",
  },
];

const SubManageEvent = () => {
  return (
    <div className="w-full bg-white p-5">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Manage Event</h2>

      {/* -----Event Table Section */}

      <div className="overflow-x-auto rounded-md border border-gray-300">
        <table className="min-w-full overflow-hidden">
          {/* ----Table Head ------*/}
          <thead className=" text-left text-gray-600 text-sm divide-y divide-gray-200">
            <tr className="border-b border-gray-200">
              <th className="px-6 py-3 font-medium">Event Title</th>
              <th className="px-6 py-3 font-medium">Date</th>
              <th className="px-6 py-3 font-medium">Location</th>
              <th className="px-6 py-3 font-medium">Registered</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>
            {/* ----Table Contents------*/}
          <tbody className="divide-y divide-gray-200 text-gray-700">
            {events.map((event, idx) => (
              <tr key={idx}>
                <td className="px-6 py-3">{event.title}</td>
                <td className="px-6 py-3">{event.date}</td>
                <td className="px-6 py-3">{event.location}</td>
                <td className="px-6 py-3">{event.registered}</td>
                <td className="px-6 py-3">
                  <span className="bg-black text-white px-3 py-1 text-sm rounded-full">
                    {event.status}
                  </span>
                </td>
                {/* ----Table Actions ------*/}
                <td className="px-6 py-3 flex items-center gap-3">
                  <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100">
                    <Edit className="w-4 h-4 text-gray-600" />
                  </button>

                  <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100">
                    <Trash2 className="w-4 h-4 text-red-700" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubManageEvent;
