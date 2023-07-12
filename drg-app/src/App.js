import './App.css';
import {Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import NotFound404 from './pages/NotFound404';
import Cleansing from './pages/Cleansing';
import Scrub from './pages/Scrub';
import Toner from './pages/Toner';
import Ample from './pages/Ample';
import Cream from './pages/Cream';

import Header from './components/Header';
import Login from './pages/Login';

import cleansing from './dataset/cleansingData'
import cream from './dataset/creamData'
import scrub from './dataset/scrubData';
import toner from './dataset/tonerData';
import ample from './dataset/ampleData';

import { useState } from 'react';
import CleansingDetail from './pages/CleansingDetail';
import CreamDetail from './pages/CreamDetail';
import ScrubDetail from './pages/ScrubDetail';
import TonerDetail from './pages/TonerDetail';
import AmpleDetail from './pages/AmpleDetail';


function App() {
  const [cleansings] = useState(cleansing)
  const [creams] = useState(cream)
  const [scrubs] = useState(scrub)
  const [toners] = useState(toner)
  const [amples] = useState(ample)

  return (
    <div className="app">
      <Header/>

      <Routes>
        {/* 접근경로오류 */}
        <Route path="*" element={<NotFound404 />}/> 
        <Route path='/' element={<Main/>}/>
        <Route path='cleansing/*' element={<Cleansing/>}/>
        <Route path='/scrub' element={<Scrub/>}/>
        <Route path='/toner' element={<Toner/>}/>
        <Route path='/ample' element={<Ample/>}/>
        <Route path='/cream' element={<Cream/>}/>

        <Route path='/login' element={<Login/>}/>

        <Route path='cleansing/cleansingdetail/:id' element={<CleansingDetail cleansings={cleansings}/>}/>
        <Route path='cream/creamdetail/:id' element={<CreamDetail creams={creams}/>}/>
        <Route path='scrub/scrubdetail/:id' element={<ScrubDetail scrubs={scrubs}/>}/>
        <Route path='toner/tonerdetail/:id' element={<TonerDetail toners={toners}/>}/>
        <Route path='ample/ampledetail/:id' element={<AmpleDetail amples={amples}/>}/>


      </Routes>
    </div>

  );
}

export default App;
