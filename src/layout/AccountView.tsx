import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Popover } from "antd";
import { useState } from "react";
import LoadingDefault from "../components/LoadingDefault";
import { LOCALSTORAGE_KEY } from "../constants";
import { LOGIN_PATH } from "../url";
import localStorageHooks from "../utils/localStorageHooks";
import Message from "../utils/message";

const AccountView = () => {
  const { getLocalStorage, removeLocalStorage } = localStorageHooks();
  const [isLoading] = useState(false);
  const { errorMessage } = Message();
  const userName: any =
    getLocalStorage(LOCALSTORAGE_KEY.USERNAME) || "Jhone Doe";

  const setLogout = () => {
    return Object.values(LOCALSTORAGE_KEY).map((value) => {
      return removeLocalStorage(value);
    });
  };

  const onLogout = async () => {
    const response = await setLogout();
    if (response) {
      window.location.href = LOGIN_PATH;
    } else {
      errorMessage("Terjadi kesalahan, silahkan coba beberapa saat lagi!");
    }
  };

  const contentPopover = (
    <Button className="bg-[#19376D]" type="primary" icon={<LogoutOutlined />} onClick={onLogout}>
      Logout
    </Button>
  );

  return (
    <div className="account-header">
      <LoadingDefault isLoading={isLoading} />
      <Popover placement="bottomRight" content={contentPopover} trigger="click">
        <a type="text" className="greeting account-name" href="#_">
          <Avatar size="default" icon={<UserOutlined />} />
          {userName || "Arif"}
        </a>
      </Popover>
    </div>
  );
};

export default AccountView;
