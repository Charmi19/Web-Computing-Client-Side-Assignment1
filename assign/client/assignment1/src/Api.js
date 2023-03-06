import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { Button, Badge } from "reactstrap";
import Quotes from "./Quotes";


export default function useStocks({history}) {
  const [rowData, setRowData] = useState([]);

    const columns = [
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Symbol", field: "symbol", sortable: true, filter: true },
    { headerName: "Industry", field: "industry", sortable: true, filter: true },
  ];

  
  useEffect(() => {
    fetch("http://131.181.190.87:3000/stocks/symbols")
      .then((res) => res.json())
        .then((data) => data)
      .then((data) =>
        data.map((stock) => ({
          name: stock.name,
          symbol: stock.symbol,
          industry: stock.industry,
        }))
      )
      .then((companies) => setRowData(companies));
  }, []); 

     
  return (
    <div className="container">
     
      <h1>Stocks</h1>
      <p>
        <Badge color="success">{rowData.length}</Badge> The Stocks Client
        Application
      </p>
      <div
        className="ag-theme-balham"
        style={{
          height: "300px",
          width: "800px",
        }}
      >
        <br />
        <h2> Search for Stocks by Industry</h2>
        <br />
        <br />
        <AgGridReact
          columnDefs={columns}
          rowData={rowData}
          pagination={true}
          paginationPageSize={10}
           onRowClicked={rowData => {
            console.log(rowData.data.symbol);
            history.push(`/Quotes/${rowData.data.symbol}`)
          }}
        />
      </div>
    </div>
  );
}

