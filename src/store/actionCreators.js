import { SETUSERID, SETTOKEN } from './actionTypes';

export const setUserId = (val) => ({ type: SETUSERID, payload: val });
export const setToken = (val) => ({ type: SETTOKEN, payload: val });
