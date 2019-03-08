import axios from "axios";
import jwt_decode from 'jwt-decode';
import {GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from '../../utils/setAuthToken';

export const registerUser = (userData) => async dispatch => {
    try {
        await axios.post('/api/users/register', userData);
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
};

export const loginUser = userData => async dispatch => {
    try {
        const res = await axios.post('/api/users/login', userData);
        //Save to local storage
        const {token} = res.data;
        //Set token to local storage
        localStorage.setItem('jwtToken', token);
        //Set token to auth header
        setAuthToken(token);
        //Decode token to get user data
        const decoded = jwt_decode(token);
        //Set current user
        dispatch(setCurrentUser(decoded));
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};
