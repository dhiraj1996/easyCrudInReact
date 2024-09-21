import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Home from './components/Home'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
      <center>Navigation</center>
      <Outlet />
    </>
  )
}

export default App
