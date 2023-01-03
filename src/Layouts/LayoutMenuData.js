import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Navdata = () => {
    const history = useHistory();
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isApps, setIsApps] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [isPages, setIsPages] = useState(false);
    const [isBaseUi, setIsBaseUi] = useState(false);
    const [isAdvanceUi, setIsAdvanceUi] = useState(false);
    const [isForms, setIsForms] = useState(false);
    const [isTables, setIsTables] = useState(false);
    const [isCharts, setIsCharts] = useState(false);
    const [isIcons, setIsIcons] = useState(false);
    const [isMaps, setIsMaps] = useState(false);
    const [isMultiLevel, setIsMultiLevel] = useState(false);

    // Apps
    const [isEmail, setEmail] = useState(false);
    const [isSubEmail, setSubEmail] = useState(false);
    const [isEcommerce, setIsEcommerce] = useState(false);
    const [isProjects, setIsProjects] = useState(false);
    const [isTasks, setIsTasks] = useState(false);
    const [isCRM, setIsCRM] = useState(false);
    const [isCrypto, setIsCrypto] = useState(false);
    const [isInvoices, setIsInvoices] = useState(false);
    const [isSupportTickets, setIsSupportTickets] = useState(false);
    const [isNFTMarketplace, setIsNFTMarketplace] = useState(false);


    // Authentication
    const [isSignIn, setIsSignIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [isPasswordReset, setIsPasswordReset] = useState(false);
    const [isPasswordCreate, setIsPasswordCreate] = useState(false);
    const [isLockScreen, setIsLockScreen] = useState(false);
    const [isLogout, setIsLogout] = useState(false);
    const [isSuccessMessage, setIsSuccessMessage] = useState(false);
    const [isVerification, setIsVerification] = useState(false);
    const [isError, setIsError] = useState(false);

    // Pages
    const [isProfile, setIsProfile] = useState(false);
    const [isLanding, setIsLanding] = useState(false);


    // Charts
    const [isApex, setIsApex] = useState(false);

    // Multi Level
    const [isLevel1, setIsLevel1] = useState(false);
    const [isLevel2, setIsLevel2] = useState(false);

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("subitems");
                if (document.getElementById(id))
                    document.getElementById(id).classList.remove("show");
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }
        if (iscurrentState !== 'Apps') {
            setIsApps(false);
        }
        if (iscurrentState !== 'Auth') {
            setIsAuth(false);
        }
        if (iscurrentState !== 'Pages') {
            setIsPages(false);
        }
        if (iscurrentState !== 'BaseUi') {
            setIsBaseUi(false);
        }
        if (iscurrentState !== 'AdvanceUi') {
            setIsAdvanceUi(false);
        }
        if (iscurrentState !== 'Forms') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Tables') {
            setIsTables(false);
        }
        if (iscurrentState !== 'Charts') {
            setIsCharts(false);
        }
        if (iscurrentState !== 'Icons') {
            setIsIcons(false);
        }
        if (iscurrentState !== 'Maps') {
            setIsMaps(false);
        }
        if (iscurrentState !== 'MuliLevel') {
            setIsMultiLevel(false);
        }
        if (iscurrentState === 'Widgets') {
            history.push("/widgets");
            document.body.classList.add('twocolumn-panel');
        }
        if (iscurrentState !== 'Landing') {
            setIsLanding(false);
        }
    }, [
        history,
        iscurrentState,
        isDashboard,
        isApps,
        isAuth,
        isPages,
        isBaseUi,
        isAdvanceUi,
        isForms,
        isTables,
        isCharts,
        isIcons,
        isMaps,
        isMultiLevel
    ]);

    const menuItems = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "dashboard",
            label: "Dashboards",
            icon: "ri-dashboard-2-line",
            link: "/#",
            stateVariables: isDashboard,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "analytics",
                    label: "Tổng hợp",
                    link: "/dashboard-analytics",
                    parentId: "dashboard",
                },
                {
                    id: "crm",
                    label: "Thiết lập",
                    link: "/dashboard-crm",
                    parentId: "dashboard",
                },
                           
            ],
        },
        {
            id: "icons",
            label: "Giao ban ngày",
            icon: "ri-compasses-2-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsIcons(!isIcons);
                setIscurrentState('Icons');
                updateIconSidebar(e);
            },
            stateVariables: isIcons,
            subItems: [
                { id: "remix", label: "Tạo nội dung giao ban ngày", link: "/icons-remix", parentId: "icons" },
                { id: "boxicons", label: "Xem báo cáo giao ban ngày", link: "/icons-boxicons", parentId: "icons" },
                // { id: "materialdesign", label: "Material Design", link: "/icons-materialdesign", parentId: "icons" },
                // { id: "lineawesome", label: "Line Awesome", link: "/icons-lineawesome", parentId: "icons" },
                // { id: "feather", label: "Feather", link: "/icons-feather", parentId: "icons" },
            ],
        },
        // {
        //     label: "pages",
        //     isHeader: true,
        // },
        // {
        //     id: "authentication",
        //     label: "Quản trị hệ thống",
        //     icon: "ri-account-circle-line",
        //     link: "/#",
        //     click: function (e) {
        //         e.preventDefault();
        //         setIsAuth(!isAuth);
        //         setIscurrentState('Auth');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isAuth,
        //     subItems: [
        //         {
        //             id: "signIn",
        //             label: "Sign In",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e) {
        //                 e.preventDefault();
        //                 setIsSignIn(!isSignIn);
        //             },
        //             parentId: "authentication",
        //             stateVariables: isSignIn,
        //             childItems: [
        //                 { id: 1, label: "Basic", link: "/auth-signin-basic" },
        //                 { id: 2, label: "Cover", link: "/auth-signin-cover" },
        //             ]
        //         },
        //         {
        //             id: "signUp",
        //             label: "Sign Up",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e) {
        //                 e.preventDefault();
        //                 setIsSignUp(!isSignUp);
        //             },
        //             parentId: "authentication",
        //             stateVariables: isSignUp,
        //             childItems: [
        //                 { id: 1, label: "Basic", link: "/auth-signup-basic" },
        //                 { id: 2, label: "Cover", link: "/auth-signup-cover" },
        //             ]
        //         },
        //         {
        //             id: "passwordReset",
        //             label: "Password Reset",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e) {
        //                 e.preventDefault();
        //                 setIsPasswordReset(!isPasswordReset);
        //             },
        //             parentId: "authentication",
        //             stateVariables: isPasswordReset,
        //             childItems: [
        //                 { id: 1, label: "Basic", link: "/auth-pass-reset-basic" },
        //                 { id: 2, label: "Cover", link: "/auth-pass-reset-cover" },
        //             ]
        //         },
        //         {
        //             id: "passwordCreate",
        //             label: "Password Create",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e) {
        //                 e.preventDefault();
        //                 setIsPasswordCreate(!isPasswordCreate);
        //             },
        //             parentId: "authentication",
        //             stateVariables: isPasswordCreate,
        //             childItems: [
        //                 { id: 1, label: "Basic", link: "/auth-pass-change-basic" },
        //                 { id: 2, label: "Cover", link: "/auth-pass-change-cover" },
        //             ]
        //         },
        //         {
        //             id: "lockScreen",
        //             label: "Lock Screen",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e) {
        //                 e.preventDefault();
        //                 setIsLockScreen(!isLockScreen);
        //             },
        //             parentId: "authentication",
        //             stateVariables: isLockScreen,
        //             childItems: [
        //                 { id: 1, label: "Basic", link: "/auth-lockscreen-basic" },
        //                 { id: 2, label: "Cover", link: "/auth-lockscreen-cover" },
        //             ]
        //         },
        //         {
        //             id: "logout",
        //             label: "Logout",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e) {
        //                 e.preventDefault();
        //                 setIsLogout(!isLogout);
        //             },
        //             parentId: "authentication",
        //             stateVariables: isLogout,
        //             childItems: [
        //                 { id: 1, label: "Basic", link: "/auth-logout-basic" },
        //                 { id: 2, label: "Cover", link: "/auth-logout-cover" },
        //             ]
        //         },
        //         {
        //             id: "successMessage",
        //             label: "Success Message",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e) {
        //                 e.preventDefault();
        //                 setIsSuccessMessage(!isSuccessMessage);
        //             },
        //             parentId: "authentication",
        //             stateVariables: isSuccessMessage,
        //             childItems: [
        //                 { id: 1, label: "Basic", link: "/auth-success-msg-basic" },
        //                 { id: 2, label: "Cover", link: "/auth-success-msg-cover" },
        //             ]
        //         },
        //         {
        //             id: "twoStepVerification",
        //             label: "Two Step Verification",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e) {
        //                 e.preventDefault();
        //                 setIsVerification(!isVerification);
        //             },
        //             parentId: "authentication",
        //             stateVariables: isVerification,
        //             childItems: [
        //                 { id: 1, label: "Basic", link: "/auth-twostep-basic" },
        //                 { id: 2, label: "Cover", link: "/auth-twostep-cover" },
        //             ]
        //         },
        //         {
        //             id: "errors",
        //             label: "Errors",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e) {
        //                 e.preventDefault();
        //                 setIsError(!isError);
        //             },
        //             parentId: "authentication",
        //             stateVariables: isError,
        //             childItems: [
        //                 { id: 1, label: "404 Basic", link: "/auth-404-basic" },
        //                 { id: 2, label: "404 Cover", link: "/auth-404-cover" },
        //                 { id: 3, label: "404 Alt", link: "/auth-404-alt" },
        //                 { id: 4, label: "500", link: "/auth-500" },
        //                 { id: 5, label: "Offline Page", link: "/auth-offline" },
        //             ]
        //         },
        //     ],
        // },
        // {
        //     id: "pages",
        //     label: "Pages",
        //     icon: "ri-pages-line",
        //     link: "/#",
        //     click: function (e) {
        //         e.preventDefault();
        //         setIsPages(!isPages);
        //         setIscurrentState('Pages');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isPages,
        //     subItems: [
        //         {
        //             id: "starter",
        //             label: "Starter",
        //             link: "/pages-starter",
        //             parentId: "pages",
        //         },
        //         {
        //             id: "profile",
        //             label: "Profile",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e) {
        //                 e.preventDefault();
        //                 setIsProfile(!isProfile);
        //             },
        //             parentId: "pages",
        //             stateVariables: isProfile,
        //             childItems: [
        //                 { id: 1, label: "Simple Page", link: "/pages-profile", parentId: "pages" },
        //                 { id: 2, label: "Settings", link: "/pages-profile-settings", parentId: "pages" },
        //             ]
        //         },
        //         { id: "team", label: "Team", link: "/pages-team", parentId: "pages" },
        //         { id: "timeline", label: "Timeline", link: "/pages-timeline", parentId: "pages" },
        //         { id: "faqs", label: "FAQs", link: "/pages-faqs", parentId: "pages" },
        //         { id: "pricing", label: "Pricing", link: "/pages-pricing", parentId: "pages" },
        //         { id: "gallery", label: "Gallery", link: "/pages-gallery", parentId: "pages" },
        //         { id: "maintenance", label: "Maintenance", link: "/pages-maintenance", parentId: "pages" },
        //         { id: "comingSoon", label: "Coming Soon", link: "/pages-coming-soon", parentId: "pages" },
        //         { id: "sitemap", label: "Sitemap", link: "/pages-sitemap", parentId: "pages" },
        //         { id: "searchResults", label: "Search Results", link: "/pages-search-results", parentId: "pages" },
        //     ],
        // },
        // {
        //     id: "landing",
        //     label: "Landing",
        //     icon: "ri-rocket-line",
        //     link: "/#",
        //     stateVariables: isLanding,
        //     click: function (e) {
        //         e.preventDefault();
        //         setIsLanding(!isLanding);
        //         setIscurrentState('Landing');
        //         updateIconSidebar(e);
        //     },
        //     subItems: [
        //         { id: "onePage", label: "One Page", link: "/landing", parentId: "landing" },
        //         { id: "nftLanding", label: "NFT Landing", link: "/nft-landing", parentId: "landing" },
        //     ],
        // },
        // {
        //     label: "Components",
        //     isHeader: true,
        // },
        {
            id: "baseUi",
            label: "Bức tranh tình huống",
            icon: "ri-pencil-ruler-2-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsBaseUi(!isBaseUi);
                setIscurrentState('BaseUi');
                updateIconSidebar(e);
            },
            stateVariables: isBaseUi,
            subItems: [
                { id: "alerts", label: "Tình hình chung", link: "/ui-alerts", parentId: "baseUi" },
                { id: "badges", label: "Thông tin điều hành tác chiến", link: "/ui-badges", parentId: "baseUi" },
                { id: "buttons", label: "Tình hình trên mạng Internet", link: "/ui-buttons", parentId: "baseUi" },
                { id: "colors", label: "Tình hình trên mạng TSLqs", link: "/ui-colors", parentId: "baseUi" }, 
                { id: "cards", label: "Tình hình Biển Đông", link: "/ui-cards", parentId: "baseUi" },
                { id: "carousel", label: "Xu hướng tình hình theo thời gian", link: "/ui-carousel", parentId: "baseUi" },           
            ],
        },
        {
            id: "advanceUi",
            label: "Cập nhật tình hình",
            icon: "ri-stack-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsAdvanceUi(!isAdvanceUi);
                setIscurrentState('AdvanceUi');
                updateIconSidebar(e);
            },
            stateVariables: isAdvanceUi,
            subItems: [
                { id: "nestablelist", label: "Tình hình chung", link: "/advance-ui-nestable", parentId: "advanceUi" },
                { id: "scrollbar", label: "Tình hình hoạt động VKTB", link: "/advance-ui-scrollbar", parentId: "advanceUi" },
                { id: "animation", label: "Kết quả giám sát hạ tầng mạng", link: "/advance-ui-animation", parentId: "advanceUi" },
                { id: "tour", label: "Kết quả giám sát ứng dụng dịch vụ dùng chung ", link: "/advance-ui-tour", parentId: "advanceUi" },
                { id: "swiperslider", label: "Tình hình ATTT", link: "/advance-ui-swiper", parentId: "advanceUi" },
                { id: "ratings", label: "Hoạt động trinh sát", link: "/advance-ui-ratings", parentId: "advanceUi" },
                { id: "highlight", label: "Hoạt động tác chiến thông tin", link: "/advance-ui-highlight", parentId: "advanceUi" },
            ],
        },
      
        // {
        //     id: "widgets",
        //     label: "Báo cáo tình hình",
        //     icon: "ri-honour-line",
        //     link: "/widgets",
        //     click: function (e) {
        //         e.preventDefault();
        //         setIscurrentState('AdvanceUi');
        //         updateIconSidebar(e);
        //     },
        //         stateVariables: isAdvanceUi,
        //         subItems: [
        //             { id: "nestablelist", label: "Cập nhật tình hình chung", link: "/advance-ui-nestable", parentId: "advanceUi" },
        //             { id: "scrollbar", label: "Cập nhật tình hình hoạt động VKTB", link: "/advance-ui-scrollbar", parentId: "advanceUi" },
        //         ],
            
        // },
        {
            id: "forms",
            label: "Forms",
            icon: "ri-file-list-3-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsForms(!isForms);
                setIscurrentState('Forms');
                updateIconSidebar(e);
            },
            stateVariables: isForms,
            subItems: [
                { id: "basicelements", label: "Basic Elements", link: "/forms-elements", parentId: "forms" },
                { id: "formselect", label: "Form Select", link: "/forms-select", parentId: "forms" },
                { id: "checkboxsradios", label: "Checkboxs & Radios", link: "/forms-checkboxes-radios", parentId: "forms" },
                { id: "pickers", label: "Pickers", link: "/forms-pickers", parentId: "forms" },
                { id: "inputmasks", label: "Input Masks", link: "/forms-masks", parentId: "forms" },
                { id: "advanced", label: "Advanced", link: "/forms-advanced", parentId: "forms" },
                { id: "rangeslider", label: "Range Slider", link: "/forms-range-sliders", parentId: "forms" },
                { id: "validation", label: "Validation", link: "/forms-validation", parentId: "forms" },
                { id: "wizard", label: "Wizard", link: "/forms-wizard", parentId: "forms" },
                { id: "editors", label: "Editors", link: "/forms-editors", parentId: "forms" },
                { id: "fileuploads", label: "File Uploads", link: "/forms-file-uploads", parentId: "forms" },
                { id: "formlayouts", label: "Form Layouts", link: "/forms-layouts", parentId: "forms" },
                { id: "select2", label: "Select2", link: "/forms-select2", parentId: "forms" },
            ],
        },
        
        {
            id: "charts",
            label: "Tra cứu-Thống kê",
            icon: "ri-pie-chart-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsCharts(!isCharts);
                setIscurrentState('Charts');
                updateIconSidebar(e);
            },
            stateVariables: isCharts,
            subItems: [
                // {
                //     id: "apexcharts",
                //     label: "Apexcharts",
                //     link: "/#",
                //     isChildItem: true,
                //     click: function (e) {
                //         e.preventDefault();
                //         setIsApex(!isApex);
                //     },
                //     stateVariables: isApex,
                //     childItems: [
                //         { id: 1, label: "Line", link: "/charts-apex-line" },
                //         { id: 2, label: "Area", link: "/charts-apex-area" },
                //         { id: 3, label: "Column", link: "/charts-apex-column" },
                //         { id: 4, label: "Bar", link: "/charts-apex-bar" },
                //         { id: 5, label: "Mixed", link: "/charts-apex-mixed" },
                //         { id: 6, label: "Timeline", link: "/charts-apex-timeline" },
                //         { id: 7, label: "Candlstick", link: "/charts-apex-candlestick" },
                //         { id: 8, label: "Boxplot", link: "/charts-apex-boxplot" },
                //         { id: 9, label: "Bubble", link: "/charts-apex-bubble" },
                //         { id: 10, label: "Scatter", link: "/charts-apex-scatter" },
                //         { id: 11, label: "Heatmap", link: "/charts-apex-heatmap" },
                //         { id: 12, label: "Treemap", link: "/charts-apex-treemap" },
                //         { id: 13, label: "Pie", link: "/charts-apex-pie" },
                //         { id: 14, label: "Radialbar", link: "/charts-apex-radialbar" },
                //         { id: 15, label: "Radar", link: "/charts-apex-radar" },
                //         { id: 16, label: "Polar Area", link: "/charts-apex-polar" },
                //     ]
                // },
                { id: "chartjs", label: "Tra cứu, thống kê theo nhóm thông tin", link: "/charts-chartjs", parentId: "charts" },
                { id: "echarts", label: "Tra cứu, thống kê khai thác vận hành", link: "/charts-echarts", parentId: "charts" },

            ],
        },
        {
            id: "tables",
            label: "Hệ thống",
            icon: "ri-layout-grid-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsTables(!isTables);
                setIscurrentState('Tables');
                updateIconSidebar(e);
            },
            stateVariables: isTables,
            subItems: [
            
                { id: "listjs", label: "Quản lý người dùng", link: "/tables-listjs", parentId: "tables" },
                { id: "datatables", label: "Thiết lập tham số hệ thống", link: "/tables-datatables", parentId: "tables" },
            ],
        },
       
        // {
        //     id: "maps",
        //     label: "Maps",
        //     icon: "ri-map-pin-line",
        //     link: "/#",
        //     click: function (e) {
        //         e.preventDefault();
        //         setIsMaps(!isMaps);
        //         setIscurrentState('Maps');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isMaps,
        //     subItems: [
        //         { id: "google", label: "Google", link: "/maps-google", parentId: "maps" },
        //         { id: "vector", label: "Vector", link: "/maps-vector", parentId: "maps" },
        //         { id: "leaflet", label: "Leaflet", link: "/maps-leaflet", parentId: "maps" },
        //     ],
        // },
        // {
        //     id: "multilevel",
        //     label: "Multi Level",
        //     icon: "ri-share-line",
        //     link: "/#",
        //     click: function (e) {
        //         e.preventDefault();
        //         setIsMultiLevel(!isMultiLevel);
        //         setIscurrentState('MuliLevel');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isMultiLevel,
        //     subItems: [
        //         { id: "level1.1", label: "Level 1.1", link: "/#", parentId: "multilevel" },
        //         {
        //             id: "level1.2",
        //             label: "Level 1.2",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e) {
        //                 e.preventDefault();
        //                 setIsLevel1(!isLevel1);
        //             },
        //             stateVariables: isLevel1,
        //             childItems: [
        //                 { id: 1, label: "Level 2.1", link: "/#" },
        //                 {
        //                     id: "level2.2",
        //                     label: "Level 2.2",
        //                     link: "/#",
        //                     isChildItem: true,
        //                     click: function (e) {
        //                         e.preventDefault();
        //                         setIsLevel2(!isLevel2);
        //                     },
        //                     stateVariables: isLevel2,
        //                     childItems: [
        //                         { id: 1, label: "Level 3.1", link: "/#" },
        //                         { id: 2, label: "Level 3.2", link: "/#" },
        //                     ]
        //                 },
        //             ]
        //         },
        //     ],
        // },
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;