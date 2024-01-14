import { MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'

const OffDutyForm = () => {
    const payItem = [
        0,
        1,
        2,
        3
    ]
  return (
    <React.Fragment>
      <Typography sx={{
        fontFamily: 'Poppins,sans-serif',
        fontWeight: '600'
      }}>Ajukan Off-Duty</Typography>
      <TextField
        select
        label="Pembayaran"
        FormHelperTextProps={{
          sx: {
            color: "#ff0000",
          },
        }}
        value={0}
        defaultValue={0}
        sx={{ width: "100%" }}
        size="small"
      >
        {payItem.map((item, index) => {
          return (
            <MenuItem
              key={index}
              value={index}
              onClick={() =>
                setPayId({
                  id: item.id,
                  title: item.title,
                })
              }
            >
              {index}
            </MenuItem>
          );
        })}
      </TextField>
    </React.Fragment>
  )
}

export default OffDutyForm
