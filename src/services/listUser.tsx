import { client } from "./config";

const listCustomer = async (idUsuario: string) => {
  let response = await client
    .get(`/clientes/usuario/:id=${idUsuario}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return "";
    });
  return response;
};

export { listCustomer };
