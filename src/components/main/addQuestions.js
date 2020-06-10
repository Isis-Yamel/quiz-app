import React, { Fragment } from 'react';
import Dropdown from '../../elements/dropdown';
import '../../css/newQuestion.scss';

const AddQuestions = (props) => {

    const renderAddNewQuestion = () => {
        let content = null;

        if (props.info.data !== undefined) {

            content = (
                <section>
                    <form className='form__layout'>
                        <Dropdown
                            title='topic'
                            list={props.info.data.topics}/>
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
                            list={props.info.data.levels}/>
                        <button className='button__submit'>Submit</button>
                    </form>
                </section>
            );
        };

        return content;
    };

    return (
        <Fragment>
            {renderAddNewQuestion()}
        </Fragment>
    );
};

export default AddQuestions;