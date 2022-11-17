import React from "react";


class Orden extends React.Component{
  render(){
    return(
		<div class="container-flex fixed-bottom">
			<nav class="navbar bg-dark "> 
                <ul class="nav justify-content-end">

                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="http://localhost:3000/">Quienes Somos?</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3000/">Como Funciona?</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3000/">Preguntas Frecuentes</a>
                    </li>

                </ul>
			</nav>
		</div>
		);
  }
}

export default Orden;