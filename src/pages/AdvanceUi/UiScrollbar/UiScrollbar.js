import React,{ useState } from 'react';
import { Badge, Button, Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Label , Nav, NavItem, NavLink, TabContent, TabPane,Input } from "reactstrap";
// Import Scroll Bar - SimpleBar
import SimpleBar from 'simplebar-react';

//import Components
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import classnames from "classnames";
import {  AjaxDatatables,AjaxDatatables1 } from './datatableCom';


const UiScrollbar = () => {
    const [animationNavTab, setanimationNavTab] = useState("1");
    const animationNavToggle = (tab) => {
        if (animationNavTab !== tab) {
            setanimationNavTab(tab);
        }
    };
document.title="Tình hình hoạt động VKTB | Hệ thống IOC";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Tình hình hoạt động VKTB" pageTitle="Cập nhật tình hình" />

                    <Row>
                    <Row><Card className="card-height-100">
                                <CardBody>
                                    {/* <p className="text-muted">Use <code>animation-nav</code> class to create animated tabs.</p> */}

                                    <Nav pills className="nav nav-pills animation-nav nav-justified gap-2 mb-3">
                                        <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: animationNavTab === "1", })} onClick={() => { animationNavToggle("1"); }} >
                                            Tình hình vũ khí trang bị 
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: animationNavTab === "2", })} onClick={() => { animationNavToggle("2"); }} >
                                       Vũ khí mạng, Trang bị phòng thủ mạng
                                            </NavLink>
                                        </NavItem>
         
                                    </Nav>

                                    <TabContent activeTab={animationNavTab} className="text-muted">
                                        <TabPane tabId="1" id="animation-home">
                                        {/* <UsersByDevice /> */}
                                        <Row className="gy-4">
                                     
                                            </Row>

                                            <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h5 className="card-title mb-0">Tình hình chung theo ngày </h5>
                                </CardHeader>
                                <CardBody>
                                    <AjaxDatatables />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                                        </TabPane>

                                        <TabPane tabId="2" id="animation-profile">
                                        <Row className="gy-4">
                                        <Col xxl={3} md={6}>
                                                <div>
                                                    <Label htmlFor="exampleInputdate" className="form-label">Ngày </Label>
                                                    <Input type="date" className="form-control" id="exampleInputdate" />
                                                </div>
                                            </Col>
                                            <Col xxl={3} md={6}>
                                                <div>
                                                    <Label htmlFor="formtextInput" className="form-label">Nội dung</Label>
                                                    <Input type="text" className="form-control" id="formtextInput" />
                                                    <div id="passwordHelpBlock" className="form-text">
                                                     
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xxl={3} md={6}>
                                                <div>
                                                    <Label htmlFor="formtextInput" className="form-label">Thành phần</Label>
                                                    <Input type="text" className="form-control" id="formtextInput" />
                                                    <div id="passwordHelpBlock" className="form-text">
                                                     
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xxl={3} md={6}>
                                                <div>
                                                    <Label htmlFor="formtextInput" className="form-label">Địa điểm</Label>
                                                    <Input type="text" className="form-control" id="formtextInput" />
                                                    <div id="passwordHelpBlock" className="form-text">
                                                     
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xxl={3} md={6}>
                                                <div>
                                                    <Label htmlFor="formtextInput" className="form-label">Chủ trì</Label>
                                                    <Input type="text" className="form-control" id="formtextInput" />
                                                    <div id="passwordHelpBlock" className="form-text">
                                                     
                                                    </div>
                                                </div>
                                            </Col> 
                                            </Row>
                                            <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h5 className="card-title mb-0">Lịch công tác </h5>
                                </CardHeader>
                                <CardBody>
                                    <AjaxDatatables1 />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                                        </TabPane>
                                       
                                      
                                    </TabContent>
                                </CardBody>
                            </Card></Row>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    );
};

export default UiScrollbar;
