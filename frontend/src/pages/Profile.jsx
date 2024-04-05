import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
import {Card} from 'react-bootstrap'


const Profile = () => {
  const { user } = useAuthContext();

  return (
    <div className="user-info">
      
      <Card className="rounded-lg shadow-sm">
      <Card.Header>
        <Link to="/dashboard" className="btn btn-link"> <ion-icon name="arrow-back-outline"></ion-icon></Link>
      </Card.Header>
      <Card.Body>
        <Card.Title>My Credentials</Card.Title>
        <Card.Text>
          <input type="email" className="form-control" value={user.email} disabled />
        </Card.Text>
      </Card.Body>

      </Card>
    </div>
  );
};
export default Profile;
