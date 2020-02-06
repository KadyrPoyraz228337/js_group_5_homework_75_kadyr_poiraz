import axios from 'axios';

export const INPUT_CHANGE_HANDLER = 'INPUT_CHANGE_HANDLER';
export const ENCODE = 'ENCODE';
export const DECODE = 'DECODE';

export const inputChangeHandler = e => dispatch => dispatch({type: INPUT_CHANGE_HANDLER, e});
export const encode = data => dispatch => dispatch({type: ENCODE, data});
export const decode = data => dispatch => dispatch({type:DECODE, data});

export const getEncodeData = data => async dispatch => {
    if(data.encode.length > 0 && data.password.length > 0) {
        const resp = await axios.post('http://localhost:5000/encode', {value: data.encode, password: data.password});
        dispatch(encode(resp.data));
    }
};
export const getDecodeData = data => async dispatch => {
    if(data.decode.length > 0 && data.password.length > 0) {
        const resp = await axios.post('http://localhost:5000/decode', {value: data.decode, password: data.password});
        dispatch(decode(resp.data));
    }
};