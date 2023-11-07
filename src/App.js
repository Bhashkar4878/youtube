
import './App.css';
// import TableComponent from './table.js';
// import Timer from './Timer.js';
// import HookComponent from './Click.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import VideoComponent from './VideoContent';
import VideoPage from './VideoPage';


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
          <Route path='/video' element={<VideoComponent></VideoComponent>}></Route>
          <Route path='/vedioPage' element={<VideoPage></VideoPage>}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
