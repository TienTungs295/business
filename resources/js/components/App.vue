<template>
    <div>
        <div class="body" data-plugin-scroll-spy data-plugin-options="{'target': '#sidebar'}">
            <header-component></header-component>
            <router-view :key="$route.fullPath"></router-view>
            <footer-component></footer-component>
        </div>
    </div>
</template>
<script>

import LocaleService from "../services/LocaleService";
import {mapGetters} from "vuex";
import {serviceBus} from "../serviceBus";

export default {
    name: "App",
    data() {
        return {
            contact: {},
            errors: {},
            notShow: false
        }
    },
    computed: {
        ...mapGetters([
            'locale'
        ])
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll(event) {
            let yPosition = window.scrollY;
            if (yPosition > 0) {
                jQuery("#header").addClass("is-sticky");
            } else {
                jQuery("#header").removeClass("is-sticky");
            }
        },
        initLocale() {
            let locale = this.$cookies.get("locale");
            this.$i18n.locale = locale;
            if (locale == null || locale == undefined) locale = "vi"
            this.$i18n.locale = locale;
            this.$store.commit("setLocale", locale);
            LocaleService.getLocale().then(response => {
                let lang = response;
                this.$i18n.locale = lang;
                this.$store.commit("setLocale", lang);
                this.$cookies.set("locale", lang);
            }).catch(e => {
            });
        }
    },
    mounted() {
        serviceBus.$on('initLocale', () => {
            this.initLocale();
        });
    }
}
</script>
