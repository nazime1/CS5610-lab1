import Link from "next/link";
import Image from "next/image";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
      <Row xs={1} md={5} className="g-4">
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
	<Card>
          <Link href="/Courses/1234"
	  className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/react-logo.png" width="100%" height={160}/>
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1234 React JS </CardTitle>
                <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
		Full Stack software developer</CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
	</Card>
      </Col>

        <Col className="wd-dashboard-course">
	<Card>
	<Link href="/Courses/1200" 
	className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/data-structures.png" width="100%" height={160}/>
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1200 Data Structures </CardTitle>
              <CardText className="wd-dashboard-course-descritpion overflow-hidden" style={{ height: "100px" }}>
                CS Basics</CardText>
              <Button variant="primary"> Go </Button>
            </CardBody>
          </Link>
	</Card>
     </Col>

        <Col className="wd-dashboard-course">
	<Card>
	<Link href="/Courses/2200" 
	className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/discrete-mathematics.png" width="100%" height={160}/>
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS2200 Fundamentals of Computer Science </CardTitle>
              <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height : "100px" }}>
                Discrete Mathematics</CardText>
              <Button variant="primary"> Go </Button>
            </CardBody>
          </Link>
	</Card>
     </Col>

	<Col className="wd-dashboard-course">
	<Card>
        <Link href="/Courses/2500" 
	className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/low-level-programming.jpg" width="100%" height={160}/>
            <CardBody>             
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS2500 Computer Organization </CardTitle>
              <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height : "100px" }}> 
                Low-level C programming</CardText>  
		<Button variant="primary"> Go </Button>
              </CardBody>
            </Link>                    
          </Card>                     
        </Col>

	<Col className="wd-dashboard-course">
	<Card>
        <Link href="/Courses/2600" 
	className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/java.jpg" width="100%" height={160}/>
            <CardBody>             
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS2600 Principles of Software </CardTitle>
              <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height : "100px" }}>
                Correct and maintainable Java software</CardText>
              <Button variant="primary"> Go </Button>
            </CardBody>                    
          </Link>
	</Card>
     </Col> 

	<Col className="wd-dashboard-course">
	<Card>
        <Link href="/Courses/2300" 
	className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg src="/images/algorithms.jpg" width="100%" height={160}/>
            <CardBody>             
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS2300 Fundamentals of Computer Science II </CardTitle>
	      <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height : "100px" }}>
                Algorithms and problem solving </CardText>  
		<Button variant="primary"> Go </Button>
            </CardBody>                    
          </Link>
	</Card>
      </Col>  

	<Col className="wd-dashboard-course">
	<Card>
        <Link href="/Courses/2960" 
	className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg src="/images/competitive-programming.png" width="100%" height={160}/>
            <CardBody>             
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS2960 Competitive Programming </CardTitle>
              <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height : "100px" }}>
                Programming contests</CardText>
              <Button variant="primary"> Go </Button>
            </CardBody>                    
          </Link>
	</Card>
     </Col>

	<Col className="wd-dashboard-course">     
	<Card>
        <Link href="/Courses/4430" 
	className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg src="/images/haskell-logo.jpg" width="100%" height={160}/>
            <CardBody>             
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS4430 Programming Languages </CardTitle>
              <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        	Programming paradigms</CardText>      
              <Button variant="primary"> Go </Button>
            </CardBody>                    
          </Link>
	</Card>
     </Col>
   </Row>   
   </div>
   </div>
);}

