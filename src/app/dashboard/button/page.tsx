import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2, Mail } from "lucide-react";


export default function HomePage() {
    return (
        <div className="grid grid-cols-5 gap-2">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
            <Button disabled>Disabled</Button>
            <Button disabled>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Please wait
            </Button>
            <Button>
                <Mail className="mr-2 h-4 w-4" /> Login with Email
            </Button>
            <Button variant="success">success</Button>
            <Button variant="outline" size="icon">
                <ChevronRight />
            </Button>
        </div>
    )
}