import React, { useState, useEffect } from "react";
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
import { getListOfCustomer } from "../../../utils/GetListOfCustomer";

const TaxRegister: React.FC = () => {
  const [value, setValue] = useState<any>(0);
  const [listOfCustomer, setListOfCustomer] = useState<Array<string>>([""]);
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

  useEffect(() => {
    getListOfCustomer(setListOfCustomer, "customerTax");
  }, []);

  return (
    <ContentPage>
      <AlertDialog type={"tax"} data={dataTax} />
      <SideBarDashboard />
      <ContainerDashboard>
        <TitlePage variant="h1">Cadastro de Planejamento Tributario</TitlePage>
        <Stack spacing={2}>
          <SelectDashboard
            data={listOfCustomer}
            label="Nome do Cliente"
            type="customer"
          />
          <SelectDashboard
            data={listOfCustomer}
            label="Ano de Referência"
            type="default"
          />
          <StyledButton
            style={{ maxWidth: 200 }}
            color="secondary"
            variant="contained"
            onClick={createRegisterTax}
          >
            Cadastrar
          </StyledButton>
          <p>{message}</p>
        </Stack>
      </ContainerDashboard>
    </ContentPage>
  );
};

export { TaxRegister };
