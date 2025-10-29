
import { Outlet } from "react-router-dom";


export default function SubAdminLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className=" bg-gray-100">
        <Outlet /> {/* This is where nested routes render */}
      </main>
    </div>
  );
}
