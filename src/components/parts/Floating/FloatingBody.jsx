import { useMediaQuery } from 'react-responsive'
import React from 'react'
import { FloatBody } from './floating.styled'

const FloatingBody = ({ children }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)'});

  return (
    <FloatBody height={isMobile ? 70 : 60} width={isMobile ? 90 : 60}>
      {children}
    </FloatBody>
  )
}

export default FloatingBody
