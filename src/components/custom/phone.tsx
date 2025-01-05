import { ClassNameValue } from "tailwind-merge"

export default function Phone({
    phone,
    className,
}: {
    phone: string
    className?: ClassNameValue
}) {
    return (
        <a href={`tel:${phone}`} className={`${className}`}>
            {phone}
        </a>
    )
}
