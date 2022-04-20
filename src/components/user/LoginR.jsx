import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../../index.css";

const login = () => {
    const navigate = useNavigate();

    const [user,setUser] = useState([]);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const user_conected = await UserServer.userConected()
    };

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
  return (
    <div className="maincontainer">
      <div class="container-fluid">
        <div class="row no-gutter">
          <div class="col-md-6 d-none d-md-flex bg-image"></div>

          <div class="col-md-6 bg-light">
            <div class="login d-flex align-items-center py-5">
              <div class="container">
                <div class="row">
                  <div class="col-lg-10 col-xl-7 mx-auto">
                    <h3 class="display-4 text-center">C A R P E N</h3>
                    <p class="text-muted mb-4 text-center">
                      Ingresa tu Correo y Contraseña.
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div class="mb-3">
                        <input
                          id="inputEmail"
                          type="email"
                          placeholder="Direccion de Correo Electronico"
                          required=""
                          autofocus=""
                          class="form-control rounded-pill border-0 shadow-sm px-4"
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          id="inputPassword"
                          type="password"
                          placeholder="Contraseña"
                          required=""
                          class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                        />
                      </div>
                      <div class="form-check">
                        <input
                          id="customCheck1"
                          type="checkbox"
                          checked
                          class="form-check-input"
                        />
                        <label for="customCheck1" class="form-check-label">
                          Recordarme
                        </label>
                      </div>
                      <div class="d-grid gap-2 mt-2">
                        <button
                          type="submit"
                          class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        >
                          Iniciar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default login;
