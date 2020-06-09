import React, { Component } from 'react';
import Dropdown from '../elements/dropdown';

import '../css/newQuestion.scss';

class AddQuestions extends Component{

    state = {
        levels: ['level 1', 'level 2', 'level 3'],
        topics: ['art', 'history', 'photography']
    };

    render () {
        return (
            <section>
                <form className='form__layout'>
                    <Dropdown
                        title='topic'
                        list={this.state.topics}/>
                    <div className='form__inputContainer'>
                        <label htmlFor='question'>
                            <input className='form__input' name='question' type='text' placeholder='Insert new question here'/>
                        </label>
                    </div>
                    <div className='form__inputContainer'>
                        <label htmlFor='answer'>
                            <input className='form__input' name='answer' type='text' placeholder='Insert a short answer'/>
                        </label>
                    </div>
                    <Dropdown
                        title='level'
                        list={this.state.levels}/>
                    <button className='button__submit'>Submit</button>
                </form>
            </section>
        );
    }
};

export default AddQuestions;