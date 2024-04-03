import "./styles.scss";

const Profile = () => {
  // fetching profile details from session storage
  const userEmail = sessionStorage.getItem("email");
  const userName = sessionStorage.getItem("name");
  return (
    <div className="profile">
      <div className="accountSettings">Account Settings</div>
      <div className="profile-details">
        <div className="profile-pic">
          <img src="profile-pic.png" alt="" />
          <div className="overlay">
            <img src="camera.png" alt="" />
          </div>
        </div>
        <div className="user-detail">
          <p className="user-name">
            {userName ? <>{userName}</> : <>Marry Doe</>}
          </p>
          <p className="user-email">
            {userEmail ? <>{userEmail}</> : <>Marry@Gmail.Com</>}
          </p>
        </div>
      </div>
      <p className="profile-text">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
      <div className="dot-line"></div>
      <div
        className="dot-line"
        style={{ position: "absolute", bottom: "36px", width: "91%" }}
      ></div>
    </div>
  );
};

export default Profile;
