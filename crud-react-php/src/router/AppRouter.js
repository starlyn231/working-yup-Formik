import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Login } from '../components/Login';
import { Signup } from '../components/signup';


import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {
  return (
    <BrowserRouter>
            
    <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Signup />} />
        <Route path="/*" element={ <DashboardRoutes />  } />
       
    </Routes>
</BrowserRouter>
  )
}
