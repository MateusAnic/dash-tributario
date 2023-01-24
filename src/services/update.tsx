import { client } from "./config";
import {
  setLoadingVisible,
  setMessageRegister,
} from "../store/registerSlices/actions";

const updateCustomer = async (
  razaoSocial: string,
  cnpj: string,
  nomeFantasia: string,
  cnae: string,
  id: string,
  ativo: boolean,
  dispatch: any
) => {
  let response = await client
    .patch("/clientes", {
      razaoSocial: razaoSocial,
      cnpj: cnpj,
      nomeFantasia: nomeFantasia,
      cnae: cnae,
      id: id,
      ativo: ativo,
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

export { updateCustomer };
