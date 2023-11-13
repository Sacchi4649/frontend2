import { useEffect } from "react";
import Home from "./Home";
import HomeStatus1 from "./homeStatus1";
import HomeStatus2 from "./homeStatus2";
import HomeStatus3 from "./homeStatus3";

const homeView = () => {
  
    useEffect(() => {
    }, []);
  
    return (
      <div>
        <Home/>
        <main className="flex">
        <HomeStatus1/>
        <HomeStatus2/>
        </main>
        <HomeStatus3/>
      </div>
    );
  };
  
  export default homeView;