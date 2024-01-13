import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useMediaQuery } from "react-responsive";

const Table1 = ({ column, rows, loading }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  return (
    <React.Fragment>
      {column && rows ? (
        <DataGrid
          sx={{
            width: isMobile ? "100%" : "100%",
            padding: "1vw",
            backgroundColor: '#fff'
          }}
          rows={rows}
          columns={column}
          loading={loading}
          autoHeight={false}
          pageSizeOptions={[10, 25, 50, 100]}
          initialState={{
            pagination: {
                paginationModel: {pageSize: 10, page: 0}
            }
          }}
          
        />
      ) : (
        "data tidak ada"
      )}
    </React.Fragment>
  );
};

export default Table1;
