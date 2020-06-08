import AddQuestions from '../../container/addQuestions';
import NewQuiz from '../../container/newQuiz';

import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import React from 'react';

const Main = () => {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
};

export default Main;