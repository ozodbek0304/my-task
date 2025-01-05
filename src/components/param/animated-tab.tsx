/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter, useSearchParams } from "next/navigation"
import AnimatedTabs from "../custom/tabs"

interface ParamTabsProps {
    options: {
        id: string | number
        name: string | number
        content?: React.ReactNode
    }[]
    paramName?: string
    disabled?: boolean
    onAdd?: () => void
    cleanOthers?: boolean
    returnValue?: "name" | "id"
    onValueChange?: (val: string | number) => void
}

const ParamAnimatedTabs: React.FC<ParamTabsProps> = ({
    options,
    paramName = "tab",
    disabled = false,
    onAdd,
    cleanOthers = false,
    returnValue = "id",
    onValueChange,
}) => {
    const navigate = useRouter()
    const search: any = useSearchParams()
    const currentTab = search[paramName] || options[0]?.[returnValue]

    const handleTabChange = (tab: string | number) => {
        onValueChange?.(tab)
        if (tab === "add") {
            onAdd?.()
        } else {
            if (disabled || tab === currentTab) return
            cleanOthers ?
                navigate.push({ search: { [paramName]: tab } as any })
                : navigate.push({ search: { ...search, [paramName]: tab } as any })
        }
    }

    return (
        <AnimatedTabs
            options={options}
            value={currentTab}
            setValue={handleTabChange}
            returnValue={returnValue}
        />
    )
}

export default ParamAnimatedTabs
