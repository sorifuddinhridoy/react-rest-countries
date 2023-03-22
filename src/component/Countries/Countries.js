import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))

    },[])

    return (
        <div>
            <h1>Hello from Countries</h1>
            <h3>Available Country: {countries.length}</h3>


            {
                countries.map(country => <Country 
                    name={country.name.common}
                    population={country.population}
                    area={country.area}
                    
                    ></Country>)
            }

        </div>
    );
};



export default Countries;