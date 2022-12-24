import http from "../http-common";

const PREFIX_URL = "/rest/project/"

class ProjectService {
    findAll(param, page, alert) {
        let url = PREFIX_URL + "find-all";
        if (page != undefined) url += "?page=" + page
        return http.get(url, {
            params: {
                param: JSON.stringify(param)
            },
            alert: alert
        });
    }

    detail(id, alert) {
        let url = PREFIX_URL + "detail?id=" + id;
        return http.get(url, {alert: alert});
    }
}

export default new ProjectService();
