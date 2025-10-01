import Link from "next/link";
export default function AccountNavigation() {
 return (
   <div id="wd-account-navigation">
     
     <Link href="Signin"
     className="list-group-item text-danger text-decoration-none"> Signin </Link> <br />
     <Link href="Signup"
     className="list-group-item text-danger text-decoration-none"> Signup </Link> <br />
     <Link href="Profile"
     className="list-group-item text-danger text-decoration-none"> Profile </Link> <br />
   </div>
);}

