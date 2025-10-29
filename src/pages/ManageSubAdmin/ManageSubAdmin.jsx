import { useState, useMemo } from "react";
import { Mail, Search } from "lucide-react";

export default function ManageSubAdmin() {
  const [requests, setRequests] = useState([
    {
      initials: "MB",
      name: "Michael Brown",
      email: "michael.brown@nihub.com",
      date: "2025-10-05",
      reason: "Interested in helping manage tech events and workshops",
      status: "Pending",
    },
    {
      initials: "SD",
      name: "Sarah Davis",
      email: "sarah.davis@nihub.com",
      date: "2025-10-06",
      reason:
        "Have experience in event management and want to contribute to more initiatives",
      status: "Pending",
    },
    {
      initials: "DW",
      name: "David Wilson",
      email: "david.wilson@nihub.com",
      date: "2025-10-07",
      reason: "Passionate about technology education and community projects",
      status: "Pending",
    },
    {
      initials: "ET",
      name: "Emily Taylor",
      email: "emily.taylor@nihub.com",
      date: "2025-10-03",
      reason:
        "Former student coordinator with excellent organizational skills",
      status: "Approved",
    },
    {
      initials: "JA",
      name: "James Anderson",
      email: "james.anderson@nihub.com",
      date: "2025-10-04",
      reason: "Want to support NITDA initiatives",
      status: "Rejected",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const stats = useMemo(
    () => ({
      pending: requests.filter((r) => r.status === "Pending").length,
      approved: requests.filter((r) => r.status === "Approved").length,
      rejected: requests.filter((r) => r.status === "Rejected").length,
    }),
    [requests]
  );

  const updateStatus = (email, newStatus) => {
    setRequests((prev) =>
      prev.map((r) =>
        r.email === email ? { ...r, status: newStatus } : r
      )
    );
  };

  const filteredRequests = useMemo(() => {
    return requests.filter((r) => {
      const matchesSearch =
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus =
        filterStatus === "All" || r.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [requests, searchQuery, filterStatus]);

  return (
    <div className="p-4 sm:p-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <h3 className="text-gray-700 text-lg font-semibold">Pending Requests</h3>
          <p className="text-2xl font-bold text-[#7741C3]">{stats.pending}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <h3 className="text-gray-700 text-lg font-semibold">Approved</h3>
          <p className="text-2xl font-bold text-green-600">{stats.approved}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <h3 className="text-gray-700 text-lg font-semibold">Rejected</h3>
          <p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
        </div>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
        <div className="flex flex-wrap gap-2">
          {["All", "Pending", "Approved", "Rejected"].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border ${
                filterStatus === status
                  ? "bg-[#7741C3] text-white border-[#7741C3]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#7741C3]"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 overflow-x-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Sub-Admin Requests
        </h2>

        <table className="min-w-full border-collapse text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-50 text-gray-700 text-left">
              <th className="py-2 px-4 font-medium">Applicant</th>
              <th className="py-2 px-4 font-medium">Email</th>
              <th className="py-2 px-4 font-medium">Requested Date</th>
              <th className="py-2 px-4 font-medium">Reason</th>
              <th className="py-2 px-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((r) => (
              <tr
                key={r.email}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4 flex items-center gap-3 whitespace-nowrap">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 font-semibold text-gray-700 text-sm">
                    {r.initials}
                  </div>
                  {r.name}
                </td>
                <td className="py-3 px-4 text-gray-600 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>{r.email}</span>
                  </div>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">{r.date}</td>
                <td className="py-3 px-4 text-gray-700 max-w-[250px] truncate">
                  {r.reason}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      r.status === "Pending"
                        ? "bg-blue-100 text-blue-600"
                        : r.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {r.status}
                  </span>

                  {r.status === "Pending" && (
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => updateStatus(r.email, "Approved")}
                        className="text-green-600 text-xs hover:underline"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => updateStatus(r.email, "Rejected")}
                        className="text-red-600 text-xs hover:underline"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
            {filteredRequests.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-6">
                  No requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
