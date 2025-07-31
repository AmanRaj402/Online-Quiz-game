 import React from 'react'
import Qa from './Qa'
import AboutUs from './AboutUs'
import { Route,Routes, useLocation, useNavigate } from "react-router-dom";
import Homepage from './Homepage';
import Selectlevel from './Selectlevel';
import Resultpage from './Resultpage';

 const App = () => {

 
   return (
     <div>
      <Routes>
        <Route path='/'element={<Homepage/>}/>
        <Route path='/level'element={<Selectlevel/>}/>
        <Route path='/game'element={<Qa/>}/>
        <Route path='/result'element={<Resultpage/>}/>
        <Route path='/abt'element={<AboutUs/>}/>
      </Routes>
      </div>
   )
 }
 
 export default App
 