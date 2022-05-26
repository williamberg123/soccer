import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import getPlayerInfo from '../../utils/getPlayerInfo';

import './style.css';

export default function PlayerPage() {
    const [ playerInfo, setPalyerInfo ] = useState(null);

    const [ queryStrings ] = useSearchParams();

    const loadPlayerInfo = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const info = await getPlayerInfo(apiKey, queryStrings.get('id'));
        console.log(info);

        setPalyerInfo(info.data);
    };

    useEffect(() => {
        loadPlayerInfo();
    }, []);

    return (
        <div className="PlayerPage">

        </div>
    );
}
