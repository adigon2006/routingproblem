import React,{Component} from 'react';
import {Route,NavLink,Redirect,Switch} from 'react-router-dom';
import Courses from './Courses/Courses';
import Course from './Course/Course';
import Users from './Users/Users';
import './Home.css';
class Home extends Component{

   render(){
     return(
      <div className="Home">
          <ul>
        <li>
         <NavLink
          to="/users"
          exact
          activeClassName="active-link">
          Users
           </NavLink> 
         </li>  
         <li>
         <NavLink
          to="/courses"
          activeClassName="active-link"
          exact>
          Courses
           </NavLink> 
         </li> 
        </ul>

    
    
    
     {/* <Redirect from="/all-courses" to="/courses" /> */}
     {/* <Redirect from="/home" to="/" /> */}
     <Switch>
     <Route path="/users" component={Users} />
     <Route path="/courses/:courseId/:courseTitle" component={Course} />
     <Route path="/courses" exact component={Courses} />
     
     </Switch>
      </div>
     );
   } 
}

export default Home;


