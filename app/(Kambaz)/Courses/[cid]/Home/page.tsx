import Modules from "../Modules/page";
import CourseStatus from "./Status";
export default function Home() {
 return (
   <div id="wd-home">
  <div className="d-flex" id="wd-home">
    <div className="flex-fill me-3">
      <Modules />
    </div>
    <div className="flex-fill" style={{ width : 200 }}>
      <CourseStatus />
    </div>
  </div>
</div>
);}

