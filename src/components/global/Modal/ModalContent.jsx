import React from 'react'
import { ModalContents } from './modal.styled'

const ModalContent = ({ children }) => {
  return (
    <ModalContents>
      {children}
    </ModalContents>
  )
}

export default ModalContent
