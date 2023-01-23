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
import { setModalVisible } from "../../../store/registerSlices/actions";
import { RootState } from "../../../store";

const CustomerView: React.FC = () => {
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
        <TitlePage variant="h1">Visualização de Cliente</TitlePage>
        <Stack spacing={2}>
          <SelectDashboard
            data={["Arroz", "Feijão", "Salada", "Fruta"]}
            label="Nome do Cliente"
          />
          <InputData
            label="Razão Social"
            variant="filled"
            required
            value={razao}
            size="small"
            onChange={(value) => setRazao(value.target.value)}
            disabled={true}
          ></InputData>
          <InputData
            label="CNPJ"
            variant="filled"
            required
            size="small"
            value={cnpj}
            placeholder={"00.000.000/0000-00"}
            onChange={insertCNPJ}
            disabled={true}
          ></InputData>
          <InputData
            label="Nome Fantasia"
            variant="filled"
            required
            size="small"
            value={nome}
            onChange={(value) => setNome(value.target.value)}
            disabled={true}
          ></InputData>
          <InputData
            label="CNAE"
            variant="filled"
            required
            size="small"
            value={cnae}
            placeholder={"0000-0/00"}
            onChange={insertCnae}
            disabled={true}
          ></InputData>
          <StyledButton
            style={{ maxWidth: 200 }}
            color="secondary"
            variant="contained"
            onClick={createRegister}
          >
            Atualizar
          </StyledButton>
          <StyledButton
            style={{ maxWidth: 200 }}
            color="secondary"
            variant="contained"
            onClick={createRegister}
          >
            Remover
          </StyledButton>
          <p>{message}</p>
        </Stack>
      </ContainerDashboard>
    </ContentPage>
  );
};

export { CustomerView };
