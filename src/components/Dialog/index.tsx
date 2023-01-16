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
import { registerCostumer } from "../../services/register";
import CircularProgress from "@mui/material/CircularProgress";

interface Props {
  razao: string;
  cnpj: string;
  nomeFantasia: string;
  cnae: string;
}

const AlertDialog: React.FC<Props> = (props) => {
  const { razao, cnpj, nomeFantasia, cnae } = props;
  const dispatch = useDispatch();

  const { visible: modalVisible, loading: loadingVisible } = useSelector(
    (store: RootState) => store.modalRegister
  );

  const handleClose = () => {
    dispatch(setModalVisible(false));
  };

  const handleRegister = () => {
    dispatch(setLoadingVisible(true));
    registerCostumer(
      razao,
      cnpj,
      nomeFantasia,
      cnae,
      "639d1a6b13a1dda7a9bd929e",
      dispatch
    );
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={modalVisible}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Tem certeza de que deseja cadastrar esse cliente?"}
        </DialogTitle>
        <DialogContent
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {loadingVisible ? <CircularProgress /> : ""}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
          <Button onClick={handleRegister} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { AlertDialog };
