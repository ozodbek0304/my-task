import { cn } from "@/lib/utils"
import { FieldValues, Path, UseFormReturn } from "react-hook-form"
import { ClassNameValue } from "tailwind-merge"
import ErrorMessage from "../ui/error-message"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

interface IProps<IForm extends FieldValues> {
    methods: UseFormReturn<IForm>
    name: Path<IForm>
    label?: string
    wrapperClassName?: ClassNameValue
    hideError?: boolean
    required?: boolean
}

export default function FormInput<IForm extends FieldValues>({
    methods,
    name,
    label,
    wrapperClassName,
    hideError = false,
    required = false,
    ...props
}: IProps<IForm> & React.InputHTMLAttributes<HTMLInputElement>) {
    const {
        register,
        formState: { errors },
    } = methods

    const reg = register(name, {
        required: {
            value: required,
            message: `${label}ni kiriting`,
        },
    })

    return (
        <fieldset
            className={cn("flex flex-col gap-1 w-full", wrapperClassName)}
        >
            {label && (
                <Label
                    htmlFor={name}
                    className={cn(
                        !!errors?.[name] && "text-destructive",
                        "cursor-pointer",
                        "text-base font-semibold",
                    )}
                >
                    {label}
                </Label>
            )}
            <Input
                type={"text"}
                placeholder={label}
                id={name}
                {...reg}
                {...props}
                fullWidth
            />
            {!hideError && errors[name] && (
                <ErrorMessage>{errors[name]?.message as string}</ErrorMessage>
            )}
        </fieldset>
    )
}
