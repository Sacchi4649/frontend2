import loadable from "@loadable/component";

import { HOME_PATH } from "../../url";

const homeView = loadable(() =>
  import(/* webpackChunkName: "home-view" */ "./homeView")
);

export default {
  path: HOME_PATH,
  component: homeView,
  exact: true,
  auth: true,
};
