import React from "react";
import MaterialTable from "material-table";
import tableIcons from "./tableIcons";

interface Props {
  dataSource: any;
}

const DashboardTable: React.FC<Props> = (props) => {
  const { dataSource } = props;
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
        { title: "Cliente", field: "userId" },
        { title: "Número", field: "title" },
        {
          title: "Cidade",
          field: "completed",
        },
      ]}
      data={dataSource}
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
