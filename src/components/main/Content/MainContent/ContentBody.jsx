import React from 'react'
import { useMediaQuery } from 'react-responsive'

const ContentBody = ({ divStyle, children}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)'});

  return (
    <div style={divStyle ? divStyle : null}>
      {children}
    </div>
  )
}

export default ContentBody;
