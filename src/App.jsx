import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminLogIn from "./components/AdminLogIn";
import EventRegistration from "./components/EventRegistration";
import Home from "./components/Home.jsx";
import CreateEvent from "./components/Admin/CreateEvent";
import ManageEvents from "./components/Admin/ManageEvents";
import { Route, Routes } from "react-router-dom";
import Attendance from "./components/Admin/Attendance";
import ManageSubAdmin from "./components/Admin/ManageSubAdmin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/log-in" element={<AdminLogIn />} />
      <Route path="/event-registration" element={<EventRegistration />} />

      <Route path="/dashboard" element={<AdminDashboard />}>
        <Route path="create-event" element={<CreateEvent />} />
        <Route path="manage-event" element={<ManageEvents />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="manage-subAdmin" element={<ManageSubAdmin />} />
      </Route>
    </Routes>
  );
}

export default App;
