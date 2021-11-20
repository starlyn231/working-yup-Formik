import {getHeroesBypublisher}  from '../selectors/getHeroByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
  
  const heroes = getHeroesBypublisher(publisher);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
   
      
        {
          heroes.map(hero=>(
       <HeroCard
       
       {...hero}/>
       ))
        }
    
    </div>
  )
}
