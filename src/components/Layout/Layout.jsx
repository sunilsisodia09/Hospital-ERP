import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";


export default function Layout() {
return (
<div className="min-h-screen flex">
{/* Sidebar */}
<Sidebar />


{/* Main */}
<div className="flex-1 flex flex-col">
<Topbar />
<main className="p-4 bg-gray-50 flex-1 overflow-y-auto">
<Outlet />
</main>
</div>
</div>
);
}