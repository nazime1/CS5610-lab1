export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" defaultValue={"The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab  assignments Link to the Kanbas application Links to all relevant source code Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page."}/>
      <br />
      <br />
      <table>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
	  </td>
	  <td align="right" valign="top">
	    <input id="wd-points" defaultValue={100} />
	    <br/>
	  </td>
      </table>
      <table>
	  <td>
	   <label htmlFor="wd-group">Assignment Group</label>
	  </td>
	  <td>
	   <select id="wd-group">
	   	<option value="assignments">ASSIGNMENTS</option>
		<option value="quizzes">QUIZZES</option>
		<option value="exams">EXAMS</option>
	   </select>
	</td>
	</table>
	<table>
	<td>
	    <label htmlFor="wd-display-grade-as">Display Grade As</label>
	</td>
	<td>
	    <select id="wd-display-grade-as">
	    	<option value="percentage">Percentage</option>
		<option value="completion">Complete/Incomplete</option>
		<option value="points">Points</option>
		<option value="letter-grade">Letter Grade</option>
		<option value="gpa-scale">GPA Scale</option>
		<option value="not-graded">Not Graded</option>
	    </select>
	</td>
	</table>
	<table>
	<td>
	   <label htmlFor="wd-submission-type">Submission Type</label>
	</td>
	<td>
	    <select id="wd-submission-type">
	    	<option value="online">Online</option>
		<option value="no-submission">No Submission</option>
		<option value="on-paper">On Paper</option>
		<option value="external-tool">External Tool</option>
		<option value="lucid">Lucid</option>
	    </select>
	</td>
	</table>
	<table>
	<td>
	    Online Entry Options
	    <br/>
	    <input type="checkbox" name="text-entry" id="wd-text-entry"/>
	    <label for="wd-text-entry">Text Entry</label>
	    <br/>
	    <input type="checkbox" name="website-url" id="wd-website-url"/>
    	    <label for="wd-website-url">Website URL</label>
	    <br/>
	    <input type="checkbox" name="media-recordings" id="wd-media-recordings"/>
    	    <label for="wd-media-recordings">Media Recordings</label>
	    <br/>
	    <input type="checkbox" name="student-annotation" id="wd-student-annotation"/>
    	    <label for="wd-student-annotation">Student Annotation</label>
	    <br/>
	    <input type="checkbox" name="file-upload" id="wd-file-upload"/>
    	    <label for="wd-file-upload">File Upload</label>
	</td>
	</table>
	<table>
	<td align="left" valign="top">
	Assign
	</td>
	</table>
	<table>
	<td>
	<label htmlFor="wd-assign-to">Assign To</label>
	</td>
	<td>
	<input id="wd-assign-to" defaultValue={"Everyone"}/>
	</td>
	</table>
	<table>
	<td>
	<label htmlFor="wd-due-date">Due</label>
	</td>
	<td>
	<input type="date" id="wd-due-date"/>
	</td>
	</table>
	<table>
	<td>
	<label htmlFor="wd-available-from">Available from</label>
	</td>
	<td>
	<input type="date" id="wd-available-from"/>
	</td>
	<td>
	<label htmlFor="wd-available-until">Until</label>
	</td>
	<td>
	    <input type="date" id="wd-available-until"/>
	</td>
      </table>
    </div>
);}

