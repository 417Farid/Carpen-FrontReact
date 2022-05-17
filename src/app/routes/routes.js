
import LoginR from '../components/user/LoginR';
import RegistroUsuario from '../components/user/RegistroUsuario';

import Dashboard from '../components/home/Dashboard';
//Vehiculo
import RegistroCarro from '../components/carro/RegistroCarro';
import DetalleVehiculo from '../components/carro/CarDetail';
import CarroList from '../components/carro/CarroList';
//Usuario
import UserManager from '../components/user/UserManager';
//Taller
import TallerList from '../components/taller/TallerList';
import RegistroTaller from '../components/taller/RegistroTaller';
import DetalleTaller from '../components/taller/TallerDetail';
//Mantenimiento
import MantenimientoList from '../components/mantenimiento/MantenimientoList';
import RegistroMantenimiento from '../components/mantenimiento/RegistroMantenimiento';
//Operacion
import RegistrarOperacion from '../components/operacion/RegistrarOperacion';
import OperacionList from '../components/operacion/OperacionList'
import DetalleOperacion from '../components/operacion/OperacionDetail';
//Marca
import RegistrarMarca from '../components/marca/RegistrarMarca';
import MarcaList from '../components/marca/MarcaList';
//Linea
import LineaList from '../components/lineas/LineaList';
import RegistrarLinea from '../components/lineas/RegistrarLinea';
//Repuestos
import RepuestoList from '../components/repuesto/RepuestoList';
import RegistrarRepuesto from '../components/repuesto/RegistrarRepuesto';

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
          },
          {
               path: "/talleres/operaciones/agregar_operacion/:id",
               name: "agregar_operacion",
               element: <Dashboard contenedor={<RegistrarOperacion/>}/>
          },
          {
               path: "/talleres/repuestos/agregar_repuesto/:id",
               name: "agregar_repuesto",
               element: <Dashboard contenedor={<RegistrarRepuesto/>}/>
          },
          {
               path: "/repuestos",
               name: "repuestos",
               element: <Dashboard contenedor={<RepuestoList/>}/>
          },
          {
               path: "/repuestos/agregar_repuesto",
               name: "agregar_repuesto",
               element: <Dashboard contenedor={<RegistrarRepuesto/>}/>
          },
          {
               path: "/operaciones",
               name: "operaciones",
               element: <Dashboard contenedor={<OperacionList/>}/>
          },
          {
               path: "/operaciones/ver_operacion/:id",
               name: "ver_operacion",
               element: <Dashboard contenedor={<DetalleOperacion/>}/>
          },
          {
               path: "/operaciones/agregar_operacion",
               name: "agregar_operacion",
               element: <Dashboard contenedor={<RegistrarOperacion/>}/>
          },
          {
               path: "/operaciones/editar_operacion/:id",
               name: "editar_operacion",
               element: <Dashboard contenedor={<RegistrarOperacion/>}/>
          },
          {
               path: "/operaciones/agregar_marca/:id",
               name: "agregar_marca",
               element: <Dashboard contenedor={<RegistrarMarca/>}/>
          },
          {
               path: "/marcas/editar_marca/:id",
               name: "editar_marca",
               element: <Dashboard contenedor={<RegistrarMarca/>}/>
          },
          {
               path: "/marcas/agregar_marca",
               name: "agregar_marca",
               element: <Dashboard contenedor={<RegistrarMarca/>}/>
          },
          {
               path: "/marcas",
               name: "marcas",
               element: <Dashboard contenedor={<MarcaList/>}/>
          },
          {
               path: "/marcas/:id_marca/agregar_linea",
               name: "agregar_linea",
               element: <Dashboard contenedor={<RegistrarLinea/>}/>
          },
          {
               path: "/marcas/:id_marca/editar_linea/:id_linea",
               name: "editar_linea",
               element: <Dashboard contenedor={<RegistrarLinea/>}/>
          },
          {
               path: "/marcas/:id_marca/ver_lineas",
               name: "ver_lineas",
               element: <Dashboard contenedor={<LineaList/>}/>
          },
          {
               path: "/mantenimientos",
               name: "mantenimientos",
               element: <Dashboard contenedor={<MantenimientoList/>}/>
          },
          {
               path: "/mantenimientos/agregar_mantenimiento",
               name: "agregar_mantenimiento",
               element: <Dashboard contenedor={<RegistroMantenimiento/>}/>
          },
          {
               path: "/mantenimientos/editar_mantenimiento/:id",
               name: "editar_mantenimiento",
               element: <Dashboard contenedor={<RegistroMantenimiento/>}/>
          },

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