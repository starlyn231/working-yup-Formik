import React,{useMemo} from 'react'

import {getHeroesBypublisher}  from '../selectors/getHeroByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
  
  const heroes = useMemo(() => getHeroesBypublisher(publisher), [publisher]);
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__bounce animate__fadeIn">
   
      
        {
          heroes.map(hero=>(
       <HeroCard key={hero.id}
       
       {...hero}/>
       ))
        }
    
    </div>
  )
}
