export const handlerClicked = () => {
    return {
        type: "HANDLER_CLICKED",
    };
};

export const dataFetchInitated = () => {
    return {
        type: "DATA_FETCH_INITATED",
    };
};

export const dataFetchSuccess = (payload) => {
    return {
        type: "DATA_FETCH_SUCCESS",
        payload,
    };
};

export const dataFetchFailure = () => {
    return {
        type: "DATA_FETCH_FAILED",
    };
};