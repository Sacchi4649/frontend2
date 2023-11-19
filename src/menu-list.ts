import {
  JADWAL_MAHASISWA_PATH,
  PROFILE_MAHASISWA_PATH,
  USERS_PATH,
} from "./url";

import {
  HomeOutlined,
  UserOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";

export const MenuList = [
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
  {
    title: "Home",
    path: USERS_PATH,
    icon: HomeOutlined,
    childs: [],
  },
];

export default MenuList;
