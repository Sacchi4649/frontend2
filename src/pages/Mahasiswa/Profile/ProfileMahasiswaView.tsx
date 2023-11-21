import { Form, Image, Input, Layout, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { PROFILE_MAHASISWA_URL } from "../../../api-url";
import { LOCALSTORAGE_KEY } from "../../../constants";
import { fetcher } from "../../../hooks/useAxios";
import useLocalStorage from "../../../utils/localStorageHooks";
import useMessage from "../../../utils/message";
import "./homeStyle.css";

const layout = {
  labelCol: { span: 12 },
  wrapperCol: { span: 12 },
};

const ProfileMahasiswa = () => {
  const [formProfile] = Form.useForm();
  const { getLocalStorage } = useLocalStorage();
  const { errorMessage } = useMessage();
  const [mahasiswa, setMahasiswa] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchDataMahasiswa = async () => {
    setIsLoading(true);
    const request = {
      method: "GET",
    };
    try {
      const res = await fetcher(
        PROFILE_MAHASISWA_URL(getLocalStorage(LOCALSTORAGE_KEY.USERNAME)),
        request
      );
      if (res.data) {
        setMahasiswa(res.data.mahasiswa);
        formProfile.setFieldsValue(res.data.mahasiswa);
      }
    } catch (error) {
      errorMessage(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataMahasiswa();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <>
          <div className="text-2xl font-bold pb-5">
            <p>PROFILE MAHASISWA</p>
          </div>
          <main className="flex pt-3">
            <Layout className="content-layout">
              <div className="bg-white p-5 flex items-center">
                <Image width={200} src={mahasiswa?.image} />
                <div className="font-bold pl-10">
                  <Form
                    form={formProfile}
                    {...layout}
                    layout="horizontal"
                    labelAlign="left"
                  >
                    <Form.Item label="NAMA" name="nama">
                      <Input placeholder="nama" readOnly />
                    </Form.Item>
                    <Form.Item label="NIM" name="nim">
                      <Input placeholder="nim" readOnly />
                    </Form.Item>
                    <Form.Item label="GENER" name="gender">
                      <Input placeholder="gender" readOnly />
                    </Form.Item>
                    <Form.Item label="KELAS" name="kelas">
                      <Input placeholder="kelas" readOnly />
                    </Form.Item>
                    <Form.Item label="SEMESTER" name="semester">
                      <Input placeholder="semester" readOnly />
                    </Form.Item>
                    <Form.Item label="STATUS" name="status_sp">
                      <Input placeholder="status sp" readOnly />
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </Layout>
          </main>
        </>
      )}
    </div>
  );
};

export default ProfileMahasiswa;
