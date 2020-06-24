import React,{Component} from 'react';
import {Button,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';



//Component retrus the header carousel
const HeaderSection = () =>{
    return (
        <div className="container-fluid main-header">
            {/* wrapAround will be use to display previous and next image */}
            <div class="header-carousel"  data-flickity='{ "wrapAround": true , "autoPlay":true}'>
            <div class="header-carousel-cell">
                <img
                    alt=""
                    className="header-image"
                    src="https://mobishaala-assets.s3.amazonaws.com/media/institute/60e05ca6-db8e-4e4a-96ac-93b7ab1f50bf/banner/image1567695708811.jpg"
                />
            </div>
            <div class="header-carousel-cell">
                <img  className="header-image" src="https://mobishaala-assets.s3.amazonaws.com/media/institute/60e05ca6-db8e-4e4a-96ac-93b7ab1f50bf/banner/image1559647354580.jpg" alt=""/>

            </div>
            <div class="header-carousel-cell">
                <img  className="header-image" src="https://mobishaala-assets.s3.amazonaws.com/media/institute/60e05ca6-db8e-4e4a-96ac-93b7ab1f50bf/banner/image1559640610634.jpg" alt=""/>

            </div>
            </div>
        </div>

    );
}

//Component returns book section
const BooksSection = () =>{
    return(
        <div className="container-fluid books-section">
            <div className="container">
            <div className="row">
                {/* Create two columns one having heading text and another having a group carousel */}
                <div className="col-12 col-md-2 books-section-heading">
                    <h1>Featured Books</h1>
                    <p>Prabha Publications</p>
                    <Button className="button" variant="primary">Explore Books</Button>
                </div>
                <div className="col-12 col-md-10">
                    <div class="books-carousel" data-flickity='{ "groupCells": true }'>
                    <div class="books-carousel-cell">
                        <img src="https://prabhaics.com/assets/b1.jpg" alt=""/>
                    </div>
                    <div class="books-carousel-cell">
                        <img src="https://prabhaics.com/assets/b2.jpg" alt=""/>
                    </div>
                    <div class="books-carousel-cell">
                        <img src="https://prabhaics.com/assets/b3.jpg" alt=""/>
                    </div>
                    <div class="books-carousel-cell">
                        <img src="https://prabhaics.com/assets/b4.jpg" alt=""/>
                    </div>
                    <div class="books-carousel-cell">
                        <img src="https://prabhaics.com/assets/b1.jpg" alt=""/>
                    </div>
                    <div class="books-carousel-cell">
                        <img src="https://prabhaics.com/assets/b2.jpg" alt=""/>
                    </div>
                    
                    </div>
                </div>
            </div>
                <center><Link to="/books"><a className="box-btn button-mobile">Explore Books</a></Link></center>
            </div>
        </div>
    );
}


// Component returns course section
const CoursesSection = () =>{
    return(
        <div className="container courses-section">
            <center>
            <div className="heading">
            <p className="section-subtitle">Populer courses</p>
            <h1 className="section-title">Special Courses</h1>
            <hr/>
            </div>
            </center>
            <div className="row">
                <div className="col-12 col-md-4">
                    <Card>
                    <Card.Img variant="top" src="https://prabhaics.com/assets/cc1.jpg" style={{height:"250px"}} />
                    <Card.Body>
                        <a className="title-button">Pub Ad | UPSC</a>
                        <Card.Title className="course-title">Pub Ad | UPSC UPPCS BPSC</Card.Title>
                        <Card.Text className="course-description">
                        We provide online and offline courses for Pub Ad optional subject, UPSC UPPCS BPSC, in the form of Classroom Lecture, Study material and Test Series..
                        </Card.Text>
                        <div className="author-info">
                            <div className="author-img">
                                <img src="https://cdn.dribbble.com/users/1824846/screenshots/5087861/girl_character__avtar_.png" alt=""/>
                            </div>
                            <div className="author-info-text">
                                <p>Conducted by</p>
                                <h5>Name</h5>
                            </div>
                            <div className="join-button">
                                <Link to="/join"><Button className="button" variant="primary">Join now</Button></Link>
                            </div>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                <Card>
                    <Card.Img variant="top" src="https://prabhaics.com/assets/cc2.jpg" style={{height:"250px"}} />
                    <Card.Body>
                        <a className="title-button" >Ethics</a>
                        <Card.Title className="course-title">Ethics | UPSC UPPCS</Card.Title>
                        <Card.Text className="course-description">
                        We provide online and offline courses for Pub Ad optional subject, UPSC UPPCS BPSC, in the form of Classroom Lecture, Study material and Test Series..
                        </Card.Text>
                        <div className="author-info">
                            <div className="author-img">
                                <img src="https://cdn.dribbble.com/users/1824846/screenshots/5087861/girl_character__avtar_.png" alt=""/>
                            </div>
                            <div className="author-info-text">
                                <p>Conducted by</p>
                                <h5>Name</h5>
                            </div>
                            <div className="join-button">
                                <Link to="/join"><Button className="button" variant="primary">Join now</Button></Link>
                            </div>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-4">
                <Card>
                    <Card.Img variant="top" src="https://prabhaics.com/assets/cc3.jpg" style={{height:"250px"}} />
                    <Card.Body>
                        <a className="title-button" >Disaster Manangement</a>
                        <Card.Title className="course-title">Disaster Management | UPSC UPPCS</Card.Title>
                        <Card.Text className="course-description">
                        We provide online and offline courses for Pub Ad optional subject, UPSC UPPCS BPSC, in the form of Classroom Lecture, Study material and Test Series..
                        </Card.Text>
                        <div className="author-info">
                            <div className="author-img">
                                <img src="https://cdn.dribbble.com/users/1824846/screenshots/5087861/girl_character__avtar_.png" alt=""/>
                            </div>
                            <div className="author-info-text">
                                <p>Conducted by</p>
                                <h5>Name</h5>
                            </div>
                            <div className="join-button">
                                <Link to="/join"><Button className="button" variant="primary">Join now</Button></Link>
                            </div>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
            </div>
            <center>
            <Link to="/courses"><a className="box-btn">  View all Courses</a></Link></center>
        </div>
    );
}


// /Component returns Video section
const VideosSection = () => {
    return (
        <div className="container-fluid video-section">
            
                <div class="video-carousel" data-flickity>
                <div class="video-carousel-cell">
                    <div className="row">
                        <div className="col-12 col-md-6 video-section-text">
                            <h2>Pub. Ad. Strategy</h2>
                            <h3>BPSC 65 Mains</h3>
                            <p>Atul lohiya sir's lecture on Pub. Ad. Strategy for BPSC 65 Mains.</p>
                            <Button className="button" variant="primary" style={{}}>Join Classes</Button>
                        </div>
                        <div className="col-12 col-md-6">
                            <iframe className="video-iframe" width="480" height="345" src="https://www.youtube.com/embed/xKwRrPbReMw" style={{border:"none"}} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </div>
                <div class="video-carousel-cell">
                    <div className="row">
                        <div className="col-12 col-md-6 video-section-text">
                            <h2>Mugal Kaleen Administration</h2>
                            <h3>UPSC 2020</h3>
                            <p>Atul Lohiya sir's lecture on Mugal Kaleen Administration for UPSC 2020</p>
                            <Button className="button" variant="primary" style={{}}>Join Classes</Button>
                        </div>
                        <div className="col-12 col-md-6">
                            <iframe  className="video-iframe" width="480" height="345" src="https://www.youtube.com/embed/TOlnpKopaDo" frameborder="0" style={{border:"none"}} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div class="video-carousel-cell">
                <div className="row">
                        <div className="col-12 col-md-6 video-section-text">
                            <h2>Mitigation - Disaster Management</h2>
                            <h3>UPSC 2020</h3>
                            <p>Akashi Lohiya madam's Lecture on Mitigation - Disaster Management for UPSC 2020</p>
                            <Button className="button" variant="primary" style={{}}>Join Classes</Button>
                        </div>
                        <div className="col-12 col-md-6">
                            <iframe  className="video-iframe" width="480" height="345" src="https://www.youtube.com/embed/2WhIONVlSgs" frameborder="0" style={{border:"none"}} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            
                        </div>
                    </div>
                </div>
                </div>
             
        </div>
    );
}

function Home(){

        return(
            <div>
                {/* include all the components in a home component  */}
                <HeaderSection/>
                <BooksSection/>
                <CoursesSection/>
                <VideosSection/>
            </div>
        );
}

// export home component
export default Home;