import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditForm } from "./EditForm";

const EditAttendee = ({ attendee }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full rounded-sm justify-start flex px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent">Edit Attendee</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Attendee</DialogTitle>
          <DialogDescription>
            Make changes to{" "}
            <span className="font-semibold text-black">
              {attendee.firstName} {attendee.lastName}
            </span>{" "}
            details here.
          </DialogDescription>
        </DialogHeader>
        <EditForm attendee={attendee} />
      </DialogContent>
    </Dialog>
  );
};

export default EditAttendee;
