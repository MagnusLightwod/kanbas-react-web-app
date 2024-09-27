import { Link } from "react-router-dom";
import "./styles.css"
export default function Dashboard() {
  return (
    <div>
    <div id="wd-dashboard">
    <h1 id="wd-dashboard-title">Dashboard</h1> 
    <hr /> <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
    <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-3 
    row-cols-lg-2 row-cols-xl-1 g-4">
     {/* First Course */}
     <div
          className="wd-dashboard-course m-2"
          style={{ width: "270px" }}>
        
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home">
            
              <img src="/images/blue.jpg" className="card-img-top" alt="Course Image" height={160}/>
            
              <div className="card-body">
                <h6 className="wd-dashboard-course-title card-title text-truncate">
                  CS1234 12632 React JS
                </h6>
                <h5 className="wd-dashboard-course-title card-text text-truncate">
                CS1234.12631.2020410
                </h5>
                <h6 className="wd-dashboard-course-title card-text text-truncate">
                  202410_2 Fall 2024 Semester Full Term
                </h6>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>


        {/* Second Course */}
        <div
          className="wd-dashboard-course m-2"
          style={{ width: "270px" }}>
        
          <div className="card rounded-3 overflow-hidden ">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/5600/Home">
            
              <img src="/images/blue.jpg" className="card-img-top" alt="Course Image" height={160}/>
              
              <div className="card-body">
              {/* text truncate to not have text expand the box */}
                <h6 className="wd-dashboard-course-title card-title text-truncate"> 
                CS5600 14281 Intro to Computer Systems
                </h6>
                <h5 className="wd-dashboard-course-title card-text text-truncate">
                CS5600.14281.2020410
                </h5>
                <h6 className="wd-dashboard-course-title card-text text-truncate">
                  202410_2 Fall 2024 Semester Full Term
                </h6>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>
    
        {/* Third Course */}
        <div
          className="wd-dashboard-course m-2"
          style={{ width: "270px" }}>
        
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5004/Home" >
              <img src="/images/blue.jpg" className="card-img-top" alt="Intro Image" height={160}/>
              
              <div className="card-body">
                <h6 className="wd-dashboard-course-title card-title text-truncate">
                  CS5004 12840 Computer Science
                </h6>
                <h5 className="wd-dashboard-course-title card-text text-truncate">
                CS5004.12840.2020410
                </h5>
                <h6 className="wd-dashboard-course-title card-text text-truncate">
                  202410_2 Fall 2024 Semester Full Term
                </h6>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Fourth course */}
  
        <div
          className="wd-dashboard-course m-2"
          style={{ width: "270px" }}>
        
          <div className="card rounded-3 overflow-hidden ">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/5002/Home">
            
              <img src="/images/blue.jpg" className="card-img-top" alt="Course Image" height={160}/>
              
              <div className="card-body">
              {/* text truncate to not have text expand the box */}
                <h6 className="wd-dashboard-course-title card-title text-truncate"> 
                  CS5002 15666 Discrete Math
                </h6>
                <h5 className="wd-dashboard-course-title card-text">
                CS5002.1566.2019410
                </h5>
                <h6 className="wd-dashboard-course-title card-text text-truncate">
                  202410_2 Spring 2024 Semester Full Term
                </h6>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Fifth Course */}
    
        <div
          className="wd-dashboard-course m-2"
          style={{ width: "270px" }}>
        
          <div className="card rounded-3 overflow-hidden ">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/5660/Home">
            
              <img src="/images/Lblue.jpg" className="card-img-top" alt="Course Image" height={160}/>
              
              <div className="card-body">
              {/* text truncate to not have text expand the box */}
                <h6 className="wd-dashboard-course-title card-title text-truncate"> 
                CS5660 12631 App Development
                </h6>
                <h5 className="wd-dashboard-course-title card-text text-truncate">
                CS5660.12631.2020410
                </h5>
                <h6 className="wd-dashboard-course-title card-text text-truncate">
                  202410_2 Fall 2024 Semester Full Term
                </h6>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

            {/* Sixth Course */}
      

        <div
          className="wd-dashboard-course m-2"
          style={{ width: "270px" }}>
        
          <div className="card rounded-3 overflow-hidden ">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/7660/Home">
            
              <img src="/images/Lblue.jpg" className="card-img-top" alt="Course Image" height={160}/>
              
              <div className="card-body">
              {/* text truncate to not have text expand the box */}
                <h6 className="wd-dashboard-course-title card-title text-truncate"> 
                CS7660 15000 Graphical Work and Development
                </h6>
                <h5 className="wd-dashboard-course-title card-text text-truncate">
                CS7660.15000.2019410
                </h5>
                <h6 className="wd-dashboard-course-title card-text text-truncate">
                  202410_2 Spring 2024 Semester Full Term
                </h6>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>

       {/* Seventh Course */}
       <div
          className="wd-dashboard-course m-2"
          style={{ width: "270px" }}>
        
          <div className="card rounded-3 overflow-hidden ">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/7690/Home">
            
              <img src="/images/Lblue.jpg" className="card-img-top" alt="Course Image" height={160}/>
              
              <div className="card-body">
              {/* text truncate to not have text expand the box */}
                <h6 className="wd-dashboard-course-title card-title text-truncate"> 
                CS7690 12369 Intro to Hacking
                </h6>
                <h5 className="wd-dashboard-course-title card-text text-truncate">
                CS7690.12369.2020410
                </h5>
                <h6 className="wd-dashboard-course-title card-text text-truncate">
                  202410_2 Spring 2024 Semester Full Term
                </h6>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
}

