import React from 'react'
import styled from 'styled-components';

const LoginHeader=styled.header`
`
const Tit=styled.h1`
text-align: center;
`

export default function Login() {
  return (
    <>
      <LoginHeader>
        <Tit>로그인</Tit>
      </LoginHeader>
    </>
  )
}
