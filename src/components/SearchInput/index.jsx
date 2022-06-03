import { useContext } from 'react';
import Context from '../../contexts/AppContext/context';

import './style.css';

export default function SearchInput() {
    const { handleChangeSearch, searchedValue } = useContext(Context);

    return (
        <input className="SearchInput" onChange={handleChangeSearch} type="search" value={searchedValue} placeholder="pesquise o nome do país em inglês" />
    );
}
