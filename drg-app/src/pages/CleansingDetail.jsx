import React from 'react'
import './style.css'
// import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'


export default function CleansingDetail(props) {

  const {cleansings} = props
  const {id} = useParams()

  return (
    <>
      <div className="wrapping">

        <div className="detail_wrap">

          <div className="detail_left">
            <div className="detail_img">
              <img src={cleansings[id].image} alt="img" />
            </div>
          </div>

          <div className="detail_right">

            <div className="detail_tit">{cleansings[id].title}<span className="detail_cate">{cleansings[id].category}</span> </div>
            <div className="detail_tag_wrap">
              <span>{cleansings[id].tag1}</span>
              <span>{cleansings[id].tag2}</span>
              <span>{cleansings[id].tag3}</span>
            </div>
            <div className="price_wrapper"> 

              <div>
                  {
                    cleansings[id].sale>0&&<span className="item_sale">{cleansings[id].sale}%</span>
                  }
              </div>
              <div >

                  {
                    cleansings[id].sale>0 && <span className="item_price line">{(cleansings[id].price).toLocaleString('ko-KR')}￦</span> 
                  }
              </div> 
              <div>
                  {
                    cleansings[id].sale>0 ? <span className="item_last_price">{(cleansings[id].price - ((cleansings[id].price) * (cleansings[id].sale / 100))).toLocaleString('ko-KR')}￦</span> : <span className="item_last_price">{(cleansings[id].price).toLocaleString('ko-KR')}￦</span>
                  }
              </div>

              

            </div>
          </div>



        </div>


      </div>
    </>
  )
}
