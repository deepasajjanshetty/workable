import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function AlertSubtle() {
    return (
        <Alert className="border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200">
            <Info className="h-4 w-4" />
            <AlertDescription>
                This is a subtle alert with a soft blue background and border.
            </AlertDescription>
        </Alert>
    );
}
