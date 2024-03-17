import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './header';
import { Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useState } from 'react';

const Add_course = ()=>{
const [title,setTitle] = useState('')
const [course_outline,setoutline] = useState('')
const [description,setDescription] = useState('')

function setCourse(e){
   e.preventDefault()
   console.log(title)
   console.log(course_outline)
   console.log(description)

}



   return (
      <>
       <Row style={{height:'60px',backgroundColor:'lightgreen',padding:'20px',position:'fixed',width:'100%',top:'0',zIndex:'1'}}>
        <Col>
      <Header/>
        </Col>
      </Row>
      <Row>
         <Col>
         <Form className='form' onSubmit={setCourse}>
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
      </Button>
    </Form>
          <Link to='/' style={{backgroundColor:"green",position:'relative',left:"26%",top:'-20%',padding:'10px',borderRadius:'4px'}}>Go back</Link>
         </Col>
      </Row>
      
      </>
  );
}
export default Add_course