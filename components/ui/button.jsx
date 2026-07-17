import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/25",
        secondary: "bg-zinc-900/[0.06] text-zinc-900 border border-zinc-900/10 hover:bg-zinc-900/10 dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/20 backdrop-blur-sm",
        outline: "border border-zinc-300 bg-transparent text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
        ghost: "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-900/5 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5",
        gradient: "bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-700 hover:to-violet-700 shadow-lg shadow-blue-500/25",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = "Button"

export { Button, buttonVariants }
