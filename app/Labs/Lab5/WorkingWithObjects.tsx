"use client";

import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import axios from "axios";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${HTTP_SERVER}/lab5/welcome`);
  return response.data;
};
const ASSIGNMENT_API = `${HTTP_SERVER}/lab5/assignment`;
export const fetchAssignment = async () => {
  const response = await axios.get(`${ASSIGNMENT_API}`);
  return response.data;
};
export const updateTitle = async (title: string) => {
  const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
  return response.data;
};
export default function WorkingWithObjects() {
 const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
const [module, setModule] = useState({
  id: 1, name: "Module 1",
  description: "How to create a NodeJS server",
  course: "Web Development"
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title </a><br/>
      <FormControl className="w-75" id="wd-assignment-title"
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <a id="wd-update-assignment-score"
         className="btn btn-primary float-end"
	 href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
	 Update Score </a><br/>
      <FormControl className="w-75" id="wd-assignment-score"
        defaultValue={assignment.score} onChange={(e) =>
	  setAssignment({ ...assignment, score: parseInt(e.target.value) })}/>
      <input type="checkbox" id="wd-assignment-completed" checked={assignment.completed}
      onChange={(e) =>
	  setAssignment({ ...assignment, completed: !assignment.completed })}/>
      <a id="wd-update-assignment-completed"
         className="btn btn-primary float-end"
	 href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
	 Update Completion Status
      </a><br/>
      <a id="wd-update-module-name"
         className="btn btn-primary float-end"
	 href={`${MODULE_API_URL}/name/${module.name}`}>
	 Update Module </a>
      <FormControl className="w-75" id="wd-module-name"
        defaultValue={module.name} onChange={(e) =>
	setModule({ ...module, name: e.target.value })}/>
      <hr />   
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment`}>
        Get Assignment
      </a>
      <a id="wd-retrieve-modules" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/module`}>
	 Get Module
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment/title`}>
        Get Title
      </a>
      <a id="wd-retrieve-module-name" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/module/name`}>
	 Get Name
      </a><hr/>
    </div>
);}

