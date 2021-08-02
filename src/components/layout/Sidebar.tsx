import React from 'react'

import { Channels } from '../../features/channels/Channels'
import { SidebarHeader } from '../elements/SidebarHeader'

export const Sidebar = () => {
  return (
    <aside className="bg-primary-700 text-white w-60 py-3 px-4">
      <SidebarHeader />
      <Channels />
    </aside>
  )
}
