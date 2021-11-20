import { Routes , Route} from "react-router";
import { DcScreen } from "../dc/DcScreen";
import { HeroScreem } from "../hero/HeroScreem";
import { MarvelScreen } from "../marvel/MarvelScreen";
import { SearchScreen } from "../search/SearchScreen";
import { Navbar } from "../ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
            <Routes>
            <Route path="/marvel" element={<MarvelScreen />} />
        <Route path="/dc" element={<DcScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/hero/:id" element={<HeroScreem/>}/>
        
        <Route path="/" element={<MarvelScreen />} />
      
      
      </Routes>
      </div>
    </>
  )
}
