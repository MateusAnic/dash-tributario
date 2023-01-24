import React, { useState, useEffect } from "react";
import { TitlePage, ContainerDashboard, ContentPage } from "../styles";
import { DashboardTable } from "../../components/MaterialTable";
import { SideBarDashboard } from "../../components";
import { SelectDashboard } from "../../components/Select";
import { User } from "../../components";

const DashboardPage: React.FC = () => {
  interface Data {
    userId: number;
    id: number;
    title: string;
    completed: Boolean;
  }

  const [data, setData] = useState(Array<Data>);



  return (
    <ContentPage>
      <SideBarDashboard />
      <ContainerDashboard>
        <TitlePage variant="h1">Acompanhamento de Cliente : Anônimo</TitlePage>
        <SelectDashboard data={["Arroz", "Feijão", "Salada", "Fruta"]} label="COmidinhas" type="default" />
        <DashboardTable dataSource={data} />
      </ContainerDashboard>
    </ContentPage>
  );
};

export { DashboardPage };
