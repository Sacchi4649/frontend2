import { HOME_PATH, USERS_PATH } from "./url";


import { HomeOutlined, UserOutlined } from "@ant-design/icons";

export const MenuList = [
  {
    title: "Home",
    path: HOME_PATH,
    icon: HomeOutlined,
    childs: [],
  },
  {
    title: "Users",
    path: USERS_PATH,
    icon: UserOutlined,
    childs: [],
  },
  
];

export default MenuList;
