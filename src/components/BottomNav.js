"use client"
import { AlignJustify, HomeIcon, LayoutList, LogOut, UserRoundPen } from "lucide-react";
import { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BottomNav = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    function logout() {
        localStorage.removeItem('accessToken');
        window.location.href = '/';
    }

  return (
    <div
        className={`flex bg-slate-500 rounded-sm items-center justify-between transition-all duration-500 ${
        isOpen ? "w-[300px] px-1 py-1" : "w-[35px]"
        }`}
    >
        <div className="flex items-center mr-3 p-2 w-8 h-8 bg-slate-300 hover:bg-slate-200 rounded-sm" onClick={() => setIsOpen(!isOpen)}>
            <AlignJustify size={25} />
        </div>

        <div className={`${isOpen ? "flex space-x-3": "hidden"}`}>
        <Link href={'/dashboard'}>
          <div
            className={`duration-700 h-8 bg-slate-300 cursor-default rounded-sm 
              ${isOpen ? "duration-700 opacity-90 hover:opacity-80" : "w-8 duration-500"}
              ${pathname === '/dashboard' ? 'border-r-4 duration-700 border-[#F39B3B]' : ''}
            `}
          >
            <div className="flex items-center p-2 w-8 h-8 rounded-sm">
              <HomeIcon size={25} />
            </div>
          </div>
        </Link>

        <Link href={'/dashboard/register-attendee'}>
          <div
            className={`duration-700 h-8 bg-slate-300 cursor-default rounded-sm 
              ${isOpen ? "duration-700 opacity-90 hover:opacity-80" : "w-8 duration-500"}
              ${pathname === '/dashboard/register-attendee' ? 'border-r-4 duration-700 border-[#F39B3B]' : ''}
            `}
          >
            <div className="flex items-center p-2 w-8 h-8 rounded-sm">
              <UserRoundPen size={25} />
            </div>
          </div>
          </Link>

          <Link href={'/dashboard/attendee-list'}>
          <div
            className={`duration-700 h-8 bg-slate-300 cursor-default rounded-sm 
              ${isOpen ? "duration-700 opacity-90 hover:opacity-80" : "w-8 duration-500"}
              ${pathname === '/dashboard/attendee-list' ? 'border-r-4 duration-700 border-[#F39B3B]' : ''}
            `}
          >
            <div className="flex items-center p-2 w-8 h-8 rounded-sm">
              <LayoutList size={25} />
            </div>
          </div>
          </Link>
        </div>

        <div className={`${isOpen ? "flex space-x-3": "hidden"}`}>
            <div
                className={`duration-700 h-8 bg-slate-300 cursor-default rounded-sm ${
                    isOpen ? "duration-700 opacity-90 hover:opacity-80" : "w-8 duration-500"
                }`}
                onClick={logout}
            >
                <div className="flex items-center p-2 w-8 h-8 bg-slate-300 rounded-sm">
                    <LogOut size={25} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BottomNav