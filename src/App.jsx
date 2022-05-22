import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import AppRoutes from './routes';

export default function App() {
    const [ apiToken ] = useState('52892a0c387949ee9f68c23ca1db5ebf');

    useEffect(() => {
        axios('https://api.football-data.org/v4/areas/', {
            headers: {
                'X-Auth-Token': apiToken,
            },
        }).then((data) => console.log(data));
    }, []);

    return (
        <div className="App">
            <AppRoutes />
        </div>
    );
}
