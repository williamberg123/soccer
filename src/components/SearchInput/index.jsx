import { useContext } from 'react';
import AppContext from '../../AppContext';

import './style.css';

export default function SearchInput() {
    const { handleChangeSearch } = useContext(AppContext);

    return (
        <input className="SearchInput" onChange={handleChangeSearch} type="search" placeholder="pesquise o nome de um país" />
    );
}
