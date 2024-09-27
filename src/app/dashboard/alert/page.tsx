import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RocketIcon, Terminal } from "lucide-react";


export default function AlertPage() {

    return (
        <div className="grid gap-3">
            <Alert>
                <Terminal className="w-4 h-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    You can add components to your app using the cli.
                </AlertDescription>
            </Alert>
            <Alert variant="destructive">
                <Terminal className="w-4 h-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    Your session has expired. Please log in again.
                </AlertDescription>
            </Alert>
            <Alert variant="success">
                <Terminal className="w-4 h-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    You can add components to your app using the cli.
                </AlertDescription>
            </Alert>
            <Alert variant="warning">
                <RocketIcon className="w-4 h-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    You can add components to your app using the cli.
                </AlertDescription>
            </Alert>
        </div>
    )
}