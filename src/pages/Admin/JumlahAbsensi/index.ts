import loadable from "@loadable/component";

import { ABSENSI_PATH_ADMIN } from "../../../url";

const homeView = loadable(() =>
  import(/* webpackChunkName: "home-view" */ "./homeView")
);

export default {
  path: ABSENSI_PATH_ADMIN,
  component: homeView,
  exact: true,
  auth: true,
};
