import { FlexBox } from "./components/FlexBox";
import { MainPost } from "./components/MainPost";
import { Navbar } from "./components/Navbar";
import { ApiTest } from "./components/ApiTest";
import { Header } from "./components/Header";
function App() {
  return (
    <div className="">
      <Navbar />
      <Header name="starlyns" greet="Welcome" who="Aliens" />

      <ApiTest />
    </div>
  );
}

export default App;
