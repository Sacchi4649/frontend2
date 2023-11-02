import { Button, Col, Form, Input, Row } from "antd";

const columnSize = { lg: 12, md: 12, xs: 24 };

const Filter = ({ form, layout, handleFilter }: any) => {
  return (
    <div className="container-content">
      <Form {...layout} form={form} layout="vertical" onFinish={handleFilter}>
        <Row gutter={[24, 24]}>
          <Col {...columnSize}>
            <Form.Item name="search" label="Search Username/Role">
              <Input placeholder="Type Username/Role" allowClear />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={6} xs={24}>
            <Button
              htmlType="submit"
              type="primary"
              shape="default"
              size="large"
              block
            >
              Cari
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Filter;
