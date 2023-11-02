import { Route } from "react-router-dom";

const PublicRoute = ({ path, exact, component: Component }: any) => {
  return <Route path={path} exact={exact} component={Component} />;
};

export default PublicRoute;
