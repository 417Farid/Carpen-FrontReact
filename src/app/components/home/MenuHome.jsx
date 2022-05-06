import React from "react";
import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Home from "@mui/icons-material/Home";
import RepairIcon from "@mui/icons-material/CarRepair";
import MapIcon from "@mui/icons-material/Map";
import PeopleIcon from "@mui/icons-material/People";
import * as authService from '../../auth/auth.service'
import { Settings } from "@mui/icons-material";

export default function MenuList() {
     const [user, setUser] = React.useState([]);
     const [admin,setAdmin] = React.useState(false);

     const navigate = useNavigate();

     React.useEffect(() => {
          const getUsuario = async()=>{
               const usuario = await authService.getUser(); 
               setUser(usuario);
               if(usuario.roles[0]===1||usuario.roles[1]===1){
                    setAdmin(true);
               }
          }
          getUsuario();
     }, [admin]);

     return (
          <React.Fragment>
               <ListItemButton onClick={()=>{navigate('/home')}}>
                    <ListItemIcon>
                         <Home />
                    </ListItemIcon>
                    <ListItemText primary="Inicio" />
               </ListItemButton>

               <ListItemButton>
                    <ListItemIcon>
                         <RepairIcon />
                    </ListItemIcon>
                    <ListItemText primary="Talleres" />
               </ListItemButton>

               <ListItemButton>
                    <ListItemIcon>
                         <Settings />
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
                         <ListItemButton>
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