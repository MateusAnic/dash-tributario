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

const CostumerRegister: React.FC = () => {
  return (
    <ContentPage>
      <SideBarDashboard />
      <ContainerDashboard>
        <TitlePage variant="h1">Cadastro de Cliente</TitlePage>
        <Stack spacing={2}>
          <InputData
            label="Razão Social"
            variant="filled"
            required
            helperText="Insira a Razão Social acima."
            size="small"
          ></InputData>
          <InputData
            label="CNPJ"
            variant="filled"
            required
            helperText="Insira o CNPJ acima."
            size="small"
          ></InputData>
          <InputData
            label="Nome Fantasia"
            variant="filled"
            required
            helperText="Insira o Nome Fantasia acima."
            size="small"
          ></InputData>
          <SelectDashboard
            data={["Arroz", "Feijão", "Salada", "Fruta"]}
            label="CNAI"
          />
          <StyledButton style={{maxWidth: 200}} color="secondary" variant="contained">
            Cadastrar
          </StyledButton>
        </Stack>
      </ContainerDashboard>
    </ContentPage>
  );
};

export { CostumerRegister };
