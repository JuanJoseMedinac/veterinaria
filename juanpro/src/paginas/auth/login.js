import React from "react";

const login = () => {
    return(
       <div className="container" id="container">
  <div className="form-container register-container">
    <form action="#">
      <h1>Registrate Aqui.</h1>
      <input type="text" placeholder="Nombre" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="contraseña" />
      <button>Registrate</button>
      <span>o usa tu cuenta de</span>
      <div className="social-container">
        <a href="#" className="social"><i className="lni lni-facebook-fill" /></a>
        <a href="#" className="social"><i className="lni lni-google" /></a>
        <a href="#" className="social"><i className="lni lni-linkedin-original" /></a>
      </div>
    </form>
  </div>
  <div className="form-container login-container">
    <form action="#">
      <h1>Iniciar secion.</h1>
      <input type="email" placeholder="email" />
      <input type="password" placeholder="contraseña" />
      <div className="content">
        <div className="checkbox">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <label>Recordarme</label>
        </div>
        <div className="pass-link">
          <a href="#">olvidaste tu contraseña?</a>
        </div>
      </div>
      <button>Iniciar</button>
      <span>o usa tu cuenta</span>
      <div className="social-container">
        <a href="#" className="social"><i className="lni lni-facebook-fill" /></a>
        <a href="#" className="social"><i className="lni lni-google" /></a>
        <a href="#" className="social"><i className="lni lni-linkedin-original" /></a>
      </div>
    </form>
  </div>
  <div className="overlay-container">
    <div className="overlay">
      <div className="overlay-panel overlay-left">
        <h1 className="title">Hola <br /> Amigo</h1>
        <p>Si ya tienes una cuenta, inicia secion aca </p>
        <button className="ghost" id="login">Login
          <i className="lni lni-arrow-left login" />
        </button>
      </div>
      <div className="overlay-panel overlay-right">
        <h1 className="title">Comienza <br />Tu busqueda ahora</h1>
        <p>Si aun no tienes cuenta, registrate y descubre lo que tenemos para ti.</p>
        <button className="ghost" id="register">Registrate
          <i className="lni lni-arrow-right register" />
        </button>
      </div>
    </div>
  </div>
</div>

    );



}
