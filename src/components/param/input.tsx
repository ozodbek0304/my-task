import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import { ClassNameValue } from "tailwind-merge"
import { Input } from "../ui/input"

export default function ParamInput({
    className,
    fullWidth,
    clearOthers = true,
    placeholder = "Qidiruv",
}: ParamInputProps) {
    const inputRef = useRef<HTMLInputElement>(null)
    const router: any = useRouter()
    const { query } = router

    const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = e.target.value

        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current)
        }
        debounceTimeoutRef.current = setTimeout(() => {
            if (newSearchTerm) {
                const updatedQuery = clearOthers
                    ? { q: newSearchTerm, search: query.search }
                    : { ...query, q: newSearchTerm }

                router.push({
                    pathname: router.pathname,
                    query: updatedQuery,
                })
            } else {
                router.push({
                    pathname: router.pathname,
                    query: { ...query, q: undefined, search: undefined },
                })
            }
        }, 300)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const searchValue = inputRef.current?.value
            if (searchValue) {
                const updatedQuery = clearOthers
                    ? { search: searchValue, q: searchValue }
                    : { ...query, search: searchValue, q: searchValue }

                router.push({
                    pathname: router.pathname,
                    query: updatedQuery,
                })
            } else {
                router.push({
                    pathname: router.pathname,
                    query: { ...query, q: undefined, search: undefined },
                })
            }
        }
    }

    useEffect(() => {
        if (query.search || query.q) {
            if (inputRef.current) {
                inputRef.current.value = query.q || query.search || ""
            }
        } else {
            if (inputRef.current) {
                inputRef.current.value = ""
            }
        }
    }, [query.search, query.q])

    return (
        <Input
            placeholder={placeholder || "Qidiruv..."}
            type="search"
            className={`${className}`}
            fullWidth={fullWidth}
            ref={inputRef}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
        />
    )
}

interface ParamInputProps {
    className?: ClassNameValue
    fullWidth?: boolean
    clearOthers?: boolean
    placeholder?: string
}
