const API_URL =  "http://127.0.0.1:8099/usuarios/"

export const userConected = async (user)=>{
     return await fetch(API_URL+'sign_in/?email='+user.email+'&password='+user.password);
};

export const userRegister = async(user)=>{
      return await fetch(API_URL,{
          method:'POST',
          headers:{
               'Content-Type':'application/json',
          },
          body:JSON.stringify({
               'nombre':String(user.nombre).trim(),
               'apellido':String(user.apellido).trim(),
               'tipoDocumento':String(user.tipoDocumento).trim(),
               'numeroDocumento':parseInt(user.numeroDocumento),
               'ciudad':String(user.ciudad).trim(),
               'email':String(user.email).trim(),
               'password':String(user.password).trim(),
          }),
     });
};