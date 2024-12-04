import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import { BrowserRouter as Routers, Routes, Route, BrowserRouter } from 'react-router-dom'
import AddUser from './Pages/AddUser'
import Header from './Layouts/Header'
import ViewUser from './Pages/ViewUser'
import Update from './Pages/Update'
import Footer from './Layouts/Footer'
const App = () => {
  return (
    <div>
      <Routers>
        <Header />
        <Routes>
          <Route path='/' element={<AddUser />}></Route>
          <Route path='/viewuser' element={<ViewUser />}></Route>
          <Route path='/updateuser/:id' element={<Update />}></Route>
        </Routes>
        <Footer />
      </Routers>
    </div>
  )
}

export default App
