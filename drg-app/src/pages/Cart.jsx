import React, { useState } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { plusCount, miusCount, deleteAll, deleteItem } from './store';
import Footer from '../components/Footer';

const CartWrap = styled.div`
  .cart_inner{
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0;

    .cart_tit{
      margin-top: 30px;
      ul{
        display: flex;
        li{
          text-align: center;
          background-color: #fafafa;
          padding: 20px 0;
          border-top: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          &:nth-child(1){
            width: 10%;
          }
          &:nth-child(2){
            width: 40%;
          }
          &:nth-child(3){
            width: 15%;
          }
          &:nth-child(4){
            width: 15%;
          }
          &:nth-child(5){
            width: 20%;
          }
        }
      }
    }

    .list_box{
      .list{
        border-bottom: 1px solid #ddd;
        li{
          display: flex;
          align-items: center;
          text-align: center;
          padding: 20px 0;
          border-bottom: 1px solid #ccc;
          &:last-child{
            border-bottom: none;
          }

          div{
            &.check{
              width: 10%;
            }
            &.item_name{
              display: flex;
              align-items: center;
              width: 40%;
              padding-left: 10px;

              img{
                width:100px;
                margin-right: 30px;
                border: 1px solid #ebebeb;
              }
            }
            &.amount{
              display: flex;
              justify-content: center;
              align-items: center;
              width: 15%;
              p{
                margin: 0 15px;
              }
              button{
                width: 35px;
                height: 35px;
                background-color: #fff;
                border-radius: 50%;
                border: 1px solid #ccc;
                font-size: 20px;
                cursor: pointer;
              }
            }
            &.pr_price{
              width: 15%;
              font-weight: 700;
            }
            &.payment{
              width: 20%;
              .origin_under{
                text-decoration: line-through;
                color: #ccc;
              }
              
              .sale_price, .origin{
                font-weight: 700;
              }
            }
          }
        }
      }
    }

    .empty{
      padding: 50px 0;
      border-bottom: 1px solid #ccc;
      text-align: center;
      img{
        display: inline-block;
        padding-bottom: 5px;
      }
      p{
        font-size: 24px;
        font-weight: 700;
        color: #777;
      }
    }
  }
`

  const DeleteBox = styled.div`
    text-align: right;
    margin: 20px 0;
  `
  const DeleteBtn = styled.button`
    height: 30px;
    padding: 0 15px;
    margin-right: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    cursor: pointer;

    &:last-child{
      background-color: #4f342a;
      color: #fff;
      margin-right: 0;
    }
  `

  const TotalBox = styled.div`
    display: flex;
    background-color: #fafafa;
    border: 1px solid #ccc;
    &>div{
      position: relative;
      width: 36%;
      padding: 30px 0;
      text-align: center;
      border-right: 1px solid #ccc;

      span{
        display: block;
        position: absolute;
        right: -15px;
        top:50%;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid #ccc;
        z-index: 1;

        &.plus{
          background: url(/assets/main_img/cart_plus.svg) no-repeat;
          background-position: center center;
          background-size: 10px 10px;
          background-color: #fff;
        }
        &.mius{
          background: url(/assets/main_img/cart_mius.svg) no-repeat;
          background-position: center center;
          background-size: 10px 10px;
          background-color: #fff;
        }
        &.equal{
          background: url(/assets/main_img/cart_equal.svg) no-repeat;
          background-position: center center;
          background-size: 10px 10px;
          background-color: #fff;
        }
      }
      p{
        letter-spacing: -1px;

        &.money{
          letter-spacing: 0;
          padding-top: 10px;
          font-size: 28px;
          font-weight: 500;
        }
      }

      &:last-child{
        background-color: #2fcab0;
        border-right: none;
        p{
          color: #fff;
        }
      }
    }
  `

  const OrderBox = styled.div`
    text-align: center;
    margin-top: 20px;
    button{
      margin-right: 15px;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 30px;
      padding: 15px 25px;
      font-size: 20px;
      font-weight: 700;
      cursor: pointer;
      transition: .3s linear;
      &:hover{
        border: 1px solid #000;

        &:last-child{
          background-color: #83240a;
        }
      }
      &:last-child{
        background-color: #4f342a;
        color: #fff;
        margin-right: 0;
      }
    }
  `


