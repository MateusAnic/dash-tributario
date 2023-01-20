import { client } from "./config";
import {
  setLoadingVisible,
  setMessageRegister,
} from "../store/registerSlices/actions";

const registerCostumer = async (
  razaoSocial: string,
  cnpj: string,
  nomeFantasia: string,
  cnae: string,
  idUsuario: string,
  dispatch: any
) => {
  let response = await client
    .post("/clientes", {
      razaoSocial: razaoSocial,
      cnpj: cnpj,
      nomeFantasia: nomeFantasia,
      cnae: cnae,
      idUsuario: idUsuario,
    })
    .then((res) => {
      dispatch(setMessageRegister(res.data.message));
      dispatch(setLoadingVisible(false));
    })
    .catch((err) => {
      dispatch(setMessageRegister(err.response.data.message));
      dispatch(setLoadingVisible(false));
    });
  return response;
};

const registerTax = async (
  anoReferencia: number,
  idCliente: string,
  dispatch: any
) => {
  let response = await client
    .post("/planejamentoTributario", {
      anoReferencia: anoReferencia,
      idCliente: idCliente,
    })
    .then((res) => {
      dispatch(setMessageRegister(res.data.message));
      dispatch(setLoadingVisible(false));
    })
    .catch((err) => {
      dispatch(setMessageRegister(err.response.data.message));
      dispatch(setLoadingVisible(false));
    });
  return response;
};

export { registerCostumer, registerTax };
