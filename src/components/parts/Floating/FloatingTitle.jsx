import { Typography } from '@mui/material'
import React from 'react'
import WPL from '../../../assets/users.jpg'

const FloatingTitle = ({ title, caption}) => {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url(${WPL})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat'
    }}>
      {title ? <Typography variant='h4' sx={{ color: '#fff', fontWeight: '600'}}>{title}</Typography> : null}
      {caption ? <Typography variant='caption' sx={{ color: '#fff', marginBottom: '5%'}}>{caption}</Typography> : null}
    </div>
  )
}

export default FloatingTitle
