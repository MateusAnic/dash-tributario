import React from "react";
import { Sidebar, Menu, SubMenu, useProSidebar } from "react-pro-sidebar";
import {
  LabelMenu,
  CloseButton,
  CloseContainer,
  StyledMenuItem,
} from "./style";
import CloseIcon from "@mui/icons-material/Close";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DescriptionIcon from "@mui/icons-material/Description";
import LogoutIcon from "@mui/icons-material/Logout";
import { User } from "../User";
import { useNavigate, useLocation } from "react-router-dom";

const SideBarDashboard: React.FC = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sidebar collapsedWidth={"65px"}>
      {!collapsed && (
        <CloseContainer>
          <CloseButton onClick={() => collapseSidebar()}>
            <CloseIcon />
          </CloseButton>
        </CloseContainer>
      )}
      {/* {!collapsed && <User />} */}
      <Menu>
        <StyledMenuItem onClick={() => collapseSidebar()}>
          <LabelMenu variant="body2">
            <AnalyticsIcon />
            Comparativos
          </LabelMenu>
        </StyledMenuItem>
        <SubMenu
          defaultOpen
          label={<LabelMenu variant="body2">Cliente</LabelMenu>}
          icon={<AssignmentIndIcon />}
        >
          <StyledMenuItem
            active={location.pathname === "/cliente/cadastro" ? true : false}
            onClick={() => navigate("/cliente/cadastro")}
          >
            <LabelMenu variant="body2">Cadastrar</LabelMenu>
          </StyledMenuItem>
          <StyledMenuItem onClick={() => navigate("/cliente/visualizacao")}>
            <LabelMenu variant="body2">Visualização</LabelMenu>
          </StyledMenuItem>
        </SubMenu>
        <SubMenu
          defaultOpen
          label={<LabelMenu variant="body2">Planejamento Tributário</LabelMenu>}
          icon={<AssignmentIcon />}
        >
          <StyledMenuItem
            onClick={() => navigate("/planejamento-tributario/cadastro")}
          >
            <LabelMenu variant="body2">Cadastrar</LabelMenu>
          </StyledMenuItem>
          <StyledMenuItem
            onClick={() => navigate("/planejamento-tributario/visualizacao")}
          >
            <LabelMenu variant="body2">Visualização</LabelMenu>
          </StyledMenuItem>
        </SubMenu>
        <SubMenu
          defaultOpen
          label={<LabelMenu variant="body2">DRE</LabelMenu>}
          icon={<DescriptionIcon />}
        >
          <StyledMenuItem onClick={() => navigate("/dre/cadastro")}>
            <LabelMenu variant="body2">Cadastrar</LabelMenu>
          </StyledMenuItem>
          <StyledMenuItem onClick={() => collapseSidebar()}>
            <LabelMenu variant="body2">Visualização</LabelMenu>
          </StyledMenuItem>
        </SubMenu>
        <StyledMenuItem onClick={() => collapseSidebar()}>
          <LabelMenu variant="body2">
            <LogoutIcon />
            Sair
          </LabelMenu>
        </StyledMenuItem>
      </Menu>
    </Sidebar>
  );
};

export { SideBarDashboard };
