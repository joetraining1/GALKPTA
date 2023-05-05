import React, { useState } from 'react'
import Footer from '../../global/Footer'
import Sidebar from '../../global/Sidebar'
import { MainBody } from './content.styled'
import MainContent from './MainContent'
import { useMediaQuery } from 'react-responsive'

const Content = ({ children }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)'});
  return (
    <MainBody MT={isMobile ? 9 : 7}>
      {children}
    </MainBody>
  )
}

export default Content
