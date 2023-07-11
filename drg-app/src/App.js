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


function App() {
  return (
    <div className="wrap">
      <Header/>

      <Routes>
        {/* 접근경로오류 */}
        <Route path="*" element={<NotFound404 />}/> 
        <Route path='/' element={<Main/>}/>
        <Route path='/cleansing' element={<Cleansing/>}/>
        <Route path='/scrub' element={<Scrub/>}/>
        <Route path='/toner' element={<Toner/>}/>
        <Route path='/ample' element={<Ample/>}/>
        <Route path='/cream' element={<Cream/>}/>

        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>

  );
}

export default App;
