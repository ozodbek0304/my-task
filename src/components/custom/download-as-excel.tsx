import { downloadExcel } from "@/lib/download-excel"
import { onError } from "@/lib/onError"
import { Download } from "lucide-react"
import { Button } from "../ui/button"
import { useGet } from "@/services/http"

const DownloadAsExcel = ({ url, name }: { url: string; name: string }) => {
    const { refetch, isFetching } = useGet(url, {
        options: { enabled: false },
        config: { responseType: "blob" },
    })

    const trigger = async () => {
        const { data, isSuccess, isError, error } = await refetch()
        if (isSuccess) {
            downloadExcel({ data, name })
        }
        if (isError) {
            onError(error)
        }
    }

    return (
        <Button
            variant="outline"
            icon={<Download width={16} />}
            loading={isFetching}
            onClick={trigger}
        >
            Yuklab olish
        </Button>
    )
}

export default DownloadAsExcel
