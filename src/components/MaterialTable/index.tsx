import React from "react";
import MaterialTable from "material-table";
import tableIcons from "./tableIcons";

const DashboardTable: React.FC = () => {
  console.log(tableIcons.Delete);
  return (
    <MaterialTable
      icons={tableIcons}
      options={{ sorting: true }}
      localization={{
        header: {
          actions: "",
        },
      }}
      columns={[
        { title: "Cliente", field: "name" },
        { title: "Número", field: "surname" },
        { title: "Ano", field: "birthYear", type: "numeric" },
        {
          title: "Cidade",
          field: "São Paulo",
        },
      ]}
      data={[
        { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      ]}
      title="Tabela Tributária de: Usuário"
      actions={[
        {
          icon: () => <tableIcons.Delete />,
          tooltip: "Delete User",
          onClick: (event, rowData: any) =>
            alert("You want to delete " + rowData.name),
        },
        {
          icon: () => <tableIcons.Add />,
          tooltip: "Add User",
          isFreeAction: true,
          onClick: (event) => alert("You want to add a new row"),
        },
      ]}
    />
  );
};

export { DashboardTable };
