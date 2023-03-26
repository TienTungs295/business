/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue').default;
global.jQuery = require('jquery');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


import App from './components/App';
import Vue from 'vue';
import router from './router';

import VueToastr from "vue-toastr";
import moment from 'moment';
// import {BTabs, BTab, BModal, BCarousel, BCarouselSlide, BDropdown, BDropdownItem, BProgress} from 'bootstrap-vue';
import store from './store';
// import VueStarRating  from 'vue-star-rating';
import VueCookies from 'vue-cookies'
import VueGallerySlideshow from 'vue-gallery-slideshow';
import VueI18n from 'vue-i18n';


Vue.component('header-component', require('./components/layouts/HeaderComponent').default);
Vue.component('footer-component', require('./components/layouts/FooterComponent').default);
Vue.component('post-item-component', require('./components/posts/PostItemComponent').default);
Vue.component('loading-component', require('./components/common/LoadingComponent').default);
Vue.component('phone-ring-component', require('./components/common/PhoneRingComponent').default);
// Vue.component('b-tabs', BTabs);
// Vue.component('b-tab', BTab);
// Vue.component('b-modal', BModal);
// Vue.component('b-carousel', BCarousel);
// Vue.component('b-carousel-slide', BCarouselSlide);
// Vue.component('b-dropdown', BDropdown);
// Vue.component('b-dropdown-item', BDropdownItem);
// Vue.component('star-rating', VueStarRating);
// Vue.component('b-progress', BProgress);
Vue.component('vue-gallery-slideshow', VueGallerySlideshow);

Vue.use(VueToastr, {
    defaultTimeout: 2000,
    defaultProgressBar: false,
    defaultPosition: "toast-top-right",
    defaultCloseOnHover: true,
    clickClose: true,
    defaultStyle: {"top": "50px"},
});

Vue.use(VueCookies, {expires: '1d'})

Vue.prototype.moment = moment;

Vue.filter('getDay', function (value) {
    if (value) {
        return moment(String(value)).format('DD');
    }
});

Vue.filter('getMonth', function (value) {
    if (value) {
        let month = moment(String(value)).format('MM');
        switch (month) {
            case "01":
                return "TH1";
            case "02":
                return "TH2";
            case "03":
                return "TH3";
            case "04":
                return "TH4";
            case "05":
                return "TH5";
            case "06":
                return "TH6";
            case "07":
                return "TH7";
            case "08":
                return "TH8";
            case "09":
                return "TH9";
            case "10":
                return "TH10";
            case "11":
                return "TH11";
            case "12":
                return "TH12";
        }
    }
});

Vue.filter('getYear', function (value) {
    if (value) {
        return moment(String(value)).format('YYYY');
    }
});


Vue.filter('dateFormat', function (value) {
    if (value) {
        return moment(String(value)).format('DD/MM/YYYY')
    }
});

Vue.filter('dateTimeFormat', function (value) {
    if (value) {
        return moment(String(value)).format('H:MM:ss DD/MM/YYYY')
    }
});

Vue.filter('commaFormat', function (value) {
    if (value != null) {
        value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        value += ' đ';
        return value;
    }
});

Vue.use(VueI18n);

