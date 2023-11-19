import { useEffect } from "react";
import AbsenSiswa from "./absensiswa";
import HomeStatus1 from "./homeStatus1";
import HomeStatus2 from "./homeStatus2";
import MkDosen from "./mkdosen";

const homeView = () => {
  
    useEffect(() => {
    }, []);
  
    return (
      <div>
        <div className="text-2xl font-bold pb-5"><p>ABSENSI SISWA</p></div>
        <div className="grid grid-flow-col gap-3">
          <div className="row-span-4 ..."><MkDosen/></div>
          <div className="col-span-3 ..."><AbsenSiswa/></div>
          <div className="row-span-2 col-span-3 ..."><HomeStatus1/></div>
          <div className="col-span-3"><HomeStatus2/></div>
        </div>
      </div>
    );
  };
  
  export default homeView;