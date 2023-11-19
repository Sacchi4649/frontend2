import { useEffect } from "react";
import HomeSiswa from "./Home";
import HomeStatus1 from "./homeStatus1";

const homeView = () => {
  
    useEffect(() => {
    }, []);
  
    return (
      <div>
        <div className="text-2xl font-bold pb-5"><p>PROFILE SISWA</p></div>
        <HomeSiswa/>
        <main className="flex pt-3">
        <HomeStatus1/>
        </main>
      </div>
    );
  };
  
  export default homeView;