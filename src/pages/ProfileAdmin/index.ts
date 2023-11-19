import loadable from "@loadable/component";

import { USERSPROFILE_PATH_ADMIN } from "../../url";

const homeView = loadable(() =>
  import(/* webpackChunkName: "home-view" */ "./homeView")
);

export default {
  path: USERSPROFILE_PATH_ADMIN,
  component: homeView,
  exact: true,
  auth: true,
};
