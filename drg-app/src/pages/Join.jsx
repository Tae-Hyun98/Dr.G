import React from 'react';
import styled from 'styled-components';

const JoinBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px 0;
  .join_inner{
    width: 800px;
    border: 1px solid #000;
    padding: 50px;
    .join_title{
      margin-bottom: 40px;
      h1{
        text-align: center;
      }
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

export default function Join() {
  return (
    <JoinBox>
      <div className="join_inner">
        <div className="join_title">
          <h1>회원가입</h1>
        </div>

        <div className="join_essential">
          <h2>필수정보</h2>
          <p style={{paddingBottom:'15px'}}>필수정보를 입력해주세요</p>

          <form className="join_form">
            <JoinField className="join_id">
              <label className="label">
                <p>아이디</p>
                <div className="insert">
                  <input type="text" required/>
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
              <label className="label">
                <p>성별</p>
                <div className="check_gender">
                  <input type="radio" id='man' name='gender' checked/>
                  <label htmlFor="man">남자</label>
                </div>
                
                <div className="check_gender">
                  <input type="radio" id='woman' name='gender'/>
                  <label htmlFor="woman">여자</label>
                </div>
              </label>
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
          <form className='join_select'>
            <h2>선택입력정보</h2>
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
      </div>
    </JoinBox>
  )
}
