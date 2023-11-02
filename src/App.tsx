import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Router from "./routes";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Users from "./pages/Users";

const listRoutes = [{ ...Home }, { ...Users }, { ...Login }, { ...NotFound }];

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
