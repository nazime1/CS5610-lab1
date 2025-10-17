import Link from "next/link";
import { FormControl, FormSelect } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <FormControl id="wd-username"
      defaultValue="alice" placeholder="username"/>
      <FormControl id="wd-password"
      defaultValue="123" placeholder="password" type="password"/>
      <FormControl id="wd-firstname"
      defaultValue="Alice" placeholder="First Name"/>
      <FormControl id="wd-lastname"
      defaultValue="Wonderland" placeholder="Last Name"/>
      <FormControl id="wd-dob" type="date"
      defaultValue="2000-01-01"/>
      <FormControl id="wd-email" type="email"
      defaultValue="alice@wonderland"/>
      <FloatingLabel controlId="wd-role"
      label="Role"
      className="mb-3">
      <FormSelect aria-label="wd-role-select">
      <option value="USER">User</option>
      <option value="FACULTY">Faculty</option> 
      <option value="STUDENT">Student</option>
      </FormSelect>
      </FloatingLabel>
      <Link href="Signin" className="btn btn-danger w-100 mb-2"> Sign out </Link>
    </div>
);}

