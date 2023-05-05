import { Button, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Unaouthorized = () => {
    const navigate = useNavigate();
  return (
    <div>
      {'Ga punya akses'}
      <Button variant='outlined' onClick={() => navigate(-1)}><Typography variant='button'>Go Back</Typography></Button>
    </div>
  )
}

export default Unaouthorized
