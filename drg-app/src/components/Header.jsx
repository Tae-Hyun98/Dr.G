import React from 'react';
import styled from 'styled-components';
import { Link, NavLink, useMatch } from 'react-router-dom';
import Cart from '../pages/Cart';
import { useSelector } from 'react-redux';

const Headers = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #eee;
`

const Logo = styled.div`
  margin-left: 70px;
`

const Gnb=styled.ul`
`

const Li=styled.li`
  display: inline-block;
  a{
    position: relative;
    display: block;
    color: #000;
    padding: 30px 15px;
    font-size: 18px;
    &::before{
      content: '';
      display: block;
      position: absolute;
      left: 0px;
      top: 36px;
      width: 0%;
      background-color:#2fcab0;
      opacity: 0.5;
      z-index: -1;
      height: 15%;
      transition: all.3s;
    }
    &.active{
     &::before{
      width: 100%;
     }
    }
  }
`

const UtilBox=styled.div`
  display: flex;
  margin-right: 70px;
`

const UtilIcon=styled.div`
  padding: 0 5px;
  position: relative;
  span{
    position: absolute;
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    top: 0;
    right: 3px;
    background-color: #4f342a;
    border-radius: 50%;
    color: #fff;
    font-weight: 600;
  }
`



export default function Header() {

  const active = useMatch('/clansing');
  const state = useSelector((state)=>state.cart);

  return (
    <>
      <Headers>
        <Logo><Link to='/'><img src={process.env.PUBLIC_URL + '/assets/main_img/logo.svg'} alt='logo'/></Link></Logo>

        <nav>
          <Gnb>
            <Li>
              <NavLink to='/cleansing' style={({active}) ? active :{}}>클렌징</NavLink>
            </Li>
            
            <Li>
              <NavLink to='/scrub'>필링/스크럽</NavLink>
            </Li>

            <Li>
              <NavLink to='/toner'>토너/미스트</NavLink>
            </Li>

            <Li>
              <NavLink to='/ample'>에센스/앰플</NavLink>
            </Li>

            <Li>
              <NavLink to='/cream'>크림/밤</NavLink>
            </Li>
          </Gnb>
        </nav>

        <UtilBox>
          <UtilIcon>
            <Link to='/login'><img src={process.env.PUBLIC_URL + '/assets/main_img/util_mypage.svg'} alt='마이페이지'/></Link>
          </UtilIcon>

          <UtilIcon>
            <Link to='/cart'><img src={process.env.PUBLIC_URL + '/assets/main_img/util_cart.svg'} alt='장바구니'/>
              <span>{state.length}</span>
            </Link>
          </UtilIcon>
          
          <UtilIcon>
            <Link><img src={process.env.PUBLIC_URL + '/assets/main_img/util_search.svg'} alt='검색'/></Link>
          </UtilIcon>
        </UtilBox>
      </Headers>
    </>
  )
}
