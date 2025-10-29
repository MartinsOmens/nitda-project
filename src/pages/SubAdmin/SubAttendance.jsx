import { ChevronDown, Search, Download } from "lucide-react";
import { useState } from "react";

const initialDetails = [
  { id: 1, name: "John Doe", matricNum: "CSC/2020/001", department: "Computer Science", track: "AI & Machine Learning", event: "AI & Machine Learning Workshop", status: "Absent" },
  { id: 2, name: "Jane Smith", matricNum: "CSC/2020/002", department: "Computer Science", track: "AI & Machine Learning", event: "AI & Machine Learning Workshop", status: "Present" },
  { id: 3, name: "Bob Johnson", matricNum: "CSC/2020/003", department: "Computer Science", track: "Web Development", event: "Web Development Bootcamp", status: "Absent" },
  { id: 4, name: "Alice Williams", matricNum: "CSC/2020/004", department: "Computer Science", track: "Data Science", event: "AI & Machine Learning Workshop", status: "Absent" },
];

const SubAttendance = () => {
  const [details, setDetails] = useState(initialDetails);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("All Events");

  const events = ["All Events", "AI & Machine Learning Workshop", "Web Development Bootcamp"];

  const handleStatusToggle = (id) => {
    setDetails(details.map(d => d.id === id ? { ...d, status: d.status === "Present" ? "Absent" : "Present" } : d));
  };

  const handleMarkAllPresent = () => {
    setDetails(details.map(d => ({ ...d, status: "Present" })));
  };

  const filteredDetails = details.filter(d =>
    (selectedEvent === "All Events" || d.event === selectedEvent) &&
    (d.name.toLowerCase().includes(searchTerm.toLowerCase()) || d.matricNum.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">Attendance Info</h2>
      <div className="flex flex-col md:flex-row md:items-end md:gap-4 gap-4">
        {/* Select Event */}
        <div className="flex flex-col md:flex-1">
          <label htmlFor="select-event" className="text-gray-700 mb-2 text-lg">Select Event</label>
          <div className="relative w-full">
            <select
              id="select-event"
              value={selectedEvent}
              onChange={(e) => setSelectedEvent(e.target.value)}
              className="w-full bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors px-3 py-2 pr-10 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
            >
              {events.map(event => <option key={event} value={event}>{event}</option>)}
            </select>
            <ChevronDown className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Search Students */}
        <div className="flex flex-col md:flex-1">
          <label htmlFor="search-students" className="text-gray-700 mb-2 text-lg">Search Students</label>
          <div className="relative w-full">
            <input
              type="text"
              id="search-students"
              placeholder="Name or matric number"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors px-3 py-2 pr-10 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Mark All Present Button */}
        <button
          onClick={handleMarkAllPresent}
          className="w-full md:w-auto text-gray-700 px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors focus:outline-none"
        >
          Mark All Present
        </button>

        {/* Download Button */}
        <button className="w-full md:w-auto text-gray-700 px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 focus:outline-none">
          <Download className="w-5 h-5" />
          <span className="hidden md:inline">Download</span>
        </button>
      </div>

      <div className="mt-6">
        <p>Total Registered: {details.length}, Present: {details.filter(d => d.status === "Present").length}, Absent: {details.filter(d => d.status === "Absent").length}, Attendance Rate: {((details.filter(d => d.status === "Present").length / details.length) * 100).toFixed(0)}%</p>
      </div>

      <div className="overflow-x-auto rounded-md border border-gray-300 mt-10 px-4 py-1">
        <table className="min-w-full overflow-hidden">

          <thead className="text-left text-gray-600 text-sm divide-y divide-gray-200">
            <tr className="border-b border-gray-200">
              <th className="px-5 py-1 font-medium">Present</th>
              <th className="px-5 py-1 font-medium">Name</th>
              <th className="px-5 py-1 font-medium">Matric Number</th>
              <th className="px-5 py-1 font-medium">Department</th>
              <th className="px-5 py-1 font-medium">Track</th>
              <th className="px-5 py-1 font-medium">Event</th>
              <th className="px-5 py-1 font-medium">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-gray-700">
            {filteredDetails.map((detail) => (
              <tr key={detail.id}>
                <td className="px-6 py-3">
                  <input
                    type="checkbox"
                    checked={detail.status === "Present"}
                    onChange={() => handleStatusToggle(detail.id)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                </td>
                <td className="px-6 py-3 font-medium">{detail.name}</td>
                <td className="px-6 py-3 font-medium">{detail.matricNum}</td>
                <td className="px-6 py-3 font-medium">{detail.department}</td>
                <td className="px-6 py-3 font-medium">{detail.track}</td>
                <td className="px-6 py-3 font-medium">{detail.event}</td>

                <td className="px-6 py-3">
                  <span className={`px-3 py-1 text-sm rounded-full ${detail.status === "Present" ? "bg-black text-white" : "bg-gray-200 text-black"}`}>
                    {detail.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default SubAttendance;
