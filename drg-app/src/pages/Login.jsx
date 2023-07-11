import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const Tit=styled.h1`
padding: 50px 0 30px 0;
text-align: center;
`

const LoginContainer=styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 0 20px;
  background-color: #fff;
`

const LoginForm = styled.form`
  width: 100%;
  height: 100%;
`

const LoginBox = styled.div`
  position: relative;
  &:last-child{
    input{
      margin-bottom: 0;
    }
  }
`
const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 15px;
  margin-bottom: 13px;
  border-radius: 7px;
  border: 1px solid #ccc;
  font-size: 16px;
  &::placeholder{
   font-weight: 500;
  }

`

const EyeIcon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 13px;
  z-index: 1;
  cursor: pointer;
  color: #777;
`

const FindBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  label{
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;
    input{
      cursor: pointer;
      margin-right: 5px;
    }
  }

  .find{
    a{
     color: #898989;
     font-size: 15px;
     cursor: pointer;
    }
  }
`
const LoginBtn = styled.div`
  button{
    width: 100%;
    height: 55px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
    font-weight: 700;
    transition: all.3s;
  }
  &:hover{
    button{
      background-color: #4f342a;
      color: #fff;
      border: none;
      }
    }
`

const Sns = styled.ul`
  display: flex;
  li{
    button{
      background-color: #fff;
      border: none;
      cursor: pointer;

      img{
        width: 45px;
        margin: 0 auto;
      }
    }
  }
`


export default function Login() {

  const [password,setPassword]=useState(false)
  //true false 토글핸들러
  const clickHandle=()=>{setPassword(!password)}

  return (
    <>
        <LoginContainer>
          <Tit>로그인</Tit>

          <LoginForm>
            <LoginBox>
              <Input type='text' placeholder='아이디를 입력해주세요' required/>
            </LoginBox>

            <LoginBox>
              <Input type={password ? 'text' : 'password'} placeholder='비밀번호를 입력해주세요' required/>
              <EyeIcon onClick={clickHandle}>
                {
                  password ? <VisibilityOffIcon/> : <VisibilityIcon/>
                }
              </EyeIcon>
            </LoginBox>
          </LoginForm>

              <FindBox>
                <div className='id_save'>
                  <label>
                    <input type='checkbox'/>아이디저장
                  </label>
                </div>

                <div className='find'>
                  <Link>아이디/비밀번호 찾기</Link>
                </div>
              </FindBox>

              <LoginBtn>
                <button type='button'>로그인</button>
              </LoginBtn>

              <Sns>
                <li>
                  <button>
                    <img src={process.env.PUBLIC_URL + '/assets/login_img/kakao_img.png'} alt="kakao" />
                    <p>카카오<br/>로그인</p>
                  </button>
                </li>

                <li>
                  <button>
                    <img src={process.env.PUBLIC_URL + '/assets/login_img/naver_img.png'} alt="naver" />
                    <p>네이버<br/>로그인</p>
                  </button>
                </li>

                <li>
                  <button>
                    <img src={process.env.PUBLIC_URL + '/assets/login_img/google_img.png'} alt="naver" />
                    <p>구글<br/>로그인</p>
                  </button>
                </li>
              </Sns>
        </LoginContainer>
    </>
  )
}
