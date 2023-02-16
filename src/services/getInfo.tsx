import { client } from "./config";

const getCustomer = async (idUsuario: string) => {
  let response = await client
    .get(`/clientes/${idUsuario}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return "";
    });
  return response;
};



export { getCustomer };
