import { Route, Routes } from 'react-router-dom';
import Home from './templates/Home';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/football/" element={ <Home /> } />
        </Routes>
    );
}
