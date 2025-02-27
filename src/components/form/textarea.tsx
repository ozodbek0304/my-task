import { cn } from "@/lib/utils"
import { FieldValues, Path, UseFormReturn } from "react-hook-form"
import { ClassNameValue } from "tailwind-merge"
import ErrorMessage from "../ui/error-message"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"

interface IProps<IForm extends FieldValues> {
    methods: UseFormReturn<IForm>
    name: Path<IForm>
    label?: string
    wrapperClassName?: ClassNameValue
    hideError?: boolean
    required?: boolean
}

export default function FormTextarea<IForm extends FieldValues>({
    methods,
    name,
    label,
    wrapperClassName,
    className,
    hideError = false,
    required = false,
    ...props
}: IProps<IForm> & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
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
    const { disabled, ...otherProps } = props

    return (
        <fieldset
            className={cn("flex flex-col gap-2 w-full", wrapperClassName)}
        >
            {label && (
                <Label
                    htmlFor={name}
                    className={cn(
                        !!errors?.[name] && "text-destructive",
                        "cursor-pointer",
                    )}
                >
                    {label}
                </Label>
            )}
            <Textarea
                {...reg}
                {...otherProps}
                disabled={disabled || methods.formState.disabled}
                placeholder={props.placeholder || label}
                id={name}
                className={
                    !!errors?.[name] && !label ?
                        "border-destructive focus:border-border !ring-destructive"
                    :   ""
                }
            />
            {!hideError && errors[name] && (
                <ErrorMessage className="-mt-1">
                    {errors[name]?.message as string}
                </ErrorMessage>
            )}
        </fieldset>
    )
}
