import React, { Component } from 'react';
import Dropdown from '../elements/dropdown';

class NewQuiz extends Component {

    state = {
        levels: ['level 1', 'level 2', 'level 3'],
        topics: ['art', 'history', 'photography']
    };

    render () {
        return (
            <section>
                <p>Please choose the topics you want for the test and level
                    <span>(1 is the easiest, 2 the medium, 3 the hardest)</span>
                </p>
                <Dropdown
                    title='topic'
                    list={this.state.topics}/>
                <Dropdown
                    title='level'
                    list={this.state.levels}/>
                <button>Submit</button>
            </section>
        );
    }
};

export default NewQuiz;