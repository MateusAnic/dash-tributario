import { client } from "./config";
import {
  setMessageRegister,
  setLoadingVisible,
} from "../store/registerSlices/actions";

const deleteCustomer = async (id: string, dispatch: any) => {
  let response = await client
    .delete(`/clientes/${id}`)
    .then((res) => {
      dispatch(setMessageRegister(res.data));
      dispatch(setLoadingVisible(false));
    })
    .catch((err) => {
      dispatch(setMessageRegister(err.data));
      dispatch(setLoadingVisible(false));
    });
  return response;
};

export { deleteCustomer };
