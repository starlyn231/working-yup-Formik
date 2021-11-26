import { Routes, Route } from 'react-router-dom';
import { Test } from '../components/Form/Test';



import { Home } from '../components/home/Home';
import { Login } from '../components/Login';
import { Index } from '../page/Index';
import { ExampleForm} from '../components/Form/ExampleForm';

export const DashboardRoutes = () => {
    return (
        <>
           

            <div className="container">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/form" element={<ExampleForm />} />
                    <Route path="/index" element={<Index />} />
                    <Route path="/" element={<Login />} />
                </Routes>
            </div>
        </>
    )
}
