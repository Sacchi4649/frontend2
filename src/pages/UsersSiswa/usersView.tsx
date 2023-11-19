import { useEffect } from "react";
import TableUsers from "./TableUsers";
import useUsers from "./useProfile";
import UsersHome from "./usersHome";

const UsersView = () => {
  const {
    columns,
    isLoadingTable,
    users,
    pagination,
    handleTableChange,
    fetchUsers,
  } = useUsers();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div className="text-2xl font-bold pb-5"><p>DASHBOARD SISWA</p></div>
      <UsersHome/>
      <div className="text-2xl font-bold pb-5 pt-5"><p>JADWAL SISWA</p></div>
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
