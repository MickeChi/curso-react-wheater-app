import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => {
    return (
        <div>
            <h1>App</h1>
            <Router>
                <Switch>
                    <Route></Route>
                </Switch>
                
            </Router>
        </div>
    );
};

App.propTypes = {
    
};

export default App;