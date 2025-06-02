import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import './index.css'
import App from './App.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Layout from './layouts/Layout.jsx'
import Ships from './pages/Ships.jsx'
import Components from './pages/Components.jsx'
import Jobs from './pages/Jobs.jsx'
import { store } from './components/redux/store.js';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='' element={<LoginPage/>}/>

      
      <Route element={<Layout/>}>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/ships' element={<Ships/>}/>
        <Route path='/components' element={<Components/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
      </Route>      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
