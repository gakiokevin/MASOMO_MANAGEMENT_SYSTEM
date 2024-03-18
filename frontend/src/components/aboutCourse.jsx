import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Course = ({ all_courses, getAllcourses }) => {
  const [title, setTitle] = useState("");
  const [outline, setOutline] = useState("");
  const [description, setDescription] = useState("");
  const [id, setCourseId] = useState("");
  const [isEdited, setEdit] = useState(false);
  const [isdisabled, setdisabled] = useState(false);
  const [message,setMessage] = useState('')
  //function that outputs the values to form with text fields to allow editing of values before editing in the database
  function updateCourse(course) {
    setTitle(course.title);
    setOutline(course.outline);
    setDescription(course.description);
    setEdit(true);
    setCourseId(course._id);
  }

  // submits form to the database to update the relevant fields
  async function updateInDb(e) {
    e.preventDefault();

    //creating a form instance

    const formData = {
      title,
      outline,
      description,
      id,
    };

    try {
      
      const response = await fetch(
        "https://apis-nloi.onrender.com/courses/update-course",
        {
          method: "PUT",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        }
      );
      setdisabled(true);

      const d = await response.json();
      if (response.ok) {
        setMessage('')
        setMessage(d.message)
        getAllcourses();
        setdisabled(false);
        setEdit(false)

        setTimeout(()=>{
          setMessage('')
        },3000)
      } else {
        console.log(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }
  //deletes the selected course from the database
  async function deleteCourse(course) {
    //localhost:3000/courses/delete-course
    const courseId = {
      id:course._id
    }

    try {
      const response = await fetch(
        "https://apis-nloi.onrender.com/courses/delete-course",
        { method: "DELETE", 
        body: JSON.stringify(courseId),
        headers: { "Content-Type": "application/json" },
      }
      );
      const serverdata = await response.json();

      if (response.ok) {
        getAllcourses();
        
        setMessage(serverdata.message)
        setTimeout(()=>{
          setMessage('')
        },3000)

      } else {
        console.log(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container
      style={{ padding: "10px", display: "flex", flexDirection: "column" }}
      fluid
    >
      <Row>
        <Col>
        <Alert style={{backgroundColor:'lightgreen',color:'#fff',textAlign:'center', opacity:message ? '1':'0'}}>{message}</Alert>
        </Col>
      </Row>
      <Link
        to="/"
        style={{
          alignSelf: "center",
          border: "2px solid silver",
          borderRadius: "3px",
          padding: "4px",
          fontWeight: "bold",
          width: "60px",
          position: "relative",
          left: "-160px",
          textAlign: "center",
        }}
      >
        Back
      </Link>

      {isEdited ? (
        <Form
          style={{ width: "50%", margin: "10px auto" }}
          onSubmit={updateInDb}
        >
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name of the course"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Course outline</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="e.g 1.Introduction ..."
              value={outline}
              onChange={(e) => setOutline(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Descripton</Form.Label>
            <Form.Control
              type="text"
              placeholder="description about the course"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{ position: "relative", left: "80%" }}
            disabled={isdisabled}
          >
            Update
          </Button>
        </Form>
      ) : (
        all_courses.map((course) => (
          <Card style={{ width: "40%", margin: "20px auto" }} key={course._id}>
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>{course.title}</Card.Text>
              <Card.Title>Outline</Card.Title>
              <Card.Text>{course.outline}</Card.Text>
              <Card.Title>Description</Card.Title>
              <Card.Text>{course.description}</Card.Text>
            </Card.Body>
            <Button
              style={{ margin: "3px 1px" }}
              onClick={() => updateCourse(course)}
            >
              Edit
            </Button>
            <Button variant="danger" onClick={() => deleteCourse(course)}>
              Delete
            </Button>
          </Card>
        ))
      )}
    </Container>
  );
};
export default Course;
