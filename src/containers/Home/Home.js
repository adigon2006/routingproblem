import React,{Component} from 'react';
import {Route,NavLink,Switch,Redirect} from 'react-router-dom';
import Courses from './Courses/Courses';
import PageNotFound from '../../component/PageNotFound/PageNotFound';
// import Course from './Course/Course';
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

    
    
    
    
 
     <Switch>
     <Route path="/users" component={Users} />
     {/* <Route path="/courses/:courseId/:courseTitle" component={Course} /> */}
     {/* <Route path="/courses/:courseId/" component={Course} /> */}
     <Route path="/courses" component={Courses} />
     <Redirect from="/all-courses" to="/courses" />
     {/* <Redirect from="/home" exact to="/" />
     <Route render={() => <h1>Page Not Found</h1>} /> */}
     <Route component={PageNotFound}/>
     </Switch>
      </div>
     );
   } 
}

export default Home;


