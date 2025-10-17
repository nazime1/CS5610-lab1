import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import CourseStatus from "../Home/Status";

export default function Modules() {
  return (
<div>
  <ModulesControls /><br /><br /><br /><br />
  <ListGroup className="rounded-0" id="wd-modules">
    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> Week 1 </div>
      <ListGroup className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-3 ps-1">
          LEARNING OBJECTIVES </ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1">
          Introduction to the course </ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1">
          Learn what is Web Development </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 </div>
      <ListGroup className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-3 ps-1">
          Learn how to create user interfaces with HTML </ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1">
          Deploy the assignment to Vercel </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
  </ListGroup>
</div>
);}

