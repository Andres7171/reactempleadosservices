import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Menu from './Menu';
import Home from './Home';
import EmpleadosOficio from './EmpleadosOficio';
export default class Router extends Component {
  render() {
    function EmpleadosElement(){
        let {oficio}=useParams()
        return(<EmpleadosOficio oficio={oficio}/>)
    }
    return (
      <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/empleados/:oficio' element={<EmpleadosElement/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}
