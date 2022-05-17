import React from "react";
import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Home from "@mui/icons-material/Home";
import CarRepairIcon from '@mui/icons-material/CarRepair';
import MapIcon from "@mui/icons-material/Map";
import PeopleIcon from "@mui/icons-material/People";
import HandymanIcon from '@mui/icons-material/Handyman';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import GarageIcon from '@mui/icons-material/Garage';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import * as authService from '../../auth/auth.service';

export default function MenuList() {
     const [user, setUser] = React.useState([]);
     const [admin, setAdmin] = React.useState(false);

     const navigate = useNavigate();

     React.useEffect(() => {
          const getUsuario = async () => {
               const usuario = await authService.getUser();
               setUser(usuario);
               if (usuario.roles[0] === 1 || usuario.roles[1] === 1) {
                    setAdmin(true);
               }
          }
          getUsuario();
     }, [admin]);

     return (
          <React.Fragment>
               <ListItemButton onClick={() => { navigate('/home') }}>
                    <ListItemIcon>
                         <Home />
                    </ListItemIcon>
                    <ListItemText primary="Inicio" />
               </ListItemButton>
               {
                    admin
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
                    admin
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
                    admin
                         ?
                         <ListItemButton onClick={() => { navigate('/operaciones') }}>
                              <ListItemIcon>
                                   <HandymanIcon />
                              </ListItemIcon>
                              <ListItemText primary="Operaciones" />
                         </ListItemButton>
                         :
                         <div hidden></div>
               }
               {
                    admin
                         ?
                         <ListItemButton>
                              <ListItemIcon>
                                   <IntegrationInstructionsIcon />
                              </ListItemIcon>
                              <ListItemText primary="Intervalos" />
                         </ListItemButton>
                         :
                         <div hidden></div>
               }
               {
                    admin
                         ?
                         <ListItemButton onClick={() => { navigate('/repuestos') }}>
                              <ListItemIcon>
                                   <HomeRepairServiceIcon />
                              </ListItemIcon>
                              <ListItemText primary="Repuestos" />
                         </ListItemButton>
                         :
                         <div hidden></div>
               }
               <ListItemButton onClick={() => { navigate('/mantenimientos') }}>
                    <ListItemIcon>
                         <CarRepairIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mantenimientos" />
               </ListItemButton>

               <ListItemButton>
                    <ListItemIcon>
                         <MapIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mapa" />
               </ListItemButton>

               {
                    admin
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