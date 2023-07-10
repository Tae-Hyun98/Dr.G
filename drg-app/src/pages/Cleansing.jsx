import React from 'react'
// import styled from 'styled-components'
import {useState} from 'react'
// import{Routes, Route, Link, useNavigate, useParams} from 'react-router-dom'; 
import './style.css' 
import cleansing from './cleansingData'
import Header from '../components/Header'
import { styled } from 'styled-components'


const Tagbox = styled.div`
  width: 65px;
  height: 22px;
  background-color: #2fcab0;
  color: #fff;
  text-align: center;
  margin-right: 10px;
  margin-top: 5px;
  font-size: 14px;
  line-height: 22px;
`
const FlexBox = styled.div`
  display: flex;

`


export default function Cleansing() {

    const [cleansings] = useState(cleansing)

  return (
    <>
      
      <div className="menu_tit">
        <h2>클렌징</h2>
      </div>
          
      <div className="item_wrap"> 
      
         {
           cleansings.map((cleans,index) => {
              return(
            <div className="item_box" key={index}>
              <div className="item_img">
               <img src={cleans.image} alt="img" />
               <div className="hover_wish">
                  장바구니
               </div>
              </div>

              <FlexBox>
                <Tagbox>{cleans.tag1}</Tagbox>
                <Tagbox>{cleans.tag2}</Tagbox>
                <Tagbox>{cleans.tag3}</Tagbox>
              </FlexBox>

              <div className="item_title">{cleans.title}  </div>
              <div className="item_price">{(cleans.price).toLocaleString('ko-KR')}원 </div>

              <div className="item_wish"><span>장바구니</span></div>


            </div>
             )
            })
              
          }
      </div>
        


           
          
      
    


    </>
  )
}
