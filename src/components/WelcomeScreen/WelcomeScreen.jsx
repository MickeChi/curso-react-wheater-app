import React, {useRef} from 'react';
import PropTypes from 'prop-types';

const WelcomeScreen = ({children}) => {
  const myRefDiv = useRef(null) //En la primera renderizacion siempre es null
  console.log("useRef: ", myRefDiv.current);
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