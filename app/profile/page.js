import "./profile.css";

const ProfilePage = () => {
  const user = {
    name: "Toko",
    email: "toko@example.com",
    profilePic: "",
  };

  return (
    <div className="container">
      <div className="profileCard">
        <img src="profilePic" alt="Profile Picture" className="profilePic" />
        <h1 className="styles">{user.name}</h1>
        <p className="email">{user.email}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
