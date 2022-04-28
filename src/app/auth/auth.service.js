import authHeader from "./auth-header";

const API_URL = "http://127.0.0.1:8099/"
//const API_AUTH_TOKEN = "http://127.0.0.1:8099/api-generate-token/"


/*--------------------------------USUARIO------------------------------------*/

/*const token = await fetch(API_AUTH_TOKEN,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'username': String(user.email).trim(),
      'password': String(user.password).trim(),
    }),
  });
  console.log(token); */

export const sign_up = async (user) => {
  return await fetch(API_URL+"usuarios/", {
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
    }),
  });
};

export const sign_in = async (user)=>{
  return await (await (fetch(API_URL+"usuarios/"+'sign_in/?email='+user.email+'&password='+user.password))).json();
};

export const userConected = async(token)=>{
  await localStorage.setItem("token",token);
};

export const logout =() => {
  localStorage.removeItem("token");
};

export const getUserToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

/*--------------------------------END------------------------------------*/

/*--------------------------------VEHICULOS------------------------------------*/
export const addVehiculo = async (vehiculo) => {
  return await fetch(API_URL+"vehiculos/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authHeader
    },
    body: JSON.stringify({
      'placa': String(vehiculo.placa).trim(),
      'marca': String(vehiculo.marca).trim(),
      'modelo': String(vehiculo.modelo).trim(),
      'linea': String(vehiculo.linea).trim(),
      'color': String(vehiculo.color).trim(),
      'numeroSerie': String(vehiculo.numeroSerie).trim(),
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

export const getVehiculos = async ()=>{
  return await fetch(API_URL+"vehiculos/");
};

export const findVehiculo = async (vehiculo)=>{
  return await fetch(API_URL+"vehiculos/"+vehiculo.id+'/');
};
