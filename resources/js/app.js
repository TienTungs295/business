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
import LoadScript from 'vue-plugin-load-script';

// import VueToastr from "vue-toastr";
// import moment from 'moment';
// import {BTabs, BTab, BModal, BCarousel, BCarouselSlide, BDropdown, BDropdownItem, BProgress} from 'bootstrap-vue';
import store from './store';
// import VueStarRating  from 'vue-star-rating';
// import VueCookies from 'vue-cookies'
// import VueGallerySlideshow from 'vue-gallery-slideshow';


Vue.component('header-component', require('./components/layouts/HeaderComponent').default);
Vue.component('footer-component', require('./components/layouts/FooterComponent').default);
// Vue.component('b-tabs', BTabs);
// Vue.component('b-tab', BTab);
// Vue.component('b-modal', BModal);
// Vue.component('b-carousel', BCarousel);
// Vue.component('b-carousel-slide', BCarouselSlide);
// Vue.component('b-dropdown', BDropdown);
// Vue.component('b-dropdown-item', BDropdownItem);
// Vue.component('star-rating', VueStarRating)
// Vue.component('b-progress', BProgress)
// Vue.component('vue-gallery-slideshow', VueGallerySlideshow)

// Vue.use(VueToastr, {
//     defaultTimeout: 2000,
//     defaultProgressBar: false,
//     defaultPosition: "toast-top-right",
//     defaultCloseOnHover: true,
//     clickClose: true,
//     defaultStyle: {"top": "50px"},
// });

// Vue.use(VueCookies, { expires: '60d'})

// Vue.prototype.moment = moment;

// Vue.filter('dateFormat', function (value) {
//     if (value) {
//         return moment(String(value)).format('DD/MM/YYYY')
//     }
// });
//
// Vue.filter('dateTimeFormat', function (value) {
//     if (value) {
//         return moment(String(value)).format('H:MM DD/MM/YYYY')
//     }
// });
//
// Vue.filter('commaFormat', function (value) {
//     if (value != null) {
//         value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//         value += ' đ';
//         return value;
//     }
// });

Vue.use(LoadScript);

const app = new Vue({
    store,
    el: '#app',
    render: h => h(App),
    router
});

Vue.loadScript("http://127.0.0.1:8000/assets/js/theme.init.js")
    .then(() => {
        // Script is loaded, do something
    })
    .catch(() => {
        // Failed to fetch script
    });


