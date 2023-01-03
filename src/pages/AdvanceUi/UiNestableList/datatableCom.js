import React, { useState, useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import { DropdownItem, DropdownMenu, DropdownToggle, Input, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';

const AjaxDatatables = () => {
    const columns = [
        {
            name: <span className='font-weight-bold fs-13'>TT</span>,
            selector: row => row.id,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Ngày báo cáo</span>,
            selector: row => row.startDate1,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Người nhập</span>,
            selector: row => row.name,
            sortable: true
        },

        {
            name: <span className='font-weight-bold fs-13'>Thời gian nhập</span>,
            selector: row => row.startDate1,
            sortable: true
        },
   
        {
            name: <span className='font-weight-bold fs-13'>Tình hình chính trị</span>,
            selector: row => row. extn,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Tình hình thời tiết</span>,
            selector: row => row. extn,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Trạng thái SSCĐ</span>,
            selector: row => row. extn,
            sortable: true
        },
     
       
        // {
        //     name: <span className='font-weight-bold fs-13'>Nguyên nhân</span>,
        //     selector: row => row.extn,
        //     sortable: true
        // },
        // {
        //     name: <span className='font-weight-bold fs-13'>tình trạng xử lý</span>,
        //     selector: row => row.salary,
        //     sortable: true
        // },
        // {
        //     name: <span className='font-weight-bold fs-13'>thời gian xử lý xong</span>,
        //     selector: row => row.startDate2,
        //     sortable: true
        // },
        // {
        //     name: <span className='font-weight-bold fs-13'>thời gian xử lý (giờ) </span>,
        //     selector: row =>  row.priority,
        //     sortable: true
        // },
        // {
        //     name: <span className='font-weight-bold fs-13'>đơn vị xử lý </span>,
        //     selector: row =>  row.name2,
        //     sortable: true
        // },
        // {
        //     name: <span className='font-weight-bold fs-13'>Số lượng </span>,
        //     selector: row =>  row.priority4,
        //     sortable: true
        // },
        // {
        //     name: <span className='font-weight-bold fs-13'>đơn vị quản lý </span>,
        //     selector: row =>  row.name2,
        //     sortable: true
        // },
        // {
        //     name: <span className='font-weight-bold fs-13'>Thời gian</span>,
        //     selector: row => row.startDate2,
        //     sortable: true
        // },
        // {
        //     name: <span className='font-weight-bold fs-13'>Tổng số </span>,
        //     selector: row =>  row.priority4,
        //     sortable: true
        // },
        // {
        //     name: <span className='font-weight-bold fs-13'>số lượng tăng trong ngày </span>,
        //     selector: row =>  row.priority5,
        //     sortable: true
        // },

    ];

    const data1 = useMemo(() =>[
        {
            id: 1,     
            startDate: "2011/04/25",
            name: "5421",
            extn: "5421",            
            salary: "320,800"
        },
        {
            id: 2,
          
           
            startDate: "2011/07/25",
            extn: "8422",
            salary: "170,750"
        },
        {
            id: 3,
            
            startDate: "2009/01/12",
            extn: "1562",
            salary: "86,000"
        },
        {
            id: 4,
            startDate: "2012/03/29",
            extn: "6224",
            salary: "$433,060"
        },
        {
            id: 5,
                    startDate: "2008/11/28",
            extn: "5407",
            salary: "162,700"
        },
        {
            id: 6,
         
            startDate: "2012/12/02",
            extn: "4804",
            salary: "372,000"
        },
        {
            id: 7,
        
            startDate: "2012/08/06",
            extn: "9608",
            salary: "$37,500"
        },
        {
            id: 8,
        
            startDate: "2010/10/14",
            extn: "6200",
            salary: "327,900"
        },
        {
            id: 9,
           
            startDate: "2009/09/15",
            extn: "2360",
            salary: "205,500"
        },
        {
            id: 10,
          
        
            startDate: "2008/12/13",
            extn: "1667",
            salary: "103,600",
        },
        // {
        //     id: 11,
        //     name: "Jena Gaines",
        //     position: "Office Manager",
        //     office: "London",
        //     extn: "3814",
        //     startDate: "2008/12/19",
        //     salary: "$90,560",
        // },
        // {
        //     id: 12,
        //     name: "Quinn Flynn",
        //     position: "Support Lead",
        //     office: "Edinburgh",
        //     extn: "9497",
        //     startDate: "2013/03/03",
        //     salary: "$342,000",
        // },
        // {
        //     id: 13,
        //     name: "Charde Marshall",
        //     position: "Regional Director",
        //     office: "San Francisco",
        //     extn: "6741",
        //     startDate: "2008/10/16",
        //     salary: "$470,600"
        // },
        // {
        //     id: 14,
        //     name: "Haley Kennedy",
        //     position: "Senior Marketing Designer",
        //     office: "London",
        //     extn: "3597",
        //     startDate: "2012/12/18",
        //     salary: "$313,500"
        // },
        // {
        //     id: 15,
        //     name: "Tatyana Fitzpatrick",
        //     position: "Regional Director",
        //     office: "London",
        //     extn: "1965",
        //     startDate: "2010/03/17",
        //     salary: "$385,750",
        // },
    ], []);
    const data = useMemo(() =>[
        {
            id: 1,
            startDate1: "2012/12/02",
            name: "TBTC",

            startDate: "Đơn vị A mất kết nối đến máy chủ FMC",   
          
            startDate2: "2012/12/02",
           
            name1: "35",
            extn: "",   
            extn1: "Tình hình ATTT",         
            salary: "Đã xử lý",
            priority: "3",
            priority2: "Lữ 1",
            priority3: "35",
            priority4: "56",
            priority5: "15",
        },
    
        {
            id: 1,
            startDate1: "2012/12/02",
            name: "TBTC",

            startDate: "Đơn vị A mất kết nối đến máy chủ FMC",   
          
            startDate2: "2012/12/02",
           
            name1: "35",
            name2: "Lữ 1",
            extn: "",   
            extn1: "Tình hình ATTT",         
            salary: "Đã xử lý",
            priority: "3",
            priority2: "Lữ 1",
            priority3: "35",
            priority4: "56",
            priority5: "15",
        },
        {
            id: 2,
            startDate1: "2012/12/02",
            name: "TBTC",
            name2: "Lữ 1",
            startDate: "Đơn vị A mất kết nối đến máy chủ FMC",   
          
            startDate2: "2012/12/02",
           
            name1: "35",
            extn: "",   
            extn1: "Tình hình ATTT",         
            salary: "Đã xử lý",
            priority: "3",
            priority2: "Lữ 1",
            priority3: "35",
            priority4: "56",
            priority5: "15",
        },
        {
            id: 3,
            startDate1: "2012/12/02",
            name: "TBTC",
            name2: "Lữ 1",
            startDate: "Đơn vị A mất kết nối đến máy chủ FMC",   
          
            startDate2: "2012/12/02",
           
            name1: "35",
            extn: "",   
            extn1: "Tình hình ATTT",         
            salary: "Đã xử lý",
            priority: "3",
            priority2: "Lữ 1",
            priority3: "35",
            priority4: "56",
            priority5: "15",
        },
        {
            id: 4,
            startDate1: "2012/12/02",
            name: "TBTC",
            name2: "Lữ 1",
            startDate: "Đơn vị A mất kết nối đến máy chủ FMC",   
          
            startDate2: "2012/12/02",
           
            name1: "35",
            extn: "",   
            extn1: "Tình hình ATTT",         
            salary: "Đã xử lý",
            priority: "3",
            priority2: "Lữ 1",
            priority3: "35",
            priority4: "56",
            priority5: "15",
        },
        {
            id: 5,
            startDate1: "2012/12/02",
            name: "TBTC",
            name2: "Lữ 1",
            startDate: "Đơn vị A mất kết nối đến máy chủ FMC",   
          
            startDate2: "2012/12/02",
           
            name1: "35",
            extn: "",   
            extn1: "Tình hình ATTT",         
            salary: "Đã xử lý",
            priority: "3",
            priority2: "Lữ 1",
            priority3: "35",
            priority4: "56",
            priority5: "15",
        },
        // {
        //     id: 6,
        //     name: "TBTC",
        //     startDate: "2012/12/02",
        //     extn: "Súng", 
        //     extn1: "3814",  
        //     salary: "khẩu",
        //     priority: "Phòng họp",
        //     priority2: "Đúng đủ, an toàn",
        // },
        // {
        //     id: 7,
        //     name: "TBTC",
        //     startDate: "2012/08/06",
        //     extn: "Đạn",   
        //     salary: "viên",
        //     extn1: "3814",  
        //     priority: "Phòng họp",
        //     priority2: "Đúng đủ, an toàn",
        // },
        // {
        //     id: 8,
        //     name: "TBTC",
        //     startDate: "2010/10/14",
        //     salary: "viên",
        //     extn1: "3814",  
        //     priority: "Phòng họp",
        //     priority2: "PTL.TMT",
        //     extn: "Đạn",  
        // },
        // {
        //     id: 9,
        //     name: "TBTC",
        //     startDate: "2009/09/15",
        //     salary: "Ban KHQS",
        //     priority: "Phòng họp",
        //     priority2: "PTL.TMT",
        //     extn: "08h Tham gia đoàn công tác", 
        // },
        // {
        //     id: 10,
          
        //     name: "TBTC",
        //     startDate: "2008/12/13",
        //     salary: "Ban KHQS",
        //     priority: "Phòng họp",
        //     priority2: "PTL.TMT",
        //     extn: "08h Tham gia đoàn công tác", 
        // },
        // {
        //     id: 11,
        //     name: "Jena Gaines",
        //     position: "Office Manager",
        //     office: "London",
        //     extn: "3814",
        //     startDate: "2008/12/19",
        //     salary: "$90,560",
        // },
        // {
        //     id: 12,
        //     name: "Quinn Flynn",
        //     position: "Support Lead",
        //     office: "Edinburgh",
        //     extn: "9497",
        //     startDate: "2013/03/03",
        //     salary: "$342,000",
        // },
        // {
        //     id: 13,
        //     name: "Charde Marshall",
        //     position: "Regional Director",
        //     office: "San Francisco",
        //     extn: "6741",
        //     startDate: "2008/10/16",
        //     salary: "$470,600"
        // },
        // {
        //     id: 14,
        //     name: "Haley Kennedy",
        //     position: "Senior Marketing Designer",
        //     office: "London",
        //     extn: "3597",
        //     startDate: "2012/12/18",
        //     salary: "$313,500"
        // },
        // {
        //     id: 15,
        //     name: "Tatyana Fitzpatrick",
        //     position: "Regional Director",
        //     office: "London",
        //     extn: "1965",
        //     startDate: "2010/03/17",
        //     salary: "$385,750",
        // },
    ], []);
    const [pending, setPending] = useState(true);
    const [rows, setRows] = useState([]);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setRows(data);
            setPending(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [data]);

    return (
        <DataTable
            columns={columns}
            pagination
            data={rows}
            progressPending={pending}
        />
    );
};

const AjaxDatatables1 = () => {
    const columns = [
        {
            name: <span className='font-weight-bold fs-13'>TT</span>,
            selector: row => row.id,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Ngày báo cáo</span>,
            selector: row => row.startDate1,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Người nhập</span>,
            selector: row => row.name,
            sortable: true
        },

        {
            name: <span className='font-weight-bold fs-13'>Thời gian nhập</span>,
            selector: row => row.startDate1,
            sortable: true
        },
   
        {
            name: <span className='font-weight-bold fs-13'>Ngày Công tác</span>,
            selector: row => row.startDate1,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Nội dung</span>,
            selector: row => row. extn,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Thành Phần</span>,
            selector: row => row. extn,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Địa điểm</span>,
            selector: row => row. extn,
            sortable: true
        },
        {
            name: <span className='font-weight-bold fs-13'>Chủ trì</span>,
            selector: row => row. extn,
            sortable: true
        },
     
       
        // {
        //     name: <span className='font-weight-bold fs-13'>Nguyên nhân</span>,
        //     selector: row => row.extn,
        //     sortable: true
        // },
        // {
        //     name: <span className='font-weight-bold fs-13'>tình trạng xử lý</span>,
        //     selector: row => row.salary,
        //     sortable: true
        // },
        // {
        //     name: <span className='font-weight-bold fs-13'>thời gian xử lý xong</span>,
        //     selector: row => row.startDate2,
        //     sortable: true
        // },
        // {
        //     name: <span className='font-weight-bold fs-13'>thời gian xử lý (giờ) </span>,
        //     selector: row =>  row.priority,
        //     sortable: true
        // },
        // {
        //     name: <span className='font-weight-bold fs-13'>đơn vị xử lý </span>,
        //     selector: row =>  row.name2,
        //     sortable: true
        // },
        // {
        //     name: <span className='font-weight-bold fs-13'>Số lượng </span>,
        //     selector: row =>  row.priority4,
        //     sortable: true
        // },
        // {
        //     name: <span className='font-weight-bold fs-13'>đơn vị quản lý </span>,
        //     selector: row =>  row.name2,
        //     sortable: true
        // },
        // {
        //     name: <span className='font-weight-bold fs-13'>Thời gian</span>,
        //     selector: row => row.startDate2,
        //     sortable: true
        // },
        // {
        //     name: <span className='font-weight-bold fs-13'>Tổng số </span>,
        //     selector: row =>  row.priority4,
        //     sortable: true
        // },
        // {
        //     name: <span className='font-weight-bold fs-13'>số lượng tăng trong ngày </span>,
        //     selector: row =>  row.priority5,
        //     sortable: true
        // },

    ];

    const data1 = useMemo(() =>[
        {
            id: 1,     
            startDate: "2011/04/25",
            name: "5421",
            extn: "5421",            
            salary: "320,800"
        },
        {
            id: 2,
          
           
            startDate: "2011/07/25",
            extn: "8422",
            salary: "170,750"
        },
        {
            id: 3,
            
            startDate: "2009/01/12",
            extn: "1562",
            salary: "86,000"
        },
        {
            id: 4,
            startDate: "2012/03/29",
            extn: "6224",
            salary: "$433,060"
        },
        {
            id: 5,
                    startDate: "2008/11/28",
            extn: "5407",
            salary: "162,700"
        },
        {
            id: 6,
         
            startDate: "2012/12/02",
            extn: "4804",
            salary: "372,000"
        },
        {
            id: 7,
        
            startDate: "2012/08/06",
            extn: "9608",
            salary: "$37,500"
        },
        {
            id: 8,
        
            startDate: "2010/10/14",
            extn: "6200",
            salary: "327,900"
        },
        {
            id: 9,
           
            startDate: "2009/09/15",
            extn: "2360",
            salary: "205,500"
        },
        {
            id: 10,
          
        
            startDate: "2008/12/13",
            extn: "1667",
            salary: "103,600",
        },
        // {
        //     id: 11,
        //     name: "Jena Gaines",
        //     position: "Office Manager",
        //     office: "London",
        //     extn: "3814",
        //     startDate: "2008/12/19",
        //     salary: "$90,560",
        // },
        // {
        //     id: 12,
        //     name: "Quinn Flynn",
        //     position: "Support Lead",
        //     office: "Edinburgh",
        //     extn: "9497",
        //     startDate: "2013/03/03",
        //     salary: "$342,000",
        // },
        // {
        //     id: 13,
        //     name: "Charde Marshall",
        //     position: "Regional Director",
        //     office: "San Francisco",
        //     extn: "6741",
        //     startDate: "2008/10/16",
        //     salary: "$470,600"
        // },
        // {
        //     id: 14,
        //     name: "Haley Kennedy",
        //     position: "Senior Marketing Designer",
        //     office: "London",
        //     extn: "3597",
        //     startDate: "2012/12/18",
        //     salary: "$313,500"
        // },
        // {
        //     id: 15,
        //     name: "Tatyana Fitzpatrick",
        //     position: "Regional Director",
        //     office: "London",
        //     extn: "1965",
        //     startDate: "2010/03/17",
        //     salary: "$385,750",
        // },
    ], []);
    const data = useMemo(() =>[
        {
            id: 1,
            startDate1: "2012/12/02",
            name: "TBTC",

            startDate: "Đơn vị A mất kết nối đến máy chủ FMC",   
          
            startDate2: "2012/12/02",
           
            name1: "35",
            extn: "",   
            extn1: "Tình hình ATTT",         
            salary: "Đã xử lý",
            priority: "3",
            priority2: "Lữ 1",
            priority3: "35",
            priority4: "56",
            priority5: "15",
        },
    
        {
            id: 1,
            startDate1: "2012/12/02",
            name: "TBTC",

            startDate: "Đơn vị A mất kết nối đến máy chủ FMC",   
          
            startDate2: "2012/12/02",
           
            name1: "35",
            name2: "Lữ 1",
            extn: "",   
            extn1: "Tình hình ATTT",         
            salary: "Đã xử lý",
            priority: "3",
            priority2: "Lữ 1",
            priority3: "35",
            priority4: "56",
            priority5: "15",
        },
        {
            id: 2,
            startDate1: "2012/12/02",
            name: "TBTC",
            name2: "Lữ 1",
            startDate: "Đơn vị A mất kết nối đến máy chủ FMC",   
          
            startDate2: "2012/12/02",
           
            name1: "35",
            extn: "",   
            extn1: "Tình hình ATTT",         
            salary: "Đã xử lý",
            priority: "3",
            priority2: "Lữ 1",
            priority3: "35",
            priority4: "56",
            priority5: "15",
        },
        {
            id: 3,
            startDate1: "2012/12/02",
            name: "TBTC",
            name2: "Lữ 1",
            startDate: "Đơn vị A mất kết nối đến máy chủ FMC",   
          
            startDate2: "2012/12/02",
           
            name1: "35",
            extn: "",   
            extn1: "Tình hình ATTT",         
            salary: "Đã xử lý",
            priority: "3",
            priority2: "Lữ 1",
            priority3: "35",
            priority4: "56",
            priority5: "15",
        },
        {
            id: 4,
            startDate1: "2012/12/02",
            name: "TBTC",
            name2: "Lữ 1",
            startDate: "Đơn vị A mất kết nối đến máy chủ FMC",   
          
            startDate2: "2012/12/02",
           
            name1: "35",
            extn: "",   
            extn1: "Tình hình ATTT",         
            salary: "Đã xử lý",
            priority: "3",
            priority2: "Lữ 1",
            priority3: "35",
            priority4: "56",
            priority5: "15",
        },
        {
            id: 5,
            startDate1: "2012/12/02",
            name: "TBTC",
            name2: "Lữ 1",
            startDate: "Đơn vị A mất kết nối đến máy chủ FMC",   
          
            startDate2: "2012/12/02",
           
            name1: "35",
            extn: "",   
            extn1: "Tình hình ATTT",         
            salary: "Đã xử lý",
            priority: "3",
            priority2: "Lữ 1",
            priority3: "35",
            priority4: "56",
            priority5: "15",
        },
        // {
        //     id: 6,
        //     name: "TBTC",
        //     startDate: "2012/12/02",
        //     extn: "Súng", 
        //     extn1: "3814",  
        //     salary: "khẩu",
        //     priority: "Phòng họp",
        //     priority2: "Đúng đủ, an toàn",
        // },
        // {
        //     id: 7,
        //     name: "TBTC",
        //     startDate: "2012/08/06",
        //     extn: "Đạn",   
        //     salary: "viên",
        //     extn1: "3814",  
        //     priority: "Phòng họp",
        //     priority2: "Đúng đủ, an toàn",
        // },
        // {
        //     id: 8,
        //     name: "TBTC",
        //     startDate: "2010/10/14",
        //     salary: "viên",
        //     extn1: "3814",  
        //     priority: "Phòng họp",
        //     priority2: "PTL.TMT",
        //     extn: "Đạn",  
        // },
        // {
        //     id: 9,
        //     name: "TBTC",
        //     startDate: "2009/09/15",
        //     salary: "Ban KHQS",
        //     priority: "Phòng họp",
        //     priority2: "PTL.TMT",
        //     extn: "08h Tham gia đoàn công tác", 
        // },
        // {
        //     id: 10,
          
        //     name: "TBTC",
        //     startDate: "2008/12/13",
        //     salary: "Ban KHQS",
        //     priority: "Phòng họp",
        //     priority2: "PTL.TMT",
        //     extn: "08h Tham gia đoàn công tác", 
        // },
        // {
        //     id: 11,
        //     name: "Jena Gaines",
        //     position: "Office Manager",
        //     office: "London",
        //     extn: "3814",
        //     startDate: "2008/12/19",
        //     salary: "$90,560",
        // },
        // {
        //     id: 12,
        //     name: "Quinn Flynn",
        //     position: "Support Lead",
        //     office: "Edinburgh",
        //     extn: "9497",
        //     startDate: "2013/03/03",
        //     salary: "$342,000",
        // },
        // {
        //     id: 13,
        //     name: "Charde Marshall",
        //     position: "Regional Director",
        //     office: "San Francisco",
        //     extn: "6741",
        //     startDate: "2008/10/16",
        //     salary: "$470,600"
        // },
        // {
        //     id: 14,
        //     name: "Haley Kennedy",
        //     position: "Senior Marketing Designer",
        //     office: "London",
        //     extn: "3597",
        //     startDate: "2012/12/18",
        //     salary: "$313,500"
        // },
        // {
        //     id: 15,
        //     name: "Tatyana Fitzpatrick",
        //     position: "Regional Director",
        //     office: "London",
        //     extn: "1965",
        //     startDate: "2010/03/17",
        //     salary: "$385,750",
        // },
    ], []);
    const [pending, setPending] = useState(true);
    const [rows, setRows] = useState([]);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setRows(data);
            setPending(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [data]);

    return (
        <DataTable
            columns={columns}
            pagination
            data={rows}
            progressPending={pending}
        />
    );
};
export {AjaxDatatables, AjaxDatatables1 };