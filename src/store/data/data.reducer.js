import { DATA_ACTION_TYPES } from "./data.types";

export const dataReducer = (state = DATA_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case DATA_ACTION_TYPES.FETCH_DATA_START:
            return {
                ...state,
                isLoading: true,
            }
        case DATA_ACTION_TYPES.FETCH_DATA_SUCCESS:
            return {
                ...state,
                dataSet: payload,
                isLoading: false,
            }
        case DATA_ACTION_TYPES.FETCH_DATA_FAILED:
            return {
                ...state,
                error: payload,
                isLoading: false,
            }
        default:
            return state;
    }
}

const DATA_INITIAL_STATE = {
    dataSet: null,
    isLoading: false,
    error: null,
}