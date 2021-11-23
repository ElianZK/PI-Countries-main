import {useDispatch, useSelector} from 'react-redux';
import React, {useState, useEffect} from 'react';
import SearchBar from '../4-SearchBar/SearchBar';
import AllCards from '../5-AllCards/AllCards';
import Card from '../6-CountryCard/Card';
import NavBar from '../3-NavBar/NavBar';
import s from './HomeStyle.module.css';
import {
        getAllCountries, 
        getAllActivities,
        getByContinent, 
        getByActivity, 
        getActBySeason, 
        getPopuAlph,    
} from '../../actions/actions';

export default function Home(){
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters)
    
    const [,setSorter] = useState('')
    
    useEffect(() => {
        dispatch(getAllCountries())
        dispatch(getAllActivities())
    }, [dispatch])

    function handleClick(e){
        e.preventDefault()
        dispatch(getAllCountries())
    }
    /*----------paginaion states---------*/
    const [actualPage, setActualPage] = useState(1)
    const [countriesPage] = useState(9)

    let lastCountryIndex = actualPage * countriesPage;  //1*9
    let firstCountryIndex = lastCountryIndex - countriesPage; //9-9
    let currentCountries = filters?.slice(firstCountryIndex, lastCountryIndex) //(0,9)
    let pages = [];

    const numOfPages = Math.ceil(filters.length / countriesPage)

    for(let i= 1; i<=numOfPages; i++){
        pages.push(i)
    }

    function pagination(e, page){
        e.preventDefault();
        setActualPage(page)
    }

    const renderPages = pages.map(page => (
        <li key={page}>
            <div>
                <button onClick={e => pagination(e, page)}>
                {page}
                </button>
            </div>
        </li>
    ))

    
    
/*--------------filter by activity--------------------------*/    
        function handleGetByActivity(e){
           e.preventDefault()
           dispatch(getByActivity(e.target.value))
           setSorter(e.target.value)
        }
/*--------------filter by continent-------------------------*/
        function handleGetByContinent(e){
           dispatch(getByContinent(e.target.value))
           setSorter(e.target.value)
        }
/*--------------filter by population and alphabetic---------*/
        function handleGetPopuAlph(e){
           e.preventDefault()
           dispatch(getPopuAlph(e.target.value))
           setSorter(e.target.value)
       }
 /*-------------filter by season----------------------------*/    
        function handleGetActBySeason(e){
            e.preventDefault()
            dispatch(getActBySeason(e.target.value))
            setSorter(e.target.value)
        }

    

    return (
    <>
        <div className={s.container}>
            <NavBar />
            <br></br>
            <SearchBar />
            <br></br>
            <div className={s.filterContainer}>
                    <select className={s.filter} onChange={handleGetByContinent}>
                        <option value='All'>Filters By Continents</option>
                        <option value='{Africa}'>Africa</option>
                        <option value='{Asia}'>Asia</option>
                        <option value='{Europe}'>Europe</option>
                        <option value='{"North America"}'>North America</option>
                        <option value='{Oceania}'>Oceania</option>
                        <option value='{"South America"}'>South America</option>
                    </select>

                    <select className={s.filter} onChange={handleGetActBySeason}>
                        <option value='All'>Filters By Season</option>
                        <option value='Summer'>Summer</option>
                        <option value='Autumn'>Autumn</option>
                        <option value='Winter'>Winter</option>
                        <option value='Spring'>Spring</option>
                    </select>

                    <select className={s.filter} onChange={handleGetByActivity}>
                        <option value='All'>Filters By Activities</option>
                        <option value='Montain Climb'>Montain-Climb</option>
                        <option value='Camping'>Camping</option>
                        <option value='Safari'>Safari</option>
                        <option value='Diving'>Diving</option>
                        <option value='Surf'>Surf</option>
                        <option value='Sky'>Sky</option>
                    </select>

                    <select className={s.filter} onChange={handleGetPopuAlph}>
                        <option value='All'>Sorts</option>
                        <option value='A-Z'>Countries A to Z</option>
                        <option value='Z-A'>Countries Z to A</option>
                        <option value='MIN-MAX'>Acsendent Population </option>
                        <option value='MAX-MIN'>Descendent Population</option>
                    </select>
            </div>  


            <div className={s.btnContainer}>
                <button onClick={(e) => handleClick(e)} className={s.btn}>Refresh Country</button>
            </div>
            
                {currentCountries.length?(
                    currentCountries.map((co) => (
                        <Card
                            name={co.name}
                            id={co.id}
                            flags={co.flags}
                            continents={co.continents}
                            activities={co.activities}
                            key={co.id}
                        />
                    ))
                ):(<h3>Country Not found</h3>)
                } 
        </div> 

            <div className={s.countryContainer}>
              <AllCards  countries={currentCountries} />
            </div>
        

            <ul className={s.ul}>{renderPages}</ul>
      
       
    </>
    )
}        
