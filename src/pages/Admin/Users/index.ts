import loadable from "@loadable/component";

import { USERS_PATH } from "../../../url";

const UsersView = loadable(
  () => import(/* webpackChunkName: "users-view" */ "./usersView")
);

export default {
  path: USERS_PATH,
  component: UsersView,
  exact: true,
  auth: true,
};
