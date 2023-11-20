import { Spin } from "antd";
import { useEffect, useState } from "react";
import { Redirect, Switch, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { MahasiswaMenuList, AdminMenuList } from "../menu-list";
import { utilities } from "../styles/_utilities";
import { LOGIN_PATH, NOT_FOUND_PATH } from "../url";
import useLocalStorage from "../utils/localStorageHooks";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { LOCALSTORAGE_KEY } from "../constants";
const Router = ({ listRoutes }: any) => {
  const { globalState, setState }: any = useAppContext();
  const location = useLocation();
  const { getLocalStorage } = useLocalStorage();
  const [role, setRole] = useState();

  useEffect(() => {
    setRole(globalState?.user);
  }, [globalState?.user]);
  useEffect(() => {
    const role = globalState?.user;
    console.log(role);
    if (!globalState?.listOfAllowedMenu) {
      if (role == "mahasiswa")
        setState({ listOfAllowedMenu: MahasiswaMenuList });
    } else if (role == "admin") {
      setState({ listOfAllowedMenu: AdminMenuList });
    } else {
      setState({ listOfAllowedMenu: [...AdminMenuList, ...MahasiswaMenuList] });
    }
  }, []);

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
