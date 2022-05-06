//Alertas Bonitas
import Swal from "sweetalert2";

import {cargarImagen} from "./firebase";

export async function alert_detail_vehiculo(vehiculo){
     let html = printVehiculo(vehiculo);
     Swal.fire({
          title: 'Vehiculo',
          text: "Hola\n"+"Mundo",
          imageUrl: vehiculo.foto,
          imageHeight: 200,
          imageAlt: 'Vehiculo Img',
     })
};

function printVehiculo(vehiculo){
     let html = 
          "Marca: "+vehiculo.marca +"\
          "+"\nModelo: "+vehiculo.modelo+"\
          "+"\nLinea: "+vehiculo.linea+"\
          "+"\nColor: "+vehiculo.color+"\
          "+"\nPlaca: "+vehiculo.placa+"\
          "+"\nTipo Combustible: "+vehiculo.tipoCombustible+"\
          "+"\nNúmero Serie: "+vehiculo.numeroSerie+"\
          "+"\nNúmero Motor: "+vehiculo.numeroMotor+"\
          "+"\nKilometraje Actual: "+vehiculo.kilometrajeActual+"\
          "+"\nKilometraje Último Mantenimiento: "+vehiculo.kilometrajeUltimoMantenimiento+"\
          "+"\nNombre Conductor: "+vehiculo.nombreConductor+"\
          "+"\nFecha Soat: "+vehiculo.fechaSoat+"\
          "+"\nFecha Técnico Mécanica: "+vehiculo.fechaTecnicoMecanica+"\
          "+"\nFecha Matricula: "+vehiculo.fechaMatricula+"\
          "+"\nFecha Registro: "+vehiculo.fechaRegistro+"";
     console.log(html);
     return html;
}

export function alert_login(success, message) {
     Swal.fire({
          icon: 'success',
          title: String(success).trim(),
          text: String(message).trim(),
          showConfirmButton: false,
          timer: 1500
     });
};

export function alert_success(success, message){
     Swal.fire({
          title: success,
          text: message,
          icon:'success',
          showConfirmButton: false,
          timer: 1500
     });
};

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

/*export async function agregar_vehiculo(){
     let index = 0;
     document.querySelectorAll('input').forEach( input => {
          if (index!==12) {
               console.log(index+": "+input.value);
               if(input.value===""){
                    alert_error("Oops...!", "Los campos no pueden estar vacios.");
                    return;
               }
          }
          index++;
     });
     cargarImagen("vehiculos");
};*/

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