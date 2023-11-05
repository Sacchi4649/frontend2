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
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        LOGIN
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div>
);
};

export default Login;
