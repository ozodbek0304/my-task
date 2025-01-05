import { useModal } from "@/hooks/use-modal"
import { useDelete } from "@/services/default-requests"
import { useQueryClient } from "@tanstack/react-query"
import { ReactNode } from "@tanstack/react-router"
import { Button } from "../ui/button"
import {
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog"
import Modal from "./modal"

interface IProps {
    path: string
    id: string | number
    name?: ReactNode
    onSuccessAction?: () => void
    modalKey?: string
    refetch?: boolean
}

export default function DeleteModal({
    path,
    id,
    name = "",
    onSuccessAction,
    modalKey = "delete",
    refetch = true,
}: IProps) {
    const { closeModal } = useModal(modalKey)
    const queryClient = useQueryClient()

    const { mutate, isPending } = useDelete({
        onSuccess: () => {
            // toast.success("Muvaffaqiyatli o'chirildi")
            if (onSuccessAction) {
                onSuccessAction()
            }
            if (refetch) {
                queryClient.refetchQueries({ queryKey: [path] })
            }
            closeModal()
        },
    })

    const handleDelete = () => {
        mutate(path + `/${id}`)
    }

    return (
        <Modal modalKey={modalKey}>
            <DialogHeader>
                <DialogTitle className="font-normal">
                    Siz haqiqatdan ham {name} o'chirishni xohlaysizmi ?
                </DialogTitle>
                <DialogDescription>
                    Bu qaytarib bo'lmas jarayon!!!
                </DialogDescription>
            </DialogHeader>
            <DialogFooter className="grid grid-cols-2 gap-2">
                <Button
                    variant={"outline"}
                    disabled={isPending}
                    onClick={closeModal}
                >
                    Orqaga
                </Button>
                <Button
                    variant={"destructive"}
                    onClick={handleDelete}
                    loading={isPending}
                >
                    O'chirish
                </Button>
            </DialogFooter>
        </Modal>
    )
}
