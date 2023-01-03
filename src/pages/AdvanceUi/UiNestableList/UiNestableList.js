import React,  { useState } from 'react';
import { Container, Row } from 'reactstrap';
//import Components
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Card, CardBody,CardHeader,Label , Col, Nav, NavItem, NavLink, TabContent, TabPane,Table,Button,Input } from "reactstrap";
import classnames from "classnames";
import {  AjaxDatatables,AjaxDatatables1 } from './datatableCom';
// Import Nestable Lists


const UiNestableList = () => {
    const [animationNavTab, setanimationNavTab] = useState("1");
    const animationNavToggle = (tab) => {
        if (animationNavTab !== tab) {
            setanimationNavTab(tab);
        }
    };
    // const [animationNavTab1, setanimationNavTab1] = useState("1");
    // const animationNavToggle1 = (tab) => {
    //     if (animationNavTab1 !== tab) {
    //         setanimationNavTab1(tab);
    //     }
    // };
document.title="Tình hình chung | Hệ thống IOC";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Tình hình chung" pageTitle="Cập nhật tình hình" />
                    <Row>
                    <Row><Card className="card-height-100">
                                <CardBody>
                                    {/* <p className="text-muted">Use <code>animation-nav</code> class to create animated tabs.</p> */}

                                    <Nav pills className="nav nav-pills animation-nav nav-justified gap-2 mb-3">
                                        <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: animationNavTab === "1", })} onClick={() => { animationNavToggle("1"); }} >
                                          Tình hình trong ngày
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: animationNavTab === "2", })} onClick={() => { animationNavToggle("2"); }} >
                                           Lịch công tác
                                            </NavLink>
                                        </NavItem>
                                        {/* <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: animationNavTab === "3", })} onClick={() => { animationNavToggle("3"); }} >
                                           
                                            </NavLink>
                                        </NavItem>                          */}
                                    </Nav>

                                    <TabContent activeTab={animationNavTab} className="text-muted">
                                        <TabPane tabId="1" id="animation-home">
                                        {/* <UsersByDevice /> */}
                                        <Row className="gy-4">
                                        <Col xxl={3} md={6}>
                                                <div>
                                                    <Label htmlFor="exampleFormControlTextarea5" className="form-label">Tình hình trong ngày</Label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea5" rows="3"></textarea>
                                                </div>
                                              
                                            </Col>
                                            <Col xxl={3} md={6}>
                                              
                                            <div>
                                                    <Label htmlFor="exampleFormControlTextarea5" className="form-label">Tình hình thời tiết</Label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea5" rows="3"></textarea>
                                                </div>
                                            
                                            </Col>
                                            <Col lg={6} >
                                            <select className="form-control form-select m</option>b-3" aria-label="Default select example">
                                                    <option >Trạng thái SSCĐ </option>
                                                    <option value="1">Thường xuyên</option>
                                                    <option value="2">Tăng cường</option>
                                                    <option value="3">Lên cao </option>
                                                    <option value="3">Toàn bộ</option>
                                                </select>
                                            </Col>
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

export default UiNestableList;
