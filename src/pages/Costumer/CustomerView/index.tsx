import React, { useState, useEffect } from "react";
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
import { listCustomer } from "../../../services/listUser";
import { getCustomer } from "../../../services/getInfo";
import { setCurrentCustomer } from "../../../store/updateSlices/actions";
import { Customer } from "../../../store/interfaces/Customer";
import { getListOfCustomer } from "../../../utils/GetListOfCustomer";

const CustomerView: React.FC = () => {
  const [cnpj, setCnpj] = useState("");
  const [cnae, setCnae] = useState("");
  const [razao, setRazao] = useState("");
  const [nome, setNome] = useState("");
  const [listOfCustomers, setListOfCustomer] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [typeModal, setTypeModal] = useState("");
  const [currentSelected, setCurrentSelected] = useState<Customer>({
    _id: "",
    razaoSocial: "",
    cnpj: "",
    nomeFantasia: "",
    cnae: "",
    ativo: true,
    __v: 0,
  });
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

  const updateInfo = () => {
    setTypeModal("updateCustomer");
    dispatch(setModalVisible(true));
  };

  const deleteCustomer = () => {
    setTypeModal("deleteCustomer");
    dispatch(setModalVisible(true));
  };

  const updateInputs = () => {
    setCnae(currentSelected.cnae);
    setCnpj(currentSelected.cnpj);
    setNome(currentSelected.nomeFantasia);
    setRazao(currentSelected.razaoSocial);
  };

  const setCustomer = async (idUsuario: string) => {
    const dataCustomer = await getCustomer(idUsuario);
    setCurrentSelected(dataCustomer[0]);
    dispatch(setCurrentCustomer(dataCustomer));
    setDisabled(false);
  };

  let dataCostumer = {
    cnpj: cnpj,
    cnae: cnae,
    razao: razao,
    nomeFantasia: nome,
    _id: currentSelected._id,
    ativo: currentSelected.ativo,
  };

  useEffect(() => {
    getListOfCustomer(setListOfCustomer, "customer");
  }, []);

  useEffect(() => {
    updateInputs();
  }, [currentSelected]);

  useEffect(() => {
    setCurrentSelected({
      _id: "",
      razaoSocial: "",
      cnpj: "",
      nomeFantasia: "",
      cnae: "",
      ativo: true,
      __v: 0,
    });
  }, [message]);

  return (
    <ContentPage>
      <AlertDialog type={typeModal} data={dataCostumer} />
      <SideBarDashboard />
      <ContainerDashboard>
        <TitlePage variant="h1">Visualização de Cliente</TitlePage>
        <Stack spacing={2}>
          <SelectDashboard
            data={listOfCustomers}
            label="Nome do Cliente"
            type="customer"
            change={setCustomer}
          />
          <InputData
            label="Razão Social"
            variant="filled"
            required
            value={razao}
            size="small"
            onChange={(value) => setRazao(value.target.value)}
            disabled={disabled}
          ></InputData>
          <InputData
            label="CNPJ"
            variant="filled"
            required
            size="small"
            value={cnpj}
            placeholder={"00.000.000/0000-00"}
            onChange={insertCNPJ}
            disabled={disabled}
          ></InputData>
          <InputData
            label="Nome Fantasia"
            variant="filled"
            required
            size="small"
            value={nome}
            onChange={(value) => setNome(value.target.value)}
            disabled={disabled}
          ></InputData>
          <InputData
            label="CNAE"
            variant="filled"
            required
            size="small"
            value={cnae}
            placeholder={"0000-0/00"}
            onChange={insertCnae}
            disabled={disabled}
          ></InputData>
          <StyledButton
            style={{ maxWidth: 200 }}
            variant="contained"
            onClick={updateInfo}
            color="secondary"
          >
            Atualizar
          </StyledButton>
          <StyledButton
            style={{ maxWidth: 200 }}
            color="error"
            variant="contained"
            onClick={deleteCustomer}
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
