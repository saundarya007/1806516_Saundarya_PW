import { put, takeLatest, call, delay } from "redux-saga/effects";
import { 
    dataFetchInitated,
    dataFetchFailure,
    dataFetchSuccess,
} from "../action/action";
import axios from "axios";

function* handleDataFetchSaga(action){
    try{
        yield put(dataFetchInitated());

        const response = yield call(
            axios.get,
            `https://api.covid19india.org/state_district_wise.json`
        );
        yield put(dataFetchSuccess(response.data))
        console.log(response.data);
    }catch(error){
        yield put(dataFetchFailure());
    }
}

export function* watchForHandleDataFetch(){
    yield takeLatest("HANDLER_CLICKED",handleDataFetchSaga);
}