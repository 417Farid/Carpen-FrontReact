import { eliminarImagen } from "../util/firebase";

const API_URL_VEHICULOS = "http://127.0.0.1:8099/";
const API_URL_TALLERES = "http://127.0.0.1:8080/";
const API_URL_PROGRAMA_MANTENIMIENTO = "http://127.0.0.1:8070/";
const API_URL_MANTENIMIENTOS = "http://127.0.0.1:8070/";

//const API_AUTH_TOKEN = "http://127.0.0.1:8099/api-generate-token/"

/*--------------------------------USUARIO------------------------------------*/
export const asignar_rol = async (usuario) => {
  const id_rol_user = 2;

  return await fetch(API_URL_VEHICULOS + "usuario_roles/", {
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

export const user_list = async () => {
  return await (await fetch(API_URL_VEHICULOS + "usuarios/")).json();
};

export const sign_up = async (user) => {
  const usuario = await fetch(API_URL_VEHICULOS + "usuarios/", {
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
      'roles': [2],
      "url": "",
    }),
  });
  return usuario;
};

export const sign_in = async (user) => {
  return await (await (fetch(API_URL_VEHICULOS + "usuarios/" + 'sign_in/?email=' + user.email + '&password=' + user.password))).json();
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

export const getUser = async () => {
  return await JSON.parse(sessionStorage.getItem("user"));
};

/*--------------------------------END------------------------------------*/

/*--------------------------------VEHICULOS------------------------------------*/
export const addVehiculo = async (vehiculo) => {
  const auth_token = getUserToken();
  return await fetch(API_URL_VEHICULOS + "vehiculos/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": 'Token ' + auth_token,
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

export const updateVehiculo = async (vehiculo, id) => {
  const auth_token = getUserToken();
  return await fetch(API_URL_VEHICULOS + "vehiculos/" + id + "/", {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": 'Token ' + auth_token,
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

export const deleteVehiculo = async (id_car, vehiculo) => {
  const auth_token = getUserToken();
  const response = await fetch(API_URL_VEHICULOS + "vehiculos/" + id_car + "/", {
    method: 'DELETE',
    headers: {
      "Authorization": 'Token ' + auth_token,
    },
  });
  const valor = response.clone();
  response.json().then(value => {
    if (value.error === "") {
      eliminarImagen(vehiculo.foto, "vehiculos");
    }
  });
  return valor;
};

export const anexaVehiculoToUser = async (vehiculo) => {
  const auth_token = getUserToken();
  return await getUser().then(user => {
    fetch(API_URL_VEHICULOS + "usuario_vehiculos/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": 'Token ' + auth_token,
      },
      body: JSON.stringify({
        'usuario': parseInt(user.id),
        'vehiculo': parseInt(vehiculo.id),
      }),
    });
  });
};

export const getVehiculos = async (user) => {
  return await fetch(API_URL_VEHICULOS + "vehiculos/getVehiculos/?usuario=" + user.id);
};

export const findVehiculo = async (id) => {
  return await fetch(API_URL_VEHICULOS + "vehiculos/" + id + '/');
};

/*--------------------------------END------------------------------------*/

/*--------------------------------INSTANCIA VEHICULOS------------------------------------*/

export const deleteInstanceVehiculo = async (id_car, vehiculo) => {
  const auth_token = getUserToken();
  const response = await getListInstancesVehiculo(id_car);
  if (response.instances.length > 1) {
    const user = await getUser();
    let id_instance = 0;
    response.instances.forEach(element => {
      if ((user.id === element.fields.usuario) && (id_car === element.fields.vehiculo)) {
        id_instance = element.pk;
      }
    });
    return await fetch(API_URL_VEHICULOS + "usuario_vehiculos/" + id_instance + "/", {
      method: "DELETE",
      headers: {
        "Authorization": 'Token ' + auth_token,
      },
    });
  } else {
    return await deleteVehiculo(id_car, vehiculo);
  }
};

const getInstanceVehiculo = async (id_car) => {
  const user = await getUser();
  return await (await fetch(API_URL_VEHICULOS + "usuario_vehiculos/getInstance/?usuario=" + user.id + "&vehiculo=" + id_car)).json();
};

const getListInstancesVehiculo = async (id_car) => {
  return await (await fetch(API_URL_VEHICULOS + "usuario_vehiculos/getListInstances/?vehiculo=" + id_car)).json();
};

/*--------------------------------END------------------------------------*/

/*--------------------------------TALLERES------------------------------------*/


export const getTalleres = async () => {
  return await fetch(API_URL_TALLERES + "talleres/");
};

export const deleteTaller = async (id_taller) => {
  return await fetch(API_URL_TALLERES + "talleres/" + id_taller + "/", {
    method: "DELETE",
  });
};

export const addTaller = async (taller) => {
  //const auth_token = getUserToken();
  return await fetch(API_URL_TALLERES + "talleres/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      //"Authorization": 'Token '+ auth_token,
    },
    body: JSON.stringify({
      'nombre': String(taller.nombre).trim(),
      'latitud': String(taller.latitud).trim(),
      'longitud': String(taller.longitud).trim(),
      'direccion': String(taller.direccion).trim(),
      'telefono': String(taller.telefono).trim(),
      'paginaWeb': String(taller.paginaWeb).trim(),
      'email': String(taller.email).trim(),
    }),
  });
};

export const updateTaller = async (taller, id_taller) => {
  //const auth_token = getUserToken();
  return await fetch(API_URL_TALLERES + "talleres/" + id_taller + "/", {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      //"Authorization": 'Token '+ auth_token,
    },
    body: JSON.stringify({
      'nombre': String(taller.nombre).trim(),
      'latitud': String(taller.latitud).trim(),
      'longitud': String(taller.longitud).trim(),
      'direccion': String(taller.direccion).trim(),
      'telefono': String(taller.telefono).trim(),
      'paginaWeb': String(taller.paginaWeb).trim(),
      'email': String(taller.email).trim(),
    }),
  });
};

export const findTaller = async (id_taller) => {
  return await fetch(API_URL_TALLERES + "talleres/" + id_taller + "/");
}

/*--------------------------------END------------------------------------*/

/*--------------------------------MARCAS Y LINEAS------------------------------------*/

export const getMarcas = async () => {
  return await (await fetch(API_URL_PROGRAMA_MANTENIMIENTO + "marcas-vehiculo/")).json();
}

export const findMarca = async (id_marca) => {
  return await (await fetch(API_URL_PROGRAMA_MANTENIMIENTO + "marcas-vehiculo/" + id_marca + "/")).json();
}

export const deleteMarca = async (id_marca) => {
  return await fetch(API_URL_PROGRAMA_MANTENIMIENTO + "marcas-vehiculo/" + id_marca + "/", {
    method: "DELETE",
  })
}

export const addMarca = async (marca) => {
  return await fetch(API_URL_PROGRAMA_MANTENIMIENTO + "marcas-vehiculo/", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      //"Authorization": 'Token '+ auth_token,
    },
    body: JSON.stringify({
      'nombre': String(marca.nombre).trim(),
      'descripcion': String(marca.descripcion).trim(),
    }),
  })
}

