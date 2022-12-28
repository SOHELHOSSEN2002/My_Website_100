import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import course1 from "../../asset/image/701.jpg";
import course2 from "../../asset/image/702.jpg";
import course3 from "../../asset/image/703.jpg";
import course4 from "../../asset/image/704.jpg";
class Courses extends Component {
    render() {
        return (
            <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">OUR COURSES</h1>
                        <Row>
                            <Col lg={6} md={12} sm={12} className="p-2">
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="courseImg" src={course1}/>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="text-justify courseTitle">PYTHON DEVELOPMENT</h5>
                                        <p className="text-justify courseDes">Python is a popular general-purpose programming language. It is used in machine learning, web development, desktop applications, and many other fields.</p>
                                        <a className="courseDetails float-left" href="#">Details</a>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6} md={12} sm={12} className="p-2">
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="courseImg"  src={course2}/>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="text-justify courseTitle">REACT DEVELOPMENT</h5>
                                        <p className="text-justify courseDes" >One of the top benefits of React is how easy it is to grasp, particularly if you already are a pro at JavaScript. You can install React and be up and </p>
                                        <a  className="courseDetails float-left" href="#">Details</a>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6} md={12} sm={12} className="p-2">
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="courseImg" src={course3}/>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="text-justify courseTitle">GRAPHICS DESIGN</h5>
                                        <p className="text-justify courseDes" >Graphic design helps to communicate effectively with the audience because visual aids are better at conveying ideas. Compared with text, creative.</p>
                                        <a  className="courseDetails float-left" href="#">Details</a>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6} md={12} sm={12} className="p-2">
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="courseImg"  src={course4}/>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="text-justify courseTitle">WEB DESIGN</h5>
                                        <p className="text-justify courseDes" >Web design is important because good web design helps focus users' gaze and guide them where they should look. Your design can draw attention to.</p>
                                        <a  className="courseDetails float-left" href="#">Details</a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
            </Fragment>
        );
    }
}
export default Courses;