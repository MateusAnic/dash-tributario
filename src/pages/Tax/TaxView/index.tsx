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

const TaxView: React.FC = () => {
  const [value, setValue] = useState<any>(0);
  const dispatch = useDispatch();
  const [listOfCustomer, setListOfCustomer] = useState<Array<string>>([""]);
  const [typeModal, setTypeModal] = useState<string>("");

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
    getListOfCustomer(setListOfCustomer, "customer");
  });

  const simulateTax = () => {
    setTypeModal("taxSimulate");
    dispatch(setModalVisible(true));
  };

  const editDRE = () => {
    setTypeModal("taxEditDRE");
    dispatch(setModalVisible(true));
  };

  const deleteTax = () => {
    setTypeModal("taxDelete");
    dispatch(setModalVisible(true));
  };

  return (
    <ContentPage>
      <AlertDialog type={typeModal} data={dataTax} />
      <SideBarDashboard />
      <ContainerDashboard>
        <TitlePage variant="h1">
          Visualização de Planejamento Tributario
        </TitlePage>
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
            variant="contained"
            color="success"
            onClick={simulateTax}
          >
            Simular
          </StyledButton>
          <StyledButton
            style={{ maxWidth: 200 }}
            color="secondary"
            variant="contained"
            onClick={editDRE}
          >
            Editar DRE
          </StyledButton>
          <StyledButton
            style={{ maxWidth: 200 }}
            variant="contained"
            onClick={deleteTax}
            color="error"
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
