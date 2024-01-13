import React from 'react'
import ContentTitle from '../../../components/main/Content/MainContent/ContentTitle'

const Rosters = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '63svh',
      height: 'fit-content',
      transition: 'all 0.3s ease',
      width: '100%',
      backgroundColor: "#EEF0F2",
      padding: '1vw',
      gap: '1vw',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }}>
      <ContentTitle cTitle={"Layanan Kelola Lemburan Aktif"}/>
      mengelola lemburan aktif
    </div>
  )
}

export default Rosters