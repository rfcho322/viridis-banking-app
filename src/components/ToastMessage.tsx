import React from 'react'
import { toast } from './ui/use-toast'
import { CircleAlert, CircleCheckBig } from 'lucide-react'

// CUSTOM TOAST MESSAGE
const ToastMessage = ({ type, message }: ToastMessageProps) => {
    toast({
        variant: type,
        description: (
            <div className='flex items-center gap-4'>
                <span>
                    {type === "success"
                        ? <CircleCheckBig />
                        : type === "destructive"
                            ? <CircleAlert />
                            : null
                    }
                </span>
                <span>{message}</span>
            </div>
        ),
    })
}

export default ToastMessage