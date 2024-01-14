import { Typography } from '@mui/material'
import React from 'react'

const List = ({ title, value }) => {
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      height: 'fit-content',
      alignItems: 'center',
      gap: '1vw'
    }}>
      <Typography sx={{
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '600',
        width: '35%'
      }}>{title}</Typography>
      <span>:</span>
      <Typography sx={{
        width: '100%',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '500',
      }}>{value}</Typography>
    </div>
  )
}

export default List
