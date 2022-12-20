import React from "react";
import {
  TitlePage,
  InputData,
  LinkText,
  StyledButton,
  DashLink,
  Card,
  GridItem,
  ContainerLoginSign,
} from "../styles";
import Grid from "@mui/material/Grid";

const LoginPage: React.FC = () => {
  return (
    <ContainerLoginSign>
      <Card itemType="login">
        <TitlePage variant="h1">Entrar</TitlePage>
        <Grid container spacing={2}>
          <GridItem item xs={12}>
            <InputData label="Usuário" variant="outlined"></InputData>
          </GridItem>
          <GridItem item xs={12}>
            <InputData label="Senha" variant="outlined"></InputData>
          </GridItem>
          <GridItem item xs={12}>
            <DashLink to="/cadastro">
              <LinkText variant="body2">
                Não possui um cadastro? Clique aqui
              </LinkText>
            </DashLink>
          </GridItem>
          <GridItem item xs={12}>
            <LinkText variant="body2">Esqueci minha senha</LinkText>
          </GridItem>
          <GridItem item xs={12}>
            <DashLink to="/dashboard">
              <StyledButton color="secondary" variant="contained">
                Entrar
              </StyledButton>
            </DashLink>
          </GridItem>
        </Grid>
      </Card>
    </ContainerLoginSign>
  );
};

export { LoginPage };
