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
        <div className="text-2xl font-bold pb-5"><p>DETAIL USER</p></div>
        <Home/>
        <main className="flex pt-3">
        <HomeStatus1/>
        <HomeStatus2/>
        </main>
        <div className="pt-3"><HomeStatus3/></div>
      </div>
    );
  };
  
  export default homeView;