import { useRouter } from "next/navigation"
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
    const pathname: any = useRouter()

    return (
        <Tabs value={tabs.find((el) => pathname?.includes(el.to))?.to}>
            <div className="max-w-[90%] overflow-x-auto">
                <TabsList>
                    {tabs.map(
                        ({ enabled, ...t }, index) =>
                            enabled && (
                                <span {...t} key={index}>
                                    <TabsTrigger value={t.to}>
                                        {t.label}
                                    </TabsTrigger>
                                </span>
                            ),
                    )}
                </TabsList>
            </div>
        </Tabs>
    )
}
