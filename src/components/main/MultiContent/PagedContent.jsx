import { Box, Pagination, PaginationItem } from "@mui/material";
import React, { useState } from "react";
import CardBody from "../Cards";
import CardTitle from "../Cards/CardTitle";
import CardContent from "../Cards/CardContent";

const PagedContent = ({ pData }) => {
  const [pageActive, setPageActive] = useState(0);

  const handleChangePage = (event, value) => {
    setPageActive(value - 1);
  };

  const MultiArray = (arr, rows) => {
    const ArrSlice = arr.reduce((acc, val, ind) => {
      const currentRow = Math.floor(ind / rows);
      if (!acc[currentRow]) {
        acc[currentRow] = [val];
      } else {
        acc[currentRow].push(val);
      }
      return acc;
    }, []);
    const SortedArr = ArrSlice.map((item, index) => {
      return {
        pId: index,
        dataset: item,
      };
    });

    return SortedArr;
  };

  const Hero = MultiArray(pData, 10);

  return (
    <Box
      sx={{
        display: "flex",
        height: "fit-content",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1vw",
          padding: "1vw",
          width: "100%",
          height: "fit-content",
          justifyContent: "center",
          marginTop: "2vh",
        }}
      >
        <Pagination
          count={Hero.length}
          page={pageActive + 1}
          onChange={handleChangePage}
          color="secondary"
          renderItem={(item) => (
            <PaginationItem {...item}/>
          )}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "fit-content",
          width: "100%",
          flexWrap: "wrap",
          gap: "2vh",
          justifyContent: "space-evenly",
          minHeight: "25svh",
        }}
      >
        {Hero.map((pages) => {
          if (pageActive === pages.pId) {
            return pages.dataset.map((pItem, index) => {
              return (
                <CardBody key={index} inx={index}>
                  <div
                    style={{
                      width: "3%",
                      height: "100%",
                      backgroundColor: "grey",
                    }}
                  ></div>
                  <CardTitle />
                  <CardContent text={`${index + 1}`} />
                </CardBody>
              );
            });
          }
          return null;
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1vw",
          padding: "1vw",
          width: "100%",
          height: "fit-content",
          justifyContent: "center",
          marginTop: "2vh",
        }}
      >
        <Pagination
          count={Hero.length}
          page={pageActive + 1}
          onChange={handleChangePage}
          color="secondary"
        />
      </Box>
    </Box>
  );
};

export default PagedContent;
