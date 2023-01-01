import http from "../http-common";
import base from "../base";

const PREFIX_URL = "/rest/project/"

class ProjectService {
    findAll(param, alert) {
        let url = PREFIX_URL + "find-all";
        if (param != undefined) url = base.object2Param(url, param);
        return http.get(url, alert);
    }

    findRandom(alert) {
        let url = PREFIX_URL + "find-random";
        return http.get(url, {
            alert: alert
        });
    }

    detail(id, alert) {
        let url = PREFIX_URL + "detail?id=" + id;
        return http.get(url, {alert: alert});
    }
}

export default new ProjectService();
