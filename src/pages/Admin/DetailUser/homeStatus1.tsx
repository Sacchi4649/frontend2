import { Image, Layout, Table } from "antd";
import { LOCALSTORAGE_KEY } from "../../../constants";
import localStorageHooks from "../../../utils/localStorageHooks";
import "./homeStyle.css";

interface dataSource {
  key: string;
  name: string;
  status: string;
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
    name: 'NIM',
    status: 0,
  },
  {
    key: '3',
    name: 'SEMESTER',
    status: 0,
  },
  {
    key: '4',
    name: 'KELAS',
    status: 0,
  },
  {
    key: '5',
    name: 'POSISI',
    status: getLocalStorage(LOCALSTORAGE_KEY.ROLE),
  },
  {
    key: '6',
    name: 'STATUS',
    status: 0,
  },
  
];

function HomeStatus() {
  return (
      <Layout className="content-layout">
        <div className='bg-white p-5 flex items-center'>
          <Image
            width={300}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />

          <div className='font-bold pl-10'>
            <Table className="text-6x1 font-bold pl-6" columns={columns} dataSource={dataSource} />
          </div>
        </div>
      </Layout>
  );
}

export default HomeStatus;

