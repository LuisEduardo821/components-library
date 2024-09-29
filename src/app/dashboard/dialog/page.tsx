"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";
import { useState } from "react";


export default function DialogPage() {

    const [open, setOpen] = useState(false);
    return (
        <div>
            <Dialog
                open={open}
                onOpenChange={open => setOpen(open)}
            >
                <DialogTrigger asChild>
                    <Button>Edit Profile</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right">Name:</Label>
                            <Input className="col-span-3" value="Pedro Duarte" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right">Username:</Label>
                            <Input className="col-span-3" value="@pduarte" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" className="gap-2"
                            onClick={() => setOpen(false)}>
                            <Save className="w-4 h-4" />
                            <span className="sr-only sm:not-sr-only">Save changes</span>
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <Button
                variant="outline"
                className="ml-4"
                onClick={() => setOpen(true)}
            >Edit Profile Manual</Button>
        </div >
    )
}