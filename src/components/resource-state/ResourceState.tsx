import React, { FC } from 'react'

const Loading = React.lazy(() => import('../').then((module) => ({ default: module.Loading })))
const ApiError = React.lazy(() => import('../').then((module) => ({ default: module.ApiError })))

const ResourceState: FC<{ type: string; resourceName: string; error?: Error }> = ({
  type,
  resourceName,
  error
}) => {
  return (
    <>{type === 'loading' ? <Loading resourceName={resourceName} /> : <ApiError error={error} />}</>
  )
}

export default ResourceState
