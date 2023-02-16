import {
  listCustomer,
  listCustomerTax,
  listYearTax,
} from "../services/listUser";

const typeList: { [index: string]: any } = {
  customer: listCustomer("63c542c72c5dd0f675cdd016"),
  taxCustomer: listCustomerTax("63c542c72c5dd0f675cdd016"),
};

const getListOfCustomer = async (setter: (data: []) => void, type: string) => {
  const listCustomers = await typeList[type];
  setter(listCustomers);
};

export { getListOfCustomer };
