import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Layout, Upload, message } from "antd";
// import { LOCALSTORAGE_KEY } from "../../constants";
// import localStorageHooks from "../../utils/localStorageHooks";
import "./homeStyle.css";


// const { getLocalStorage } = localStorageHooks();
const { Dragger } = Upload;


const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};




function HomeStatus2() {
  return (
      <Layout className="content-layout">
        <span className='text-1xl font-bold pt-2 flex justify-center'>
        <p> SURAT KETERANGAN </p>
      </span>
        <div className='bg-white mb-4 p-5 flex justify-center'>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">

                 <InboxOutlined />

              </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                   Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                   banned files.</p>
            </Dragger>
          </div>
      </Layout>
  );
}

export default HomeStatus2;

