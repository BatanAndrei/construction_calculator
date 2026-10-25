import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import FencesPage from './pages/FencesPage/FencesPage';
import FencesCalcPage from './pages/FencesCalcPage/FencesCalcPage';
import RoofPage from './pages/RoofPage/RoofPage';
import RoofCalcPage from './pages/RoofCalcPage/RoofCalcPage';
import TerracePage from './pages/TerracePage/TerracePage';
import TerraceCalcPage from './pages/TerraceCalcPage/TerraceCalcPage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path="/work/zabor" element={<FencesPage />} />
                <Route path="/work/zabor/calc" element={<FencesCalcPage />} />
                <Route path="/work/krysha"       element={<RoofPage />} />
                <Route path="/work/krysha/calc"  element={<RoofCalcPage />} />
                <Route path="/work/terassa"      element={<TerracePage />} />
                <Route path="/work/terassa/calc" element={<TerraceCalcPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
