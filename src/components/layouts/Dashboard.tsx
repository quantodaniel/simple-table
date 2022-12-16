import Navbar from "../organisms/Navbar";
import Sidebar from "../organisms/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-1">
        <Sidebar />
        <section className="flex flex-col flex-1 p-6 gap-6">{children}</section>
      </main>
    </>
  );
};

export default Layout;
