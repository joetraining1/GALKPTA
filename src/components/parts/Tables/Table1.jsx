import React from 'react'
import { DataGrid } from '@mui/x-data-grid'

const Table1 = ({ column, rows }) => {
  return (
    <React.Fragment>
      {column && rows ? <DataGrid rows={rows} columns={column}/> : 'data tidak ada'}
    </React.Fragment>
  )
}

export default Table1
