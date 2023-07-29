import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const JoinBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px 0;
  .join_inner{
    width: 800px;
    padding: 0px 50px;
    .join_title{
      margin-bottom: 25px;
      h1{
        text-align: center;
      }
    }
    h2{
      margin-bottom: 15px;
    }
  }
  .join_form{
    margin-bottom: 50px;
  }
  
`

const JoinField = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  padding: 15px 0;
  &.join_phone{
    border-bottom: 1px solid #ccc;
    input{
      width: 200px;
    }
  }
  .label{
    font-size: 14px;
    display: flex;
    align-items: center;
    letter-spacing: -1px;
    color: #777;
    span{
        display: inline-block;
        width: 100px;
      }
    .insert{
      input{
        height: 40px;
        padding-left: 10px;
        margin: 5px 0;
        border:1px solid #ccc;
      }
      span{
        width: auto;
        margin: 0 5px;
      }
      .address{
        input{
          width: 100%;
          margin-top: 10px;
          &:first-child{
            margin-top: 0;
          }
        }
      }
    }
    
    p{
      &.msg{
        width: 100%;
        font-size: 12px;
        color: #666;
      }
    }
    .check_gender{
      display: flex;
      align-items: center;
      &:last-child{
        margin-left: 10px;
      }
      label{
        cursor: pointer;
        padding-left: 5px;
      }
    }
    
  }
`

const TermsBox = styled.fieldset`
  margin: 30px 0 50px 0;
  legend{
    text-align: center;
    font-size: 22px;
    font-weight: 600;
  }
  .terms_agree_box{
    padding: 20px 0px 20px 35px;
    input{
      cursor: pointer;
      margin-right: 5px;
    }
    label{
      cursor: pointer;
    }
    .terms{
      padding: 10px;
      li{
        margin-bottom: 5px;
        &:last-child{
          margin-bottom: 0;
        }
        label{
          span{
            color: red;
          }
          &:last-child{
            margin-bottom: 0;
          }
          &.all{
            font-size: 18px;
          }
        }
      }
    }
  }
`

//props를 이용한 버튼색과 배경색변경
const Button = styled.button`
  width: 48%;
  line-height: 50px;
  font-size: 16px;
  cursor: pointer;
  border: 2px solid #ccc;
  margin-right: 2%;
  color: ${({styleboolean}) => styleboolean? '#b0b0b0' : '#fff'};
  background-color: ${({styleboolean}) => styleboolean? '#e6e6e6' : '#00c7ae'};
  &:last-child{
    margin-right: 0;
    color: #000;
    background-color: #fefcfc;
  }
`

const PostBtn = styled.button`
  line-height: 40px;
  margin-left: 5px;
  padding: 0 5px;
`


