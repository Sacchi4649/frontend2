import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Router from "./routes";

import AbsenSiswa from "./pages/AbsenSiswa";
import DETAIL_PATH from "./pages/DetailUser";
import HomeSiswa from "./pages/HomeSiswa";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ProfileAdmin from "./pages/ProfileAdmin";
import Users from "./pages/Users";
import UsersSiswa from "./pages/UsersSiswa";

const listRoutes = [{ ...DETAIL_PATH },{ ...HomeSiswa },{ ...AbsenSiswa }, { ...Users }, { ...UsersSiswa }, { ...Login }, { ...NotFound }, { ... ProfileAdmin }]; 

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
