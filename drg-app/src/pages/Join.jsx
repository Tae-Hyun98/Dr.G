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
  
`

const JoinField = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  .label{
    span{
      padding-right: 10px;
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
          <p>필수정보를 입력해주세요</p>

          <form className="join_form">
            <JoinField className="join_id">
              <label className="label">
                <span>아이디</span>
                <input type="text" />
              </label>
            </JoinField>

            <JoinField className="join_pw">
              <label className="label">
                <span>비밀번호</span>
                <input type="password" />
              </label>
            </JoinField>

            <JoinField className="join_pwcheck">
              <label className="label">
                <span>비밀번호 확인</span>
                <input type="password" />
              </label>
            </JoinField>
          </form>
        </div>
        
      </div>
    </JoinBox>
  )
}
