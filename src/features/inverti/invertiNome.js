import { createSlice } from '@reduxjs/toolkit'
/**
 * 1
 * definisco uno stato e le funzione che lo manipolano
 */
export const nomi = createSlice({
  name: 'invertiNome',//counter è la stringa che da il nome al reducer  
  initialState: {
    value: 'primo',
    value2:'michele'
   
  },
  reducers: {
    change: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
     state.value==='primo'?state.value='secondo':state.value='primo'
    },
    marco: (state) => {
      state.value2 === 'michele'?state.value2='marco':state.value2='michele'
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { change, marco, incrementByAmount } = nomi.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

/*
 La funzione seguente selectCount è chiamata selettore e ci consente di selezionare un valore dallo stato. 
 I selettori possono anche essere definiti in linea nel componente dove vengono utilizzati al posto del file slice.
  Ad esempio: `useSelector((state) => state.counter.value 
  
 */
export const leggiNome = (state) => state.invertiNome.value
export const leggiMarco = (state) => state.invertiNome.value2

export default nomi.reducer
