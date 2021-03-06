import * as types from '../actions/actionTypes';

export default function productLines (state= {}, action) {
    switch (action.type) {
        case types.FETCH_PRODUCTS_LINES_DATA: {
            const newState = {};
            action.payload.map((value)=> newState[value.productLine] = value);
            return {
                ...newState
            }
        }
        default: return state;
    }
}