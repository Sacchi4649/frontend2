import { HOME_PATH, USERS_PATH } from "./url";


import { HomeOutlined, UserOutlined } from "@ant-design/icons";

export const MenuList = [
  {
    title: "User",
    path: HOME_PATH,
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
