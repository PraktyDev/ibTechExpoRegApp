import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <main className="flex bg-[#E6E6E6] min-h-screen h-full">
      <Sidebar />
      <div className="ml-[51px] w-full flex flex-col">
        <Navbar />
        {children}
      </div>
    </main>
  );
}
