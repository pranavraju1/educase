import { Button } from "@mui/material";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  return (
    <div className="signin">
      <p className="signin-heading">
        Signin to your
        <br />
        PopX account
      </p>
      <p className="signin-text">
        Lorem ipsum dolor sit amet,
        <br /> consectetur adipiscing elit,
      </p>
      <form>
        <div className="input-elelments">
          <div className="overlay-label">Email address</div>
          <input
            type="text"
            name="name"
            className="inputElement"
            placeholder="Enter email address"
          />
        </div>
        <div className="input-elelments">
          <div className="overlay-label">Password</div>
          <input
            type="text"
            name="name"
            className="inputElement"
            placeholder="Enter password"
          />
        </div>
        <Button
          variant="contained"
          className="btn"
          style={{ backgroundColor: "#CBCBCB" }}
          onClick={() => navigate("/profile")}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Signin;
