import React, { useState } from 'react'
import{ Link } from 'react-router-dom'; 
import './style.css' 
import { styled } from 'styled-components'
import scrub from './scrubData'

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


export default function Scrub() {
  const [scrubs] = useState(scrub)

  return (
    <>
      <div className="wrap">

        <div className="menu_tit">
          <h2>필링/스크럽</h2>
        </div>
            
        <div className="item_wrap"> 

          {
            scrubs.map((scrub,index) => {
                return(
              <div className="item_box" key={index}>
                <Link to={`/scrub/scrubdetail/${index}`}>
                <div className="item_img">
                <img src={scrub.image} alt="img" />
                <div className="hover_wish">
                    장바구니
                </div>
                </div>

                <FlexBox>
                  <Tagbox>{scrub.tag1}</Tagbox>
                  <Tagbox>{scrub.tag2}</Tagbox>
                  <Tagbox>{scrub.tag3}</Tagbox>
                </FlexBox>

                <div className="item_title">{scrub.title}  </div>
                <div className="price_wrap"> 

                    <div>
                        {
                          scrub.sale>0&&<span className="item_sale">{scrub.sale}%</span>
                        }
                    </div>
                    <div >

                        {
                          scrub.sale>0 && <span className="item_price line">￦{(scrub.price).toLocaleString('ko-KR')}</span> 
                        }
                    </div> 
                    <div>
                        {
                          scrub.sale>0 ? <span className="item_last_price">￦{(scrub.price - ((scrub.price) * (scrub.sale / 100))).toLocaleString('ko-KR')}</span> : <span className="item_last_price">￦{(scrub.price).toLocaleString('ko-KR')}</span>
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
