import { cn } from "@/lib/utils"
import { useMemo } from "react"
import {
    Controller,
    FieldValues,
    Path,
    useController,
    UseFormReturn,
} from "react-hook-form"
import { ClassNameValue } from "tailwind-merge"
import ErrorMessage from "../ui/error-message"
import { Label } from "../ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select2"

interface SelectOption {
    name: string | number
    id?: string | number
}

interface IProps<IForm extends FieldValues> {
    methods: UseFormReturn<IForm>
    name: Path<IForm>
    options?: SelectOption[]
    label?: string
    placeholder?: string
    wrapperClassName?: ClassNameValue
    hideError?: boolean
    returnValue?: "name" | "id"
    disabled?: boolean
    required?: boolean
}


export default function FormSelect<IForm extends FieldValues>({
    methods,
    name,
    options,
    label,
    placeholder,
    wrapperClassName,
    hideError = false,
    required = false,
    returnValue,
    disabled,
}: IProps<IForm>) {
    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control: methods.control,
        rules: {
            required: {
                value: required,
                message: `${label || placeholder}ni tanlang`,
            },
        },
    })

    const lastReturnValue = useMemo(
        () => returnValue || (options?.[0]?.id ? "id" : "name"),
        [returnValue, options],
    )

    return (
        <fieldset
            className={cn("flex flex-col gap-1 w-full", wrapperClassName)}
        >
            {label && (
                <Label
                    htmlFor={name}
                    className={cn(
                        !!error && "text-destructive",
                        "cursor-pointer",
                        "text-base font-semibold",
                    )}
                >
                    {label}
                </Label>
            )}
            <Controller
                name={name}
                control={methods.control}
                render={() => (
                    <>
                        <Select
                            value={field.value?.toString() || ""}
                            onValueChange={(v) => {
                                field.onChange(Number(v))
                            }}
                        >
                            <SelectTrigger
                                id={name}
                                disabled={disabled || field.disabled}
                            >
                                {(
                                    field.value ||
                                    typeof field.value === "number"
                                ) ?
                                    <SelectValue />
                                :   <p className="text-muted-foreground">
                                        {placeholder || label}
                                    </p>
                                }
                            </SelectTrigger>
                            <SelectContent>
                                {options?.map((option) => (
                                    <SelectItem
                                        key={option.id}
                                        value={
                                            option[
                                                lastReturnValue
                                            ]?.toString() || ""
                                        }
                                    >
                                        {option.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {!hideError && error && (
                            <ErrorMessage>{error.message!}</ErrorMessage>
                        )}
                    </>
                )}
            />
        </fieldset>
    )
}
