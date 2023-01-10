import React, { useState, useRef } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react/lib/agGridReact";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const DataGridEdit = () => {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);

  const [columnDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ]);

  const gridRef = useRef(null);

  const [gridApi, setGridApi] = useState<any>(null);
  const [gridColumnApi, setGridColumnApi] = useState<any>(null);

  const onGridReady = (params: any) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  const teste = () => {
    gridApi?.applyTransaction({ add: [{}] });
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <button onClick={() => teste()}>teste</button>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        rowSelection={"multiple"}
        rowMultiSelectWithClick={true}
        columnDefs={columnDefs}
        onGridReady={onGridReady}
      ></AgGridReact>
    </div>
  );
};
export { DataGridEdit };
