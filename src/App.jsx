import axios from 'axios';
import { useCallback, useEffect, useMemo, useState } from 'react';

import AppRoutes from './routes';

import AppContext from './AppContext';

import getAllCountries from './utils/getAllCountries';

import './App.css';

export default function App() {
    const [ allCountries, setAllCountries ] = useState(null);
    const [ searchedValue, setSearchedValue ] = useState('');

    const loadAllCountries = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const countries = await getAllCountries(apiKey);

        setAllCountries(countries.data);
    };

    const handleChangeSearch = useCallback((e) => {
        const { value } = e.target;
        setSearchedValue(value);
    }, []);

    useEffect(() => {
        loadAllCountries();
        axios.get('https://apiv3.apifootball.com/?action=get_H2H&firstTeamId=2017&secondTeamId=546&APIkey=f941b709bc773f7a6f60676b05c8963d3f8a20e4f14e717ef014f1c62f84e134')
            .then((data) => console.log(data));
    }, []);

    const memoizedAppContext = useMemo(
        () => (
            {
                allCountries, handleChangeSearch, searchedValue,
            }
        ),
        [allCountries, searchedValue],
    );

    return (
        <div className="App">
            <AppContext.Provider value={ memoizedAppContext }>
                <AppRoutes />
            </AppContext.Provider>
        </div>
    );
}
