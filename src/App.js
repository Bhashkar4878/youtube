
import './App.css';
// import TableComponent from './table.js';
// import Timer from './Timer.js';
// import HookComponent from './Click.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import VideoComponent from './VideoContent';
import VideoPage from './VideoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './loginComponent';

function App() {
  return (
    <div className="App">
      {/* <TableComponent></TableComponent>
      <Timer></Timer> */}
      {/* <HookComponent></HookComponent> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/Timer" element={<Timer/>}/>
          <Route path="/table" element={<TableComponent/>}/>
          <Route path="/Click" element={<HookComponent/>}/> */}
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
