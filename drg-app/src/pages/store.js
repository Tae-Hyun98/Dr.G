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

    deleteAll(state, action){
      if(state.length>0){
        return [];
      }
    },

    //배열로 받은 checkItems를 forEach로 돌려 그안에서 현재 cart에 담긴상품의 id값과 같은 item을 삭제
    deleteItem(state, action){
      if(action.payload.checkItems.length>0){
        action.payload.checkItems.forEach((items)=>{
          const index = state.findIndex(el=>{
            return el.id===items
          })
          state.splice(index,1)
        })
        alert('선택하신 상품이 삭제되었습니다.')

      }else{
        alert('삭제하실 상품을 선택해주세요')
      }
    }
  }
})

export const {addItem, plusCount, miusCount, deleteAll, deleteItem} = cart.actions

export default configureStore({
  reducer:{
    cart:cart.reducer
  }
})