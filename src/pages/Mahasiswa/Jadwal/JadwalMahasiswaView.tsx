import { Table, Typography } from "antd/es";
import { useEffect } from "react";
import DetailJadwal from "./DetailJadwal";
import useJadwal from "./useJadwal";

const JadwalMahasiswaView = () => {
  const {
    columns,
    jadwal,
    fetchDataJadwal,
    isLoading,
    detailJadwal,
    handleCancel,
    handleOk,
    isModalOpen,
    isLoadingModal,
    form,
  } = useJadwal();

  useEffect(() => {
    fetchDataJadwal();
  }, []);

  return (
    <div>
      <div className="main-content">
        <Typography.Title level={3}>JADWAL</Typography.Title>
      </div>
      <div className="main-content u-mt2">
        Selamat Datang di Portal Si Hadir. Portal Absensi adalah sistem yang
        memungkinkan pengguna untuk mengakses informasi absensi dengan lebih
        cepat melalui Internet. Sistem ini dirancang untuk memberikan kemudahan
        bagi setiap pengguna dalam mencatat kehadiran dan memantau proses
        absensi untuk website Si Hadir. Selamat menggunakan fasilitas ini.
      </div>
      <div className="main-content u-mt2">
        <Table
          columns={columns}
          dataSource={jadwal}
          loading={isLoading}
          scroll={{ x: true }}
        />
      </div>
      <DetailJadwal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        isLoading={isLoadingModal}
        form={form}
        data={detailJadwal}
      />
    </div>
  );
};

export default JadwalMahasiswaView;
