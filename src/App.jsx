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
        console.log(countries);

        setAllCountries(countries.data);
    };

    const handleChangeSearch = useCallback((e) => {
        const { value } = e.target;
        setSearchedValue(value);
    }, []);

    useEffect(() => {
        loadAllCountries();
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
