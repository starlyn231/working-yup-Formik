import { HeroList } from "../hero/HeroList"


export const DcScreen = () => {
  return (
    <div className="animate__fadeOutLeft">
      <h1>Dc Screen </h1> 
      <hr/>
 <HeroList publisher="DC Comics"/>
    </div>
  )
}
