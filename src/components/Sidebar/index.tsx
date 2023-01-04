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
import { useNavigate } from "react-router-dom";

const SideBarDashboard: React.FC = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  const navigate = useNavigate();

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
        <SubMenu
          defaultOpen
          label={<LabelMenu variant="body2">Cliente</LabelMenu>}
          icon={<AssignmentIndIcon />}
        >
          <MenuItem onClick={() => navigate("/cliente/cadastro")}>
            <LabelMenu variant="body2">Cadastrar</LabelMenu>
          </MenuItem>
          <MenuItem onClick={() => collapseSidebar()}>
            <LabelMenu variant="body2">Visualização</LabelMenu>
          </MenuItem>
        </SubMenu>
        <SubMenu
          defaultOpen
          label={<LabelMenu variant="body2">Planejamento Tributário</LabelMenu>}
          icon={<AssignmentIcon />}
        >
          <MenuItem onClick={() => collapseSidebar()}>
            <LabelMenu variant="body2">Cadastrar</LabelMenu>
          </MenuItem>
          <MenuItem onClick={() => collapseSidebar()}>
            <LabelMenu variant="body2">Visualização</LabelMenu>
          </MenuItem>
        </SubMenu>
        <SubMenu
          defaultOpen
          label={<LabelMenu variant="body2">DRE</LabelMenu>}
          icon={<DescriptionIcon />}
        >
          <MenuItem onClick={() => collapseSidebar()}>
            <LabelMenu variant="body2">Cadastrar</LabelMenu>
          </MenuItem>
          <MenuItem onClick={() => collapseSidebar()}>
            <LabelMenu variant="body2">Visualização</LabelMenu>
          </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export { SideBarDashboard };
