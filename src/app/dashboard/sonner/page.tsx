"use client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function SonnerPage() {
  return (
    <div>
      <Button
        variant="outline"
        onClick={() => {
          toast.success("El evento fue creado", {
            description: "Monday, January 3rd at 6:00pm",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
            cancel: {
              label: "Cancel",
              onClick: () => console.log("Cancel!"),
            },
          });
        }}
      >
        Show Sonner
      </Button>
    </div>
  );
}