export default function Join() {

  // 값을 담을 usestate
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');

  //메세지담는부분
  const [idMsg, setIdMsg] = useState('')
  const [pwMsg, setPwMsg] = useState('')
  const [pwConfirmMsg, setPwConfirmMsg] = useState('')
  const [nameMsg, setNameMsg] = useState('')

  //유효성체크후 반환값
  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [pwConfirmValid, setPwConfirmValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [telValid, setTelValid]= useState(false);
  const [btnAllow,setBtnAllow] = useState(false);

  //유효성체크
  const idReg = /^[a-z0-9]{5,12}$/;
  const pwReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/;
  const nameReg = /^[ㄱ-ㅎ가-힣a-zA-Z]{2,}$/;

  const ChkId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    if(!idReg.test(currentId)){
      setIdMsg('* 5~12자 영소문자, 숫자를 포함하여 작성해주세요.')
      setIdValid(false);
    }else{
      setIdMsg('사용가능한 아이디입니다.')
      setIdValid(true);
    }
  }

  const ChkPw = (e) => {
    const currentPw = e.target.value;
    setPw(currentPw);
    if(!pwReg.test(currentPw)){
      setPwMsg('* 영문, 숫자, 특수문자가 혼합된 8자이상 입력해주세요');
      setPwValid(false);
    }else{
      setPwMsg('사용가능한 비밀번호입니다.');
      setPwValid(true);
    }
  }

  const ChkPwConfirm = (e) => {
    const currentPwConfirm = e.target.value;
    setPwConfirm(currentPwConfirm);
    if(pw!==currentPwConfirm){
      setPwConfirmMsg('비밀번호가 일치하지않습니다.');
      setPwConfirmValid(false);
    }else{
      setPwConfirmMsg('비밀번호가 일치합니다.');
      setPwConfirmValid(true);
    }
  }

  const ChkName = (e) => {
    const currentName = e.target.value;
    setName(currentName);
    if(!nameReg.test(currentName)){
      setNameMsg('한글, 영문 대/소문자를 사용해 주세요.');
      setNameValid(false);
    }else{
      setNameMsg('')
      setNameValid(true);
    }
  }

  //휴대전화 하이픈생성
  const TelChange = (e) => {
    const currentTel = e.target.value;
    setTel(currentTel);
    setTel(currentTel.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`));
    if(tel!==''&&currentTel.length===13){
      setTelValid(true);
    }else{
      setTelValid(false);
    }
  }


  //약관동의
  const [agreeList, setAgreeList] = useState([]);

  const changeSelect = (checked, name) => {
    if(checked) {
      setAgreeList([...agreeList, name]);
    }else{
      setAgreeList(agreeList.filter(el=>el!==name))
    }
  }

  //전체체크박스 누를시 전체체크 모든 id값이 배열에 담기는부분
  const AllCheck = (e) => {
    e.target.checked ? setAgreeList(["terms01", "terms02", "terms03", "terms04"]) : setAgreeList([]);
  }


   //취소
   const navigate = useNavigate();
   const CancleBtn = () =>{
     navigate('/login');
   }

   //가입하기
  const GoJoin = () => {
    alert('가입을 환영합니다. '+ name +'님')
    navigate('/login');
  }

  //가입하기 버튼 활성조건
  useEffect(() => {
    if(idValid&&pwValid&&pwConfirmValid&&nameValid&&telValid&&agreeList.includes('terms01')&&agreeList.includes('terms02')){
      setBtnAllow(false);
    }else{
      setBtnAllow(true);
    }
  }, [idValid, pwValid, pwConfirmValid, nameValid, telValid, agreeList]);


  return (
    <JoinBox>
      <div className="join_inner">
        <div className="join_title">
          <h1>회원가입</h1>
        </div>

        <div className="join_essential">
          <h2>필수입력정보</h2>

          <form className="join_form">
            <JoinField className="join_id">
              <label className="label">
                <span>아이디</span>
                <div className="insert">
                  <input 
                  type="text"
                  name='id'
                  value={id}
                  onChange={ChkId}
                  autoFocus
                  required/>
                  {
                    id.length>2&&
                    <p className='msg' style={{color: idValid ? 'blue' : 'red'}}>{idMsg}</p>
                  }
                </div>
              </label>
            </JoinField>

            <JoinField className="join_pw">
              <label className="label">
                <span>비밀번호</span>
                <div className="insert">
                  <input 
                  type="password" 
                  value={pw}
                  onChange={ChkPw}
                  required/>
                  {
                    id.length>2&&
                    <p className='msg' style={{color: pwValid ? 'blue' : 'red'}}>{pwMsg}</p>
                  }
                </div>
              </label>
            </JoinField>

            <JoinField className="join_pwcheck">
              <label className="label">
                <span>비밀번호 확인</span>
                <div className="insert">
                  <input 
                  type="password"
                  value={pwConfirm}
                  onChange={ChkPwConfirm}
                  required/>
                  {
                    pwConfirm.length>0&&
                    <p className='msg' style={{color: pwConfirmValid ? 'blue' : 'red'}}>{pwConfirmMsg}</p>
                  }
                </div>
              </label>
            </JoinField>

            <JoinField className="join_name">
              <label className="label">
                <span>이름</span>
                <div className="insert">
                  <input 
                  type="text" 
                  value={name}
                  onChange={ChkName}
                  required/>
                  {
                    name.length>0&&
                    <p className='msg' style={{color: nameValid ? '' : 'red'}}>{nameMsg}</p>
                  }
                </div>
              </label>
            </JoinField>

            <JoinField className="join_idcard">
              <label className="label">
                <span>주민등록번호</span>
                <div className="insert">
                  <input type="text" maxLength='6' placeholder='주민등록번호'/>
                  <span> - </span>
                  <input type="password" maxLength='7'/>
                </div>
              </label>
            </JoinField>

            <JoinField className="join_gender">
              <div className="label">
                <span>성별</span>
                <div className="check_gender">
                  <input type="radio" id='man' name='gender' readOnly checked/>
                  <label htmlFor="man">남자</label>
                </div>
                
                <div className="check_gender">
                  <input type="radio" id='woman' name='gender' readOnly/>
                  <label htmlFor="woman">여자</label>
                </div>
              </div>
            </JoinField>

            <JoinField className="join_phone">
              <label className="label">
                <span>휴대전화</span>
                <div className="insert">
                  <div className="phone">
                    <input 
                    type="tel" 
                    maxLength='13'
                    value={tel}
                    placeholder='전화번호를 입력해주세요'
                    onChange={TelChange}
                    required/>
                  </div>
                </div>
              </label>
            </JoinField>
          </form>
        </div>

        <div className="join_choice">
            <h2>선택입력정보</h2>

          <form className='join_select'>
            <JoinField className="join_gender">
              <label className="label">
                <span>주소</span>
                <div className="insert">
                  <div className="address">
                    <input style={{width:'190px'}} type="text" placeholder='우편번호'/>
                    <PostBtn type='button'>우편번호찾기</PostBtn>
                    <input type="text" placeholder='주소 검색' />
                    <input type="text" placeholder='상세주소를 입력해 주세요.' />
                  </div>
                </div>
              </label>
            </JoinField>

            <JoinField className="join_gender">
              <label className="label">
                <span>이메일</span>
                <div className="insert">
                  <div className="email">
                    <input type="text"/>
                    <span> @ </span>
                    <input type="text"/>
                  </div>
                </div>
              </label>
            </JoinField>
          </form>
        </div>

          <TermsBox>
          <legend>이용약관 및 마케팅 수신동의</legend>
            <div className="terms_agree_box">
              <div className="terms_all_check">
                <label htmlFor="all_chk" className='all'>
                  <input type="checkbox" id='all_chk' onChange={AllCheck} checked={agreeList.length===4 ? true:false}/>
                  약관 전체 동의합니다.
                </label>
              </div>

              <ul className="terms">
                <li>
                  <label htmlFor="terms01">
                    <input type="checkbox" name='terms01' id='terms01' required onChange={(e) => changeSelect(e.target.checked, e.target.name)} checked={agreeList.includes('terms01')?true:false}/>
                    이용약관 동의<span> (필수)</span>
                  </label>
                </li>

                <li>
                  <label htmlFor="terms02">
                    <input type="checkbox" name='terms02' id='terms02' required onChange={(e) => changeSelect(e.target.checked, e.target.name)} checked={agreeList.includes('terms02')?true:false}/>
                    개인정보의 수집 및 이용에 관한 동의<span> (필수)</span>
                  </label>
                </li>

                <li>
                  <label htmlFor="terms03">
                    <input type="checkbox" name='terms03' id='terms03' onChange={(e) => changeSelect(e.target.checked, e.target.name)} checked={agreeList.includes('terms03')?true:false}/>
                    개인정보수집 및 활용에 대한 동의 (선택) 
                  </label>
                </li>

                <li>
                <label htmlFor="terms04">
                  <input type="checkbox" name='terms04' id='terms04' onChange={(e) => changeSelect(e.target.checked, e.target.name)} checked={agreeList.includes('terms04')?true:false}/>
                  혜택 알림 이메일, 문자 수신 동의 (선택)
                </label>
              </li>
            </ul>
          </div>
          </TermsBox>

        <div className="button_area">
          <Button onClick={GoJoin} styleboolean={btnAllow} disabled={btnAllow ? true:false}>가입하기</Button>
          <Button type='button' onClick={CancleBtn}>취소</Button>
        </div>
      </div>
    </JoinBox>
  )
}
