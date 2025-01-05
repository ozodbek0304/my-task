import { Link, useLocation } from "@tanstack/react-router"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"

type PageTab = {
    to: string
    label: string
    enabled: boolean
}

type Props = {
    tabs: PageTab[]
}

export default function PageTabs({ tabs }: Props) {
    const pathname = useLocation({
        select: (l) => l.pathname,
    })

    return (
        <Tabs value={tabs.find((el) => pathname.includes(el.to))?.to}>
            <div className="max-w-[90%] overflow-x-auto">
                <TabsList>
                    {tabs.map(
                        ({ enabled, ...t }, index) =>
                            enabled && (
                                <Link {...t} key={index}>
                                    <TabsTrigger value={t.to}>
                                        {t.label}
                                    </TabsTrigger>
                                </Link>
                            ),
                    )}
                </TabsList>
            </div>
        </Tabs>
    )
}
