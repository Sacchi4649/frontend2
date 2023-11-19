import { useEffect } from "react";
import Filter from "./Filter";
import ModalUsers from "./ModalUsers";
import TableUsers from "./TableUsers";
import useUsers from "./useProfile";
import UsersHome from "./usersHome";

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
      <div className="text-2xl font-bold pb-5"><p>DASHBOARD ADMIN</p></div>
      <UsersHome/>
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
        <Filter
        layout={layoutFilter}
        form={formFilter}
        handleFilter={handleFilter}
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
