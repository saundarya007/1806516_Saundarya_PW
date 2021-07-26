import { all, fork } from "redux-saga/effects";
import * as saga from "./index";

export default function* rootSaga(){
    yield all([...Object.values(saga)].map(fork));
}