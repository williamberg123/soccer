import { useContext } from 'react';
import AppContext from '../../AppContext';

import './style.css';

export default function SearchInput() {
    const { handleChangeSearch, searchedValue } = useContext(AppContext);

    return (
        <input className="SearchInput" onChange={handleChangeSearch} type="search" value={searchedValue} placeholder="pesquise o nome do país em inglês" />
    );
}
