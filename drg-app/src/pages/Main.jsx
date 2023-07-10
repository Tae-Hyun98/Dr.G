import React from 'react';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import {  Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    .swiper-pagination-bullet{
      display: inline-block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      font-size: 12px;
      color: #fff;
      background: rgba(47, 202, 176, 0.5);
      opacity: 0.8;
      &.swiper-pagination-bullet-active{
        background-color: #2fcab0;
      }
    }
  }

`

const VisualImg=styled.img`
  width: 100%;
`
export default function Main() {
  const pagination={
    clickable:true,
    renderBullet:function(index,className){
      return '<span class="' + className + '">' + (index + 1) + '</span>';},
    };

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


    </>
  )
}
