import React from "react";
import { TitlePage, ContainerDashboard } from "../styles";
import { DataGridComponent } from "./DataGrid";

const DashboardPage: React.FC = () => {
  return (
    <ContainerDashboard>
      <TitlePage variant="h1">Acompanhamento de Cliente : Anônimo</TitlePage>
      <DataGridComponent />
    </ContainerDashboard>
  );
};

export { DashboardPage };
