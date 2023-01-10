<template>
    <div class="contact-us-page">
        <section class="section section-height-3 border-0 m-0">
            <div class="container position-relative pt-5 pb-5-5 mt-5 mb-5">
                <div class="row justify-content-end pt-1 mt-lg-5">
                    <div class="col-7 col-md-5 position-relative">
                        <ul class="breadcrumb d-block ps-2 ">
                            <li>
                                <router-link class="fz-12-i" :to="{ name: 'home'}">
                                    Trang chủ
                                </router-link>
                            </li>
                            <li class="active fz-12-i">Liên hệ</li>
                        </ul>
                        <h1 class="position-absolute top-100 left-0 text-color-light font-weight-bold text-6 line-height-3 text-end mt-5-5">
                            <span class="d-block position-relative z-index-1 pb-5 ps-lg-3">Liên hệ</span>
                            <span class="custom-svg-position-1 custom-svg-position-1-variation">
				                        <svg class="svg-fill-color-dark mt-1 "
                                             xmlns="http://www.w3.org/2000/svg"
                                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                             viewBox="0 0 859.45 88.44" xml:space="preserve" preserveAspectRatio="none">
				                            <polyline points="7.27,84.78 855.17,84.78 855.17,4.79 84.74,4.79 "/>
				                        </svg>
				                    </span>
                        </h1>
                    </div>
                </div>
            </div>
        </section>
        <div class="container pt-4 pb-5 pb-sm-0 my-5">
            <div class="row pb-2 mb-5">
                <div class="col-lg-6 mb-4 mb-lg-0">
                    <div class="row">
                        <div class="col-auto">
                            <h3 class="d-block text-color-grey positive-ls-3 font-weight-medium text-2 mb-1">Gọi cho
                                chúng tôi</h3>
                            <a href="tel:0912628197"
                               class="d-flex align-items-center text-decoration-none text-color-dark text-color-hover-primary font-weight-bold text-3-5">
                                <img width="23" height="23" src="/assets/img/demos/construction/icons/phone.svg"
                                     alt=""/>
                                (+84) 912628197
                            </a>
                        </div>
                        <div class="col-auto">
                            <h3 class="d-block text-color-grey positive-ls-3 font-weight-medium text-2 mb-1">Gửi
                                email</h3>
                            <a href="mailto:minh@dmt.net.vn"
                               class="d-flex align-items-center text-decoration-none text-color-dark text-color-hover-primary font-weight-bold text-3-5">
                                <img width="23" height="23" src="/assets/img/demos/construction/icons/email.svg"
                                     alt=""/>
                                minh@dmt.net.vn
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <h3 class="d-block text-color-grey positive-ls-3 font-weight-medium text-2 mb-1">Địa chỉ văn
                        phòng</h3>
                    <span class="d-flex align-items-center text-color-dark font-weight-bold text-3-5">
								<img width="23" height="23" src="/assets/img/demos/construction/icons/location.svg"
                                     alt=""/>TẦNG 2, TÒA NHÀ VIMECO , LÔ E9 , Đ.PHẠM HÙNG ,P.TRUNG HÒA , Q.CẦU GIẤY, TP. HÀ NỘI
							</span>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 mb-4 mb-lg-0">
                    <h2 class="font-weight-bold text-color-dark text-6 mgb-10">Để lại lời nhắn</h2>
                    <div class="contact-form form-style-3">
                        <div class="row">
                            <div class="form-group col mb-3-5">
                                <input type="text" maxlength="200"
                                       v-model="contact.name"
                                       :class="{'is-invalid': errors.name}"
                                       class="form-control text-3 h-auto py-3-5" name="name" placeholder="Họ và tên"
                                       required>
                                <div class="invalid-feedback" v-if="errors.name">
                                                            <span v-for="error in errors.name"
                                                                  class="d-block">{{ error }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col mb-3-5">
                                <input type="number"
                                       maxlength="20"
                                       v-model="contact.phone_number"
                                       :class="{'is-invalid': errors.phone_number}"
                                       class="form-control text-3 h-auto py-3-5"
                                       name="phone_number"
                                       placeholder="Số điện thoại" required>
                                <div class="invalid-feedback" v-if="errors.phone_number">
                                                            <span v-for="error in errors.phone_number"
                                                                  class="d-block">{{ error }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col mb-3-5">
                                <input type="email"
                                       v-model="contact.email"
                                       maxlength="200"
                                       :class="{'is-invalid': errors.email}"
                                       class="form-control text-3 h-auto py-3-5" name="email"
                                       placeholder="Email" required>
                                <div class="invalid-feedback" v-if="errors.email">
                                                            <span v-for="error in errors.email"
                                                                  class="d-block">{{ error }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col mb-3-5">
                                <textarea maxlength="5000" rows="8" v-model="contact.message"
                                          class="form-control text-3 h-auto py-3-5" name="message"
                                          :class="{'is-invalid': errors.message}"
                                          placeholder="Lời nhắn"
                                          required></textarea>
                                <div class="invalid-feedback" v-if="errors.message">
                                                            <span v-for="error in errors.message"
                                                                  class="d-block">{{ error }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col">
                                <button type="button"
                                        @click="saveContact"
                                        class="custom-view-more d-inline-flex align-items-center btn btn-primary font-weight-semibold rounded-0 text-3-5 btn-px-4 btn-py-2">
                                    Gửi
                                    <img width="27" height="27" class="arrow-icon"
                                         src="/assets/img/demos/construction/icons/arrow-right-white.svg" alt=""/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <h2 class="font-weight-bold text-color-dark text-6 mgb-10">Trụ sở công ty</h2>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5858180404994!2d105.78933671476294!3d21.009233486008913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aca8e59fd5a9%3A0xcb3ade3634bb673!2zVMOyYSBOaMOgIFZpbWVjbywgUGjhuqFtIEjDuW5nLCBN4buFIFRyw6wsIE5hbSBU4burIExpw6ptLCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1672584880272!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>

        <div class="position-relative pb-5 d-none d-xl-block pdt-60">
            <div class="position-absolute transform3dy-n50 left-0">
                <div>
                    <div class="custom-square-1 bg-primary mt-0 mb-5"></div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import ContactService from "../services/ContactService";

export default {
    name: "ContactUs",
    data() {
        return {
            contact: {},
            errors: {}
        };
    },
    mounted() {
    },
    methods: {
        saveContact() {
            ContactService.save(this.contact, true).then(response => {
                this.errors = {};
                this.contact = {};
            }).catch(response => {
                this.errors = response.errors || {};
            });
        }
    }
}
</script>
