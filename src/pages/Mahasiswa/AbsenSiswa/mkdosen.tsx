import { UserOutlined } from '@ant-design/icons';
import { Avatar, Layout } from "antd";
// import { LOCALSTORAGE_KEY } from "../../constants";
// import localStorageHooks from "../../utils/localStorageHooks";
import "./homeStyle.css";

const mkdosen = ({ }: any) => {
  // const { getLocalStorage } = localStorageHooks();
  return (
<div className='h-full'>
  <Layout className="flex max-w-[100%] h-full">
  <span className='text-2xl font-bold pb-2 flex justify-center pt-3'>
        <p> DOSEN MATAKULIAH </p>
      </span>
    <div className='flex flex-col items-center space-y-4 pt-4 h-full'>
    <Avatar shape="square" size={150} icon={<UserOutlined />} />
      <span className='text-2xl font-bold pt-2 flex justify-center'>
        <p> HARIS </p>
      </span>
      <span className='text-2xl font-bold pb-2 flex justify-center'>
        <p> DOSEN </p>
      </span>
    </div>
  </Layout>
</div>
  );
};


export default mkdosen;
// {getLocalStorage(LOCALSTORAGE_KEY.USERNAME)}