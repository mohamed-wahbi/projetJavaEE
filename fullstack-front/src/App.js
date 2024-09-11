import React from 'react'
import Navbar from './layout/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';

import {BrowserRouter , Routes , Route} from 'react-router-dom'
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import Login from './pages/Login';
import Register from './pages/Register';
import ViewProduit from './produits/ViewProduit';
import EditProduit from './produits/EditProduit';
import AddProduit from './produits/AddProduit';


const App = () => {
  return (
    <div>

      <BrowserRouter>

        <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />

          <Route exact path='/home' element={<Home/>} />
          <Route exact path='/adduser' element={<AddUser/>} />
          <Route exact path='/edituser/:id' element={<EditUser/>} />
          <Route exact path='/viewuser/:id' element={<ViewUser/>} />



          <Route exact path='/viewproduit/:id' element={<ViewProduit/>} />
          <Route exact path='/editproduit/:id' element={<EditProduit/>} />
          <Route exact path='/addproduit' element={<AddProduit/>} />




        </Routes>


      
      </BrowserRouter>



    </div>
  )
}

export default App
