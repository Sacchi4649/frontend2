import {
  JADWAL_MAHASISWA_PATH,
  PROFILE_MAHASISWA_PATH,
  USERS_PATH
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
    title: "Jadwal",
    path: JADWAL_MAHASISWA_PATH,
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
  ];
