import * as types from '../actions/types';

const initialState = {
    questionsInformation: [],
    questionOptions: [],
};

export default function reducer(state = initialState, actions) {
    switch (actions.type) {
        case types.GET_DATA:
            return ({
                ...state,
                questionsInformation: actions.questionsInformation
            });

        case types.GET_OPTIONS:
            return ({
                ...state,
                questionOptions: actions.questionOptions
            });

        default: return state;
    }
}