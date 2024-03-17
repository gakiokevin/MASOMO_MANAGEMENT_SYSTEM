import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
const Course= ({all_courses})=>{

const [title,setTitle] = useState('')
const [course_outline,setOutline] = useState('')
const [description,setDescription] = useState('')
const [isEdited,setEdit]= useState(false)
   function updateCourse(course){
      setTitle(course.title)
      setOutline(course.course_outline)
      setDescription(course.description)
      setEdit(true)
   }


   return (
      <Container style={{padding:'10px',display:'flex',flexDirection:'column'}} fluid>
         <Link to='/' style={{alignSelf:'center',border:'2px solid silver',borderRadius:'3px',padding:'4px',fontWeight:'bold',width:'60px',position:'relative',left:'-160px',textAlign:'center'}}>Back</Link>

       {isEdited?(
  <Form style={{width:'50%',margin:'10px auto'}}>
<Form.Group className="mb-3" controlId="formBasicText">
  <Form.Label>Title</Form.Label>
  <Form.Control type="text" placeholder="Name of the course" 
  
   value={title}
   onChange={(e)=>setTitle(e.target.value)}/>
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
  <Form.Label>Course outline</Form.Label>
  <Form.Control as="textarea" rows={3}  placeholder='e.g 1.Introduction ...'
  value={course_outline}
  onChange={(e)=>setOutline(e.target.value)}
  />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicText">
  <Form.Label>Descripton</Form.Label>
  <Form.Control type="text" placeholder="description about the course"
   value={description}
   onChange={(e)=>setDescription(e.target.value)}
   />
 
</Form.Group>
<Button variant="primary" type="submit" style={{position:'relative',left:'80%'}}>
Update
</Button> 
</Form>
       ) : all_courses.map((course)=>(
          <Card style={{ width: '40%',margin:'20px auto'}} key={course.id}>
         <Card.Body>
         <Card.Title>Title</Card.Title>
         <Card.Text>
         {course.title}
          </Card.Text> 
          <Card.Title>Outline</Card.Title>
          <Card.Text>
           {course.course_outline}
          </Card.Text>
          <Card.Title>Description</Card.Title>
          <Card.Text>
           {course.description}
          </Card.Text>

         </Card.Body>
         <Button style={{margin:'3px 1px'}} onClick={()=>updateCourse(course)}>Edit</Button>
        <Button variant="danger">Delete</Button>
          </Card>

         ))} 
    
      </Container>
     
   )
}
export default Course
{/* <Form className='form' onSubmit={setCourse}>
<Form.Group className="mb-3" controlId="formBasicText">
  <Form.Label>Title</Form.Label>
  <Form.Control type="text" placeholder="Name of the course" 
  value={title}
  onChange={(e)=>setTitle(e.target.value)}/>
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
  <Form.Label>Course outline</Form.Label>
  <Form.Control as="textarea" rows={3}  placeholder='e.g 1.Introduction ...'
  value={course_outline}
  onChange={(e)=>setoutline(e.target.value)}/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicText">
  <Form.Label>Descripton</Form.Label>
  <Form.Control type="text" placeholder="description about the course"
  value={description} 
  onChange={(e)=>setDescription(e.target.value)}/>
 
</Form.Group>
<Button variant="primary" type="submit" style={{position:'relative',left:'80%'}}>
Create
</Button> */}