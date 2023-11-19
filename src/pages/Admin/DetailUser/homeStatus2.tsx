import { Layout, Table } from "antd";
// import { LOCALSTORAGE_KEY } from "../../constants";
// import localStorageHooks from "../../utils/localStorageHooks";
import "./homeStyle.css";

interface dataSource {
  key: string;
  name: string;
  status: string;
}

// const { getLocalStorage } = localStorageHooks();

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
    name: 'ABSEN',
    status: 0,
  },
  {
    key: '2',
    name: 'IZIN',
    status: 0,
  },
  {
    key: '3',
    name: 'SAKIT',
    status: 0,
  },
  {
    key: '4',
    name: 'ALFA',
    status: 0,
  },
  {
    key: '5',
    name: 'TERLAMBAT',
    status: 0,
  },
  {
    key: '6',
    name: 'STATUS',
    status: 0,
  },
  
];

function HomeStatus2() {
  return (
      <Layout className="content-layout">
        <div className='bg-white mb-4 p-5 flex items-center'>
            <Table className="text-3xl font-bold pl-10" columns={columns} dataSource={dataSource} />
        </div>
      </Layout>
  );
}

export default HomeStatus2;

