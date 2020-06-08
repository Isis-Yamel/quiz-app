import Header from '../components/header/header';
import Main from '../components/main/main';

import React, { Fragment } from 'react';
import '../css/App.scss';

const App = () => {
    return (
        <Fragment>
            <Header/>
            <Main/>
        </Fragment>
    );
};

export default App;
