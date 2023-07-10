import React from 'react'
// import styled from 'styled-components'
import {useState} from 'react'
// import{Routes, Route, Link, useNavigate, useParams} from 'react-router-dom'; 
import './style.css' 
import cleansing from './cleansingData'
import Header from '../components/Header'


export default function Cleansing() {

    const [cleansings] = useState(cleansing)

  return (
    <>
    <Header/>
    <div>
      {
        cleansings.map((cleans,index)=>{
          return(
            <div><img src={cleans.image} alt="" /></div>
           
          )
        })
      }
    </div>
    


    </>
  )
}
