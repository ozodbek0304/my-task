/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useSearch } from "@tanstack/react-router"
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
    const navigate = useNavigate()
    const params: any = useSearch({ from: "__root__" })

    const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = e.target.value

        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current)
        }
        debounceTimeoutRef.current = setTimeout(() => {
            if (newSearchTerm) {
                navigate({
                    search:
                        clearOthers ?
                            ({
                                q: newSearchTerm,
                                search: params?.search,
                            } as any)
                        :   {
                                ...params,
                                q: newSearchTerm,
                            },
                })
            } else {
                navigate({
                    search: { ...params, q: undefined, search: undefined },
                })
            }
        }, 300)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const searchValue = inputRef.current?.value
            if (searchValue) {
                navigate({
                    search:
                        clearOthers ?
                            ({
                                search: searchValue,
                                q: searchValue,
                            } as any)
                        :   {
                                ...params,
                                search: searchValue,
                                q: searchValue,
                            },
                })
            } else {
                navigate({
                    search: { ...params, q: undefined, search: undefined },
                })
            }
        }
    }

    useEffect(() => {
        if (params.search || params.q) {
            if (inputRef.current) {
                inputRef.current.value = params.q || params.search || ""
            }
        } else {
            if (inputRef.current) {
                inputRef.current.value = ""
            }
        }
    }, [params.search, params.q])

    return (
        <>
            <Input
                placeholder={placeholder || "Qidiruv..."}
                type="search"
                className={`${className}`}
                fullWidth={fullWidth}
                ref={inputRef}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
        </>
    )
}

interface ParamInputProps {
    className?: ClassNameValue
    fullWidth?: boolean
    clearOthers?: boolean
    placeholder?: string
}
