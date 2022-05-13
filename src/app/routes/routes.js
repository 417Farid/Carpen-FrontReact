
import LoginR from '../components/user/LoginR';
import RegistroUsuario from '../components/user/RegistroUsuario';

import Dashboard from '../components/home/Dashboard';
import RegistroCarro from '../components/carro/RegistroCarro';
import DetalleVehiculo from '../components/carro/CarDetail';
import CarroList from '../components/carro/CarroList';
import MantenimientoList from '../components/mantenimiento/MantenimientoList';
import UserManager from '../components/user/UserManager';
import TallerList from '../components/taller/TallerList';
import RegistroTaller from '../components/taller/RegistroTaller';
import DetalleTaller from '../components/taller/TallerDetail';

const routes = {
     private: [
          {
               path: "/home",
               name: "home",
               element: <Dashboard contenedor={<CarroList/>}/>
          },
          {
               path: "/home/agregar_vehiculo",
               name: "agregar_vehiculo",
               element: <Dashboard contenedor={<RegistroCarro/>}/>
          },
          {
               path: "/home/editar_vehiculo/:id",
               name: "editar_vehiculo",
               element: <Dashboard contenedor={<RegistroCarro/>}/>
          },
          {
               path: "/home/detalle_vehiculo/:id",
               name: "detalle_vehiculo",
               element: <Dashboard contenedor={<DetalleVehiculo/>}/>
          },
          {
               path: "/home/vehiculo/mantenimientos/:id",
               name: "detalle_vehiculo",
               element: <Dashboard contenedor={<MantenimientoList/>}/>
          },
          {
               path: "/usuarios",
               name: "usuarios",
               element: <Dashboard contenedor={<UserManager/>}/>
          },
          {
               path: "/talleres",
               name: "talleres",
               element: <Dashboard contenedor={<TallerList/>}/>
          },
          {
               path: "/talleres/agregar_taller",
               name: "agregar_taller",
               element: <Dashboard contenedor={<RegistroTaller/>}/>
          },
          {
               path: "/talleres/editar_taller/:id",
               name: "editar_taller",
               element: <Dashboard contenedor={<RegistroTaller/>}/>
          },
          {
               path: "/talleres/ver_taller/:id",
               name: "ver_taller",
               element: <Dashboard contenedor={<DetalleTaller/>}/>
          }
     ],
     public: [
          {
               path: "/",
               name: "login",
               element: <LoginR/>
          },
          {
               path: "/sign_up",
               name: "sign_up",
               element: <RegistroUsuario/>
          },
     ]
}

export default routes