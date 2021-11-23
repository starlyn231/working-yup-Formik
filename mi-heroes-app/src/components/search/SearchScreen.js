import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import {queryString} from 'query-string';
import { useForm } from '../hooks/useForm';
import { getHeroesByName } from '../selectors/getHeroesByName';
import {HeroCard} from '../hero/HeroCard';

export const SearchScreen = () => {

const navigate =useNavigate();
const location =useLocation();

const queryString = require('query-string');

const { q =''} = queryString.parse(location.search);
console.log(q)




  const [Formvalue, handleInputChange] =useForm({
    searchText:q,
  } );

  const { searchText } = Formvalue;
const heroesFiltered = getHeroesByName(q);

  const handleSearch =(e)=>{
e.preventDefault();
//Pasar parametro en url para hacer una busquedad en una pagina, ojo esto es el route v6 en router v5 se trabaja
//con useHistory
navigate(`?q${searchText}`);
}

  return (
    <>
      <h1>Search</h1>
      <hr/>

<div className="row">
<div className="col-5">
          <h4>Seach Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find Your Hero"
              className="form-control"
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>



          </form>

  </div>

  <div className="col-7 mb-1">
          <h4>Results</h4>
          <hr />

          
          {heroesFiltered.map((hero) => (
         <HeroCard key={hero.id} {...hero}/>
          ))}
        </div>
   
</div>
    </>
  )
}
