import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogIn from "./components/AdminLogIn";
import EventRegistration from "./components/EventRegistration";
import Home from "./components/Home";
import CreateEvent from "./components/pages/CreateEvent";
import ManageEvent from "./components/pages/ManageEvent";
import Attendance from "./components/pages/Attendance";
import ManageSubAdmin from "./components/pages/ManageSubAdmin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/log-in" element={<AdminLogIn />} />
      <Route path="/event-registration" element={<EventRegistration />} />
      <Route path="/dashboard" element={<AdminDashboard />}>
        <Route path="create-event" element={<CreateEvent />} />
        <Route path="manage-event" element={<ManageEvent />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="manage-subadmin" element={<ManageSubAdmin />} />
      </Route>
    </Routes>
  );
}

export default App;
