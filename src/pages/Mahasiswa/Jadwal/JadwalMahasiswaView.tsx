import { Button, Table, Tooltip, Typography } from "antd/es";
import React, { useEffect, useState } from "react";
import { fetcher } from "../../../hooks/useAxios";
import { JADWAL_URL } from "../../../api-url";
import Message from "../../../utils/message";
import { getKeyData } from "../../../utils/getKeyData";
import { EditTwoTone } from "@ant-design/icons";

const JadwalMahasiswaView = () => {
  const { errorMessage } = Message();
  const [jadwal, setJadwal] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const columns: any = [
    {
      title: "No",
      align: "center",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Matakuliah",
      align: "center",
      dataIndex: ["matakuliah", "nama"],
      key: "matakuliah",
    },
    {
      title: "Hari",
      align: "center",
      dataIndex: "hari",
      key: "hari",
    },
    {
      title: "Ruang",
      align: "center",
      dataIndex: "ruang",
      key: "ruang",
    },
    {
      title: "Kelas",
      align: "center",
      dataIndex: "kelas",
      key: "kelas",
    },
    {
      title: "Dosen",
      align: "center",
      dataIndex: "dosen_pengampu",
      key: "dosen_pengampu",
      render: (dosen: any) => `${dosen?.nip} - ${dosen?.nama}`,
    },
    {
      title: "Tahun",
      align: "center",
      dataIndex: "tahun",
      key: "tahun",
    },
    {
      title: "Semester",
      align: "center",
      dataIndex: "semester",
      key: "semester",
    },
    {
      title: "Slot",
      align: "center",
      dataIndex: "slot",
      key: "slot",
    },
    {
      title: "Jam Mulai",
      align: "center",
      dataIndex: "jam_mulai",
      key: "jam_mulai",
    },
    {
      title: "Jam Selesai",
      align: "center",
      dataIndex: "jam_selesai",
      key: "jam_selesai",
    },
    {
      title: "Action",
      align: "center",
      render: (_, record: any) => (
        <>
          <Tooltip title="edit">
            <Button
              type="primary"
              shape="circle"
              icon={<EditTwoTone />}
              onClick={() => handleClick(record)}
            />
          </Tooltip>
        </>
      ),
    },
  ];

  const fetchDataJadwal = async () => {
    setIsLoading(true);
    try {
      const res = await fetcher(JADWAL_URL);
      if (res) {
        console.log(res);
        const modfyData = getKeyData(res.data.jadwal, 1, 10);
        setJadwal(modfyData);
      }
    } catch (error) {
      errorMessage(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = (data: string) => {
    alert(JSON.stringify(data));
  };

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
      <div className="main content u-mt2">
        <Table columns={columns} dataSource={jadwal} />
      </div>
    </div>
  );
};

export default JadwalMahasiswaView;
