"use client";
/* eslint-disable  @typescript-eslint/no-explicit-any */

import { Form, FormLabel, FormControl, FormCheck, Row, Col, FormSelect, Button } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useParams, redirect } from "next/navigation";
import { useState, useEffect } from "react";
import * as client from "../client";
import { addAssignment, editAssignment, updateAssignment, deleteAssignment, setAssignments } from "../reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentEditor() {
  const params = useParams<{ cid: string; aid: string; }>();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const fetchAssignments = async () => {
   const assignments = await client.findAssignmentsForCourse(params.cid as string); 
   dispatch(setAssignments(assignments));
};
  useEffect(() => {
    fetchAssignments();
  }, []);
  const assignment = assignments.find((assignment : any) => assignment._id === params.aid);
  const [ assignmentTitle, setAssignmentTitle ] = useState((assignment as any).title);
  const onUpdateAssignment = async (cid: string, aid: string, assignment: any) => {
	await client.updateAssignment(cid, aid, assignment);
	const newAssignment = assignments.map((a: any) => a._id === assignment._id ? assignment : a);
	dispatch(setAssignments(newAssignment));
  };
  const onCreateAssignment = async () => {
	if (!params.cid) return;
	if (params.aid !== 'AssignmentEditor') {
	  onUpdateAssignment(params.cid, params.aid, assignment);
	  return;
	}
	const newAssignment = { title: assignmentTitle, course: params.cid };
	const asmnt = await client.createAssignmentForCourse(params.cid, newAssignment);
	dispatch(setAssignments([...assignments, asmnt]));
  };
  return (
    <div id="wd-assignments-editor">
      <Form>
      <FormLabel>Assignment Name</FormLabel>
      <FormControl type="text" defaultValue={assignmentTitle} onChange={(e) => { setAssignmentTitle(e.target.value); dispatch(updateAssignment( {...assignment as any, title: e.target.value} ))}}/>
      <FormControl as="textarea" defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab  assignments Link to the Kanbas application Links to all relevant source code Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page."/><br/>
      <Row>
      <FormLabel column sm="2">Points</FormLabel>
      <Col sm="10">
      <FormControl defaultValue="100"/>
      </Col>
      <br/>
      </Row>
      </Form>
      <Row>
      <Col>
      <FloatingLabel controlId="wd-assignment-group" label="Assignment Group">
      <FormSelect aria-label="assignment-group">
      <option>ASSIGNMENTS</option>
      <option>QUIZZES</option>
      <option>EXAMS</option>
      </FormSelect>
      </FloatingLabel>
      </Col>
      </Row>
      <br/>
      <Row>
      <Col>
      <FloatingLabel controlId="wd-display-grade-as" label="Display Grade As">
      <FormSelect aria-label="display-grade-as">
      <option>Percentage</option>
      <option>Complete/Incomplete</option>
      <option>Points</option>
      <option>Letter Grade</option>
      <option>GPA Scale</option>
      <option>Not Graded</option>
      </FormSelect>
      </FloatingLabel>
      </Col>
      </Row>
      <br/>
      <Row>
      <Col>
      <FloatingLabel controlId="wd-submission-type" label="Submission Type">
      <FormSelect aria-label="submission-type">
      <option>Online</option>
      <option>No Submission</option>
      <option>On Paper</option>
      <option>External Tools</option>
      <option>Lucid</option>
      </FormSelect>
      </FloatingLabel>
      </Col>
      </Row>
      <Row>
      <Col>
      <Form>
      <FormCheck defaultChecked={false} label="Text Entry"/>
      <FormCheck defaultChecked={false} label="Website URL"/>
      <FormCheck defaultChecked={false} label="Media Recordings"/>
      <FormCheck defaultChecked={false} label="Student Annotation"/>
      <FormCheck defaultChecked={false} label="File Uploads"/>
      </Form>
      </Col>
      </Row>
      <Row>
      <Col>
      Assign
      </Col>
      <Col>
      <Form>
      <FormLabel>Assign To </FormLabel>
      <FormControl type="text" defaultValue="Everyone"/>
      <FormLabel>Due</FormLabel>
      <FormControl type="date" defaultValue="2025-09-22"/>
      <FormLabel>Available from</FormLabel>
      <FormControl type="date" defaultValue="2025-09-08"/>
      <FormLabel>Until</FormLabel>
      <FormControl type="date" defaultValue="2025-09-22"/>
      </Form>
      </Col>
      <Col>
      </Col>
      <Col>
      </Col>
      <Col>
      </Col>
      <Col>
      </Col>
      </Row>
      <Row>
      <Col>
      <Button variant="success" href={`/Courses/${params.cid}/Assignments`} 
      onClick={(e) => { e.preventDefault();
	onCreateAssignment();
	redirect(`/Courses/${params.cid}/Assignments`)
      }}>Save</Button>
      </Col>
      <Col>
      <Button variant="danger" href={`/Courses/${params.cid}/Assignments`}>Cancel</Button>
      </Col>
      </Row>
    </div>
);}

