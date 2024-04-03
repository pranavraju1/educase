import "./styles.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import validator from "validator";
const CreateAccount = () => {
  const radioStyle = {
    //styling the radio button
    color: "#6C25FF",
  };
  const navigate = useNavigate();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); //to check if all inputs filled
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    // If form is valid, navigate
    if (form.checkValidity()) {
      setIsFormSubmitted(true);
      // checking if email is valid or not
      if (!validator.isEmail(userEmail)) {
        return alert("Please enter a valid email");
      }
      // storing name and email to display in profile page
      sessionStorage.setItem("name", userName);
      sessionStorage.setItem("email", userEmail);
      navigate("/profile");
    }
  };
  return (
    <div className="createAccount">
      <p className="createAccount-heading">
        Create your <br />
        PopX account
      </p>
      <form onSubmit={handleSubmit}>
        <div className="input-elelments">
          <div className="overlay-label">
            Full Name<span>*</span>
          </div>
          <input
            type="text"
            name="name"
            className="inputElement"
            placeholder="Enter full name"
            required
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="input-elelments">
          <div className="overlay-label">
            Phone number<span>*</span>
          </div>
          <input
            type="text"
            name="phoneNumber"
            className="inputElement"
            placeholder="Enter phone number"
            required
          />
        </div>
        <div className="input-elelments">
          <div className="overlay-label">
            Email address<span>*</span>
          </div>
          <input
            type="text"
            name="email"
            className="inputElement"
            placeholder="Enter email address"
            required
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
        </div>
        <div className="input-elelments">
          <div className="overlay-label">
            Password<span>*</span>
          </div>
          <input
            type="text"
            name="password"
            className="inputElement"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="input-elelments">
          <div className="overlay-label">Company name</div>
          <input
            type="text"
            name="companyName"
            className="inputElement"
            placeholder="Enter company name"
            required
          />
        </div>
        <div>
          <p className="agency">
            Are you an Agency?<span>*</span>
          </p>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              required
            >
              <FormControlLabel
                value="yes"
                control={<Radio style={radioStyle} />}
                label="Yes"
              />
              <FormControlLabel
                value="no"
                control={<Radio style={radioStyle} />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <Button
          variant="contained"
          className="btn"
          type="submit"
          style={{ backgroundColor: "#6C25FF" }}
        >
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default CreateAccount;