export const updateMarca = async (marca, id_marca) => {
  return await fetch(API_URL_PROGRAMA_MANTENIMIENTO + "marcas-vehiculo/" + id_marca + "/", {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      //"Authorization": 'Token '+ auth_token,
    },
    body: JSON.stringify({
      'nombre': String(marca.nombre).trim(),
      'descripcion': String(marca.descripcion).trim(),
    }),
  })
}

export const getLineas = async () => {
  return await (await fetch(API_URL_PROGRAMA_MANTENIMIENTO + "lineas-vehiculo/")).json();
}

export const addLinea = async (linea, id_marca) => {
  return await fetch(API_URL_PROGRAMA_MANTENIMIENTO + "lineas-vehiculo/", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      //"Authorization": 'Token '+ auth_token,
    },
    body: JSON.stringify({
      'nombre': String(linea.nombre).trim(),
      'descripcion': String(linea.descripcion).trim(),
      'marcaVehiculo': id_marca,
    }),
  })
}

export const updateLinea = async (linea, id_linea) => {
  return await fetch(API_URL_PROGRAMA_MANTENIMIENTO + "lineas-vehiculo/" + id_linea + "/", {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      //"Authorization": 'Token '+ auth_token,
    },
    body: JSON.stringify({
      'nombre': String(linea.nombre).trim(),
      'descripcion': String(linea.descripcion).trim(),
    }),
  })
}

