import { cn } from "@/lib/utils"
import {
    Edit,
    EllipsisVertical,
    Eye,
    SquarePen,
    Trash2,
    Undo,
} from "lucide-react"
import { Button } from "../ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"

type Props = {
    menuMode?: boolean
    onEdit?: () => void
    onDelete?: () => void
    onUndo?: () => void
    onView?: () => void
    className?: string
}

export default function TableActions({
    menuMode = false,
    onEdit,
    onDelete,
    onUndo,
    onView,
    className,
}: Props) {
    return menuMode ?
            <DropdownMenu>
                <DropdownMenuTrigger asChild className={className}>
                    <Button
                        variant="ghost"
                        className="!text-primary"
                        size={"icon"}
                        icon={<EllipsisVertical width={18} />}
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={1}>
                    {onView && (
                        <DropdownMenuItem
                            onClick={onView}
                            className="!text-primary"
                        >
                            <Eye width={16} />
                            Ko'rish
                        </DropdownMenuItem>
                    )}
                    {onEdit && (
                        <DropdownMenuItem
                            onClick={onEdit}
                            className="!text-green-500"
                        >
                            <Edit width={16} />
                            Tahrirlash
                        </DropdownMenuItem>
                    )}
                    {onDelete && (
                        <DropdownMenuItem
                            onClick={onDelete}
                            className="!text-destructive"
                        >
                            <Trash2 width={16} /> O'chirish
                        </DropdownMenuItem>
                    )}
                    {onUndo && (
                        <DropdownMenuItem
                            onClick={onUndo}
                            className="!text-destructive"
                        >
                            <Undo width={16} /> Qaytarish
                        </DropdownMenuItem>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
        :   <div className={cn("flex items-center gap-3 py-2", className)}>
                {onEdit && (
                    <Button
                        icon={<SquarePen color="blue" size={16} />}
                        size="sm"
                        className="p-0 h-3"
                        variant="ghost"
                        onClick={onEdit}
                    ></Button>
                )}
                {onDelete && (
                    <Button
                        icon={<Trash2 color="red" size={16} />}
                        size="sm"
                        className="p-0 h-3"
                        variant="ghost"
                        onClick={onDelete}
                    ></Button>
                )}
                {onUndo && (
                    <Button
                        icon={<Undo color="red" size={16} />}
                        size="sm"
                        className="p-0 h-3"
                        variant="ghost"
                        onClick={onUndo}
                    ></Button>
                )}
            </div>
}
