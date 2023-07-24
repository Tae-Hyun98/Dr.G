import React, { useState } from 'react';
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
      margin-bottom: 40px;
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
  }
  .label{
    width: 100%;
    display: flex;
    align-items: center;
    .insert{
      width: calc(100% - 100px);
      span{
        display: inline-block;
        width: 19px;
        text-align: center;
      }
    }
    input{
      height: 40px;
      padding-left: 10px;
      border:1px solid #ccc;
    }
    p{
      width: 100px;
      letter-spacing: -1px;
      font-size: 14px;
      color: #777;
      &.rule{
        width: 100%;
        font-size: 12px;
        color: #666;
        margin-top: 5px;
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
    .address{
      display: flex;
      flex-direction: column;
      input{
        margin-top: 10px;
        &:first-child{
          margin-top: 0;
        }
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
    padding: 15px 15px 20px 30px;
    .terms{
      padding: 10px;
    }
    label{
      display: block;
      cursor: pointer;
      margin-bottom: 5px;
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
  
`

const Button = styled.button`
  width: 50%;
  line-height: 50px;
  cursor: pointer;
  border: 1px solid #ccc;
`


export default function Join() {

  const [agreeList, setAgreeList] = useState([]);

  const changeSelect = (checked, name) => {
    if(checked) {
      setAgreeList([...agreeList, name]);
    }else{
      setAgreeList(agreeList.filter(el=>el!==name))
    }

  }

  //전체체크박스 누를시 전체체크 모든 id값이 배열에 담기는부분
  const AllCheck = (checked) => {
    if(checked){
      setAgreeList(["terms01", "terms02", "terms03", "terms04"])
    }else{
      setAgreeList([]);
    }
  }
  console.log(agreeList)
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
                <p>아이디</p>
                <div className="insert">
                  <input type="text" required/>
                  <p className='rule'>*영문, 숫자를 포함한 5자 이상 입력해주세요</p>
                </div>
              </label>
            </JoinField>

            <JoinField className="join_pw">
              <label className="label">
                <p>비밀번호</p>
                <div className="insert">
                  <input type="password" required/>
                  <p className='rule'>*비밀번호는 영문, 숫자, 특수문자가 혼합된 8~12자 이내로 입력해주세요</p>
                </div>
              </label>
            </JoinField>

            <JoinField className="join_pwcheck">
              <label className="label">
                <p>비밀번호 확인</p>
                <div className="insert">
                  <input type="password" required/>
                </div>
              </label>
            </JoinField>

            <JoinField className="join_name">
              <label className="label">
                <p>이름</p>
                <div className="insert">
                  <input type="text" required/>
                </div>
              </label>
            </JoinField>

            <JoinField className="join_idcard">
              <label className="label">
                <p>주민등록번호</p>
                <div className="insert">
                  <input type="text" placeholder='주민등록번호'/>
                  <span> - </span>
                  <input type="password" />
                </div>
              </label>
            </JoinField>

            <JoinField className="join_gender">
              <div className="label">
                <p>성별</p>
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
                <p>휴대전화</p>
                <div className="insert">
                  <div className="phone">
                    <input type="text" required/>
                    <span> - </span>
                    <input type="text" required/>
                    <span> - </span>
                    <input type="text" required/>
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
                <p>주소</p>
                <div className="insert">
                  <div className="address">
                    <input style={{width:'190px'}} type="text" placeholder='우편번호'/>
                    <input type="text" placeholder='주소 검색' />
                    <input type="text" placeholder='상세주소를 입력해 주세요.' />
                  </div>
                </div>
              </label>
            </JoinField>

            <JoinField className="join_gender">
              <label className="label">
                <p>이메일</p>
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

              <div className="terms">
                <label htmlFor="terms01">
                  <input type="checkbox" name='terms01' id='terms01' required onChange={(e) => changeSelect(e.target.checked, e.target.name)} checked={agreeList.includes('terms01')?true:false}/>
                  이용약관 동의<span> (필수)</span>
                </label>

                <label htmlFor="terms02">
                  <input type="checkbox" name='terms02' id='terms02' required onChange={(e) => changeSelect(e.target.checked, e.target.name)} checked={agreeList.includes('terms02')?true:false}/>
                  개인정보의 수집 및 이용에 관한 동의<span> (필수)</span>
                </label>

                <label htmlFor="terms03">
                  <input type="checkbox" name='terms03' id='terms03' onChange={(e) => changeSelect(e.target.checked, e.target.name)} checked={agreeList.includes('terms03')?true:false}/>
                  개인정보수집 및 활용에 대한 동의 (선택) 
                </label>

                <label htmlFor="terms04">
                  <input type="checkbox" name='terms04' id='terms04' onChange={(e) => changeSelect(e.target.checked, e.target.name)} checked={agreeList.includes('terms04')?true:false}/>
                  혜택 알림 이메일, 문자 수신 동의 (선택)
                </label>
              </div>
            </div>
          </TermsBox>

        <div className="button_area">
          <Button>가입하기</Button>
          <Button>취소</Button>
        </div>
      </div>
    </JoinBox>
  )
}
