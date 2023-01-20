import React from "react";
import {
  TitlePage,
  ContainerDashboard,
  ContentPage,
  InputData,
  StyledButton,
} from "../../styles";
import { SideBarDashboard } from "../../../components";
import { SelectDashboard } from "../../../components/Select";
import Stack from "@mui/material/Stack";
import { DataGridEdit } from "../../../components";

const DreRegister: React.FC = () => {
  return (
    <ContentPage>
      <SideBarDashboard />
      <ContainerDashboard>
        <TitlePage variant="h1">Cadastro de DRE</TitlePage>
        <Stack spacing={2}>
          {/* <StyledButton
            style={{ maxWidth: 200 }}
            color="secondary"
            variant="contained"
          >
            Cadastrar
          </StyledButton> */}
          <DataGridEdit />
        </Stack>
      </ContainerDashboard>
    </ContentPage>
  );
};

export { DreRegister };
