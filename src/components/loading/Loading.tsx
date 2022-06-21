import React, { FC } from 'react'

const Loading: FC<{ resourceName?: string }> = ({ resourceName }) => {
  const name = !resourceName ? 'resources' : resourceName
  return <div data-testid={`loading-${name.toLowerCase()}`}>Scanning for {name}</div>
}

export default Loading
