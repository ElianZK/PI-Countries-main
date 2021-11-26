import './App.css';
import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Route, Routes} from 'react-router-dom'
/*---------------components--------------*/
import Landing from './components/1-Landing/Landing'
import HomePage from './components/2-HomePage/HomePage'
import Detail from './components/7-CountryDescription/Detail'
import Form from './components/8-Form/Form'
/*--------------actions-------------*/
import{getAllCountries,getAllActivities} from './actions/actions'



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries())
    dispatch(getAllActivities())

  }, [dispatch])
/*--------------routes-----------*/
  return (
    <>
      <Routes>
        <Route  exact path='/' element={<Landing/>} />
        <Route  exact path='/home' element={<HomePage/>} />
        <Route  exact path='/countries/:id' element={<Detail/>} />
        <Route  path='/postActivity' element={<Form/>} />
      </Routes>     
    </>
  );
}

export default App;