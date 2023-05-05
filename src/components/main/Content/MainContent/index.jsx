import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { MainWrapper } from '../content.styled'

const MainContent = ({ children }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)'});

  return (
    <MainWrapper ML={isMobile ? 0 : '18%'} lebar={isMobile ? 100 : 100}>
      {children}
    </MainWrapper>
  )
}

export default MainContent
