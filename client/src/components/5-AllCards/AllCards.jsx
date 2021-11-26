import Card from '../6-CountryCard/Card'
import React from 'react';


export default function AllCards({countries}){
    return (
        <>
            {countries?.map(country =>
                <Card key={country.id} 
                    id={country.id} 
                    flag={country.flag} 
                    name={country.name}
                    continents={country.continents} 
                />
            )}

        </>
    )
}