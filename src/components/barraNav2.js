import React from "react";
import logo from "../images/logo_temp.png"
import Menu2 from "./menu2.js";



class barraNav extends React.Component{
  render(){
    return(
		<div class="container-justify">
			<nav class="navbar navbar-fixed-top  navbar-expand" style={{paddingTop: '0px'}}> 
				<div class="container-fluid  d-inline-flex p-2 bd-highlight">
					<div class="d-flex justify-content-start align-items-center">
						<div class="navbar-brand " href="http://localhost:3000/">
							<img src={logo} width="130" alt="logo" class="d-inline-flex align-text-top " onClick={apretaLogo}/>
						</div>
						<h1 class='text-white '>
							MetaInverso
						</h1>
					</div>
					<div class="d-flex justify-content-end m-2">
					<Menu2></Menu2>
					</div>
					
				</div>
			</nav>
		</div>
		);
  }
}


function apretaLogo(){
	console.log("Recargando página")
	window.location.reload()
}

export default barraNav;