import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CreateProperties from './pages/CreateProperties'
import DeleteProperties from './pages/DeleteProperties'
import EditProperties from './pages/EditProperties'
import Broker from './pages/Broker'
import ShowProperty from './pages/ShowProperty'
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import ClientPage from './pages/ClientPage'


const App = () => {
  return (
    <Routes>
      <Route path ='/' element={<LoginPage/>}/>
      <Route path ='/CreateAccount' element={<RegistrationPage />}/>
      <Route path ='/Broker' element={<Broker/>}/>
      <Route path ='/ClientPage' element={<ClientPage/>}/>
      <Route path ='/properties/create' element={<CreateProperties/>}/>
      <Route path ='/properties/details/:id' element={<ShowProperty/>}/>
      <Route path ='/properties/edit/:id' element={ <EditProperties/>}/>
      <Route path ='/properties/delete/:id' element={<DeleteProperties />}/>
    </Routes>
  )
}

export default App