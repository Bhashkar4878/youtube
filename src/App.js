
import './App.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import VideoComponent from './VideoContent';
import VideoPage from './VideoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './loginComponent';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
        
          <Route path='/' element={<HomeComponent></HomeComponent>}></Route>
          <Route path='/video/:id' element={<VideoComponent></VideoComponent>}></Route>
          <Route path='/vedioPage/:id' element={<VideoPage></VideoPage>}></Route>
          <Route path='/login' element={<LoginComponent/>}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
