export interface Customer {
  _id: string;
  razaoSocial: string;
  cnpj: string;
  nomeFantasia: string;
  cnae: string;
  ativo: boolean;
  __v: number;
}

export type ListOfCustomer = Array<Customer>;
