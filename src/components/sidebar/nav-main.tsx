import {
    ArrowUpDown,
    Calculator,
    CircleDollarSign,
    ClipboardList,
    Database,
    Receipt,
    Settings,
    ShoppingBag,
    Users,
} from "lucide-react"

import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import { Link, linkOptions } from "@tanstack/react-router"

export function NavMain() {
    const { setOpenMobile } = useSidebar()
    const links = [
        linkOptions({
            to: "/",
            icon: <CircleDollarSign />,
            enabled: true,
            title: "Savdo",
        }),
        linkOptions({
            to: "/clients",
            icon: <Users />,
            enabled: true,
            title: "Mijozlar",
        }),
        linkOptions({
            to: "/debtors",
            icon: <ClipboardList />,
            enabled: true,
            title: "Qarzdorlar",
        }),
        linkOptions({
            to: "/cash-register",
            icon: <Receipt />,
            enabled: true,
            title: "Kassa",
        }),
        linkOptions({
            to: "/finance",
            icon: <ArrowUpDown />,
            enabled: true,
            title: "Moliya",
        }),
        linkOptions({
            to: "/provider/$tab",
            params: { tab: "uz" },
            icon: <ShoppingBag />,
            enabled: true,
            title: "Ta’minotchi",
        }),
        linkOptions({
            to: "/warehouse",
            icon: <Database />,
            enabled: true,
            title: "Ombor",
        }),
        linkOptions({
            to: "/reports",
            icon: <Calculator />,
            enabled: true,
            title: "Hisobotlar",
        }),
        linkOptions({
            to: "/settings",
            icon: <Settings />,
            enabled: true,
            title: "Sozlamalar",
        }),
    ]

    return (
        <SidebarGroup>
            <SidebarMenu>
                <Link
                    to="/"
                    className="rounded-lg mb-8"
                    onClick={() => {
                        setOpenMobile(false)
                    }}
                >
                    <SidebarMenuItem>
                        <SidebarMenuButton className="text-3xl text-primary font-extrabold gap-0 justify-center">
                            M<span>iraMiller</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </Link>
                {links.map(
                    ({ enabled, title, ...item }) =>
                        enabled && (
                            <Link
                                {...item}
                                key={item.to}
                                activeProps={{
                                    className:
                                        "!bg-primary text-primary-foreground",
                                }}
                                className="rounded-lg"
                                onClick={() => {
                                    setOpenMobile(false)
                                }}
                            >
                                <SidebarMenuItem>
                                    <SidebarMenuButton tooltip={title}>
                                        {item.icon}
                                        <span>{title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </Link>
                        ),
                )}
            </SidebarMenu>
        </SidebarGroup>
    )
}
