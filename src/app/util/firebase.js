import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@firebase/auth";
import { getStorage, ref, uploadBytes,getDownloadURL, deleteObject  } from '@firebase/storage';
import { alert_error } from './functions';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANzHXMiTJzH15QrLtLJz7WO4RSlO_dvC0",
    authDomain: "carpen-vehiculos.firebaseapp.com",
    projectId: "carpen-vehiculos",
    storageBucket: "carpen-vehiculos.appspot.com",
    messagingSenderId: "482993109946",
    appId: "1:482993109946:web:a9527be65d38bfd1473b83"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export async function cargarImagen(carpeta) {
    let inputFile = document.getElementById("formFile");
    if (inputFile.files.length === 0) {
        alert_error("Oops!", "Seleccione una imagen primero.")
        return;
    } else {
        let file = inputFile.files[0];
        const fileName = file.name.toString();
        let path = modificarName(fileName);
        let imagenRef = carpeta + "/" + path;
        let storageRef = ref(getStorage(firebaseApp), imagenRef);
        const task = await uploadBytes(storageRef, file);

        // Get the download URL
        getDownloadURL(task.ref)
            .then((url) => {
                let foto = document.getElementById("foto");
                foto.value=url;
                let button = document.getElementById("btn_register");
                button.click();
            })
            .catch((error) => {
                console.log(error);
            });
    }
};

export async function cargarImagenRepuesto(carpeta) {
    let inputFile = document.getElementById("formFile");
    if (inputFile.files.length === 0) {
        alert_error("Oops!", "Seleccione una imagen primero.")
        return;
    } else {
        let file = inputFile.files[0];
        const fileName = file.name.toString();
        let path = modificarNameRepuesto(fileName);
        let imagenRef = carpeta + "/" + path;
        let storageRef = ref(getStorage(firebaseApp), imagenRef);
        const task = await uploadBytes(storageRef, file);

        // Get the download URL
        getDownloadURL(task.ref)
            .then((url) => {
                let foto = document.getElementById("foto");
                foto.value=url;
                let button = document.getElementById("btn_register");
                button.click();
            })
            .catch((error) => {
                console.log(error);
            });
    }
};

export function createUserFirebase(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export function sign_in_firebase(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export function logout_firebase() {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

export async function eliminarImagen(url,carpeta) {
    let imagenRef = carpeta+"/"+obtenerNombreImg(url);
    const storage = getStorage();

    // Create a reference to the file to delete
    const task = ref(storage,imagenRef);

    // Delete the file
    deleteObject(task).then(() => {
    // File deleted successfully
    }).catch((error) => {
    // Uh-oh, an error occurred!
    });
}

function obtenerNombreImg(url) {
    let array = url.split("%2F");
    array = array[1].split("?");
    return array[0];
}

function modificarName(fileName) {
    let marca = document.getElementById("marca").value;
    let placa = document.getElementById("placa1").value +"-"+document.getElementById("placa2").value;
    let valor1 = "";
    marca.split(" ").forEach(element=>{
        valor1 += element;
    })
    return hashCode(placa.toUpperCase()) + "-" + valor1 + getExtension(fileName);
}

function modificarNameRepuesto(fileName) {
    let nombre = document.getElementById("nombre").value;
    let array = nombre.split(" ");
    return hashCode(array[0]) + " - " + array[0] + getExtension(fileName);
}

function getExtension(fileName) {
    const file = fileName;
    let extension = "";
    let char = "";
    for (let i = file.length; i > -1; i--) {
        char = file.toString().charAt(i);
        extension += char;
        if (char === ".")
            i = 0;
    }
    let cadena = "";
    for (let i = extension.length; i > -1; i--) {
        cadena += extension.charAt(i);
    }
    return cadena;
}

function hashCode(s) {
    let h = 0;
    for (let i = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;

    return Math.abs(h);
}