import { client } from "./config";
import { setMessageRegister } from "../store/registerSlices/actions";

const deleteCustomer = async (id: string, dispatch: any) => {
  let response = await client
    .delete(`/clientes/${id}`)
    .then((res) => {
      dispatch(setMessageRegister(res.data));
    })
    .catch((err) => {
      dispatch(setMessageRegister(err.data));
    });
  return response;
};

export { deleteCustomer };
