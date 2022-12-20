import React from "react";
import {
  TitlePage,
  ContainerLoginSign,
  InputData,
  StyledButton,
  DashLink,
  Card,
  GridItem,
} from "../styles";
import Grid from "@mui/material/Grid";

const SignUpPage: React.FC = () => {
  return (
    <ContainerLoginSign>
      <Card itemType="signUp">
        <TitlePage variant="h1">Criar um cadastro</TitlePage>
        <Grid container spacing={2}>
          <GridItem item xs={12}>
            <InputData label="Nome Completo" variant="outlined"></InputData>
          </GridItem>
          <GridItem item xs={12}>
            <InputData label="Email" variant="outlined"></InputData>
          </GridItem>
          <GridItem item xs={12}>
            <InputData label="Senha" variant="outlined"></InputData>
          </GridItem>
          <GridItem item xs={12}>
            <DashLink to="/dashboard">
              <StyledButton color="secondary" variant="contained">
                Realizar Cadastro
              </StyledButton>
            </DashLink>
          </GridItem>
        </Grid>
      </Card>
    </ContainerLoginSign>
  );
};

export { SignUpPage };
