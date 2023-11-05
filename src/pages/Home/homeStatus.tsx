import { Image, Layout, Table } from "antd";
import { LOCALSTORAGE_KEY } from "../../constants";
import localStorageHooks from "../../utils/localStorageHooks";
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
    key: '3',
    name: 'KELAS',
    status: 0,
  },
  {
    key: '3',
    name: 'POSISI',
    status: getLocalStorage(LOCALSTORAGE_KEY.ROLE),
  },
  {
    key: '3',
    name: 'STATUS',
    status: 0,
  },
  
];

function HomeStatus() {
  return (
    <main className="flex">
      <Layout className="content-layout">
        <div className='bg-white mb-4 p-5 flex space-x-4 items-center w-1/2'>
          <Image
            width={300}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />

          <div className='font-bold pl-10'>
            <Table className="text-3xl font-bold pl-5" columns={columns} dataSource={dataSource} />
          </div>
        </div>
      </Layout>
      
      {/* <Layout className="content-layout">
        <div className='bg-white mb-4 p-5 flex space-x-4 items-center w-1/3'>
          <div className='font-bold pl-10'>
            <Table className="text-3xl font-bold pl-5" columns={columns} dataSource={dataSource} />
          </div>
        </div>
      </Layout> */}
    </main>
  );
}

export default HomeStatus;

