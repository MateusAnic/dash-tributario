import React from "react";
import { TitlePage, ContainerDashboard } from "../styles";
import { DashboardTable } from "../../components/MaterialTable";

const DashboardPage: React.FC = () => {
  return (
    <ContainerDashboard>
      <TitlePage variant="h1">Acompanhamento de Cliente : Anônimo</TitlePage>
      <DashboardTable />
    </ContainerDashboard>
  );
};

export { DashboardPage };
