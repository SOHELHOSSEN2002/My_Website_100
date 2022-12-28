import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Resume from "../../asset/image/My_Cv.pdf";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center footerSection">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Follow Me</h1>
                            <a className="socialLink" href="//www.facebook.com/md.sohelhossen.10236/"><FontAwesomeIcon  icon={faFacebook} /> Facebook</a><br/>
                            <a className="socialLink" href="//youtu.be/CSGiwf7KlrQ"><FontAwesomeIcon  icon={faYoutube} /> YouTube</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Address</h1>
                            <p className="serviceDescription" >Rakhaliya Bazar, Sader, Lakshmipur</p>
                            <p className="serviceDescription" > <FontAwesomeIcon  icon={faEnvelope} /> sohelhossen520@gmail.com</p>
                            <p className="serviceDescription" > <FontAwesomeIcon  icon={faPhone} /> +8801878700046</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Information</h1>
                            <a className="footerLink" href="#">About Me</a><br/>
                            <a  className="footerLink" href={Resume} download>My Resume</a><br/>
                            <a className="footerLink" href="#">Contact Me</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="serviceName">Legal</h1>
                            <a  className="footerLink" href="#">Refund Policy</a><br/>
                            <a className="footerLink" href="#">Terms And Condition</a><br/>
                            <a className="footerLink" href="#">Privacy Policy</a>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center copyrightSection">
                    <a className="copyrightLink" href="#">Sohel.com &copy; 2021-2022</a>
                </Container>

            </Fragment>
        );
    }
}

export default Footer;