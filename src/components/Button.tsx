import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"
import { Spinner } from "./Spinner"

type ButtonProps<C extends ElementType> = {
as?: C
variant?: "primary" | "secondary" | "outline"
size?: "sm" | "md" | "lg"
isLoading?: boolean
loadingText?: string
leftIcon?: ReactNode
rightIcon?: ReactNode
children: ReactNode
} & ComponentPropsWithoutRef<C>

const defaultElement = "button"

export const Button = forwardRef(function Button<C extends ElementType = typeof defaultElement>(
{
    as,
    variant = "primary",
    size = "md",
    isLoading = false,
    loadingText,
    leftIcon,
    rightIcon,
    className = "",
    disabled,
    children,
    ...props
}: ButtonProps<C>,
ref: any
) {
const Component = as || defaultElement

const baseStyles = "inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors"

const sizeStyles = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
}

const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-400",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 disabled:bg-gray-400", 
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-400"
}

const isDisabled = isLoading || disabled

return (
    <Component
    ref={ref}
    disabled={isDisabled}
    className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    {...props}
    >
    {isLoading && (
        <>
        <Spinner
            size={size === "lg" ? "md" : "sm"}
            className={loadingText ? "mr-2" : ""}
        />
        {loadingText}
        </>
    )}
    {!isLoading && (
        <>
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
    )}
    </Component>
)
})

Button.displayName = "Button"
