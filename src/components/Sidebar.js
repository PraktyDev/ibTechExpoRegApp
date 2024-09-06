"use client";
import { Separator } from "@/components/ui/separator";
import { AlignJustify } from "lucide-react";
import { UserRoundPen } from "lucide-react";
import { LayoutList } from "lucide-react";
import { LogOut } from "lucide-react";
import { useState } from "react";
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function logout() {
    localStorage.removeItem('accessToken');
    window.location.href = '/';
  }

  return (
    <div
      className={`z-10 py-5 bg-slate-400 h-screen fixed left-0 flex flex-col justify-between transition-all duration-500 px-2 ${
        isOpen ? "w-[150px]" : "w-[50px]"
      }`}
    >
      <div className="flex flex-col space-y-3">
        <div
          className="flex items-center p-2 w-8 h-8 bg-slate-300 hover:bg-slate-200 rounded-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AlignJustify size={25} />
        </div>
        <Separator />
        
        <div className="flex flex-col space-y-6">
        <Link className={`link ${pathname === '/dashboard/register-attendee' ? 'text-[#F39B3B]' : 'text-black'} hover:text-orange-400`} href={'/dashboard/register-attendee'}>
          <div
            className={`flex gap-1 items-center h-8 bg-slate-300 cursor-default rounded-sm ${
              isOpen ? "w-full duration-700 opacity-60 hover:opacity-80" : "w-8 duration-500"
            }`}
          >
            <div className="flex items-center p-2 w-8 h-8 rounded-sm">
              <UserRoundPen size={25} />
            </div>
            <p
              className={`text-sm font-semibold ${isOpen ? "flex" : "hidden"}`}
            >
              Register
            </p>
          </div>
          </Link>

          <Link className={`link ${pathname === '/dashboard/attendee-list' ? 'text-[#F39B3B]' : 'text-black'} hover:text-orange-400`} href={'/dashboard/attendee-list'}>
          <div
            className={`flex gap-1 items-center h-8 bg-slate-300 cursor-default rounded-sm ${
              isOpen ? "w-full duration-700 opacity-60 hover:opacity-80" : "w-8 duration-500"
            }`}
          >
            <div className="flex items-center p-2 w-8 h-8 rounded-sm">
              <LayoutList size={25} />
            </div>
            <p
              className={`text-sm font-semibold ${isOpen ? "flex" : "hidden"}`}
            >
              List
            </p>
          </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <Separator />
        <div
          className={`flex gap-1 items-center h-8 bg-slate-300 cursor-default rounded-sm ${
            isOpen ? "w-full duration-700 opacity-60 hover:opacity-80" : "w-8 duration-500"
          }`}
          onClick={logout}
        >
          <div className="flex items-center p-2 w-8 h-8 bg-slate-300 rounded-sm">
            <LogOut size={25} />
          </div>
          <p className={`text-sm font-semibold ${isOpen ? "flex" : "hidden"}`}>
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
