import { useNavigate } from "react-router-dom";
import "./styles.scss";
import Button from "@mui/material/Button";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <p className="home-heading">Welcome to PopX</p>
      <p className="home-text">
        Lorem ipsum dolor sit amet,
        <br /> consectetur adipiscing elit,
      </p>
      <Button
        variant="contained"
        className="btn"
        onClick={() => navigate("/create-account")}
        style={{ backgroundColor: "#6C25FF" }}
      >
        Create Account
      </Button>
      <Button
        variant="contained"
        className="btn"
        onClick={() => navigate("/signin")}
        style={{
          backgroundColor: "#6C25FF4B",
          color: "black",
        }}
      >
        Already Registered? Login
      </Button>
    </div>
  );
};

export default Home;
