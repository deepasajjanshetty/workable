"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";


export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="cursor-pointer" onClick={()=>{setTheme(theme === "light" ? "dark" : "light");}}>
            {
                theme === "light" ? (
                    <Moon className="h-5 w-5 text-black" />
                ) : (
                    <Sun className="h-5 w-5 text-white" />
                )
            }


        </div>
    )
}