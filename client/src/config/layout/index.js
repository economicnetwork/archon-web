import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import RouterComponent from '../router';

class LayoutContainer extends Component {
    render () {
        return (
            <div className={'layout-container'}>
                <Router>
                    <RouterComponent />
                </Router>
            </div>
        )
    }
}

export default LayoutContainer;
