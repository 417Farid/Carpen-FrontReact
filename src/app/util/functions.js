//Alertas Bonitas
import Swal from "sweetalert2";

/*export async function alert_detail_vehiculo(vehiculo) {
     let html = printVehiculo(vehiculo);
     let width = 200;
     if(window.innerWidth<600){
          width = 250;
     }
     Swal.fire({
          html: html,
          width: width,
          heightAuto: true,
     })
};*/

/*function printVehiculo(vehiculo) {
     let html ="<div style='display:grid; grid-gap: 1rem; grid-template-columns: repeat(2, 1fr);'>"+
          "<span><b>Marca: </b>" + vehiculo.marca + "</span>\
          "+ "<span><b>Modelo: </b>" + vehiculo.modelo + "</span>\
          "+ "<span><b>Linea: </b>" + vehiculo.linea + "</span>\
          "+ "<span><b>Color: </b>" + vehiculo.color + "</span>\
          "+ "<span><b>Placa: </b>" + vehiculo.placa + "</span>\
          "+ "<span><b>Tipo Combustible: </b>" + vehiculo.tipoCombustible + "</span>\
          "+ "<span><b>Número Serie: </b>" + vehiculo.numeroSerie + "</span>\
          "+ "<span><b>Número Motor: </b>" + vehiculo.numeroMotor + "</span>\
          "+ "<span><b>Número Chasís: </b>" + vehiculo.numeroChasis + "</span>\
          "+ "<span><b>Kilometraje Actual: </b>" + vehiculo.kilometrajeActual + "</span>\
          "+ "<span><b>Kilometraje Último Mantenimiento: </b>" + vehiculo.kilometrajeUltimoMantenimiento + "</span>\
          "+ "<span><b>Nombre Conductor: </b>" + vehiculo.nombreConductor + "</span>\
          "+ "<span><b>Fecha Soat: </b>" + vehiculo.fechaSoat + "</span>\
          "+ "<span><b>Fecha Técnico Mécanica: </b>" + vehiculo.fechaTecnicoMecanica + "</span>\
          "+ "<span><b>Fecha Matricula: </b>" + vehiculo.fechaMatricula + "</span>\
          "+ "<span><b>Fecha Registro: </b>" + vehiculo.fechaRegistro + "</div>";
     return html;
}*/

export function alert_login(success, message) {
     Swal.fire({
          icon: 'success',
          title: String(success).trim(),
          text: String(message).trim(),
          showConfirmButton: false,
          timer: 1500
     });
};

export function alert_success(success, message) {
     Swal.fire({
          title: success,
          text: message,
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
     });
};

export function alert_confirm(success, message) {
     Swal.fire({
          title: 'Está seguro?',
          text: "No se puede revertir!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Eliminar',
          cancelButtonText: 'Cancelar'
     }).then((result) => {
          if (result.isConfirmed) {
               Swal.fire(
                    success,
                    message,
                    'success'
               )
          }
     })
}

export function alert_logout() {
     let timerInterval
     Swal.fire({
          title: 'Cerrando Sesión!',
          timer: 2500,
          timerProgressBar: true,
          didOpen: () => {
               Swal.showLoading()
               const b = Swal.getHtmlContainer().querySelector('b')
               timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
               }, 100)
          },
          willClose: () => {
               clearInterval(timerInterval)
          }
     }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
               console.log('I was closed by the timer')
          }
     })
}

export function alert_error(error, message) {
     Swal.fire({
          icon: 'error',
          title: error,
          text: message,
     });
};

export function verificarCamposRegister() {
     let nombre = document.getElementById("nombre").value;
     let apellido = document.getElementById("apellido").value;
     let tipoDocumento = document.getElementById("tipoDocumento").value;
     let numeroDocumento = document.getElementById("numeroDocumento").value;
     let ciudad = document.getElementById("ciudad").value;
     let email = document.getElementById("email").value;
     let password = document.getElementById("password").value;
     if (nombre === "" || apellido === "" || tipoDocumento === "" || numeroDocumento === "" || ciudad === "" || email === "" || password === "") {
          alert_error("Oops...!", "Los campos no pueden estar vacios.");
     } else {
          if (verificarContraseña()) {
               let button = document.getElementById("btn_register_user");
               button.setAttribute('type', 'submit');
          }
     }
};

function verificarContraseña() {
     let password = document.getElementById('password').value;
     if (password.length >= 8) {
          let codigo, mayus, mini, num;
          mayus = false;
          mini = false;
          num = false;
          for (let index = 0; index < password.length; index++) {
               codigo = password.charCodeAt(index);
               //Mayusculas
               if (codigo >= 65 && codigo <= 90) {
                    mayus = true;
               }
               //Minusculas
               if (codigo >= 97 && codigo <= 122) {
                    mini = true;
               }
               //Numeros
               if (codigo >= 48 && codigo <= 57) {
                    num = true;
               }
          }
          if (mayus && mini && num) {
               return true;
          }
     } else {
          alert_error("Error", "La contraseña debe tener como minimo 8 caracteres. \n Además, la contraseña debe tener al menos una letra mayuscula, una minuscula y un numero.");
          return false;
     }
}

export function firstCharUpper(cadena) {
     let array = cadena.split(" ");
     let word = "";
     cadena = "";
     for (let i = 0; i < array.length; i++) {
          for (let j = 0; j < array[i].length; j++) {
               if (j === 0) {
                    word += array[i].charAt(j).toUpperCase();
               } else {
                    word += array[i].charAt(j);
               }
          }
          cadena += word;
          word = "";
          if ((i + 1) < array.length) {
               cadena += " ";
          }
     }
     return cadena;
}

export function generateClick() {
     console.log(document.getElementById("claseRepuesto").value)
     let element = document.getElementById("btn_register");
     
}