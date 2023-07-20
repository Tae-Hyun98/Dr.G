import {configureStore, createSlice} from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'cart',
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
    },

    plusCount(state, action){
      const index = state.findIndex((findId)=>{
        return findId.id===action.payload.id
      })
      
      if(index>-1){
        state[index].count++
      }
        
    },

    miusCount(state, action){
      const index = state.findIndex((findId)=>{
        return findId.id===action.payload.id
      })

      if(state[index].count > 1){
        state[index].count--
      }
    },

    deleteAll(){
      return [];
    },

    deleteItem(state, action){
      action.payload.data.checkList.forEach((ch)=>{
        const index = state.findIndex(el=>{
          return el.id===ch
        })
        state.slice().splice(index,1)

      })

        // return state.filter((el)=> el!==el.id);
    }
  }
})

export const {addItem, plusCount, miusCount, deleteAll, deleteItem} = cart.actions

export default configureStore({
  reducer:{
    cart:cart.reducer
  }
})