import { Card, CardContent } from "@/components/ui/card"
import { LayoutList, UserRoundPen } from "lucide-react";
import Link from "next/link";
  
const page = () => {
  return (
    <div className="flex flex-col tablet:flex-row m-auto gap-16 tablet:gap-28 laptop:gap-40">
        <Link href={'/dashboard/register-attendee'}>
        <Card className="flex flex-col items-center justify-center w-56 h-56 hover:border-2 hover:border-b-blue-600">
            <CardContent className="flex flex-col gap-4 items-center justify-center">
                <UserRoundPen size={75} color="blue" />
                <p className="text-md font-semibold">Register Attendee</p>
            </CardContent>
        </Card>
        </Link>

        <Link href={'/dashboard/attendee-list'}>
        <Card className="relative flex flex-col items-center justify-center w-56 h-56 hover:border-2 hover:border-b-blue-600">
            <p className="absolute right-3 top-3 flex items-center justify-center bg-blue-800 text-white font-bold p-2 w-auto h-7 rounded-full">0</p>
            <CardContent className="flex flex-col gap-4 items-center justify-center">
                <LayoutList size={75} color="blue" />
                <p className="text-md font-semibold">Attendee List</p>
            </CardContent>
        </Card>
        </Link>
    </div>
  );
};

export default page;
