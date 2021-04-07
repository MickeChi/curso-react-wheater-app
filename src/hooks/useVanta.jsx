import { useRef, useEffect, useState } from "react";
import Clouds from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

const useVanta = () => {
  //Use ref se utliza para manipular el dom y asociarlo a un comportamiento determinao
  const myRefDiv = useRef(null); //En la primera renderizacion siempre es null
  console.log("myRefDiv.current: ", myRefDiv.current);
  const [vanta, setVanta] = useState(0);

  //Use efect se utliza antes de cada renderización, ya sea por una unicializacion o por
  // por una actualización que impacte al componente
  useEffect(() => {
    //Urp api openweather: api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    //APi key openweather: 17db8512baf5c08ca1e2e1b5a4efdd2f

    console.log("myRefDiv.current en useEffect: ", myRefDiv.current);

    if (!vanta) {
      //solo pasa una vez
      //Asignamos a vanta en el use state el valor de la inicialización de la animación clouds
      setVanta(
        Clouds({
          THREE,
          el: myRefDiv.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
        })
      );

      console.log("Establezco vanta a un valor diferente de 0");
    }

    //Es bueno liberar los recursos que se usan una vez que el componente deja de ser visible, para esto retornamos una funcion
    return () => {
      if (vanta) {
        //vanta.destroy();
        setVanta(0);
        console.log("Liberando recursos");
      }
    };
  }, [vanta]); //Se agregan en el array del callback las prpiedades que puedan estar cambiando
  //y que podrían necesita que la app se renderice de nuevo

  return myRefDiv 
};

export default useVanta