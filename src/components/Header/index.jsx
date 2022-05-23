import SearchInput from '../SearchInput';
import './style.css';

export default function Header() {
    return (
        <header className="Header">
            <h1>SOCCER API</h1>
            <SearchInput />
        </header>
    );
}
