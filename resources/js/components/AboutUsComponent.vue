<template>
    <div>
        <section class="section section-height-3 border-0 m-0"
                 style="background-image: url(/assets/img/business-image/our-service.png);  background-repeat:   no-repeat; background-size: cover; background-position: center center;">
            <div class="container position-relative pt-5 pb-5-5 mt-5 mb-5">
                <div class="row justify-content-end pt-1 mt-lg-5">
                    <div class="col-7 col-md-5 position-relative">
                        <ul class="breadcrumb d-block ps-2 text-color-light">
                            <li>
                                <router-link class="fz-12-i" :to="{ name: 'home'}">
                                    Trang chủ
                                </router-link>
                            </li>
                            <li class="active fz-12-i before-o-1">Về chúng tôi</li>
                        </ul>
                        <h1 class="position-absolute top-100 left-0 text-color-light font-weight-bold text-6 line-height-3 text-end mt-5-5">
                            <span class="d-block position-relative z-index-1 pb-5 ps-lg-3">Về chúng tôi</span>
                            <span class="custom-svg-position-1 custom-svg-position-1-variation">
				                        <svg class="svg-fill-color-primary mt-1 "
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
        <div class="container custom-margin-1">
            <div class="row gy-5 gy-lg-0">
                <div class="col-lg-8 order-lg-2 mt-0 ">
                    <div id="who-we-are" class="row">
                        <div class="col">
                            <h2 class="text-color-dark font-weight-bold text-7 line-height-1 mb-4">Chúng tôi là ai</h2>
                            <div class="common-aspect">
                                <img src="/assets/img/business-image/about-us/about-us-3.jpg" class="img-fluid mb-4"
                                     alt="DMT"/>
                            </div>
                            <div>
                                <p class="fz-16">
                                    Công ty CP Tư vấn Thiết kế Quản lý dự án và phát triển công nghệ DMT xin
                                    gửi lời chúc sức khỏe và lời chào trân trọng nhất đến toàn thể Quý khách hàng.
                                </p>
                                <p class="fz-16">
                                    DMT được thành lập năm 2008 với phạm vi hoạt động tại Việt Nam và Quốc
                                    tế về lĩnh vực tư vấn thiết kế công trình . Với đội ngũ nhân viên giàu kinh nghiệm,
                                    năng động và sáng tạo ,trong thời gian qua chúng tôi đã hoàn thành thiết kế
                                    nhiều công trình có giá trị.
                                </p>
                                <p class="fz-16">
                                    Bằng việc áp dụng những kỹ thuật mới nhất vào sản xuất và quản lý chất
                                    lượng các công trình thiết kế và thi công xây dựng của DMT đã khẳng định niềm
                                    tin và chỗ đứng trong lòng Qúy khách hàng .
                                </p>
                                <p class="fz-16">
                                    Chúng tôi sẽ tiếp tục cố gắng hơn nữa nhằm nâng cao chất lượng sản phẩm và
                                    dịch vụ để nhận được sự hài lòng trọn vẹn nhất từ phía Qúy khách hàng.
                                </p>
                            </div>
                            <div class="text-center">
                                <div class="text-start ps-3 ms-1 text-center"><strong
                                    class="text-4-5 negative-ls-1 text-111">NGÔ TRÍ LÊ MINH</strong>
                                    <p class="text-color-default mb-0">Tổng giám đốc</p></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="col-lg-4 order-lg-1 position-relative">
                    <aside class="sidebar" id="sidebar">
                        <div class="mgb-10">
                            <h3 class="text-color-dark font-weight-bold text-transform-none text-5-5 line-height-1 mgb-10">Profile</h3>
                            <a href="/assets/pdf/PROFILE.pdf">PROFILE.PDF</a>
                        </div>
                        <h3 class="text-color-dark font-weight-bold text-transform-none text-5-5 line-height-1 mgb-30">
                            Để lại lời nhắn</h3>
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
                                            class="custom-view-more d-inline-flex align-items-center btn btn-primary font-weight-semibold rounded-0 text-3-5 btn-px-2">
                                        Gửi
                                        <img width="27" height="27" class="arrow-icon"
                                             src="/assets/img/demos/construction/icons/arrow-right-white.svg" alt=""/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>

        <div class="position-relative pb-5 d-none d-xl-block pdt-20">
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
import {serviceBus} from "../serviceBus";

export default {
    name: "AboutUs",
    mounted() {
        serviceBus.$emit('initLocale');
    },
    data() {
        return {
            contact: {},
            errors: {}
        };
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
