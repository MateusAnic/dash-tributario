import React, { useState, useRef, useEffect } from "react";
import { render } from "react-dom";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import { StyledButton } from "../../pages/styles";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useDispatch, useSelector } from "react-redux";
import { setDataGridData } from "../../store/dataGridSlices/actions";
import { RootState } from "../../store";

const DataGridEdit = () => {
  const [rowData, setRowData] = useState([
    { "Receitas Operacionais": "SERVIÇOS PRESTADOS" },
    { "Receitas Operacionais": "IMPOSTOS INCIDENTES S/ VENDAS" },
    { "Receitas Operacionais": "DESCONTOS INCONDICIONAIS" },
    { "Receitas Operacionais": "VENDAS CANCELADAS" },
    { "Receitas Operacionais": "RECEITA OPERACIONAL LIQUIDA" },
    { "Receitas Operacionais": "CUSTO" },
    { "Receitas Operacionais": "LUCRO BRUTO" },
    { "Receitas Operacionais": "DESPESAS COM PRESTAÇÃO DE SERVIÇO" },
    { "Receitas Operacionais": "DESPESAS ADMINISTRATIVAS" },
    { "Receitas Operacionais": "DESPESAS TRIBUTARIAS" },
    { "Receitas Operacionais": "RECEITAS FINANCEIRAS" },
    { "Receitas Operacionais": "DESPESAS FINANCEIRAS" },
    { "Receitas Operacionais": "RESULTADO OPERACIONAL" },
    { "Receitas Operacionais": "RECEITAS E DESPESAS NÃO OPERACIONAIS" },
    { "Receitas Operacionais": "GANHO CAPITAL VENDA ATIVO PERMANENTE" },
    { "Receitas Operacionais": "RECEITAS NÃO OPERACIONAIS" },
    { "Receitas Operacionais": "RESULTADO ANTES DOS IMPOSTOS E PARTICIPAÇÕES" },
    { "Receitas Operacionais": "PROVISÃO DE IRPJ" },
    { "Receitas Operacionais": "PROVISÃO DE CONTRIBUIÇÃO SOCIAL" },
    { "Receitas Operacionais": "LUCRO PREJUIZO PERIODO" },
  ]);

  const { data: dataGridData } = useSelector(
    (store: RootState) => store.dataGrid
  );

  const [columnDefs] = useState([
    {
      field: "Receitas Operacionais",
      width: 180,
    },
    {
      field: "Janeiro",
      width: 95,
      editable: true,
      enableRowGroup: true,
    },
    {
      field: "Fevereiro",
      width: 95,
      editable: true,
      enableRowGroup: true,
    },
    { field: "Março", width: 95, editable: true },
    { field: "Abril", width: 95, editable: true },
    { field: "Maio", width: 95, editable: true },
    { field: "Junho", width: 95, editable: true },
    { field: "Julho", width: 95, editable: true },
    { field: "Agosto", width: 95, editable: true },
    { field: "Setembro", width: 95, editable: true },
    { field: "Outubro", width: 95, editable: true },
    { field: "Novembro", width: 95, editable: true },
    { field: "Dezembro", width: 95, editable: true },
    { field: "Acumulado", width: 95, editable: true },
  ]);

  const gridRef = useRef(null);
  const dispatch = useDispatch();

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
    <div className="ag-theme-alpine" style={{ height: "600px" }}>
      <AgGridReact
        editType="fullRow"
        onCellValueChanged={() => console.log(rowData)}
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        onGridReady={onGridReady}
        autoGroupColumnDef={{ minWidth: 200 }}
        animateRows={true}
        singleClickEdit
        stopEditingWhenGridLosesFocus
      ></AgGridReact>
    </div>
  );
};
export { DataGridEdit };
