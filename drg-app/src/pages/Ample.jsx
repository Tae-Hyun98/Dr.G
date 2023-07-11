import  { React, useState } from 'react'
// import{Routes, Route, Link, useNavigate, useParams} from 'react-router-dom'; 
import './style.css' 
import { styled } from 'styled-components'
import ample from './ampleData'

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

export default function Ample() {
  const [amples] = useState(ample)
  return (
    <>
    <div className="wrap">

    <div className="menu_tit">
      <h2>에센스/앰플</h2>
    </div>
        
    <div className="item_wrap"> 
    
       {
         amples.map((ample,index) => {
            return(
          <div className="item_box" key={index}>
            <div className="item_img">
             <img src={ample.image} alt="img" />
             <div className="hover_wish">
                장바구니
             </div>
            </div>

            <FlexBox>
              <Tagbox>{ample.tag1}</Tagbox>
              <Tagbox>{ample.tag2}</Tagbox>
              <Tagbox>{ample.tag3}</Tagbox>
            </FlexBox>

            <div className="item_title">{ample.title}  </div>
            <div className="price_wrap"> 

                <div>
                    {
                      ample.sale>0&&<span className="item_sale">{ample.sale}%</span>
                    }
                </div>
                <div >

                    {
                      ample.sale>0 && <span className="item_price line">{(ample.price).toLocaleString('ko-KR')}￦</span> 
                    }
                </div> 
                <div>
                    {
                      ample.sale>0 ? <span className="item_last_price">{(ample.price - ((ample.price) * (ample.sale / 100))).toLocaleString('ko-KR')}￦</span> : <span className="item_last_price">{(ample.price).toLocaleString('ko-KR')}￦</span>
                    }
                </div>

              </div>

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
