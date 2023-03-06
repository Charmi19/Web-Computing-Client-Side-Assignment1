import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

 
        
 export default function Getsymbols({match}){
        
        const [rowData, setRowData] = useState([]);
        const symbol = match.params.symbol;
        const columns = [
            { headerName: "Timestamp", field: "timestamp", sortable: true, filter: true },
            { headerName: "Symbols", field: "symbol", sortable: true, filter: true },
            { headerName: "Name", field: "name", sortable: true, filter: true },
            { headerName: "Industry", field: "industry", sortable: true, filter: true },
            { headerName: "Open", field: "open", sortable: true, filter: true },
            { headerName: "High", field: "high", sortable: true, filter: true },
            { headerName: "Low", field: "low", sortable: true, filter: true },
            { headerName: "Close", field: "close", sortable: true, filter: true },
            { headerName: "Volume", field: "volumes", sortable: true, filter: true },
          ];
        
        
      useEffect(()=>{
   const url = `http://131.181.190.87:3000/stocks/${symbol}`;
          console.log(url);
          fetch(url) 
          .then(res => res.json())
          .then((stock)=> setRowData([stock]));
      
      }, [])
  
        
      return (
        <div className="container">
          <h1>Quotes</h1>
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
               />
          </div>
        </div>
      );
    
   } 

   