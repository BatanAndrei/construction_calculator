import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import FencesPage from './pages/FencesPage/FencesPage';
import FencesCalcPage from './pages/FencesCalcPage/FencesCalcPage';
import StubPage from './pages/StubPage/StubPage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path="/work/zabory" element={<FencesPage />} />
                <Route path="/work/zabory/calc" element={<FencesCalcPage />} />

                <Route path="/work/blagoustroystvo" element={<StubPage title="Благоустройство" />} />
                <Route path="/work/krysha" element={<StubPage title="Крыша" />} />
                <Route path="/work/karkasy" element={<StubPage title="Каркасы" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
