import { createStore } from 'redux';
import { SAVE_SEARCH, DELETE_SEARCH } from './actionTypes';

const initialState: any = {
  favoriteCities: []
};

export const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SAVE_SEARCH:
      return {
        ...state,
        favoriteCities: [...state.favoriteCities, action.value]
      };
    case DELETE_SEARCH:
      const searches = [...state.favoriteCities];
      const updatedCities = searches.filter(city => city.id !== action.id);
      return {
        ...state,
        favoriteCities: updatedCities
      };
  }
  return state;
};

const store = createStore(searchReducer);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
