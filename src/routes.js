import { Route, Routes } from 'react-router-dom';

import Home from './templates/Home';
import CountryPage from './templates/CountryPage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/soccer/" element={ <Home /> } />
            <Route path="/soccer/country/:countryId" element={ <CountryPage /> } />
        </Routes>
    );
}