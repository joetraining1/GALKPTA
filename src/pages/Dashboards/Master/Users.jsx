import React from 'react'
import ContentBody from '../../../components/main/Content/MainContent/ContentBody'
import ContentHead from '../../../components/main/Content/MainContent/ContentHead'
import Table1 from '../../../components/parts/Tables/Table1'
import ContentTitle from '../../../components/main/Content/MainContent/ContentTitle'

const Users = () => {
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: 'fit-content',
      minHeight: '63svh',
      padding: '1vw',
      flexDirection: 'column',
      backgroundColor: "#EEF0F2",
      gap: '1vw'
    }}>
     <ContentTitle cTitle={"Kelola Data Internal Pegawai"}/>
    
    </div>
  )
}

export default Users
