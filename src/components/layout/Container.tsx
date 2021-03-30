import React, { FC } from 'react'

export const Container: FC = ({children}) => {
    return (
        <div className="min-h-screen bg-primary-600">
            <div className="max-w-screen-xl mx-auto">
              {children}
            </div>
        </div>
    )
}
