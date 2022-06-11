import React, { FC } from 'react'

const Loading:FC<{resourceName?: string}> = ({resourceName = ''}) => (<div data-testid={`loading-${resourceName.toLowerCase()}`}>Loading {resourceName}</div>)

export default Loading