import React from 'react'
import { useSelector } from 'react-redux'
import { channelSelector } from './channel.slice'
import { useFirestoreConnect } from 'react-redux-firebase'

type Channels = {
  [key: string]: { name: string }
}

interface ListItemProps {
  name: string
}

const ListItem = ({ name }: ListItemProps) => (
  <li className="flex cursor-pointer my-1.5 hover:bg-primary-600 rounded-sm px-1 py-1">
    <span>#</span>&nbsp;
    {name}
  </li>
)

export const ChannelList = () => {
  useFirestoreConnect({
    collection: 'channels',
    storeAs: 'channels',
  })

  const channels: Channels = useSelector(channelSelector) || {}

  return (
    <ul className="text-sm">
      {Object.entries(channels).map(([id, c]) => (
        <ListItem key={id} name={c.name} />
      ))}
    </ul>
  )
}
