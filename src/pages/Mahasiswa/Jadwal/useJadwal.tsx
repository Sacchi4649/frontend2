import { EyeOutlined } from "@ant-design/icons";
import { Button, Form, Tooltip } from "antd";
import { useState } from "react";
import { JADWAL_URL, PRESENSI_MAHASISWA_URL } from "../../../api-url";
import { fetcher } from "../../../hooks/useAxios";
import { getKeyData } from "../../../utils/getKeyData";
import Message from "../../../utils/message";

const useJadwal = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsOpenModal] = useState<boolean>(false);
  const [detailJadwal, setDetailJadwal] = useState<any>();
  const { errorMessage, successMessage } = Message();
  const [jadwal, setJadwal] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingModal, setIsLoadingModal] = useState<boolean>(false);
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
      render: ( record: any) => (
        <>
          <Tooltip title="Lihat">
            <Button
              type="primary"
              className="login-form-button bg-[#19376D]"
              shape="circle"
              icon={<EyeOutlined />}
              onClick={() => handleClick(record)}
            />
          </Tooltip>
        </>
      ),
    },
  ];

  const handleClick = (value: any) => {
    const {
      dosen_pengampu,
      matakuliah,
      _id,
      hari,
      jam_mulai,
      jam_selesai,
      ruang,
      kelas,
      semester,
      tahun,
    } = value;
    setIsOpenModal(true);
    setDetailJadwal(value);
    form.setFieldsValue({
      dosen_pengampu: dosen_pengampu.nama,
      matakuliah: matakuliah.nama,
      _id,
      hari,
      jam_mulai,
      jam_selesai,
      ruang,
      kelas,
      semester,
      tahun,
    });
  };

  const fetchDataJadwal = async () => {
    setIsLoading(true);
    try {
      const res = await fetcher(JADWAL_URL);
      if (res) {
        const modfyData = getKeyData(res.data.jadwal, 1, 10);
        setJadwal(modfyData);
      }
    } catch (error) {
      errorMessage(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePresensi = async () => {
    setIsLoadingModal(true);
    const request = {
      method: "POST",
      data: { idJadwal: detailJadwal._id },
    };
    try {
      const res = await fetcher(PRESENSI_MAHASISWA_URL, request);
      if (!res) throw new Error("Gagal melakukan Presensi!");
      successMessage("Berhasil melakukan presensi!");
      setIsOpenModal(false);
    } catch (error) {
      errorMessage(error);
    } finally {
      setIsLoadingModal(false);
    }
  };

  const handleOk = () => {
    handlePresensi();
  };

  const handleCancel = () => {
    setIsOpenModal(false);
    handleReset();
  };

  const handleReset = () => {
    form.resetFields();
    setDetailJadwal({});
  };

  return {
    isModalOpen,
    handleOk,
    handleCancel,
    detailJadwal,
    fetchDataJadwal,
    jadwal,
    isLoading,
    columns,
    isLoadingModal,
    form,
  };
};

export default useJadwal;
