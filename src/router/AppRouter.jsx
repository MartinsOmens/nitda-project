import { Routes, Route } from "react-router-dom";

// Public pages
import Home from "../components/Home/Home";
import AdminLogIn from "../components/AdminLogIn/AdminLogIn";
import EventRegistration from "../components/EventRegistration/EventRegistration";

// Layouts
import DashboardLayout from "../layouts/DashboardLayout";
import SubAdminLayout from "../layouts/SubAdminLayout";

// Admin pages
import AdminDashboard from "../components/AdminDashboard/AdminDashboard";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import ManageEvent from "../pages/ManageEvent/ManageEvent";
import Attendance from "../pages/Attendance/Attendance";
import ManageSubAdmin from "../pages/ManageSubAdmin/ManageSubAdmin";

// Sub-admin pages
import SubAdminDashboard from "../components/SubAdminDashboard/SubAdminDashboard";
import ViewEvent from "../pages/SubAdmin/SubCreateEvent";
import TakeAttendance from "../pages/SubAdmin/SubAttendance";
import SubManageEvent from "../pages/SubAdmin/SubManageEvent";
import SubCreateEvent from "../pages/SubAdmin/SubCreateEvent";

function AppRouter() {
  return (
    <Routes>
      {/* 🌍 Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/log-in" element={<AdminLogIn />} />
      <Route path="/event-registration" element={<EventRegistration />} />

      {/* 🧑‍💼 Admin Dashboard Routes */}
      <Route path="/admin" element={<DashboardLayout />}>
        <Route element={<AdminDashboard />}>
          <Route index element={<CreateEvent />} /> {/* Default when /admin opens */}
          <Route path="create-event" element={<CreateEvent />} />
          <Route path="manage-event" element={<ManageEvent />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="manage-subadmin" element={<ManageSubAdmin />} />
        </Route>
      </Route>

      {/* 👩‍💼 Sub-Admin Dashboard Routes */}
      <Route path="/subadmin" element={<SubAdminLayout />}>
        <Route element={<SubAdminDashboard />}>
          <Route index element={<ViewEvent />} /> {/* Default for /subadmin */}
          <Route path="sub-create-event" element={<SubCreateEvent />} />
          <Route path="sub-manage-event" element= {<SubManageEvent/>}/>
          <Route path="sub-attendance" element={<TakeAttendance />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRouter;
