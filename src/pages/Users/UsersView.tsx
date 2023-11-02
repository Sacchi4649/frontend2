import { useEffect } from "react";
import useUsers from "./useUsers";
import TableUsers from "./TableUsers";
import ModalUsers from "./ModalUsers";
import Filter from "./Filter";

const UsersView = () => {
  const {
    columns,
    formFilter,
    formModal,
    isLoadingModal,
    isLoadingTable,
    layoutFilter,
    users,
    pagination,
    handleTableChange,
    isVisibleModal,
    setIsVisibleModal,
    handleSave,
    handleCancel,
    userById,
    fetchUsers,
    isEditModal,
    role,
    setRole,
    handleFilter,
  } = useUsers();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Filter
        layout={layoutFilter}
        form={formFilter}
        handleFilter={handleFilter}
      />
      <ModalUsers
        form={formModal}
        isEdited={isEditModal}
        isLoading={isLoadingModal}
        visible={isVisibleModal}
        setVisible={setIsVisibleModal}
        handleSave={handleSave}
        handleCancel={handleCancel}
        locationById={userById}
        role={role}
        setRole={setRole}
      />
      <TableUsers
        columns={columns}
        users={users}
        isLoadingTable={isLoadingTable}
        pagination={pagination}
        handleChange={handleTableChange}
      />
    </div>
  );
};

export default UsersView;
