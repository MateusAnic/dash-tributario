import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import TimelineIcon from "@mui/icons-material/Timeline";

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
      <Menu>
        <MenuItem onClick={() => collapseSidebar()}>
          <AnalyticsIcon /> Comparativos{" "}
        </MenuItem>
        <MenuItem onClick={() => collapseSidebar()}>
          {" "}
          <AssignmentIndIcon /> Cadastro de cliente{" "}
        </MenuItem>
        <MenuItem onClick={() => collapseSidebar()}>
          {" "}
          <AccountBoxIcon /> Acompanhamento de cliente{" "}
        </MenuItem>
        <MenuItem onClick={() => collapseSidebar()}>
          {" "}
          <AssignmentIcon /> Cadastro de planejamento tributário{" "}
        </MenuItem>
        <MenuItem onClick={() => collapseSidebar()}>
          {" "}
          <ListAltIcon />
          Acompanhamento de planejamento tributário{" "}
        </MenuItem>
        <MenuItem onClick={() => collapseSidebar()}>
          {" "}
          <DescriptionIcon /> Cadastro simulada{" "}
        </MenuItem>
        <MenuItem onClick={() => collapseSidebar()}>
          {" "}
          <TimelineIcon /> Acompanhamento simuladas{" "}
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export { SideBarDashboard };
