import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            Not found Page
            <div>
              <Link to="/main">Ir a main</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;