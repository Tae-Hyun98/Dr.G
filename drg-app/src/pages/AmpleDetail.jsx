import React from 'react'
import './style.css'
// import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

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


export default function AmpleDetail(props) {
    const {amples} = props
    const {id} = useParams()
  return (
    <>
     <div className="wrapping">

            <div className="detail_wrap">

            <div className="detail_left">
                <div className="detail_img">
                <img src={amples[id].image} alt="img" />
                </div>
            </div>

            <div className="detail_right">

                <div className="detail_tit">{amples[id].title}<span className="detail_cate">{amples[id].category}</span> </div>
                <div className="detail_tag_wrap">
                <span>{amples[id].tag1}</span>
                <span>{amples[id].tag2}</span>
                <span>{amples[id].tag3}</span>
                </div>
                <div className="price_wrapper"> 

                <div>
                    {
                        amples[id].sale>0&&<span className="item_sale">{amples[id].sale}%</span>
                    }
                </div>
                <div >

                    {
                        amples[id].sale>0 && <span className="item_price line">￦{(amples[id].price).toLocaleString('ko-KR')}</span> 
                    }
                </div> 
                <div>
                    {
                        amples[id].sale>0 ? <span className="item_last_price">￦{(amples[id].price - ((amples[id].price) * (amples[id].sale / 100))).toLocaleString('ko-KR')}</span> : <span className="item_last_price">￦{(amples[id].price).toLocaleString('ko-KR')}</span>
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
                <span>+3000원<span className='free'> (30,000원 이상 무료배송)</span></span>
                </div>


                <div className="total_price">
                <span>총 금액 합계</span>
                {
                    amples[id].sale>0 ? <span>￦{(amples[id].price - ((amples[id].price) * (amples[id].sale / 100))).toLocaleString('ko-KR')}</span> : <span>￦{(amples[id].price).toLocaleString('ko-KR')}</span>
                }
                </div>

                <div className="btn_wrap">
                <CartBtn>장바구니</CartBtn>
                <CartBtn>구매하기</CartBtn>
                
                </div>
                



            </div>



            </div>


     </div>
    </>
  )
}
