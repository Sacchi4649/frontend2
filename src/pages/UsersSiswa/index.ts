import loadable from "@loadable/component";

import { USERS_PATH_SISWA } from "../../url";

const UsersView = loadable(
  () => import(/* webpackChunkName: "users-view" */ "./usersView")
);

export default {
  path:USERS_PATH_SISWA,
  component: UsersView,
  exact: true,
  auth: true,
};
