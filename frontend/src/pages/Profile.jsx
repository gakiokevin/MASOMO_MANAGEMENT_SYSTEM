import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useAuthContext();

  return (
    <div className="user-info">
      <Link to="/">
        <ion-icon name="arrow-back-outline"></ion-icon>
      </Link>
       <h2>Your profile</h2>
      
      <p>{user.email}</p>
    </div>
  );
};
export default Profile;
