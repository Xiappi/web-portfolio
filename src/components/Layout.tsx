import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <div className="min-h-screen mx-[2%] md:mx-[5%] lg:mx-[10%] bg-white">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-200 to-transparent pointer-events-none -z-10" />
        <div className="relative z-10">
          <Header />
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
