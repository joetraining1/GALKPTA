import React from 'react'
import ContentHead from '../../../components/main/Content/MainContent/ContentHead'
import ContentBody from '../../../components/main/Content/MainContent/ContentBody'
import { Card, Typography } from '@mui/material'
import Table1 from '../../../components/parts/Tables/Table1'

const Requests = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "fit-content",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1vw",
        flex: "wrap",
        marginBottom: "3vw",
        background: "#fff",
        padding: '1vw'
      }}
    >
      <ContentHead styles={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 'fit-content',
        minHeight: '20vh',
      }}>
        <Typography variant='h4' sx={{ fontWeight: '600'}}>Pusat Bantuan</Typography>
        <Typography variant='body1'>kelola permintaan dari pegawai CV. Karya Abadi</Typography>
      </ContentHead>
      <ContentBody divStyle={{
        display: 'flex',
        height: 'fit-content',
        minHeight: '70vh'
      }}>
      <Table1 />
      </ContentBody>
    </div>
  )
}

export default Requests
