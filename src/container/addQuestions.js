import React, { Component } from 'react';
import Dropdown from '../elements/dropdown';

class AddQuestions extends Component{

    state = {
        levels: ['level 1', 'level 2', 'level 3'],
        topics: ['art', 'history', 'photography']
    };

    render () {
        return (
            <section>
                <form>
                    <Dropdown
                        title='level'
                        list={this.state.levels}/>
                    <label htmlFor='question'>
                        <input name='question' type='text' placeholder='insert question'/>
                    </label>
                    <label htmlFor='answer'>
                        <input name='answer' type='text' placeholder='short answer'/>
                    </label>
                    <Dropdown
                        title='topic'
                        list={this.state.topics}/>
                </form>
            </section>
        );
    }
};

export default AddQuestions;