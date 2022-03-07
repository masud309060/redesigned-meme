import * as ACTION from "./userActionType";


export const getUserData = (type, payload) => ({
    type: ACTION.GET_USER_DATA,
    payload
})