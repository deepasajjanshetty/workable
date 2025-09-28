import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function AlertTitleOnly() {
    return (
        <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
                <strong>Important:</strong> This alert only shows a title with no additional description.
            </AlertDescription>
        </Alert>
    );
}
