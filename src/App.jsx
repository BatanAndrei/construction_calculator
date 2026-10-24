import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import FencesPage from './pages/FencesPage/FencesPage';
import FencesCalcPage from './pages/FencesCalcPage/FencesCalcPage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path="/work/zabory" element={<FencesPage />} />
                <Route path="/work/zabory/calc" element={<FencesCalcPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
