"use client";
import { ArrowUpDown } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DeleteAlert from "@/components/DeleteAlert";


export const columns = [
  {
    accessorKey: "firstName",
    header: ({ column }) => {
      return (
        <div className="flex gap-2 items-center">
        <p>First Name</p>
        <Button
          className=''
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <ArrowUpDown className="h-4 w-4" />
        </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phonenumber",
    header: "Phone Number",
  },
  {
    accessorKey: "course",
    header: "Course of Interest",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const attendee = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(attendee.email)}
            >
              Copy Email
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit Attendee</DropdownMenuItem>
            <DropdownMenuItem><DeleteAlert /></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];


