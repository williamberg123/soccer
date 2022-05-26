import { Route, Routes } from 'react-router-dom';

import Home from './templates/Home';
import CountryPage from './templates/CountryPage';
import StandingPage from './templates/StandingPage';
import TeamPage from './templates/TeamPage';
import PlayerPage from './templates/PlayerPage';
import ErrorPage from './templates/ErrorPage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/soccer/" element={ <Home /> } />
            <Route path="/soccer/country" element={ <CountryPage /> } />
            <Route path="/soccer/league" element={ <StandingPage /> } />
            <Route path="/soccer/team" element={ <TeamPage /> } />
            <Route path="/soccer/player" element={ <PlayerPage /> } />
            <Route path="*" element={ <ErrorPage /> } />
        </Routes>
    );
}
