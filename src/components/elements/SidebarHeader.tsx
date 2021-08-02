import React from 'react'
import { FaSlack } from 'react-icons/fa'

export const SidebarHeader = () => {
  return (
    <div className="flex flex-row items-center">
      <FaSlack className="w-8 h-8 mr-2" />
      <h2 className="font-bold text-2xl">Flack</h2>
    </div>
  )
}
