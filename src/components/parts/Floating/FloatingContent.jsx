import React from 'react'

const FloatingContent = ({ children }) => {
  return (
    <div style={{
      display: 'flex',
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {children}
    </div>
  )
}

export default FloatingContent
