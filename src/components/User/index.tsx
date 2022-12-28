import React from "react";
import Avatar from "@mui/material/Avatar";
import { ContainerUser, UserName } from "./style";

const User: React.FC = () => {
  return (
    <ContainerUser spacing={2}>
      <Avatar alt="Remy Sharp" src="" />
      <UserName>Mateus</UserName>
    </ContainerUser>
  );
};

export { User };
