import { Route } from "react-router-dom";
import LayoutView from "../layout/LayoutView";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <LayoutView>
          <Component {...props} />
        </LayoutView>
      )}
    />
  );
};

export default PrivateRoute;
