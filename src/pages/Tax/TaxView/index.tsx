import React, { useState } from "react";
import {
  TitlePage,
  ContainerDashboard,
  ContentPage,
  InputData,
  StyledButton,
} from "../../styles";
import { setModalVisible } from "../../../store/registerSlices/actions";
import { useDispatch, useSelector } from "react-redux";
import { AlertDialog, SideBarDashboard } from "../../../components";
import { SelectDashboard } from "../../../components/Select";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { RootState } from "../../../store";
import Stack from "@mui/material/Stack";

const TaxView: React.FC = () => {
  const [value, setValue] = useState<any>(0);
  const dispatch = useDispatch();

  const { message: message } = useSelector(
    (store: RootState) => store.messageRegister
  );

  const createRegisterTax = () => {
    dispatch(setModalVisible(true));
  };

  let dataTax = {
    anoReferencia: value.$y,
  };

  return (
    <ContentPage>
      <AlertDialog type={"tax"} data={dataTax} />
      <SideBarDashboard />
      <ContainerDashboard>
        <TitlePage variant="h1">
          Atualização de Planejamento Tributario
        </TitlePage>
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
                <TextField
                  style={{ maxWidth: 200 }}
                  {...params}
                  helperText={null}
                />
              )}
            />
          </LocalizationProvider>
          <SelectDashboard
            data={["Arroz", "Feijão", "Salada", "Fruta"]}
            label="Nome do Cliente"
            type="default"
          />
          <StyledButton
            style={{ maxWidth: 200 }}
            color="secondary"
            variant="contained"
            onClick={createRegisterTax}
          >
            Atualizar
          </StyledButton>
          <StyledButton
            style={{ maxWidth: 200 }}
            color="secondary"
            variant="contained"
            onClick={createRegisterTax}
          >
            Remover
          </StyledButton>
          <p>{message}</p>
        </Stack>
      </ContainerDashboard>
    </ContentPage>
  );
};

export { TaxView };
