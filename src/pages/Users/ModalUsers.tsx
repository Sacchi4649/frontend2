import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Skeleton,
  Typography,
} from "antd";
import { DOSEN_URL, MAHASISWA_URL } from "../../api-url";
import Dropdown from "../../components/Dropdown";
import { ROLE } from "../../constants";

const { Title } = Typography;
const { Option } = Select;

const columnSize = { lg: 12, md: 12, xs: 24 };
const columnSizeButton = { lg: 6, md: 6, xs: 24 };
const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const ModalLocations = ({
  form,
  isEdited,
  isLoading,
  visible,
  setVisible,
  handleSave,
  handleCancel,
  role,
  setRole,
}: any) => {
  const handleEndpointByRole = () => {
    switch (role) {
      case ROLE.MAHASISWA:
        return MAHASISWA_URL;
      case ROLE.DOSEN:
        return DOSEN_URL;
      default:
        return "";
    }
  };
  return (
    <div className="container-content">
      <Row>
        <Col lg={4} md={6} xs={24}>
          <Button className="bg-[#19376D]"
            type="primary"
            size="large"
            block
            onClick={() => setVisible(true)}
          >
            Tambah User
          </Button>
        </Col>
      </Row>
      <Modal
        title={
          <Title level={3} style={{ textAlign: "center" }}>
            Form {isEdited ? "Edit" : "Tambah"} User
          </Title>
        }
        centered
        open={visible}
        width="80rem"
        footer={null}
        onCancel={handleCancel}
      >
        {isLoading ? (
          <Skeleton />
        ) : (
          <Form form={form} {...layout} onFinish={handleSave}>
            <Row gutter={24}>
              <Col {...columnSize}>
                <Form.Item
                  label="Role"
                  name="role"
                  rules={[
                    {
                      required: true,
                      message: "Silahkan pilih Role",
                    },
                  ]}
                >
                  <Select
                    placeholder="Pilih Role"
                    onChange={(value) => {
                      setRole(value);
                      form.setFieldsValue({
                        username: null,
                      });
                    }}
                    disabled={isEdited}
                  >
                    {Object.values(ROLE).map((value: any) => (
                      <Option key={value} value={value}>
                        {value}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col {...columnSize}>
                {role === ROLE.ADMIN ? (
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Silahkan pilih Username",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Masukkan Username"
                      disabled={isEdited ? [!ROLE.ADMIN].includes(role) : !role}
                    />
                  </Form.Item>
                ) : (
                  <Dropdown
                    disabled={!role || isEdited}
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Silahkan pilih Username",
                      },
                    ]}
                    placeholder="Pilih Username"
                    optionName={{
                      label: "nama",
                      value: role === ROLE.MAHASISWA ? "nim" : "nip",
                      isLabelAndValue: true,
                    }}
                    endpoint={handleEndpointByRole()}
                    keyOfData={role}
                    isResetList
                  />
                )}
              </Col>
              {!isEdited ? (
                <>
                  <Col {...columnSize}>
                    <Form.Item
                      name="password"
                      label="Password"
                      rules={[
                        {
                          required: true,
                          message: "Masukan password!",
                        },
                      ]}
                      hasFeedback
                    >
                      <Input.Password />
                    </Form.Item>
                  </Col>
                  <Col {...columnSize}>
                    <Form.Item
                      name="confirm"
                      label="Confirm Password"
                      dependencies={["password"]}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Maukan confirm password!",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              new Error(
                                "Password yang ada masukan tidak sesuai!"
                              )
                            );
                          },
                        }),
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </Col>
                </>
              ) : (
                <Col {...columnSize}>
                  <Form.Item label="Active" name="isActive" initialValue={true}>
                    <Select>
                      <Option key="1" value={true}>
                        Active
                      </Option>
                      <Option key="0" value={false}>
                        Inactive
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
              )}
            </Row>
            <Row
              gutter={[24, 24]}
              style={{
                marginTop: "2rem",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Col {...columnSizeButton} className="u-px1">
                <Button className="bg-[#19376D]" htmlType="submit" type="primary" size="large" block>
                  SIMPAN
                </Button>
              </Col>
              <Col {...columnSizeButton} className="u-px1 ">
                <Button
                  htmlType="button"
                  size="large"
                  block
                  onClick={handleCancel}
                >
                  BATAL
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default ModalLocations;
