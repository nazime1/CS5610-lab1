import Link from "next/link";
import { InputGroup, FormControl, Button, Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import InputGroupText from "react-bootstrap/InputGroupText";
import { CiSearch } from "react-icons/ci";
import { IoIosAdd, IoIosArrowDropdownCircle } from "react-icons/io";
import { MdAssignment } from "react-icons/md";

export default function Assignments() {
  return (
<Container>
    <Row>
    <Col>
    </Col>
    <Col>
    <InputGroup className="mb-3" style={{ width: 400 }}>
    <InputGroupText id="wd-search"><CiSearch/></InputGroupText>
    <FormControl placeholder="Search..." aria-label="search" aria-describedby="wd-search"/>
    </InputGroup>
    </Col>
    <Col>
    </Col>
    <Col>
    <Button variant="secondary" size="lg" className="w-100" style={{ width : 200 }}>
    <IoIosAdd className="me-2 fs-5"/>Group</Button>
    </Col>
    <Col>
    <Button variant="danger" size="lg" className="w-100" style={{ width : 200 }}>
    <IoIosAdd className="me-2 fs-5" style={{ color: "white" }}/>Assignment</Button>
    </Col>
    </Row>
    <Row>
    </Row>
    <Row>
    <Col>
    <ListGroup id="wd-assignments">
    <ListGroupItem id="wd-a1"><Link href="Assignments/123"><h3><MdAssignment/>A1</h3></Link><br/>Multiple modules, not available until September 22 at 12:00am
    <br/>Due September 29 at 11:59pm
    </ListGroupItem>
    <ListGroupItem id="wd-a2"><Link href="Assignments/234"><h3><MdAssignment/>A2</h3></Link><br/>Multiple modules, not available until September 29 at 12:00am
    <br/>Due October 6 at 11:59pm
    </ListGroupItem>
    <ListGroupItem id="wd-a3"><Link href="Assignments/345"><h3><MdAssignment/>A3</h3></Link><br/>Multiple modules, not available until October 6 at 12:00am
    <br/>Due October 13 at 11:59pm
    </ListGroupItem>
    </ListGroup>
    </Col>
    </Row>
    </Container>
);}

