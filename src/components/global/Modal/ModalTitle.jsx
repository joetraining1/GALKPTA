import React from 'react'
import { ModalTitles } from './modal.styled'

const ModalTitle = ({children}) => {
  return (
    <ModalTitles>
      {children}
    </ModalTitles>
  )
}

export default ModalTitle
