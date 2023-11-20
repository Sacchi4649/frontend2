import loadable from "@loadable/component";

import { WELCOME_PATH } from "../../url";


const NotFoundView = loadable(() =>
  import(/* webpackChunkName: "welcome-view" */ "./WelcomeView")
);

export default {
  path: WELCOME_PATH,
  component: NotFoundView,
  exact: true,
  auth: true,
};
