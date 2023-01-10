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
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stack from "@mui/material/Stack";

const TaxRegister: React.FC = () => {
  const [value, setValue] = React.useState<any>(0);

  return (
    <ContentPage>
      <SideBarDashboard />
      <ContainerDashboard>
        <TitlePage variant="h1">Cadastro de Planejamento Tributario</TitlePage>
        <Stack spacing={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              views={["year"]}
              label="Ano Referência"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField style={{ maxWidth: 200 }} {...params} helperText={null} />
              )}
            />
          </LocalizationProvider>
          <SelectDashboard
            data={["Arroz", "Feijão", "Salada", "Fruta"]}
            label="Nome do Cliente"
          />
          <StyledButton
            style={{ maxWidth: 200 }}
            color="secondary"
            variant="contained"
          >
            Cadastrar
          </StyledButton>
        </Stack>
      </ContainerDashboard>
    </ContentPage>
  );
};

export { TaxRegister };
