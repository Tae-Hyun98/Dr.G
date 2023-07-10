import './App.css';
import {Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import NotFound404 from './pages/NotFound404';
import Cleansing from './pages/Cleansing';

import Header from './components/Header';


function App() {
  return (
    <div className="wrap">
      <Header/>

      <Routes>
        {/* 접근경로오류 */}
        <Route path="*" element={<NotFound404 />}/> 
        <Route path='/' element={<Main/>}/>
        <Route path='/cleansing' element={<Cleansing/>}/>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </div>

  );
}

export default App;
