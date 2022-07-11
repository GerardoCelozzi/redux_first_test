import { configureStore } from '@reduxjs/toolkit';
import pippoReducer from '../features/counter/counterSlice';
import secondoNomeAcasso from '../features/inverti/invertiNome'
/**
 * 2 creo lo store
 * 3 configuro lo store conl metodo configureStore
 * 4 il metodo prende in ingresso un oggetto con prop reducer che a sua volta
 * come valore ha un oggetto con i nomi dei reducer che creiamo 
 */

export default configureStore({
  reducer: {
    counter: pippoReducer,
    invertiNome:secondoNomeAcasso
  },
});
