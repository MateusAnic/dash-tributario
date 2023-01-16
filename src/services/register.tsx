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
      dispatch(setLoadingVisible(false));
      dispatch(setMessageRegister(res.data.message));
    })
    .catch((err) => {
      dispatch(setLoadingVisible(false));
      dispatch(setMessageRegister(err.response.data.message));
    });
  return response;
};

export { registerCostumer };
