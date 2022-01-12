import { SETUSERID, SETNAME, SETPHONE } from './actionTypes';

export const reducer = (state, action) => {
    const {type, payload} = action;
    
    switch(type){
        case SETUSERID:
            return {...state, userId: payload };
        case SETNAME:
            return {...state, name: payload};
        case SETPHONE:
            return {...state, phone: payload};
        default:
            return state;
    }
};