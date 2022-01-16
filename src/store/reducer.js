import { SETUSERID, SETTOKEN} from './actionTypes';

export const reducer = (state, action) => {
    const {type, payload} = action;
    
    switch(type){
        case SETUSERID:
            return {...state, userId: payload };
        case SETTOKEN:
            return {...state, token: payload};
        default:
            return state;
    }
};