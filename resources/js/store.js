import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        object: {
            totalPosts: 0,
            totalUncategoryPosts: 0,
            recentPosts: [],
            postCategories: [],
            projectPaginate: {
                data: []
            },
            projectCategories: [],
            projectFields: [],
            projectAreas: [],
            services: {
                vi:{
                    1: {
                        id: 1,
                        icon: "/assets/img/business-image/services/horizontal-distribute-center.svg",
                        shortTitle: "Tư vấn thiết kế Cơ điện",
                        title: "Tư vấn thiết kế Cơ điện",
                        excerpt: "Hạng mục cơ điện là một hệ thống hoàn chỉnh và đồng bộ, bao gồm nhiều thành phần hệ thống bên trong như: Hệ thống điện, điện phụ trợ, hệ thống điều hòa thông gió...",
                        content: "Hạng mục cơ điện là một hệ thống hoàn chỉnh và đồng bộ, bao gồm nhiều thành phần hệ thống bên trong như: Hệ thống điện, điện phụ trợ, hệ thống điều hòa thông gió, hệ thống cấp thoát nước ... Vì vậy, để có thể thiết kế một hệ thống cơ điện hoàn chỉnh, người thiết kế cần hiểu sâu và bao quát nhiều hệ thống, để có thể tối ưu hóa thiết kế, giúp hệ thống hoạt động hiệu quả và bền vững."
                    },
                    2: {
                        id: 2,
                        icon: "/assets/img/business-image/services/indent-firstline.svg",
                        shortTitle: "Tư vấn thiết kế Phòng cháy chữa cháy",
                        title: "Tư vấn thiết kế Phòng cháy chữa cháy",
                        excerpt: "Phòng cháy - chữa cháy (fire life safety) là một giải pháp tổng thể bao gồm nhiều hạng mục khác nhau, không chỉ gói gọn trong hệ thống báo cháy và chữa cháy...",
                        content: "Phòng cháy - chữa cháy (fire life safety) là một giải pháp tổng thể bao gồm nhiều hạng mục khác nhau, không chỉ gói gọn trong hệ thống báo cháy và chữa cháy, như các quan niệm truyền thống. Một hệ thống PCCC hoàn chỉnh còn bao gồm các giải pháp thiết kế về kiến trúc (đường thoát nạn, ngăn chia khoang cháy, giao thông tiếp cận đám cháy...), các giải pháp về kiểm soát khói... Ngoài ra, việc tham chiếu các tiêu chuẩn quốc tế uy tin (NFPA, IBC...) cũng hết sức quan trọng trong việc nâng cao độ tin cậy và an toàn cho dự án"
                    },
                    3: {
                        id: 3,
                        icon: "/assets/img/business-image/services/transform-bezier.svg",
                        shortTitle: "Triển khai mô hình BIM REVIT MEP",
                        title: "Triển khai mô hình BIM REVIT MEP",
                        excerpt: "Để hoàn thiện một đồ án thiết kế, thì công cụ thiết kế đóng một vai trò hết sức quan trọng, mà ở đó, trong lĩnh vực xây dựng, BIM Revit là một trong những...",
                        content: "Để hoàn thiện một đồ án thiết kế, thì công cụ thiết kế đóng một vai trò hết sức quan trọng, mà ở đó, trong lĩnh vực xây dựng, BIM Revit là một trong những công cụ kiện toàn trong việc triển khai hồ sơ thiết kế. Đối với lĩnh vực cơ điện, việc áp dụng triệt để BIM Revit sẽ đem tới rất nhiều ưu thế cho dự án, vì đặc điểm phức tạp và thống nhất của hệ thông cơ điện, như: việc thống kê khối lượng, tránh va chạm không cần thiết, tối ưu không gian thiết kế, bổ sung thông tin về vận hành, bảo trì, tuổi thọ của các thiết bị."
                    },
                    4: {
                        id: 4,
                        icon: "/assets/img/business-image/services/magnifier.svg",
                        shortTitle: "Tư vấn thẩm tra Thiết kế cơ điện",
                        title: "Tư vấn thẩm tra Thiết kế cơ điện",
                        excerpt: "Một thiết kế dù hoàn thiện tới đâu cũng không thể tránh được các thiếu sót không mong muốn, các thiếu sót có thể đến từ việc thể hiện hồ sơ...",
                        content: "Một thiết kế dù hoàn thiện tới đâu cũng không thể tránh được các thiếu sót không mong muốn, các thiếu sót có thể đến từ việc thể hiện hồ sơ, hoặc đến từ các quan điểm thiết kế chủ quan của người thiết kế. Vì vậy, một thiết kế hoàn chỉnh, luôn cần tới các ý kiến phản biện từ đơn vị thẩm tra thiết kế, để giúp cho dự án trở nên hoàn hảo hơn, phù hợp với các quy chuẩn, tiêu chuẩn hiện hành, tránh được các sai lầm không đáng có trong quá trình triển khai thiết kế."
                    }
                },
                "en": {
                    "1": {
                        "id": 1,
                        "icon": "/assets/img/business-image/services/horizontal-distribute-center.svg",
                        "shortTitle": "Electromechanical design consulting",
                        "title": "Electromechanical design consulting",
                        "excerpt": "The electromechanical item is a complete and synchronous system, including many internal system components such as electrical system, auxiliary electricity, air-conditioning system...",
                        "content": "The electromechanical item is a complete and synchronous system, including many internal system components such as electrical system, auxiliary electricity, air-conditioning system, ventilation system, water supply and drainage system... Therefore, "
                    },
                    "2": {
                        "id": 2,
                        "icon": "/assets/img/business-image/services/indent-firstline.svg",
                        "shortTitle": "Design consultancy for fire prevention and fighting",
                        "title": "Design consultancy for fire prevention and fighting",
                        "excerpt": "Fire prevention and fighting (fire life safety) is a total solution that includes many different items, not only encapsulated in fire alarm and fire fighting systems...",
                        "content": "Fire prevention and fighting (fire life safety) is a total solution that includes many different items, not only encapsulated in fire alarm and fire fighting systems, as traditional concepts. "
                    },
                    "3": {
                        "id": 3,
                        "icon": "/assets/img/business-image/services/transform-bezier.svg",
                        "shortTitle": "Deploy BIM model REVIT MEP",
                        "title": "Deploy BIM model REVIT MEP",
                        "excerpt": "To complete a design project, the design tool plays a very important role, in which, in the field of construction, BIM Revit is one of the...",
                        "content": "To complete a design project, design tools play a very important role, in which, in the field of construction, BIM Revit is one of the perfect tools in the implementation of design documents. "
                    },
                    "4": {
                        "id": 4,
                        "icon": "/assets/img/business-image/services/magnifier.svg",
                        "shortTitle": "Consultancy and verification of electromechanical design",
                        "title": "Consultancy and verification of electromechanical design",
                        "excerpt": "No matter how perfect a design is, it is impossible to avoid unwanted shortcomings, shortcomings that can come from the presentation of the profile...",
                        "content": "No matter how perfect a design is, it is impossible to avoid unwanted shortcomings, which may come from the presentation of the profile, or from the subjective design views of the designer. "
                    }
                },
                "cn": {
                    "1": {
                        "id": 1,
                        "icon": "/assets/img/business-image/services/horizontal-distribute-center.svg",
                        "shortTitle": "机电设计咨询",
                        "title": "机电设计咨询",
                        "excerpt": "机电项目是一个完整的同步系统，包括许多内部系统组成部分，如电气系统、辅助电力、空调系统……",
                        "content": "机电项目是一个完整同步的系统，包括电气系统、辅助用电、空调系统、通风系统、给排水系统等诸多内部系统组成部分……因此， "
                    },
                    "2": {
                        "id": 2,
                        "icon": "/assets/img/business-image/services/indent-firstline.svg",
                        "shortTitle": "消防设计咨询",
                        "title": "消防设计咨询",
                        "excerpt": "防火和灭火（消防生命安全）是一个包括许多不同项目的整体解决方案，不仅封装在火灾报警和消防系统中......",
                        "content": "防火和灭火（火灾生命安全）是一个包括许多不同项目的整体解决方案，而不是像传统概念那样仅仅封装在火灾报警和消防系统中。 "
                    },
                    "3": {
                        "id": 3,
                        "icon": "/assets/img/business-image/services/transform-bezier.svg",
                        "shortTitle": "部署 BIM 模型 REVIT MEP",
                        "title": "部署 BIM 模型 REVIT MEP",
                        "excerpt": "要完成一个设计项目，设计工具起着非常重要的作用，其中，在建筑领域，BIM Revit是...",
                        "content": "要完成一个设计项目，设计工具起着非常重要的作用，其中，在建筑领域，BIM Revit是执行设计文件的完美工具之一。 "
                    },
                    "4": {
                        "id": 4,
                        "icon": "/assets/img/business-image/services/magnifier.svg",
                        "shortTitle": "机电设计咨询与验证",
                        "title": "机电设计咨询与验证",
                        "excerpt": "无论设计多么完美，都无法避免不必要的缺点，这些缺点可能来自配置文件的呈现......",
                        "content": "无论多么完美的设计，都无法避免不必要的缺点，这些缺点可能来自于轮廓的呈现，也可能来自于设计师的主观设计观点。 "
                    }
                },
                "jp": {
                    "1": {
                        "id": 1,
                        "icon": "/assets/img/business-image/services/horizontal-distribute-center.svg",
                        "shortTitle": "電気機械設計コンサルティング",
                        "title": "電気機械設計コンサルティング",
                        "excerpt": "電気機械部品は、電気システム、補助電気、空調システムなどの多くの内部システム コンポーネントを含む完全な同期システムです。",
                        "content": "電気機械部品は、電気システム、補助電気、空調システム、換気システム、給水および排水システムなどの多くの内部システム コンポーネントを含む完全な同期システムです。したがって、 "
                    },
                    "2": {
                        "id": 2,
                        "icon": "/assets/img/business-image/services/indent-firstline.svg",
                        "shortTitle": "防火・防火設計コンサルティング",
                        "title": "防火・防火設計コンサルティング",
                        "excerpt": "防火・防火（防火・人命安全）は、火災報知器や消防設備だけでなく、さまざまな項目を含むトータルソリューションです...",
                        "content": "防火・防火（ファイヤー・ライフ・セイフティ）は、従来の概念である火災報知器や消火設備だけにとどまらず、さまざまな項目を含むトータルソリューションです。 "
                    },
                    "3": {
                        "id": 3,
                        "icon": "/assets/img/business-image/services/transform-bezier.svg",
                        "shortTitle": "BIM モデルをデプロイする REVIT MEP",
                        "title": "BIM モデルをデプロイする REVIT MEP",
                        "excerpt": "設計プロジェクトを完成させるために、設計ツールは非常に重要な役割を果たします。建設の分野では、BIM Revit は...",
                        "content": "設計プロジェクトを完了するには、設計ツールが非常に重要な役割を果たします。建設の分野では、BIM Revit は設計ドキュメントの実装に最適なツールの 1 つです。 "
                    },
                    "4": {
                        "id": 4,
                        "icon": "/assets/img/business-image/services/magnifier.svg",
                        "shortTitle": "電気機械設計のコンサルティングと検証",
                        "title": "電気機械設計のコンサルティングと検証",
                        "excerpt": "どんなに完璧なデザインであっても、望ましくない欠点、プロファイルの表示に起因する欠点を回避することは不可能です...",
                        "content": "どんなに完璧なデザインであっても、プロファイルの表示やデザイナーの主観的なデザイン ビューに起因する望ましくない欠点を回避することは不可能です。 "
                    }
                },
                "kr": {
                    "1": {
                        "id": 1,
                        "icon": "/assets/img/business-image/services/horizontal-distribute-center.svg",
                        "shortTitle": "전기 기계 설계 컨설팅",
                        "title": "전기 기계 설계 컨설팅",
                        "excerpt": "전기 기계 항목은 전기 시스템, 보조 전기, 에어컨 시스템과 같은 많은 내부 시스템 구성 요소를 포함하는 완전하고 동기식 시스템입니다...",
                        "content": "전기 기계 항목은 전기 시스템, 보조 전기, 에어컨 시스템, 환기 시스템, 급수 및 배수 시스템과 같은 많은 내부 시스템 구성 요소를 포함하는 완전하고 동기식 시스템입니다. 따라서, "
                    },
                    "2": {
                        "id": 2,
                        "icon": "/assets/img/business-image/services/indent-firstline.svg",
                        "shortTitle": "화재 예방 및 진화를 위한 디자인 컨설팅",
                        "title": "화재 예방 및 진화를 위한 디자인 컨설팅",
                        "excerpt": "화재 예방 및 진압(화재 생활 안전)은 화재 경보기 및 소방 시스템에 캡슐화될 뿐만 아니라 다양한 항목을 포함하는 토탈 솔루션입니다...",
                        "content": "화재 예방 및 진압(화재 생명 안전)은 전통적인 개념으로 화재 경보기 및 소방 시스템에 캡슐화된 것뿐만 아니라 다양한 항목을 포함하는 토탈 솔루션입니다. "
                    },
                    "3": {
                        "id": 3,
                        "icon": "/assets/img/business-image/services/transform-bezier.svg",
                        "shortTitle": "BIM 모델 REVIT MEP 배포",
                        "title": "BIM 모델 REVIT MEP 배포",
                        "excerpt": "설계 프로젝트를 완료하기 위해 설계 도구는 매우 중요한 역할을 합니다. 건설 분야에서 BIM Revit은...",
                        "content": "설계 프로젝트를 완료하기 위해 설계 도구는 매우 중요한 역할을 합니다. 건설 분야에서 BIM Revit은 설계 문서 구현에 있어 완벽한 도구 중 하나입니다. "
                    },
                    "4": {
                        "id": 4,
                        "icon": "/assets/img/business-image/services/magnifier.svg",
                        "shortTitle": "전기 기계 설계 컨설팅 및 검증",
                        "title": "전기 기계 설계 컨설팅 및 검증",
                        "excerpt": "아무리 완벽한 디자인이라도 프로파일의 표현에서 올 수 있는 원치 않는 단점, 단점을 피할 수는 없습니다...",
                        "content": "디자인이 아무리 완벽해도 프로필의 표현이나 디자이너의 주관적인 디자인 관점에서 오는 원치 않는 단점을 피할 수는 없습니다. "
                    }
                }
            },
            isShowMenu: false,
            isShowServiceMenu: false,
            isShowBIMMenu: false,
            isShowPartnerMenu: false,
            locale: null,
        }
    },
    getters: {
        totalPosts: state => state.object.totalPosts,
        totalUncategoryPosts: state => state.object.totalUncategoryPosts,
        recentPosts: state => state.object.recentPosts,
        postCategories: state => state.object.postCategories,
        projectPaginate: state => state.object.projectPaginate,
        projectCategories: state => state.object.projectCategories,
        projectFields: state => state.object.projectFields,
        projectAreas: state => state.object.projectAreas,
        services: state => state.object.services,
        isShowMenu: state => state.object.isShowMenu,
        isShowServiceMenu: state => state.object.isShowServiceMenu,
        isShowBIMMenu: state => state.object.isShowBIMMenu,
        isShowPartnerMenu: state => state.object.isShowPartnerMenu,
        locale: state => state.object.locale,
    },
    mutations: {
        setTotalPosts(state, newValue) {
            state.object.totalPosts = newValue;
        },
        setTotalUncategoryPosts(state, newValue) {
            state.object.totalUncategoryPosts = newValue;
        },
        setRecentPosts(state, newValue) {
            state.object.recentPosts = newValue;
        },
        setPostCategories(state, newValue) {
            state.object.postCategories = newValue;
        },
        setProjectPaginate(state, newValue) {
            state.object.projectPaginate = newValue;
        },
        setProjectCategories(state, newValue) {
            state.object.projectCategories = newValue;
        },
        setProjectFields(state, newValue) {
            state.object.projectFields = newValue;
        },
        setProjectAreas(state, newValue) {
            state.object.projectAreas = newValue;
        },
        setIsShowMenu(state, newValue) {
            state.object.isShowMenu = newValue;
        },
        setIsShowServiceMenu(state, newValue) {
            state.object.isShowServiceMenu = newValue;
        },
        setIsShowBIMMenu(state, newValue) {
            state.object.isShowBIMMenu = newValue;
        },
        setIsShowPartnerMenu(state, newValue) {
            state.object.isShowPartnerMenu = newValue;
        },
        setLocale(state, newValue) {
            state.object.locale = newValue;
        }
    }
})
