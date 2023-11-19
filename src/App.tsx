import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Router from "./routes";

import AbsenSiswa from "./pages/Mahasiswa/AbsenSiswa";
import DETAIL_PATH from "./pages/Admin/DetailUser";
import HomeSiswa from "./pages/Mahasiswa/Profile";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ProfileAdmin from "./pages/Admin/ProfileAdmin";
import Users from "./pages/Admin/Users";
import UsersSiswa from "./pages/Mahasiswa/UsersSiswa";
import JadwalMahasiswa from "./pages/Mahasiswa/Jadwal";

const listRoutes = [
  { ...DETAIL_PATH },
  { ...HomeSiswa },
  { ...AbsenSiswa },
  { ...Users },
  { ...UsersSiswa },
  { ...Login },
  { ...NotFound },
  { ...ProfileAdmin },
  { ...JadwalMahasiswa },
];

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <ConfigProvider theme={{ token: { colorPrimary: "#537FE7" } }}>
          <Router listRoutes={listRoutes} />
        </ConfigProvider>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
