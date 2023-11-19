import { Spin } from "antd";
import { useEffect } from "react";
import { Redirect, Switch, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import MenuList from "../menu-list";
import { utilities } from "../styles/_utilities";
import { LOGIN_PATH, NOT_FOUND_PATH } from "../url";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
const Router = ({ listRoutes }: any) => {
  const { globalState, setState }: any = useAppContext();
  const location = useLocation();

  useEffect(() => {
    if (!globalState?.listOfAllowedMenu) {
      setState({ listOfAllowedMenu: MenuList });
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
