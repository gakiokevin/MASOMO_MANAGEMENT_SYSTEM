import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './header';
import { Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container'

const Add_course = ({getAllcourses})=>{
const [title,setTitle] = useState('')
const [outline,setoutline] = useState('')
const [description,setDescription] = useState('')
const [message,setMessage] = useState('')

//creates a course with title,description, and outline in the database
 async function createCourse(e){
  //http://localhost:3000/courses/new-course
   e.preventDefault()
  // const form = new FormData()
   
//a new instance of form 
 const formData= {
  title,outline,description
 }
  

   try{
       const response = await fetch('https://apis-nloi.onrender.com/courses/new-course',{method:'POST',headers: {
        'Content-Type': 'application/json'
    },
        body:JSON.stringify(formData)})
       const serverdata = await response.json()
       if(response.ok){
        setMessage(serverdata.message)
        getAllcourses()
       } else {
        console.log(response.statusText)
       }

       setTitle('')
       setoutline('')
       setDescription('')
   }catch(err){
    console.log('error',err)
   }

   


}



   return (
      <Container fluid>
       
       <Row style={{height:'auto',backgroundColor:'lightgreen',padding:'20px',zIndex:'1'}}>
        <Col>
      <Header/>
        </Col>
      </Row>
      <Row>
      <Row><Col>
      <Alert variant='success' style={{textAlign:'center'}}>{message}</Alert></Col></Row>
         <Col>
         <Form className='form' onSubmit={createCourse}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Name of the course" 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Course outline</Form.Label>
        <Form.Control as="textarea" rows={3}  placeholder='e.g 1.Introduction ...'
        value={outline}
        onChange={(e)=>setoutline(e.target.value)}
        required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Descripton</Form.Label>
        <Form.Control type="text" placeholder="description about the course"
        value={description} 
        onChange={(e)=>setDescription(e.target.value)}
        required/>
       
      </Form.Group>
      <Button variant="primary" type="submit" style={{position:'relative',left:'80%'}}>
      Create
      </Button>
    </Form>
          <Link to='/' style={{backgroundColor:"green",position:'relative',left:"26%",top:'-20%',padding:'10px',borderRadius:'4px'}}>Go back</Link>
         </Col>
      </Row>
      
      </Container>
  );
}
export default Add_course