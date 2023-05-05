import React from 'react'
import { GuestBody1 } from './body.styled'

const GuestBody = ({ children, BG }) => {
  return (
    <GuestBody1 IMG={BG}>
      {children}
    </GuestBody1>
  )
}

export default GuestBody
