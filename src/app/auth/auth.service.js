import { async } from "@firebase/util";
import authHeader from "./auth-header";

const API_URL = "http://127.0.0.1:8099/"
//const API_AUTH_TOKEN = "http://127.0.0.1:8099/api-generate-token/"


/*--------------------------------USUARIO------------------------------------*/
export const asignar_rol = async(usuario)=>{
  const id_rol_user = 2;

  return await fetch(API_URL + "usuario_roles/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'usuario': parseInt(id_rol_user),
      'rol': parseInt(usuario.id),
    }),
  });
};

export const sign_up = async (user) => {
  const usuario = await fetch(API_URL + "usuarios/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'username': String(user.email).trim(),
      'first_name': String(user.first_name).trim(),
      'last_name': String(user.last_name).trim(),
      'tipoDocumento': String(user.tipoDocumento).trim(),
      'numeroDocumento': parseInt(user.numeroDocumento),
      'ciudad': String(user.ciudad).trim(),
      'email': String(user.email).trim(),
      'password': String(user.password).trim(),
      'roles': [1,2],
      "url":"",
    }),
  });
  return usuario;
};

export const sign_in = async(user) => {
  return await (await (fetch(API_URL+"usuarios/"+'sign_in/?email='+user.email+'&password='+user.password))).json();
};

export const userConected = async (response) => {
  await sessionStorage.setItem("user", JSON.stringify(response.user));
  sessionStorage.setItem("token", response.token);
};

export const logout = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
};

export const getUserToken = () => {
  const token = sessionStorage.getItem("token");
  return token;
};

export const getUser = async() => {
  return await JSON.parse(sessionStorage.getItem("user"));
};

/*--------------------------------END------------------------------------*/

/*--------------------------------VEHICULOS------------------------------------*/
export const addVehiculo = async (vehiculo) => {
  return await fetch(API_URL + "vehiculos/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      //authHeader
    },
    body: JSON.stringify({
      'placa': String(vehiculo.placa).trim(),
      'marca': String(vehiculo.marca).trim(),
      'modelo': String(vehiculo.modelo).trim(),
      'linea': String(vehiculo.linea).trim(),
      'color': String(vehiculo.color).trim(),
      'numeroSerie': String(vehiculo.numeroSerie).trim(),
      'numeroChasis': String(vehiculo.numeroChasis).trim(),
      'numeroMotor': String(vehiculo.numeroMotor).trim(),
      'tipoCombustible': String(vehiculo.tipoCombustible).trim(),
      'kilometrajeActual': parseInt(vehiculo.kilometrajeActual),
      'kilometrajeUltimoMantenimiento': parseInt(vehiculo.kilometrajeUltimoMantenimiento),
      'nombreConductor': String(vehiculo.nombreConductor).trim(),
      'foto': String(vehiculo.foto),
      'fechaSoat': String(vehiculo.fechaSoat).trim(),
      'fechaTecnicoMecanica': String(vehiculo.fechaTecnicoMecanica).trim(),
      'fechaMatricula': String(vehiculo.fechaMatricula).trim(),
    }),
  });
};

export const anexaVehiculoToUser = async (vehiculo) => {
  return await getUser().then(user=>{
    fetch(API_URL + "usuario_vehiculos/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //authHeader
      },
      body: JSON.stringify({
        'usuario': parseInt(user.id),
        'vehiculo': parseInt(vehiculo.id),
      }),
    });
  });
};

export const getVehiculos = async (user) => {
  return await fetch(API_URL + "vehiculos/getVehiculos/?usuario="+user.id);
};

export const findVehiculo = async (vehiculo) => {
  return await fetch(API_URL + "vehiculos/" + vehiculo.id + '/');
};

/*--------------------------------END------------------------------------*/

/*--------------------------------INSTANCIA VEHICULOS------------------------------------*/

export const deleteInstanceVehiculo = async (id_car)=>{
  const response = await getListInstancesVehiculo(id_car);
  console.log(response);
  //const response = await getInstanceVehiculo(id_car);
  /*return await fetch(API_URL+"usuario_vehiculos/"+response.instance.id+"/",{
    method: "DELETE",
    headers: {
      //authHeader
    },
  });*/
};

const getInstanceVehiculo = async(id_car)=>{
  const user =  await getUser();
  return await (await fetch(API_URL+"usuario_vehiculos/getInstance/?usuario="+user.id+"&vehiculo="+id_car)).json();
};

const getListInstancesVehiculo = async(id_car)=>{
  return await (await fetch(API_URL+"usuario_vehiculos/getListInstances/?vehiculo="+id_car)).json();
};
