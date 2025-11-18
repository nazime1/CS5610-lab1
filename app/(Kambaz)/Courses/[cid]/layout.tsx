"use client";
/* eslint-disable  @typescript-eslint/no-explicit-any */

import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "../../store";
import { FaAlignJustify } from "react-icons/fa6";
import { useState } from "react";

export default function CoursesLayout({ children }: { children: ReactNode }) {
 const { cid } = useParams();
 const { courses } = useSelector((state: RootState) => state.coursesReducer);
 const course = courses.find((course: any) => course._id === cid);
 const [ toggle, setToggle ] = useState(true);
 const cidString = String(cid);
 return (
   <div id="wd-courses">
     <h2 className ="text-danger">
     <FaAlignJustify className="me-4 fs-4 mb-1" onClick={() => setToggle(!toggle)}/>
     {course?.name}</h2> <hr />
     <div className="d-flex">
     {toggle && <div className="d-none d-md-block">
	<CourseNavigation cid={cidString}/>
     </div>}
     <div className="flex-fill">
     {children}
     </div>
   </div>
</div>
);}

