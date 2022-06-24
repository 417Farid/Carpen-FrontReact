import * as authService from '../auth/auth.service';


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
import TallerOperacion from '../components/taller/TallerOperacion';

//Mantenimiento
import MantenimientoList from '../components/mantenimiento/MantenimientoList';
import RegistroMantenimiento from '../components/mantenimiento/RegistroMantenimiento';
import DetalleMantenimiento from '../components/mantenimiento/MantenimientoDetail';

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
import DetalleRepuesto from '../components/repuesto/RepuestoDetail';
//Tipos Repuesto
import TipoRepuestoList from '../components/tipoRepuesto/TipoRepuestoList';
import RegistrarTipoRepuesto from '../components/tipoRepuesto/RegistrarTipoRepuesto';
//Intervalos
import IntervaloList from '../components/intervalo/IntervaloList';
import RegistrarIntervalo from '../components/intervalo/RegistrarIntervalo';
//Programa_Mantenimiento
import PrograMante from '../components/programa_mantenimiento/prograMante';

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
               path: "/home/vehiculo/:id_car/mantenimientos",
               name: "mantenimientos",
               element: <Dashboard contenedor={<MantenimientoList/>}/>
          },
          {
               path: "/home/vehiculo/:id_car/mantenimientos/agregar_mantenimiento",
               name: "agregar_mantenimiento",
               element: <Dashboard contenedor={<RegistroMantenimiento/>}/>
          },
          {
               path: "/home/vehiculo/:id_car/mantenimientos/editar_mantenimiento/:id_mant",
               name: "editar_mantenimiento",
               element: <Dashboard contenedor={<RegistroMantenimiento/>}/>
          },
          {
               path: "/home/vehiculo/:id_car/mantenimientos/ver_mantenimiento/:id_mant",
               name: "ver_mantenimiento",
               element: <Dashboard contenedor={<DetalleMantenimiento/>}/>
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
               path: "/talleres/:id_taller/ver_operaciones",
               name: "ver_operaciones",
               element: <Dashboard contenedor={<OperacionList/>}/>
          },
          {
               path: "/talleres/:id_taller/operacion/:id_opera/ver_repuestos",
               name: "ver_respuestos_operacion",
               element: <Dashboard contenedor={<RepuestoList/>}/>
          },
          {
               path: "/talleres/:id_taller/agregar_operaciones",
               name: "agregar_operaciones",
               element: <Dashboard contenedor={<TallerOperacion/>}/>
          },
          {
               path: "/tiposRepuesto",
               name: "tiposRepuesto",
               element: <Dashboard contenedor={<TipoRepuestoList/>}/>
          },
          {
               path: "/tiposRepuesto/:id_tipoRepuesto/ver_repuestos",
               name: "ver_repuestos",
               element: <Dashboard contenedor={<RepuestoList/>}/>
          },
          {
               path: "/tiposRepuesto/:id_tipoRepuesto/ver_repuestos/agregar_repuesto",
               name: "agregar_repuesto",
               element: <Dashboard contenedor={<RegistrarRepuesto/>}/>
          },
          {
               path: "/tiposRepuesto/:id_tipoRepuesto/ver_repuestos/editar_repuesto/:id_repuesto",
               name: "editar_repuesto",
               element: <Dashboard contenedor={<RegistrarRepuesto/>}/>
          },
          {
               path: "/tiposRepuesto/:id_tipoRepuesto/ver_repuestos/repuesto/:id_repuesto",
               name: "ver_repuesto",
               element: <Dashboard contenedor={<DetalleRepuesto/>}/>
          },
          {
               path: "/tiposRepuesto/agregar_tipoRepuesto",
               name: "agregar_tipoRepuesto",
               element: <Dashboard contenedor={<RegistrarTipoRepuesto/>}/>
          },
          {
               path: "/tiposRepuesto/editar_tipoRepuesto/:id_tipoRepuesto",
               name: "editar_tipoRepuesto",
               element: <Dashboard contenedor={<RegistrarTipoRepuesto/>}/>
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
               path: "/intervalos",
               name: "intervalos",
               element: <Dashboard contenedor={<IntervaloList/>}/>
          },
          {
               path: "/intervalos/agregar_intervalo",
               name: "agregar_intervalo",
               element: <Dashboard contenedor={<RegistrarIntervalo/>}/>
          },
          {
               path: "/intervalos/editar_intervalo/:id",
               name: "editar_intervalo",
               element: <Dashboard contenedor={<RegistrarIntervalo/>}/>
          },
          {
               path: "/programa_mantenimiento",
               name: "programa_mantenimiento",
               element: <Dashboard contenedor={<PrograMante/>}/>
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

const getRoutes_Roles = () => {
     try {
          authService.getUser().then(usuario => {
               authService.getRoles_User(usuario.id).then(response => {
                    if (response.error === "") {
                         response.usuario_roles.forEach(element => {
                              //element.rol
                         });
                    }
               });
          });
     } catch (error) {
          console.log(error);
     }
}

export default routes;