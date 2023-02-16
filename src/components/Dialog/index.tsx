import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  setLoadingVisible,
  setModalVisible,
} from "../../store/registerSlices/actions";
import { RootState } from "../../store";
import { registerCustomer, registerTax } from "../../services/register";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";
import { updateCustomer } from "../../services/update";
import { deleteCustomer } from "../../services/delete";
import { setCurrentCustomer } from "../../store/updateSlices/actions";

interface Props {
  type: string;
  data: any;
}

const AlertDialog: React.FC<Props> = (props) => {
  const { type, data } = props;
  const dispatch = useDispatch();
  const refresh = () => window.location.reload();

  const { visible: modalVisible, loading: loadingVisible } = useSelector(
    (store: RootState) => store.modalRegister
  );

  const typeAction: { [index: string]: any } = {
    customer: () =>
      registerCustomer(
        data.razao,
        data.cnpj,
        data.nomeFantasia,
        data.cnae,
        "639d1a6b13a1dda7a9bd929e",
        dispatch
      ),
    tax: () =>
      registerTax(data.anoReferencia, "639d1a6b13a1dda7a9bd929e", dispatch),
    updateCustomer: () => {
      updateCustomer(
        data.razao,
        data.cnpj,
        data.nomeFantasia,
        data.cnae,
        data._id,
        true,
        dispatch
      );
    },
    deleteCustomer: () => {
      deleteCustomer(data._id, dispatch);
    },
  };

  const handleClose = () => {
    dispatch(setModalVisible(false));
  };

  const handleRegister = () => {
    dispatch(setLoadingVisible(true));
    typeAction[type]();
    handleClose();
  };

  const listCustomer = [
    { nome: "Razão Social", data: data.razao },
    { nome: "CNPJ", data: data.cnpj },
    { nome: "Nome Fantasia", data: data.nomeFantasia },
    { nome: "CNAE", data: data.cnae },
  ];

  const titles: { [index: string]: any } = {
    customer: (
      <Typography variant="h2">
        Tem certeza de que deseja{" "}
        <span style={{ color: "#1c4e80" }}>cadastrar</span> esse cliente?
      </Typography>
    ),
    updateCustomer: (
      <Typography variant="h2">
        Tem certeza de que deseja{" "}
        <span style={{ color: "#1c4e80" }}>alterar</span> esse cliente?
      </Typography>
    ),
    deleteCustomer: (
      <Typography variant="h2">
        Tem certeza de que deseja{" "}
        <span style={{ color: "#f44336" }}>remover</span> esse cliente?
      </Typography>
    ),
    tax: (
      <Typography variant="h2">
        Tem certeza de que deseja{" "}
        <span style={{ color: "#1c4e80" }}>cadastrar</span> esse planejamento?
      </Typography>
    ),
    taxSimulate: (
      <Typography variant="h2">
        Tem certeza de que deseja{" "}
        <span style={{ color: "#2e7d32" }}>simular</span> esse planejamento?
      </Typography>
    ),
    taxEditDRE: (
      <Typography variant="h2">
        Tem certeza de que deseja{" "}
        <span style={{ color: "#1c4e80" }}>editar o DRE</span> desse
        planejamento?
      </Typography>
    ),
    taxDelete: (
      <Typography variant="h2">
        Tem certeza de que deseja{" "}
        <span style={{ color: "#f44336" }}>remover</span> esse planejamento?
      </Typography>
    ),
  };

  const listTax = [{ nome: "Nome do Cliente", data: data.razaoSocial }, { nome: "Ano Referência", data: data.anoReferencia }];

  return (
    <div>
      <Dialog
        open={modalVisible}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {loadingVisible ? (
          <DialogContent
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </DialogContent>
        ) : (
          <>
            <DialogTitle id="alert-dialog-title">{titles[type]}</DialogTitle>
            <DialogContent>
              {type === "customer" ||
              type === "updateCustomer" ||
              type === "deleteCustomer" ? (
                <ul>
                  {listCustomer.map((item, key) => (
                    <li key={key}>
                      <Typography variant="body1">
                        {item.nome}: {item.data === "" ? "N/A" : item.data}
                      </Typography>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul>
                  {listTax.map((item, key) => (
                    <li key={key}>
                      <Typography variant="body1">
                        {item.nome}: {item.data === "" ? "N/A" : item.data}
                      </Typography>
                    </li>
                  ))}
                </ul>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Fechar</Button>
              <Button onClick={handleRegister} autoFocus>
                Confirmar
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export { AlertDialog };
