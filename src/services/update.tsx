import { client } from "./config";
import {
  setLoadingVisible,
  setMessageRegister,
} from "../store/registerSlices/actions";

const registerCustomer = async (
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

export { registerCustomer };
