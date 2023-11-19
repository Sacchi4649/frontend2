import { UserOutlined } from '@ant-design/icons';
import { Avatar, Image, Layout, Table } from "antd";
import { LOCALSTORAGE_KEY } from "../../constants";
import localStorageHooks from "../../utils/localStorageHooks";
import "./homeStyle.css";

interface dataSource {
  key: string;
  name: string;
  status: string | number;
}

const { getLocalStorage } = localStorageHooks();

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
  },
  {
    dataIndex: 'status',
    key: 'status',
  },
];

const dataSource = [
  {
    key: '1',
    name: 'NAMA',
    status: getLocalStorage(LOCALSTORAGE_KEY.USERNAME),
  },
  {
    key: '2',
    name: 'NIP',
    status: 0,
  },
  {
    key: '5',
    name: 'POSISI',
    status: getLocalStorage(LOCALSTORAGE_KEY.ROLE),
  },
];

function HomeStatusSiswa() {
  // const imageSource = "https://upload.wikimedia.org/wikipedia/en/a/aa/Arknights_icon.png"; CONTOH
  const imageSource = 0;
  const avatarSize = 300;

  return (
    <Layout className="content-layout">
      <div className='bg-white p-5 flex items-center'>
        {imageSource ? (
          <Image
            width={300}
            src={imageSource}
          />
        ) : (
          <Avatar shape="square" size={avatarSize} icon={<UserOutlined />} />
        )}

        <div className='font-bold pl-10'>
          <Table className="text-6x1 font-bold pl-6" columns={columns} dataSource={dataSource} />
        </div>
      </div>
    </Layout>
  );
}

export default HomeStatusSiswa;
