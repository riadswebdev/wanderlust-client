"use client";
import { AlertDialog, Button } from "@heroui/react";
import { deleteBookingData } from "@/app/lib/action";
// import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const DeleteBookingData = ({ id }) => {
  return (
    <AlertDialog>
      <Button
        variant="outline"
        className="text-danger border rounded-md text-base"
      >
        {" "}
        <Icon icon="marketeq:delete" className="size-5" /> Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete booking permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>This will permanently delete</p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onPress={() => deleteBookingData(id)}
                slot="close"
                variant="danger"
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteBookingData;
