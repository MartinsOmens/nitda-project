import { Outlet } from "react-router-dom";
export default function DashboardLayout() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main>
        <Outlet /> {/* This is where nested routes render */}
      </main>
    </div>
  );
}
