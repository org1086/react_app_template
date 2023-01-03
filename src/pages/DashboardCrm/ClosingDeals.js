import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { closingDeals } from "../../common/data";

const ClosingDeals = () => {
    return (
        <React.Fragment>
            <Col xxl={7}>
                <Col lg={6} >
                <Card className="card-height-100">
                    <CardHeader className="align-items-center d-flex">
                        {/* <h4 className="card-title mb-0 flex-grow-1">Closing Deals</h4>
                        <div className="flex-shrink-0">
                            <select className="form-select form-select-sm">
                                <option defaultValue="">Closed Deals</option>
                                <option value="1">Active Deals</option>
                                <option value="2">Paused Deals</option>
                                <option value="3">Canceled Deals</option>
                            </select>
                        </div> */}
                    </CardHeader>
                    <CardBody>
                        <div className="table-responsive">
                            <table className="table table-bordered table-nowrap align-middle mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{ width: "30%" }}>Bài viết, Video</th>
                                        <th   className='text-secondary'scope="col" style={{ width: "30%" }}>Tích cực, Trung lập</th>
                                        <th className='text-danger'scope="col" style={{ width: "20%" }}>Tiêu cực</th>
                                        <th className='text-warning' scope="col" style={{ width: "20%" }}>Tương tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>17,815</td>
                                        <td className='text-secondary'>17,753</td>
                                        <td  className='text-danger'>62</td>
                                        <td className='text-warning'>508,000</td>
                                    </tr>
                                </tbody>
                                {/* <tbody>
                                    {(closingDeals || []).map((item, key) => (
                                        <tr key={key}>
                                            <td>{item.dealName}</td>
                                            <td><img src={item.img} alt="" className="avatar-xs rounded-circle me-2" />
                                                <Link to="#" className="text-body fw-medium">{item.salesRep}</Link></td>
                                            <td>${item.amount}K</td>
                                            <td>{item.closeDate}</td>
                                        </tr>
                                    ))}
                                </tbody> */}
                            </table>
                        </div>
                    </CardBody>
                </Card>
                </Col>
            </Col>
        </React.Fragment>
    );
};

export default ClosingDeals;