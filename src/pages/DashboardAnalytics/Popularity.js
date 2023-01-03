import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { popularityData } from "../../common/data/dashboardNFT";

// Import Chart


//SimpleBar
import SimpleBar from "simplebar-react";
import { Link } from 'react-router-dom';

const Popularity = () => {

    return (
        <React.Fragment>
            <Col>
                       <Card>
                    <CardHeader className="d-flex align-items-center">
                        <h6 className="card-title mb-0 flex-grow-1">KÍP TRỰC TRONG NGÀY</h6>
                        {/* <Link className="text-muted" to="/apps-nft-item-details">
                            See All <i className="ri-arrow-right-line align-bottom"></i>
                        </Link> */}
                    </CardHeader>
                    <CardBody>
                        <div className="table-responsive table-card">
                            <SimpleBar style={{ maxHeight: "365px" }}>
                                <ul className="list-group list-group-flush">
                                                                         
                                    {popularityData.map((item, key) => (
                                        <li key={key} className="list-group-item list-group-item-action">
                                            <div className="d-flex align-items-center">
                                                {/* <img src={item.img} alt="" className="avatar-xs object-cover rounded-circle" /> */}
                                                <div className="ms-3 flex-grow-1">
                                                    <Link to="#!" className="stretched-link">
                                                        <h6 className="fs-14 mb-1">{item.author}</h6>
                                                    </Link>
                                                    <p className="mb-0 text-muted">{item.price}</p>
                                                </div>
                                                <div className="ms-3 flex-grow-1">
                                                    <Link to="#!" className="stretched-link">
                                                        <h6 className="fs-14 mb-1">{item.author}</h6>
                                                    </Link>
                                                    <p className="mb-0 text-muted">{item.price}</p>
                                                </div>
                                                <div className="ms-3 flex-grow-1">
                                                    <Link to="#!" className="stretched-link">
                                                        <h6 className="fs-14 mb-1">{item.author}</h6>
                                                    </Link>
                                                    <p className="mb-0 text-muted">{item.price}</p>
                                                </div>
                                                {/* <div>
                                                    <h6>{item.price}</h6>
                                                </div>
                                                <div>
                                                    <h6>{item.price}</h6>
                                                </div> */}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </SimpleBar>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default Popularity;