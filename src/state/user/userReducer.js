import * as ACTION from "./userActionType";

const initialState = {
    userList: null,
    isLoading: false,
    error: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.GET_USER_DATA :
            return {...state, isLoading: true}

        case ACTION.GET_USER_DATA_SUCCESS :
            return {...state, userList: action.payload, isLoading: false, error: ""}

        case ACTION.GET_USER_DATA_FAILED :
            return {...state, userList: null, isLoading: false, error: action.payload}

        default:
            return state
    }
}

export default userReducer;