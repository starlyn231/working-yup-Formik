import { Routes , Route} from "react-router";
import { DcScreen } from "../dc/DcScreen";
import { MarvelScreen } from "../marvel/MarvelScreen";
import { SearchScreen } from "../search/SearchScreen";
import { Navbar } from "../ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
    <Navbar/>
            <Routes>
            <Route path="/marvel" element={<MarvelScreen />} />
        <Route path="/dc" element={<DcScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        
        <Route path="/" element={<MarvelScreen />} />
      
      
      </Routes>
    </>
  )
}
