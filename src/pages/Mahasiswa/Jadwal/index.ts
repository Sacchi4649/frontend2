import loadable from "@loadable/component";

import { JADWAL_MAHASISWA_PATH } from "../../../url";

const jadwalView = loadable(
  () =>
    import(/* webpackChunkName: "jadwal-mahasiswa-view" */ "./JadwalMahasiswaView")
);

export default {
  path: JADWAL_MAHASISWA_PATH,
  component: jadwalView,
  exact: true,
  auth: true,
};
