import loadable from "@loadable/component";

import { PROFILE_MAHASISWA_PATH } from "../../../url";

const homeView = loadable(() =>
  import(/* webpackChunkName: "profile-mahasiswa-view" */ "./ProfileMahasiswaView")
);

export default {
  path: PROFILE_MAHASISWA_PATH,
  component: homeView,
  exact: true,
  auth: true,
};
