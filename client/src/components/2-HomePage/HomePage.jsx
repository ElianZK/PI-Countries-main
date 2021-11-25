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
        countryByContinent, 
        countryByActivity, 
        activityBySeason, 
        filterPopuAlph,    
} from '../../actions/actions';

export default function HomePage(){
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters)
    
    const [,setSort] = useState('')
    
    

    useEffect(() => {
        dispatch(getAllCountries())
        dispatch(getAllActivities())
    }, [dispatch])

    function handleClick(e){
        e.preventDefault()
        dispatch(getAllCountries())
    }
    //pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPage] = useState(22)

    let indexOfLastCountry = currentPage * countriesPage;  //1*9
    let indexOfFirstCountry = indexOfLastCountry - countriesPage; //9-9
   
     let currentCountries= filters?.slice(indexOfFirstCountry, indexOfLastCountry) //(0,9)
    let pages = [];

    const numOfPages = Math.ceil(filters.length / countriesPage)

    for(let i= 1; i<=numOfPages; i++){
        pages.push(i)
    }

    function pagination(e, page){
        e.preventDefault();
        setCurrentPage(page)
    }

    const renderPages = pages.map(page => (
        <li  key={page}>
            <div>
                <button onClick={e => pagination(e, page)}>
                {page}
                </button>
            </div>
        </li>
    ))

    

    //filters
    function handleCountryByContinent(e){
        dispatch(countryByContinent(e.target.value))
        setSort(e.target.value)
    }
//--------------------------------------------------------
    function handleCountryByActivity(e){
        e.preventDefault()
        dispatch(countryByActivity(e.target.value))
        setSort(e.target.value)
    }
//--------------------------------------------------------
    function handleActivityBySeason(e){
       
        dispatch(activityBySeason(e.target.value))
        setSort(e.target.value)
        
    }
//--------------------------------------------------------
    function handleFilterPopuAlph(e){
        e.preventDefault()
        dispatch(filterPopuAlph(e.target.value))
        setSort(e.target.value)
    }

    

    return (
        <>
        <div className= {s.BackGround}>
            <NavBar />
            <br></br>
                <SearchBar />
                <br></br>
                    <div className={s.FilterContainer}>
                        <select 
                            onChange={handleCountryByContinent}>
                                <option value='All'>Filters By Continents</option>
                                <option value='Africa'>Africa</option>
                                <option value='Asia'>Asia</option>
                                <option value='Europe'>Europe</option>
                                <option value='North America'>North America</option>
                                <option value='Oceania'>Oceania</option>
                                <option value='South America'>South America</option>
                        </select>
                        <select 
                            onChange={handleActivityBySeason}>
                                <option value='All'>Filters By Season</option>
                                <option value='Autumn'>Autumn</option>
                                <option value='Spring'>Spring</option>
                                <option value='Summer'>Summer</option>
                                <option value='Winter'>Winter</option>
                        </select>
                        <select 
                            onChange={handleCountryByActivity}>
                                <option value='All'>Filters By Activities</option>
                                <option value='Surf'>Surf</option>
                                <option value='Safari'>Safari</option>
                                <option value='Sky diving'>Sky diving</option>
                                <option value='Diving'>Diving</option>
                                <option value='Montain Climb'>Montain-Climb</option>
                                <option value='Camping'>Camping</option>
                        </select>
                        <select 
                            onChange={handleFilterPopuAlph}>
                                <option value='All'>Sorts</option>
                                <option value='A-Z'>Countries A to Z</option>
                                <option value='Z-A'>Countries Z to A</option>
                                <option value='ASC'>Ascendant Population</option>
                                <option value='DESC'>Descendant Population</option>
                        </select>
                    </div> 
                     
            <div className={s.RefreshButton}>
                <button onClick={(e) => handleClick(e)}>Refresh Country</button>
                {console.log(currentCountries)}
            </div>
            <ul className={s.Pagination}>{renderPages}</ul> 
        </div> 
        <div>
            <AllCards  countries={currentCountries} />
        </div>
              
        </>
    )
}        
