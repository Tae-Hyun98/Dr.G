import React from 'react';
import styled from 'styled-components';
import { Link, NavLink, useMatch } from 'react-router-dom';

const Headers = styled.header`
  display: flex;
  width: 100%;
`

const Logo = styled.div`

`
const Ul=styled.ul`
  display: flex;
`
const Li=styled.li`

`
export default function Header() {

  const active = useMatch('/clansing');

  return (
    <>
      <Headers>
        <Logo><img src={process.env.PUBLIC_URL + '/assets/logo.svg'} alt='logo'/></Logo>
        <nav>
          <Ul>
            <Li><NavLink to='/clansing' style={({active}) ? active :{}}>클렌징</NavLink></Li>
            <Li><NavLink to='/pilling'>필링/스크럽</NavLink></Li>
            <Li><NavLink to='/pilling'>토너/미스트</NavLink></Li>
            <Li><NavLink to='/pilling'>에센스/앰플</NavLink></Li>
            <Li><NavLink to='/pilling'>크림/밤</NavLink></Li>
          </Ul>
        </nav>
      </Headers>
    </>
  )
}
