import * as types from '../actions/types';

const initialState = {
    answers: [],
    questions: [],
};

export default function reducer(state = initialState, actions) {
    switch (actions.type) {
        case types.SHOW_DATA:
            return ({
                ...state,
                answers: [1, 2, 3]
            })

        default: return state;
    }
}