const messages = {
    vi: {
        message: {
            home: "Trang chủ",
            about_us: "Về chúng tôi",
            partners: "Đối tác liên kết",
            services: "Dịch vụ",
            projects: "Dự án",
            bim: "BIM-REVIT CO-OPERATION",
            news: "Tin tức & sự kiện",
            contact: "Liên hệ",
            text_slider1: "Tối ưu thiết kế trên mô hình BIM",
            text_slider2: "Tiết kiệm chi phí đầu tư và vận hành",
            who_we_are: "Chúng tôi là ai",
            who_we_are1: "Công ty CP Tư vấn Thiết kế Quản lý dự án và phát triển công nghệ DMT là đơn vị hàng đầu trong thiết kế công trình, không những vậy DMT còn tham gia các lĩnh vực khác như tư vấn lập dự án, tư vấn đấu thầu, thi công..., mỗi lĩnh vực đều có những sản phẩm nhận được đánh giá cao từ khách hàng.",
            who_we_are2: "DMT được thành lập năm 2008 với phạm vi hoạt động tại Việt Nam và Quốc tế về lĩnh vực tư vấn thiết kế công trình . Với đội ngũ nhân viên giàu kinh nghiệm, năng động và sáng tạo ,trong thời gian qua chúng tôi đã hoàn thành thiết kế nhiều công trình có giá trị...",
            show_more: "Xem thêm",
            our_service_title: "Mang đến cho khách hàng sản phẩm và dịch vụ tốt nhất.",
            project_title: "Các dự án tiêu biểu của chúng tôi.",
            project_content: "Bằng việc áp dụng những kỹ thuật mới nhất vào sản xuất và quản lý chất lượng các công trình thiết kế và thi công xây dựng của DMT đãkhẳng định niềm tin và chỗ đứng trong lòng Qúy khách hàng.",
            office: "Văn phòng",
            finished_project: "Dự án hoàn thành",
            employee: "Nhân viên",
            leadership_team: "Đội ngũ lãnh đạo",
            leadership_team_title: "Truyền cảm hứng cho công ty để biến tầm nhìn thành hiện thực.",
            leadership_content: "Tư vấn thiết kế, bao gồm các lĩnh vực",
            leadership_content1: "Thiết kế Quy hoạch khu đô thị, khu nghỉ dưỡng, khu công nghiệp",
            leadership_content2: "Thiết kế kiến trúc và kết cấu công trình dân dụng và công nghiệp",
            leadership_content3: "Thiết kế điện công trình, đường dây và trạm biến áp",
            leadership_content4: "Thiết kế hệ thống điện công trình dân dụng, công nghiệp",
            leadership_content5: "Thiết kế hệ thống cấp thoát nước công trình dân dụng, nhà cao tầng, trung tâm thương mại, khách sạn, nhà máy…",
            leadership_content6: "Thiết kế hệ thống điều hòa không khí, thông gió cho công trình dân dụng, công nghiệp",
            leadership_content7: "Thiết kế hệ thống cấp thoát nước, điện hạ tầng, khu đô thị, khu công nghiệp, khu chế xuất",
            leadership_content8: "Thiết kế xây dựng mô hình Bim – Revit cho các dự án cơ điện",
            leadership_content9: "Tư vấn chuyển giao công nghệ",
            leadership_content10: "Quản lý dự án",
            leadership_content11: "Giám sát thi công",
            leadership_content12: "Dịch vụ thẩm định thiết kế, kiểm định chất lượng công trình",
            reputation: "Uy tín",
            safe: "An toàn",
            general_manager: "Tổng giám đốc",
            what_client_say: "Khách hàng nói gì về chúng tôi",
            our_recent_news: "Tin tức sự kiện nóng mới nhất, cập nhật liên tục.",
            email_contact: "Email liên hệ",
            your_email: "Email của bạn",
            developed_and_operated: "Được phát triển và vận hành bởi ",
            leave_message: "Để lại lời nhắn",
            name: "Họ và tên",
            phone: "Số điện thoại",
            email: "Email",
            message: "Lời nhắn",
            submit: "Gửi",
            filter: "Bộ lọc dự án",
            search: "Tìm kiếm",
            all_types: "Tất cả loại hình",
            all_fields: "Tất cả lĩnh vực",
            all_areas: "Tất cả khu vực",
            default: "Mặc định",
            date_submitted: "Ngày đăng",
            sort: "Sắp xếp",
            a_z: "A-Z",
            comment: "Bình luận",
            recent_posts: "Bài viết gần đây",
            un_category: "Không danh mục",
            all: "Tất cả",
            comments_for_post: "Bình luận cho bài viết",
            post_detail: "Chi tiết bài viết",
            call_us: "Gọi cho chúng tôi",
            submit_email: "Gửi Email",
            address: "TẦNG 2, TÒA NHÀ VIMECO , LÔ E9 , Đ.PHẠM HÙNG ,P.TRUNG HÒA , Q.CẦU GIẤY, TP. HÀ NỘI",
            headquarter: "Trụ sở công ty",
        }
    },
    en: {
        "message": {
            "home": "Home Page",
            "about_us": "About us",
            "partners": "Partners",
            "services": "Services",
            "projects": "Projects",
            "bim": "BIM-REVIT CO-OPERATION",
            "news": "News",
            "contact": "Contact",
            "text_slider1": "Optimizing design on BIM model",
            "text_slider2": "Saving investment and operating costs",
            "who_we_are": "Who are we",
            "who_we_are1": "DMT Technology Development and Project Management Consulting Joint Stock Company is a leading unit in construction design, not only that, DMT also participates in other fields such as project planning, bidding consultancy. ",
            "who_we_are2": "DMT was established in 2008 with the scope of activities in Vietnam and internationally in the field of construction design consultancy. ",
            "show_more": "Show more",
            "our_service_title": "Provide customers with the best products and services.",
            "project_title": "Our featured projects.",
            "project_content": "By applying the latest techniques in production and quality control of design and construction works, DMT has affirmed the trust and position in the hearts of customers.",
            "office": "Office",
            "finished_project": "Completed projects",
            "employee": "Staff",
            "leadership_team": "Leadership team",
            "leadership_team_title": "Inspire the company to turn the vision into reality.",
            "leadership_content": "Design consulting, covering areas",
            "leadership_content1": "Designing and planning urban areas, resorts, industrial parks",
            "leadership_content2": "Architectural and structural design of civil and industrial works",
            "leadership_content3": "Electrical design of works, lines and substations",
            "leadership_content4": "Design electrical systems for civil and industrial works",
            "leadership_content5": "Designing water supply and drainage systems for civil works, high-rise buildings, commercial centers, hotels, factories...",
            "leadership_content6": "Design of air conditioning and ventilation systems for civil and industrial buildings",
            "leadership_content7": "Designing water supply and drainage systems, infrastructure electricity, urban areas, industrial parks, export processing zones",
            "leadership_content8": "Design and build Bim - Revit models for M&E projects",
            "leadership_content9": "Technology transfer consultant",
            "leadership_content10": "Project management",
            "leadership_content11": "Construction supervision",
            "leadership_content12": "Design appraisal service, construction quality inspection",
            "reputation": "Reputation",
            "safe": "Safe",
            "general_manager": "General Manager",
            "what_client_say": "What client say",
            "our_recent_news": "Our recent news",
            "email_contact": "Contact email",
            "your_email": "Your email",
            "developed_and_operated": "Developed and operated by ",
            "leave_message": "Leave message",
            "name": "First and last name",
            "phone": "Phone number",
            "email": "Email",
            "message": "Message",
            "submit": "Send",
            "filter": "Filter",
            "search": "Search",
            "all_types": "All types",
            "all_fields": "All fields",
            "all_areas": "All areas",
            "default": "Default",
            "date_submitted": "Date Submitted",
            "sort": "Arrange",
            "a_z": "A-Z",
            "comment": "Comment",
            "recent_posts": "Recent Posts",
            "un_category": "UnCategory",
            "all": "All",
            "comments_for_post": "Comments for this post",
            "post_detail": "Post details",
            "call_us": "Call us",
            "submit_email": "Send email",
            "address": "2nd FLOOR, VIMECO BUILDING, PLOT E9, PHAM HUNG STREET, TRUNG HOA WARD, CAU GIAY DISTRICT, HANOI CITY",
            "headquarter": "Headquarter"
        },
        cn: {
            message: {
                home: "主页",
                about_us: "关于我们",
                partners: "伙伴",
                services: "服务",
                projects: "项目",
                bim: "BIM-REVIT 合作",
                contact: "接触",
                news: "消息",
                text_slider1: "BIM模型优化设计",
                text_slider2: "节省投资和运行成本",
            }
        },
        jp: {
            message: {
                home: "家",
                about_us: "私たちに関しては",
                partners: "パートナー",
                services: "サービス",
                projects: "プロジェクト",
                bim: "BIM-REVIT 協力",
                contact: "コンタクト",
                news: "ニュース",
                text_slider1: "BIMモデルで設計を最適化",
                text_slider2: "投資と運用コストの節約",
            }
        },
        kr: {
            message: {
                home: "홈페이지",
                about_us: "우리에 대해",
                partners: "파트너",
                services: "서비스",
                projects: "프로젝트",
                bim: "BIM-REVIT 협력",
                contact: "연락하다",
                news: "소식",
                text_slider1: "BIM 모델에서 설계 최적화",
                text_slider2: "투자 및 운영 비용 절감",
            }
        }
    }
}

const i18n = new VueI18n({
    locale: 'vi',
    messages
});

const app = new Vue({
    store,
    el: '#app',
    render: h => h(App),
    i18n,
    router
});


