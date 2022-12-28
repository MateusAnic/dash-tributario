import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { LabelMenu } from "./style";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import TimelineIcon from "@mui/icons-material/Timeline";
import { User } from "../User";

const SideBarDashboard: React.FC = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  return (
    <Sidebar collapsedWidth={"65px"}>
      {!collapsed && (
        <IconButton onClick={() => collapseSidebar()}>
          <CloseIcon />
        </IconButton>
      )}
      {!collapsed && <User />}
      <Menu>
        <MenuItem onClick={() => collapseSidebar()}>
          <LabelMenu variant="body2">
            <AnalyticsIcon />
            Comparativos
          </LabelMenu>
        </MenuItem>
        <MenuItem onClick={() => collapseSidebar()}>
          <LabelMenu variant="body2">
            <AssignmentIndIcon />
            Cadastrar de cliente
          </LabelMenu>
        </MenuItem>
        <MenuItem onClick={() => collapseSidebar()}>
          <LabelMenu variant="body2">
            {" "}
            <AccountBoxIcon />
            Acompanhar cliente
          </LabelMenu>
        </MenuItem>
        <MenuItem onClick={() => collapseSidebar()}>
          <LabelMenu variant="body2">
            <AssignmentIcon />
            Cadastrar planejamento
          </LabelMenu>
        </MenuItem>
        <MenuItem onClick={() => collapseSidebar()}>
          <LabelMenu variant="body2">
            <ListAltIcon />
            Acompanhar planejamento
          </LabelMenu>
        </MenuItem>
        <MenuItem onClick={() => collapseSidebar()}>
          <LabelMenu variant="body2">
            <DescriptionIcon />
            Cadastrar simulada
          </LabelMenu>
        </MenuItem>
        <MenuItem onClick={() => collapseSidebar()}>
          <LabelMenu variant="body2">
            <TimelineIcon />
            Acompanhar simuladas
          </LabelMenu>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export { SideBarDashboard };
