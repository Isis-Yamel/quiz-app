import AddQuestions from '../components/addQuestions';
import NewQuiz from '../components/newQuiz';

import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import React, { Component, Fragment } from 'react';
import logo from '../assets/logo.png';
import '../css/App.scss';

class App extends Component {

    renderUserSelection = () => {

    }

    render () {
        return (
            <BrowserRouter>
                <Fragment>
                    <header className='app__header'>
                        <h1 className='app__title'> Quiz main screen </h1>
                        <img className='app__image' src={logo} alt='logo'/>
                    </header>
                    <main>
                        <section className='buttons__layout'>
                            <button className='app__buttons'>
                                <Link to='/add-questions'>Add questions</Link>
                            </button>
                            <button className='app__buttons'>
                                <Link to='/start-quiz'>Star new quiz</Link>
                            </button>
                        </section>
                        <Switch>
                            <Route path='/add-questions'component={AddQuestions}/>
                            <Route path='/start-quiz'component={NewQuiz}/>
                        </Switch>
                    </main>
                </Fragment>
            </BrowserRouter>
        );
    };
};

export default App;
