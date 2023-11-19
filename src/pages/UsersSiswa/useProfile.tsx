import {
  EditOutlined,
} from "@ant-design/icons";
import { Button, Form, Tooltip } from "antd";
import { useState } from "react";
import { USER_URL } from "../../api-url";
import { ROLE } from "../../constants";
import { fetcher } from "../../hooks/useAxios";
import { getKeyData } from "../../utils/getKeyData";
import Message from "../../utils/message";

const useUsers = () => {
  const [formFilter] = Form.useForm();
  const [formModal] = Form.useForm();

  const [users, setUsers] = useState<any>([]);
  const [userById, setUserById] = useState<any>([]);
  const [isLoadingTable, setIsLoadingTable] = useState<any>(false);
  const [isLoadingModal, setIsLoadingModal] = useState<any>(false);
  const [isVisibleModal, setIsVisibleModal] = useState<any>(false);
  const [isEditModal, setIsEditModal] = useState<any>(false);
  const [role, setRole] = useState<string>("");

  const { errorMessage, successMessage } = Message();

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const [params, setParams] = useState({
    limit: 10,
    offset: 0,
  });
  const [layoutFilter] = useState({
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  });

  const [columns] = useState([
    {
      title: "No",
      align: "center",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "MATAKULIAH",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "JAM MASUK",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "JAM SELESAI",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "KETERANGAN",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "ABESNSI",
      align: "center",
      render: (_: any, reqord: any) => (
        <Tooltip className="bg-[#19376D]" title="Edit" color="grey" placement="right">
          <Button
            type="primary"
            shape="circle"
            icon={<EditOutlined />}
            onClick={() => handleEdit(reqord)}
          />
        </Tooltip>
      ),
    },
  ]);

  const fetchUsers = async (fetchParams?: any) => {
    setIsLoadingTable(true);

    const newParams = fetchParams ? { ...params, ...fetchParams } : params;
    setParams(newParams);

    const request = {
      method: "GET",
      params: newParams,
    };

    try {
      const res = await fetcher(USER_URL, request);
      if (res) {
        const { data } = res;
        const { page = 1, per_page = 10, total_data = 10 } = data;
        const modifyData = getKeyData(data?.user, page, per_page);
        setUsers(modifyData);
        setParams({ ...newParams });

        if (total_data && page) {
          setPagination({
            current: page,
            pageSize: per_page,
            total: total_data,
          });
        } else {
          setPagination({ current: 1, pageSize: per_page, total: 10 });
        }
      }
    } catch (error) {
      console.log(error);
      errorMessage(error);
    } finally {
      setIsLoadingTable(false);
    }
  };

  const handleFilter = (values: any) => {
    fetchUsers({ ...values, offset: 0 });
  };

  const handleTableChange = (page: any) => {
    const { current, pageSize } = page;
    // const { order, columnKey } = record;
    const newParams = {
      ...params,
      offset: (current - 1) * pageSize,
      limit: pageSize,
      // sort: order && columnKey,
      // order: orderTable(order),
    };

    setPagination(page);
    fetchUsers(newParams);
  };

  const handleSave = async (valuesForm: any) => {
    setIsLoadingModal(true); //memberikan loading
    const { role, username, password, isActive } = valuesForm;

    let request: any = {
      method: "POST",
      data: { role, username, password, isActive },
    };
    if (isEditModal) {
      request = {
        method: "PUT",
        data: isEditModal
          ? role === ROLE.ADMIN
            ? { isActive, username }
            : { isActive }
          : { role, username, password },
      };
    }
    try {
      const res = await fetcher(
        isEditModal ? `${USER_URL}/${userById?._id}` : USER_URL,
        request
      );
      if (!res) throw new Error("Data user gagal di simpan!");
      successMessage("Data user berhasil di simpan!");
      resetForm();
      fetchUsers({ search: "", offset: 0 });
    } catch (error) {
      errorMessage(error);
    } finally {
      setIsLoadingModal(false);
    }
  };

  const handleEdit = (user: any) => {
    setUserById(user);
    setIsEditModal(true);
    setIsVisibleModal(true);
    formModal.setFieldsValue({
      username: user?.username,
      role: user?.role,
      isActive: user?.isActive,
    });
    setRole(user?.role);
  };

  const handleCancel = () => {
    resetForm();
  };

  const resetForm = () => {
    setIsVisibleModal(false);
    formModal.resetFields();
    setIsEditModal(false);
    setUserById({});
  };

  return {
    formFilter,
    formModal,
    users,
    isLoadingModal,
    isLoadingTable,
    columns,
    layoutFilter,
    fetchUsers,
    pagination,
    handleSave,
    handleCancel,
    userById,
    isEditModal,
    isVisibleModal,
    setIsVisibleModal,
    handleTableChange,
    role,
    setRole,
    handleFilter,
  };
};

export default useUsers;
