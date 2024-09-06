import { columns } from "./columns";
import { DataTable } from "./data-table";
import { HardDriveDownload } from 'lucide-react';
import axios from "axios";

async function getData() {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/attendees`)
    return res.data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

export default async function AttendeeListPage() {
  const data = await getData()

  return (
    <div className="w-full px-4 laptop:px-0 laptop:container mx-auto py-10 flex flex-col">
      <div className="flex justify-end"><button className="bg-slate-400 rounded-sm p-1 flex items-center justify-center"><HardDriveDownload size={20} color="white" /></button></div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
