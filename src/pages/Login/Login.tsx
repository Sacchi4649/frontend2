import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import './loginStyle.css';
import useLogin from "./useLogin";

const Login = () => {
  const { handleLogin } = useLogin();
  return (
    <div className="kontainer">
        <div className="kotak-biru">
            <h3>Selamat Datang di Portal Si Hadir!</h3>
            <p>"Mulailah Langkah mu Bersama Si Hadir<br></br>
                Karena Setiap Absensi Adalah Langkah Menuju Keberhasilan.“</p>
        </div>

        <div className="kotak-putih">
        <div className="relative bottom-8" style={{ transform: 'scale(1.2)' }}>
        <div className="relative top-20 left-[35%] z-10">
          <img src="logo2.png" alt="Deskripsi Gambar" />
        </div>
        <div className="kotak-login relative ">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={handleLogin}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button bg-[#19376D]">
                        LOGIN
                    </Button>
                </Form.Item>
            </Form>
        </div>
        </div>
        </div>
    </div>
);
};

export default Login;
