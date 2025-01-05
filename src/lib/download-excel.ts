type Arg = {
    data: Blob
    name?: string
}

export function downloadExcel({ data, name = new Date().toISOString() }: Arg) {
    const blob = new Blob([data])
    const url = window.URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = name + ".xlsx"
    document.body.appendChild(a)
    a.click()
    a.remove()
    window.URL.revokeObjectURL(url)
}
