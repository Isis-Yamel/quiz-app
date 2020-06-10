import * as actionTypes from './types';

export function fetchOptions() {
    return dispatch => {
        fetch(`https://raw.githubusercontent.com/Isis-Yamel/mockQuizzData/master/questionOptions.json`)
        .then((res) => res.json())
        .then((data) => {
            console.log('test');
            dispatch(getOptions(data));
        });
    };
};

export function getOptions(data) {
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_OPTIONS,
            questionOptions: data
        });
    };
};

export function fetchQuestion() {
    return dispatch => {
        fetch(`https://raw.githubusercontent.com/Isis-Yamel/mockQuizzData/master/questionsInfo.json`)
        .then((res) => res.json())
        .then((data) => {
            dispatch(getData(data));
        });
    };
};

export function getData(data) {
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_DATA,
            questionsInformation: data
        });
    };
};
