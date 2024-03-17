import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Main from './components/maincontent';
import './App.css'
function App({allCourses,all_courses,oneCourse}) {
  
  return (
      <Container fluid style={{margin:'2px 0'}}>
      <Row style={{height:'60px',backgroundColor:'lightgreen',padding:'20px',position:'fixed',width:'100%',top:'0',zIndex:'1'}}>
        <Col>
      <Header/>
        </Col>
      </Row>

      <Row style={{marginTop:'60px'}}>
        <Col xl={2}>
       <Sidebar allCourses={allCourses}/>
        </Col>
        <Col>
        <Main all_courses={all_courses} oneCourse={oneCourse} allCourses={allCourses}/>
        </Col>
      </Row>

      </Container>
  )
}

export default App
