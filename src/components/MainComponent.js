// This class component will be use to manage the states for all other components and the other components 
// will work as a presentational component which are implemented using function components
import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Book from './BookComponent';
import Course from './CourseComponent';
import Join from './JoinComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
class Main extends Component {

  constructor(props) {
    super(props);
    
  }
 

  render() {
  
    
    return (
        <div>
        <Header/>
        <Switch>
            <Route path='/home'  component={Home} />
            <Route exact path='/contactus' component={Contact} />} />
            <Route exact path='/join' component={Join} />} />
            <Route exact path='/books' component={Book} />} />
            <Route exact path='/courses' component={Course} />} />
            {/* Default rederect to home */}
            <Redirect to="/home" />
        </Switch>
        <Footer/>
        </div>
   
       
      
    );
  }
}

export default Main;