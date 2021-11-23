import { Routes, Route } from 'react-router-dom';



import { Home } from '../components/home/Home';


export const DashboardRoutes = () => {
    return (
        <>
           

            <div className="container">
                <Routes>
                    <Route path="home" element={<Home />} />
             
             

                

                </Routes>
            </div>
        </>
    )
}
