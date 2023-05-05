import React from 'react'
import { ModalFooters } from './modal.styled'
import { useMediaQuery } from 'react-responsive'

const ModalFooter = ({ children }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)'});

  return (
    <ModalFooters JC={isMobile ? 'space-evenly' : 'flex-end'} MR={isMobile ? 0 : 10} style={{ gap: isMobile ? 'null' : '2vw' }}>
      {children}
    </ModalFooters>
  )
}

export default ModalFooter
