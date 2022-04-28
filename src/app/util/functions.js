//Alertas Bonitas
import Swal from "sweetalert2";


export function alert_success(success, message) {
     Swal.fire({
          icon: 'success',
          title: String(success).trim(),
          text: String(message).trim(),
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