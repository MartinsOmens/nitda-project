// src/router/AppRouter.jsx
import { Routes, Route } from "react-router-dom";

// Public pages
import Home from "../components/Home/Home";
import AdminLogIn from "../components/AdminLogIn/AdminLogIn";
import EventRegistration from "../components/EventRegistration/EventRegistration";

// Layouts
import DashboardLayout from "../layouts/DashboardLayout";
import SubAdminLayout from "../layouts/SubAdminLayout"; // 👈 new layout for sub-admins

// Admin pages
import AdminDashboard from "../components/AdminDashboard/AdminDashboard";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import ManageEvent from "../pages/ManageEvent/ManageEvent";
import Attendance from "../pages/Attendance/Attendance";
import ManageSubAdmin from "../pages/ManageSubAdmin/ManageSubAdmin";

// Sub-admin pages
import SubAdminDashboard from "../components/SubAdminDashboard/SubAdminDashboard";
import ViewEvent from "../pages/SubAdmin/ViewEvent";
import TakeAttendance from "../pages/SubAdmin/TakeAttendance";

function AppRouter() {
  return (
    <Routes>
      {/* 🌍 Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/log-in" element={<AdminLogIn />} />
      <Route path="/event-registration" element={<EventRegistration />} />

      {/* 🧑‍💼 Admin Dashboard Routes */}
    <Route path="/admin" element={<DashboardLayout />}>
  <Route element={<AdminDashboard />}>  {/* 👈 AdminDashboard now wraps its child pages */}
    <Route index element={<div>Welcome, Admin!</div>} /> {/* optional welcome page */}
    <Route path="create-event" element={<CreateEvent />} />
    <Route path="manage-event" element={<ManageEvent />} />
    <Route path="attendance" element={<Attendance />} />
    <Route path="manage-subadmin" element={<ManageSubAdmin />} />
  </Route>
</Route>



      {/* 👩‍💼 Sub-Admin Dashboard Routes */}
      <Route path="/subadmin" element={<SubAdminLayout />}>
        <Route index element={<SubAdminDashboard />} /> {/* /subadmin */}
        <Route path="view-event" element={<ViewEvent />} />
        <Route path="take-attendance" element={<TakeAttendance />} />
      </Route>

    </Routes>
  );
}

export default AppRouter;
