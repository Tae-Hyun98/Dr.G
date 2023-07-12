import React, { useState } from 'react'
import './style.css' 
import { styled } from 'styled-components'
import toner from './tonerData'
import { Link } from 'react-router-dom'

const Tagbox = styled.div`
  width: 65px;
  height: 22px;
  background-color: #2fcab0;
  color: #fff;
  text-align: center;
  margin-right: 10px;
  margin-top: 5px;
  font-size: 12px;
  line-height: 22px;
  border-radius: 10px;
`
const FlexBox = styled.div`
  display: flex;

`

export default function Toner() {
  const [toners] = useState(toner)
  return (
    <>
    <div className="wrap">

    <div className="menu_tit">
      <h2>토너/미스트</h2>
    </div>
        
    <div className="item_wrap"> 

      {
        toners.map((toner,index) => {
            return(
          <div className="item_box" key={index}>
            <Link to={`/toner/tonerdetail/${index}`}>
            <div className="item_img">
            <img src={toner.image} alt="img" />
            <div className="hover_wish">
                장바구니
            </div>
            </div>

            <FlexBox>
              <Tagbox>{toner.tag1}</Tagbox>
              <Tagbox>{toner.tag2}</Tagbox>
              <Tagbox>{toner.tag3}</Tagbox>
            </FlexBox>

            <div className="item_title">{toner.title}  </div>
            <div className="price_wrap"> 

                <div>
                    {
                      toner.sale>0&&<span className="item_sale">{toner.sale}%</span>
                    }
                </div>
                <div >

                    {
                      toner.sale>0 && <span className="item_price line">￦{(toner.price).toLocaleString('ko-KR')}</span> 
                    }
                </div> 
                <div>
                    {
                      toner.sale>0 ? <span className="item_last_price">￦{(toner.price - ((toner.price) * (toner.sale / 100))).toLocaleString('ko-KR')}</span> : <span className="item_last_price">￦{(toner.price).toLocaleString('ko-KR')}</span>
                    }
                </div>

              </div>
              </Link>

            <div className="item_wish"><span>장바구니</span></div>


          </div>
          )
          })
            
        }
    </div>
    </div>




    </>
  )
}
