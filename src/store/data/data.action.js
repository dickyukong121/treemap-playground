import { createAction } from '../../utils/reducer/reducer.utils';
import { DATA_ACTION_TYPES } from './data.types';


export const fetchDataStart = () =>
  createAction(DATA_ACTION_TYPES.FETCH_DATA_START);

export const fetchDataSuccess = (data) =>
  createAction(DATA_ACTION_TYPES.FETCH_DATA_SUCCESS, data);

export const fetchDataFailed = (error) =>
  createAction(DATA_ACTION_TYPES.FETCH_DATA_FAILED, error);

export const fetchData = (data) => async(dispatch) => {
  dispatch(fetchDataStart())
  try {
    dispatch(fetchDataSuccess(data));
  } catch(error) {
    dispatch(fetchDataFailed(error));
  }
}