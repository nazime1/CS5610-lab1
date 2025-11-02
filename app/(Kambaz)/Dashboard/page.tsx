"use client"
/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable no-var */

import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { addNewEnrollment, deleteEnrollment } from "../reducer";
import { RootState } from "../store";
import { useState } from "react";
import Link from "next/link";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { enrollments } = useSelector((state: RootState) => state.enrollmentReducer);
  const dispatch = useDispatch();
  const [course, setCourse] = useState<any> ({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "images/react-logo.png", description: "New Description"
  });
  const { currentUser } = useSelector((state: RootState) => state.accountReducer!);
  const [ visible, setVisible ] = useState(true);
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={() => dispatch(addNewCourse(course))} > Add </button>
		 <button className="btn btn-warning float-end me-2"
                onClick={() => dispatch(addNewCourse(course))} id="wd-update-course-click">
          Update </button> 
      </h5>
      <br />
      <FormControl value={course.name} className="mb-2"
	onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl value={course.description}
 	onChange={(e) => setCourse({ ...course, description: e.target.value }) }/>
      <hr />      
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})
      <button className="btn btn-primary float-end"
      id="wd-enrollments" onClick={() => setVisible(!visible)}>Enrollments</button></h2> <hr />
      <div id="wd-dashboard-courses">
      <Row xs={1} md={5} className="g-4">
 	{visible ? courses
    .filter((course) =>
      enrollments.some(
        (enrollment) =>
          enrollment.user === currentUser?._id &&
          enrollment.course === course._id
         )) 
	.map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                  <CardImg src={course.image} variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </CardText>
                    <Button href={`/Courses/${course._id}/Home`} variant="primary"> Go </Button>
		    {enrollments.some((enrmnt) => enrmnt.course === course._id) ? <Button variant="danger" onClick={() => dispatch(deleteEnrollment(enrollments[0]._id))}>Unenroll</Button>
		    : <Button variant="success" onClick={() => dispatch(addNewEnrollment(enrollments))}>Enroll</Button>}
		    <button id="wd-edit-course-click"
  			onClick={(event) => {
 			event.preventDefault();
    			setCourse(course);
  			}}
  			className="btn btn-warning me-2 float-end" >
  			Edit
			</button>
		    <button onClick={(event) => {
                      event.preventDefault();
                      dispatch(deleteCourse(course._id));
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Delete
            	</button>
                  </CardBody>
              </Card>
            </Col>
        )): courses.map((course) => (
	       <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
        	<Card>
                  <CardImg src={course.image} variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </CardText>
	    		<Button href={`/Courses/${course._id}/Home`} variant="primary"> Go </Button>
		    {enrollments.some((enrmnt) => enrmnt.course === course._id) ? <Button variant="danger" onClick={() => dispatch(deleteEnrollment(enrollments[0]._id))}>Unenroll</Button>
                    : <Button variant="success" onClick={() => dispatch(addNewEnrollment(enrollments))}>Enroll</Button>}
                    <button id="wd-edit-course-click"
                        onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end" >
                        Edit
                        </button>
                    <button onClick={(event) => {
                      event.preventDefault();
                      dispatch(deleteCourse(course._id));
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Delete
                  </button>
                  </CardBody>
              </Card>
            </Col>
	  ))}
	</Row>      
      </div>
      </div>
);}

