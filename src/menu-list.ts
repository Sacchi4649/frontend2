import {
  ABSEN_PATH_SISWA,
  JADWAL_MAHASISWA_PATH,
  PROFILE_MAHASISWA_PATH,
  USERSPROFILE_PATH_ADMIN,
  USERS_PATH,
} from "./url";

import {
  HomeOutlined,
  ScheduleOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const MahasiswaMenuList = [
  {
    title: "Profile",
    path: PROFILE_MAHASISWA_PATH,
    icon: UserOutlined,
    childs: [],
  },
  {
    title: "Presensi",
    path: JADWAL_MAHASISWA_PATH,
    icon: ScheduleOutlined,
    childs: [],
  },
  {
    title: "Koreksi Presensi",
    path: ABSEN_PATH_SISWA,
    icon: ScheduleOutlined,
    childs: [],
  },
  
];

export const AdminMenuList = [
  {
    title: "Users",
    path: USERS_PATH,
    icon: HomeOutlined,
    childs: [],
  },
  {
    title: "Profil",
    path: USERSPROFILE_PATH_ADMIN,
    icon: UserOutlined,
    childs: [],
  },
];
