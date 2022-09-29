import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import App from './App'
import Home from './pages/Home'
import Detail from './pages/Detail'
import List from './pages/List'


export default function router() {
  return (
    // <BrowserRouter basename={'/react-cms-app'}>
    //     <Routes>
    //       <Route path='/' element={<App />}>
    //           <Route path='/home' element={<Home />}></Route>
    //           <Route path='/detail/:id' element={<Detail />}></Route>
    //           <Route path='/list' element={<List />}></Route>
    //       </Route>
    //     </Routes>
    // </BrowserRouter>

    <HashRouter>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="detail/:id" element={<Detail />}></Route>
        <Route path="list" element={<List />}></Route>
      </Routes>
    </HashRouter>
  )
}
