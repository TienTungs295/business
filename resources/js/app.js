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
import {BDropdown, BDropdownItem} from 'bootstrap-vue';
import store from './store';
import VueCookies from 'vue-cookies'
import VueGallerySlideshow from 'vue-gallery-slideshow';
import VueI18n from 'vue-i18n';


Vue.component('header-component', require('./components/layouts/HeaderComponent').default);
Vue.component('footer-component', require('./components/layouts/FooterComponent').default);
Vue.component('post-item-component', require('./components/posts/PostItemComponent').default);
Vue.component('loading-component', require('./components/common/LoadingComponent').default);
Vue.component('phone-ring-component', require('./components/common/PhoneRingComponent').default);
Vue.component('b-dropdown', BDropdown);
Vue.component('b-dropdown-item', BDropdownItem);
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
            who_we_are2: "DMT được thành lập năm 2008 với phạm vi hoạt động tại Việt Nam và Quốc tế về ",
            who_we_are21: "lĩnh vực tư vấn thiết kế công trình",
            who_we_are22: ". Với đội ngũ nhân viên giàu kinh nghiệm, năng động và sáng tạo ,trong thời gian qua chúng tôi đã hoàn thành thiết kế nhiều công trình có giá trị...",
            show_more: "Xem thêm",
            our_service_title: "Mang đến cho khách hàng sản phẩm và dịch vụ tốt nhất.",
            project_title: "Các dự án tiêu biểu của chúng tôi.",
            project_content1: "Bằng việc áp dụng những kỹ thuật mới nhất vào sản xuất và quản lý chất lượng các công trình thiết kế và thi công xây dựng của DMT đã ",
            project_content11: "khẳng định niềm tin và chỗ đứng",
            project_content12: " trong lòng Quý khách hàng.",
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
            "construction_engineer": "Kỹ sư xây dựng",
            "office_staff": "Nhân viên văn phòng",
            "client_say1": "Dịch vụ của công ty rất tốt, chất lượng công trình rất đảm bảo, đội ngũ thi công chuyên nghiệp. Tôi sẽ tiếp tục sử dụng các dịch vụ của DMT trong thời gian tới",
            "client_say2": "Tôi rất hài lòng với phong cách làm việc chuyên nghiệp, thời gian chính xác. Cách bố trí đường điện, nước, hệ thống điều hòa thông gió của các bạn rất thông minh nên không gian vô cùng thoáng đãng.",
            "profile": "Profile",
            "about_us_content1": "Công ty CP Tư vấn Thiết kế Quản lý dự án và phát triển công nghệ DMT xin gửi lời chúc sức khỏe và lời chào trân trọng nhất đến toàn thể Quý khách hàng.",
            "about_us_content2": "DMT được thành lập năm 2008 với phạm vi hoạt động tại Việt Nam và Quốc tế về lĩnh vực tư vấn thiết kế công trình . Với đội ngũ nhân viên giàu kinh nghiệm, năng động và sáng tạo ,trong thời gian qua chúng tôi đã hoàn thành thiết kế nhiều công trình có giá trị.",
            "about_us_content3": "Bằng việc áp dụng những kỹ thuật mới nhất vào sản xuất và quản lý chất lượng các công trình thiết kế và thi công xây dựng của DMT đã khẳng định niềm tin và chỗ đứng trong lòng Qúy khách hàng .",
            "about_us_content4": "Chúng tôi sẽ tiếp tục cố gắng hơn nữa nhằm nâng cao chất lượng sản phẩm và dịch vụ để nhận được sự hài lòng trọn vẹn nhất từ phía Qúy khách hàng.",
            "provide": "Cung cấp",
            "enter_project": "Nhập tên dự án cần tìm kiếm..",
            "project_detail": "Thông tin dự án",
            "project_name": "Tên công trình",
            "area": "Địa điểm",
            "type": "Loại hình",
            "field": "Lĩnh vực",
            "empty": "Không có dữ liệu",
            "category": "Danh mục",
        }
    },
    en: {
        "message": {
            "home": "Home",
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
            "who_we_are2": "DMT was established in 2008 with the scope of activities in Vietnam and internationally on ",
            "who_we_are21": "project design consultancy.",
            "who_we_are22": " With a team of experienced, dynamic and creative staff, in the past time we have completed the design of many valuable projects...",
            "project_content1": "By applying the latest techniques in production and quality control, DMT's design and construction works have ",
            "project_content11": "affirming faith and standing",
            "project_content12": " in the hearts of our customers.",
            "show_more": "Show more",
            "our_service_title": "Provide customers with the best products and services.",
            "project_title": "Our featured projects.",
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
            "sort": "Sort",
            "a_z": "A-Z",
            "comment": "Comment",
            "recent_posts": "Recent Posts",
            "un_category": "UnCategory",
            "all": "All",
            "comments_for_post": "Comments for this post",
            "post_detail": "Post detail",
            "call_us": "Call us",
            "submit_email": "Send email",
            "address": "2nd FLOOR, VIMECO BUILDING, PLOT E9, PHAM HUNG STREET, TRUNG HOA WARD, CAU GIAY DISTRICT, HANOI CITY",
            "headquarter": "Headquarter",
            "construction_engineer": "Construction engineer",
            "office_staff": "Office staff",
            "client_say1": "The company's service is very good, the quality of the work is very guaranteed, the construction team is professional. ",
            "client_say2": "I am very satisfied with the professional working style, accurate time. ",
            "profile": "Profile",
            "about_us_content1": "DMT Technology Development and Project Management Consulting Joint Stock Company would like to send greetings and best wishes to all customers.",
            "about_us_content2": "DMT was established in 2008 with the scope of activities in Vietnam and internationally in the field of construction design consultancy. ",
            "about_us_content3": "By applying the latest techniques to production and quality management of design and construction works, DMT has affirmed the trust and position in the hearts of customers.",
            "about_us_content4": "We will continue to try harder to improve the quality of products and services to receive the most complete satisfaction from our customers.",
            "provide": "Provide",
            "enter_project": "Enter the project name...",
            "project_detail": "Project detail",
            "project_name": "Project Name",
            "area": "Area",
            "type": "Type",
            "field": "Field",
            "empty": "No data",
            "category": "Category"
        },
    },
    cn: {
        "message": {
            "home": "主页",
            "about_us": "关于我们",
            "partners": "伙伴",
            "services": "服务",
            "projects": "项目",
            "bim": "BIM-REVIT 合作",
            "news": "消息",
            "contact": "接触",
            "text_slider1": "BIM模型优化设计",
            "text_slider2": "节省投资和运行成本",
            "who_we_are": "我们是谁",
            "who_we_are1": "DMT技术开发与项目管理咨询股份公司是施工设计的龙头单位，不仅如此，DMT还参与项目策划、招投标咨询等其他领域。 ",
            "who_we_are2": "DMT 成立于 2008 年，活动范围在越南和国际上 ",
            "who_we_are21": "项目设计咨询。",
            "who_we_are22": " 凭借一支经验丰富、充满活力和创造力的团队，在过去的时间里，我们完成了许多有价值的项目的设计......",
            "project_content1": "通过在生产和质量控制方面应用最新技术，DMT 的设计和施工工程已经 ",
            "project_content11": "肯定信仰和地位",
            "project_content12": " 在我们客户的心中。",
            "show_more": "展示更多",
            "our_service_title": "为客户提供最好的产品和服务。",
            "project_title": "我们的特色项目。",
            "office": "办公室",
            "finished_project": "完成项目",
            "employee": "职员",
            "leadership_team": "领导班子",
            "leadership_team_title": "激励公司将愿景变为现实。",
            "leadership_content": "设计咨询，涵盖领域",
            "leadership_content1": "设计和规划城市地区、度假村、工业园区",
            "leadership_content2": "民用和工业工程的建筑和结构设计",
            "leadership_content3": "工程、线路和变电站的电气设计",
            "leadership_content4": "为民用和工业工程设计电气系统",
            "leadership_content5": "为土建工程、高层建筑、商业中心、酒店、工厂等设计给排水系统...",
            "leadership_content6": "民用和工业建筑的空调和通风系统设计",
            "leadership_content7": "设计给排水系统、基础设施电力、城市地区、工业园区、出口加工区",
            "leadership_content8": "设计和建造 Bim - Revit M 模型",
            "leadership_content9": "技术转移顾问",
            "leadership_content10": "项目管理",
            "leadership_content11": "施工监理",
            "leadership_content12": "设计鉴定服务、施工质量检测",
            "reputation": "名声",
            "safe": "安全的",
            "general_manager": "总经理",
            "what_client_say": "客户怎么说",
            "our_recent_news": "我们最近的新闻",
            "email_contact": "联系电子邮件",
            "your_email": "你的邮件",
            "developed_and_operated": "开发和运营 ",
            "leave_message": "请留言",
            "name": "名字和姓氏",
            "phone": "电话号码",
            "email": "电子邮件",
            "message": "信息",
            "submit": "发送",
            "filter": "筛选",
            "search": "搜索",
            "all_types": "所有类型",
            "all_fields": "所有领域",
            "all_areas": "所有地区",
            "default": "默认",
            "date_submitted": "提交日期",
            "sort": "安排",
            "a_z": "A-Z",
            "comment": "评论",
            "recent_posts": "最近的帖子",
            "un_category": "取消分类",
            "all": "全部",
            "comments_for_post": "这篇文章的评论",
            "post_detail": "帖子详情",
            "call_us": "打电话给我们",
            "submit_email": "发电子邮件",
            "address": "河内市 CAU GIAY 区 TRUNG HOA 区 PHAM HUNG 街 E9 地块 VIMECO 大楼 2 楼",
            "headquarter": "总部",
            "construction_engineer": "建筑工程师",
            "office_staff": "办公人员",
            "client_say1": "公司服务很好，工程质量很有保证，施工队伍专业。 ",
            "client_say2": "我对专业的工作作风，准确的时间非常满意。 ",
            "profile": "轮廓",
            "about_us_content1": "DMT 技术开发和项目管理咨询股份公司谨向所有客户致以问候和良好祝愿。",
            "about_us_content2": "DMT 成立于 2008 年，在越南和国际上的建筑设计咨询领域开展活动。 ",
            "about_us_content3": "通过将最新技术应用于设计和施工工程的生产和质量管理，DMT肯定了客户心中的信任和地位。",
            "about_us_content4": "我们将继续努力提高产品和服务的质量，以获得客户最完全的满意。",
            "provide": "提供",
            "enter_project": "输入项目名称...",
            "project_detail": "项目详情",
            "project_name": "项目名",
            "area": "区域",
            "type": "类型",
            "field": "场地",
            "empty": "没有数据",
            "category": "类别"
        }
    },
    jp: {
        "message": {
            "home": "ホームページ",
            "about_us": "私たちに関しては",
            "partners": "パートナー",
            "services": "サービス",
            "projects": "プロジェクト",
            "bim": "BIM-REVIT 協力",
            "news": "ニュース",
            "contact": "コンタクト",
            "text_slider1": "BIMモデルで設計を最適化",
            "text_slider2": "投資と運用コストの節約",
            "who_we_are": "私たちは誰ですか",
            "who_we_are1": "DMT Technology Development and Project Management Consulting Joint Stock Company は建設設計のリーディング ユニットであるだけでなく、DMT はプロジェクト計画、入札コンサルタントなどの他の分野にも参加しています。 ",
            "who_we_are2": "DMT は 2008 年に設立され、ベトナムおよび国際的な活動の範囲を以下に示します。 ",
            "who_we_are21": "プロジェクト設計コンサルタント。",
            "who_we_are22": " 経験豊富でダイナミックでクリエイティブなスタッフのチームにより、過去に多くの貴重なプロジェクトの設計を完了しました...",
            "project_content1": "生産および品質管理に最新の技術を適用することにより、DMT の設計および建設作業は、 ",
            "project_content11": "信仰と立場の確認",
            "project_content12": " お客様の心に。",
            "show_more": "もっと見せる",
            "our_service_title": "お客様に最高の製品とサービスを提供します。",
            "project_title": "私たちの注目のプロジェクト。",
            "office": "オフィス",
            "finished_project": "完了したプロジェクト",
            "employee": "スタッフ",
            "leadership_team": "首脳部",
            "leadership_team_title": "ビジョンを実現するように会社を鼓舞します。",
            "leadership_content": "デザインコンサルティング、カバーエリア",
            "leadership_content1": "市街地、リゾート、工業団地の設計・計画",
            "leadership_content2": "土木・産業工事の建築・構造設計",
            "leadership_content3": "工事、線路、変電所の電気設計",
            "leadership_content4": "土木および産業用電気システムの設計",
            "leadership_content5": "土木工事、高層ビル、商業センター、ホテル、工場などの上下水道の設計...",
            "leadership_content6": "民生用および工業用建物の空調および換気システムの設計",
            "leadership_content7": "上下水道、インフラ電力、都市部、工業団地、輸出加工区の設計",
            "leadership_content8": "Bim の設計と構築 - M 用の Revit モデル",
            "leadership_content9": "技術移転コンサルタント",
            "leadership_content10": "プロジェクト管理",
            "leadership_content11": "施工監理",
            "leadership_content12": "設計鑑定サービス、施工品質検査",
            "reputation": "評判",
            "safe": "安全",
            "general_manager": "ゼネラルマネージャー",
            "what_client_say": "クライアントの声",
            "our_recent_news": "最近のニュース",
            "email_contact": "連絡先メールアドレス",
            "your_email": "あなたの電子メール",
            "developed_and_operated": "開発・運営 ",
            "leave_message": "メッセージを残す",
            "name": "名前と苗字",
            "phone": "電話番号",
            "email": "Eメール",
            "message": "メッセージ",
            "submit": "送信",
            "filter": "フィルター",
            "search": "検索",
            "all_types": "いろんなタイプ",
            "all_fields": "すべてのフィールド",
            "all_areas": "全エリア",
            "default": "デフォルト",
            "date_submitted": "提出日",
            "sort": "整える",
            "a_z": "A-Z",
            "comment": "コメント",
            "recent_posts": "最近の投稿",
            "un_category": "未分類",
            "all": "全て",
            "comments_for_post": "この投稿へのコメント",
            "post_detail": "投稿の詳細",
            "call_us": "お電話ください",
            "submit_email": "メールを送る",
            "address": "2 階、VIMECO ビル、ロット E9、PHAM HUNG 通り、TRUNG HOA 区、CAU GIAY 地区、HA NOI 市",
            "headquarter": "本社",
            "construction_engineer": "建設エンジニア",
            "office_staff": "オフィススタッフ",
            "client_say1": "同社のサービスは非常に優れており、仕事の質は非常に保証されており、建設チームはプロです。 ",
            "client_say2": "プロの作業スタイル、正確な時間にとても満足しています。 ",
            "profile": "プロフィール",
            "about_us_content1": "DMT Technology Development and Project Management Consulting Joint Stock Company は、すべてのお客様にご挨拶とご多幸をお祈り申し上げます。",
            "about_us_content2": "DMT は 2008 年に設立され、ベトナムおよび国際的な建設設計コンサルタントの分野で活動を行っています。 ",
            "about_us_content3": "DMT は、設計および建設工事の生産と品質管理に最新の技術を適用することにより、お客様の心の中で信頼と地位を確認してきました。",
            "about_us_content4": "今後とも、お客様にご満足いただけるよう、商品・サービスの品質向上に努めてまいります。",
            "provide": "提供",
            "enter_project": "プロジェクト名を入力してください...",
            "project_detail": "プロジェクトの詳細",
            "project_name": "プロジェクト名",
            "area": "エリア",
            "type": "タイプ",
            "field": "分野",
            "empty": "データなし",
            "category": "カテゴリー"
        }
    },
    kr: {
        "message": {
            "home": "홈페이지",
            "about_us": "회사 소개",
            "partners": "파트너",
            "services": "서비스",
            "projects": "프로젝트",
            "bim": "BIM-REVIT 협력",
            "news": "소식",
            "contact": "연락하다",
            "text_slider1": "BIM 모델에서 설계 최적화",
            "text_slider2": "투자 및 운영 비용 절감",
            "who_we_are": "우리는 누구인가",
            "who_we_are1": "DMT 기술 개발 및 프로젝트 관리 컨설팅 주식회사는 건설 설계 분야의 선두 기업일 뿐만 아니라 프로젝트 기획, 입찰 컨설팅과 같은 다른 분야에도 참여하고 있습니다. ",
            "who_we_are2": "DMT는 2008년 베트남 및 국제적으로 활동 범위를 가지고 설립되었습니다. ",
            "who_we_are21": "프로젝트 디자인 컨설팅.",
            "who_we_are22": " 경험이 풍부하고 역동적이며 창의적인 직원들로 구성된 팀과 함께 과거에 우리는 많은 귀중한 프로젝트의 설계를 완료했습니다...",
            "project_content1": "생산 및 품질 관리에 최신 기술을 적용함으로써 DMT의 설계 및 시공 작업은 ",
            "project_content11": "믿음과 입장을 확인",
            "project_content12": " 고객의 마음에.",
            "show_more": "자세히보기",
            "our_service_title": "고객에게 최고의 제품과 서비스를 제공합니다.",
            "project_title": "우리의 주요 프로젝트.",
            "office": "사무실",
            "finished_project": "완료된 프로젝트",
            "employee": "직원",
            "leadership_team": "리더십 팀",
            "leadership_team_title": "회사가 비전을 현실로 바꾸도록 격려하십시오.",
            "leadership_content": "디자인 컨설팅, 커버링 영역",
            "leadership_content1": "도시 지역, 휴양지, 산업 단지 설계 및 계획",
            "leadership_content2": "토목 및 산업 공사의 건축 및 구조 설계",
            "leadership_content3": "작업, 라인 및 변전소의 전기 설계",
            "leadership_content4": "토목 및 산업 공사용 전기 시스템 설계",
            "leadership_content5": "토목공사, 고층빌딩, 상업시설, 호텔, 공장 등의 상하수도 시스템 설계...",
            "leadership_content6": "민간 및 산업용 건물의 공조 및 환기 시스템 설계",
            "leadership_content7": "상수도 및 배수 시스템, 인프라 전기, 도시 지역, 산업 단지, 수출 가공 구역 설계",
            "leadership_content8": "Bim 설계 및 구축 - M용 Revit 모델",
            "leadership_content9": "기술 이전 컨설턴트",
            "leadership_content10": "프로젝트 관리",
            "leadership_content11": "건설 감독",
            "leadership_content12": "설계감정용역, 시공품질검사",
            "reputation": "평판",
            "safe": "안전한",
            "general_manager": "총지배인",
            "what_client_say": "고객이 말하는 것",
            "our_recent_news": "우리의 최근 뉴스",
            "email_contact": "이메일 연락처",
            "your_email": "귀하의 이메일",
            "developed_and_operated": "개발 및 운영 ",
            "leave_message": "메시지 남기기",
            "name": "이름과 성",
            "phone": "전화 번호",
            "email": "이메일",
            "message": "메시지",
            "submit": "보내다",
            "filter": "필터",
            "search": "찾다",
            "all_types": "모든 유형",
            "all_fields": "모든 분야",
            "all_areas": "모든 지역",
            "default": "기본",
            "date_submitted": "제출 된 날짜",
            "sort": "마련하다",
            "a_z": "A-Z",
            "comment": "논평",
            "recent_posts": "최근 게시물",
            "un_category": "미분류",
            "all": "모두",
            "comments_for_post": "이 게시물에 대한 댓글",
            "post_detail": "게시물 세부정보",
            "call_us": "전화주세요",
            "submit_email": "이메일을 보내",
            "address": "VIMECO 빌딩 2층, Lot E9, PHAM HUNG street, TRUNG HOA ward, CAU GIAY district, HA NOI city",
            "headquarter": "본사",
            "construction_engineer": "건설 엔지니어",
            "office_staff": "사무 직원",
            "client_say1": "회사의 서비스는 매우 훌륭하고 작업의 품질은 매우 보장되며 건설 팀은 전문적입니다. ",
            "client_say2": "나는 전문적인 작업 스타일, 정확한 시간에 매우 만족합니다. ",
            "profile": "프로필",
            "about_us_content1": "DMT 기술 개발 및 프로젝트 관리 컨설팅 주식 회사는 모든 고객에게 인사와 행운을 전하고 싶습니다.",
            "about_us_content2": "DMT는 2008년 베트남에서의 활동 범위와 국제적으로 건설 설계 컨설팅 분야에서 설립되었습니다. ",
            "about_us_content3": "DMT는 설계 및 시공 작업의 생산 및 품질 관리에 최신 기술을 적용하여 고객의 마음에 신뢰와 위치를 확인했습니다.",
            "about_us_content4": "앞으로도 고객 여러분께 가장 완벽한 만족을 드릴 수 있도록 제품과 서비스의 품질 향상에 더욱 노력하겠습니다.",
            "provide": "제공하다",
            "enter_project": "프로젝트 이름을 입력하세요...",
            "project_detail": "프로젝트 세부사항",
            "project_name": "프로젝트 이름",
            "area": "영역",
            "type": "유형",
            "field": "필드",
            "empty": "데이터 없음",
            "category": "범주"
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


