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
import { registerCostumer, registerTax } from "../../services/register";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";

interface Props {
  type: string;
  data: any;
}

const AlertDialog: React.FC<Props> = (props) => {
  const { type, data } = props;
  const dispatch = useDispatch();

  const { visible: modalVisible, loading: loadingVisible } = useSelector(
    (store: RootState) => store.modalRegister
  );

  const typeRegister = {
    costumer: () =>
      registerCostumer(
        data.razao,
        data.cnpj,
        data.nomeFantasia,
        data.cnae,
        "639d1a6b13a1dda7a9bd929e",
        dispatch
      ),
    tax: () =>
      registerTax(data.anoReferencia, "639d1a6b13a1dda7a9bd929e", dispatch),
  };

  const handleClose = () => {
    dispatch(setModalVisible(false));
  };

  const handleRegister = () => {
    dispatch(setLoadingVisible(true));
    typeRegister.tax();
    handleClose();
  };

  const listCustomer = [
    { nome: "Razão Social", data: data.razao },
    { nome: "CNPJ", data: data.cnpj },
    { nome: "Nome Fantasia", data: data.nomeFantasia },
    { nome: "CNAE", data: data.cnae },
  ];

  const listTax = [{ nome: "Ano Referência", data: data.anoReferencia }];

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
            <DialogTitle id="alert-dialog-title">
              {type === "customer"
                ? "Tem certeza de que deseja cadastrar esse cliente?"
                : "Tem certeza de que deseja cadastrar esse planejamento?"}
            </DialogTitle>
            <DialogContent>
              {type === "customer" ? (
                <ul>
                  {listCustomer.map((item) => (
                    <li>
                      <Typography variant="body1">
                        {item.nome}: {item.data === "" ? "N/A" : item.data}
                      </Typography>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul>
                  {listTax.map((item) => (
                    <li>
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
