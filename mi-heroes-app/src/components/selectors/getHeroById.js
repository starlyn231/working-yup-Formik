import { Heroes } from "../../data/Heroes"


export const getHeroById=( id="" )=>{
  // buscara hero cuyo id es igual a la que se recibe por argumentos
  return Heroes.find(hero => hero.id === id);
}