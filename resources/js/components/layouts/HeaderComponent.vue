<template>
    <header id="header" class="header-transparent header-semi-transparent header-semi-transparent-light">
        <div class="header-body border-0">
            <div class="container-fluid">
                <div class="header-container container">
                    <div class="header-row">
                        <div class="header-column">
                            <div class="header-row">
                                <div class="header-logo custom-header-logo">
                                    <router-link :to="{ name: 'home'}">
                                        <img class="logo" alt="DMT" width="123" height="48"
                                             src="/assets/img/business-image/logo/dmt-white-logo.png">
                                    </router-link>
                                    <router-link :to="{ name: 'home'}">
                                        <img class="logo-sticky" alt="DMT" width="123" height="48"
                                             src="/assets/img/business-image/logo/dmt-logo.png">
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="header-column justify-content-end">
                            <div class="header-row">
                                <div class="header-nav header-nav-links order-3 order-lg-1">
                                    <div
                                        class="header-nav-main header-nav-main-square header-nav-main-text-capitalize header-nav-main-effect-1 header-nav-main-sub-effect-1"
                                        :class="isShowMenu ? 'show' : ''">
                                        <nav class="collapse" :class="isShowMenu ? 'show' : 'closed'">
                                            <ul class="nav nav-pills" id="mainNav">
                                                <li>
                                                    <router-link class="nav-link" :to="{ name: 'home'}">
                                                        {{ $t('message.home') }}
                                                    </router-link>
                                                </li>
                                                <li class="dropdown">
                                                    <router-link class="nav-link dmt-dropdown-item"
                                                                 :to="{ name: 'aboutUs'}">
                                                        {{ $t('message.about_us') }}
                                                        <i class="icon-arrow-down icons mgl-5 fz-12 __icon"
                                                           @click.stop.prevent="togglePartnerMenu"></i>
                                                    </router-link>
                                                    <ul class="dropdown-menu dmt-dropdown-menu"
                                                        :class="isShowPartnerMenu ? 'show' : ''">
                                                        <li>
                                                            <router-link class="dropdown-item"
                                                                         :to="{ name: 'partner'}">
                                                                {{ $t('message.partners') }}
                                                            </router-link>
                                                        </li>
                                                        <li>
                                                            <router-link class="dropdown-item"
                                                                         :to="{ name: 'contactUs'}">
                                                                {{ $t('message.contact') }}
                                                            </router-link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="dropdown">
                                                    <router-link class="nav-link dmt-dropdown-item"
                                                                 :to="{ name: 'service'}">
                                                    <span class="__page">
                                                    {{ $t('message.services') }}
                                                    </span>
                                                        <i class="icon-arrow-down icons mgl-5 fz-12 __icon"
                                                           @click.stop.prevent="toggleServiceMenu"></i>
                                                    </router-link>
                                                    <ul class="dropdown-menu dmt-dropdown-menu"
                                                        :class="isShowServiceMenu ? 'show' : ''">
                                                        <li v-for="(item,index) in serviceByLocale">
                                                            <router-link class="dropdown-item"
                                                                         :to="{ name: 'serviceDetail',params: {id:item.id }}">
                                                                {{ item.shortTitle }}
                                                            </router-link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <router-link class="nav-link" :to="{ name: 'projectList'}">
                                                        {{ $t('message.projects') }}
                                                    </router-link>
                                                </li>
                                                <li class="dropdown">
                                                    <router-link class="nav-link dmt-dropdown-item"
                                                                 :to="{ name: 'projectList', query:{'category_id':defaultCategory.id}}">
                                                    <span class="__page">
                                                     {{ $t('message.bim') }}
                                                    </span>
                                                        <i v-if="projects.length"
                                                           class="icon-arrow-down icons mgl-5 fz-12 __icon"
                                                           @click.stop.prevent="toggleBIMMenu"></i>
                                                    </router-link>
                                                    <ul class="dropdown-menu dmt-dropdown-menu" v-if="projects.length"
                                                        :class="isShowBIMMenu ? 'show' : ''">
                                                        <li v-for="item in projects">
                                                            <router-link class="dropdown-item"
                                                                         :to="{ name: 'projectDetail', params: { slug: item.slug,id:item.id }}">
                                                                {{ item.name }}
                                                            </router-link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <router-link class="nav-link" :to="{ name: 'postList'}">
                                                        {{ $t('message.news') }}
                                                    </router-link>
                                                </li>
                                                <li id="language-mobile" class="d-lg-none">
                                                    <div>
                                                        <select name="locale" @change="changeLocale($event)">
                                                            <option :selected="locale == 'vi'" value="vi">Tiếng Việt</option>
                                                            <option :selected="locale == 'en'" value="en">English</option>
                                                            <option :selected="locale == 'cn'" value="cn">简体中文</option>
                                                            <option :selected="locale == 'jp'" value="jp">日本語</option>
                                                            <option :selected="locale == 'kr'" value="kr">한국어</option>
                                                        </select>
                                                    </div>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <button class="btn header-btn-collapse-nav __hamburger" @click="toggleMenu">
                                        <i class="fas" :class="isShowMenu ? 'fa-times': 'fa-bars'"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="language">
                    <select name="locale" @change="changeLocale($event)">
                        <option :selected="locale == 'vi'" value="vi">Tiếng Việt</option>
                        <option :selected="locale == 'en'" value="en">English</option>
                        <option :selected="locale == 'cn'" value="cn">简体中文</option>
                        <option :selected="locale == 'jp'" value="jp">日本語</option>
                        <option :selected="locale == 'kr'" value="kr">한국어</option>
                    </select>
                </div>
            </div>
        </div>
    </header>

