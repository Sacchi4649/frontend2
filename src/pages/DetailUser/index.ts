import loadable from "@loadable/component";

import { DETAIL_PATH } from "../../url";

const homeView = loadable(() =>
  import(/* webpackChunkName: "home-view" */ "./homeView")
);

export default {
  path: DETAIL_PATH,
  component: homeView,
  exact: true,
  auth: true,
};
