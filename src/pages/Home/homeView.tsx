import { useEffect } from "react";
import Home from "./Home";
import HomeStatus from "./HomeStatus";

const homeView = () => {
  
    useEffect(() => {
    }, []);
  
    return (
      <div>
        <Home/>
        <HomeStatus/>
      </div>
    );
  };
  
  export default homeView;