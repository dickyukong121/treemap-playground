import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import { rootReducer } from './root-reducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

//root-reducer

// const middleWares = [logger];

const middleWares = [thunk].filter(
    Boolean
  );
  
  const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
      window &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  

const persistConfig ={
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
// export const store = configureStore(persistedReducer, undefined, composedEnhancers );
export const store = createStore(persistedReducer, undefined, composedEnhancers );

export const persistor = persistStore(store);