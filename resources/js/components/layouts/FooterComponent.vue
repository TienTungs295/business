<template>
    <footer id="footer" class="overflow-hidden border-0 m-0"
            style="background-image: url(/assets/img/demos/construction/backgrounds/background-2.jpg); background-repeat: no-repeat; background-position: center bottom;">
        <div class="container pt-5">
            <div class="row pt-4 mb-5 gy-4">
                <div class="col-lg-2">
                    <router-link :to="{ name: 'home'}">
                        <img alt="Porto" class="img-fluid logo" width="123" height="48"
                             src="/assets/img/business-image/logo/dmt-logo.png">
                    </router-link>
                    <div class="mgt-30">
                        <div class="fb-page" data-href="https://www.facebook.com/profile.php?id=100088188111491" data-tabs="timeline" data-width="250" data-height="90" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/profile.php?id=100090390816536" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/profile.php?id=100090390816536">Công Ty Cổ Phần Tư Vấn Thiết Kế Quản Lý Dự Án Và Phát Triển Công Nghệ DMT</a></blockquote></div>
                    </div>
                </div>
                <div class="col-lg-4 offset-lg-1">
                    <h4 class="text-color-dark font-weight-bold mb-4-5">{{$t('message.provide')}}</h4>
                    <ul class="list list-unstyled columns-lg-2">
                        <li>
                            <router-link :to="{ name: 'home'}" class="text-color-hover-primary">
                                {{$t('message.home')}}
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'aboutUs'}" class="text-color-hover-primary">
                                {{$t('message.about_us')}}
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'service'}" class="text-color-hover-primary">
                                {{$t('message.services')}}
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'projectList'}" class="text-color-hover-primary">
                                {{$t('message.projects')}}
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'postList'}" class="text-color-hover-primary">
                                {{$t('message.news')}}
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'contactUs'}" class="text-color-hover-primary">
                                {{$t('message.contact')}}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-5">
                    <h4 class="text-color-dark font-weight-bold mb-4-5">{{$t('message.email_contact')}}</h4>
                    <div class="newsletter">
                        <div class="alert alert-danger d-none" id="newsletterError"></div>
                        <div id="newsletterForm" class="mb-4-5">
                            <div class="input-group">
                                <input class="form-control border-0"
                                       :placeholder="$t('message.your_email')"
                                       v-model="contact.email"
                                       name="newsletterEmail"
                                       id="newsletterEmail"
                                       type="email">
                                <button class="btn btn-primary px-3" type="button" @click="saveEmail(contact)">
                                    <img width="27" height="27" class="arrow-icon"
                                         src="/assets/img/demos/construction/icons/arrow-right-white.svg" alt="" data-icon
                                         data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light'}"
                                         style="width: 27px;"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <ul class="list list-unstyled list-inline">
                        <li class="list-inline-item d-inline-flex align-items-center">
                            <img width="23" height="23" src="/assets/img/demos/construction/icons/phone.svg" alt=""
                                 data-icon
                                 data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-dark'}"/>
                            <a href="tel:0912628197"
                               class="text-decoration-none text-color-dark text-color-hover-primary font-weight-bold text-3-5 ms-2">(+84)
                                912628197</a>
                        </li>
                        <li class="list-inline-item d-inline-flex align-items-center ms-0 ms-sm-4 ms-lg-1 ms-xl-4">
                            <img width="23" height="23" src="/assets/img/demos/construction/icons/email.svg" alt=""
                                 data-icon
                                 data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-dark'}"/>
                            <a href="mailto:0912628197"
                               class="text-decoration-none text-color-dark text-color-hover-primary font-weight-bold text-3-5 ms-2">minh@dmt.net.vn</a>
                        </li>
                    </ul>
                </div>
            </div>

            <hr>

            <div class="footer-copyright bg-transparent mt-5-5">
                <div class="row pb-5">
                    <div class="col text-center mb-5">
                        <p class="text-color-grey text-3 mb-3">DMT © 2023. All Rights Reserved.</p>
                        <ul class="footer-social-icons social-icons social-icons-clean social-icons-medium mb-5">
                            <li class="social-icons-instagram">
                                <a href="http://www.instagram.com/" target="_blank" title="Instagram"><i
                                    class="fab fa-instagram text-4"></i></a>
                            </li>
                            <li class="social-icons-twitter">
                                <a href="http://www.twitter.com/" target="_blank" title="Twitter"><i
                                    class="fab fa-twitter text-4"></i></a>
                            </li>
                            <li class="social-icons-facebook">
                                <a href="http://www.facebook.com/" target="_blank" title="Facebook"><i
                                    class="fab fa-facebook-f text-4"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p class="text-color-grey text-3 mb-3 text-center" id="developer">{{$t('message.developed_and_operated')}}<a
                    href="https://www.facebook.com/tientung2206">Tien
                    Luu</a>.</p>
            </div>

        </div>
        <div class="position-absolute left-100pct transform3dx-n50 top-0 d-none d-lg-block">
            <div>
                <div class="custom-square-1 custom-square-1-big bg-dark mt-0 mb-5 me-5"></div>
            </div>
        </div>
        <phone-ring-component></phone-ring-component>
    </footer>
</template>

<script>

import ContactService from "../../services/ContactService";

export default {
    name: "Footer",
    data() {
        return {
            contact: {
                showMessage: true
            }
        };
    },
    mounted() {
    },
    methods: {
        saveEmail(contact) {
            if (contact.email == null || contact.email == "" || contact.email == undefined) return;
            ContactService.saveEmail(this.contact, true).then(response => {
                this.contact = {};
            }).catch(response => {
            });
        }
    }
}
</script>
