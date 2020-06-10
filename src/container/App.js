import Header from '../components/header/header';
import Main from '../components/main/main';
import AddQuestions from '../components/main/addQuestions';
import NewQuiz from '../components/main/newQuiz';
import { fetchOptions } from '../store/actions/actions';
import { connect } from 'react-redux';

import React, { Component } from 'react';
import '../css/App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

class App extends Component {

    componentDidMount() {
        this.props.fetchOptions()
    };
    render () {
        return (
            <BrowserRouter basename='/'>
                <Header/>
                <main>
                <Main/>
                    <Switch>
                        <Route
                            path='/add-questions'
                            render={(props) => <AddQuestions {...props} info={this.props.option}/>}/>
                        <Route
                            path='/start-quiz'
                            render={(props) => <NewQuiz {...props} info={this.props.option} />}/>
                    </Switch>
                </main>
            </BrowserRouter>
        );
    };
};

const mapStateToProps = state => {
    return {
        option: state.questionOptions
    };
};

const mapDispatchToProps = { fetchOptions };

export default connect(mapStateToProps, mapDispatchToProps)(App);
