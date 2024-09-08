import CsvDownload from "@/components/CsvDownload";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const dynamic = 'force-dynamic'
async function getData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/attendees`,
      { next: { revalidate: 0 } }
    );
    return res.json();
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

export default async function AttendeeListPage() {
  const data = await getData();
  console.log(data);

  return (
    <div className="w-full px-2 laptop:px-0 laptop:container mx-auto py-10 flex flex-col">
      <div className="flex justify-end">
        <CsvDownload data={data} />
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
