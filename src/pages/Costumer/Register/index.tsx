import React, { useState } from "react";
import {
  TitlePage,
  ContainerDashboard,
  ContentPage,
  InputData,
  StyledButton,
} from "../../styles";
import { useSelector, useDispatch } from "react-redux";
import { AlertDialog, SideBarDashboard } from "../../../components";
import { SelectDashboard } from "../../../components/Select";
import Stack from "@mui/material/Stack";
import { cnpjMask, cnaeMask } from "../../../utils/Masks";
import { registerCustomer } from "../../../services/register";
import { setModalVisible } from "../../../store/registerSlices/actions";
import { RootState } from "../../../store";

const CustomerRegister: React.FC = () => {
  const [cnpj, setCnpj] = useState("");
  const [cnae, setCnae] = useState("");
  const [razao, setRazao] = useState("");
  const [nome, setNome] = useState("");

  const dispatch = useDispatch();
  const { message: message } = useSelector(
    (store: RootState) => store.messageRegister
  );

  const insertCNPJ = (value: any) => {
    setCnpj(cnpjMask(value.target.value));
  };

  const insertCnae = (value: any) => {
    setCnae(cnaeMask(value.target.value));
  };

  const createRegister = () => {
    dispatch(setModalVisible(true));
  };

  let dataCostumer = {
    cnpj: cnpj,
    cnae: cnae,
    razao: razao,
    nomeFantasia: nome,
  };

  return (
    <ContentPage>
      <AlertDialog type={"customer"} data={dataCostumer} />
      <SideBarDashboard />
      <ContainerDashboard>
        <TitlePage variant="h1">Cadastro de Cliente</TitlePage>
        <Stack spacing={2}>
          <InputData
            label="Razão Social"
            variant="filled"
            required
            value={razao}
            helperText="Insira a Razão Social acima."
            size="small"
            onChange={(value) => setRazao(value.target.value)}
          ></InputData>
          <InputData
            label="CNPJ"
            variant="filled"
            required
            helperText="Insira o CNPJ acima."
            size="small"
            value={cnpj}
            placeholder={"00.000.000/0000-00"}
            onChange={insertCNPJ}
          ></InputData>
          <InputData
            label="Nome Fantasia"
            variant="filled"
            required
            helperText="Insira o Nome Fantasia acima."
            size="small"
            value={nome}
            onChange={(value) => setNome(value.target.value)}
          ></InputData>
          <InputData
            label="CNAE"
            variant="filled"
            required
            helperText="Insira o CNAE acima."
            size="small"
            value={cnae}
            placeholder={"0000-0/00"}
            onChange={insertCnae}
          ></InputData>
          <StyledButton
            style={{ maxWidth: 200 }}
            variant="contained"
            onClick={createRegister}
            color="secondary"
          >
            Cadastrar
          </StyledButton>
          <p>{message}</p>
        </Stack>
      </ContainerDashboard>
    </ContentPage>
  );
};

export { CustomerRegister };
