<template>
    <footer id="footer" class="overflow-hidden border-0 m-0"
            style="background-image: url(/assets/img/demos/construction/backgrounds/background-2.jpg); background-repeat: no-repeat; background-position: center bottom;">
        <div class="container pt-5">
            <div class="row pt-4 mb-5 gy-4">
                <div class="col-lg-2 align-self-center">
                    <a href="demo-construction.html">
                        <img alt="Porto" class="img-fluid logo" width="123" height="48"
                             src="/assets/img/business-image/logo/dmt-logo.png">
                    </a>
                </div>
                <div class="col-lg-4 offset-lg-1">
                    <h4 class="text-color-dark font-weight-bold mb-4-5">Cung cấp</h4>
                    <ul class="list list-unstyled columns-lg-2">
                        <li>
                            <a href="demo-construction.html" class="text-color-hover-primary">
                                Trang chủ
                            </a>
                        </li>
                        <li>
                            <a href="demo-construction-company.html" class="text-color-hover-primary">
                                Về chúng tôi
                            </a>
                        </li>
                        <li>
                            <a href="demo-construction-services.html" class="text-color-hover-primary">
                                Dịch vụ
                            </a>
                        </li>
                        <li>
                            <a href="demo-construction-projects.html" class="text-color-hover-primary">
                                Dự án
                            </a>
                        </li>
                        <li>
                            <a href="demo-construction-blog.html" class="text-color-hover-primary">
                                Tin tức & sự kiện
                            </a>
                        </li>
                        <li>
                            <a href="demo-construction-contact.html" class="text-color-hover-primary">
                                Liên hệ
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-5">
                    <h4 class="text-color-dark font-weight-bold mb-4-5">Email liên hệ</h4>
                    <div class="newsletter">
                        <div class="alert alert-danger d-none" id="newsletterError"></div>
                        <div id="newsletterForm" class="mb-4-5">
                            <div class="input-group">
                                <input class="form-control border-0"
                                       placeholder="Email của bạn"
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
                            <a href="tel:0123456789"
                               class="text-decoration-none text-color-dark text-color-hover-primary font-weight-bold text-3-5 ms-2">(+84)
                                912628197</a>
                        </li>
                        <li class="list-inline-item d-inline-flex align-items-center ms-0 ms-sm-4 ms-lg-1 ms-xl-4">
                            <img width="23" height="23" src="/assets/img/demos/construction/icons/email.svg" alt=""
                                 data-icon
                                 data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-dark'}"/>
                            <a href="mailto:0123456789"
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
                <p class="text-color-grey text-3 mb-3 text-center" id="developer">Phát triển và vận hành bởi <a
                    href="https://www.facebook.com/tientung2206">Tien
                    Luu</a>.</p>
            </div>

        </div>
        <div class="position-absolute left-100pct transform3dx-n50 top-0 d-none d-lg-block">
            <div>
                <div class="custom-square-1 custom-square-1-big bg-dark mt-0 mb-5 me-5"></div>
            </div>
        </div>
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
