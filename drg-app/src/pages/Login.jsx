import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import users from '../dataset/userData';


const Tit=styled.h1`
padding: 40px 0 30px 0;
text-align: center;
`

const LoginContainer=styled.div`
  width: 500px;
  margin: 50px auto 0;
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
  justify-content: center;
  margin-top: 30px;
  padding: 0 10px;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  li{
    padding: 20px;
    button{
      background-color: #fff;
      border: none;
      cursor: pointer;

      img{
        width: 45px;
        margin: 0 auto;
      }
      p{
        margin-top: 10px;
        font-size: 15px;
        letter-spacing:-1px;
      }
    }
  }
`

const SignUp = styled.div`
  overflow: hidden;
  margin-top: 30px;
  button{
    width: 100%;
    padding: 15px 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 15px;
    cursor: pointer;
    transition: all .3s;
    &:hover{
      background-color: #2fcab0;
      color: #fff;
    }
  }
  span{
    font-size: 16px;
    &:first-child{
      float: left;
    }
    &:last-child{
      float: right;
      &::after{
        content: '>';
        display: inline-block;
        padding-left: 5px;
      }
    }
  }
`


export default function Login() {

  const navigate = useNavigate();

  //임시유저데이터
  const user = 
    {
      userId : 'xogus12',
      userPw : 'xogus1234@'
    }
  

  const [password,setPassword]=useState(false)
  //true false 토글핸들러
  const clickHandle=()=>{setPassword(!password)}

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const changeId = (e) => {
    setId(e.target.value);
  }

  const changePw = (e) => {
    setPw(e.target.value);
  }

  const userChk = () => {
      if(user.userId === id && user.userPw === pw){
        alert('로그인에 성공했습니다.');
        navigate('/')
      }else{
        alert('아이디 또는 비밀번호를 확인해주세요')
      }
  }

  return (
    <>
        <LoginContainer>
          <Tit>로그인</Tit>

          <LoginForm>
            <LoginBox>
              <Input 
              type='text' 
              placeholder='아이디를 입력해주세요' 
              value={id}
              onChange={changeId}
              required/>
            </LoginBox>

            <LoginBox>
              <Input 
              type={password ? 'text' : 'password'} 
              placeholder='비밀번호를 입력해주세요' 
              value={pw}
              onChange={changePw}
              required/>
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
                <button type='button' onClick={userChk}>로그인</button>
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

              <SignUp>
                <Link to={`/login/join`}>
                  <button type='button' className='join'>
                    <span>아직 회원이 아니세요?</span>
                    <span><b>회원가입</b></span>
                  </button>
                </Link>
              </SignUp>
        </LoginContainer>
    </>
  )
}
