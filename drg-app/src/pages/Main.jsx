import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import best from './bestData';
import event from './eventData';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const  SectionTitle = styled.h1`
  text-align: center;
  font-size: 32px;
`
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
  .swiper-button-prev{left: -10px;z-index:5}
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
  overflow: hidden;
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

const EventSection = styled.section`
padding-bottom: 100px;
  h1{
    margin-bottom: 30px;
  }

  ul{
    width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    li{
      position: relative;
      width: 33.3333%;
      margin-right: 20px;
      img{
        width:100%;
      }

      &:last-child{
        margin-right: 0;
      }

      &:hover{
        .hover_box{
          opacity: 0.9;
          transform: translateX(0);
        }
      }
    }
    .hover_box{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 350px;
      transform: translateX(-30%);
      transition: all .5s ease;
      opacity: 0;
      padding: 20px;
      background-color: #fff;
      box-shadow: 5px 10px 10px #ddd;
      p{
        &.event_tit{
          font-weight: 700;
          font-size: 24px;
          margin-bottom:15px;

        }
      }
    }
  }
`

const NewSection = styled.section`
  h1{
    margin-bottom: 30px;
  }
  img{
    width: 100%;
    transition: all .5s ease;
  }
`

const NewInner= styled.div`
  width: 1280px;
  padding-bottom: 50px;
  margin: 0 auto;
  display: flex;
  .new_box{
    border-radius: 5px;
    overflow: hidden;
    &:hover{
      img{
        scale: 1.15;
      }
    }
  }
  .new_left{
    position: relative;
    width: 50%;
    margin-right: 20px;
    .new_text{
      top: 15px;
      p{
        &.new_tit{
         font-size: 26px;
        }
        &.hash{
          font-size: 18px;
        }
      }
    }
  }

  .new_right{
    width: 50%;
    overflow: hidden;
    .new_box{
      width: calc(50% - 10px);
      position: relative;
      margin-right: 20px;
      margin-bottom: 20px;
      float: left;
      &:nth-child(2n){
        margin-right: 0;
      }
      .new_text{
        top: 10px;
        p{
          &.new_tit{
            color: #fff;
            font-weight: 700;
            letter-spacing: -0.5px;
            font-size: 18px;
          }
        }
      }
    }
  }

  .new_text{
    width: 100%;
    position: absolute;
    p{
      position: relative;
      color: #000;
      text-align: center;
      &.new_tit{
        font-weight: 500;
      }
      &.hash{
        text-align: center;
        z-index: 1;

       &::before{
        content: '';
        display: inline-block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        width: 40%;
        background-color:#fff;
        height: 100%;
        border-radius: 5px;
        opacity: 0.7;
        z-index: -1;
        }
   
      }
       
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

        <SectionTitle>BEST</SectionTitle>

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

      <EventSection>
        <SectionTitle>EVENT</SectionTitle>
        <ul>
          {
            event.map((item, idx)=>{
              return(
                <li key={idx} className='event_box'>
                  <a href="#!">
                    <img src={item.image} alt={item.id} />
                  </a>
                  <div className="hover_box">
                    <p className='event_tit'>{item.title}</p>
                    <p className='event_date'>{item.date}</p>
                  </div>
                </li>
              )
            })
          }
         
        </ul>
      </EventSection>

      <NewSection>
        <SectionTitle>Dr.G의 신상품을 공개합니다.</SectionTitle>

        <NewInner>
          <div className='new_left'>
            <div className="new_box">
              <img src={process.env.PUBLIC_URL + '/assets/main_img/new04.jpg'} alt="new_product" />
              <div className="new_text">
                <p className='new_tit'>레드 블레미쉬 시카 클렌징 폼</p>
                <p className='hash'>#슈퍼시카 #딥클렌징</p>
              </div>
            </div>
          </div>

          <div className='new_right'>
            <div className="new_box">
              <img src={process.env.PUBLIC_URL + '/assets/main_img/new06.jpg'} alt="new_product" />
              <div className="new_text">
                <p className='new_tit'>프레스티지 마유 크림</p>
                <p className='hash'>
                  <span>#EGFX트러플</span>
                </p>
              </div>
            </div>

            <div className="new_box">
              <img src={process.env.PUBLIC_URL + '/assets/main_img/new03.jpg'} alt="new_product" />
              <div className="new_text">
                <p className='new_tit'>에이클리어 스팟 큐어 패치</p>
                <p className='hash'>
                  <span>#상처보호</span>
                </p>
              </div>
            </div>

            <div className="new_box">
              <img src={process.env.PUBLIC_URL + '/assets/main_img/new05.jpg'} alt="new_product" />
              <div className="new_text">
                <p className='new_tit'>나이스 버디 업 선 스틱</p>
                <p className='hash'>
                 <span>#착붙 선스틱</span>
                </p>
              </div>
            </div>

            <div className="new_box">
              <img src={process.env.PUBLIC_URL + '/assets/main_img/new08.jpg'} alt="new_product" />
              <div className="new_text">
                <p className='new_tit'>레드블레미쉬 수딩 크림</p>
                <p className='hash'>
                   #2000만 돌파
                </p>
              </div>
            </div>
          </div>
        </NewInner>
      </NewSection>
    </>
  )
}
