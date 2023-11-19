import { USERS_PATH, USERSPROFILE_PATH_ADMIN } from "./url";


import { HomeOutlined, UserOutlined } from "@ant-design/icons";

export const MenuList = [
  {
    title: "User",
    path: USERSPROFILE_PATH_ADMIN,
    icon: UserOutlined,
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
