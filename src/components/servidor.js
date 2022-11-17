import React from "react";


class Servidor extends React.Component{
  //custiones que organizan y cambian los botones
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return(
		<div class="container-justify m-3">
			<nav class="navbar navbar-fixed-top bg-dark navbar-expand rounded-2" style={{paddingTop: '0px'}}> 
				<div class="container-fluid  d-inline-flex p-2 bd-highlight">
					<div class="d-flex justify-content-start align-items-center gap-2">
                        
            <form>
              <div>
                  {button}
              </div> 
            </form>

            <form>
              <div class="row">
                <div>
                  <h2 class='text-white '>
                    Ip Servidor:
                  </h2>
                </div>
              </div>
            </form>

            <form>
              <div class="row gap-2">
                <div>
                  <h2 class='text-white'>
                   131.221.32.44 : 26000
                  </h2>
                </div>
              </div>
            </form>

					</div>
          <form>
              <div class="row gap-2">
                <div>
                  <h2 class='text-white'>
                   Juego: Cs.Go
                  </h2>
                </div>
              </div>
            </form>
					<div class="d-flex justify-content-end m-2">
					  <h1 class="text-white">Usuario</h1>
					</div>
					
				</div>
			</nav>
      
      <div class="container-justify col m-3 rounded-2 ">
            <div class="border border-dark bg-dark border-5 rounded ">
                <h1 class="text-white">Ventana Servidor</h1>
                <div class="border border-dark bg-black border-5 rounded ">
                  <div class="row ">
                    <form>
                      <h4 class="text-white">
                      <Greeting isLoggedIn={isLoggedIn} />
                      </h4> 
                    </form>
                  </div>

              </div>
            </div>
        </div>
		</div>
    
    
		);
  }
}
//texto nuevo o segundo texto
function UserGreeting(props) {
  return (
  <div class="container-justify col m-3 rounded-2">
    <h1>Servidor Iniciado!!</h1>
    <h5>Servidor alojado en ip: 131.221.32.44</h5>
    <h5>Puerto del servidor: :26000</h5>
    <h5>Usuarios conectados: 0/15</h5>
    <h5 class="text-black">.</h5>
    <h5 class="text-black">.</h5>
    <h5 class="text-black">.</h5>
    <h5 class="text-black">.</h5>
    <input type="text" class="form-control bg-dark border-success" placeholder="Escriba comandos"></input>
  </div>);
}
//texto inicial
function GuestGreeting(props) {
  return <h1>....</h1>;
}
//funcion de cambio entre botones y susu elementos (texto adjunto)
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
//boton 1
function LoginButton(props) {
  return (
    <button class="btn btn-outline-success" onClick={props.onClick}>
      Encendido
    </button>
  );
}
//boton 2
function LogoutButton(props) {
  return (
    <button class="btn btn-outline-danger" onClick={props.onClick}>
      Apagado
    </button>
  );
}

export default Servidor;