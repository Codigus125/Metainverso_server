import React from "react";



class Menu extends React.Component{
  render(){
    return(
        <div class="btn-group dropstart ">
            <button class="btn btn-secondary dropdown-toggle btn-lg" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Cuenta
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="http://localhost:3000/">Inicio</a></li>
                <li><a class="dropdown-item" href="http://localhost:3000/">Configuracion</a></li>
                <li><a class="dropdown-item" href="http://localhost:3000/">Cerra Sesión</a></li>
            </ul>
        </div>
		);
  }
}


export default Menu;