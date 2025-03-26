import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-light text-center py-3 mt-4">
        <p>&copy; 2024 Infosys Public Services, Inc.,</p>
      </footer>
    </>
  )
};

export default Layout;