import React, { FC } from 'react'
import cn from "classnames";

interface ButtonProps {
    icon?: React.ReactNode
    onClick?: React.EventHandler<React.MouseEvent>
    className?: string
}

const styleClasses = 'my-2 flex flex-row items-center bg-white px-4 py-2 rounded-md transition-all shadow-sm hover:bg-opacity-90'

export const Button: FC<ButtonProps> = ({children,  icon, className, onClick}) => {
    return (
        <button onClick={onClick} className={cn(styleClasses, className)}>
            <span className="mr-2" >{icon}</span>
            {children}
        </button>
    )
}
