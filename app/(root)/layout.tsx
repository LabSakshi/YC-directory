import NavBar from "../components/Navbar";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="font-work-sans">
      <NavBar />
      {children}
    </main>
  );
};

export default Layout;
