import { Layout } from "antd";
import   "./homeStyle.css";
import localStorageHooks from "../../utils/localStorageHooks";
import { LOCALSTORAGE_KEY } from "../../constants";

const Home = () => {
  const { getLocalStorage } = localStorageHooks();
  return (
    
    <div>
      <Layout className="content-layout">
      
          <div className="container-content container-welcome">Selamat Datang {getLocalStorage(LOCALSTORAGE_KEY.USERNAME)} di Portal Si Hadir. Portal Absensi adalah
                sistem yang memungkinkan pengguna untuk mengakses
                informasi absensi dengan lebih cepat melalui Internet.
                Sistem ini dirancang untuk memberikan kemudahan bagi
                setiap pengguna dalam mencatat kehadiran dan memantau
                proses absensi untuk website Si Hadir. Selamat
                menggunakan fasilitas ini.</div>
          
      </Layout>
    </div>
  );
};

export default Home;
// {getLocalStorage(LOCALSTORAGE_KEY.USERNAME)}