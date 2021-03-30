import React, {useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const WelcomeScreen = ({children}) => {
  //Use ref se utliza para manipular el dom y asociarlo a un comportamiento determinao
  const myRefDiv = useRef(null) //En la primera renderizacion siempre es null
  console.log("myRefDiv.current: ", myRefDiv.current);
  const [vanta, setVanta] = useState(0)

  //Use efect se utliza antes de cada renderización, ya sea por una unicializacion o por 
  // por una actualización que impacte al componente
  useEffect(() => {
    
    console.log("myRefDiv.current en useEffect: ", myRefDiv.current);

    if(!vanta){
      //solo pasa una vez
      //Asignamos a vanta en el use state el valor de la inicialización de la animación clouds
      setVanta(
        Clouds({
        THREE,
        el: myRefDiv.current
      })
      );
      
      console.log("Establezco vanta a un valor diferente de 0");
    }
    
    //Es bueno liberar los recursos que se usan una vez que el componente deja de ser visible, para esto retornamos una funcion
    return ()=>{
      if(vanta){
        //vanta.destroy();
        setVanta(0)
          console.log("Liberando recursos");


      }
      
    }

  },[vanta]) //Se agregan en el array del callback las prpiedades que puedan estar cambiando
  //y que podrían necesita que la app se renderice de nuevo

  return (
    //Use ref se asocia a un elemento
    <div ref={myRefDiv}>
      Welcome Screen
    </div>
  );
};

WelcomeScreen.propTypes = {
  children: PropTypes.node
};

export default WelcomeScreen;