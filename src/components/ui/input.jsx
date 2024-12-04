import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-10 font-primary border border-white/10 focus:border-accent dark:bg-black bg-white px-4 py-5 text-base placeholder:text-placeholder dark:text-white text-black outline-none",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
