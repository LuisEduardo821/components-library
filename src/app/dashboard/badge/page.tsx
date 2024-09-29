import { Badge } from "@/components/ui/badge";


export default function BadgePage() {
    return (
        <div className="flex gap-4">
            <Badge>Default</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="info">Info</Badge>
            <Badge capitalize variant="success">success</Badge>
        </div>
    )
}