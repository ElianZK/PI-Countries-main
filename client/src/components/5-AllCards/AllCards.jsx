import Card from '../6-CountryCard/Card'
import React from 'react';


export default function AllCards({countries}){
    return (
        <>
            <section>
                {countries?.map(country => 
                    <Card 
                        key={country.id}
                        id={country.id}
                        flags={country.flags}
                        name={country.name}
                        continents={country.continents} 
                    />
                )}
            </section>
        </>
    )
}