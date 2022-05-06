
import LoginR from '../components/user/LoginR';
import RegistroUsuario from '../components/user/RegistroUsuario';

import Dashboard from '../components/home/Dashboard';
import RegistroCarro from '../components/carro/RegistroCarro';
import CarroList from '../components/carro/CarroList';

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