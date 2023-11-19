import { useHistory } from "react-router-dom";
import { LOGIN_URL } from "../../api-url";
import { LOCALSTORAGE_KEY } from "../../constants";
import { fetcher } from "../../hooks/useAxios";
import { USERS_PATH, USERSPROFILE_PATH_SISWA } from "../../url";
import localStorageHooks from "../../utils/localStorageHooks";
import Message from "../../utils/message";

const useLogin = () => {
  const { errorMessage, successMessage } = Message();
  const { setLocalStorage } = localStorageHooks();
  const { push } = useHistory();

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

      successMessage("Login berhasil!");

      if (role === "mahasiswa") {
        push(USERSPROFILE_PATH_SISWA);
      } else if (role === "admin") {
        push(USERS_PATH);
      } else {
        // DOESEN
      }

    } catch (error) {
      errorMessage(error);
    }
  };

  return { handleLogin };
};

export default useLogin;
