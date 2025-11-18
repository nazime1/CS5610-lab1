'use client';

import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { usePathname } from "next/navigation";

export default function CourseNavigation({cid} : {cid : string}) {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const pathname = usePathname();
  return (
    <ListGroup id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
    {links.map((link) => (
	<Link key={link} href={`/Courses/${cid}/${link}`}
	className={`bg-white text-center border-0
		${pathname.includes(link) ? "text-danger bg-white" : "text-black bg-black"}`}>
		<br/>
		{link}
	</Link>
    ))}
    </ListGroup>
    );}

