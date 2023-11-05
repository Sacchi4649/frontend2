import { UserOutlined } from '@ant-design/icons';
import { Avatar, Layout } from "antd";
import { LOCALSTORAGE_KEY } from "../../constants";
import localStorageHooks from "../../utils/localStorageHooks";
import "./homeStyle.css";

const Home = ({ }: any) => {
  const { getLocalStorage } = localStorageHooks();
  return (
    <div>
      <Layout className="content-layout">

        <div className='bg-white mb-4 p-2 flex space-x-4 items-center'>
          <Avatar size={150} icon={<UserOutlined />} />
          <div className='flex flex-col space-y-4'>
              <span className='text-3xl font-bold pt-2'>{getLocalStorage(LOCALSTORAGE_KEY.USERNAME)}</span>
              <span className='text-3xl font-bold pb-2'>{getLocalStorage(LOCALSTORAGE_KEY.ROLE)}</span>

          </div>
        </div>

        {/* <div className="container-content">
          <Space direction="vertical" size={0}>
          <Space wrap size={0}>
            <Avatar size={150} icon={<UserOutlined />} />
          </Space>
          </Space>
        </div>
          <span className="container-Name1 container-title">{getLocalStorage(LOCALSTORAGE_KEY.USERNAME)}</span>
              <br />
          <span className="container-Name2 container-title">{getLocalStorage(LOCALSTORAGE_KEY.ROLE)}</span> */}

      </Layout>
    </div>
  );
};


export default Home;
// {getLocalStorage(LOCALSTORAGE_KEY.USERNAME)}