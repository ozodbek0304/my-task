"use client"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"

type Props = {
    links: HeaderCrumbLink[]
}

export function HeaderCrumb({ links }: Props) {
    return (
        <Breadcrumb>
            <BreadcrumbList className="h-9 flex-nowrap">
                {links.length > 1 &&
                    links.slice(0, -1).map((item, index) => (
                        <BreadcrumbItem key={index}>
                            <BreadcrumbLink
                                asChild
                                className="max-w-20 truncate"
                            >
                                <Link href={item.to}>{item.label}</Link>
                            </BreadcrumbLink>
                            <BreadcrumbSeparator />
                        </BreadcrumbItem>
                    ))}

                <BreadcrumbItem>
                    <BreadcrumbPage
                        className={cn(
                            "max-w-20 truncate md:max-w-none font-medium",
                            links.length === 1 && "",
                        )}
                    >
                        {links.at(-1)?.label}
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
