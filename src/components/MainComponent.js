import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
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
    const HomePage = () => {
        return(
            <Home 
          />
        );
      }
    
    return (
        <div>
        <Header/>
        <Switch>
            <Route path='/home'  component={HomePage} />
            <Route exact path='/contactus' component={Contact} />} />
            <Route exact path='/join' component={Join} />} />
            <Route exact path='/books' component={Book} />} />
            <Route exact path='/courses' component={Course} />} />
            <Redirect to="/home" />
        </Switch>
        <Footer/>
        </div>
   
       
      
    );
  }
}

export default Main;