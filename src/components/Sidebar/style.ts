import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { MenuItem } from "react-pro-sidebar";
import styled from "styled-components";

export const LabelMenu = styled(Typography)`
  display: flex;
  align-items: center;
  color: #1f3f49;

  &.css-ary0ud-MuiTypography-root {
    font-weight: 600;
  }

  &.css-ary0ud-MuiTypography-root > .css-i4bv87-MuiSvgIcon-root {
    margin-right: 8px;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
`;

export const CloseButton = styled(IconButton)``;

export const CloseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
