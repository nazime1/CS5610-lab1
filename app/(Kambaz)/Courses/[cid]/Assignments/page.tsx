"use client";

/* eslint-disable  @typescript-eslint/no-explicit-any */

import Link from "next/link";
import React from "react";
import { InputGroup, FormControl, Button, Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import InputGroupText from "react-bootstrap/InputGroupText";
import { CiSearch } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { useParams } from "next/navigation";
import { MdAssignment } from "react-icons/md";
import { addAssignment, editAssignment, updateAssignment, deleteAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";

type Params = Promise<{ cid: string }>    

export default function Assignments(    
  { params, }: Readonly<{ params: Params }>) { 
const { cid } = useParams();
const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
const dispatch = useDispatch();
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
    <Button variant="danger" size="lg" className="w-100" style={{ width : 200 }} href={`/Courses/${cid}/Assignments/AssignmentEditor`}>
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
    <ListGroupItem key={assignment._id} id="wd-assignment"><h3><Link href={`Assignments/${assignment._id}`}><MdAssignment/>{assignment.title}</Link>
    <FaTrash className="text-danger me-2 mb-1" onClick={() => {if (window.confirm('Delete this assignment?')) dispatch(deleteAssignment(assignment._id))}}/></h3>
    <br/>
    <br/>
    </ListGroupItem>
    ))}
    </ListGroup>
    </Col>
    </Row>
    </Container>
);}

