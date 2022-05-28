import React from "react";
import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Home from "@mui/icons-material/Home";
import MapIcon from "@mui/icons-material/Map";
import PeopleIcon from "@mui/icons-material/People";
import HandymanIcon from '@mui/icons-material/Handyman';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import GarageIcon from '@mui/icons-material/Garage';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import * as authService from '../../auth/auth.service';
import { alert_error } from "../../util/functions";

export default function MenuList() {
     const [role_admin, setRole_Admin] = React.useState(false);
     const [role_user, setRole_User] = React.useState(false);
     const [role_gerente, setRole_Gerente] = React.useState(false);


     const navigate = useNavigate();

     const getRoles_User = () => {
          try {
               authService.getUser().then(usuario => {
                    authService.getRoles_User(usuario.id).then(response => {
                         if (response.error === "") {
                              response.usuario_roles.forEach(element => {
                                   switch (element.rol) {
                                        case 1:
                                             setRole_Admin(true);
                                             break;
                                        case 2:
                                             setRole_User(true);
                                             break;
                                        case 3:
                                             setRole_Gerente(true);
                                             break;
                                        default:
                                             break;
                                   }
                              });
                         } else {
                              alert_error("Error!", response.error);
                         }
                    });
               });
          } catch (error) {
               console.log(error);
          }
     }

     React.useEffect(() => {
          getRoles_User();
     }, [role_admin, role_user, role_gerente]);

     return (
          <React.Fragment>
               {
                    role_user || role_admin
                         ?
                         <ListItemButton onClick={() => { navigate('/home') }}>
                              <ListItemIcon>
                                   <Home />
                              </ListItemIcon>
                              <ListItemText primary="Inicio" />
                         </ListItemButton>
                         :
                         <div hidden></div>
               }
               {
                    role_admin
                         ?
                         <ListItemButton onClick={() => { navigate('/programa_mantenimiento') }}>
                              <ListItemIcon>
                                   <DashboardCustomizeIcon />
                              </ListItemIcon>
                              <ListItemText primary="Programa" />
                         </ListItemButton>
                         :
                         <div hidden></div>
               }
               {
                    role_admin
                         ?
                         <ListItemButton onClick={() => { navigate('/marcas') }}>
                              <ListItemIcon>
                                   <BookmarkIcon />
                              </ListItemIcon>
                              <ListItemText primary="Marcas" />
                         </ListItemButton>
                         :
                         <div hidden></div>
               }
               {
                    role_admin
                         ?
                         <ListItemButton onClick={() => { navigate('/talleres') }}>
                              <ListItemIcon>
                                   <GarageIcon />
                              </ListItemIcon>
                              <ListItemText primary="Talleres" />
                         </ListItemButton>
                         :
                         <div hidden></div>
               }
               {
                    role_admin
                         ?
                         <ListItemButton onClick={() => { navigate('/operaciones') }} >
                              <ListItemIcon>
                                   <HandymanIcon />
                              </ListItemIcon>
                              <ListItemText primary="Operaciones" />
                         </ListItemButton>
                         :
                         <div hidden></div>
               }
               {
                    role_admin
                         ?
                         <ListItemButton onClick={() => { navigate('/intervalos') }}>
                              <ListItemIcon>
                                   <IntegrationInstructionsIcon />
                              </ListItemIcon>
                              <ListItemText primary="Intervalos" />
                         </ListItemButton>
                         :
                         <div hidden></div>
               }
               {
                    role_admin
                         ?
                         <ListItemButton onClick={() => { navigate('/tiposRepuesto') }}>
                              <ListItemIcon>
                                   <HomeRepairServiceIcon />
                              </ListItemIcon>
                              <ListItemText primary="Tipos Repuesto" />
                         </ListItemButton>
                         :
                         <div hidden></div>
               }
               {
                    role_user || role_admin
                         ?
                         <ListItemButton>
                              <ListItemIcon>
                                   <MapIcon />
                              </ListItemIcon>
                              <ListItemText primary="Mapa" />
                         </ListItemButton>
                         :
                         <div hidden></div>
               }
               {
                    role_admin
                         ?
                         <ListItemButton onClick={() => { navigate('/usuarios') }}>
                              <ListItemIcon>
                                   <PeopleIcon />
                              </ListItemIcon>
                              <ListItemText primary="Usuarios" />
                         </ListItemButton>
                         :
                         <div hidden></div>
               }
          </React.Fragment>
     );
}