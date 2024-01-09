import { createStore, combineReducers } from 'redux';
import favoritesReducer from './Reducers/Reducers';


const rootReducer = combineReducers({
  favorites: favoritesReducer,
});


const store = createStore(rootReducer);

export default store;

