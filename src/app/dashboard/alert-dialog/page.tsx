'use client';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";


export default function HomePage() {

    const [open, setOpen] = useState(false);
    return (
        <div className="grid grid-cols-2 gap-2">
            <AlertDialog
                open={open}
                onOpenChange={open => setOpen(open)}
            >
                <AlertDialogTrigger asChild>
                    <Button variant="outline">Show dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction>Continuar</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            <Button
                variant="default"
                onClick={() => setOpen(true)}
            >Show dialog manually</Button>
        </div>
    )
}