export default function Cart() {

  const state = useSelector((state)=>state.cart);
  const dispatch = useDispatch();

  const [checkList, setCheckList] = useState([]);
  
  //각 체크박스 체크시 checkList에 담기는부분
  const changeSelect = (checked, id) => {
    if(checked) {
      setCheckList([...checkList, id]);
    }else{
      setCheckList(checkList.filter(el=>el!==id))
    }

  }

  //전체체크박스 누를시 전체체크 모든 id값이 배열에 담기는부분
  const AllCheck = (checked) => {
    if(checked){
      const Array = [];
      state.forEach((el)=>Array.push(el.id));
      setCheckList(Array);
    }else{
      setCheckList([]);
    }
  }
  
  let total=0;
  // 할인이 있다면 할인된가격 total에 리턴, 없다면 원가리턴
  state.map((item)=>{
    if(item.sale>0){
      return(
      total+=((item.price*item.count) - ((item.price*item.count) * (item.sale / 100)))
      )
    }else{
      return(
        total+=(item.price*item.count)
      )
    }

  })

  // 장바구니에 담겨있는 상품이 없을시 랜더링
  if(state.length===0){
    return(
      <>
        <CartWrap>
            <div className="cart_inner">
              <h1>장바구니({state.length})</h1>

            <div className="cart_tit">
              <ul>
                <li><input type="checkbox"/></li>
                <li>상품정보</li>
                <li>수량</li>
                <li>상품금액</li>
                <li>결재금액</li>
              </ul>
            </div>

            <div className='empty'>
              <img src={process.env.PUBLIC_URL + 'assets/main_img/empty_icon.svg'} alt="empty" />
              <p>담겨있는 상품이 없어요!</p>
            </div>
          </div>
        </CartWrap>
      </>
    )
  }

  // 장바구니에 상품이 하나라도 있을시
  return (
    <>
      <CartWrap>

        <div className="cart_inner">
          <h1>장바구니({state.length})</h1>

        <div className="cart_tit">
          <ul>
            <li><input type="checkbox" onChange={(e)=> AllCheck(e.target.checked)} checked={checkList.length===state.length ? true:false}/></li>
            <li>상품정보</li>
            <li>수량</li>
            <li>상품금액</li>
            <li>결재금액</li>
          </ul>
        </div>
      
        {/* 담기는 상품보여주는영역 */}

        <div className="list_box">
          <ul className='list'>
            
            {
              state.map((product, i) => {
                
                return(
                  <li key={i}>
                    <div className="check">
                      <input type="checkbox" value={product.id||''} onChange={(e) => changeSelect(e.target.checked, product.id)} checked={checkList.includes(product.id)?true:false}/>
                    </div>

                    <div className="item_name">
                      <img src={product.image} alt="121" />
                      <p>{product.title}</p>
                    </div>

                    <div className="amount">
                      <button type='button' onClick={()=>dispatch(miusCount({id:product.id}))}>-</button>
                      <p>{product.count}</p>
                      <button type='button' onClick={()=>dispatch(plusCount({id:product.id}))}>+</button>
                    </div>

                    <div className="pr_price">
                      <p>{(product.price*product.count).toLocaleString('ko-KR')}원</p>
                    </div>

                    <div className="payment">
                      <p className={product.sale>0 ? 'origin_under' : 'origin'}>{(product.price*product.count).toLocaleString('ko-KR')}원</p>
                      <p className='sale_price' style={{display:product.sale>0 ? 'block' : 'none'}}>
                        {((product.price*product.count) - ((product.price*product.count) * (product.sale / 100))).toLocaleString('ko-KR')}원
                      </p>
                    </div>
                  </li>
                )

              })
            }
          </ul>
        </div>
        
        {/* {선택삭제 클릭시 현재 checkList를 배열로넘긴후, checkList빈배열로 초기화} */}
        <DeleteBox style={{display:state.length>0 ? 'block' : 'none'}}>
          <DeleteBtn type='button' onClick={()=>(
            dispatch(deleteItem({checkItems: [...checkList]}, 
              setCheckList([]))))}>선택 삭제</DeleteBtn>
              
          <DeleteBtn type='button' onClick={()=>(
            dispatch(deleteAll(), alert('전체 삭제되었습니다.'))
           )}>전체 삭제</DeleteBtn>
        </DeleteBox>

        <TotalBox>
          <div className="total_payment">
            <p>총 결제금액</p>
            <p className='money'>
            {total.toLocaleString('ko-KR')}
            </p>
            <span className='plus'></span>
          </div>

          <div className="delivery_fee">
            <p>배송비</p>
            <p className='money'>{total>=50000 ? '0' : '2500'}</p>
            <span className='mius'></span>
          </div>

          <div className="total_payment">
            <p>결제 예정금액</p>
            <p className='money'>
              {total.toLocaleString('ko-KR')}
            </p>
          </div>
        </TotalBox>

        <OrderBox>
          <button type='button'>선택상품 주문하기</button>
          <button type='button'>전체상품 주문하기</button>
        </OrderBox>
        </div>
      </CartWrap>
      <Footer/>

    </>
  )
}
