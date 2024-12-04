'use client'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

const TooltipComponent = ({trigger, content, className}) => {
  return (
    
    <TooltipProvider delayDuration={100}>
    <Tooltip>
        <TooltipTrigger className={className}>
            {trigger}
        </TooltipTrigger>
        <TooltipContent>
            <p>{content}</p>
        </TooltipContent>
    </Tooltip>
</TooltipProvider>
  )
}

export default TooltipComponent