import './App.css';
import React from 'react';
import BarraNavegacion2 from './components/barraNav2';
import Servidor from './components/servidor';
import Orden from './components/order';


class App extends React.Component{
    render(){
    return (
        <div class="content bg-image " style={{backgroundImage: `url(https://r4.wallpaperflare.com/wallpaper/946/632/921/espacio-estrellas-naturaleza-planetas-wallpaper-6d6c339403c18162f14ba14803526fe5.jpg)`,backgroundSize: '100%' , height: '100vh'}}>
          <BarraNavegacion2></BarraNavegacion2>
          <Servidor User="Testing"></Servidor>
          <Orden></Orden>
        </div>
    );
  }
}

export default App;