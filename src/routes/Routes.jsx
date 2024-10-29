import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
//import TelaAgendamentos from '../pages/TelaDeAgendamento';
import TelaAgendamentos2 from '../pages/TelaAgendamentos2';
import Agendamento3 from '../pages/Agendamento3';
//import Home from '../pages/Home'
import TelaResultados from '../pages/TelaResultados';
import Agendamento1 from '../pages/Agendamento1'

const routes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/home' element={<HomePage />} />
                {/* <Route path='/agendamentos' element={<TelaAgendamentos />} /> */}
                {/* <Route path='/agendamento1' element={<Home />} /> */}
                <Route path='/agendamentos' element={ <Agendamento1 />} />
                <Route path='/agendamentos2' element={<TelaAgendamentos2 />} />
                <Route path='/agendamentos3' element={<Agendamento3 />} />
                <Route path='/resultados' element={<TelaResultados />} />
            </Routes>
        </BrowserRouter>
    )
}
export default routes;
