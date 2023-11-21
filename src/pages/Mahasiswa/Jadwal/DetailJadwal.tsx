import { Form, Input, Modal } from "antd";

const DetailJadwal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  form,
  isLoading,
}: any) => {
  const layout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 12 },
  };
  return (
    <>
      <Modal
        title="Presensi"
        open={isModalOpen}
        onOk={handleOk}
        okText={
          <span>Presensi</span>
        }
        onCancel={handleCancel}
        confirmLoading={isLoading}
      >
        <Form form={form} labelAlign="left" {...layout}>
          <Form.Item label="Hari" name="hari">
            <Input readOnly />
          </Form.Item>
          <Form.Item label="Dosen" name="dosen_pengampu">
            <Input readOnly />
          </Form.Item>
          <Form.Item label="Jam Mulai" name="jam_mulai">
            <Input readOnly />
          </Form.Item>
          <Form.Item label="Jam Selesai" name="jam_selesai">
            <Input readOnly />
          </Form.Item>
          <Form.Item label="Kelas" name="kelas">
            <Input readOnly />
          </Form.Item>
          <Form.Item label="Matakuliah" name="matakuliah">
            <Input readOnly />
          </Form.Item>
          <Form.Item label="Ruang" name="ruang">
            <Input readOnly />
          </Form.Item>
          <Form.Item label="Semester" name="semester">
            <Input readOnly />
          </Form.Item>
          <Form.Item label="Tahun" name="tahun">
            <Input readOnly />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default DetailJadwal;
