import React from 'react'
import { FaPlus } from 'react-icons/fa'

export const ChannelGroupHeader = () => {
  const handleChannelCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = prompt('Enter new channel name')
  }

  return (
    <div className="flex items-center pt-6 pb-4">
      <h4 className="text-sm flex flex-grow">CHANNELS</h4>
      <button
        className="flex bg-primary-600 rounded-sm h-6 w-6 items-center justify-center hover:bg-primary-800 transition"
        onClick={handleChannelCreate}
      >
        <FaPlus className="w-3 h-3" />
      </button>
    </div>
  )
}
