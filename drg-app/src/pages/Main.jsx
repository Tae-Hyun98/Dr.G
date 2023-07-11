import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import best from './bestData';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Visual=styled.div`
  width: 100%;
  .swiper-button-prev{
    left: 70px;
    color: #fff;
  }
  .swiper-button-next{
    right: 70px;
    color: #fff;
  }
  .swiper-pagination{
    width: 100%;
    bottom: 20px;
    .swiper-pagination-bullet{
      display: inline-block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      font-size: 12px;
      color: #fff;
      background: rgba(47, 202, 176, 0.5);
      &.swiper-pagination-bullet-active{
        background-color: #2fcab0;
      }
    }
  }

`

const VisualImg=styled.img`
  width: 100%;
`

const BestSection=styled.section`
  width: 100%;
  padding-top: 90px;
  padding-bottom: 90px;
  overflow: hidden;
  h1{
    font-size: 30px;
    text-align: center;
    padding-bottom: 10px;
    margin-bottom: 30px;
    border-bottom: 1px solid #ccc;
  }
`

const BestSlides=styled.div`
  position: relative;
  overflow: hidden;
  a{
    color:#000;
  }
  .bestSwiper{
    width: 100%;
    padding-bottom: 20px;
    .swiper-slide{
      width: 270px;
      margin-right: 20px;
      &:last-child{
        margin-right: 0;
      }
    }
  }
  .swiper-scrollbar{
    bottom: 0;
    height: 5px;
    .swiper-scrollbar-drag{
      background-color: #2fcab0;
    }
  }
  .swiper-button-prev{left: 0px;z-index:5}
  .swiper-button-next{right: 0px;z-index:5}
`

const BestImg=styled.div`
  position: relative;
  height: 270px;
  border: 1px solid #efefef;
  margin-bottom: 20px;
  img{
    width: 100%;
  }
  .hover_cart{
    display: flex;
    align-items: flex-end;
    position: absolute;
    opacity: 0;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color:rgba(0,0,0,0.3);
    transition: all.3s;
    p{
      width: 100%;
      padding: 5px 0;
      background-color: #2fcab0;
      text-align: center;
      color: #fff;
    }
  }
  &:hover{
    .hover_cart{
      opacity: 1;
    }
  }
`

const Container=styled.div`
  width: 1280px;
  margin: 0 auto;
`

const LabelTag=styled.div`
  p{
    width: 70px;
    height: 25px;
    background-color: #fcc63f;
    text-align: center;
    color: #fff;
    font-weight: 600;
  }
`

const BestTit=styled.p`
  font-weight: 600;
  font-size: 18px;
  min-height: 50px;
  margin: 15px 0;
`

const Price=styled.div`
  display: flex;
  align-items: center;
  p{
    position: relative;
    &:last-child{
      &::after{
        display: none;
      }
    }
    &::after{
      content: '';
      position: absolute;
      right:0;
      top: 20%;
      display: block;
      width: 1px;
      height: 15px;
      background-color: #000;
    }
    &.discount{
      color: #2fcab0;
      font-size: 18px;
      padding-right: 10px;
    }
    &.line{
      text-decoration: line-through;
      padding-left: 10px;
      color: #777;
    }
    &.price{
      font-weight: 700;
      font-size: 18px;
    }
    &.discount_price{
      font-weight: 700;
      font-size: 18px;
      padding: 0 10px;
    }

  }
`


export default function Main() {
  const pagination={
    clickable:true,
    renderBullet:function(index,className){
      return '<span class="' + className + '">' + (index + 1) + '</span>';},
    };

    const [bests] = useState(best);


  return (
    <>
      <Visual>
        <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        speed={1000}
        navigation={true}
        pagination={pagination}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className='visualSwiper'
        >
        
          <SwiperSlide>
            <VisualImg src={process.env.PUBLIC_URL + '/assets/main_img/main_banner01.jpg'} alt="banner" />
          </SwiperSlide>

          <SwiperSlide>
            <VisualImg src={process.env.PUBLIC_URL + '/assets/main_img/main_banner02.jpg'} alt="banner" />
          </SwiperSlide>

          <SwiperSlide>
            <VisualImg src={process.env.PUBLIC_URL + '/assets/main_img/main_banner03.jpg'} alt="banner" />
          </SwiperSlide>

          <SwiperSlide>
            <VisualImg src={process.env.PUBLIC_URL + '/assets/main_img/main_banner04.jpg'} alt="banner" />
          </SwiperSlide>

          <SwiperSlide>
            <VisualImg src={process.env.PUBLIC_URL + '/assets/main_img/main_banner05.jpg'} alt="banner" />
          </SwiperSlide>

        </Swiper>
      </Visual>


      <BestSection>
        <Container>
        <h1>BEST</h1>
        <BestSlides>
          <Swiper
          modules={[Autoplay, Navigation, Scrollbar]}
          loop={true}
          speed={1000}
          navigation={true}
          freeMode={true}
          scrollbar={{draggable: true}}
          /* autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }} */
          slidesPerView={'auto'}
          className='bestSwiper'
          >

            {
              bests.map((best, index) => {
                return (
                <SwiperSlide key={index} className='best_slide'>
                  <Link to>
                    <BestImg>
                      <img src={best.image} alt="best_img" />
                      <div className='hover_cart'>
                        <p>장바구니</p>
                      </div>
                    </BestImg>
                    <LabelTag><p>{best.best}</p></LabelTag>
                    <BestTit>{best.title}</BestTit>
                    <Price>
                    {/* 조건부랜더링 */}
                    {
                      best.sale>0&&
                      <p className='discount'>{best.sale}%</p>
                    }
                    {
                      best.sale>0&&
                      <p className='discount_price'>{(best.price-((best.price)*(best.sale/100))).toLocaleString('ko-KR')}원</p>
                    }
                      <p className={best.sale>0 ? 'line' : 'price'}>{best.price}원</p>
                    </Price>
                  </Link>
                </SwiperSlide>
              )
              })
            }

          </Swiper>
        </BestSlides>
        </Container>
      </BestSection>
    </>
  )
}
