/* eslint-disable  @typescript-eslint/no-explicit-any */

import Link from "next/link";
import { InputGroup, FormControl, Button, Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import InputGroupText from "react-bootstrap/InputGroupText";
import { CiSearch } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { MdAssignment } from "react-icons/md";
import * as db from "../../../Database";

type Params = Promise<{ cid: string }>    

export default async function Assignments(    
  { params, }: Readonly<{ params: Params }>) { 
const { cid } = await params;
const assignments = db.assignments;
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
    {assignments
	    .filter((asmnt : any) => asmnt.course === cid)
	    .map((assignment : any) => (
    <ListGroupItem key={assignment._id} id="wd-assignment"><Link href={`Assignments/${assignment._id}`}><h3><MdAssignment/>{assignment.title}</h3></Link><br/>
    <br/>
    </ListGroupItem>))}
    </ListGroup>
    </Col>
    </Row>
    </Container>
);}

