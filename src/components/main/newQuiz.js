import React, { Fragment } from 'react';
import Dropdown from '../../elements/dropdown';

const NewQuiz = (props) => {

    const renderNewQuiz = () => {
        let contenido = null;

        if (props.info.data !== undefined) {
            contenido = (
                <section>
                    <p>Please choose the topics and level to start the quiz</p>
                    <Dropdown
                        title='topic'
                        list={props.info.data.topics}/>
                    <Dropdown
                        title='level'
                        list={props.info.data.levels}/>
                    <button>Submit</button>
                </section>
            );
        };
        return contenido;
    };

    return (
        <Fragment>
            {renderNewQuiz()}
        </Fragment>

    );
};

export default NewQuiz;