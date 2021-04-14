import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LANG":
            return {
                ...state, lang: action.lng
            }
        default:
            break;
    }
}
export default createStore(reducer, {lang: []}, applyMiddleware(thunk));
