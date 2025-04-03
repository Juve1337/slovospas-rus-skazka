
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background pattern-overlay">
      <Navbar />
      <div className="flex flex-1 relative">
        <main className="flex-1 p-4 md:p-6 pt-20">
          <div className="container mx-auto max-w-6xl">
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
