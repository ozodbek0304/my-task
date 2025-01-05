import { CalendarProps } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import {
    Controller,
    FieldValues,
    Path,
    useController,
    UseFormReturn,
} from "react-hook-form"
import { ClassNameValue } from "tailwind-merge"
import { DateMultiPicker } from "../ui/date-multi-picker"
import ErrorMessage from "../ui/error-message"
import { Label } from "../ui/label"

interface FormDateMultiPickerProps<IForm extends FieldValues> {
    methods: UseFormReturn<IForm>
    name: Path<IForm>
    placeholder?: string
    fullWidth?: boolean
    disabled?: boolean
    defaultMonth?: Date
    label?: string
    className?: ClassNameValue
    hideError?: boolean
    required?: boolean
}

export default function FormDateMultiPicker<IForm extends FieldValues>({
    methods,
    name,
    placeholder = "Select dates",
    fullWidth,
    disabled,
    defaultMonth,
    label,
    className,
    hideError = false,
    required = false,
    ...calendarProps
}: FormDateMultiPickerProps<IForm> & CalendarProps) {
    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control: methods.control,
        rules: {
            required: {
                value: required,
                message: `${label}ni tanlang`,
            },
        },
    })

    return (
        <fieldset className={cn("flex flex-col gap-1", className)}>
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
                    <DateMultiPicker
                        dates={field.value}
                        setDates={field.onChange}
                        placeholder={placeholder}
                        disabled={field.disabled || disabled}
                        fullWidth={fullWidth}
                        defaultMonth={defaultMonth}
                        {...calendarProps}
                    />
                )}
            />
            {!hideError && error && (
                <ErrorMessage>{error?.message}</ErrorMessage>
            )}
        </fieldset>
    )
}
