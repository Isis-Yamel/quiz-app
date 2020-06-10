import { Link } from 'react-router-dom';

import React, { Component, Fragment } from 'react';

class Main extends Component {

    render () {
        return (
            <Fragment>
                <section className='buttons__layout'>
                    <button className='app__buttons'>
                        <Link to='/add-questions'>Add questions</Link>
                    </button>
                    <button className='app__buttons'>
                        <Link to='/start-quiz'>Star new quiz</Link>
                    </button>
                </section>
            </Fragment>
        );
    }
};

export default Main;