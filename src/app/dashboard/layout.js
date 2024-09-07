"use client"
import BottomNav from "@/components/BottomNav";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function DashboardLayout({ children }) {
  const [isSuccess, setIsSuccess] = useState(false)
  const [userData, setUserData] = useState([])

  const router = useRouter()

  useEffect(() => {(async()=>{
    try {
      const { user, error } = await getVolunteer();
      if (error) {
        router.push('/');
        return;
      }
      setUserData(user);
      setIsSuccess(true);
    } catch (error) {
      router.push('/');
    }
  })();
  }, [router]);

  if (!isSuccess) {
    return <div className="flex w-full h-screen min-h-screen justify-center items-center m-auto"><Loader /></div>
  }

  return (
    <main className="relative flex bg-[#E6E6E6] min-h-screen h-full">
      <div className='hidden laptop:block'><Sidebar /></div>
      <div className='absolute bottom-4 left-4 laptop:hidden'><BottomNav /></div>
      <div className="laptop:ml-[51px] w-full flex flex-col">
        <Navbar user={userData} />
        {children}
      </div>
    </main>
  );
}

async function getVolunteer() {
  const token = localStorage.getItem('accessToken'); 
  if (!token) {
      throw new Error('No token found');
  }

  try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/volunteer/status`, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      });
      return {
        user: response.data,
        error: null,
      }
  } catch (error) {
    return {
      error: error.message,
      user: null,
    }
  }
}
