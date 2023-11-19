import { Layout, Radio, Table } from "antd";
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
  },
  {
    dataIndex: 'status',
  },
];

const dataSource = [
  {
    name: 'MATAKULIAH ',
    status: getLocalStorage(LOCALSTORAGE_KEY.USERNAME),
  },
  {
    name: 'JAM MASUK ',
    status: '07:00',
  },
  {
    name: 'JAM SELESAI ',
    status: '12:00',
  },
  {
    name: 'KETERANGAN',
    status: (
      <Radio.Group defaultValue="a" buttonStyle="solid">
        <Radio.Button value="a">HADIR</Radio.Button>
        <Radio.Button value="b">TELAT</Radio.Button>
        <Radio.Button value="c">SAKIT</Radio.Button>
        <Radio.Button value="d">IZIN</Radio.Button>
        <Radio.Button value="E">ALFA</Radio.Button>
      </Radio.Group>
    ),
  },
]

function HomeStatusSiswa() {
  return (
      <Layout className="content-layout">
        <div className='bg-white p-5 flex items-end'>
          <div className='font-bold pl-10 '>
            <Table className="text-6x1 font-bold pl-6" columns={columns} dataSource={dataSource} />
          </div>
        </div>
      </Layout>
  );
}

export default HomeStatusSiswa;

