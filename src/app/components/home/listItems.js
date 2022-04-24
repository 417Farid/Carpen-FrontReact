import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CarIcon from '@mui/icons-material/CarRental';
import RepairIcon from '@mui/icons-material/CarRepair';
import MoneyIcon from '@mui/icons-material/MoneyOff';
import MapIcon from '@mui/icons-material/Map';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <CarIcon />
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
        <MoneyIcon />
      </ListItemIcon>
      <ListItemText primary="Martenimientos" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MapIcon   />
      </ListItemIcon>
      <ListItemText primary="Mapa" />
    </ListItemButton>
  </React.Fragment>
);

