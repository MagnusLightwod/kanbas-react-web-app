import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">

        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} alt="default react" />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>


        <div className="wd-dashboard-course"> 
          <img src="/images/computersystems.jpg" width={200} alt="computers"/>
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5600/Home">CS5600 Computer Systems</Link>
            <p className="wd-dashboard-course-title"> Inside the CPU </p>
            <Link to="/Kanbas/Courses/5600/Home"> Go</Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/intro.jpg" width={200} alt="introimage"/>
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5004/Home">CS5004 Intro to Compuer Science
            </Link>
            <p className="wd-dashboard-course-title"> CS crash course</p>
            <Link to="/Kanbas/Courses/5004/Home"> Go</Link>
          </div>
        </div>


        <div className="wd-dashboard-course">
          <img src="/images/discrete.jpg" width={200} alt="discrete image"/>
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5002/Home">CS5002 Discrete Math
            </Link>
            <p className="wd-dashboard-course-title"> Discrete Mathematics</p>
            <Link to="/Kanbas/Courses/5002/Home"> Go</Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/AI.jpg" width={200} alt="AI image"/>
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5620/Home">CS5620 AI Foundations
            </Link>
            <p className="wd-dashboard-course-title"> Intro to AI</p>
            <Link to="/Kanbas/Courses/5620/Home"> Go</Link>
          </div>
        </div>


        <div className="wd-dashboard-course"> 
          <img src="images/app.jpg" width={200} alt="apps image"/>
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5660/Home">CS5660 App Development
            </Link>
            <p className="wd-dashboard-course-title"> App Dev</p>
            <Link to="/Kanbad/Courses/5660/Home">Go</Link>
          </div>
        </div>


         <div className="wd-dashboard-course"> 
          <img src="images/graphics.jpg" width={200} alt="graphics"/>
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/7660/Home">CS7660 GRaphical Work and Development
            </Link>
            <p className="wd-dashboard-course-title"> GRaphics</p>
            <Link to="/Kanbad/Courses/7660/Home">Go</Link>
          </div>
        </div>

        <div className="wd-dashboard-course"> 
          <img src="images/hackers.jpg" width={200} alt="hackermans"/>
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/7669/Home">CS7690 Intro to hacking 
            </Link>
            <p className="wd-dashboard-course-title"> White hat Work</p>
            <Link to="/Kanbad/Courses/7690/Home">Go</Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}

