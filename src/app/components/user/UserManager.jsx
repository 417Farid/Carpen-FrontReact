import React from "react";
import { ResponsiveContainer } from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Typography from '@mui/material/Typography';
import ListaUsuarios from './UserList';

function UserManager() {
  return (
    <React.Fragment>
      <ResponsiveContainer>
        <div className="container">
          <Typography component="h2" variant="h5" color="dark" gutterBottom>
            Administrador de Usuarios
          </Typography>
          <hr />
          <div className="table-responsive mx-auto">
            <ListaUsuarios />
          </div>
        </div>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

export default UserManager;
