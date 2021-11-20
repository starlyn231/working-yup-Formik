import { Heroes } from "../../data/Heroes";


export const getHeroesBypublisher = (publisher) => {
  const validPublisher = ["Dc Comics", "marvel Comics"];
  if (validPublisher.includes(publisher)) {
    throw new Error(`Publisher "${publisher}"No es correcto`);
  }

  return Heroes.filter((hero)=>hero.publisher === publisher);
};
