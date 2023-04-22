<template>
    <div role="main" class="main">
        <section v-if="sliders.length">
            <VueSlickCarousel v-bind="settings" class="slick-wrapper style-1">
                <div class="slick-inner" v-for="(item,i) in sliders"
                     :style="{'background-image': 'url(' + `/uploads/images/`+`${item.image}`+ ')','background-size': 'cover', 'background-position': 'center center'}"
                     :key="i">
                    <div class="container position-relative z-index-1 h-100">
                        <p class="position-absolute bottom-15 right-0 text-color-light font-weight-bold text-5-5 line-height-3 text-end pb-0 pb-lg-5 mb-0 d-none d-sm-block">
                                <span
                                    class="d-block line-height-1 position-relative z-index-1 pb-5 ps-lg-3 mb-5-5 fz-18-i">{{
                                        item.description
                                    }}</span>
                            <span class="custom-svg-position-1">
											<svg class="svg-fill-color-primary-transparent" xmlns="http://www.w3.org/2000/svg"
                                                 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                 viewBox="0 0 859.45 88.44" xml:space="preserve"
                                                 preserveAspectRatio="none">
												<polyline points="7.27,84.78 855.17,84.78 855.17,4.79 84.74,4.79 "/>
											</svg>
										</span>
                        </p>
                    </div>
                </div>
            </VueSlickCarousel>
        </section>


        <div class="container py-5 my-3">
            <div class="row justify-content-between align-items-center flex-lg-nowrap gy-3">
                <div class="col-lg-5">
                    <h2 class="text-color-dark font-weight-bold text-7 line-height-1 mb-3-5 appear-animation"
                        data-appear-animation="fadeInUpShorterPlus" data-appear-animation-delay="500">
                        {{ $t('message.who_we_are') }}
                    </h2>
                    <p class="text-4 font-weight-light mb-0 appear-animation"
                       data-appear-animation="fadeInUpShorterPlus" data-appear-animation-delay="800">
                        {{ $t('message.who_we_are1') }}
                    </p>
                </div>
                <div class="col-auto d-none d-lg-block">
                    <svg width="145" height="147" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 145.42 147.12"
                         xml:space="preserve" stroke-miter-limit="10" stroke-dasharray="7"
                         data-appear-animation-svg="true">
								<line stroke="#a2a2a2" stroke-dasharray="8" x1="14.75" y1="132.9" x2="133.81" y2="12.05"
                                      class="appear-animation" data-appear-animation="fadeIn"
                                      data-appear-animation-delay="1000" data-appear-animation-duration="100ms"/>
                        <line stroke="#FFF" stroke-dasharray="8" stroke-width="2" x1="14.75" y1="132.9" x2="133.81"
                              y2="12.05" class="appear-animation" data-appear-animation="customLineDividerAnim"
                              data-appear-animation-delay="1000" data-appear-animation-duration="700ms"/>
							</svg>
                </div>
                <div class="col-lg-5">
                    <p class="font-weight-medium text-3-5 appear-animation" data-appear-animation="fadeInUpShorterPlus"
                       data-appear-animation-delay="1500"> {{ $t('message.who_we_are2') }}<span
                        class="highlight highlight-primary highlight-bg-opacity highlight-animated"
                        data-appear-animation="highlight-animated-start" data-appear-animation-delay="2700"
                        data-plugin-options="{'flagClassOnly': true}">{{
                            $t('message.who_we_are21')
                        }}</span>{{ $t('message.who_we_are22') }}
                    </p>
                    <router-link :to="{ name: 'aboutUs'}"
                                 class="custom-view-more d-inline-flex font-weight-medium text-color-primary text-decoration-none appear-animation"
                                 data-appear-animation="fadeInUpShorterPlus" data-appear-animation-delay="2000">
                        {{ $t('message.show_more') }}
                        <img width="27" height="27" class="arrow-icon"
                             src="/assets/img/demos/construction/icons/arrow-right.svg" alt=""
                             data-icon
                             data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary ms-2'}"/>
                    </router-link>
                </div>
            </div>
        </div>

        <section class="section position-relative overflow-hidden border-0 m-0 pdb-30-i">
            <div class="container pt-5-5 pb-5 mb-3">
                <div class="row mb-5-5">
                    <div class="col">
                        <h2 class="text-color-dark font-weight-bold text-7 line-height-1 mb-3-5 appear-animation"
                            data-appear-animation="fadeInUpShorterPlus" data-appear-animation-delay="300">
                            {{ $t('message.services') }}</h2>
                        <p class="text-4 font-weight-light appear-animation" data-appear-animation="fadeInUpShorterPlus"
                           data-appear-animation-delay="500">{{ $t('message.our_service_title') }}</p>
                    </div>
                </div>
                <div class="row">
                    <div v-for="(item,index) in serviceByLocale" class="col-md-6 mgb-20 appear-animation"
                         data-appear-animation="fadeInUpShorterPlus"
                         data-appear-animation-delay="500">
                        <div class="d-flex align-items-start">
                            <img class="flex-0-0-auto" width="60" height="60"
                                 :src="item.icon" alt=""
                                 data-icon
                                 data-plugin-options="{'animated': true, 'delay': 1200, 'strokeBased': true, 'extraClass': 'svg-stroke-color-dark'}"/>
                            <div class="ps-4">
                                <h3 class="text-color-dark font-weight-bold text-transform-none text-5 mb-2">
                                    {{ item.title }}</h3>
                                <p class="font-weight-light text-3-5 mb-3-5">{{ item.excerpt }}</p>
                                <router-link :to="{ name: 'serviceDetail',params: {id:item.id }}"
                                             class="custom-view-more d-inline-flex font-weight-medium text-color-primary text-decoration-none">
                                    {{ $t('message.show_more') }}
                                    <img width="27" height="27" class="arrow-icon"
                                         src="/assets/img/demos/construction/icons/arrow-right.svg"
                                         alt="" data-icon
                                         data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary ms-2'}"/>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 text-center" v-show="!isLoadMoreService">
                        <router-link :to="{ name: 'service'}"
                                     class="custom-view-more d-inline-flex align-items-center btn btn-primary font-weight-semibold rounded-0 text-3-5 btn-px-4 btn-py-2 appear-animation"
                                     data-appear-animation="fadeInUpShorterPlus" data-appear-animation-delay="700">
                            {{ $t('message.show_more') }}
                            <img class="mgl-5 arrow-icon-down" width="15" height="15"
                                 src="/assets/img/business-icons/arrow-down.svg"
                                 alt=""
                                 data-icon
                                 data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light ms-2'}"/>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="d-none d-lg-block position-absolute transform3dy-n50 right-0 pe-5 me-4">
                <div class="appear-animation" data-appear-animation="fadeInRightShorterPlus"
                     data-appear-animation-delay="1700" data-appear-animation-duration="750ms">
                    <div class="custom-square-1 bg-primary mb-5"></div>
                </div>
            </div>
            <div class="d-none d-lg-block position-absolute transform3dy-n50 right-15 pe-5 me-5">
                <div class="appear-animation" data-appear-animation="fadeInRightShorterPlus"
                     data-appear-animation-delay="1500" data-appear-animation-duration="750ms">
                    <div class="custom-square-1 bg-dark pe-5 me-5 mt-4 mb-5"></div>
                </div>
            </div>
        </section>

        <div class="container py-5 my-5-5">
            <div class="row">
                <div class="col">
                    <h2 class="text-color-dark font-weight-bold text-7 line-height-1 mb-3-5">
                        {{ $t('message.projects') }}</h2>
                    <p class="text-4 font-weight-light">{{ $t('message.project_title') }}</p>
                </div>
            </div>
            <div class="__pc" v-if="projectPaginate.data.length > 0">
                <div class="row">
                    <div class="col">
                        <div class="position-relative">
                            <svg
                                class="diamonds-svg-line position-absolute bottom-0 left-15 mb-4 ms-5 d-none d-xl-block"
                                width="100%" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px" y="0px" viewBox="0 0 1145.86 508.13" xml:space="preserve"
                                data-appear-animation-svg="true">
									<g>
										<path d="M13.87,32.36c1.07,0.55,2.37-0.28,2.4-1.49c0.04-1.58,0.27-2.87,0.5-3.82c0.56-2.35,1.48-4.1,2.65-6.33
											c1.7-3.25,1.95-2.85,2.46-4.35c1.47-4.3-0.36-8.19-0.47-8.41c-0.36-0.74-1.54-3.15-4.06-4.44c-3.71-1.9-8.87-0.94-11.91,2.46
											c-2.64,2.95-3.08,7.05-2.08,9.92c0.25,0.71,1.6,2.01,3.64,4.75c3.62,4.87,3.42,4.53,4.11,6.02c1.3,2.83,1.07,4.78,2.74,5.67
											C13.85,32.35,13.86,32.36,13.87,32.36z"/>
                                        <circle fill="#FFF" cx="12.65" cy="12.54" r="6.34"/>
                                        <circle cx="12.65" cy="12.54" r="4.29"/>
                                        <circle fill="#FFF" cx="12.65" cy="12.54" r="2.44"/>
									</g>
                                <g>
										<path d="M1121.72,505.34c0.44,1.12,1.97,1.35,2.79,0.47c1.08-1.16,2.1-1.98,2.9-2.54c1.98-1.4,3.82-2.11,6.17-3.01 c3.43-1.32,3.35-0.86,4.71-1.64c3.94-2.26,5.13-6.39,5.19-6.63c0.22-0.79,0.92-3.38-0.12-6.02c-1.53-3.87-6.04-6.56-10.57-6.01 c-3.93,0.47-6.97,3.27-8.11,6.08c-0.28,0.69-0.12,2.56-0.4,5.97c-0.49,6.05-0.42,5.66-0.89,7.24c-0.89,2.98-2.35,4.3-1.68,6.07
										C1121.71,505.32,1121.71,505.33,1121.72,505.34z"/>
                                    <circle fill="#FFF" cx="1133.88" cy="489.64" r="6.34"/>
                                    <circle cx="1133.88" cy="489.64" r="4.29"/>
                                    <circle fill="#FFF" cx="1133.88" cy="489.64" r="2.44"/>
									</g>
                                <g>
										<g>
											<path class="appear-animation" data-appear-animation="fadeIn"
                                                  data-appear-animation-delay="300"
                                                  data-appear-animation-duration="100ms" fill="none" stroke="#bfbfbf"
                                                  stroke-miter-limit="10" stroke-dasharray="8.9374,8.9374" d="M22.48,46.84c12.43,19.8,37.11,58.25,65.34,90.46c6.24,7.12,38.23,43.11,89.76,77.67
												c27.53,18.47,93.42,58.51,184.44,74.83c63.3,11.35,123.7,8.54,152.88,7.18c18.43-0.86,20.79-1.63,44.6-2.65
												c25.38-1.08,74.44-3.04,134.17,1.51c27.49,2.09,68.09,5.34,120,16.82c38.84,8.59,89.79,20.21,149.48,50.83
												c17.94,9.21,51.96,27.97,87.87,57.83c28.32,23.54,43.15,41.79,52.16,54.24c5.04,6.97,9.21,13.45,12.57,19.04"/>
                                            <path class="appear-animation"
                                                  data-appear-animation="customDiamondsLineAnim"
                                                  data-appear-animation-delay="300" data-appear-animation-duration="10s"
                                                  fill="none" stroke="#FFF" stroke-width="2" stroke-miter-limit="10"
                                                  stroke-dasharray="8.9374,8.9374" d="M22.48,46.84c12.43,19.8,37.11,58.25,65.34,90.46c6.24,7.12,38.23,43.11,89.76,77.67
												c27.53,18.47,93.42,58.51,184.44,74.83c63.3,11.35,123.7,8.54,152.88,7.18c18.43-0.86,20.79-1.63,44.6-2.65
												c25.38-1.08,74.44-3.04,134.17,1.51c27.49,2.09,68.09,5.34,120,16.82c38.84,8.59,89.79,20.21,149.48,50.83
												c17.94,9.21,51.96,27.97,87.87,57.83c28.32,23.54,43.15,41.79,52.16,54.24c5.04,6.97,9.21,13.45,12.57,19.04"/>
										</g>
									</g>
								</svg>
                            <div>
                                <div class="diamonds-wrapper" v-if="projectPaginate.data.length > 0">
                                    <ul class="diamonds mb-0"
                                        data-appear-animation="fadeInUpShorter" data-appear-animation-delay="600">
                                        <li v-for="(item,i) in projectPaginate.data">
                                            <router-link class="diamond lightbox border-ccc"
                                                         :to="{ name: 'projectDetail', params: { slug: item.slug,id:item.id }}"
                                                         :class="(i == 3 || i == 5 || i == 6) ? 'diamond-sm' : ''"
                                                         :key="i">
                                                <div class="content">
                                                    <img :src="'/uploads/images/'+item.image"
                                                         class="img-fluid plugin-random-images" alt=""/>
                                                </div>
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="__mobile dmt-project" v-if="projectPaginate.data.length > 0">
                <div class="row sort-destination g-4 px-0">
                    <div class="col-sm-6 isotope-item" v-for="(item,i) in projectPaginate.data">
                        <div class="portfolio-item">
                            <div
                                class="thumb-info thumb-info-no-borders thumb-info-no-borders-rounded thumb-info-centered-icons mb-3-5">
                                <router-link class="thumb-info-wrapper"
                                             :to="{ name: 'projectDetail', params: { slug: item.slug,id:item.id }}">
                                    <img :src="'/uploads/images/'+item.image" :alt="item.image"
                                         @error="setDefaultImg"
                                         class="img-fluid" alt="DMT Image">
                                </router-link>
                            </div>
                            <h6 class="font-weight-bold text-5-5 line-height-3">
                                <router-link
                                    class="text-color-dark text-color-hover-primary text-decoration-none fz-20"
                                    :to="{ name: 'projectDetail', params: { slug: item.slug,id:item.id }}">
                                    {{ item.name }}
                                </router-link>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="position-relative">
                        <div class="preview-image-wrapper">
                            <vue-gallery-slideshow :images="project_images" :index="index"
                                                   @close="onClose"></vue-gallery-slideshow>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 col-lg-6">
                    <p class="text-3-5 appear-animation mgb-20" data-appear-animation="fadeInUpShorterPlus"
                       data-appear-animation-delay="500">{{ $t('message.project_content1') }}<span
                        class="highlight highlight-primary highlight-bg-opacity highlight-animated"
                        data-appear-animation="highlight-animated-start" data-appear-animation-delay="1100"
                        data-plugin-options="{'flagClassOnly': true}">{{ $t('message.project_content11') }}</span>
                        {{ $t('message.project_content12') }}</p>
                    <router-link :to="{ name: 'projectList'}"
                                 class="custom-view-more d-inline-flex align-items-center btn btn-primary font-weight-semibold rounded-0 text-3-5 btn-px-4 btn-py-2 appear-animation"
                                 data-appear-animation="fadeInUpShorterPlus" data-appear-animation-delay="700">
                        {{ $t('message.show_more') }}
                        <img width="27" height="27" class="arrow-icon"
                             src="/assets/img/demos/construction/icons/arrow-right-white.svg" alt=""
                             data-icon
                             data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light ms-2'}"/>
                    </router-link>
                </div>
            </div>
        </div>

        <section>
            <div class="parallax section section-text-light section-parallax section-center my-0 company-counter pd-0-i"
                 data-plugin-parallax data-plugin-options="{'speed': 1.5, 'parallaxHeight': '200%'}"
                 data-image-src="/assets/img/business-image/he-thong-cap-nuoc-chung-cu-4-min.jpg">
                <div class="__overlay">
                </div>
                <div class="container position-relative pdt-50 pdb-50">
                    <div class="row py-5 counters counters-text-light">
                        <div class="col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div class="counter appear-animation" data-appear-animation="fadeInUpShorterPlus"
                                 data-appear-animation-delay="300">
                                <img width="44" height="50" src="/assets/img/business-icons/buildings.svg" alt=""
                                     data-icon
                                     data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-light d-inline-block ms-2 p-relative bottom-1'}"/>
                                <strong class="pt-3 custom-font-secondary font-weight-bold" data-to="1">0</strong>
                                <label class="pt-2 text-4 opacity-7">{{ $t('message.office') }}</label>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div class="counter appear-animation" data-appear-animation="fadeInUpShorterPlus"
                                 data-appear-animation-delay="300">
                                <img width="60" height="50" src="/assets/img/business-icons/house-plant.svg" alt=""
                                     data-icon
                                     data-plugin-options="{'onlySVG': true, 'extraClass': 'd-inline-block ms-2 p-relative bottom-1'}"/>
                                <strong class="pt-3 custom-font-secondary font-weight-bold" data-to="80"
                                        data-append="+">0</strong>
                                <label class="pt-2 text-4 opacity-7">{{ $t('message.finished_project') }}</label>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div class="counter appear-animation" data-appear-animation="fadeInUpShorterPlus"
                                 data-appear-animation-delay="300">
                                <img width="60" height="50" src="/assets/img/demos/law-firm/icons/satisfied-clients.svg"
                                     alt="" data-icon
                                     data-plugin-options="{'onlySVG': true, 'extraClass': 'd-inline-block ms-2 p-relative bottom-1'}"/>
                                <strong class="pt-3 custom-font-secondary font-weight-bold" data-to="20"
                                        data-append="+">0</strong>
                                <label class="pt-2 text-4 opacity-7">{{ $t('message.employee') }}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section parallax border-0 pt-5 py-0 m-0" data-plugin-parallax
                 data-plugin-options="{'spped': '1.5', 'parallaxHeight': '125%', 'fadeIn': true}"
                 data-image-src="/assets/img/business-image/background-1.jpg">
            <div class="container mgb-40">
                <div class="row mb-5-5">
                    <div class="col">
                        <h2 class="text-color-dark font-weight-bold text-7 line-height-1 mb-3-5 appear-animation"
                            data-appear-animation="fadeInUpShorterPlus" data-appear-animation-delay="300">
                            {{ $t('message.leadership_team') }}</h2>
                        <p class="text-4 font-weight-light appear-animation" data-appear-animation="fadeInUpShorterPlus"
                           data-appear-animation-delay="500">{{ $t('message.leadership_team_title') }}</p>
                    </div>
                </div>
                <div class="row gy-5">
                    <div class="col-lg-6 text-center">
                        <img src="/assets/img/business-image/people/Picture2.png" class="img-fluid appear-animation"
                             data-appear-animation="fadeInUpShorterPlus"
                             data-appear-animation-delay="500"
                             alt="Director"/>
                        <div class="testimonial-author text-start ps-3 ms-1 text-center appear-animation"
                             data-appear-animation="fadeInUpShorterPlus"
                             data-appear-animation-delay="300">
                            <strong class="text-4-5 negative-ls-1 text-111">MR.NGÔ TRÍ LÊ MINH</strong>
                            <p class="text-color-default mb-0">{{ $t('message.general_manager') }}</p>
                        </div>
                    </div>
                    <div class="col-lg-6 pb-lg-5 ps-5">
                        <div class="fz-16">
                            <ul style="list-style: disc outside;" class="appear-animation"
                                data-appear-animation="fadeInUpShorterPlus"
                                data-appear-animation-delay="500">
                                <li>
                                    {{ $t('message.leadership_content') }}
                                    <ul class="pdl-20" style="list-style: circle outside;">
                                        <li>{{ $t('message.leadership_content1') }}</li>
                                        <li>{{ $t('message.leadership_content2') }}</li>
                                        <li>{{ $t('message.leadership_content3') }}</li>
                                        <li>{{ $t('message.leadership_content4') }}</li>
                                        <li>{{ $t('message.leadership_content5') }}</li>
                                        <li>{{ $t('message.leadership_content6') }}</li>
                                        <li>{{ $t('message.leadership_content7') }}</li>
                                        <li>{{ $t('message.leadership_content8') }}</li>
                                        <li>{{ $t('message.leadership_content9') }}</li>
                                    </ul>
                                </li>
                                <li>{{ $t('message.leadership_content10') }}</li>
                                <li>{{ $t('message.leadership_content11') }}</li>
                                <li>{{ $t('message.leadership_content12') }}</li>
                            </ul>
                        </div>
                        <div class="progress-bars mgt-20 pb-4">
                            <div class="progress-label d-flex justify-content-between">
                                <span class="text-color-dark font-weight-semibold">{{ $t('message.reputation') }}</span>
                                <span class="text-color-dark font-weight-semibold">100%</span>
                            </div>
                            <div class="progress progress-xs progress-no-border-radius bg-color-light-scale-1 mb-4">
                                <div class="progress-bar progress-bar-primary"
                                     data-appear-progress-animation="100%"></div>
                            </div>
                            <hr class="my-0">
                            <div class="progress-label d-flex justify-content-between pt-2">
                                <span class="text-color-dark font-weight-semibold">{{ $t('message.safe') }}</span>
                                <span class="text-color-dark font-weight-semibold">100%</span>
                            </div>
                            <div class="progress progress-xs progress-no-border-radius bg-color-light-scale-1 mb-4">
                                <div class="progress-bar progress-bar-primary"
                                     data-appear-progress-animation="100%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row align-items-center text-center pdt-40 pdb-20">
                <div class="col">
                    <h2 class="mgb-30 text-color-dark font-weight-bold text-7 line-height-1 appear-animation text-center"
                        data-appear-animation="fadeInRightShorterPlus" data-appear-animation-delay="200">
                        {{ $t('message.partners') }}</h2>
                </div>
                <div data-appear-animation="fadeInUpShorterPlus"
                     data-appear-animation-delay="200"
                     class="d-flex align-items-center appear-animation partner owl-carousel owl-theme custom-nav-style-1 nav-style-1 nav-svg-arrows-1 nav-outside custom-dots-style-2 mb-0"
                     data-plugin-options="{'autoplay': true, 'autoplayTimeout': 2000,'responsive': {'0': {'items': 2, 'nav': false, 'dots': false}, '768': {'items': 3, 'nav': false, 'dots': false}, '992': {'items': 4, 'nav': false, 'dots': false}, '1200': {'items': 5, 'nav': false, 'dots': false}},'loop': false, 'autoHeight': false}">
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/logo-vinfast-inkythuatso-21-11-08-55.jpg" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/t-t-group.png" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/logo-tnr-holdings.png" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/vietinbank.png" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/tsg.png" alt class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/aiwado.png" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/an-khanh-jvc.jpg" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/anh-nguyen.jfif" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/ariyana.png" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/artc.jpg" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/ceo.png" alt class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/cuc-doi-ngoai.png" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/dong-phat.jpg" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/dong-phong.webp" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/flamingo.png" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/fresson.png" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/gammon.jfif" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/hai-quan-quang-ninh.jfif" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/hasky.jpg" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/Hoabinh.jpg" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/hoang-long.png" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/hoc-vien-nong-nghiep.png" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/HQ.jpg" alt class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/hung-ngan.jpg" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/kln.png" alt class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/lms.png" alt class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/logo-an-thinh-group-02.jpg" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/logo-entity.jpg" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/logo-geleximco.jpg" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/logo-hd-mon-holdings.jpg" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/logo-newtaco.png" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/logo-padagon-01.png" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/mipec.png" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/nam-son.png" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/park-city.jpg" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/searefico-ec-2.png" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/sld.png" alt class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/stavian.jpg" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/tan-hoa-lu.jpg" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/teel.jfif" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/thang-long-group.jfif" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/token.png" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/V-achi_brand_20210308-1.png" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/VIDIFI.png" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/viet-cafe.webp" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/logo-hd-mon-holdings.jpg" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/vihajico.jpg" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/vinapi.jfif" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/vinh-phuc.png" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="pdl-5 pdr-5">
                            <img src="/assets/img/business-image/partner/vinhomes-logo1.jpg" alt
                                 class="img-fluid d-inline-block"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="section section-height-3 border-0 m-0 lazyload"
                 data-bg-src="/assets/img/demos/business-consulting-3/backgrounds/background-3.jpg">
            <div class="container py-4">
                <div class="row">
                    <div class="col text-center">
                        <h3 class="text-9 line-height-3 text-transform-none font-weight-semibold text-color-dark pb-3 mb-4 appear-animation"
                            data-appear-animation="fadeInUpShorter" data-appear-animation-delay="500">
                            {{ $t('message.what_client_say') }}</h3>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-11 appear-animation" data-appear-animation="fadeInUpShorter"
                         data-appear-animation-delay="750">
                        <div
                            class="owl-carousel owl-theme custom-nav-style-1 nav-style-1 nav-svg-arrows-1 nav-outside custom-dots-style-2 bg-light box-shadow-4 mb-0"
                            data-plugin-options="{'responsive': {'0': {'items': 1, 'dots': true}, '768': {'items': 1}, '992': {'items': 1, 'nav': true, 'dots': false}, '1200': {'items': 1, 'nav': true, 'dots': false}}, 'loop': false, 'autoHeight': true}">
                            <div class="py-5 px-lg-5">
                                <div class="testimonial testimonial-style-2 px-4 mx-xl-5 my-3 text-center">
                                    <img width="40" height="40" class="d-inline-block"
                                         src="/assets/img/business-icons/left-quote.svg" alt=""
                                         style="width: 40px;"/>
                                    <div>
                                        <p class="text-color-dark text-4 line-height-8 alternative-font-4 mb-0">
                                            {{ $t('message.client_say1') }}</p>
                                    </div>
                                    <div class="testimonial-author">
                                        <strong class="font-weight-bold text-5-5 negative-ls-1">- Mr.Bình</strong>
                                        <p class="text-color-dark mb-0">{{ $t('message.construction_engineer') }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="py-5 px-lg-5">
                                <div class="testimonial testimonial-style-2 px-4 mx-xl-5 my-3 text-center">
                                    <img width="40" height="40" class="d-inline-block"
                                         src="/assets/img/business-icons/left-quote.svg" alt=""
                                         style="width: 40px;"/>
                                    <div>
                                        <p class="text-color-dark text-4 line-height-8 alternative-font-4 mb-0">
                                            {{ $t('message.client_say2') }}</p>
                                    </div>
                                    <div class="testimonial-author">
                                        <strong class="font-weight-bold text-5-5 negative-ls-1">- Ms.Ngọc</strong>
                                        <p class="text-color-dark mb-0">{{ $t('message.office_staff') }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <div class="container mt-5 pt-4 mb-5 mb-lg-4 mb-xl-0 pb-3 pb-xl-0">
            <div class="row">
                <div class="col">
                    <h2 class="text-color-dark font-weight-bold text-7 line-height-1 mb-3-5 appear-animation"
                        data-appear-animation="fadeInUpShorterPlus" data-appear-animation-delay="200">
                        {{ $t('message.news') }}</h2>
                    <p class="text-4 font-weight-light mb-5-5 appear-animation"
                       data-appear-animation="fadeInUpShorterPlus" data-appear-animation-delay="400">
                        {{ $t('message.our_recent_news') }}</p>
                </div>
            </div>
            <div class="row row-gutter-sm justify-content-center mb-4 appear-animation"
                 data-appear-animation="fadeInUpShorter" data-appear-animation-delay="600">
                <div class="col-sm-9 col-md-6 col-lg-4 mb-4 mb-lg-0" v-for="item in posts">
                    <post-item-component v-bind:item="item"></post-item-component>
                </div>
            </div>
        </div>

        <div class="position-relative pb-5 d-sm-none d-xl-block pdt-60">
            <div class="position-absolute transform3dy-n50 left-0">
                <div class="appear-animation" data-appear-animation="fadeInRightShorterPlus"
                     data-appear-animation-delay="1500" data-appear-animation-duration="1500ms">
                    <div class="custom-square-1 bg-primary mt-0 mb-5"></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import ProjectService from "../services/ProjectService";
import PostService from "../services/PostService";
import SliderService from "../services/SliderService";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import ProjectCategoryService from "../services/ProjectCategoryService";
import ProjectFieldService from "../services/ProjectFieldService";
import ProjectAreaService from "../services/ProjectAreaService";
import {mapGetters} from "vuex";
import {serviceBus} from "../serviceBus";
import LocaleService from "../services/LocaleService";


export default {
    name: "Home",
    components: {
        VueSlickCarousel
    },
    data() {
        return {
            isLoadingProject: true,
            projectPaginate: {
                data: []
            },
            timer: null,
            project_images: [],
            index: null,
            posts: [],
            isLoadingBlog: true,
            isLoadMoreService: false,
            serviceByLocale: {},
            sliders: [],
            settings: {
                "dots": true,
                "dotsClass": "slick-dots custom-dot-class",
                "edgeFriction": 0.5,
                "infinite": true,
                "speed": 1000,
                "draggable": false,
                "touchMove": true,
                "autoplay":true,
                "fade": true,
                "autoplaySpeed":6000,
                "pauseOnHover":false
            },
            isLoadingSlider: true
        };
    },
    computed: {
        ...mapGetters([
            'services',
            'locale',
        ])
    },
    methods: {
        initProjectImage() {
            this.project_images = [];
            if (this.projectPaginate.data.length > 0) {
                for (const project of this.projectPaginate.data) {
                    if (project.image == null) continue;
                    let image_url = window.location.protocol + "//" + window.location.host + '/uploads/images/' + project.image;
                    this.project_images.push(image_url);
                }
            }
        },

        showImage(i) {
            this.index = i;
            this.initProjectImage();
        },
        loadMoreService() {
            this.isLoadMoreService = true;
        },
        onClose() {
            this.index = null;
            this.project_images = [];
        },
        setDefaultImg(event) {
            event.target.src = window.location.protocol + "//" + window.location.host + '/assets/img/business-image/default/placeholder.png'
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
        ProjectService.findAll({page_size: 7}).then(response => {
            this.projectPaginate = response || {};
            this.isLoadingProject = false;
        }).catch(e => {
            this.isLoadingProject = false;
        });

        PostService.findAll({page_size: 3}).then(response => {
            this.posts = response.data || [];
            this.isLoadingBlog = false;
        }).catch(e => {
            this.isLoadingBlog = false;
        });

        SliderService.findAll().then(response => {
            this.sliders = response || [];
            this.isLoadingSlider = false;
        }).catch(e => {
            this.isLoadingSlider = false;
        });

        this.timer = setInterval(() => {
            if (!this.isLoadingProject) {
                ProjectService.findRandom().then(response => {
                    this.projectPaginate.data = response || {};
                    this.isLoadingProject = false;
                }).catch(e => {
                    this.isLoadingProject = false;
                });
            }
        }, 6000);

        const script_url = window.location.protocol + "//" + window.location.host + '/assets/js/theme.init.js';
        const script = document.createElement("script");
        script.setAttribute(
            "src",
            script_url
        );
        document.head.appendChild(script);

        // setTimeout(() => {
        //     ProjectCategoryService.findAll().then(response => {
        //         let projectCategories = response || [];
        //         this.$store.commit("setProjectCategories", projectCategories);
        //     }).catch(e => {
        //     });
        //     ProjectService.findAll().then(response => {
        //         let projectPaginate = response || {};
        //         this.$store.commit("setProjectPaginate", projectPaginate);
        //     }).catch(e => {
        //     });
        //     ProjectFieldService.findAll().then(response => {
        //         let projectFields = response || [];
        //         this.$store.commit("setProjectFields", projectFields);
        //     }).catch(e => {
        //     });
        //     ProjectAreaService.findAll().then(response => {
        //         let projectAreas = response || [];
        //         this.$store.commit("setProjectAreas", projectAreas);
        //     }).catch(e => {
        //     });
        // }, 1000);
    },
    beforeDestroy() {
        clearInterval(this.timer);
        this.timer = null;
    }
}
</script>
