import { Outlet } from "react-router-dom";
export default function DashboardLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-gray-100">
        <Outlet /> {/* This is where nested routes render */}
      </main>

    </div>
  );
}
