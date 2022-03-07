import * as ACTION from "./userActionType";
import {all, call, put, takeEvery} from 'redux-saga/effects';
import {fetchUserData} from "../../api/userApi";

function* userWatcher() {
    yield takeEvery(ACTION.GET_USER_DATA, getUserDataSaga);
}

function* getUserDataSaga(action) {
    try {
        const response = yield call(fetchUserData, action.payload);

        if (response) {
            yield put({type: ACTION.GET_USER_DATA_SUCCESS, payload: response})
        } else {
            yield put({type: ACTION.GET_USER_DATA_FAILED, payload: response.message})
        }

    } catch (err) {
        console.log(err)
    }
}

export default function* userSaga() {
    yield all([
        userWatcher()
    ])
}