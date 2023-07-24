import React from 'react'
import './style.css'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { addItem } from './store'

const Btn = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 20px;
  background-color: #62d8d4;
  color: #fff;
  border: 0;
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
`

const CartBtn = styled.button`
  width: 45%;
  height: 50px;
  border-radius: 20px;
  background-color: #62d8d4;
  color: #fff;
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  border: 0;
  transition: .5s;
  &:hover{
    box-shadow: 0 0 10px #555;
  }
`


export default function TonerDetail(props) {

  const {toners} = props
  const {id} = useParams()
  const dispatch = useDispatch();

  return (
    <>
    <div className="wrapping">

      <div className="detail_wrap">

        <div className="detail_left">
          <div className="detail_img">
            <img src={toners[id].image} alt="img" />
          </div>
        </div>

        <div className="detail_right">

          <div className="detail_tit">{toners[id].title}<span className="detail_cate">{toners[id].category}</span> </div>
          <div className="detail_tag_wrap">
            <span>{toners[id].tag1}</span>
            <span>{toners[id].tag2}</span>
            <span>{toners[id].tag3}</span>
          </div>
          <div className="price_wrapper"> 

            <div>
                {
                  toners[id].sale>0&&<span className="item_sale">{toners[id].sale}%</span>
                }
            </div>
            <div >

                {
                  toners[id].sale>0 && <span className="item_price line">￦{(toners[id].price).toLocaleString('ko-KR')}</span> 
                }
            </div> 
            <div>
                {
                  toners[id].sale>0 ? <span className="item_last_price">￦{(toners[id].price - ((toners[id].price) * (toners[id].sale / 100))).toLocaleString('ko-KR')}</span> : <span className="item_last_price">￦{(toners[id].price).toLocaleString('ko-KR')}</span>
                }
            </div>

          </div>
              
          <div className="btn_wrap">
            <Btn>-</Btn>
            <span>0</span>
            <Btn>+</Btn>
          </div>

          <div className="delivery_wrap">
            <span>배송</span>
            <span>+3000원<span className='free'> (50,000원 이상 무료배송)</span></span>
          </div>


          <div className="total_price">
            <span>총 금액 합계</span>
            {
              toners[id].sale>0 ? <span>￦{(toners[id].price - ((toners[id].price) * (toners[id].sale / 100))).toLocaleString('ko-KR')}</span> : <span>￦{(toners[id].price).toLocaleString('ko-KR')}</span>
            }
          </div>

          <div className="btn_wrap">
            <CartBtn onClick={()=> dispatch(addItem({
              id:toners[id].id, image:toners[id].image, title:toners[id].title, sale: toners[id].sale, count:1, price: toners[id].price
            }))}>장바구니</CartBtn>
            <CartBtn>구매하기</CartBtn>
            
          </div>
          



        </div>



      </div>


      </div>

    </>
  )
}
