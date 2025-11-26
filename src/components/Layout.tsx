import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen mx-[10%] bg-white">
      <Navbar />
      <Outlet />
    </div>
  );
}
