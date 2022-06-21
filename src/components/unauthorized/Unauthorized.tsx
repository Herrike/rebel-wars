import React, { FC } from 'react'

const Unauthorized: FC = () => {
  return (
    <div className='unauthorized'>
      <h2>[ ! ] Unauthorized</h2>
      <p>
        On behalf of the Admiral and the Princess, any attempt to use this system from terminals
        with resolution less than 1024 is prohibited and punished by banishment from the Alliance.
      </p>
    </div>
  )
}

export default Unauthorized
