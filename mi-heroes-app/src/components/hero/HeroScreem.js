import React,{useMemo}from 'react'
import { useParams, Navigate,useNavigate} from 'react-router-dom'
import { getHeroById } from '../selectors/getHeroById';


export const HeroScreem = () => {
  const {heroeId} = useParams();
 const navigate =useNavigate()
  
 //USEMEMO, MEMORISA VALORES. 
 const hero = useMemo(() => getHeroById(heroeId), [heroeId])


if(!hero){
  return <Navigate to='/' />;
}

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;


const handleReturn =()=>{
navigate(-1);
}

  return (
    <div className="row mt-6">
    <div className="col-4">
      <img
        src={`../assets/heroes/${heroeId}.jpg`}
        alt={superhero}
        className="img-thumbnail  animate__animated animate__fadeInLeft"
      />
    </div>
    <div className="col-8">
      <h3>{superhero}</h3>
      <ul className="list-group list-group-flush animate__animated animate__swing">
        <li className="list-group-item">
          {" "}
          <b>Alter ego:</b>
          {alter_ego}
        </li>
        <li className="list-group-item">
          {" "}
          <b>Publisher: </b>
          {publisher}
        </li>
        <li className="list-group-item">
          {" "}
          <b>First_appearance: </b>
          {first_appearance}
        </li>
      </ul>
      <h5>Charaters</h5>
      <p>{characters}</p>
      <button className="btn btn-outline-info" onClick={handleReturn}>
        Return
      </button>
    </div>
  </div>
  )
}
