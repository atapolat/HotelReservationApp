export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';


export const addToFavorites = (hotel) => ({
  type: ADD_TO_FAVORITES,
  payload: hotel,
});

export const removeFromFavorites = (hotelId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: hotelId,
});
  