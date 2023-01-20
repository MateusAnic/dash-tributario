import styled from "styled-components";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export const ContentPage = styled.div`
  display: flex;
  width: 100vw;
`;

export const TitlePage = styled(Typography)`
  margin: 0 0 1.802rem 0 !important;
`;

export const InputData = styled(TextField)`
  width: 350px;
`;

export const ContainerLoginSign = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  aling-items: center;
  min-height: 100vh;
  padding: 45px;
`;

export const ContainerDashboard = styled(Box)`
  display: flex;
  flex-direction: column;
  aling-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 45px;
`;

export const LinkText = styled(Typography)``;

export const DashLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: inherit;
  }
`;

export const StyledButton = styled(Button)``;

export const Card = styled(Paper)`
  padding: 1.602rem;
  max-width: ${(props) => (props.itemType === "login" ? "35%" : "40%")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  height: 80vh;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const GridItem = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
