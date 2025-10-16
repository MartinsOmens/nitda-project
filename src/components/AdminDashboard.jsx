import NavBar from "./NavBar";

export default function AdminDashboard() {
    return(
        <>
        <NavBar/>

            <div className="w-full h-screen bg-gray-400 px-8">
                <div className="bg-white p-6 flex items-center justify-between">
                    <div className="flex flex-col">
                        <h2>Admin Dashboard</h2>
                        <p>Manage events, attendance, and sub-admin requests</p>
                    </div>

                    <div></div>
                </div>
            </div>
        </>
    )
}