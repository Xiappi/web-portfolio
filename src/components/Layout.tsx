import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <div className="min-h-screen mx-[10%] bg-white">
        <div>
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-200 to-transparent pointer-events-none"></div>
        </div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
