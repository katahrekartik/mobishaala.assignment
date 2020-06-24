import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const BreadCrumb = ()=> {
    return(
        <div className="container-fluid breadcrumb">
            <div className="container">
                <div className="breadcrumb-innertext">
                    <h2>Contact us</h2>
                    <p>
                        Home
                        <span> / </span>
                        Contact us
                    </p>
                </div>
            </div>
        </div>
    );
}


function Contact(props) {
    return(
        <React.Fragment>
        <BreadCrumb/>
        <div className="container-fluid join-classes">
             <div className="container">
                 <div className="row">
                    <div className="col-12 col-md-6 join-classes-text-img">
                        <div className="join-classes-text">
                            <h2>Conatct us</h2>
                            <h3>Delhi Office</h3>
                            <p><span>Address: </span>
                            Virat Bhawan Dr. Mukherjee Nagar,
                            </p>
                            <p><span>Phone: </span>
                            +91 9810651005
                            </p>
                            <p><span>Email: </span>
                            atulklohiya@gmail.com
                            </p>
                        </div>
                      
                    </div>
                    <div className="col-12 col-md-6">
                       
                       <iframe src="https://maps.google.com/maps?q=28.711291%2C%2077.215991&center=28.711291,77.215991&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" frameborder="0"></iframe>
                    </div>
                 </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Contact;