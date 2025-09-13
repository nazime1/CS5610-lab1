import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/react-logo.png" width={200} height={150} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
	<Link href="/Courses/1200" className="wd-dashboard-course-link">
            <Image src="/images/data-structures.png" width={200} height={150} />
            <div>
              <h5> CS1200 Data Structures </h5>
              <p className="wd-dashboard-course-title">
                CS Basics
              </p>
              <button> Go </button>
            </div>
          </Link>
	</div>

        <div className="wd-dashboard-course"> 
	<Link href="/Courses/2200" className="wd-dashboard-course-link">
            <Image src="/images/discrete-mathematics.png" width={200} height={150} />
            <div>
              <h5> CS2200 Fundamentals of Computer Science </h5>
              <p className="wd-dashboard-course-title">
                Discrete Mathematics
              </p>
              <button> Go </button>
            </div>
          </Link>
	</div>

	<div className="wd-dashboard-course">           
        <Link href="/Courses/2500" className="wd-dashboard-course-link">
            <Image src="/images/low-level-programming.jpg" width={200} height={150} />
            <div>             
              <h5> CS2500 Computer Organization </h5>
              <p className="wd-dashboard-course-title">
                Low-level C programming       
              </p>
              <button> Go </button>
            </div>                    
          </Link>                     
        </div>

	<div className="wd-dashboard-course">           
        <Link href="/Courses/2600" className="wd-dashboard-course-link">
            <Image src="/images/java.jpg" width={200} height={150} />
            <div>             
              <h5> CS2600 Principles of Software </h5>
              <p className="wd-dashboard-course-title">
                Correct and maintainable Java software      
              </p>
              <button> Go </button>
            </div>                    
          </Link>                     
        </div> 

	<div className="wd-dashboard-course">           
        <Link href="/Courses/2300" className="wd-dashboard-course-link">
            <Image src="/images/algorithms.jpg" width={200} height={150} />
            <div>             
              <h5> CS2300 Fundamentals of Computer Science II </h5>
              <p className="wd-dashboard-course-title">
                Algorithms and problem solving   
              </p>
              <button> Go </button>
            </div>                    
          </Link>                     
        </div>   

	<div className="wd-dashboard-course">           
        <Link href="/Courses/2960" className="wd-dashboard-course-link">
            <Image src="/images/competitive-programming.png" width={200} height={150} />
            <div>             
              <h5> CS2960 Competitive Programming </h5>
              <p className="wd-dashboard-course-title">
                Programming contests
              </p>
              <button> Go </button>
            </div>                    
          </Link>                     
        </div>

	<div className="wd-dashboard-course">           
        <Link href="/Courses/4430" className="wd-dashboard-course-link">
            <Image src="/images/haskell-logo.jpg" width={200} height={150} />
            <div>             
              <h5> CS4430 Programming Languages </h5>
              <p className="wd-dashboard-course-title">
        	Programming paradigms         
              </p>
              <button> Go </button>
            </div>                    
          </Link>                     
        </div>   
      </div>
    </div>
);}

