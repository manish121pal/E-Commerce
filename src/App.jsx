import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './page/Home'
import Mens  from './page/Mens'
import Womens from './page/Womens'
import Electronic from './page/Electronic'

import PageNot from './page/PageNot'
import Jeweleri from './page/Jeweleri'
import Addtocart from './Card/Addtocart'
const App = () => {
  return (
    <>
      <Router>
      <Navbar/>
      <div className='app-container' >
      <Routes>
       <Route path={'*'} element={ <PageNot/>}/>
       <Route path={'/'} element={ <Home/>}/>
       <Route path={'/mens'} element={ <Mens/>}/>
       <Route path={'/womens'} element={ <Womens/>}/>
       <Route path={'/jeweleri'} element={ <Jeweleri/>}/>
       <Route path={'/electronic'} element={ <Electronic/>}/>
       <Route path={'/addcards'} element={ <Addtocart/>}/>
      
        </Routes>
      </div>
       
     
      </Router>
    
     
    </>
  )
}

export default App

