import { useEffect } from "react";
import { Layout, Avatar, List, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./homeStyle.css";
import { fetcher } from "../../../hooks/useAxios";
import { USER_URL } from "../../../api-url";
import useLocalStorage from "../../../utils/localStorageHooks";
import { LOCALSTORAGE_KEY } from "../../../constants";

const ProfileMahasiswa = () => {
  const { getLocalStorage } = useLocalStorage();
  const columns = [
    {
      dataIndex: "name",
      key: "name",
    },
    {
      dataIndex: "status",
      key: "status",
    },
  ];
  const fetchDataMahasiswa = async () => {
    try {
      const res = await fetcher(USER_URL, {
        params: getLocalStorage(LOCALSTORAGE_KEY.USERNAME),
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDataMahasiswa();
  }, []);
  return (
    <div>
      <div className="text-2xl font-bold pb-5">
        <p>PROFILE MAHASISWA</p>
      </div>

      <main className="flex pt-3">
        <Layout className="content-layout">
          <div className="bg-white p-5 flex items-center">
            <Avatar shape="square" size={100} icon={<UserOutlined />} />

            <div className="font-bold pl-10">
              <List
                bordered
                dataSource={[]}
                renderItem={(item: any) => (
                  <List.Item>
                    <Typography.Text mark>[ITEM]</Typography.Text> {item}
                  </List.Item>
                )}
              />
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default ProfileMahasiswa;
