"use client";

/* eslint-disable  @typescript-eslint/no-explicit-any */

import Link from "next/link";
import React, { useEffect } from "react";
import { InputGroup, FormControl, Button, Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import InputGroupText from "react-bootstrap/InputGroupText";
import { CiSearch } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { useParams } from "next/navigation";
import { MdAssignment } from "react-icons/md";
import { addAssignment, editAssignment, updateAssignment, deleteAssignment, setAssignments } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import * as client from "./client";

type Params = Promise<{ cid: string }>    

export default function Assignments(    
  { params, }: Readonly<{ params: Params }>) { 
const { cid } = useParams();
const { currentUser } = useSelector((state: RootState) => state.accountReducer!);
const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
const dispatch = useDispatch();
const onRemoveAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(cid as string, assignmentId);
    dispatch(setAssignments(assignments.filter((a: any) => a._id !== assignmentId)));
  };
const fetchAssignments = async () => {
   const assignments = await client.findAssignmentsForCourse(cid as string);
   dispatch(setAssignments(assignments));
};
useEffect(() => {
  fetchAssignments();
}, []);
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
	    .map((assignment : any) => (
    <ListGroupItem key={assignment._id} id="wd-assignment"><h3><Link href={`Assignments/${assignment._id}`}><MdAssignment/>{assignment.title}</Link>
    <FaTrash className="text-danger me-2 mb-1" onClick={() => {if (window.confirm('Delete this assignment?')) onRemoveAssignment(assignment._id)}}/></h3>
    <br/>
    <br/>
    </ListGroupItem>
    ))}
    </ListGroup>
    </Col>
    </Row>
    </Container>
);}

