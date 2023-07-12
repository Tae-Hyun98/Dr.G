import {configureStore, createSlice} from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'product_cart',
  initialState:[],
  reducers:{
    addItem(state, action){
      const index = state.findIndex((findId)=>{
        return findId.id===action.payload.id
      })

      if(index>-1){
        state[index].count++
      }else{
        state.push(action.payload)
      }
    }
  }
})

export const {addItem} = cart.actions

export default configureStore({
  reducer:{
    cart:cart.reducer
  }
})