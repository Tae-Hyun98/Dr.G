import { React,useState } from 'react'
// import{Routes, Route, Link, useNavigate, useParams} from 'react-router-dom'; 
import './style.css' 
import { styled } from 'styled-components'
import cream from './creamData'
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

export default function Cream() {
    const [creams] = useState(cream)
  return (
    <>
    <div className="wrap">
    <div className="menu_tit">
      <h2>크림/밤</h2>
    </div>
        
    <div className="item_wrap"> 
    
       {
         creams.map((cream,index) => {
            return(
          <div className="item_box" key={index}>
            <Link to={`/cream/creamdetail/${index}`}>
            <div className="item_img">
             <img src={cream.image} alt="img" />
             <div className="hover_wish">
                장바구니
             </div>
            </div>

            <FlexBox>
              <Tagbox>{cream.tag1}</Tagbox>
              <Tagbox>{cream.tag2}</Tagbox>
              <Tagbox>{cream.tag3}</Tagbox>
            </FlexBox>

            <div className="item_title">{cream.title}  </div>
            <div className="price_wrap"> 

                <div>
                    {
                      cream.sale>0&&<span className="item_sale">{cream.sale}%</span>
                    }
                </div>
                <div >

                    {
                      cream.sale>0 && <span className="item_price line">￦{(cream.price).toLocaleString('ko-KR')}</span> 
                    }
                </div> 
                <div>
                    {
                      cream.sale>0 ? <span className="item_last_price">￦{(cream.price - ((cream.price) * (cream.sale / 100))).toLocaleString('ko-KR')}</span> : <span className="item_last_price">￦{(cream.price).toLocaleString('ko-KR')}</span>
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
