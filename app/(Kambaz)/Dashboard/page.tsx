"use client"
/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable no-var */

import * as client from "../Courses/client";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../Courses/reducer";
import { addNewEnrollment, deleteEnrollment, setEnrollments } from "./reducer";
import { RootState } from "../store";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { enrollments } = useSelector((state: RootState) => state.enrollmentReducer);
  let myCourses = useRef(courses);
  const dispatch = useDispatch();
  const [course, setCourse] = useState<any> ([{
    _id: uuidv4(), name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "images/react-logo.png", description: "New Description"
  }]);
  const [buttonText, setButtonText] = useState("Unenroll");
  const [visible, setVisible] = useState(false);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer!);
  const fetchCourses = async (currentUser : any) => {
  	myCourses = await client.findMyCourses(currentUser);
  	dispatch(setCourses(myCourses));
  };
  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })));};
  useEffect(() => {
    fetchCourses(currentUser);
  }, [currentUser]);
  const onAddNewCourse = async (currentUser : any) => {
    const newCourse = await client.createCourse(course, currentUser);
    dispatch(setCourses([ ...courses, newCourse ]));
  };
  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
  };
  const getCourses = (visible: boolean) => {
	return visible ? myCourses.current : courses;
  }
  const fetchEnrollments = async () => {
	const enrollments = await client.fetchAllEnrollments();
	dispatch(setEnrollments(enrollments));
  }
  useEffect(() => {
	fetchEnrollments();
  }, []);
  const enrmts = enrollments as Array<any>;
  const onAddEnrollment = async (currentUser : any, courseId: string) => {
	const newEnrollment = await client.enrollUser(currentUser, courseId);
	dispatch(setEnrollments([...enrollments, newEnrollment ]));
  };
  const onDeleteEnrollment = async (enrollmentId: string) => {
	const status = await client.unenrollUser(enrollmentId);
	dispatch(setEnrollments(enrmts.filter((enrollment) => enrollment!._id !== enrollmentId)));
  };
  const switchButton = (event : any, buttonText : string, course : any) => {
	if (buttonText === "Unenroll") {   
	   const enrollment = enrmts.find((enrollment) => enrollment.course === course._id
		&& enrollment.user === currentUser._id);
	   onDeleteEnrollment(enrollment._id);
	   event.target.classList = "btn btn-success me-2 float-end";
	   setButtonText("Enroll");
	} else {
	  onAddEnrollment(currentUser._id, course._id);
	  event.target.classList = "btn btn-danger me-2 float-end";
	  setButtonText("Unenroll");
	}
  }
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={(e) => onAddNewCourse(currentUser)}> Add </button>
		 <button className="btn btn-warning float-end me-2"
                onClick={onUpdateCourse} id="wd-update-course-click">
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
      {getCourses(visible).map((course) => (
	       <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
        	<Card>
                  <CardImg src={course.image} variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </CardText>
		      	<Link href={`/Courses/${course._id}/Home`}>
	    		<Button variant="primary"> Go </Button></Link>
			{enrmts.some((enrollment => enrollment.course === course._id)) ?
			<input type="button" value={buttonText} className="btn btn-danger me-2 float-end"
			onClick={(event) => {
			switchButton(event, buttonText, course);
			}}/> : 
			<button className="btn btn-success me-2 float-end"
			onClick={(event) => {onAddEnrollment(currentUser, course._id);}}>Enroll</button>}
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
                      onDeleteCourse(course._id);
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

