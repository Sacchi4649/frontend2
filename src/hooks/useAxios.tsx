import { useState, useEffect } from "react";
import axios from "axios";
import { LOCALSTORAGE_KEY } from "../constants";
import localStorageHooks from "../utils/localStorageHooks";
import { API_BASE_URL } from "../api-url";
import { LOGIN_PATH } from "../url";
import Message from "../utils/message";

axios.defaults.baseURL = API_BASE_URL;

// fn axios intercept request header
const axiosInterceptor = () => {
  const { getLocalStorage } = localStorageHooks();
  const { errorMessage } = Message();

  axios.interceptors.request.use(
    (config) => {
      if (!config.headers.Authorization) {
        const plainToken = getLocalStorage(LOCALSTORAGE_KEY.TOKEN);
        const token = plainToken;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        errorMessage(error);
        window.location.href = LOGIN_PATH;
      }
      return error;
    }
  );
};

// Fetcher Hooks
const useAxios = (axiosParams: any) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState<any>();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axiosInterceptor();
        const result = await axios.request(axiosParams);
        setResponse(result.data);
      } catch (err) {
        setError(err);
      } finally {
        setloading(false);
      }
    };
    fetchData();
  }, []);

  return { response, error, loading };
};

// Fetcher Utils
export const fetcher = async (url: string, config?: any) => {
  const header: any = {
    ...config,
    url,
    headers: {
      "Content-Type": "application/json",
      ...config?.headers,
    },
  };

  try {
    axiosInterceptor();
    const res = await axios.request(header);
    return res;
  } catch (err: any) {
    throw err?.response;
  }
};

export default useAxios;
