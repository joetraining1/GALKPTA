import { CardContent } from '@mui/material';
import React from 'react'
import CardBody from '../Cards';
import CardTitle from '../Cards/CardTitle';

const NonPaged = ({ pData }) => {
    if(!pData){
        return null;
    }

    return pData.map((item, index) => {
        return (
          <CardBody key={index} inx={index}>
            <div
              style={{ width: "3%", height: "100%", backgroundColor: "grey" }}
            ></div>
            <CardTitle title="admin" />
            <CardContent text={index + 1} />
          </CardBody>
        );
      });
}

export default NonPaged
