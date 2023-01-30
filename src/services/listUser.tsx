import { client } from "./config";

const listCustomer = async (idUsuario: string) => {
  let response = await client
    .get(`/clientes/usuario/${idUsuario}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return "";
    });
  return response;
};

const listCustomerTax = async (idUsuario: string) => {
  let response = await client
    .get(`/planejamentoTributario/clientes/usuario/${idUsuario}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return "";
    });
  return response;
};

const listYearTax = async (idClient: string) => {
  let response = await client
    .get(`/planejamentoTributario/cliente/${idClient}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return "";
    });
  return response;
};

export { listCustomer, listCustomerTax, listYearTax };
