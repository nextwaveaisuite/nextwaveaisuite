import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-black text-white hover:bg-black/90 focus-visible:ring-black",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-400",
        outline:
          "border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 focus-visible:ring-gray-400",
        ghost:
          "bg-transparent text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-400",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
        link: "bg-transparent text-blue-600 underline-offset-4 hover:underline focus-visible:ring-blue-600",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
