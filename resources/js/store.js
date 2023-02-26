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
                },
                // 5: {
                //     id: 5,
                //     icon: "/assets/img/business-image/services/indent-firstline.svg",
                //     shortTitle: "Tư vấn thiết kế hệ thống điều hòa không khí, thông gió",
                //     title: "Tư vấn thiết kế hệ thống điều hòa không khí, thông gió",
                //     excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia.",
                //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia."
                // },
                // 6: {
                //     id: 6,
                //     icon: "/assets/img/business-image/services/transform-bezier.svg",
                //     shortTitle: "Thiết kế xây dựng mô hình Bim – Revit",
                //     title: "Thiết kế xây dựng mô hình Bim – Revit",
                //     excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia.",
                //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia."
                // },
                // 7: {
                //     id: 7,
                //     icon: "/assets/img/business-image/services/share.svg",
                //     shortTitle: "Tư vấn chuyển giao công nghệ",
                //     title: "Tư vấn chuyển giao công nghệ",
                //     excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia.",
                //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia."
                // },
                // 8: {
                //     id: 8,
                //     icon: "/assets/img/business-image/services/todolist-pen.svg",
                //     shortTitle: "Quản lý dự án",
                //     title: "Quản lý dự án",
                //     excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia.",
                //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia."
                // },
                // 9: {
                //     id: 9,
                //     icon: "/assets/img/business-image/services/magnifier.svg",
                //     shortTitle: "Giám sát thi công",
                //     title: "Giám sát thi công",
                //     excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia.",
                //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia."
                // },
                // 10: {
                //     id: 10,
                //     icon: "/assets/img/business-image/services/square-check.svg",
                //     shortTitle: "Thẩm định thiết kế, kiểm định chất lượng công trình",
                //     title: "Thẩm định thiết kế, kiểm định chất lượng công trình",
                //     excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia.",
                //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia."
                // },
            },
            isShowMenu:false,
            isShowServiceMenu:false,
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
        isShowServiceMenu: state => state.object.isShowServiceMenu
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
        }
    }
})
