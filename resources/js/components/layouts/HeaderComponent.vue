<template>
    <header id="header" class="header-transparent header-semi-transparent header-semi-transparent-light">
        <div class="header-body border-0">
            <div class="container-fluid">
                <div class="header-container container">
                    <div class="header-row">
                        <div class="header-column flex-grow-lg-0">
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
                                                <li class="dropdown">
                                                    <router-link class="nav-link dmt-dropdown-item" :to="{ name: 'projectList'}">
                                                        <span class="__page">
                                                        {{ $t('message.projects') }}
                                                    </span>
                                                        <i class="icon-arrow-down icons mgl-5 fz-12 __icon"
                                                           @click.stop.prevent="toggleProjectMenu"></i>
                                                    </router-link>
                                                    <ul class="dropdown-menu dmt-dropdown-menu"
                                                        :class="isShowProjectMenu ? 'show' : ''">
                                                        <li v-for="(item) in projectCategories">
                                                            <router-link class="dropdown-item"
                                                                         :to="{ name: 'projectList', query:{'category_id':item.id}}">
                                                                {{ item.name }}
                                                            </router-link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="dropdown" v-for="item in defaultProjectCategories">
                                                    <router-link class="nav-link dmt-dropdown-item"
                                                                 :to="{ name: 'projectList', query:{'category_id':item.id}}">
                                                    <span class="__page">
                                                     {{item.name}}
                                                    </span>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link class="nav-link" :to="{ name: 'postList'}">
                                                        {{ $t('message.news') }}
                                                    </router-link>
                                                </li>
                                                <li id="language-mobile" class="d-xl-none">
                                                    <div class="custom_select text-left">
                                                        <div v-for="(value,key) in languages" v-bind:key="key" @click="changeLocale(key)"
                                                             class="__flag d-inline-block pdt-5 pdr-5" :active="locale == key">
                                                            <img class="__flag-img d-inline-block"
                                                                 :src="value.flag" alt="value.name">
                                                        </div>
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
                    <div class="custom_select text-right pdb-5">
                        <div v-for="(value,key) in languages" v-bind:key="key" @click="changeLocale(key)"
                             class="__flag d-inline-block pdl-5" :class="locale == key ? 'active' :''">
                            <img class="__flag-img d-inline-block"
                                 :src="value.flag" alt="value.name">
                        </div>
                    </div>
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
            defaultProjectCategories: {},
            serviceByLocale: {},
            languages: {
                "vi": {
                    flag: "/assets/img/business-image/flag/vi.png",
                    name: "Tiếng Việt",
                },
                "en": {
                    flag: "/assets/img/business-image/flag/en.png",
                    name: "English",
                },
                "cn": {
                    flag: "/assets/img/business-image/flag/cn.png",
                    name: "简体中文",
                },
                "jp": {
                    flag: "/assets/img/business-image/flag/jp.png",
                    name: "日本語",
                },
                "kr": {
                    flag: "/assets/img/business-image/flag/kr.png",
                    name: "한국어",
                }
            }
        };
    },
    computed: {
        ...mapGetters([
            'services',
            'isShowMenu',
            'isShowServiceMenu',
            'isShowProjectMenu',
            'isShowBIMMenu',
            'isShowPartnerMenu',
            'locale',
            'projectCategories'
        ])
    },
    methods: {
        toggleMenu() {
            this.$store.commit("setIsShowMenu", !this.isShowMenu)
        },
        toggleServiceMenu() {
            this.$store.commit("setIsShowServiceMenu", !this.isShowServiceMenu);
        },
        toggleProjectMenu() {
            this.$store.commit("setIsShowProjectMenu", !this.isShowProjectMenu);
        },
        toggleBIMMenu() {
            this.$store.commit("setIsShowBIMMenu", !this.isShowBIMMenu);
        },
        togglePartnerMenu() {
            this.$store.commit("setIsShowPartnerMenu", !this.isShowPartnerMenu);
        },
        changeLocale(locale) {
            if (locale == this.locale) return;
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
            this.defaultProjectCategories = response || [];
        }).catch(e => {
        });

        ProjectCategoryService.findAll().then(response => {
            let projectCategories = response || [];
            this.$store.commit("setProjectCategories", projectCategories);
        }).catch(e => {
        });
    }
}
</script>
