import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123"
             className="wd-assignment-link">
            A1 - ENV + HTML
	  </Link></li>
	  Multiple Modules | <b>Not available until</b> September 22 at 12:00am <br/>
	  <b>Due</b> September 29 at 11:59pm | 100 pts
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/234"
	     className="wd-assignment-link">
	     A2 - CSS + BOOTSTRAP
	</Link></li>
	Multiple Modules | <b>Not avaialble</b> until September 29 at 12:00am <br/>
	<b>Due</b> October 6 at 11:59pm | 100 pts
        <li className="wd-assignment-list-item">
	   <Link href="/Courses/1234/Assignments/345"
	      className="wd-assignment-link">
	      A3 - JAVASCRIPT + REACT
	</Link></li>
	Multiple Modules | <b>Not available</b> until October 6 at 12:00am <br/>
	<b>Due</b> October 13 at 11:59pm | 100 pts
      </ul>
    </div>
);}

