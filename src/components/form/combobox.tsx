import { Combobox } from "@/components/ui/combobox"
import { cn } from "@/lib/utils"
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

export default function FormCombobox<IForm extends FieldValues>({
    name,
    label,
    options,
    disabled,
    placeholder,
    methods,
    onAddNew,
    hideError = false,
    returnValue = "id",
    wrapperClassName,
    addNew,
    required = false,
}: IProps<IForm>) {
    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control: methods?.control,
        rules: {
            required: {
                value: required,
                message: `${label}ni tanlang`,
            },
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
                    <Combobox
                        options={options}
                        value={field.value || ""}
                        setValue={(val) => {
                            if (val === "new") {
                                onAddNew?.("new")
                            } else {
                                field.onChange(val)
                            }
                        }}
                        label={placeholder || label || "Tanlang"}
                        disabled={field.disabled || disabled}
                        isError={!label && !!error}
                        returnValue={returnValue}
                        addNew={addNew}
                    />
                )}
            />
            {!hideError && !!error && (
                <ErrorMessage>{error?.message}</ErrorMessage>
            )}
        </fieldset>
    )
}

interface IProps<IForm extends FieldValues> {
    label?: string
    placeholder?: string
    options: { name: string | number; id: string | number }[] | undefined
    disabled?: boolean
    onAddNew?: (val: string | number) => void
    methods: UseFormReturn<IForm>
    name: Path<IForm>
    hideError?: boolean
    returnValue?: "name" | "id"
    wrapperClassName?: ClassNameValue
    addNew?: boolean
    required?: boolean
}
