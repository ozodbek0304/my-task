import * as React from "react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarRail,
    useSidebar,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { open, toggleSidebar } = useSidebar()
    return (
        <Sidebar
            collapsible="icon"
            className={cn("relative justify-between h-full")}
            {...props}
        >
            <SidebarContent>
                <NavMain />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>

            <ChevronRight
                className={cn(
                    "z-30 hidden md:block w-7 h-7 bg-primary text-primary-foreground rounded-full p-1 absolute top-1/2 right-0 translate-x-full sm:translate-x-1/2 aspect-square cursor-pointer duration-300",
                    { "rotate-180": open },
                )}
                onClick={toggleSidebar}
            />

            <SidebarRail />
        </Sidebar>
    )
}
