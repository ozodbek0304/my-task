"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, Settings, LogOut } from 'lucide-react'
import { useSidebar } from "@/components/ui/sidebar"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, href: "/" },
  { title: "Users", icon: Users, href: "/#" },
  { title: "Administrator", icon: Users, href: "/#" },
]

const bottomMenuItems = [
  { title: "Settings", icon: Settings, href: "/settings" },
  { title: "Logout", icon: LogOut, href: "/logout" },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const { state } = useSidebar()



  return (
    <Sidebar collapsible="icon" >
      <SidebarHeader className="border-b px-2 py-[18px]">
        <div className="flex items-center px-2">
          <Users className="h-6 w-6" />
          <span className={cn("ml-2 text-lg font-semibold", state === "collapsed" && "hidden")}>
            Administrator
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="p-2">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                className={cn(
                  "w-full h-10 px-4 text-black font-bold",
                  pathname === item.href
                    ? "bg-red-500 text-white hover:bg-red-600 hover:text-white"
                    : "hover:bg-gray-100"
                )}
                tooltip={state === "collapsed" ? item.title : undefined}
              >
                <Link href={item.href} className="flex items-center font-medium  gap-3 px-2 py-1.5">
                  <item.icon className="h-6 w-6 shrink-0" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <SidebarMenu>
          {bottomMenuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                className={cn(
                  "w-full",
                  item.title === "Logout" ? "text-red-500 hover:bg-red-50" : "hover:bg-gray-100"
                )}
                tooltip={state === "collapsed" ? item.title : undefined}
              >
                <Link href={item.href} className="flex items-center gap-3 px-2 py-1.5">
                  <item.icon className="h-5 w-5 shrink-0" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

