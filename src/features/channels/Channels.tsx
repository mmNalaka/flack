import React from 'react'

import { ChannelList } from './ChannelList'
import { ChannelGroupHeader } from './ChannelGroupHeader'

export const Channels = () => {
  return (
    <div className="text-yellow-100">
      <ChannelGroupHeader />
      <ChannelList />
    </div>
  )
}
