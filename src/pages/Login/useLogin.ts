import { useHistory } from "react-router-dom";
import { LOGIN_URL } from "../../api-url";
import { LOCALSTORAGE_KEY } from "../../constants";
import { fetcher } from "../../hooks/useAxios";
import { useAppContext } from "../../context/AppContext";
import { USERS_PATH, PROFILE_MAHASISWA_PATH, WELCOME_PATH } from "../../url";
import localStorageHooks from "../../utils/localStorageHooks";
import Message from "../../utils/message";
import { useState } from "react";

const useLogin = () => {
  const { errorMessage, successMessage } = Message();
  const { setLocalStorage } = localStorageHooks();
  const { push } = useHistory();
  const { globalState, setState }: any = useAppContext();
  const handleLogin = async (values: any) => {
    try {
      const request = {
        method: "post",
        data: values,
      };
      const res = await fetcher(LOGIN_URL, request);

      if (!res) throw new Error("Gagal melakukan Login!");

      const { username, role, token } = res.data;
      setLocalStorage(LOCALSTORAGE_KEY.TOKEN, token);
      setLocalStorage(LOCALSTORAGE_KEY.USERNAME, username);
      setLocalStorage(LOCALSTORAGE_KEY.ROLE, role);
      setState({ user: res.data });
      successMessage("Login berhasil!");

      push(WELCOME_PATH);
    } catch (error) {
      errorMessage(error);
    }
  };

  return { handleLogin };
};

export default useLogin;
