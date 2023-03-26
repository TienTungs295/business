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
            text_slider1:"Tối ưu thiết kế trên mô hình BIM",
            text_slider2:"Tiết kiệm chi phí đầu tư và vận hành",
        }
    },
    en: {
        message: {
            home: "Home",
            about_us: "AboutUs",
            partners: "Partners",
            services: "Services",
            projects: "Projects",
            bim: "BIM-REVIT CO-OPERATION",
            contact: "Contact",
            news: "NEWS",
            text_slider1:"Tối ưu thiết kế trên mô hình BIM",
            text_slider2:"Tiết kiệm chi phí đầu tư và vận hành",
        }
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
            text_slider1:"Tối ưu thiết kế trên mô hình BIM",
            text_slider2:"Tiết kiệm chi phí đầu tư và vận hành",
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
            text_slider1:"Tối ưu thiết kế trên mô hình BIM",
            text_slider2:"Tiết kiệm chi phí đầu tư và vận hành",
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
            text_slider1:"Tối ưu thiết kế trên mô hình BIM",
            text_slider2:"Tiết kiệm chi phí đầu tư và vận hành",
        }
    }
};

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


