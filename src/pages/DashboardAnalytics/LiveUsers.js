import React, { useState, useEffect } from 'react';
import { Card, CardBody,CardHeader, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane,Table,Button } from "reactstrap";
import PreviewCardHeader from '../../Components/Common/PreviewCardHeader';
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { CountriesCharts } from './DashboardAnalyticsCharts';
import { Link } from 'react-router-dom';
import classnames from "classnames";
import UsersByDevice from './UsersByDevice';
import {
      DistributedColumn,
   } from "../../pages/Charts/ApexCharts/ColumnCharts/ColumnCharts";
   import {
    BorderedTables,
    
} from "../../pages/Tables/BasicTables/BasicTablesCode";

import Vector from './VectorMap';
import { getCountryChartsData } from "../../store/dashboardAnalytics/action";

const LiveUsers = () => {
    const dispatch = useDispatch();

    const [countryData, setcountryData] = useState([]);
    const [periodType, setPeriodType] = useState("halfyearly");

    const { chartData } = useSelector(state => ({
        chartData: state.DashboardAnalytics.chartData
    }));

    const [animationNavTab, setanimationNavTab] = useState("1");
    const animationNavToggle = (tab) => {
        if (animationNavTab !== tab) {
            setanimationNavTab(tab);
        }
    };
    const [animationNavTab1, setanimationNavTab1] = useState("1");
    const animationNavToggle1 = (tab) => {
        if (animationNavTab1 !== tab) {
            setanimationNavTab1(tab);
        }
    };
    const [animationNavTab2, setanimationNavTab2] = useState("1");
    const animationNavToggle2 = (tab) => {
        if (animationNavTab2 !== tab) {
            setanimationNavTab2(tab);
        }
    };
    useEffect(() => {
        setcountryData(chartData);
    }, [chartData]);

    const onChangeChartPeriod = pType => {
        setPeriodType(pType);
        dispatch(getCountryChartsData(pType));
    };

    useEffect(() => {
        dispatch(getCountryChartsData("halfyearly"));
    }, [dispatch]);
    return (
        <React.Fragment>
            <Col xxl={7}>
                <Row>
                <div className="card-header align-items-center d-flex">
                                <h4 className="card-title mb-0 flex-grow-1">ĐIỀU HÀNH TÁC CHIẾN</h4>
                               
                            </div>
                </Row>
                <Row  >
                       <Col lg={6} >
                            {/* <h5 className="mb-3">Animation Nav</h5> */}
                            <Card className="card-height-60">
                                <CardBody>
                                    {/* <p className="text-muted">Use <code>animation-nav</code> class to create animated tabs.</p> */}

                                    <Nav pills className="nav nav-pills animation-nav nav-justified gap-2 mb-3">
                                        <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: animationNavTab === "1", })} onClick={() => { animationNavToggle("1"); }} >
                                              Tin trong ngày
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: animationNavTab === "2", })} onClick={() => { animationNavToggle("2"); }} >
                                              Tin theo tuần
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: animationNavTab === "3", })} onClick={() => { animationNavToggle("3"); }} >
                                                Tin theo tháng
                                            </NavLink>
                                        </NavItem>                                     
                                    </Nav>

                                    <TabContent activeTab={animationNavTab} className="text-muted">
                                        <TabPane tabId="1" id="animation-home">
                                        <UsersByDevice />
                                        </TabPane>

                                        <TabPane tabId="2" id="animation-profile">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <i className="ri-checkbox-circle-fill text-success"></i>
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.
                                                </div>
                                            </div>
                                            <div className="d-flex mt-2">
                                                <div className="flex-shrink-0">
                                                    <i className="ri-checkbox-circle-fill text-success"></i>
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                                                </div>
                                            </div>
                                        </TabPane>

                                        <TabPane tabId="3" id="animation-messages" >
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <i className="ri-checkbox-circle-fill text-success"></i>
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your own style choices.
                                                </div>
                                            </div>
                                            <div className="d-flex mt-2">
                                                <div className="flex-shrink-0">
                                                    <i className="ri-checkbox-circle-fill text-success"></i>
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.
                                                </div>
                                            </div>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>                      
                       <Col lg={6}>
                    
                    
                            {/* <h5 className="mb-3">Animation Nav</h5> */}
                            <Card className="card-height-60">
                                <CardBody>
                                    {/* <p className="text-muted">Use <code>animation-nav</code> class to create animated tabs.</p> */}

                                    <Nav pills className="nav nav-pills animation-nav nav-justified gap-2 mb-3">
                                        <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: animationNavTab1 === "1", })} onClick={() => { animationNavToggle1("1"); }} >
                                             Khối cơ quan
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: animationNavTab1 === "2", })} onClick={() => { animationNavToggle1("2"); }} >
                                             Khối đơn vị
                                            </NavLink>
                                        </NavItem>
                                                                          
                                    </Nav>

                                    <TabContent activeTab={animationNavTab1} className="text-muted">
                                        <TabPane tabId="1" id="animation-home">
                                        <Col >
                            <Card>
                                <CardHeader>
                                    {/* <h4 className="card-title mb-0">Distributed Columns Chart</h4> */}
                                </CardHeader>
                                <CardBody>
                                    <DistributedColumn dataColors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-dark", "--vz-info"]' />
                                </CardBody>
                            </Card>
                        </Col>
                                        </TabPane>

                                        <TabPane tabId="2" id="animation-profile">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <i className="ri-checkbox-circle-fill text-success"></i>
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.
                                                </div>
                                            </div>
                                            <div className="d-flex mt-2">
                                                <div className="flex-shrink-0">
                                                    <i className="ri-checkbox-circle-fill text-success"></i>
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                                                </div>
                                            </div>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>   
                                          
                </Row>
               <Row>
               <Col >
                    <Card>
                                <CardBody>
                                    {/* <p className="text-muted">Use <code>animation-nav</code> class to create animated tabs.</p> */}

                                    <Nav pills className="nav nav-pills animation-nav nav-justified gap-2 mb-3">
                                        <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: animationNavTab2 === "1", })} onClick={() => { animationNavToggle2("1"); }} >
                                              Tin trong ngày
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: animationNavTab2 === "2", })} onClick={() => { animationNavToggle2("2"); }} >
                                              Tin các ngày trước
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: animationNavTab2 === "3", })} onClick={() => { animationNavToggle2("3"); }} >
                                             Cảnh báo từ hệ thống giám sát
                                            </NavLink>
                                        </NavItem>                                     
                                    </Nav>

                                    <TabContent activeTab={animationNavTab2} className="text-muted">
                                        <TabPane tabId="1" id="animation-home">
                                        <Card>
                                {/* <PreviewCardHeader title="Bordered Tables"/> */}

                                    <CardBody>
                                        {/* <p className="text-muted">Use <code>table-bordered</code> class to show  borders on all sides of the table and cells.</p>                                         */}
                                        <Row className="g-4 mb-3">
                                            <Col className="col-sm-auto">
                                                <div>
                                                    <Button color="success" className="add-btn me-1" id="create-btn"><i className=" ri-edit-2-line align-bottom me-1"></i> Sửa</Button>
                                                    <Button color="danger" className="add-btn me-1" id="create-btn"><i className=" ri-delete-bin-2-line align-bottom me-1"></i> Xóa</Button>
                                                    <Button color="warning" className="add-btn me-1" id="create-btn"><i className=" ri-clockwise-line align-bottom me-1"></i> Giao nhiệm vụ</Button>
                                                    <Button color="secondary" className="add-btn me-1" id="create-btn"><i className="  ri-file-list-line align-bottom me-1"></i> Báo cáo kết quả</Button>
                                                    <Button color="success" className="add-btn me-1" id="create-btn"><i className="   ri-file-download-line align-bottom me-1"></i> Xuất Excel</Button>
                                                    <Button color="primary" className="add-btn me-1" id="create-btn"><i className="   ri-find-replace-line align-bottom me-1"></i> Lọc</Button>
                                                </div>
                                            </Col>
                                            <Col className="col-sm">
                                                <div className="d-flex justify-content-sm-end">
                                                    <div className="search-box ms-2">
                                                        <input type="text" className="form-control search" placeholder="Search..." />
                                                        <i className="ri-search-line search-icon"></i>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="live-preview">
                                            <div className="table-responsive">
                                                <Table className="table-bordered align-middle table-nowrap mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">ID</th>
                                                            <th scope="col">Tên nhiệm vụ</th>
                                                            <th scope="col">Người giao</th>
                                                            <th scope="col">Ngày giao</th>
                                                            <th scope="col">Thời gian Thực hiện</th>
                                                            <th scope="col">Loại</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="fw-medium">01</td>
                                                            <td>Implement new UX</td>
                                                             <td>Lanora Sandoval</td>
                                                             <td>12/12/2022</td>
                                                             <td>12/12/2022</td>
                                                            <td>
                                                                <div className="dropdown">
                                                                    <Link to="#" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i className="ri-more-2-fill"></i>
                                                                    </Link>
                                                                    
                                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                                                        <li><Link className="dropdown-item" to="#">View</Link></li>
                                                                        <li><Link className="dropdown-item" to="#">Edit</Link></li>
                                                                        <li><Link className="dropdown-item" to="#">Delete</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-medium">02</td>
                                                            <td>Design syntax</td>
                                                                                                                        <td>Calvin Garrett</td>
                                                            <td>12/12/2022</td>
                                                            <td>12/12/2022</td>
                                                            <td>
                                                                <div className="dropdown">
                                                                    <Link to="#" role="button" id="dropdownMenuLink2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i className="ri-more-2-fill"></i>
                                                                    </Link>    
                                                                  
                                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                                                                        <li><Link className="dropdown-item" to="#">View</Link></li>
                                                                        <li><Link className="dropdown-item" to="#">Edit</Link></li>
                                                                        <li><Link className="dropdown-item" to="#">Delete</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-medium">03</td>
                                                            <td>Configurable resources</td>
                                                          
                                                            <td>Florence Guzman</td>
                                                            <td>12/12/2022</td>
                                                            <td>12/12/2022</td>
                                                            <td>
                                                                <div className="dropdown">
                                                                    <Link to="#" role="button" id="dropdownMenuLink3" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i className="ri-more-2-fill"></i>
                                                                    </Link>
                                                                  
                                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink3">
                                                                        <li><Link className="dropdown-item" to="#">View</Link></li>
                                                                        <li><Link className="dropdown-item" to="#">Edit</Link></li>
                                                                        <li><Link className="dropdown-item" to="#">Delete</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-medium">04</td>
                                                            <td>Implement extensions</td>
                                                           
                                                            <td>Maritza Blanda</td>
                                                            <td>12/12/2022</td> <td>12/12/2022</td>
                                                            <td>
                                                                <div className="dropdown">
                                                                    <Link to="#" role="button" id="dropdownMenuLink4" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i className="ri-more-2-fill"></i>
                                                                    </Link>
                                                                  
                                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink4">
                                                                        <li><Link className="dropdown-item" to="#">View</Link></li>
                                                                        <li><Link className="dropdown-item" to="#">Edit</Link></li>
                                                                        <li><Link className="dropdown-item" to="#">Delete</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </div>
                                        <div className="d-none code-view">
                                        <pre className="language-markup" style={{"height": "275px"}}>
                                            <code>
                                            <BorderedTables/>
                                            </code>
                                            </pre>
                                        </div>
                                    </CardBody>
                                </Card>
                                        </TabPane>

                                        <TabPane tabId="2" id="animation-profile">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <i className="ri-checkbox-circle-fill text-success"></i>
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.
                                                </div>
                                            </div>
                                            <div className="d-flex mt-2">
                                                <div className="flex-shrink-0">
                                                    <i className="ri-checkbox-circle-fill text-success"></i>
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                                                </div>
                                            </div>
                                        </TabPane>

                                        <TabPane tabId="3" id="animation-messages" >
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <i className="ri-checkbox-circle-fill text-success"></i>
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your own style choices.
                                                </div>
                                            </div>
                                            <div className="d-flex mt-2">
                                                <div className="flex-shrink-0">
                                                    <i className="ri-checkbox-circle-fill text-success"></i>
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.
                                                </div>
                                            </div>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                     </Card>
                    </Col> 
               </Row>
               <Row><Card className="card-height-100">
                                <CardBody>
                                    {/* <p className="text-muted">Use <code>animation-nav</code> class to create animated tabs.</p> */}

                                    <Nav pills className="nav nav-pills animation-nav nav-justified gap-2 mb-3">
                                        <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: animationNavTab === "1", })} onClick={() => { animationNavToggle("1"); }} >
                                            Giám sát định danh cài đặt MiAV
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: animationNavTab === "2", })} onClick={() => { animationNavToggle("2"); }} >
                                            Giám sát hạ tầng trọng yếu quốc gia
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: animationNavTab === "3", })} onClick={() => { animationNavToggle("3"); }} >
                                           
                                            </NavLink>
                                        </NavItem>                         
                                    </Nav>

                                    <TabContent activeTab={animationNavTab} className="text-muted">
                                        <TabPane tabId="1" id="animation-home">
                                        <UsersByDevice />
                                        </TabPane>

                                        <TabPane tabId="2" id="animation-profile">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <i className="ri-checkbox-circle-fill text-success"></i>
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.
                                                </div>
                                            </div>
                                            <div className="d-flex mt-2">
                                                <div className="flex-shrink-0">
                                                    <i className="ri-checkbox-circle-fill text-success"></i>
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                                                </div>
                                            </div>
                                        </TabPane>
                                        <TabPane tabId="3" id="animation-profile">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <i className="ri-checkbox-circle-fill text-success"></i>
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.
                                                </div>
                                            </div>
                                            <div className="d-flex mt-2">
                                                <div className="flex-shrink-0">
                                                    <i className="ri-checkbox-circle-fill text-success"></i>
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                                                </div>
                                            </div>
                                        </TabPane>
                                      
                                    </TabContent>
                                </CardBody>
                            </Card></Row>
            </Col>
        </React.Fragment>
    );
};

export default LiveUsers;