</template>

<script>


import {mapGetters} from "vuex";
import ProjectCategoryService from "../../services/ProjectCategoryService";
import LocaleService from "../../services/LocaleService";

export default {
    name: "Header",
    data() {
        return {
            defaultCategory: {},
            projects: [],
            serviceByLocale: {}
        };
    },
    computed: {
        ...mapGetters([
            'services',
            'isShowMenu',
            'isShowServiceMenu',
            'isShowBIMMenu',
            'isShowPartnerMenu',
            'locale'
        ])
    },
    methods: {
        toggleMenu() {
            this.$store.commit("setIsShowMenu", !this.isShowMenu)
        },
        toggleServiceMenu() {
            this.$store.commit("setIsShowServiceMenu", !this.isShowServiceMenu);
        },
        toggleBIMMenu() {
            this.$store.commit("setIsShowBIMMenu", !this.isShowBIMMenu);
        },
        togglePartnerMenu() {
            this.$store.commit("setIsShowPartnerMenu", !this.isShowPartnerMenu);
        },
        changeLocale($event) {
            let locale = $event.target.value;
            // this.$store.commit("setLocale", locale);
            // this.$i18n.locale = this.locale;
            this.$cookies.set("locale", locale);
            let data = {
                locale: locale
            }
            LocaleService.changeLocale(data).then(response => {
                this.$router.go(0);
                // let query = JSON.parse(JSON.stringify(this.$route.query));
                // query.lang = response;
                // this.$router.push({name: this.$route.name, query: query}).catch((e) => {
                //     console.warn(e);
                // });
            }).catch(e => {
            });
        },
        initLocale() {
            let locale = this.$cookies.get("locale");
            this.$i18n.locale = locale;
            if (locale == null || locale == undefined) locale = "vi"
            this.$i18n.locale = locale;
            this.$store.commit("setLocale", locale);
            this.serviceByLocale = this.services[this.locale];
            LocaleService.getLocale().then(response => {
                let lang = response;
                this.$i18n.locale = lang;
                this.$store.commit("setLocale", lang);
                this.serviceByLocale = this.services[this.locale];
                this.$cookies.set("locale", lang);
            }).catch(e => {
            });
        }
    },
    mounted() {
        this.initLocale();
        ProjectCategoryService.findDefault().then(response => {
            let res = response || {};
            this.defaultCategory = res.category || {};
            this.projects = res.projects || [];
        }).catch(e => {
        });
    }
}
</script>
