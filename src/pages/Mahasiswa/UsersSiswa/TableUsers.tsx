import { Table } from "antd";

const TableLocations = ({
  columns,
  users,
  isLoadingTable,
  pagination,
  handleChange,
}: any) => {
  return (
    <div className="container-content">
      <Table
        dataSource={users}
        columns={columns}
        loading={isLoadingTable}
        pagination={pagination}
        onChange={handleChange}
        scroll={{ x: "auto" }}
      />
    </div>
  );
};

export default TableLocations;