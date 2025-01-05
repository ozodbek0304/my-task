import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "../ui/button"
import { DialogClose } from "../ui/dialog"

type Props = {
    loading?: boolean
    modalKey?: string
    className?: string
    disabled?: boolean
}

export default function FormAction({ loading, disabled, className }: Props) {
    return (
        <div
            className={cn(
                "flex items-center justify-end gap-2 mt-3",
                className,
            )}
        >
            <DialogClose disabled={disabled || loading}>
                <div className={cn(buttonVariants({ variant: "outline" }))}>
                    Orqaga
                </div>
            </DialogClose>
            <Button loading={loading} type="submit" disabled={disabled}>
                Saqlash
            </Button>
        </div>
    )
}
