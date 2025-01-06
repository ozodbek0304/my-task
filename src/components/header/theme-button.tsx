"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {  CircleCheckBig, MoonStar, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
 
const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative md:h-9 md:w-9 h-8 w-8 hover:bg-default-100 dark:hover:bg-default-200 
          data-[state=open]:bg-default-100  dark:data-[state=open]:bg-default-200 
           hover:text-primary text-default-500 dark:text-default-800  rounded-full 
            "
        >
          <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonStar className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="p-2">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={cn(
            "p-2 font-medium text-sm text-default-600 cursor-pointer mb-[2px] ",
            {
              "bg-primary text-primary-foreground": theme === "light",
            }
          )}
        >
          <Sun className="w-6 h-6 mr-2" />
          <span className="mr-2">Kun</span>
          <CircleCheckBig
            className={cn("w-3 h-3 flex-none ml-auto ", {
              hidden: theme !== "light",
            })}
          />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={cn(
            "p-2 font-medium text-sm text-default-600 hover:bg-primary hover:text-primary-foreground  dark:hover:bg-background cursor-pointer mb-[2px]",
            {
              "bg-primary text-primary-foreground": theme === "dark",
            }
          )}
        >
          <MoonStar className="w-6 h-6 mr-2" />
          <span className="mr-2">Tun</span>
          <CircleCheckBig
            className={cn("w-3 h-3 flex-none ml-auto text-default-700", {
              hidden: theme !== "dark",
            })}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeButton;
