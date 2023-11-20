import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Router from "./routes";

import DETAIL_PATH from "./pages/Admin/DetailUser";
import ProfileAdmin from "./pages/Admin/ProfileAdmin";
import Users from "./pages/Admin/Users";
import Login from "./pages/Login";
import AbsenSiswa from "./pages/Mahasiswa/AbsenSiswa";
import JadwalMahasiswa from "./pages/Mahasiswa/Jadwal";
import HomeSiswa from "./pages/Mahasiswa/Profile";
import UsersSiswa from "./pages/Mahasiswa/UsersSiswa";
import NotFound from "./pages/NotFound";
import Welcome from "./pages/Welcome";

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
  { ...Welcome },
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
