import React, { useEffect, useState } from 'react';
import { getRiverInformation } from '../riverService';

export default function RiverInformation({name}) {

    const [riverInformation, setRiverInformation] = useState({});

    //traernos los datos del objeto
    useEffect(() => {
        getRiverInformation(name).then(
            data => setRiverInformation(data)
        );
    }, [name]) //escucha los cambios en name

    return (
        <div>
            <h2>{name} River Information</h2>
            <ul>
                <li>Continent: {riverInformation.continent}</li>
                <li>Length: {riverInformation.length}</li>
                <li>Outflow: {riverInformation.outflow}</li>
            </ul>
        </div>
    )
}
