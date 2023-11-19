import { Result } from "antd";
import { Link } from "react-router-dom";
import { USERSPROFILE_PATH_ADMIN } from "../../url";

const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Link to={USERSPROFILE_PATH_ADMIN}>Back Home</Link>}
    />
  );
};

export default NotFound;
