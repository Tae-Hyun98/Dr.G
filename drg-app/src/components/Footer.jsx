import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const FooterBox = styled.footer`
  background-color: #222;
  .footer_nav{
    display: flex;
    align-items: center;
    margin-bottom: 40px;

    ul{
      margin-left: 5px;
      li{
        display: inline-block;
        a{
          color: #ccc;
          padding: 0 20px;
          font-weight: 500;
          transition: .3s;
          &:hover{
            color: #fff;
          }
        }

      }
    }
  }

  .footer_desc{
    margin-bottom: 20px;
    p{
      color: #fff;
      margin-bottom: 20px;
      font-weight: bold;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        font-size: 12px;
        padding: 0 15px;
        color: #a7a9ac;
        &.address{
          width:100%;
          margin-bottom: 5px;
          padding-left: 0;
        }
        &:nth-child(2){
          padding-left: 0;
        }
        &:last-child{
            padding-left: 0;
          }

        a{
          color: #fff;
          border: 1px solid #ccc;
          padding: 5px 8px;
          &::after{
            content: '>';
            display: inline-block;
            padding-left: 5px;
          }
         
        }
      }
    }
  }

  .copyright{
    color:#a7a9ac;
    font-size: 12px;
  }

`

const FooterInner = styled.div`
  position: relative;
  width: 1280px;
  margin: 0 auto;
  padding: 60px 0;
`

const FooterAside = styled.aside`
  position: absolute;
  right: 0;
  top: 60px;
  .sns{
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
    ul{
      width: 100%;
      li{
        width: 40px;
        height: 40px;
        display: inline-block;
        margin-right: 10px;
        overflow: hidden;
        &:last-child{
          margin-right: 0;
        }

        a{
          width: 100%;
          height: 100%;
          display: block;
          background-repeat: no-repeat;
          background-size: 40px 40px;

          &.kakao{
            background-image: url(/assets/main_img/sns_kakao.png);
          }
          &.youtube{
            background-image: url(/assets/main_img/sns_youtube.png);
          }
          &.insta{
            background-image: url(/assets/main_img/sns_insta.png);
          }
          &.facebook{
            background-image: url(/assets/main_img/sns_facebook.png);
          }
        }
      }
    }
  }

  .cs{
    p{
      font-size: 12px;
      margin-bottom: 10px;
      color: #a7a9ac;

      &:last-child{
        margin-bottom: 0;
      }

      &.cs_call{
      font-size: 14px;
      color: #fff;
      margin-bottom: 15px;
        span{
          font-size: 16px;
          font-weight: 700;
          padding-left: 15px;
        }
      }

      
    }
  }
`

export default function Footer() {
  return (
    <>
      <FooterBox>
        <FooterInner>
            <div className="footer_nav">
              <Link to='/'>
                <img src={process.env.PUBLIC_URL + '/assets/main_img/brand_logo_white.svg'} alt="logo" />
              </Link>

              <ul>
                <li><Link>Dr.G소개</Link></li>
                <li><Link>채용정보</Link></li>
                <li><Link>이용약관</Link></li>
                <li><Link>개인정보처리방침</Link></li>
                <li><Link>고객센터</Link></li>
                <li><Link>회원혜택</Link></li>
                <li><Link>제휴문의</Link></li>
              </ul>
            </div>

            <div className="footer_desc">
              <p>(주)고운세상코스메틱</p>

              <ul>
                <li className='address'>경기도 성남시 분당구 분당로 55 퍼스트타워 11층</li>
                <li>대표이사 이주호</li>
                <li>사업자등록번호 209-81-23948</li>
                <li>통신판매업신고번호 2012-경기성남-0552</li>
                <li><a href="#!">사업자정보확인</a></li>
                <li><a href="#!">지속가능경영보고서</a></li>
              </ul>
            </div>

            <div className="copyright">
              Copyright © GOWOONSESANG COSMETICS Co.,Ltd. All Rights Reserved.
            </div>

            <FooterAside>
              <div className="sns">
                <ul>
                  <li>
                    <Link href="#" className='kakao'></Link>
                  </li>

                  <li>
                    <Link href="#" className='youtube'></Link>
                  </li>

                  <li>
                    <Link href="#" className='insta'></Link>
                  </li>

                  <li>
                    <Link href="#" className='facebook'></Link>
                  </li>
                </ul>
              </div>

              <div className="cs">
                <p className='cs_call'>고객센터 <span>1811-9415</span></p>
                <p>평일 : 09:30 ~ 17:00</p>
                <p>점심 : 12:30 ~ 13:30(매주 수요일 12:00~14:00)</p>
                <p>토요일, 일요일, 공휴일 휴무 입니다.</p>
              </div>
            </FooterAside>
        </FooterInner>
      </FooterBox>
    </>
  )
}
