import './App.css';
import {Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import Cleansing from './pages/Cleansing';
import Header from './components/Header';


function App() {
  return (
    <div className="wrap">
      <Header/>

      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/cleansing' element={<Cleansing/>}/>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </div>

  );
}

export default App;
