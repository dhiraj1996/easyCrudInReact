import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './UserReducer.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './components/Home.jsx'
import CreatePage from './components/CreatePage.jsx'
import Update from './components/Update.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>} >
      <Route index element={<Home/>} />
      <Route path="create" element={<CreatePage/>} />
      <Route path="edit/:id" element={<Update/>} />
    </Route>
  )
)

const store = configureStore({
  reducer: {
    users: UserReducer,
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store= {store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
