import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
import {rootReducer} from './rootReducer'

const middleware = [thunk]
//create the store
export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleware)  
      // other store enhancers if any 
    )
  );