export const getLineas_Marca = async (id_marca) => {
  return await (await fetch(API_URL_PROGRAMA_MANTENIMIENTO + "lineas-vehiculo/getLineas/?marca=" + id_marca)).json();
}

export const findLinea = async (id_linea) => {
  return await (await fetch(API_URL_PROGRAMA_MANTENIMIENTO + "lineas-vehiculo/" + id_linea + "/")).json();
}

/*--------------------------------END------------------------------------*/

/*--------------------------------OPERACIONES------------------------------------*/

export const getOperaciones = async () => {
  return await (await fetch(API_URL_PROGRAMA_MANTENIMIENTO + "operaciones-mantenimientos/")).json();
}

export const getIntervalos_Operacion = async (id_operacion) => {
  return await (await fetch(API_URL_PROGRAMA_MANTENIMIENTO + "operaciones-intervalos/getIntervalos/?operacion=" + id_operacion)).json();
}

export const findOperacion = async (id_operacion) => {
  return await (await fetch(API_URL_PROGRAMA_MANTENIMIENTO + "operaciones-mantenimientos/" + id_operacion + "/")).json();
}

export const addOperacion = async (operacion) => {
  return await fetch(API_URL_PROGRAMA_MANTENIMIENTO + "operaciones-mantenimientos/", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      //"Authorization": 'Token '+ auth_token,
    },
    body: JSON.stringify({
      'nombre': String(operacion.nombre).trim(),
      'descripcion': String(operacion.descripcion).trim(),
    }),
  })
}

export const updateOperacion = async (operacion, id_operacion) => {
  return await fetch(API_URL_PROGRAMA_MANTENIMIENTO + "operaciones-mantenimientos/" + id_operacion + "/", {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      //"Authorization": 'Token '+ auth_token,
    },
    body: JSON.stringify({
      'nombre': String(operacion.nombre).trim(),
      'descripcion': String(operacion.descripcion).trim(),
    }),
  })
}

/*--------------------------------END------------------------------------*/

/*--------------------------------INTERVALOS------------------------------------*/

export const getIntervalo = async (id_intervalo) => {
  return await (await fetch(API_URL_PROGRAMA_MANTENIMIENTO + "intervalos-kilometraje/" + id_intervalo + "/")).json();
}

/*--------------------------------END------------------------------------*/

/*--------------------------------MANTENIMIENTOS------------------------------------*/

export const deleteMantenimiento = async (id_mantenimiento) => {
  return await fetch(API_URL_MANTENIMIENTOS + "mantenimientos/" + id_mantenimiento + "/", {
    method: 'DELETE'
  });
}

/*--------------------------------END------------------------------------*/

/*--------------------------------REPUESTOS------------------------------------*/

export const getRepuestos = async () => {
  return await (await fetch(API_URL_TALLERES + "repuestos/")).json();
}

export const findRepuesto = async (id_repuesto) => {
  return await (await fetch(API_URL_TALLERES + "repuestos/" + id_repuesto + "/")).json();
}

export const addRepuesto = async (repuesto) => {
  return await fetch(API_URL_TALLERES + "repuestos/", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      //"Authorization": 'Token '+ auth_token,
    },
    body: JSON.stringify({
      'nombre': String(repuesto.nombre).trim(),
      'descripcion': String(operacion.descripcion).trim(),
      'marca': "",
      'fabricante': "",
      'foto': "",
      'claseRepuesto': "",
    }),
  })
}

export const updateOperacion = async (operacion, id_operacion) => {
  return await fetch(API_URL_PROGRAMA_MANTENIMIENTO + "operaciones-mantenimientos/" + id_operacion + "/", {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      //"Authorization": 'Token '+ auth_token,
    },
    body: JSON.stringify({
      'nombre': String(operacion.nombre).trim(),
      'descripcion': String(operacion.descripcion).trim(),
    }),
  })
}