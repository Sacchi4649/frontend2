import { Spin } from "antd";
import { useEffect } from "react";
import { Redirect, Switch, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { MahasiswaMenuList, AdminMenuList } from "../menu-list";
import { utilities } from "../styles/_utilities";
import { LOGIN_PATH, NOT_FOUND_PATH } from "../url";
import useLocalStorage from "../utils/localStorageHooks";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { LOCALSTORAGE_KEY } from "../constants";
import { useHistory } from "react-router-dom";
const Router = ({ listRoutes }: any) => {
  const { globalState, setState }: any = useAppContext();
  const location = useLocation();
  const { getLocalStorage } = useLocalStorage();
  const { push } = useHistory();

  useEffect(() => {
    if (!getLocalStorage(LOCALSTORAGE_KEY.TOKEN)) push(LOGIN_PATH);
  }, []);
  useEffect(() => {
    if (!globalState?.listOfAllowedMenu) {
      const role = globalState?.user
        ? globalState?.user.role
        : getLocalStorage(LOCALSTORAGE_KEY.ROLE);

      if (role == "mahasiswa") {
        setState({ listOfAllowedMenu: MahasiswaMenuList });
      } else if (role == "admin") {
        setState({ listOfAllowedMenu: AdminMenuList });
      }
    }
  }, [globalState?.user]);

  if (!globalState?.listOfAllowedMenu && location.pathname !== LOGIN_PATH)
    return <Spin size="large" />;

  return (
    <div className={utilities}>
      <Switch>
        {listRoutes?.map((route: any, i: number) => {
          if (route.auth) {
            return <PrivateRoute {...route} key={i} />;
          }
          return <PublicRoute {...route} key={i} />;
        })}
        <Redirect to={NOT_FOUND_PATH} />
      </Switch>
    </div>
  );
};

export default Router;
