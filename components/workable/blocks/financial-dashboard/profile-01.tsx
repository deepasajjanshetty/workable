import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User, CreditCard, Bell } from "lucide-react";

interface Profile01Props {
    avatar?: string;
}

export default function Profile01({ avatar }: Profile01Props) {
    return (
        <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                    <AvatarImage src={avatar} alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs text-muted-foreground mt-1">john@example.com</p>
                </div>
            </div>
        </div>
    );
}
