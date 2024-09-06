import Image from "next/image";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card";
import { LogOut } from "lucide-react";
  

const Navbar = ({user}) => {
    const nameArray = user.name.split(' ')
    const initial = nameArray[0]?.[0] ?? ''
    const last = nameArray[1]?.[0] ?? ''

  return (
    <div className="bg-slate-400 flex w-full justify-between px-3 py-2">
        <Image src={'/ibadanTExpo.png'} priority={true} alt="ibtechexpologo" width={100} height={100} className="w-auto h-auto"/>
        <div className="flex gap-2 justify-center items-center">
            <div className="flex flex-col items-start text-white">
                <p className="text-md font-semibold">{user.name}</p>
                <p className="text-sm font-medium">{user.role}</p>
            </div>
            <HoverCard>
                <HoverCardTrigger>
                    <div className="cursor-default flex items-center justify-center rounded-full w-8 h-8 p-1 bg-slate-200 font-bold text-xl">{initial}{last}</div>
                </HoverCardTrigger>
                <HoverCardContent>
                    <div className="flex flex-col justify-center items-center gap-4">
                        <p>{user.name}</p>
                        <p>{user.role}</p>
                        <button className="bg-blue-600 p-2 rounded-md flex items-center gap-2 text-white text-sm"><LogOut size={15} />Logout</button>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </div>
    </div>
  )
}

export default Navbar