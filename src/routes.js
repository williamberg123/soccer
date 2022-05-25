import { Route, Routes } from 'react-router-dom';

import Home from './templates/Home';
import CountryPage from './templates/CountryPage';
import CompetitionPage from './templates/CompetitionPage';
import TeamPage from './templates/TeamPage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/soccer/" element={ <Home /> } />
            <Route path="/soccer/country" element={ <CountryPage /> } />
            <Route path="/soccer/competition" element={ <CompetitionPage /> } />
            <Route path="/soccer/team" element={ <TeamPage /> } />
        </Routes>
    );
}
